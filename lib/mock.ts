// Deterministic mock data so SSR + client render identically.

function seeded(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0xffffffff;
  };
}

export type Narrative = {
  id: string;
  label: string;
  velocity: number; // 0-100
  mentions24h: number;
  delta24h: number; // percent
  series: { t: number; v: number }[];
  color: string;
};

export const NARRATIVE_COLORS: Record<string, string> = {
  "private-inference": "#22e6ff",
  "decentralized-compute": "#a78bfa",
  "agent-infrastructure": "#34f5b1",
  "ai-sovereignty": "#fbbf24",
  "open-source-models": "#fb7185",
  "inference-markets": "#60a5fa",
  "cypherpunk-ai": "#f472b6",
};

export const NARRATIVES: Narrative[] = [
  { id: "private-inference",   label: "Private Inference",     velocity: 94, mentions24h: 12480, delta24h: 38.2 },
  { id: "inference-markets",   label: "Inference Markets",     velocity: 81, mentions24h: 8920,  delta24h: 22.7 },
  { id: "agent-infrastructure",label: "Agent Infrastructure",  velocity: 73, mentions24h: 7410,  delta24h: 14.1 },
  { id: "decentralized-compute",label: "Decentralized Compute",velocity: 67, mentions24h: 6204,  delta24h: 9.8 },
  { id: "ai-sovereignty",      label: "AI Sovereignty",        velocity: 58, mentions24h: 4830,  delta24h: -3.2 },
  { id: "open-source-models",  label: "Open Source Models",    velocity: 49, mentions24h: 3905,  delta24h: 5.6 },
  { id: "cypherpunk-ai",       label: "Cypherpunk AI",         velocity: 42, mentions24h: 2811,  delta24h: 11.4 },
].map((n, i) => {
  const rand = seeded(i * 91 + 7);
  const base = n.velocity / 100;
  const series = Array.from({ length: 48 }, (_, t) => ({
    t,
    v: Math.max(4, Math.round(base * 100 * (0.55 + rand() * 0.9))),
  }));
  return { ...n, series, color: NARRATIVE_COLORS[n.id] };
});

export type TrendingAccount = {
  handle: string;
  name: string;
  signal: number;
  delta: number;
  velocity: number;
  narrative: string;
  followers: number;
  sparkline: number[];
};

export const TRENDING_ACCOUNTS: TrendingAccount[] = [
  { handle: "@erikvoorhees",     name: "Erik Voorhees",     signal: 96.4, delta: 4.1,  velocity: 88, narrative: "AI Sovereignty",        followers: 712000 },
  { handle: "@balajis",          name: "Balaji",            signal: 95.1, delta: 2.7,  velocity: 71, narrative: "AI Sovereignty",        followers: 1080000 },
  { handle: "@teknium1",         name: "Teknium",           signal: 92.3, delta: 6.4,  velocity: 91, narrative: "Open Source Models",    followers: 142000 },
  { handle: "@punk6529",         name: "6529",              signal: 90.8, delta: 1.9,  velocity: 64, narrative: "Cypherpunk AI",         followers: 348000 },
  { handle: "@ryanberckmans",    name: "Ryan Berckmans",    signal: 89.2, delta: 8.1,  velocity: 95, narrative: "Inference Markets",     followers: 49000 },
  { handle: "@karpathy",         name: "Andrej Karpathy",   signal: 88.9, delta: 3.2,  velocity: 76, narrative: "Agent Infrastructure",  followers: 1200000 },
  { handle: "@gakonst",          name: "Georgios K.",       signal: 86.5, delta: 5.7,  velocity: 82, narrative: "Decentralized Compute", followers: 67000 },
  { handle: "@MoonOverlord",     name: "Moon Overlord",     signal: 84.2, delta: 12.3, velocity: 97, narrative: "Private Inference",     followers: 91000 },
  { handle: "@pmarca",           name: "Marc Andreessen",   signal: 83.8, delta: 0.8,  velocity: 41, narrative: "AI Sovereignty",        followers: 1850000 },
  { handle: "@elder_plinius",    name: "Pliny",             signal: 82.6, delta: 9.4,  velocity: 92, narrative: "Cypherpunk AI",         followers: 38000 },
].map((a, i) => {
  const rand = seeded(i * 131 + 3);
  const base = a.velocity / 100;
  const sparkline = Array.from({ length: 24 }, () =>
    Math.max(8, Math.round(base * 60 + rand() * 35)),
  );
  return { ...a, sparkline };
});

