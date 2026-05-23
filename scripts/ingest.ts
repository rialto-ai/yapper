// Manual ingestion trigger for local dev:
//   pnpm ingest
// Runs the same pipeline as /api/cron/ingest, with output to stdout so you
// can sanity-check end-to-end before relying on the cron schedule.

import "dotenv/config";
import { ingestRecent } from "../lib/x/ingest";
import { recomputeRankings } from "../lib/x/rank";

async function main() {
  console.log(JSON.stringify({ phase: "ingest", ...(await ingestRecent({ maxResults: 100 })) }, null, 2));
  console.log(JSON.stringify({ phase: "rank",   ...(await recomputeRankings()) }, null, 2));
}

main().then(
  () => process.exit(0),
  (e) => { console.error(e); process.exit(1); },
);
