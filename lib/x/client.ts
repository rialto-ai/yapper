// Thin wrapper over X v2 API. Targets the Basic tier:
//   GET /2/tweets/search/recent
//   GET /2/users/by/username/:username
//   GET /2/users/:id/tweets
//
// Rate limiting: this wrapper handles 429 with Retry-After and surfaces a typed
// error. Long-window backoff (across cron runs) is handled in the caller by
// tracking ingestion_runs.errors and the last-seen tweet id per query.

const BASE = "https://api.x.com/2";

export class XApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public retryAfterSeconds?: number,
  ) {
    super(message);
    this.name = "XApiError";
  }
}

export type XTweet = {
  id: string;
  text: string;
  lang?: string;
  created_at: string;
  author_id: string;
  public_metrics?: {
    retweet_count: number;
    reply_count: number;
    like_count: number;
    quote_count: number;
    impression_count?: number;
  };
};

export type XUser = {
  id: string;
  name: string;
  username: string;
  description?: string;
  verified?: boolean;
  public_metrics?: {
    followers_count: number;
    following_count: number;
    tweet_count: number;
  };
  profile_image_url?: string;
};

export function hasXBearer(): boolean {
  return !!process.env.X_API_BEARER;
}

async function xfetch<T>(path: string, params: Record<string, string | number>): Promise<T> {
  const bearer = process.env.X_API_BEARER;
  if (!bearer) throw new XApiError("X_API_BEARER not set", 401);

  const url = new URL(BASE + path);
  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(k, String(v));
  }

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${bearer}`,
      "User-Agent": "rialto-ai-ingest/0.1",
    },
    // Vercel cron runs don't need long lived connections; default cache is fine.
    cache: "no-store",
  });

  if (res.status === 429) {
    const retryAfter = Number(res.headers.get("retry-after") ?? "60");
    throw new XApiError("X rate limit hit", 429, retryAfter);
  }
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new XApiError(`X API ${res.status}: ${body.slice(0, 240)}`, res.status);
  }

  return (await res.json()) as T;
}

export async function searchRecent({
  query,
  maxResults = 100,
  sinceId,
}: {
  query: string;
  maxResults?: number;
  sinceId?: string;
}): Promise<{ tweets: XTweet[]; users: XUser[]; newestId?: string }> {
  type Resp = {
    data?: XTweet[];
    includes?: { users?: XUser[] };
    meta?: { newest_id?: string; oldest_id?: string; result_count?: number };
  };

  const params: Record<string, string | number> = {
    query,
    max_results: Math.min(100, Math.max(10, maxResults)),
    "tweet.fields": "created_at,public_metrics,lang,author_id",
    expansions: "author_id",
    "user.fields": "name,username,description,verified,public_metrics,profile_image_url",
  };
  if (sinceId) params.since_id = sinceId;

  const data = await xfetch<Resp>("/tweets/search/recent", params);
  return {
    tweets: data.data ?? [],
    users: data.includes?.users ?? [],
    newestId: data.meta?.newest_id,
  };
}

export async function getUserByHandle(handle: string): Promise<XUser | null> {
  type Resp = { data?: XUser };
  const h = handle.replace(/^@/, "");
  const data = await xfetch<Resp>(`/users/by/username/${encodeURIComponent(h)}`, {
    "user.fields": "name,username,description,verified,public_metrics,profile_image_url",
  });
  return data.data ?? null;
}

export async function getUserTweets(
  xUserId: string,
  { maxResults = 50, sinceId }: { maxResults?: number; sinceId?: string } = {},
): Promise<{ tweets: XTweet[]; newestId?: string }> {
  type Resp = { data?: XTweet[]; meta?: { newest_id?: string } };
  const params: Record<string, string | number> = {
    max_results: Math.min(100, Math.max(5, maxResults)),
    "tweet.fields": "created_at,public_metrics,lang,author_id",
  };
  if (sinceId) params.since_id = sinceId;
  const data = await xfetch<Resp>(`/users/${encodeURIComponent(xUserId)}/tweets`, params);
  return { tweets: data.data ?? [], newestId: data.meta?.newest_id };
}
