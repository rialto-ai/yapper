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
  { id: "private-inference",    label: "Private Inference",     velocity: 94, mentions24h: 12480, delta24h: 38.2 },
  { id: "inference-markets",    label: "Inference Markets",     velocity: 81, mentions24h: 8920,  delta24h: 22.7 },
  { id: "agent-infrastructure", label: "Agent Infrastructure",  velocity: 73, mentions24h: 7410,  delta24h: 14.1 },
  { id: "decentralized-compute",label: "Decentralized Compute", velocity: 67, mentions24h: 6204,  delta24h: 9.8  },
  { id: "ai-sovereignty",       label: "AI Sovereignty",        velocity: 58, mentions24h: 4830,  delta24h: -3.2 },
  { id: "open-source-models",   label: "Open Source Models",    velocity: 49, mentions24h: 3905,  delta24h: 5.6  },
  { id: "cypherpunk-ai",        label: "Cypherpunk AI",         velocity: 42, mentions24h: 2811,  delta24h: 11.4 },
].map((n, i) => {
  const rand = seeded(i * 91 + 7);
  const base = n.velocity / 100;
  const series = Array.from({ length: 48 }, (_, t) => ({
    t,
    v: Math.max(4, Math.round(base * 100 * (0.55 + rand() * 0.9))),
  }));
  return { ...n, series, color: NARRATIVE_COLORS[n.id] };
});

export type AccountCategory = "researcher" | "founder" | "trader" | "developer" | "media" | "meme";

export type Account = {
  handle: string;
  name: string;
  bio: string;
  signal: number;
  delta: number;        // signal delta, 24h
  velocity: number;     // 0-100 acceleration
  growth7d: number;     // % follower growth
  followers: number;
  following: number;
  posts30d: number;
  engagement: number;   // avg engagements / post
  reachEfficiency: number; // pct
  narrative: string;    // primary narrative id
  narratives: { id: string; weight: number }[]; // alignment vector
  category: AccountCategory;
  sparkline: number[];  // 24h
  growthSeries: { t: number; followers: number; signal: number }[]; // 30d
  joinedDays: number;
  verified: boolean;
};

