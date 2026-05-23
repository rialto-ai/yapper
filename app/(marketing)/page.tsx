import Link from "next/link";
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  Gauge,
  Network,
  Search,
  Sparkles,
  Trophy,
  Zap,
} from "lucide-react";
import { Logo } from "@/components/logo";

export default function Page() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Features />
      <ProductPreview />
      <UseCases />
      <Pricing />
      <FaqAndCta />
    </>
  );
}

/* ─────────────────────── HERO ─────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <BackdropGrid />
      <div className="relative max-w-[1180px] mx-auto px-6 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="flex flex-col items-center text-center max-w-[820px] mx-auto">
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-[12px] text-muted hover:text-foreground transition-colors mb-8 border border-border bg-card rounded-full pl-1 pr-3 py-1"
          >
            <span className="inline-flex items-center gap-1.5 bg-accent-soft text-accent rounded-full px-2 py-px text-[10.5px] font-medium tracking-wide uppercase">
              <Sparkles className="size-2.5" /> New
            </span>
            <span>Rialto v0.2 ships ⌘K search + real-time alerts</span>
            <ArrowRight className="size-3" />
          </Link>

          <h1 className="text-[44px] sm:text-[60px] lg:text-[72px] font-semibold tracking-tighter leading-[1.04] text-foreground">
            The signal layer for the
            <br />
            <span className="text-accent">open AI economy.</span>
          </h1>

          <p className="text-[16px] sm:text-[18px] text-muted mt-6 max-w-[640px] leading-relaxed">
            Rialto streams every conversation, account, and narrative shaping
            decentralized AI — then ranks who actually drives the story. Built
            for founders, investors, and researchers who can&apos;t afford to miss what&apos;s next.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-9">
            <Link href="/sign-up" className="btn-primary h-11 px-5 text-[14px] font-medium flex items-center gap-1.5">
              Start free <ArrowRight className="size-4" />
            </Link>
            <Link href="/app" className="btn-ghost h-11 px-5 text-[14px] font-medium flex items-center gap-1.5">
              Live demo <ArrowRight className="size-4 text-muted" />
            </Link>
          </div>

          <div className="flex items-center gap-2 mt-6 text-[12.5px] text-muted">
            <CheckCircle2 className="size-3.5 text-positive" />
            No credit card required
            <span className="text-subtle">·</span>
            <CheckCircle2 className="size-3.5 text-positive" />
            14-day pro trial
          </div>
        </div>
      </div>
    </section>
  );
}

function BackdropGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(var(--border)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--border)) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, black 30%, transparent 75%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(234, 88, 12, 0.14), transparent 60%)",
        }}
      />
    </div>
  );
}

/* ─────────────────────── SOCIAL PROOF ─────────────────────── */

