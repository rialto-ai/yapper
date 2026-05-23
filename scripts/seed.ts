// One-shot DB seeder. Idempotent. Reads the same deterministic mock data the
// frontend uses and upserts it into the live tables.
//
//   pnpm db:push   # apply schema
//   pnpm db:seed   # populate narratives + accounts + one snapshot per account

import "dotenv/config";
import { db, hasDb } from "../lib/db/client";
import {
  accountSnapshots,
  accounts,
  narratives,
} from "../lib/db/schema";
import {
  ACCOUNTS,
  NARRATIVES,
} from "../lib/mock";

async function main() {
  if (!hasDb()) {
    console.error("DATABASE_URL not set. Configure .env.local first.");
    process.exit(1);
  }
  const d = db();

  console.log(`seeding narratives (${NARRATIVES.length})…`);
  for (const n of NARRATIVES) {
    await d
      .insert(narratives)
      .values({
        id:       n.id,
        label:    n.label,
        color:    n.color,
        keywords: keywordsFor(n.id),
        active:   true,
      })
      .onConflictDoUpdate({
        target: narratives.id,
        set:    { label: n.label, color: n.color, keywords: keywordsFor(n.id), active: true },
      });
  }

  console.log(`seeding accounts (${ACCOUNTS.length})…`);
  for (const a of ACCOUNTS) {
    const inserted = await d
      .insert(accounts)
      .values({
        xUserId:          `mock-${a.handle.replace(/^@/, "")}`,
        handle:           a.handle,
        name:             a.name,
        bio:              a.bio,
        verified:         a.verified,
        followers:        a.followers,
        following:        a.following,
        postsCount:       a.posts30d,
        category:         a.category,
        primaryNarrative: a.narrative,
        tracked:          true,
      })
      .onConflictDoUpdate({
        target: accounts.handle,
        set: {
          name:             a.name,
          bio:              a.bio,
          verified:         a.verified,
          followers:        a.followers,
          following:        a.following,
          postsCount:       a.posts30d,
          category:         a.category,
          primaryNarrative: a.narrative,
          updatedAt:        new Date(),
        },
      })
      .returning({ id: accounts.id });

    const accountId = inserted[0].id;
    await d.insert(accountSnapshots).values({
      accountId,
      followers:   a.followers,
      signal:      a.signal,
      velocity:    a.velocity,
      delta24h:    a.delta,
      growth7d:    a.growth7d,
      engagement:  a.engagement,
      reachEff:    a.reachEfficiency,
    });
  }

  console.log("done.");
}

function keywordsFor(narrativeId: string): string[] {
  const map: Record<string, string[]> = {
    "private-inference":     ["private inference", "verifiable inference", "tee", "confidential compute"],
    "inference-markets":     ["inference market", "per-token pricing", "model routing"],
    "agent-infrastructure":  ["agentic", "agent loop", "agent runtime", "tool use"],
    "decentralized-compute": ["decentralized compute", "gpu network", "verifiable settlement"],
    "ai-sovereignty":        ["ai sovereignty", "sovereign compute", "open ai economy"],
    "open-source-models":    ["open-source model", "open weight", "fine-tune"],
    "cypherpunk-ai":         ["cypherpunk ai", "uncensored", "privacy stack"],
  };
  return map[narrativeId] ?? [];
}

main().then(
  () => process.exit(0),
  (e) => { console.error(e); process.exit(1); },
);