const ACCOUNT_SEED: Omit<Account, "sparkline" | "growthSeries" | "narratives">[] = [
  { handle: "@erikvoorhees",  name: "Erik Voorhees",   bio: "Founder, ShapeShift. Sovereign money advocate. Long open AI.",         signal: 96.4, delta:  4.1, velocity: 88, growth7d:  3.2, followers:  712000, following:  410, posts30d: 184, engagement: 12400, reachEfficiency: 28, narrative: "ai-sovereignty",        category: "founder",   joinedDays: 5210, verified: true },
  { handle: "@balajis",       name: "Balaji",          bio: "Network state. Sovereign compute. Author. Investor.",                   signal: 95.1, delta:  2.7, velocity: 71, growth7d:  1.4, followers: 1080000, following:  290, posts30d: 312, engagement: 18200, reachEfficiency: 22, narrative: "ai-sovereignty",        category: "founder",   joinedDays: 5840, verified: true },
  { handle: "@teknium1",      name: "Teknium",         bio: "Open source models, fine-tuning, dataset alchemy. Nous Research.",      signal: 92.3, delta:  6.4, velocity: 91, growth7d:  8.7, followers:  142000, following: 1240, posts30d: 421, engagement:  8400, reachEfficiency: 41, narrative: "open-source-models",    category: "researcher",joinedDays: 1820, verified: false },
  { handle: "@punk6529",      name: "6529",            bio: "Open metaverse. Decentralization. Long-form essays.",                   signal: 90.8, delta:  1.9, velocity: 64, growth7d:  0.9, followers:  348000, following:  180, posts30d: 142, engagement:  9100, reachEfficiency: 31, narrative: "cypherpunk-ai",         category: "media",     joinedDays: 1610, verified: true },
  { handle: "@ryanberckmans", name: "Ryan Berckmans",  bio: "Prediction markets. Inference economics. Builder mindset.",             signal: 89.2, delta:  8.1, velocity: 95, growth7d: 14.2, followers:   49000, following:  890, posts30d: 392, engagement:  3200, reachEfficiency: 47, narrative: "inference-markets",     category: "researcher",joinedDays: 3120, verified: false },
  { handle: "@karpathy",      name: "Andrej Karpathy", bio: "Neural nets. Education. Tinkering on agentic loops.",                   signal: 88.9, delta:  3.2, velocity: 76, growth7d:  2.1, followers: 1200000, following:   90, posts30d:  82, engagement: 28400, reachEfficiency: 19, narrative: "agent-infrastructure",  category: "researcher",joinedDays: 4810, verified: true },
  { handle: "@gakonst",       name: "Georgios K.",     bio: "EVM, ZK, compute markets. Reth + decentralized infra.",                 signal: 86.5, delta:  5.7, velocity: 82, growth7d:  6.0, followers:   67000, following:  410, posts30d: 168, engagement:  4100, reachEfficiency: 35, narrative: "decentralized-compute", category: "developer", joinedDays: 2940, verified: false },
  { handle: "@MoonOverlord",  name: "Moon Overlord",   bio: "Inference markets. Trading. Posting through it.",                       signal: 84.2, delta: 12.3, velocity: 97, growth7d: 22.8, followers:   91000, following:  720, posts30d: 612, engagement:  2700, reachEfficiency: 38, narrative: "private-inference",     category: "trader",    joinedDays: 1840, verified: false },
  { handle: "@pmarca",        name: "Marc Andreessen", bio: "Founder, a16z. Techno-optimist. Sovereignty maxi.",                     signal: 83.8, delta:  0.8, velocity: 41, growth7d:  0.4, followers: 1850000, following:    8, posts30d:  41, engagement: 38000, reachEfficiency: 12, narrative: "ai-sovereignty",        category: "founder",   joinedDays: 6010, verified: true },
  { handle: "@elder_plinius", name: "Pliny",           bio: "Jailbreaker. Red team. Pushing alignment surface.",                     signal: 82.6, delta:  9.4, velocity: 92, growth7d: 18.4, followers:   38000, following:  240, posts30d: 482, engagement:  2900, reachEfficiency: 52, narrative: "cypherpunk-ai",         category: "researcher",joinedDays:  920, verified: false },
  { handle: "@VitalikButerin",name: "Vitalik Buterin", bio: "Ethereum. Long-form thinker. Privacy + decentralization.",              signal: 81.4, delta:  1.2, velocity: 38, growth7d:  0.6, followers: 5400000, following:  450, posts30d:  62, engagement: 84000, reachEfficiency:  9, narrative: "decentralized-compute", category: "founder",   joinedDays: 4280, verified: true },
  { handle: "@swyx",          name: "shawn @ smol",    bio: "AI engineer. Latent Space. Agent infra patterns.",                      signal: 79.8, delta:  4.6, velocity: 68, growth7d:  4.1, followers:  108000, following:  890, posts30d: 248, engagement:  4900, reachEfficiency: 33, narrative: "agent-infrastructure",  category: "researcher",joinedDays: 3640, verified: true },
  { handle: "@jon_charb",     name: "Jon Charbonneau", bio: "Research analyst. Crypto x AI economics. Long essays.",                 signal: 78.1, delta:  3.9, velocity: 64, growth7d:  3.6, followers:   84000, following:  610, posts30d:  98, engagement:  6200, reachEfficiency: 41, narrative: "inference-markets",     category: "researcher",joinedDays: 2210, verified: false },
  { handle: "@cz_binance",    name: "CZ",              bio: "Binance. Builders. Long-term ecosystem builder.",                       signal: 77.9, delta: -1.1, velocity: 32, growth7d: -0.2, followers: 9100000, following:  120, posts30d: 184, engagement: 64000, reachEfficiency:  6, narrative: "ai-sovereignty",        category: "founder",   joinedDays: 2510, verified: true },
  { handle: "@dystopiabreaker",name: "Dystopiabreaker",bio: "Cypherpunk. Privacy stack. Encrypted compute.",                         signal: 76.4, delta:  7.1, velocity: 88, growth7d: 15.6, followers:   29000, following:  410, posts30d: 348, engagement:  1800, reachEfficiency: 51, narrative: "cypherpunk-ai",         category: "researcher",joinedDays:  780, verified: false },
  { handle: "@joinventure",   name: "JoinVenture",     bio: "Memetic posting on decentralized AI.",                                  signal: 74.8, delta: 10.2, velocity: 94, growth7d: 28.4, followers:   18000, following:  180, posts30d: 712, engagement:   840, reachEfficiency: 62, narrative: "private-inference",     category: "meme",      joinedDays:  420, verified: false },
  { handle: "@RudyLu",        name: "Rudy Lu",         bio: "Compute markets. GPU economics. Builder.",                              signal: 73.2, delta:  4.8, velocity: 71, growth7d:  6.2, followers:   24000, following:  390, posts30d: 142, engagement:  1900, reachEfficiency: 44, narrative: "decentralized-compute", category: "developer", joinedDays: 1610, verified: false },
  { handle: "@latentspacepod",name: "Latent Space",    bio: "Podcast on AI engineering. Agent infra, research, ops.",                signal: 72.6, delta:  3.4, velocity: 58, growth7d:  4.0, followers:   62000, following:  220, posts30d:  84, engagement:  3400, reachEfficiency: 38, narrative: "agent-infrastructure",  category: "media",     joinedDays: 1480, verified: false },
  { handle: "@punk2898",      name: "punk2898",        bio: "Researcher. Cryptography. Inference attestation.",                      signal: 71.1, delta:  5.6, velocity: 76, growth7d:  9.4, followers:   14000, following:  290, posts30d: 184, engagement:  1100, reachEfficiency: 49, narrative: "private-inference",     category: "researcher",joinedDays:  690, verified: false },
  { handle: "@cobie",         name: "Cobie",           bio: "Crypto markets. Sharp takes. UpOnly co-host.",                          signal: 70.4, delta:  2.1, velocity: 54, growth7d:  1.8, followers:  840000, following:  180, posts30d:  98, engagement: 14800, reachEfficiency: 18, narrative: "inference-markets",     category: "trader",    joinedDays: 3920, verified: true },
];

