// Embeddings-based narrative classifier (v1).
//
// When OPENAI_API_KEY is set, we cosine-compare the post's embedding against
// per-narrative centroids computed from the keyword list. Falls back to the
// keyword classifier silently when the key is missing or the request fails,
// so cron stays green either way.
//
// Centroids are computed lazily once per process (Vercel function instance)
// since narrative keyword lists rarely change between cron invocations.

import type { Narrative } from "../db/schema";

const EMBED_MODEL = "text-embedding-3-small"; // 1536d, cheap
const EMBED_DIM = 1536;

const centroidCache = new Map<string, Float32Array>(); // narrativeId → centroid
let centroidsLoaded = false;

export function hasEmbeddings(): boolean {
  return !!process.env.OPENAI_API_KEY;
}

async function embedBatch(texts: string[]): Promise<Float32Array[]> {
  const key = process.env.OPENAI_API_KEY;
  if (!key) throw new Error("OPENAI_API_KEY not set");

  const res = await fetch("https://api.openai.com/v1/embeddings", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ model: EMBED_MODEL, input: texts }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`OpenAI embeddings ${res.status}: ${body.slice(0, 240)}`);
  }
  const json = (await res.json()) as { data: { embedding: number[] }[] };
  return json.data.map((d) => Float32Array.from(d.embedding));
}

function meanCentroid(vecs: Float32Array[]): Float32Array {
  const out = new Float32Array(EMBED_DIM);
  for (const v of vecs) for (let i = 0; i < EMBED_DIM; i++) out[i] += v[i];
  for (let i = 0; i < EMBED_DIM; i++) out[i] /= vecs.length;
  return normalize(out);
}

function normalize(v: Float32Array): Float32Array {
  let s = 0;
  for (let i = 0; i < v.length; i++) s += v[i] * v[i];
  const n = Math.sqrt(s) || 1;
  const out = new Float32Array(v.length);
  for (let i = 0; i < v.length; i++) out[i] = v[i] / n;
  return out;
}

function cosine(a: Float32Array, b: Float32Array): number {
  // Both are already unit-normalized.
  let dot = 0;
  for (let i = 0; i < a.length; i++) dot += a[i] * b[i];
  return dot;
}

async function loadCentroids(narratives: Narrative[]): Promise<void> {
  if (centroidsLoaded) return;
  // For each narrative, average the embeddings of its keyword phrases.
  // Tiny number of API calls; OpenAI accepts batches up to 2048 inputs.
  const flat: { narrativeId: string; phrase: string }[] = [];
  for (const n of narratives) {
    for (const k of n.keywords ?? []) {
      flat.push({ narrativeId: n.id, phrase: k });
    }
  }
  if (flat.length === 0) {
    centroidsLoaded = true;
    return;
  }
  const vecs = await embedBatch(flat.map((f) => f.phrase));
  const byNarrative = new Map<string, Float32Array[]>();
  for (let i = 0; i < flat.length; i++) {
    const arr = byNarrative.get(flat[i].narrativeId) ?? [];
    arr.push(normalize(vecs[i]));
    byNarrative.set(flat[i].narrativeId, arr);
  }
  for (const [id, arr] of byNarrative) {
    centroidCache.set(id, meanCentroid(arr));
  }
  centroidsLoaded = true;
}

export async function classifyByEmbedding(
  text: string,
  narratives: Narrative[],
  { minScore = 0.18 }: { minScore?: number } = {},
): Promise<{ narrativeId: string; score: number } | null> {
  if (!hasEmbeddings()) return null;
  try {
    await loadCentroids(narratives);
    if (centroidCache.size === 0) return null;
    const [vec] = await embedBatch([text]);
    const norm = normalize(vec);
    let best: { id: string; score: number } | null = null;
    for (const [id, c] of centroidCache) {
      const score = cosine(norm, c);
      if (!best || score > best.score) best = { id, score };
    }
    if (best && best.score >= minScore) {
      return { narrativeId: best.id, score: best.score };
    }
    return null;
  } catch (e) {
    // Quiet fallback — cron should never fail because of a classifier hiccup.
    console.warn("classifyByEmbedding failed:", (e as Error).message);
    return null;
  }
}

export function clearCentroidCache() {
  centroidCache.clear();
  centroidsLoaded = false;
}