export type FeedItem = {
  id: string;
  handle: string;
  name: string;
  ago: string;
  text: string;
  engagement: number;
  narrative: string;
  velocity: "viral" | "rising" | "normal";
};

export const FEED: FeedItem[] = [
  {
    id: "f1", handle: "@teknium1", name: "Teknium", ago: "2m",
    text: "Private inference at the edge is the only way the agentic economy survives. Centralized inference is the new ad-tech.",
    engagement: 18400, narrative: "Private Inference", velocity: "viral",
  },
  {
    id: "f2", handle: "@erikvoorhees", name: "Erik Voorhees", ago: "4m",
    text: "Sovereign compute and verifiable inference are not nice-to-haves. They are the prerequisite for any open AI economy.",
    engagement: 12200, narrative: "AI Sovereignty", velocity: "viral",
  },
  {
    id: "f3", handle: "@MoonOverlord", name: "Moon Overlord", ago: "7m",
    text: "Venice routing latency just dropped under 180ms on the last benchmark. Quietly building.",
    engagement: 4310, narrative: "Inference Markets", velocity: "rising",
  },
  {
    id: "f4", handle: "@ryanberckmans", name: "Ryan Berckmans", ago: "11m",
    text: "If you can price inference per-token across providers, you can build an actual market for it. This is the missing piece.",
    engagement: 6720, narrative: "Inference Markets", velocity: "rising",
  },
  {
    id: "f5", handle: "@karpathy", name: "Karpathy", ago: "13m",
    text: "Agentic loops over private endpoints feel qualitatively different. Less guardrails, more reasoning surface.",
    engagement: 21800, narrative: "Agent Infrastructure", velocity: "viral",
  },
  {
    id: "f6", handle: "@elder_plinius", name: "Pliny", ago: "17m",
    text: "Three new uncensored fine-tunes routing through Venice today. The privacy stack is shipping.",
    engagement: 3920, narrative: "Cypherpunk AI", velocity: "rising",
  },
  {
    id: "f7", handle: "@gakonst", name: "Georgios K.", ago: "22m",
    text: "Decentralized compute markets only work when settlement is verifiable. Otherwise it's just AWS with extra steps.",
    engagement: 5410, narrative: "Decentralized Compute", velocity: "normal",
  },
  {
    id: "f8", handle: "@punk6529", name: "6529", ago: "26m",
    text: "The 2026 fight is not who has the biggest model. It's who controls the inference layer for everyone else's models.",
    engagement: 9840, narrative: "Cypherpunk AI", velocity: "rising",
  },
];

// 7x24 heatmap of mention intensity across days x hours, deterministic.
export function buildHeatmap(): number[][] {
  const rand = seeded(424242);
  const days = 7;
  const hours = 24;
  const grid: number[][] = [];
  for (let d = 0; d < days; d++) {
    const row: number[] = [];
    for (let h = 0; h < hours; h++) {
      // peak around 14-22 UTC, lower at 3-9 UTC, day-of-week drift.
      const dayBoost = 0.6 + (d / days) * 0.6;
      const hourCurve = 0.3 + 0.7 * Math.exp(-Math.pow((h - 18) / 6, 2));
      const noise = 0.6 + rand() * 0.6;
      row.push(Math.min(1, dayBoost * hourCurve * noise));
    }
    grid.push(row);
  }
  return grid;
}

// Aggregate mentions sparkline (last 48h)
export function buildMentionsSeries(): { t: number; v: number }[] {
  const rand = seeded(99);
  return Array.from({ length: 48 }, (_, t) => {
    const wave = 1 + 0.4 * Math.sin((t / 48) * Math.PI * 2);
    const v = Math.round(2400 + wave * 1800 + rand() * 600);
    return { t, v };
  });
}

export const SENTIMENT = {
  bullish: 58,
  technical: 22,
  neutral: 11,
  bearish: 6,
  speculative: 3,
};

export const TICKER = [
  { label: "MENTIONS / 24H", value: "62.4K", delta: 18.2 },
  { label: "ACTIVE VOICES", value: "8,914", delta: 6.4 },
  { label: "VIRAL POSTS", value: "47", delta: 27.1 },
  { label: "NARRATIVES TRACKED", value: "23", delta: 0 },
  { label: "ECO. SENTIMENT", value: "+0.62", delta: 4.8 },
  { label: "TOP NARRATIVE", value: "PRIVATE INFERENCE", delta: 38.2 },
  { label: "RISING ACCOUNT", value: "@MoonOverlord", delta: 12.3 },
  { label: "SIGNAL INDEX", value: "184.6", delta: 2.1 },
];
