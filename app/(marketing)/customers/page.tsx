import Link from "next/link";
import { ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react";

const featured = [
  {
    name: "New City Worship",
    segment: "Worship collective · US",
    quote:
      "Selah replaced four separate tools. Distribution, publishing administration, royalty reporting, and YouTube monetization now sit in one workspace. Our team got back two days a week.",
    name2: "Worship Director",
    metrics: [
      { label: "Monthly listeners", value: "890K", delta: "+34% YoY" },
      { label: "Active releases", value: "8", delta: "All on Label Services" },
      { label: "Q1 royalty payable", value: "A$18,200", delta: "Single source of truth" },
    ],
    color: "from-accent to-accent-hover",
  },
];

const studies = [
  {
    name: "Kingdom House Music",
    segment: "Label · 12 artists",
    headline: "Migrating a 156-track catalog from a generic distributor",
    body:
      "Kingdom House moved their full roster to Selah&apos;s Enterprise / Partner Portal tier. ISRC matching preserved 18 months of revenue history. White-label portal lets each artist see their own statements without exposing label data.",
    metrics: [
      "156 tracks migrated in 11 days",
      "0% revenue history lost",
      "12 artist portals provisioned",
    ],
  },
  {
    name: "Cornerstone Songs",
    segment: "Publisher · 210 compositions",
    headline: "Centralizing publishing administration across 7 PROs",
    body:
      "Cornerstone consolidated their global PRO registration and mechanical licensing onto Selah&apos;s Publishing Administration tier. Conflicts on 14 unmatched works resolved within 30 days.",
    metrics: [
      "210 compositions registered",
      "14 conflicts resolved",
      "7 PROs unified in one ledger",
    ],
  },
  {
    name: "Open Heaven Worship",
    segment: "Worship team · AU",
    headline: "Doubling Church Adoption Score in one campaign",
    body:
      "Open Heaven launched their single &apos;Come Alive&apos; with Selah&apos;s Label Services. Targeted worship leader outreach plus chord chart distribution to 240+ churches drove the Church Adoption Score from 38 to 78 in 8 weeks.",
    metrics: [
      "240+ churches contacted",
      "96 churches added to setlist",
      "+105% Church Adoption Score",
    ],
  },
  {
    name: "Mercy Collective",
    segment: "Worship team · US",
    headline: "Transparent splits across 9 collaborators",
    body:
      "Mercy Collective uses Selah to manage rights and splits across 9 worship leaders, 3 songwriters, and 2 producers. Quarterly statements eliminated end-of-year reconciliation work.",
    metrics: [
      "9 collaborators on every release",
      "100% split confirmation rate",
      "Zero statement disputes",
    ],
  },
];

const metricsBar = [
  { value: "4.8M+", label: "Tracks distributed" },
  { value: "120+", label: "Partner organizations" },
  { value: "8.2K+", label: "Churches reached" },
  { value: "A$2.4M+", label: "Quarterly royalties" },
];

export default function CustomersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-soft/40 via-white to-white pointer-events-none" />
        <div className="relative max-w-[920px] mx-auto px-8 pt-20 pb-12 text-center">
          <p className="label-eyebrow mb-3">Customers</p>
          <h1 className="text-[44px] font-bold tracking-tight leading-[1.1] mb-5">
            Trusted across the Christian music economy.
          </h1>
          <p className="text-[17px] text-subtle max-w-[600px] mx-auto">
            From independent worship leaders to multi-label rights holders, see how teams use Selah to run modern Christian music operations.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-border bg-white py-10">
        <div className="max-w-[1040px] mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-y-6 text-center">
          {metricsBar.map((m) => (
            <div key={m.label}>
              <p className="text-[28px] font-bold tracking-tight text-accent mb-1">
                {m.value}
              </p>
              <p className="text-[12px] text-muted font-medium">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="py-20">
        <div className="max-w-[1100px] mx-auto px-8">
          {featured.map((c) => (
            <div
              key={c.name}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E1B4B] text-white p-10 md:p-14"
            >
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(rgb(165 180 252) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
              <div className="relative grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
                <div className="md:col-span-3">
                  <p className="text-[12px] uppercase tracking-wider text-accent mb-3 font-semibold">
                    Featured · {c.segment}
                  </p>
                  <h2 className="text-[28px] md:text-[32px] font-bold tracking-tight mb-5 leading-tight">
                    {c.name}
                  </h2>
                  <blockquote className="text-[17px] leading-relaxed mb-6 text-white/90">
                    &ldquo;{c.quote}&rdquo;
                  </blockquote>
                  <p className="text-[13px] text-white/60">
                    — {c.name2}, {c.name}
                  </p>
                </div>
                <div className="md:col-span-2 space-y-3">
                  {c.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="bg-white/[0.05] border border-white/10 rounded-lg p-4"
                    >
                      <p className="text-[11px] text-white/60 mb-1">{m.label}</p>
                      <p className="text-[20px] font-bold tracking-tight mb-1">{m.value}</p>
                      <p className="text-[11px] text-accent">{m.delta}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case studies grid */}
      <section className="pb-20">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {studies.map((s) => (
              <article key={s.name} className="card p-7 card-interactive">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-[16px] font-semibold">{s.name}</h3>
                    <p className="text-[12px] text-muted">{s.segment}</p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-accent-soft border border-accent/10 flex items-center justify-center">
                    <TrendingUp size={16} className="text-accent" strokeWidth={1.8} />
                  </div>
                </div>
                <h4 className="text-[15px] font-semibold mb-2 leading-snug">
                  {s.headline}
                </h4>
                <p className="text-[13px] text-subtle leading-relaxed mb-5" dangerouslySetInnerHTML={{ __html: s.body }} />
                <div className="pt-4 border-t border-border space-y-1.5">
                  {s.metrics.map((m) => (
                    <div key={m} className="flex items-center gap-2 text-[12px] text-subtle">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      {m}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-[680px] mx-auto px-8 text-center">
          <h2 className="text-[32px] font-bold tracking-tight mb-4">
            Join the next cohort of Christian music operators.
          </h2>
          <p className="text-subtle mb-8">
            We onboard a limited number of Label Services and Enterprise partners each quarter. Apply to be considered.
          </p>
          <Link href="/label-services" className="btn-primary text-[15px] !px-7 !py-3 inline-flex items-center gap-2">
            Apply for Label Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