const ALL_NARRATIVE_IDS = NARRATIVES.map((n) => n.id);

export const ACCOUNTS: Account[] = ACCOUNT_SEED.map((a, i) => {
  const rand = seeded(i * 131 + 3);
  const base = a.velocity / 100;
  const sparkline = Array.from({ length: 24 }, () =>
    Math.max(8, Math.round(base * 60 + rand() * 35)),
  );
  // 30d growth + signal series.
  let f = a.followers / (1 + a.growth7d / 100);
  let s = a.signal - rand() * 6;
  const growthSeries = Array.from({ length: 30 }, (_, t) => {
    const stepF = (a.followers - f) / (30 - t + 0.1);
    f += stepF * (0.6 + rand() * 0.8);
    s += (a.signal - s) / (30 - t + 0.5) + (rand() - 0.5) * 0.8;
    return { t, followers: Math.round(f), signal: +s.toFixed(2) };
  });
  // narrative weights — primary 0.55-0.75, plus 2 sub-narratives
  const sub1 = ALL_NARRATIVE_IDS[(i + 2) % ALL_NARRATIVE_IDS.length];
  const sub2 = ALL_NARRATIVE_IDS[(i + 5) % ALL_NARRATIVE_IDS.length];
  const narratives = [
    { id: a.narrative,                weight: 0.55 + rand() * 0.2 },
    { id: sub1 === a.narrative ? ALL_NARRATIVE_IDS[(i + 3) % ALL_NARRATIVE_IDS.length] : sub1, weight: 0.15 + rand() * 0.15 },
    { id: sub2 === a.narrative ? ALL_NARRATIVE_IDS[(i + 4) % ALL_NARRATIVE_IDS.length] : sub2, weight: 0.08 + rand() * 0.1  },
  ];
  return { ...a, sparkline, growthSeries, narratives };
});

export const TRENDING_ACCOUNTS = ACCOUNTS.slice(0, 10);

export function findAccount(handle: string): Account | undefined {
  const needle = handle.startsWith("@") ? handle : `@${handle}`;
  return ACCOUNTS.find((a) => a.handle.toLowerCase() === needle.toLowerCase());
}

