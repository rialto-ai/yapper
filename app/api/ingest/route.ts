// Ingestion status. Reports the current data source, live row counts when
// DATABASE_URL is wired up, and the most recent ingestion run.

import { NextResponse } from "next/server";
import { desc, sql } from "drizzle-orm";
import { getDataSource } from "@/lib/data";
import { hasDb, db } from "@/lib/db/client";
import { accounts, ingestionRuns, narratives, posts } from "@/lib/db/schema";
import { ACCOUNTS, NARRATIVES } from "@/lib/mock";

export const dynamic = "force-dynamic";

export async function GET() {
  const source = getDataSource();

  const base = {
    source,
    pipelines: {
      embed:    { model: "text-embedding-3-small", store: "pgvector", queue: "vercel-cron" },
      classify: {
        method: process.env.OPENAI_API_KEY ? "embeddings + keyword fallback" : "keyword v0",
        labels: NARRATIVES.length,
      },
      sentiment:{ model: "lexicon v0",  buckets: ["bullish", "bearish", "neutral", "technical", "speculative"] },
      rank:     { engine: "rialto-rank v0.1",  cadence_minutes: 15 },
    },
    notes: source === "mock"
      ? "Set DATABASE_URL + X_API_BEARER to switch to live ingestion. See lib/x/ingest.ts."
      : "Live source. Cron is /api/cron/ingest (every 15m) and /api/cron/rank (hourly).",
  };

  if (!hasDb()) {
    return NextResponse.json({
      ...base,
      accounts_tracked:   ACCOUNTS.length,
      narratives_tracked: NARRATIVES.length,
      last_run: null,
    });
  }

  try {
    const d = db();
    const [counts] = await d.execute<{ accounts: number; posts: number; narratives: number }>(sql`
      SELECT
        (SELECT COUNT(*)::int FROM accounts   WHERE tracked = true)            AS accounts,
        (SELECT COUNT(*)::int FROM posts      WHERE posted_at > NOW() - INTERVAL '24 hours') AS posts,
        (SELECT COUNT(*)::int FROM narratives WHERE active = true)             AS narratives
    `).then((r) => r.rows);

    const [lastRun] = await d
      .select()
      .from(ingestionRuns)
      .orderBy(desc(ingestionRuns.startedAt))
      .limit(1);

    return NextResponse.json({
      ...base,
      accounts_tracked:   counts?.accounts ?? 0,
      posts_24h:          counts?.posts ?? 0,
      narratives_tracked: counts?.narratives ?? 0,
      last_run: lastRun ?? null,
    });
  } catch (e) {
    return NextResponse.json({
      ...base,
      error: (e as Error).message,
    }, { status: 500 });
  }
}
