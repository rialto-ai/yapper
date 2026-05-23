// Central data accessor. Currently delegates to mock data; future X ingestion
// pipeline plugs in behind these functions without touching frontend code.
//
// Source resolution order (when wired up):
//   1. process.env.X_API_BEARER → live X ingestion + ClickHouse aggregates
//   2. process.env.DATABASE_URL → cached snapshots
//   3. fallback → deterministic mock (this file's only behavior today)

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

export type DataSource = "mock" | "live";

export function getDataSource(): DataSource {
  return process.env.X_API_BEARER ? "live" : "mock";
}

export async function getNarratives(): Promise<Narrative[]> {
  return NARRATIVES;
}

export async function getAccounts(opts?: {
  category?: Account["category"];
  sort?: "signal" | "velocity" | "growth" | "engagement";
  limit?: number;
}): Promise<Account[]> {
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
  return TRENDING_ACCOUNTS;
}

export async function getAccount(handle: string): Promise<Account | undefined> {
  return findAccount(handle);
}

export async function getSimilarAccounts(handle: string): Promise<Account[]> {
  const a = findAccount(handle);
  return a ? similarAccounts(a, 6) : [];
}

export async function getTopPosts(handle: string): Promise<FeedItem[]> {
  return topPostsFor(handle);
}

export async function getFeed(): Promise<FeedItem[]> {
  return FEED;
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
