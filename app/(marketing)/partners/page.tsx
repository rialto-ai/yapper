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
  Sparkles,
  Music2,
  Mic2,
} from "lucide-react";

const stats = [
  { value: "150+", label: "DSPs & streaming platforms", tone: "accent" as const },
  { value: "40+", label: "Christian channels & worship platforms", tone: "secondary" as const },
  { value: "60+", label: "PROs & rights organizations", tone: "accent" as const },
  { value: "120+", label: "Christian label partners", tone: "secondary" as const },
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
  { name: "NetEase Music", tier: "Tier 2" },
  { name: "JOOX", tier: "Tier 2" },
  { name: "KKBox", tier: "Tier 2" },
  { name: "Anghami", tier: "Tier 2" },
  { name: "Boomplay", tier: "Tier 2" },
  { name: "LineMusic", tier: "Tier 2" },
  { name: "Melon", tier: "Tier 2" },
];

const christianPlatforms = [
  { name: "CCLI SongSelect", desc: "Congregational licensing" },
  { name: "PraiseCharts", desc: "Chord charts and lead sheets" },
  { name: "Multitracks.com", desc: "Stems, loops, and tracks" },
  { name: "Planning Center", desc: "Service planning" },
  { name: "Loop Community", desc: "Worship tracks" },
  { name: "WorshipReady", desc: "Worship resources" },
  { name: "Church on Demand", desc: "Streaming for churches" },
  { name: "GodTube", desc: "Christian video" },
  { name: "WeAreWorship", desc: "Worship songs and licensing" },
  { name: "RightNow Media", desc: "Faith-based streaming" },
  { name: "Worship Online", desc: "Worship tutorials" },
  { name: "Sing! Worship", desc: "Hymn and worship resource" },
];

const proRegions = [
  {
    region: "Americas",
    items: ["ASCAP", "BMI", "SESAC", "GMR", "SoundExchange", "HFA", "MLC", "SOCAN"],
  },
  {
    region: "Europe",
    items: ["PRS for Music", "GEMA", "SACEM", "SIAE", "SGAE", "BUMA", "STIM"],
  },
  {
    region: "Asia-Pacific",
    items: ["APRA AMCOS", "PPCA", "KOMCA", "COMPASS", "WAMI", "MACP", "MÜST"],
  },
  {
    region: "Church licensing",
    items: ["CCLI", "Christian Copyright Solutions", "OneLicense", "ChurchSongs"],
  },
];

