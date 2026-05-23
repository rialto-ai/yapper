// V0: keyword-based narrative classification. Cheap, deterministic, easy to audit.
//
// When OPENAI_API_KEY (or another embedding provider key) is present, we'll
// upgrade to embeddings + cosine to known narrative centroids. The interface
// here is the same: classify(text) -> { narrativeId, score } | null.

import type { Narrative } from "../db/schema";

// Lowercased keyword sets per narrative. Order matters: longer/more specific
// keywords first, single tokens last so multi-word matches win.
const KEYWORDS: Record<string, string[]> = {
  "private-inference": [
    "private inference", "verifiable inference", "tee inference",
    "encrypted inference", "private compute", "confidential compute",
    "trusted execution", "tee", "homomorphic",
  ],
  "inference-markets": [
    "inference market", "inference markets", "per-token pricing",
    "token routing", "model routing", "gpu market", "compute pricing",
    "inference economics",
  ],
  "agent-infrastructure": [
    "agentic infrastructure", "agent infra", "agent loop",
    "agentic loop", "tool use", "agent runtime", "agent orchestration",
    "multi-agent", "ai agent",
  ],
  "decentralized-compute": [
    "decentralized compute", "decentralized inference", "decentralized ai",
    "distributed inference", "compute network", "gpu network",
    "verifiable settlement",
  ],
  "ai-sovereignty": [
    "ai sovereignty", "sovereign ai", "sovereign compute",
    "open ai economy", "open ai stack", "ai independence",
  ],
  "open-source-models": [
    "open-source model", "open source model", "open weight",
    "open-weights", "fine-tune", "fine tune", "nous research",
    "llama", "mistral", "qwen",
  ],
  "cypherpunk-ai": [
    "cypherpunk ai", "uncensored model", "jailbreak", "red team",
    "alignment surface", "privacy stack", "cryptography ai",
  ],
};

// Pre-normalize for matching.
const PATTERNS: { id: string; tokens: string[] }[] = Object.entries(KEYWORDS).map(
  ([id, words]) => ({ id, tokens: words.map((w) => w.toLowerCase()) }),
);

export function classifyByKeywords(text: string): { narrativeId: string; score: number } | null {
  const t = text.toLowerCase();
  let best: { id: string; score: number } | null = null;
  for (const { id, tokens } of PATTERNS) {
    let score = 0;
    for (const tok of tokens) {
      if (t.includes(tok)) {
        // longer match → higher weight (rough specificity heuristic)
        score += 1 + Math.min(3, tok.split(" ").length - 1);
      }
    }
    if (score > 0 && (!best || score > best.score)) {
      best = { id, score };
    }
  }
  return best ? { narrativeId: best.id, score: best.score } : null;
}

export function classify(text: string): { narrativeId: string; score: number } | null {
  return classifyByKeywords(text);
}

// Naive sentiment v0: lexicon-based. Replace with a real model behind a flag.
const POS = ["bullish", "shipping", "shipped", "launch", "live", "scaling", "growth", "promising", "elegant", "breakthrough"];
const NEG = ["bearish", "broken", "down", "failing", "decline", "scam", "rug", "vapor", "stalled", "centralized"];
const TECH = ["benchmark", "latency", "throughput", "architecture", "protocol", "schema", "endpoint", "embedding", "gpu", "tee", "zk"];

export function classifySentiment(text: string): "bullish" | "bearish" | "neutral" | "technical" | "speculative" {
  const t = text.toLowerCase();
  let pos = 0, neg = 0, tech = 0;
  for (const w of POS) if (t.includes(w)) pos++;
  for (const w of NEG) if (t.includes(w)) neg++;
  for (const w of TECH) if (t.includes(w)) tech++;
  if (tech >= 2 && pos === 0 && neg === 0) return "technical";
  if (pos > neg && pos >= 1) return "bullish";
  if (neg > pos && neg >= 1) return "bearish";
  if (t.includes("?") || t.includes("could be") || t.includes("might")) return "speculative";
  return "neutral";
}

// Engagement-based velocity bucketing. Compares one post to that account's
// rolling baseline. Pure utility — caller supplies the baseline.
export function velocityLabel(engagement: number, baseline: number): "viral" | "rising" | "normal" {
  if (baseline === 0) return engagement > 5000 ? "viral" : "normal";
  const ratio = engagement / baseline;
  if (ratio >= 2) return "viral";
  if (ratio >= 1.15) return "rising";
  return "normal";
}

// Pull every narrative's keyword list as a single search query string suitable
// for X /tweets/search/recent (limited to 512 chars on Basic).
export function buildSearchQuery(narratives: Narrative[]): string {
  const terms = new Set<string>();
  terms.add('"Rialto AI"');
  for (const n of narratives) {
    for (const k of n.keywords ?? []) {
      // Phrase queries need double-quotes if multi-word.
      terms.add(k.includes(" ") ? `"${k}"` : k);
    }
  }
  // OR them, drop retweets, English only.
  return [...terms].join(" OR ") + " -is:retweet lang:en";
}