export function similarAccounts(a: Account, limit = 5): Account[] {
  return ACCOUNTS.filter((x) => x.handle !== a.handle)
    .map((x) => {
      // cosine-ish on narrative weights
      const m = new Map(a.narratives.map((n) => [n.id, n.weight]));
      let dot = 0, na = 0, nb = 0;
      x.narratives.forEach((n) => {
        const av = m.get(n.id) ?? 0;
        dot += av * n.weight;
        na += av * av;
        nb += n.weight * n.weight;
      });
      a.narratives.forEach((n) => { na += n.weight * n.weight; });
      const denom = Math.sqrt(na) * Math.sqrt(nb) || 1;
      return { x, score: dot / denom };
    })
    .sort((p, q) => q.score - p.score)
    .slice(0, limit)
    .map((s) => s.x);
}

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
  { id: "f1", handle: "@teknium1",      name: "Teknium",          ago:  "2m", text: "Private inference at the edge is the only way the agentic economy survives. Centralized inference is the new ad-tech.",                          engagement: 18400, narrative: "Private Inference",     velocity: "viral"  },
  { id: "f2", handle: "@erikvoorhees",  name: "Erik Voorhees",    ago:  "4m", text: "Sovereign compute and verifiable inference are not nice-to-haves. They are the prerequisite for any open AI economy.",                              engagement: 12200, narrative: "AI Sovereignty",        velocity: "viral"  },
  { id: "f3", handle: "@MoonOverlord",  name: "Moon Overlord",    ago:  "7m", text: "Venice routing latency just dropped under 180ms on the last benchmark. Quietly building.",                                                          engagement:  4310, narrative: "Inference Markets",     velocity: "rising" },
  { id: "f4", handle: "@ryanberckmans", name: "Ryan Berckmans",   ago: "11m", text: "If you can price inference per-token across providers, you can build an actual market for it. This is the missing piece.",                          engagement:  6720, narrative: "Inference Markets",     velocity: "rising" },
  { id: "f5", handle: "@karpathy",      name: "Karpathy",         ago: "13m", text: "Agentic loops over private endpoints feel qualitatively different. Less guardrails, more reasoning surface.",                                       engagement: 21800, narrative: "Agent Infrastructure",  velocity: "viral"  },
  { id: "f6", handle: "@elder_plinius", name: "Pliny",            ago: "17m", text: "Three new uncensored fine-tunes routing through Venice today. The privacy stack is shipping.",                                                      engagement:  3920, narrative: "Cypherpunk AI",         velocity: "rising" },
  { id: "f7", handle: "@gakonst",       name: "Georgios K.",      ago: "22m", text: "Decentralized compute markets only work when settlement is verifiable. Otherwise it's just AWS with extra steps.",                                  engagement:  5410, narrative: "Decentralized Compute", velocity: "normal" },
  { id: "f8", handle: "@punk6529",      name: "6529",             ago: "26m", text: "The 2026 fight is not who has the biggest model. It's who controls the inference layer for everyone else's models.",                                engagement:  9840, narrative: "Cypherpunk AI",         velocity: "rising" },
];

// Per-account top posts on profile page.
export function topPostsFor(handle: string): FeedItem[] {
  const acct = findAccount(handle);
  if (!acct) return [];
  const rand = seeded(handle.charCodeAt(1) * 31 + handle.length);
  const templates = [
    "The %N stack is the real story. Watch how the top accounts converge on it next quarter.",
    "If you're building in %N right now, the surface area for genuine alpha is the largest it has been in 18 months.",
    "Three things changed this week in %N — and the consensus has not caught up yet.",
    "%N benchmarks are converging. The winners will be defined by routing, not raw throughput.",
    "Skeptical takes on %N age poorly. The architecture is what changed, not the marketing.",
    "Most %N narratives die at scale. The ones that survive get repriced violently.",
  ];
  const narrative = NARRATIVES.find((n) => n.id === acct.narrative)?.label ?? "Venice";
  return Array.from({ length: 6 }, (_, i) => {
    const text = templates[i % templates.length].replace("%N", narrative);
    const eng = Math.round(acct.engagement * (0.5 + rand() * 1.4));
    const vel: FeedItem["velocity"] =
      eng > acct.engagement * 1.2 ? "viral" : eng > acct.engagement * 0.8 ? "rising" : "normal";
    return {
      id: `${acct.handle}-${i}`,
      handle: acct.handle,
      name: acct.name,
      ago: `${[2, 6, 14, 32, 64, 128][i]}h`,
      text,
      engagement: eng,
      narrative,
      velocity: vel,
    };
  });
}