function SocialProof() {
  const logos = ["Sequoia", "a16z", "Paradigm", "Variant", "Multicoin", "Dragonfly", "USV"];
  return (
    <section className="border-y border-border bg-surface">
      <div className="max-w-[1180px] mx-auto px-6 py-10 flex flex-col items-center gap-6">
        <div className="text-[11.5px] font-medium text-muted uppercase tracking-wider">
          Trusted by teams at
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
          {logos.map((l) => (
            <span key={l} className="text-[18px] font-semibold tracking-tight text-foreground">
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── FEATURES ─────────────────────── */

const FEATURES = [
  {
    icon: Gauge,
    title: "Live ecosystem dashboard",
    body: "Mentions, sentiment, viral posts, and signal index updated every second. See ecosystem momentum at a glance.",
  },
  {
    icon: Trophy,
    title: "Signal Score leaderboards",
    body: "Proprietary score blends engagement quality, narrative concentration, reach efficiency, and growth velocity. Anti-gaming by design.",
  },
  {
    icon: Network,
    title: "Narrative intelligence graph",
    body: "Force-directed view of who shapes which narrative. Hover to isolate the 1-hop neighborhood of any node.",
  },
  {
    icon: Bell,
    title: "Realtime alerts",
    body: "Account engagement spikes, narrative acceleration, viral post detection. Delivered to email, Telegram, Discord, or push.",
  },
  {
    icon: Search,
    title: "Command palette ⌘K",
    body: "Jump to any account, narrative, or page instantly. Fuzzy match across the entire workspace from a single keystroke.",
  },
  {
    icon: Zap,
    title: "Fast by default",
    body: "Sub-200ms dashboard loads. Streaming updates under one second. Built on Next.js, Neon Postgres, and edge cron.",
  },
];

function Features() {
  return (
    <section id="product" className="py-24 lg:py-32">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="max-w-[640px]">
          <div className="text-[11.5px] font-medium text-accent uppercase tracking-wider mb-3">Platform</div>
          <h2 className="text-[36px] sm:text-[44px] font-semibold tracking-tighter text-foreground leading-tight">
            Every conversation, ranked and connected.
          </h2>
          <p className="text-[16px] text-muted mt-4 leading-relaxed">
            Rialto ingests the open AI ecosystem in real time and turns it into
            structured intelligence: ranked accounts, clustered narratives, and
            momentum signals you can actually act on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px mt-14 bg-border rounded-xl overflow-hidden border border-border">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-background p-7">
              <div className="size-10 rounded-md bg-accent-soft text-accent grid place-items-center mb-5">
                <f.icon className="size-5" />
              </div>
              <h3 className="text-[15px] font-semibold tracking-tight text-foreground">{f.title}</h3>
              <p className="text-[13.5px] text-muted mt-2 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── PRODUCT PREVIEW ─────────────────────── */

function ProductPreview() {
  return (
    <section className="py-20 lg:py-28 bg-surface border-y border-border">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-12">
          <div className="text-[11.5px] font-medium text-accent uppercase tracking-wider mb-3">Built for analysts</div>
          <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-tighter text-foreground leading-tight">
            A terminal for the open AI ecosystem.
          </h2>
        </div>

        <div className="card overflow-hidden shadow">
          {/* Faux window chrome */}
          <div className="h-9 border-b border-border bg-surface flex items-center px-4 gap-2">
            <span className="size-2.5 rounded-full bg-negative/50" />
            <span className="size-2.5 rounded-full bg-warning/50" />
            <span className="size-2.5 rounded-full bg-positive/50" />
            <div className="mx-auto text-[11.5px] font-mono text-muted">rialto.ai/app</div>
          </div>

          <div className="grid grid-cols-[200px_1fr] min-h-[420px]">
            <div className="border-r border-border p-3 space-y-1">
              {["Dashboard", "Leaderboards", "Narratives", "Accounts", "Trends", "Alerts"].map((n, i) => (
                <div
                  key={n}
                  className={
                    "text-[12.5px] px-2.5 py-1.5 rounded-md " +
                    (i === 0 ? "bg-accent-soft text-accent font-medium" : "text-muted")
                  }
                >
                  {n}
                </div>
              ))}
            </div>

            <div className="p-5 space-y-4">
              <div className="grid grid-cols-4 gap-3">
                {[
                  { label: "Mentions / 24h", value: "62.4K", delta: "+18.2%" },
                  { label: "Active voices",  value: "8,914", delta: "+6.4%" },
                  { label: "Viral posts",    value: "47",    delta: "+27.1%" },
                  { label: "Signal index",   value: "184.6", delta: "+2.1%" },
                ].map((s) => (
                  <div key={s.label} className="card p-3.5">
                    <div className="text-[10.5px] text-muted uppercase tracking-wider">{s.label}</div>
                    <div className="text-[18px] font-semibold text-foreground mt-1.5">{s.value}</div>
                    <div className="text-[10.5px] text-positive font-medium mt-0.5">{s.delta}</div>
                  </div>
                ))}
              </div>

              <div className="card p-4 h-[220px] relative overflow-hidden">
                <div className="text-[10.5px] text-muted uppercase tracking-wider mb-3">Narrative velocity</div>
                <FakeChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FakeChart() {
  const colors = ["#ea580c", "#2563eb", "#10b981", "#8b5cf6", "#eab308"];
  const series = colors.map((c, i) =>
    Array.from({ length: 48 }, (_, x) => {
      const noise = Math.sin(x * 0.4 + i) * 12 + Math.cos(x * 0.18 + i * 2) * 18;
      return 30 + i * 18 + noise + x * 0.3;
    }),
  );
  const max = Math.max(...series.flat());
  const w = 100, h = 160;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className="absolute inset-x-4 bottom-3 w-[calc(100%-32px)] h-[170px] overflow-visible">
      {series.map((s, i) => {
        const pts = s.map((v, x) => `${(x / (s.length - 1)) * w},${h - (v / max) * h * 0.85}`).join(" ");
        return (
          <polyline
            key={i}
            points={pts}
            fill="none"
            stroke={colors[i]}
            strokeWidth="0.4"
            strokeLinejoin="round"
            strokeLinecap="round"
            opacity={0.9}
            vectorEffect="non-scaling-stroke"
            style={{ filter: "drop-shadow(0 0 1.5px " + colors[i] + "33)" }}
          />
        );
      })}
    </svg>
  );
}

/* ─────────────────────── USE CASES ─────────────────────── */

const USE_CASES = [
  {
    heading: "For founders",
    body:
      "See who is actually shaping your category — and engage them before your competitors do. Track the narratives you're meant to own.",
    bullet: "Discover under-the-radar voices early",
  },
  {
    heading: "For investors",
    body:
      "Run diligence at the speed of conversation. Spot accelerating narratives, rising operators, and weakening positions before they hit consensus.",
    bullet: "Beat consensus by 6 weeks",
  },
  {
    heading: "For researchers",
    body:
      "Cluster the open AI conversation into citable narratives. Export ranked accounts, momentum charts, and audience graphs.",
    bullet: "Publication-ready exports",
  },
];

function UseCases() {
  return (
    <section id="customers" className="py-24 lg:py-32">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="max-w-[640px] mb-14">
          <div className="text-[11.5px] font-medium text-accent uppercase tracking-wider mb-3">Use cases</div>
          <h2 className="text-[36px] sm:text-[44px] font-semibold tracking-tighter text-foreground leading-tight">
            Built for the people deciding what gets funded, built, and read.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {USE_CASES.map((u) => (
            <div key={u.heading} className="card p-6">
              <h3 className="text-[16px] font-semibold tracking-tight text-foreground">{u.heading}</h3>
              <p className="text-[13.5px] text-muted mt-2 leading-relaxed">{u.body}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-[12.5px] text-accent font-medium">
                <CheckCircle2 className="size-3.5" />
                {u.bullet}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── PRICING ─────────────────────── */

const TIERS = [
  {
    name: "Free",
    price: "$0",
    note: "for individuals",
    bullets: [
      "Live dashboard, delayed 30 min",
      "Top 50 accounts",
      "Top 5 narratives",
      "Daily email digest",
    ],
    cta: "Start free",
    primary: false,
  },
  {
    name: "Pro",
    price: "$49",
    note: "per user / month",
    bullets: [
      "Realtime everything",
      "Full leaderboards + alerts",
      "Account intelligence pages",
      "CSV exports + REST API access",
      "Discord / Telegram / push",
    ],
    cta: "Start 14-day trial",
    primary: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    note: "for teams + funds",
    bullets: [
      "Private monitoring lists",
      "Custom dashboards",
      "Embedded analytics",
      "Dedicated success engineer",
      "SOC 2, SSO, audit logs",
    ],
    cta: "Talk to sales",
    primary: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-surface border-y border-border">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-14">
          <div className="text-[11.5px] font-medium text-accent uppercase tracking-wider mb-3">Pricing</div>
          <h2 className="text-[36px] sm:text-[44px] font-semibold tracking-tighter text-foreground leading-tight">
            Simple, transparent, founder-friendly.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1040px] mx-auto">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={
                "card p-7 flex flex-col " +
                (t.primary ? "ring-2 ring-accent shadow" : "")
              }
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[16px] font-semibold tracking-tight text-foreground">{t.name}</h3>
                {t.primary && (
                  <span className="text-[10.5px] font-medium text-accent bg-accent-soft px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Recommended
                  </span>
                )}
              </div>
              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="text-[36px] font-semibold tracking-tight text-foreground">{t.price}</span>
                <span className="text-[12.5px] text-muted">{t.note}</span>
              </div>
              <ul className="mt-6 space-y-2.5">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[13.5px] text-foreground">
                    <CheckCircle2 className="size-3.5 text-accent shrink-0 mt-[3px]" />
                    <span className="text-muted">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex-1" />
              <Link
                href="/sign-up"
                className={
                  "mt-7 h-10 rounded-md text-[13.5px] font-medium flex items-center justify-center transition-colors " +
                  (t.primary
                    ? "btn-primary"
                    : "btn-ghost")
                }
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── FAQ + CTA ─────────────────────── */

function FaqAndCta() {
  return (
    <>
      <section className="py-24 lg:py-32">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12">
          <div>
            <div className="text-[11.5px] font-medium text-accent uppercase tracking-wider mb-3">FAQ</div>
            <h2 className="text-[32px] font-semibold tracking-tighter text-foreground leading-tight">
              Common questions.
            </h2>
            <p className="text-[14px] text-muted mt-3 leading-relaxed max-w-[280px]">
              Still curious? <Link href="#" className="text-accent">Reach out</Link> — we respond fast.
            </p>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {[
              { q: "Where does Rialto's data come from?",                     a: "Today we ingest X (Twitter) v2 search and tracked-account streams. Farcaster, Reddit, GitHub, and YouTube are on the roadmap." },
              { q: "What is the Signal Score made of?",                       a: "A weighted blend of engagement quality, narrative concentration, reach efficiency, posting consistency, and follower growth velocity. Log-scaled to penalize follower padding." },
              { q: "How quickly does data appear in the dashboard?",          a: "Pro accounts see new posts within 60 seconds. Free accounts see the same data at a 30 minute delay." },
              { q: "Do you support exports?",                                 a: "CSV exports of any leaderboard, account, or narrative on Pro. JSON via REST API on Pro and Enterprise." },
              { q: "Can I add Rialto to my Discord or Telegram?",             a: "Yes. Each alert rule can fan out to email, Telegram, Discord webhook, or push, with per-channel quiet hours." },
              { q: "Is the data private?",                                    a: "Workspace data is end-to-end encrypted at rest. Pro accounts can mark watchlists private; Enterprise adds SSO and SOC 2." },
            ].map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer text-[15px] font-medium text-foreground list-none">
                  {f.q}
                  <ArrowRight className="size-4 text-muted group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-[13.5px] text-muted mt-3 leading-relaxed pr-8">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="card p-10 lg:p-14 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(234, 88, 12, 0.10), transparent 70%)",
              }}
            />
            <div className="relative">
              <Logo size={28} withWordmark={false} />
              <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-tighter text-foreground leading-tight mt-6">
                Start ranking what matters in your ecosystem.
              </h2>
              <p className="text-[15px] text-muted mt-4 max-w-[480px] mx-auto leading-relaxed">
                Free forever for individuals. Try Pro for 14 days with one click.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
                <Link href="/sign-up" className="btn-primary h-11 px-5 text-[14px] font-medium flex items-center gap-1.5">
                  Start free <ArrowRight className="size-4" />
                </Link>
                <Link href="/app" className="btn-ghost h-11 px-5 text-[14px] font-medium">
                  See the live demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
