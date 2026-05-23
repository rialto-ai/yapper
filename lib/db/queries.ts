// Live-DB versions of the lib/data.ts accessors.
//
// These return the same shapes as the mock module so lib/data.ts can dispatch
// freely. They read from the latest snapshot per account, so leaderboards
// reflect the most recent ranking job.

import { and, desc, eq, gte, isNotNull, sql } from "drizzle-orm";
import { db } from "./client";
import {
  accountSnapshots,
  accounts,
  narrativeBuckets,
  narratives,
  posts,
} from "./schema";
import type { Account, FeedItem, GraphEdge, GraphNode, Narrative } from "../mock";

// Latest snapshot per account (window function).
const latestSnapshots = sql`
  SELECT DISTINCT ON (account_id) *
  FROM account_snapshots
  ORDER BY account_id, captured_at DESC
`;

function toFrontendAccount(row: {
  id: number;
  handle: string;
  name: string;
  bio: string;
  verified: boolean;
  followers: number;
  following: number;
  postsCount: number;
  category: string;
  primaryNarrative: string | null;
  signal: number | null;
  velocity: number | null;
  delta24h: number | null;
  growth7d: number | null;
  engagement: number | null;
  reachEff: number | null;
  postedAt?: Date | null;
}): Account {
  return {
    handle:           row.handle,
    name:             row.name,
    bio:              row.bio ?? "",
    signal:           row.signal ?? 0,
    delta:            row.delta24h ?? 0,
    velocity:         row.velocity ?? 0,
    growth7d:         row.growth7d ?? 0,
    followers:        row.followers,
    following:        row.following,
    posts30d:         row.postsCount,
    engagement:       row.engagement ?? 0,
    reachEfficiency:  Math.round(row.reachEff ?? 0),
    narrative:        row.primaryNarrative ?? "private-inference",
    narratives:       [{ id: row.primaryNarrative ?? "private-inference", weight: 0.6 }],
    category:         (row.category as Account["category"]) ?? "researcher",
    sparkline:        [],
    growthSeries:     [],
    joinedDays:       0,
    verified:         !!row.verified,
  };
}

export async function getNarrativesFromDb(): Promise<Narrative[]> {
  const d = db();
  const rows = await d.select().from(narratives).where(eq(narratives.active, true));
  // Hydrate with per-narrative mention counts + a coarse velocity series.
  const since24h = new Date(Date.now() - 24 * 3600 * 1000);
  const counts = await d
    .select({
      narrativeId: posts.narrativeId,
      mentions24h: sql<number>`count(*)::int`,
    })
    .from(posts)
    .where(and(gte(posts.postedAt, since24h), isNotNull(posts.narrativeId)))
    .groupBy(posts.narrativeId);
  const countMap = new Map(counts.map((c) => [c.narrativeId!, c.mentions24h]));

  return rows.map((r): Narrative => ({
    id:          r.id,
    label:       r.label,
    color:       r.color,
    velocity:    Math.min(100, Math.round((countMap.get(r.id) ?? 0) / 50)),
    mentions24h: countMap.get(r.id) ?? 0,
    delta24h:    0,
    series:      Array.from({ length: 48 }, (_, t) => ({ t, v: 0 })),
  }));
}

export async function getAccountsFromDb(opts?: {
  category?: string;
  sort?: "signal" | "velocity" | "growth" | "engagement";
  limit?: number;
}): Promise<Account[]> {
  const d = db();
  const rows = await d.execute<{
    id: number;
    handle: string;
    name: string;
    bio: string;
    verified: boolean;
    followers: number;
    following: number;
    posts_count: number;
    category: string;
    primary_narrative: string | null;
    signal: number | null;
    velocity: number | null;
    delta_24h: number | null;
    growth_7d: number | null;
    engagement: number | null;
    reach_eff: number | null;
  }>(sql`
    SELECT a.id, a.handle, a.name, a.bio, a.verified,
           a.followers, a.following, a.posts_count, a.category, a.primary_narrative,
           s.signal, s.velocity, s.delta_24h, s.growth_7d, s.engagement, s.reach_eff
    FROM accounts a
    LEFT JOIN LATERAL (
      SELECT * FROM account_snapshots
      WHERE account_id = a.id
      ORDER BY captured_at DESC
      LIMIT 1
    ) s ON true
    WHERE a.tracked = true
    ${opts?.category ? sql`AND a.category = ${opts.category}` : sql``}
    ORDER BY
      ${opts?.sort === "velocity"   ? sql`s.velocity DESC NULLS LAST`
      : opts?.sort === "growth"     ? sql`s.growth_7d DESC NULLS LAST`
      : opts?.sort === "engagement" ? sql`s.engagement DESC NULLS LAST`
      :                               sql`s.signal DESC NULLS LAST`}
    LIMIT ${opts?.limit ?? 100};
  `);

  return rows.rows.map((r) =>
    toFrontendAccount({
      id: r.id,
      handle: r.handle,
      name: r.name,
      bio: r.bio,
      verified: r.verified,
      followers: r.followers,
      following: r.following,
      postsCount: r.posts_count,
      category: r.category,
      primaryNarrative: r.primary_narrative,
      signal: r.signal,
      velocity: r.velocity,
      delta24h: r.delta_24h,
      growth7d: r.growth_7d,
      engagement: r.engagement,
      reachEff: r.reach_eff,
    }),
  );
}

export async function getAccountFromDb(handle: string): Promise<Account | undefined> {
  const list = await getAccountsFromDb({ limit: 1000 });
  const needle = handle.startsWith("@") ? handle : `@${handle}`;
  return list.find((a) => a.handle.toLowerCase() === needle.toLowerCase());
}

export async function getFeedFromDb(limit = 30): Promise<FeedItem[]> {
  const d = db();
  const rows = await d.execute<{
    x_post_id: string;
    text: string;
    handle: string;
    name: string;
    posted_at: Date;
    like_count: number;
    reply_count: number;
    repost_count: number;
    quote_count: number;
    narrative_id: string | null;
    narrative_label: string | null;
    velocity: string | null;
  }>(sql`
    SELECT p.x_post_id, p.text, a.handle, a.name, p.posted_at,
           p.like_count, p.reply_count, p.repost_count, p.quote_count,
           p.narrative_id, n.label AS narrative_label, p.velocity
    FROM posts p
    JOIN accounts a ON a.id = p.account_id
    LEFT JOIN narratives n ON n.id = p.narrative_id
    ORDER BY p.posted_at DESC
    LIMIT ${limit};
  `);

  return rows.rows.map((r) => ({
    id:         r.x_post_id,
    handle:     r.handle,
    name:       r.name,
    ago:        ago(r.posted_at),
    text:       r.text,
    engagement: r.like_count + r.reply_count + r.repost_count + r.quote_count,
    narrative:  r.narrative_label ?? "Unclassified",
    velocity:   (r.velocity as FeedItem["velocity"]) ?? "normal",
  }));
}

function ago(d: Date): string {
  const ms = Date.now() - d.getTime();
  const m = Math.floor(ms / 60000);
  if (m < 1) return "now";
  if (m < 60) return `${m}m`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h`;
  return `${Math.floor(h / 24)}d`;
}
