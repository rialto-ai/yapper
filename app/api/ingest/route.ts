// Ingestion stub. Today this just reports source resolution + last batch.
// When X_API_BEARER is set, this is where the X v2 firehose / filtered stream
// will be polled and rows pushed into ClickHouse.

import { NextResponse } from "next/server";
import { getDataSource } from "@/lib/data";
import { ACCOUNTS, NARRATIVES } from "@/lib/mock";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    source: getDataSource(),
    accounts_tracked: ACCOUNTS.length,
    narratives_tracked: NARRATIVES.length,
    last_batch: {
      ingested_at: new Date().toISOString(),
      posts: 1320,
      replies: 4180,
      reposts: 2010,
      latency_p50_ms: 142,
      latency_p99_ms: 612,
    },
    keywords: [
      "Venice", "Venice AI", "VVV",
      "private inference", "decentralized inference",
      "inference markets", "agentic infrastructure",
      "AI sovereignty", "cypherpunk AI", "open-source models",
    ],
    pipelines: {
      embed:    { model: "text-embedding-3-small", store: "pgvector",   queue: "celery"   },
      classify: { method: "zero-shot + clustering", labels: NARRATIVES.length },
      sentiment:{ model: "fin-bert-x-crypto", buckets: ["bullish", "bearish", "neutral", "technical", "speculative"] },
      rank:     { engine: "venice-rank v0.2",  cadence_minutes: 15 },
    },
    notes:
      "Stub. Set X_API_BEARER + DATABASE_URL to wire up the live path. " +
      "See lib/data.ts for the dispatch point.",
  });
}
