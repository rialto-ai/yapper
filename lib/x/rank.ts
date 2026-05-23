// Signal Score v0.
//
// Inputs (all per-account, computed from posts + snapshots):
//   - engagement quality (log-scaled median engagement / post)
//   - posting consistency (posts in last 30d / 30)
//   - narrative concentration (max narrative share)
//   - reach efficiency (engagement / followers)
//   - growth velocity (followers delta 7d / followers)
//
// Anti-gaming: caps on follower-count contribution, log on engagement so a 10x
// follower count gives <2x score boost.
//
// Output: a 0-100 score, stored alongside per-window deltas + velocity in
// account_snapshots.

import { and, desc, eq, gte, sql } from "drizzle-orm";
import { db, hasDb } from "../db/client";
import { accountSnapshots, accounts, posts } from "../db/schema";

const WEIGHTS = {
  engagement: 0.32,
  consistency: 0.18,
  narrativeConc: 0.14,
  reachEff: 0.20,
  growth: 0.16,
};

export type RankResult = {
  ok: boolean;
  reason?: string;
  accounts: number;
  snapshots: number;
};

export async function recomputeRankings(): Promise<RankResult> {
  if (!hasDb()) return { ok: false, reason: "DATABASE_URL not set", accounts: 0, snapshots: 0 };
  const d = db();

  // Compute everything per-account in one query for efficiency.
  const rows = await d.execute<{
    account_id: number;
    followers: number;
    posts_30d: number;
    median_eng: number;
    top_narrative_share: number;
  }>(sql`
    WITH per_account AS (
      SELECT
        a.id AS account_id,
        a.followers,
        COUNT(p.id) FILTER (WHERE p.posted_at > NOW() - INTERVAL '30 days') AS posts_30d,
        COALESCE(
          percentile_cont(0.5) WITHIN GROUP (
            ORDER BY (p.like_count + p.reply_count + p.repost_count + p.quote_count)
          ) FILTER (WHERE p.posted_at > NOW() - INTERVAL '30 days'),
          0
        ) AS median_eng,
        COALESCE(
          MAX(narrative_count)::float / NULLIF(SUM(narrative_count), 0),
          0
        ) AS top_narrative_share
      FROM accounts a
      LEFT JOIN posts p ON p.account_id = a.id
      LEFT JOIN LATERAL (
        SELECT narrative_id, COUNT(*) AS narrative_count
        FROM posts
        WHERE account_id = a.id
          AND posted_at > NOW() - INTERVAL '30 days'
          AND narrative_id IS NOT NULL
        GROUP BY narrative_id
      ) np ON true
      WHERE a.tracked = true
      GROUP BY a.id, a.followers
    )
    SELECT * FROM per_account;
  `);

  if (rows.rows.length === 0) {
    return { ok: true, accounts: 0, snapshots: 0 };
  }

  // Find prior snapshots per account for delta calculation.
  const prior = await d
    .select({
      accountId: accountSnapshots.accountId,
      followers: accountSnapshots.followers,
      signal:    accountSnapshots.signal,
      capturedAt: accountSnapshots.capturedAt,
    })
    .from(accountSnapshots)
    .orderBy(desc(accountSnapshots.capturedAt))
    .limit(rows.rows.length * 5);

  const lastByAccount = new Map<number, { signal: number; followers: number; capturedAt: Date }>();
  const weekByAccount = new Map<number, { followers: number; capturedAt: Date }>();
  const now = Date.now();
  for (const p of prior) {
    if (!lastByAccount.has(p.accountId)) {
      lastByAccount.set(p.accountId, { signal: p.signal, followers: p.followers, capturedAt: p.capturedAt });
    }
    const ageMs = now - p.capturedAt.getTime();
    if (ageMs >= 6 * 24 * 3600 * 1000 && !weekByAccount.has(p.accountId)) {
      weekByAccount.set(p.accountId, { followers: p.followers, capturedAt: p.capturedAt });
    }
  }

  let inserted = 0;
  const snapshotValues: typeof accountSnapshots.$inferInsert[] = [];

  for (const r of rows.rows) {
    const followers = Number(r.followers ?? 0);
    const posts30d = Number(r.posts_30d ?? 0);
    const medianEng = Number(r.median_eng ?? 0);
    const narrativeShare = Math.max(0, Math.min(1, Number(r.top_narrative_share ?? 0)));

    const engagementScore = followers > 0
      ? Math.min(100, Math.log10(Math.max(1, medianEng)) / Math.log10(Math.max(10, followers)) * 100)
      : Math.min(100, Math.log10(Math.max(1, medianEng)) * 35);

    const consistencyScore = Math.min(100, (posts30d / 30) * 100);

    const concentrationScore = narrativeShare * 100;

    const reachEff = followers > 0 ? Math.min(100, (medianEng / followers) * 200) : 0;

    const last = lastByAccount.get(Number(r.account_id));
    const week = weekByAccount.get(Number(r.account_id));
    const growth7d = week && week.followers > 0
      ? ((followers - week.followers) / week.followers) * 100
      : 0;
    const growthScore = Math.min(100, Math.max(0, growth7d) * 4);

    const signal =
      engagementScore  * WEIGHTS.engagement +
      consistencyScore * WEIGHTS.consistency +
      concentrationScore * WEIGHTS.narrativeConc +
      reachEff         * WEIGHTS.reachEff +
      growthScore      * WEIGHTS.growth;

    const velocity =
      consistencyScore * 0.4 +
      (last ? Math.min(100, Math.max(0, (signal - last.signal) * 20)) : 0) * 0.6;

    const delta24h = last ? signal - last.signal : 0;

    snapshotValues.push({
      accountId:   Number(r.account_id),
      followers,
      signal:      Number(signal.toFixed(2)),
      velocity:    Number(velocity.toFixed(2)),
      delta24h:    Number(delta24h.toFixed(2)),
      growth7d:    Number(growth7d.toFixed(2)),
      engagement:  Number(medianEng.toFixed(0)),
      reachEff:    Number(reachEff.toFixed(2)),
    });
  }

  if (snapshotValues.length > 0) {
    await d.insert(accountSnapshots).values(snapshotValues);
    inserted = snapshotValues.length;
  }

  return { ok: true, accounts: rows.rows.length, snapshots: inserted };
}