const labelPartners = [
  "Kingdom House Music",
  "Open Heaven Worship",
  "New City Music Group",
  "Mercy Records",
  "Cornerstone Records",
  "Harbor Songs",
  "Riverstone Rights",
  "Covenant Sound",
  "Light Path Records",
  "Hosanna Music",
  "Heritage Worship Co.",
  "Praise Path",
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
            backgroundImage: "radial-gradient(rgb(30 64 175) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative max-w-[960px] mx-auto px-8 pt-24 pb-16 text-center">
          <p className="label-eyebrow mb-3">Partners &amp; integrations</p>
          <h1 className="text-[48px] md:text-[56px] font-bold tracking-tight leading-[1.05] mb-6">
            An ecosystem built for{" "}
            <span className="brand-gradient-text">Christian music distribution.</span>
          </h1>
          <p className="text-[17px] md:text-[18px] text-subtle max-w-[700px] mx-auto leading-relaxed">
            Selah delivers Christian music across every major DSP, the Christian channel network that secular distributors miss, every relevant PRO and rights organization, and the labels and ministries shaping worship music globally.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-border bg-white py-12">
        <div className="max-w-[1100px] mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-y-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p
                className={`text-[36px] md:text-[42px] font-bold tracking-tight mb-2 bg-clip-text text-transparent ${
                  s.tone === "accent"
                    ? "bg-gradient-to-br from-accent to-accent-hover"
                    : "bg-gradient-to-br from-secondary to-secondary-hover"
                }`}
              >
                {s.value}
              </p>
              <p className="text-[12px] text-muted font-medium uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CHRISTIAN PLATFORMS - FEATURED FIRST */}
      <section className="py-24 bg-gradient-to-b from-secondary-soft/20 via-white to-white">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="text-center mb-12 max-w-[700px] mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-soft border border-secondary/15 mb-4">
              <Sparkles size={12} className="text-secondary" />
              <span className="text-[11px] font-semibold text-secondary uppercase tracking-wider">
                Christian-native
              </span>
            </div>
            <h2 className="text-[36px] font-bold tracking-tight mb-3">Christian channels and worship platforms.</h2>
            <p className="text-subtle text-[15px] leading-relaxed">
              The distribution layer for Christian music goes beyond Spotify and Apple. Selah connects you to every platform that worship leaders, congregations, and Christian audiences actually use.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {christianPlatforms.map((p, i) => (
              <div
                key={p.name}
                className={`card p-5 card-interactive ${
                  i % 2 === 0
                    ? "bg-gradient-to-br from-white to-secondary-soft/40 border-secondary/15"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <p className="text-[14px] font-bold text-foreground">{p.name}</p>
                  <Church size={14} className="text-secondary mt-0.5 shrink-0" strokeWidth={1.8} />
                </div>
                <p className="text-[11px] text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DSPs */}
      <section className="py-24 bg-white border-y border-border">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="max-w-[700px] mb-12">
            <div className="flex items-center gap-2 mb-3">
              <Radio size={14} className="text-accent" />
              <p className="label-eyebrow">DSPs &amp; streaming</p>
            </div>
            <h2 className="text-[34px] font-bold tracking-tight mb-3">
              Every major DSP. Worldwide.
            </h2>
            <p className="text-subtle text-[15px] leading-relaxed">
              Selah delivers your music to 150+ digital service providers and stores across 84 territories, with priority partnerships and Christian editorial relationships at the major platforms.
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {dsps.map((d) => (
              <div
                key={d.name}
                className="card px-3 py-4 flex flex-col items-center justify-center card-interactive text-center"
              >
                <span className="text-[13px] font-bold text-foreground mb-1.5">{d.name}</span>
                {d.tier === "Tier 1" && (
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-accent bg-accent-soft px-1.5 py-0.5 rounded">
                    Priority
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROS & RIGHTS */}
      <section className="py-24">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="max-w-[700px] mb-12">
            <div className="flex items-center gap-2 mb-3">
              <Scale size={14} className="text-secondary" />
              <p className="label-eyebrow-secondary">Rights &amp; royalty bodies</p>
            </div>
            <h2 className="text-[34px] font-bold tracking-tight mb-3">
              PROs, MROs, and CCLI: aggregated and connected.
            </h2>
            <p className="text-subtle text-[15px] leading-relaxed">
              Selah partners with publishers and rights bodies globally, with CCLI integration at the heart of our church licensing workflow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {proRegions.map((r, i) => (
              <div
                key={r.region}
                className={`card p-6 ${
                  r.region === "Church licensing"
                    ? "bg-gradient-to-br from-secondary-soft/40 to-white border-secondary/15"
                    : ""
                }`}
              >
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                  <Globe2
                    size={14}
                    className={r.region === "Church licensing" ? "text-secondary" : "text-accent"}
                    strokeWidth={1.8}
                  />
                  <h3
                    className={`text-[13px] font-bold uppercase tracking-wider ${
                      r.region === "Church licensing" ? "text-secondary" : "text-accent"
                    }`}
                  >
                    {r.region}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {r.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-[12px] font-semibold bg-surface text-foreground border border-border"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHRISTIAN LABEL PARTNERS */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="max-w-[700px] mb-12">
            <div className="flex items-center gap-2 mb-3">
              <Building2 size={14} className="text-accent" />
              <p className="label-eyebrow">Christian label partners</p>
            </div>
            <h2 className="text-[34px] font-bold tracking-tight mb-3">
              We partner with Christian labels of every size.
            </h2>
            <p className="text-subtle text-[15px] leading-relaxed">
              From single-artist boutique labels to multi-roster networks, Selah provides the distribution, marketing, royalty, and white-label partner portal infrastructure that Christian labels need to operate at scale.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {labelPartners.map((label, i) => (
              <div
                key={label}
                className={`card px-5 py-5 flex items-center gap-3 card-interactive ${
                  i % 3 === 0 ? "bg-gradient-to-br from-white to-accent-soft/30" : ""
                }`}
              >
                <div className="w-9 h-9 rounded-lg brand-gradient flex items-center justify-center text-white text-[11px] font-bold shrink-0">
                  {label.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </div>
                <p className="text-[12.5px] font-semibold text-foreground leading-tight">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-[13px] text-muted mb-3">A selection of Christian labels distributing through Selah.</p>
          </div>
        </div>
      </section>

      {/* WHAT WE PROVIDE TO LABELS */}
      <section className="py-24">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="text-center mb-12 max-w-[640px] mx-auto">
            <p className="label-eyebrow mb-3">For label partners</p>
            <h2 className="text-[34px] font-bold tracking-tight mb-3">What labels get from Selah.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: Globe2, title: "Global distribution at scale", body: "Multi-roster delivery to every DSP and the Christian channel network. Centralized rights and metadata." },
              { icon: Mic2, title: "White-label partner portal", body: "Your artists see their own portal under your branding. You maintain control of pipeline, splits, and statements." },
              { icon: Award, title: "Royalty accounting for your entire roster", body: "One ledger, one set of statements, multi-currency payouts to every collaborator." },
              { icon: Music2, title: "Marketing and campaign services", body: "Playlist pitching, church outreach, Christian radio servicing, and campaign management." },
            ].map((b, i) => (
              <div key={b.title} className="card p-7 card-interactive">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                    i % 2 === 0
                      ? "bg-gradient-to-br from-accent to-accent-hover shadow-md shadow-accent/20"
                      : "bg-gradient-to-br from-secondary to-secondary-hover shadow-md shadow-secondary/20"
                  }`}
                >
                  <b.icon size={18} className="text-white" strokeWidth={1.8} />
                </div>
                <h3 className="text-[16px] font-semibold mb-2">{b.title}</h3>
                <p className="text-[13.5px] text-subtle leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a partner CTA */}
      <section className="pb-28">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#0B2E5C] to-[#064E3B] p-12 md:p-14 text-white">
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(rgb(16 185 129) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[300px] bg-accent/30 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[300px] bg-secondary/30 blur-[140px] rounded-full pointer-events-none" />

            <div className="relative max-w-[760px] mx-auto text-center">
              <h2 className="text-[34px] md:text-[40px] font-bold tracking-tight leading-[1.1] mb-4">
                Want to partner with{" "}
                <span className="brand-gradient-text">Selah?</span>
              </h2>
              <p className="text-[15px] text-[#94A3B8] leading-relaxed mb-8">
                Selah works with Christian labels, ministries, churches, publishers, DSPs, and Christian platforms that serve the Christian music economy.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="bg-white text-foreground hover:bg-white/90 font-medium rounded-md px-7 py-3 text-[15px] inline-flex items-center gap-2 transition-colors"
                >
                  Apply to partner
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/docs"
                  className="border border-white/20 text-white hover:bg-white/5 font-medium rounded-md px-7 py-3 text-[15px] transition-colors"
                >
                  Read documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
