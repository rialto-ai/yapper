// Hourly ranking recompute. Faster on its own than waiting for an ingest
// cycle, and useful for early days when posts are sparse.

import { NextResponse } from "next/server";
import { recomputeRankings } from "@/lib/x/rank";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function GET(req: Request) {
  const auth = req.headers.get("authorization");
  if (process.env.CRON_SECRET && auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const result = await recomputeRankings();
  return NextResponse.json({ timestamp: new Date().toISOString(), ...result });
}
