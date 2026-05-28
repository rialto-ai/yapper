import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  Radio,
  Church,
  Scale,
  Building2,
  Check,
  Award,
  Layers,
  Sparkles,
} from "lucide-react";

const stats = [
  { value: "150+", label: "DSPs & streaming platforms", tone: "accent" as const },
  { value: "32", label: "Christian channels", tone: "secondary" as const },
  { value: "60+", label: "Rights organizations", tone: "accent" as const },
  { value: "20+", label: "Infrastructure partners", tone: "secondary" as const },
];

const dsps: { name: string; tier?: "Tier 1" | "Tier 2" }[] = [
  { name: "Spotify", tier: "Tier 1" },
  { name: "Apple Music", tier: "Tier 1" },
  { name: "YouTube Music", tier: "Tier 1" },
  { name: "Amazon Music", tier: "Tier 1" },
  { name: "Deezer", tier: "Tier 1" },
  { name: "Tidal", tier: "Tier 1" },
  { name: "Pandora", tier: "Tier 2" },
  { name: "TikTok", tier: "Tier 1" },
  { name: "Instagram", tier: "Tier 1" },
  { name: "SoundCloud", tier: "Tier 2" },
  { name: "Audiomack", tier: "Tier 2" },
  { name: "Beatport", tier: "Tier 2" },
  { name: "NetEase Music", tier: "Tier 2" },
  { name: "JOOX", tier: "Tier 2" },
  { name: "KKBox", tier: "Tier 2" },
  { name: "Anghami", tier: "Tier 2" },
  { name: "Boomplay", tier: "Tier 2" },
  { name: "Yandex Music", tier: "Tier 2" },
  { name: "LineMusic", tier: "Tier 2" },
  { name: "Melon", tier: "Tier 2" },
  { name: "Genie Music", tier: "Tier 2" },
  { name: "Bugs!", tier: "Tier 2" },
  { name: "Joox HK", tier: "Tier 2" },
  { name: "QQ Music", tier: "Tier 2" },
];

const christianPlatforms = [
  "CCLI SongSelect",
  "PraiseCharts",
  "Multitracks.com",
  "WorshipReady",
  "Loop Community",
  "Planning Center",
  "Church on Demand",
  "GodTube",
  "WeAreWorship",
  "ChurchTV Asia",
  "K-Worship Network",
  "Sing! Worship",
  "Pure Flix Music",
  "RightNow Media",
  "Faithlife TV",
  "Worship Online",
];

const proRegions = [
  {
    region: "Americas",
    items: ["ASCAP", "BMI", "SESAC", "GMR", "SoundExchange", "HFA", "MLC", "SOCAN"],
  },
  {
    region: "Europe",
    items: ["PRS for Music", "GEMA", "SACEM", "SIAE", "SGAE", "PPCA", "BUMA"],
  },
  {
    region: "Asia-Pacific",
    items: ["APRA AMCOS", "JASRAC", "KOMCA", "MÜST", "COMPASS", "WAMI", "MACP"],
  },
  {
    region: "Other",
    items: ["CCLI", "Christian Copyright Solutions", "OneLicense"],
  },
];

