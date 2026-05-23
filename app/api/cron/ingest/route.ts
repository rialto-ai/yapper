// Vercel Cron entry. Configured in vercel.json to fire every 15 minutes.
//
// Vercel sends an Authorization: Bearer <CRON_SECRET> header on cron pings.
// We reject any request that doesn't match, so the route can't be hit by
// the open internet.

import { NextResponse } from "next/server";
import { ingestRecent } from "@/lib/x/ingest";
import { recomputeRankings } from "@/lib/x/rank";

export const dynamic = "force-dynamic";
export const maxDuration = 60; // seconds; raise to 300 on Pro plan

export async function GET(req: Request) {
  const auth = req.headers.get("authorization");
  if (process.env.CRON_SECRET && auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const ingest = await ingestRecent({ maxResults: 100 });

  // Only re-rank if we actually pulled fresh posts. Re-ranking is cheap but
  // not free; skipping when there's nothing new keeps cron under timeout.
  let rank = { ok: true, accounts: 0, snapshots: 0, skipped: true } as any;
  if (ingest.ok && ingest.inserted > 0) {
    rank = await recomputeRankings();
  }

  return NextResponse.json({
    timestamp: new Date().toISOString(),
    ingest,
    rank,
  });
}
