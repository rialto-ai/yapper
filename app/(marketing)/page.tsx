import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Boxes,
  Compass,
  Cpu,
  Gauge,
  Layers,
  LineChart,
  Network,
  Rocket,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
  Wallet,
  Workflow,
  Zap,
} from "lucide-react";
import { Logo } from "@/components/logo";

export default function Page() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Problem />
      <Pillars />
      <DashboardPreview />
      <BuilderNetwork />
      <Vision />
      <Roadmap />
      <FinalCta />
    </>
  );
}

/* ─────────────────────────── HERO ─────────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <BackdropGrid />
      <div className="relative max-w-[1200px] mx-auto px-6 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="flex flex-col items-center text-center max-w-[860px] mx-auto">
          <Link
            href="#network"
            className="inline-flex items-center gap-2 text-[12px] text-muted hover:text-foreground transition-colors mb-7 border border-border bg-card rounded-full pl-1 pr-3 py-1"
          >
            <span className="inline-flex items-center gap-1.5 bg-accent-soft text-accent rounded-full px-2 py-px text-[10.5px] font-medium tracking-wide uppercase">
              <Sparkles className="size-2.5" /> Now
            </span>
            <span>Early access opening for Venice founders and builders</span>
            <ArrowRight className="size-3" />
          </Link>

          <h1 className="text-[44px] sm:text-[60px] lg:text-[72px] font-semibold tracking-tighter leading-[1.04] text-foreground">
            Powering the
            <br />
            <span className="text-accent">Private AI Economy.</span>
          </h1>

          <p className="text-[17px] sm:text-[19px] text-muted mt-7 max-w-[700px] leading-relaxed">
            Discover, track, and launch the next generation of apps, agents,
            builders, and infrastructure emerging across the Venice ecosystem.
          </p>

          <p className="text-[14px] text-subtle mt-4 max-w-[640px] leading-relaxed">
            Rialto AI is building the coordination layer for the Venice
            ecosystem through ecosystem intelligence, builder discovery, launch
            infrastructure, and founder networks for private AI.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-9">
            <Link
              href="/sign-up"
              className="btn-primary h-11 px-5 text-[14px] font-medium flex items-center gap-1.5"
            >
              Join Early Access <ArrowRight className="size-4" />
            </Link>
            <Link
              href="#intelligence"
              className="btn-ghost h-11 px-5 text-[14px] font-medium flex items-center gap-1.5"
            >
              Explore the Ecosystem
              <ArrowRight className="size-4 text-muted" />
            </Link>
          </div>
        </div>

        <div className="mt-16 lg:mt-20">
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}

function BackdropGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.20]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(var(--border)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--border)) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 65% 50% at 50% 0%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 50% at 50% 0%, black 30%, transparent 75%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(234, 88, 12, 0.12), transparent 60%)",
        }}
      />
    </div>
  );
}

/* ─────────────────────────── HERO DASHBOARD MOCKUP ─────────────────────────── */