// 7x24 heatmap of mention intensity across days x hours, deterministic.
export function buildHeatmap(): number[][] {
  const rand = seeded(424242);
  const days = 7;
  const hours = 24;
  const grid: number[][] = [];
  for (let d = 0; d < days; d++) {
    const row: number[] = [];
    for (let h = 0; h < hours; h++) {
      const dayBoost = 0.6 + (d / days) * 0.6;
      const hourCurve = 0.3 + 0.7 * Math.exp(-Math.pow((h - 18) / 6, 2));
      const noise = 0.6 + rand() * 0.6;
      row.push(Math.min(1, dayBoost * hourCurve * noise));
    }
    grid.push(row);
  }
  return grid;
}

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
  { label: "MENTIONS / 24H",     value: "62.4K",             delta: 18.2 },
  { label: "ACTIVE VOICES",      value: "8,914",             delta:  6.4 },
  { label: "VIRAL POSTS",        value: "47",                delta: 27.1 },
  { label: "NARRATIVES TRACKED", value: "23",                delta:  0   },
  { label: "ECO. SENTIMENT",     value: "+0.62",             delta:  4.8 },
  { label: "TOP NARRATIVE",      value: "PRIVATE INFERENCE", delta: 38.2 },
  { label: "RISING ACCOUNT",     value: "@MoonOverlord",     delta: 12.3 },
  { label: "SIGNAL INDEX",       value: "184.6",             delta:  2.1 },
];

// Graph edges: account ↔ narrative (weighted), narrative ↔ narrative (cooccurrence), account ↔ account (interaction).
export type GraphNode =
  | { id: string; type: "account";   data: Account }
  | { id: string; type: "narrative"; data: Narrative };

export type GraphEdge = {
  source: string;
  target: string;
  weight: number;
  kind: "account-narrative" | "narrative-narrative" | "account-account";
};

export function buildGraph(): { nodes: GraphNode[]; edges: GraphEdge[] } {
  const nodes: GraphNode[] = [
    ...NARRATIVES.map<GraphNode>((n) => ({ id: `n:${n.id}`, type: "narrative", data: n })),
    ...ACCOUNTS.map<GraphNode>((a) => ({ id: `a:${a.handle}`, type: "account", data: a })),
  ];
  const edges: GraphEdge[] = [];
  ACCOUNTS.forEach((a) => {
    a.narratives.forEach((nw) => {
      if (nw.weight < 0.1) return;
      edges.push({ source: `a:${a.handle}`, target: `n:${nw.id}`, weight: nw.weight, kind: "account-narrative" });
    });
  });
  // narrative-narrative cooccurrence based on shared accounts
  for (let i = 0; i < NARRATIVES.length; i++) {
    for (let j = i + 1; j < NARRATIVES.length; j++) {
      const ni = NARRATIVES[i].id;
      const nj = NARRATIVES[j].id;
      let w = 0;
      ACCOUNTS.forEach((a) => {
        const wi = a.narratives.find((x) => x.id === ni)?.weight ?? 0;
        const wj = a.narratives.find((x) => x.id === nj)?.weight ?? 0;
        w += wi * wj;
      });
      if (w > 0.3) {
        edges.push({ source: `n:${ni}`, target: `n:${nj}`, weight: Math.min(1, w / 2), kind: "narrative-narrative" });
      }
    }
  }
  // a sprinkling of account-account interaction edges (deterministic)
  const rand = seeded(7777);
  for (let i = 0; i < ACCOUNTS.length; i++) {
    for (let j = i + 1; j < ACCOUNTS.length; j++) {
      if (ACCOUNTS[i].narrative === ACCOUNTS[j].narrative && rand() > 0.55) {
        edges.push({
          source: `a:${ACCOUNTS[i].handle}`,
          target: `a:${ACCOUNTS[j].handle}`,
          weight: 0.15 + rand() * 0.25,
          kind: "account-account",
        });
      }
    }
  }
  return { nodes, edges };
}
