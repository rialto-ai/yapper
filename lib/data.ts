// Central data accessor. Dispatches:
//   1. If DATABASE_URL is set → live Postgres via lib/db/queries.ts
//   2. Otherwise → deterministic mock from lib/mock.ts
//
// The live path falls back to mock for any shape the DB doesn't fill (e.g.
// per-account sparkline series, growth series) so the UI keeps working while
// historical data accumulates.

import {
  ACCOUNTS,
  FEED,
  NARRATIVES,
  TRENDING_ACCOUNTS,
  buildGraph,
  buildHeatmap,
  buildMentionsSeries,
  findAccount,
  similarAccounts,
  topPostsFor,
  type Account,
  type FeedItem,
  type GraphEdge,
  type GraphNode,
  type Narrative,
} from "./mock";
import { hasDb } from "./db/client";
import {
  getAccountsFromDb,
  getAccountFromDb,
  getFeedFromDb,
  getNarrativesFromDb,
} from "./db/queries";

export type DataSource = "mock" | "live";

export function getDataSource(): DataSource {
  return hasDb() && process.env.X_API_BEARER ? "live" : "mock";
}

// Whether the DB is available regardless of X creds.
export function isLive(): boolean {
  return hasDb();
}

export async function getNarratives(): Promise<Narrative[]> {
  if (!isLive()) return NARRATIVES;
  try {
    const live = await getNarrativesFromDb();
    if (live.length === 0) return NARRATIVES;
    // Hydrate sparkline/series shapes by merging with the mock series for now.
    return live.map((n) => {
      const m = NARRATIVES.find((x) => x.id === n.id);
      return { ...m, ...n, series: m?.series ?? n.series } as Narrative;
    });
  } catch (e) {
    console.error("getNarratives: DB failed, falling back to mock", e);
    return NARRATIVES;
  }
}

export async function getAccounts(opts?: {
  category?: Account["category"];
  sort?: "signal" | "velocity" | "growth" | "engagement";
  limit?: number;
}): Promise<Account[]> {
  if (!isLive()) {
    return mockGetAccounts(opts);
  }
  try {
    const live = await getAccountsFromDb(opts);
    if (live.length === 0) return mockGetAccounts(opts);
    // Backfill sparkline + growthSeries from mock until snapshot history exists.
    return live.map((a) => {
      const m = findAccount(a.handle);
      return {
        ...a,
        sparkline:    m?.sparkline ?? [],
        growthSeries: m?.growthSeries ?? [],
        narratives:   m?.narratives ?? a.narratives,
      };
    });
  } catch (e) {
    console.error("getAccounts: DB failed, falling back to mock", e);
    return mockGetAccounts(opts);
  }
}

function mockGetAccounts(opts?: {
  category?: Account["category"];
  sort?: "signal" | "velocity" | "growth" | "engagement";
  limit?: number;
}): Account[] {
  let list = [...ACCOUNTS];
  if (opts?.category) list = list.filter((a) => a.category === opts.category);
  const sort = opts?.sort ?? "signal";
  list.sort((a, b) => {
    switch (sort) {
      case "velocity":   return b.velocity - a.velocity;
      case "growth":     return b.growth7d - a.growth7d;
      case "engagement": return b.engagement - a.engagement;
      default:           return b.signal - a.signal;
    }
  });
  if (opts?.limit) list = list.slice(0, opts.limit);
  return list;
}

export async function getTrending(): Promise<Account[]> {
  const all = await getAccounts({ limit: 10 });
  return all.length ? all : TRENDING_ACCOUNTS;
}

export async function getAccount(handle: string): Promise<Account | undefined> {
  if (!isLive()) return findAccount(handle);
  try {
    const live = await getAccountFromDb(handle);
    if (!live) return findAccount(handle);
    // Backfill mock-only fields for now.
    const m = findAccount(live.handle);
    return {
      ...live,
      sparkline:    m?.sparkline ?? [],
      growthSeries: m?.growthSeries ?? [],
      narratives:   m?.narratives ?? live.narratives,
    };
  } catch (e) {
    console.error("getAccount: DB failed, falling back to mock", e);
    return findAccount(handle);
  }
}

export async function getSimilarAccounts(handle: string): Promise<Account[]> {
  // Similarity needs narrative vectors; still computed from mock alignment
  // until embeddings land.
  const a = findAccount(handle);
  return a ? similarAccounts(a, 6) : [];
}

export async function getTopPosts(handle: string): Promise<FeedItem[]> {
  // TODO: query live posts filtered to this account once history is dense.
  return topPostsFor(handle);
}

export async function getFeed(): Promise<FeedItem[]> {
  if (!isLive()) return FEED;
  try {
    const live = await getFeedFromDb(30);
    if (live.length === 0) return FEED;
    return live;
  } catch (e) {
    console.error("getFeed: DB failed, falling back to mock", e);
    return FEED;
  }
}

export async function getMentionsSeries() {
  return buildMentionsSeries();
}

export async function getHeatmap() {
  return buildHeatmap();
}

export async function getGraph(): Promise<{ nodes: GraphNode[]; edges: GraphEdge[] }> {
  return buildGraph();
}