const infraGroups = [
  {
    icon: Building2,
    title: "Payments",
    items: ["Stripe Connect", "Wise", "Plaid", "Adyen", "Mastercard", "Visa"],
  },
  {
    icon: Award,
    title: "Identity & contracts",
    items: ["DocuSign", "Persona", "Stripe Identity"],
  },
  {
    icon: Layers,
    title: "Cloud & data",
    items: ["AWS", "Cloudflare", "Snowflake", "Vercel", "Datadog", "PostHog"],
  },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-soft/60 via-white to-secondary-soft/40 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgb(67 56 202) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative max-w-[960px] mx-auto px-8 pt-24 pb-16 text-center">
          <p className="label-eyebrow mb-3">Partners &amp; integrations</p>
          <h1 className="text-[48px] md:text-[56px] font-bold tracking-tight leading-[1.05] mb-6">
            An ecosystem built for{" "}
            <span className="bg-gradient-to-br from-accent to-secondary bg-clip-text text-transparent">
              Christian music.
            </span>
          </h1>
          <p className="text-[17px] md:text-[18px] text-subtle max-w-[680px] mx-auto leading-relaxed">
            Selah integrates with 150+ DSPs, 32 Christian channels, 60+ PROs and rights organizations, plus the payment, identity, and infrastructure layer behind global music operations.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-border bg-white py-12">
        <div className="max-w-[1100px] mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-y-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p
                className={`text-[40px] md:text-[44px] font-bold tracking-tight mb-2 bg-clip-text text-transparent ${
                  s.tone === "accent"
                    ? "bg-gradient-to-br from-accent to-accent-hover"
                    : "bg-gradient-to-br from-secondary to-secondary-hover"
                }`}
              >
                {s.value}
              </p>
              <p className="text-[12px] text-muted font-medium uppercase tracking-wider">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DSPs */}
      <section className="py-24 bg-white">
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="max-w-[680px] mb-12">
            <div className="flex items-center gap-2 mb-3">
              <Radio size={16} className="text-accent" strokeWidth={1.8} />
              <p className="label-eyebrow !mb-0">Streaming</p>
            </div>
            <h2 className="text-[32px] md:text-[36px] font-bold tracking-tight mb-4 leading-tight">
              DSPs &amp; streaming platforms
            </h2>
            <p className="text-[16px] text-subtle leading-relaxed">
              Distribution to every major streaming service and store across 84 territories.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {dsps.map((dsp) => (
              <div
                key={dsp.name}
                className="group relative bg-white border border-border hover:border-accent/30 rounded-xl px-3 py-5 flex flex-col items-center justify-center text-center transition-all hover:shadow-[0_6px_24px_-12px_rgba(67,56,202,0.25)] hover:-translate-y-0.5"
              >
                {dsp.tier === "Tier 1" && (
                  <span className="absolute top-2 right-2 text-[9px] font-semibold uppercase tracking-wider text-accent bg-accent-soft border border-accent/15 rounded-full px-1.5 py-0.5">
                    T1
                  </span>
                )}
                <p className="text-[13px] font-semibold text-foreground tracking-tight leading-tight">
                  {dsp.name}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-[13px] text-muted">
            <Globe2 size={14} className="text-accent" strokeWidth={1.8} />
            <span>And 120+ regional stores worldwide</span>
          </div>
        </div>
      </section>

      {/* Christian channels */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgb(217 119 6) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative max-w-[1140px] mx-auto px-8">
          <div className="max-w-[680px] mb-12">
            <div className="flex items-center gap-2 mb-3">
              <Church size={16} className="text-secondary" strokeWidth={1.8} />
              <p className="label-eyebrow-secondary !mb-0">Christian-native</p>
            </div>
            <h2 className="text-[32px] md:text-[36px] font-bold tracking-tight mb-4 leading-tight">
              Christian channels &amp; worship platforms
            </h2>
            <p className="text-[16px] text-subtle leading-relaxed">
              The Christian-native distribution network secular distributors don&apos;t reach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {christianPlatforms.map((name) => (
              <div
                key={name}
                className="group relative bg-white border border-secondary/15 hover:border-secondary/40 rounded-xl p-5 transition-all hover:shadow-[0_6px_24px_-12px_rgba(217,119,6,0.3)] hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-[14px] font-semibold text-foreground tracking-tight leading-tight">
                    {name}
                  </p>
                  <span className="shrink-0 inline-flex items-center gap-1 text-[9px] font-semibold uppercase tracking-wider text-secondary bg-secondary-soft border border-secondary/15 rounded-full px-1.5 py-0.5">
                    <Sparkles size={9} strokeWidth={2} />
                    Native
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROs */}
      <section className="py-24 bg-white">
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="max-w-[680px] mb-12">
            <div className="flex items-center gap-2 mb-3">
              <Scale size={16} className="text-accent" strokeWidth={1.8} />
              <p className="label-eyebrow !mb-0">Rights collection</p>
            </div>
            <h2 className="text-[32px] md:text-[36px] font-bold tracking-tight mb-4 leading-tight">
              PROs &amp; rights organizations
            </h2>
            <p className="text-[16px] text-subtle leading-relaxed">
              Performance, mechanical, neighboring rights, and sync collection across 60+ territories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {proRegions.map((region, idx) => (
              <div
                key={region.region}
                className="card p-7"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        idx % 2 === 0
                          ? "bg-accent-soft border border-accent/15"
                          : "bg-secondary-soft border border-secondary/15"
                      }`}
                    >
                      <Globe2
                        size={15}
                        className={idx % 2 === 0 ? "text-accent" : "text-secondary"}
                        strokeWidth={1.8}
                      />
                    </div>
                    <h3 className="text-[15px] font-semibold tracking-tight">
                      {region.region}
                    </h3>
                  </div>
                  <span className="text-[11px] text-muted font-medium">
                    {region.items.length} partners
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {region.items.map((item) => (
                    <span
                      key={item}
                      className={`inline-flex items-center gap-1.5 text-[12px] font-medium px-2.5 py-1.5 rounded-md border ${
                        idx % 2 === 0
                          ? "bg-surface text-foreground border-border hover:border-accent/30"
                          : "bg-surface text-foreground border-border hover:border-secondary/30"
                      } transition-colors`}
                    >
                      <Check
                        size={11}
                        className={idx % 2 === 0 ? "text-accent" : "text-secondary"}
                        strokeWidth={2.5}
                      />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-24 bg-surface">
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="max-w-[680px] mb-12">
            <div className="flex items-center gap-2 mb-3">
              <Layers size={16} className="text-secondary" strokeWidth={1.8} />
              <p className="label-eyebrow-secondary !mb-0">Infrastructure</p>
            </div>
            <h2 className="text-[32px] md:text-[36px] font-bold tracking-tight mb-4 leading-tight">
              Payment, identity &amp; infrastructure
            </h2>
            <p className="text-[16px] text-subtle leading-relaxed">
              The financial and operational layer behind multi-currency global payouts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {infraGroups.map((group, idx) => {
              const Icon = group.icon;
              const isAccent = idx % 2 === 0;
              return (
                <div key={group.title} className="card p-7">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-5 ${
                      isAccent
                        ? "bg-accent-soft border border-accent/15"
                        : "bg-secondary-soft border border-secondary/15"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={isAccent ? "text-accent" : "text-secondary"}
                      strokeWidth={1.8}
                    />
                  </div>
                  <h3 className="text-[16px] font-semibold tracking-tight mb-4">
                    {group.title}
                  </h3>
                  <div className="space-y-2">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-[13px] text-foreground py-1.5 px-2.5 bg-surface rounded-md border border-border"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isAccent ? "bg-accent" : "bg-secondary"
                          }`}
                        />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Become a partner CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#0F172A] text-white p-10 md:p-16">
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(rgb(165 180 252) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-accent/25 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-secondary/20 blur-[140px] rounded-full pointer-events-none" />

            <div className="relative max-w-[720px]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/10 mb-6">
                <Sparkles size={12} className="text-secondary" strokeWidth={2} />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/90">
                  Partner program
                </span>
              </div>
              <h2 className="text-[36px] md:text-[44px] font-bold tracking-tight mb-5 leading-[1.1]">
                Want to partner with{" "}
                <span className="bg-gradient-to-br from-accent to-secondary bg-clip-text text-transparent">
                  Selah?
                </span>
              </h2>
              <p className="text-[17px] text-white/75 leading-relaxed mb-8 max-w-[600px]">
                We integrate with DSPs, Christian platforms, rights organizations, and technology partners that serve the Christian music economy.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/about"
                  className="btn-primary text-[15px] !px-7 !py-3 inline-flex items-center justify-center gap-2"
                >
                  Apply to become a partner
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex items-center justify-center gap-2 text-[15px] font-semibold px-7 py-3 rounded-lg bg-white/[0.08] border border-white/15 text-white hover:bg-white/[0.12] transition-colors"
                >
                  Read the API docs
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
