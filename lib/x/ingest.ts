import { and, desc, eq, gte, sql } from "drizzle-orm";
import { db, hasDb } from "../db/client";
import { accounts, ingestionRuns, narratives, posts } from "../db/schema";
import { buildSearchQuery, classify, classifySentiment, velocityLabel } from "./classify";
import { hasXBearer, searchRecent, XApiError, type XTweet, type XUser } from "./client";

export type IngestResult = {
  ok: boolean;
  reason?: string;
  runId?: number;
  fetched: number;
  inserted: number;
  classified: number;
  accountsTouched: number;
  query?: string;
  errors: string[];
};

export async function ingestRecent({
  maxResults = 100,
}: { maxResults?: number } = {}): Promise<IngestResult> {
  const errors: string[] = [];
  if (!hasDb())      return { ok: false, reason: "DATABASE_URL not set", fetched: 0, inserted: 0, classified: 0, accountsTouched: 0, errors };
  if (!hasXBearer()) return { ok: false, reason: "X_API_BEARER not set",  fetched: 0, inserted: 0, classified: 0, accountsTouched: 0, errors };

  const d = db();
  const activeNarratives = await d.select().from(narratives).where(eq(narratives.active, true));
  if (activeNarratives.length === 0) {
    return { ok: false, reason: "no active narratives — run db:seed first", fetched: 0, inserted: 0, classified: 0, accountsTouched: 0, errors };
  }

  const query = buildSearchQuery(activeNarratives);

  // Resume from the most recent ingested tweet on this query.
  const [last] = await d
    .select({ xPostId: posts.xPostId })
    .from(posts)
    .orderBy(desc(posts.postedAt))
    .limit(1);

  const [run] = await d.insert(ingestionRuns).values({ source: "x-v2", query }).returning();

  let tweets: XTweet[] = [];
  let users: XUser[] = [];
  try {
    const r = await searchRecent({
      query,
      maxResults,
      sinceId: last?.xPostId,
    });
    tweets = r.tweets;
    users = r.users;
  } catch (e) {
    const msg =
      e instanceof XApiError
        ? `${e.status} ${e.message}${e.retryAfterSeconds ? ` (retry in ${e.retryAfterSeconds}s)` : ""}`
        : (e as Error).message;
    errors.push(msg);
    await d.update(ingestionRuns).set({ finishedAt: new Date(), errors }).where(eq(ingestionRuns.id, run.id));
    return { ok: false, reason: msg, runId: run.id, fetched: 0, inserted: 0, classified: 0, accountsTouched: 0, errors };
  }

  // Upsert accounts.
  const accountByXId = new Map<string, number>();
  for (const u of users) {
    try {
      const inserted = await d
        .insert(accounts)
        .values({
          xUserId:    u.id,
          handle:     `@${u.username}`,
          name:       u.name,
          bio:        u.description ?? "",
          verified:   !!u.verified,
          followers:  u.public_metrics?.followers_count ?? 0,
          following:  u.public_metrics?.following_count ?? 0,
          postsCount: u.public_metrics?.tweet_count ?? 0,
        })
        .onConflictDoUpdate({
          target: accounts.xUserId,
          set: {
            handle:     `@${u.username}`,
            name:       u.name,
            bio:        u.description ?? "",
            verified:   !!u.verified,
            followers:  u.public_metrics?.followers_count ?? 0,
            following:  u.public_metrics?.following_count ?? 0,
            postsCount: u.public_metrics?.tweet_count ?? 0,
            updatedAt:  new Date(),
          },
        })
        .returning({ id: accounts.id, xUserId: accounts.xUserId });
      const row = inserted[0];
      if (row) accountByXId.set(row.xUserId, row.id);
    } catch (e) {
      errors.push(`upsert account ${u.username}: ${(e as Error).message}`);
    }
  }

  // Insert posts, classifying as we go.
  let inserted = 0;
  let classified = 0;
  for (const t of tweets) {
    const accountId = accountByXId.get(t.author_id);
    if (!accountId) {
      errors.push(`tweet ${t.id} missing author ${t.author_id}`);
      continue;
    }
    const c = classify(t.text);
    const eng =
      (t.public_metrics?.like_count ?? 0) +
      (t.public_metrics?.reply_count ?? 0) +
      (t.public_metrics?.retweet_count ?? 0) +
      (t.public_metrics?.quote_count ?? 0);

    try {
      const res = await d
        .insert(posts)
        .values({
          xPostId:     t.id,
          accountId,
          text:        t.text,
          lang:        t.lang ?? "en",
          likeCount:   t.public_metrics?.like_count ?? 0,
          replyCount:  t.public_metrics?.reply_count ?? 0,
          repostCount: t.public_metrics?.retweet_count ?? 0,
          quoteCount:  t.public_metrics?.quote_count ?? 0,
          impressions: t.public_metrics?.impression_count ?? 0,
          postedAt:    new Date(t.created_at),
          narrativeId: c?.narrativeId,
          sentiment:   classifySentiment(t.text),
          // Velocity needs the account baseline; computed after insert in a later pass.
          velocity:    eng > 5000 ? "viral" : "normal",
        })
        .onConflictDoNothing({ target: posts.xPostId })
        .returning({ id: posts.id });

      if (res.length > 0) {
        inserted++;
        if (c) classified++;
      }
    } catch (e) {
      errors.push(`insert post ${t.id}: ${(e as Error).message}`);
    }
  }

  // Second pass: velocity labels against rolling account baseline.
  // Pulls the median engagement per account over last 30d. Cheap enough at this scale.
  await d.execute(sql`
    WITH baseline AS (
      SELECT account_id,
             percentile_cont(0.5) WITHIN GROUP (
               ORDER BY (like_count + reply_count + repost_count + quote_count)
             ) AS med
      FROM posts
      WHERE posted_at > NOW() - INTERVAL '30 days'
      GROUP BY account_id
    )
    UPDATE posts p
    SET velocity = CASE
      WHEN (p.like_count + p.reply_count + p.repost_count + p.quote_count) >= GREATEST(b.med * 2, 1)
        THEN 'viral'
      WHEN (p.like_count + p.reply_count + p.repost_count + p.quote_count) >= GREATEST(b.med * 1.15, 1)
        THEN 'rising'
      ELSE 'normal'
    END
    FROM baseline b
    WHERE b.account_id = p.account_id
      AND p.ingested_at > NOW() - INTERVAL '1 hour';
  `);

  await d
    .update(ingestionRuns)
    .set({
      finishedAt:      new Date(),
      postsFetched:    tweets.length,
      postsInserted:   inserted,
      postsClassified: classified,
      accountsTouched: accountByXId.size,
      errors,
    })
    .where(eq(ingestionRuns.id, run.id));

  return {
    ok: true,
    runId: run.id,
    fetched: tweets.length,
    inserted,
    classified,
    accountsTouched: accountByXId.size,
    query,
    errors,
  };
}

// Optional: pull recent tweets from every tracked account (e.g. researchers we
// monitor regardless of keyword match). Called separately from search-based.
export async function ingestTrackedAccounts(limit = 25): Promise<IngestResult> {
  if (!hasDb() || !hasXBearer()) {
    return { ok: false, reason: "missing creds", fetched: 0, inserted: 0, classified: 0, accountsTouched: 0, errors: [] };
  }
  // For now, stub: search-based ingestion covers most cases. We'll wire
  // per-account fetches when an explicit tracked list is curated.
  return { ok: true, fetched: 0, inserted: 0, classified: 0, accountsTouched: 0, errors: [`tracked-accounts ingestion not yet enabled (limit=${limit})`] };
}