function HeroDashboard() {
  return (
    <div className="card overflow-hidden shadow-[0_30px_80px_-30px_rgba(17,21,28,0.25)] dark:shadow-[0_30px_100px_-30px_rgba(0,0,0,0.6)]">
      <div className="h-10 border-b border-border bg-surface flex items-center px-4 gap-2">
        <span className="size-2.5 rounded-full bg-negative/40" />
        <span className="size-2.5 rounded-full bg-warning/40" />
        <span className="size-2.5 rounded-full bg-positive/40" />
        <div className="mx-auto text-[11.5px] font-mono text-muted">
          rialto.ai / ecosystem
        </div>
        <div className="text-[10.5px] text-muted hidden sm:flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-positive animate-pulse" />
          Live
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] min-h-[520px]">
        <div className="hidden lg:flex flex-col border-r border-border p-3 gap-0.5 bg-surface/40">
          {[
            { label: "Overview",       icon: Gauge,     active: true },
            { label: "Intelligence",   icon: LineChart },
            { label: "Discover",       icon: Compass },
            { label: "Builders",       icon: Users },
            { label: "Launches",       icon: Rocket },
            { label: "Network",        icon: Network },
            { label: "Capital",        icon: Wallet },
          ].map((n) => (
            <div
              key={n.label}
              className={
                "flex items-center gap-2 text-[12.5px] px-2.5 py-1.5 rounded-md " +
                (n.active
                  ? "bg-accent-soft text-accent font-medium"
                  : "text-muted")
              }
            >
              <n.icon className="size-3.5" />
              {n.label}
            </div>
          ))}
          <div className="flex-1" />
          <div className="text-[10.5px] text-subtle uppercase tracking-wider px-2.5 mt-4 mb-1">
            Workspace
          </div>
          <div className="flex items-center gap-2 text-[12.5px] px-2.5 py-1.5 text-foreground">
            <div className="size-5 rounded-md bg-accent-soft text-accent grid place-items-center text-[10px] font-semibold">
              V
            </div>
            Venice OS
          </div>
        </div>

        <div className="p-5 lg:p-6 space-y-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { label: "Ecosystem momentum", value: "+142%",  delta: "30d",  trend: "up" },
              { label: "Active builders",    value: "1,284",  delta: "+86",  trend: "up" },
              { label: "Live launches",      value: "37",     delta: "+9",   trend: "up" },
              { label: "Agents tracked",     value: "612",    delta: "+41",  trend: "up" },
            ].map((s) => (
              <div key={s.label} className="card p-3.5">
                <div className="text-[10.5px] text-muted uppercase tracking-wider">
                  {s.label}
                </div>
                <div className="text-[20px] font-semibold text-foreground mt-1.5 tracking-tight">
                  {s.value}
                </div>
                <div className="text-[10.5px] text-positive font-medium mt-0.5 flex items-center gap-1">
                  <TrendingUp className="size-3" /> {s.delta}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-3">
            <div className="card p-4 h-[240px] relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <div className="text-[10.5px] text-muted uppercase tracking-wider">
                  Narrative velocity · 30 days
                </div>
                <div className="flex items-center gap-3 text-[10.5px] text-muted">
                  <Legend color="var(--accent)" label="Private AI" />
                  <Legend color="#2563eb" label="Inference" />
                  <Legend color="#10b981" label="Agents" />
                </div>
              </div>
              <FakeChart />
            </div>

            <div className="card p-4 h-[240px] flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <div className="text-[10.5px] text-muted uppercase tracking-wider">
                  Top builders
                </div>
                <div className="text-[10.5px] text-muted">Signal score</div>
              </div>
              <div className="space-y-2.5 overflow-hidden">
                {[
                  { name: "@venice_research", score: 98, delta: "+12" },
                  { name: "@parallel_studio", score: 94, delta: "+8" },
                  { name: "@inference_labs",  score: 91, delta: "+15" },
                  { name: "@privacy_first",   score: 88, delta: "+4" },
                  { name: "@agent_workshop",  score: 86, delta: "+9" },
                ].map((b, i) => (
                  <div key={b.name} className="flex items-center gap-2.5">
                    <div className="text-[10.5px] text-subtle w-3 tabular-nums">
                      {i + 1}
                    </div>
                    <div className="size-6 rounded-full bg-surface-2 border border-border" />
                    <div className="flex-1 text-[12px] font-medium text-foreground truncate">
                      {b.name}
                    </div>
                    <div className="text-[12px] font-mono text-foreground tabular-nums">
                      {b.score}
                    </div>
                    <div className="text-[10.5px] text-positive font-medium tabular-nums w-8 text-right">
                      {b.delta}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {HERO_LAUNCHES.map((l) => (
              <div key={l.name} className="card p-3.5">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="size-7 rounded-md bg-accent-soft text-accent grid place-items-center shrink-0">
                      <l.icon className="size-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[12.5px] font-medium text-foreground truncate">
                        {l.name}
                      </div>
                      <div className="text-[10.5px] text-muted">{l.tag}</div>
                    </div>
                  </div>
                  <div className="text-[10.5px] font-medium text-positive flex items-center gap-1 shrink-0">
                    <ArrowUpRight className="size-3" /> {l.growth}
                  </div>
                </div>
                <div className="mt-2.5 h-1 rounded-full bg-surface-2 overflow-hidden">
                  <div
                    className="h-full bg-accent"
                    style={{ width: l.fill }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const HERO_LAUNCHES = [
  { name: "Venice Research Agent",  tag: "Agents · Research",    icon: Cpu,     growth: "+38%", fill: "78%" },
  { name: "Venice Inference Router",tag: "Infra · Inference",    icon: Workflow,growth: "+24%", fill: "62%" },
  { name: "Venice Creator Studio",  tag: "Apps · Creative",      icon: Sparkles,growth: "+19%", fill: "54%" },
];

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className="size-1.5 rounded-full"
        style={{ background: color.startsWith("var") ? `rgb(${color === "var(--accent)" ? "var(--accent)" : ""})` : color }}
      />
      {label}
    </span>
  );
}

function FakeChart() {
  const palette = ["rgb(var(--accent))", "#2563eb", "#10b981"];
  const series = palette.map((_, i) =>
    Array.from({ length: 56 }, (_, x) => {
      const noise =
        Math.sin(x * 0.32 + i * 1.3) * 10 +
        Math.cos(x * 0.16 + i * 0.7) * 14;
      return 24 + i * 14 + noise + x * (0.7 + i * 0.15);
    }),
  );
  const max = Math.max(...series.flat());
  const w = 100;
  const h = 100;
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      className="absolute inset-x-4 bottom-3 w-[calc(100%-32px)] h-[180px] overflow-visible"
    >
      <defs>
        {palette.map((c, i) => (
          <linearGradient key={i} id={`g${i}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={c} stopOpacity="0.18" />
            <stop offset="100%" stopColor={c} stopOpacity="0" />
          </linearGradient>
        ))}
      </defs>
      {series.map((s, i) => {
        const pts = s
          .map(
            (v, x) =>
              `${(x / (s.length - 1)) * w},${h - (v / max) * h * 0.85}`,
          )
          .join(" ");
        const area = `0,${h} ${pts} ${w},${h}`;
        return (
          <g key={i}>
            <polygon points={area} fill={`url(#g${i})`} />
            <polyline
              points={pts}
              fill="none"
              stroke={palette[i]}
              strokeWidth="0.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              opacity={i === 0 ? 1 : 0.85}
            />
          </g>
        );
      })}
    </svg>
  );
}

/* ─────────────────────────── TRUST STRIP ─────────────────────────── */

const PILLS = [
  "Venice Ecosystem",
  "Private AI",
  "Venice Builders",
  "AI Agents",
  "Inference",
  "Privacy Infrastructure",
  "Ecosystem Intelligence",
  "Launches",
];

function TrustStrip() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="max-w-[1200px] mx-auto px-6 py-10 flex flex-col items-center gap-6">
        <p className="text-[13px] text-muted text-center max-w-[680px] leading-relaxed">
          Built for founders, developers, researchers, investors, and ecosystem
          operators building on Venice and private AI infrastructure.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {PILLS.map((p) => (
            <span
              key={p}
              className="text-[12px] text-muted bg-card border border-border rounded-full px-3 py-1 hover:text-foreground hover:border-border-strong transition-colors cursor-default"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── PROBLEM ─────────────────────────── */

const PROBLEMS = [
  {
    icon: Compass,
    title: "Discovery is broken",
    body: "Venice apps and builders are scattered across social feeds, GitHub, Discords, and launch posts.",
  },
  {
    icon: BarChart3,
    title: "Ecosystem data is missing",
    body: "There is no clear source of truth for ecosystem momentum, launches, narratives, or builder activity across Venice.",
  },
  {
    icon: Rocket,
    title: "Founders need leverage",
    body: "Builders need visibility, distribution, startup perks, capital access, ecosystem support, and audience discovery.",
  },
];

function Problem() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[760px]">
          <div className="text-[11.5px] font-medium text-accent uppercase tracking-wider mb-3">
            The opportunity
          </div>
          <h2 className="text-[36px] sm:text-[44px] font-semibold tracking-tighter text-foreground leading-tight">
            The Venice ecosystem is growing fast. Discovery is fragmented.
          </h2>
          <p className="text-[16px] text-muted mt-5 leading-relaxed max-w-[680px]">
            Builders across Venice are launching apps, agents, infrastructure,
            workflows, and inference-native products faster than the market can
            track. Rialto AI brings visibility, coordination, discovery, and
            ecosystem intelligence to Venice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
          {PROBLEMS.map((p) => (
            <div
              key={p.title}
              className="card card-interactive p-7 hover:-translate-y-0.5"
            >
              <div className="size-10 rounded-md bg-accent-soft text-accent grid place-items-center mb-5">
                <p.icon className="size-5" />
              </div>
              <h3 className="text-[16px] font-semibold tracking-tight text-foreground">
                {p.title}
              </h3>
              <p className="text-[13.5px] text-muted mt-2 leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── PILLARS ─────────────────────────── */

const PILLARS = [
  {
    id: "intelligence",
    name: "Rialto Intelligence",
    icon: LineChart,
    body: "Track Venice ecosystem builders, launches, narratives, sentiment, and ecosystem momentum in real time.",
  },
  {
    id: "discover",
    name: "Rialto Discover",
    icon: Compass,
    body: "Explore the best Venice-native apps, agents, workflows, and infrastructure projects.",
  },
  {
    id: "builders",
    name: "Rialto Builders",
    icon: Users,
    body: "Find leading Venice founders, developers, researchers, operators, and ecosystem contributors.",
  },
  {
    id: "launches",
    name: "Rialto Launches",
    icon: Rocket,
    body: "A launch platform for Venice-native startups, apps, agents, infrastructure, and open-source tools.",
  },
  {
    id: "network",
    name: "Rialto Network",
    icon: Network,
    body: "A curated network connecting Venice founders, developers, operators, investors, and strategic partners.",
  },
  {
    id: "capital",
    name: "Rialto Capital",
    icon: Wallet,
    body: "Future infrastructure supporting capital formation, venture coordination, and ecosystem growth across Venice.",
  },
];

function Pillars() {
  return (
    <section id="intelligence" className="py-24 lg:py-32 bg-surface border-y border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[720px]">
          <div className="text-[11.5px] font-medium text-accent uppercase tracking-wider mb-3">
            Platform
          </div>
          <h2 className="text-[36px] sm:text-[44px] font-semibold tracking-tighter text-foreground leading-tight">
            One platform for the Venice ecosystem.
          </h2>
          <p className="text-[16px] text-muted mt-5 leading-relaxed max-w-[640px]">
            Six surfaces working together. Intelligence at the bottom, capital
            at the top. Every Venice builder, launch, and narrative flows
            through one coordinated layer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px mt-14 bg-border rounded-xl overflow-hidden border border-border">
          {PILLARS.map((p) => (
            <div
              key={p.id}
              id={p.id}
              className="bg-card p-7 hover:bg-background transition-colors scroll-mt-24"
            >
              <div className="size-10 rounded-md bg-accent-soft text-accent grid place-items-center mb-5">
                <p.icon className="size-5" />
              </div>
              <h3 className="text-[15px] font-semibold tracking-tight text-foreground">
                {p.name}
              </h3>
              <p className="text-[13.5px] text-muted mt-2 leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── DASHBOARD PREVIEW ─────────────────────────── */

const PROJECTS = [
  { name: "Venice Research Agent",   tag: "Agents",   icon: Cpu,        score: 98, growth: "+38%" },
  { name: "Venice Creator Studio",   tag: "Apps",     icon: Sparkles,   score: 94, growth: "+22%" },
  { name: "Venice Inference Router", tag: "Infra",    icon: Workflow,   score: 92, growth: "+31%" },
  { name: "Venice AgentOps",         tag: "Tools",    icon: Activity,   score: 89, growth: "+18%" },
  { name: "Venice Memory Layer",     tag: "Infra",    icon: Layers,     score: 86, growth: "+27%" },
  { name: "Venice App Directory",    tag: "Discover", icon: Boxes,      score: 84, growth: "+14%" },
];

function DashboardPreview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[760px] mb-14">
          <div className="text-[11.5px] font-medium text-accent uppercase tracking-wider mb-3">
            Live dashboard
          </div>
          <h2 className="text-[36px] sm:text-[44px] font-semibold tracking-tighter text-foreground leading-tight">
            Real-time visibility into what is being built.
          </h2>
          <p className="text-[16px] text-muted mt-5 leading-relaxed max-w-[640px]">
            Ecosystem charts, trending launches, ranked builders, narrative
            velocity, and agent activity. Updated continuously across the
            Venice ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="card p-5 lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-[10.5px] text-muted uppercase tracking-wider">
                  Ecosystem growth
                </div>
                <div className="text-[18px] font-semibold text-foreground mt-1 tracking-tight">
                  Venice · 90 days
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[12px] text-positive font-medium">
                <TrendingUp className="size-3.5" /> +142% momentum
              </div>
            </div>
            <div className="h-[220px] relative overflow-hidden">
              <FakeChart />
            </div>
          </div>

          <div className="card p-5">
            <div className="text-[10.5px] text-muted uppercase tracking-wider mb-4">
              Agent activity
            </div>
            <div className="space-y-3">
              {[
                { name: "Venice Research Agent", action: "shipped v0.4", time: "2m" },
                { name: "@inference_labs",       action: "deployed router", time: "11m" },
                { name: "Venice Creator Studio", action: "launched beta", time: "1h" },
                { name: "@privacy_first",        action: "published spec", time: "3h" },
                { name: "Venice AgentOps",       action: "new release", time: "5h" },
              ].map((a) => (
                <div key={a.name + a.time} className="flex items-start gap-2.5">
                  <div className="size-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[12.5px] text-foreground truncate">
                      <span className="font-medium">{a.name}</span>{" "}
                      <span className="text-muted">{a.action}</span>
                    </div>
                    <div className="text-[10.5px] text-subtle mt-0.5">
                      {a.time} ago
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-5 lg:col-span-3">
            <div className="flex items-center justify-between mb-5">
              <div className="text-[10.5px] text-muted uppercase tracking-wider">
                Trending Venice projects
              </div>
              <Link
                href="#"
                className="text-[12px] text-accent font-medium inline-flex items-center gap-1"
              >
                View all <ArrowRight className="size-3" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {PROJECTS.map((p) => (
                <div
                  key={p.name}
                  className="border border-border rounded-lg p-3.5 bg-background hover:border-border-strong transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="size-8 rounded-md bg-accent-soft text-accent grid place-items-center">
                      <p.icon className="size-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[13px] font-medium text-foreground truncate">
                        {p.name}
                      </div>
                      <div className="text-[10.5px] text-muted">{p.tag}</div>
                    </div>
                    <div className="text-[11px] font-medium text-positive">
                      {p.growth}
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[10.5px] text-muted">
                    <span>Signal score</span>
                    <span className="font-mono text-foreground tabular-nums">
                      {p.score}
                    </span>
                  </div>
                  <div className="mt-1.5 h-1 rounded-full bg-surface-2 overflow-hidden">
                    <div
                      className="h-full bg-accent"
                      style={{ width: `${p.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── BUILDER NETWORK ─────────────────────────── */

const BUILDER_BULLETS = [
  { icon: Users,    label: "Founder profiles" },
  { icon: Sparkles, label: "Startup perks" },
  { icon: Rocket,   label: "Launch amplification" },
  { icon: BarChart3,label: "Builder rankings" },
  { icon: Network,  label: "Ecosystem partnerships" },
  { icon: Wallet,   label: "Investor visibility" },
];

function BuilderNetwork() {
  return (
    <section id="builders" className="py-24 lg:py-32 bg-surface border-y border-border scroll-mt-24">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
        <div>
          <div className="text-[11.5px] font-medium text-accent uppercase tracking-wider mb-3">
            For Venice builders
          </div>
          <h2 className="text-[36px] sm:text-[44px] font-semibold tracking-tighter text-foreground leading-tight">
            Built for the people building on Venice.
          </h2>
          <p className="text-[16px] text-muted mt-5 leading-relaxed">
            Rialto AI helps Venice founders and developers get discovered,
            launch products, access startup perks, connect with ecosystem
            participants, and build reputation across the Venice ecosystem.
          </p>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {BUILDER_BULLETS.map((b) => (
              <li
                key={b.label}
                className="flex items-center gap-2.5 text-[13.5px] text-foreground"
              >
                <span className="size-7 rounded-md bg-accent-soft text-accent grid place-items-center">
                  <b.icon className="size-3.5" />
                </span>
                {b.label}
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <Link
              href="/sign-up"
              className="btn-primary h-11 px-5 text-[14px] font-medium inline-flex items-center gap-1.5"
            >
              Apply as a Builder <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="text-[10.5px] text-muted uppercase tracking-wider">
                Builder profile
              </div>
              <div className="text-[18px] font-semibold text-foreground mt-1 tracking-tight">
                Featured this week
              </div>
            </div>
            <span className="chip chip-accent">
              <Sparkles className="size-3" /> Verified
            </span>
          </div>

          <div className="flex items-start gap-4">
            <div className="size-14 rounded-full bg-gradient-to-br from-accent to-accent-hover" />
            <div className="flex-1">
              <div className="text-[16px] font-semibold text-foreground">
                @venice_research
              </div>
              <div className="text-[12.5px] text-muted">
                Research agents on Venice. Inference-native workflows.
              </div>
              <div className="flex items-center gap-3 mt-3 text-[11.5px] text-muted">
                <span className="inline-flex items-center gap-1">
                  <Rocket className="size-3" /> 4 launches
                </span>
                <span className="inline-flex items-center gap-1">
                  <Users className="size-3" /> 2.4k network
                </span>
                <span className="inline-flex items-center gap-1">
                  <TrendingUp className="size-3 text-positive" />
                  <span className="text-positive font-medium">+38%</span>
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-6">
            {[
              { label: "Signal", value: "98" },
              { label: "Launches", value: "4" },
              { label: "Network", value: "2.4k" },
            ].map((s) => (
              <div key={s.label} className="border border-border rounded-lg p-3">
                <div className="text-[10.5px] text-muted uppercase tracking-wider">
                  {s.label}
                </div>
                <div className="text-[18px] font-semibold text-foreground mt-1 tracking-tight tabular-nums">
                  {s.value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-[12px]">
            <div className="text-muted">Verified Venice builder</div>
            <Link
              href="#"
              className="text-accent font-medium inline-flex items-center gap-1"
            >
              View profile <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── VISION ─────────────────────────── */

function Vision() {
  return (
    <section id="launches" className="py-28 lg:py-36 relative overflow-hidden scroll-mt-24">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 30%, rgba(234, 88, 12, 0.08), transparent 70%)",
        }}
      />
      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="max-w-[820px] mx-auto text-center">
          <div className="text-[11.5px] font-medium text-accent uppercase tracking-wider mb-3">
            Vision
          </div>
          <h2 className="text-[40px] sm:text-[52px] font-semibold tracking-tighter text-foreground leading-[1.05]">
            The coordination layer for the
            <br />
            <span className="text-accent">Venice ecosystem.</span>
          </h2>
          <p className="text-[16px] sm:text-[17px] text-muted mt-7 leading-relaxed max-w-[680px] mx-auto">
            As AI models commoditize, value shifts toward inference, privacy,
            workflows, distribution, and ecosystem coordination. Venice sits at
            the center of that transition. Rialto AI exists to organize and
            accelerate the Venice ecosystem through intelligence, discovery,
            launches, and builder infrastructure.
          </p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-[640px] mx-auto">
            {[
              { icon: Shield,    label: "Privacy-first" },
              { icon: Cpu,       label: "Inference-native" },
              { icon: Network,   label: "Ecosystem-aligned" },
              { icon: Zap,       label: "Infrastructure-grade" },
            ].map((v) => (
              <div
                key={v.label}
                className="card p-3.5 flex flex-col items-center gap-2 text-center"
              >
                <span className="size-8 rounded-md bg-accent-soft text-accent grid place-items-center">
                  <v.icon className="size-4" />
                </span>
                <div className="text-[12px] font-medium text-foreground">
                  {v.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── ROADMAP ─────────────────────────── */

const PHASES = [
  {
    phase: "Phase 1",
    name: "Intelligence",
    body: "Venice ecosystem analytics, rankings, launch tracking, media, and builder discovery.",
    status: "Live",
    icon: LineChart,
  },
  {
    phase: "Phase 2",
    name: "Network",
    body: "Founder profiles, startup perks, ecosystem onboarding, and curated Venice builder networks.",
    status: "Building",
    icon: Network,
  },
  {
    phase: "Phase 3",
    name: "Launches",
    body: "Launch platform, app discovery, agent marketplace, and ecosystem distribution for Venice-native products.",
    status: "Q3 2026",
    icon: Rocket,
  },
  {
    phase: "Phase 4",
    name: "Capital",
    body: "Capital infrastructure, venture coordination, ecosystem investing, and treasury-aligned strategy across Venice.",
    status: "2027",
    icon: Wallet,
  },
];

function Roadmap() {
  return (
    <section id="roadmap" className="py-24 lg:py-32 bg-surface border-y border-border scroll-mt-24">
      <div id="capital" className="max-w-[1200px] mx-auto px-6 scroll-mt-24">
        <div className="max-w-[760px]">
          <div className="text-[11.5px] font-medium text-accent uppercase tracking-wider mb-3">
            Roadmap
          </div>
          <h2 className="text-[36px] sm:text-[44px] font-semibold tracking-tighter text-foreground leading-tight">
            From ecosystem intelligence to Venice infrastructure.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
          {PHASES.map((p, i) => (
            <div
              key={p.phase}
              className="card card-interactive p-6 flex flex-col relative"
            >
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-mono text-subtle tracking-wider">
                  {p.phase}
                </div>
                <span
                  className={
                    "text-[10.5px] font-medium px-2 py-0.5 rounded-full uppercase tracking-wider " +
                    (p.status === "Live"
                      ? "bg-positive/15 text-positive"
                      : p.status === "Building"
                        ? "bg-accent-soft text-accent"
                        : "bg-surface-2 text-muted")
                  }
                >
                  {p.status}
                </span>
              </div>
              <div className="size-10 rounded-md bg-accent-soft text-accent grid place-items-center mt-5">
                <p.icon className="size-5" />
              </div>
              <h3 className="text-[17px] font-semibold tracking-tight text-foreground mt-4">
                {p.name}
              </h3>
              <p className="text-[13px] text-muted mt-2 leading-relaxed">
                {p.body}
              </p>
              <div className="mt-5 flex items-center gap-1.5">
                {PHASES.map((_, j) => (
                  <div
                    key={j}
                    className={
                      "h-0.5 flex-1 rounded-full " +
                      (j <= i ? "bg-accent" : "bg-border")
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FINAL CTA ─────────────────────────── */

function FinalCta() {
  return (
    <section id="network" className="py-24 lg:py-32 scroll-mt-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="card p-10 lg:p-16 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(234, 88, 12, 0.12), transparent 70%)",
            }}
          />
          <div className="relative">
            <div className="inline-flex">
              <Logo size={28} withWordmark={false} />
            </div>
            <h2 className="text-[36px] sm:text-[48px] font-semibold tracking-tighter text-foreground leading-[1.05] mt-7">
              Join the Venice ecosystem.
            </h2>
            <p className="text-[16px] text-muted mt-5 max-w-[600px] mx-auto leading-relaxed">
              Rialto AI is opening early access for Venice founders, developers,
              investors, researchers, and ecosystem operators.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-9">
              <Link
                href="/sign-up"
                className="btn-primary h-11 px-5 text-[14px] font-medium flex items-center gap-1.5"
              >
                Join Early Access <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/sign-up"
                className="btn-ghost h-11 px-5 text-[14px] font-medium flex items-center gap-1.5"
              >
                Apply as a Builder
                <ArrowRight className="size-4 text-muted" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
