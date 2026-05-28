import Link from "next/link";
import {
  Calendar,
  Download,
  FileText,
  ExternalLink,
  ArrowRight,
  Mail,
  Newspaper,
  Award,
  Image as ImageIcon,
  Palette,
  BookOpen,
  MapPin,
} from "lucide-react";

type CategoryKey = "Product" | "Partnership" | "Expansion" | "Community";

const categoryStyles: Record<CategoryKey, string> = {
  Product: "bg-accent-soft text-accent border-accent/15",
  Partnership: "bg-positive-soft text-positive border-positive/15",
  Expansion: "bg-accent-soft text-accent border-accent/15",
  Community: "bg-secondary-soft text-secondary border-secondary/15",
};

const releases: {
  date: string;
  category: CategoryKey;
  headline: string;
  excerpt: string;
}[] = [
  {
    date: "May 22, 2026",
    category: "Expansion",
    headline:
      "Selah expands distribution network to Kuala Lumpur, Taipei, and Bangkok.",
    excerpt:
      "Three new regional offices open across South-East and North Asia, deepening Selah's local DSP relationships and church network operations across the Asia-Pacific.",
  },
  {
    date: "April 22, 2026",
    category: "Product",
    headline:
      "Selah launches Church Adoption Score 2.0 with worship-leader engagement signal.",
    excerpt:
      "The updated 100-point score introduces a real-time worship-leader engagement signal sourced from Selah's church-native channel network.",
  },
  {
    date: "April 8, 2026",
    category: "Partnership",
    headline:
      "Selah signs distribution partnership with PraiseCharts for chord chart delivery.",
    excerpt:
      "Selah-distributed releases will now ship chord charts and stem-aware lead sheets directly to PraiseCharts on release day.",
  },
  {
    date: "March 12, 2026",
    category: "Product",
    headline:
      "AI Release Strategist now available to all Label Services customers.",
    excerpt:
      "The AI Release Strategist generates release plans, playlist targets, and church outreach lists tuned to each catalog.",
  },
  {
    date: "February 28, 2026",
    category: "Partnership",
    headline:
      "Selah and APRA AMCOS expand neighboring rights collection across Asia-Pacific.",
    excerpt:
      "The expanded agreement unlocks streamlined neighboring rights collection for Selah-distributed master recordings in 14 markets.",
  },
  {
    date: "February 15, 2026",
    category: "Community",
    headline:
      "Selah supports indigenous Christian music initiatives across Australia and New Zealand.",
    excerpt:
      "The new program funds recording grants, distribution credits, and worship-leader mentorship for indigenous artists across the southern hemisphere.",
  },
  {
    date: "January 30, 2026",
    category: "Product",
    headline: "Selah launches Partner Portal v2 for label networks.",
    excerpt:
      "Partner Portal v2 introduces multi-roster controls, shared royalty ledgers, and a unified pipeline view for label networks.",
  },
  {
    date: "January 15, 2026",
    category: "Partnership",
    headline: "CCLI registration and reporting now native to Selah delivery.",
    excerpt:
      "Selah-distributed worship songs can now be submitted to CCLI SongSelect directly from the release builder, with congregational reporting auto-ingested.",
  },
];

const coverage = [
  {
    publication: "WorshipLeader Magazine",
    date: "January 24, 2026",
    headline: "How Selah is reshaping how worship songs reach the church.",
    excerpt:
      "Worship directors are using a new platform to track which songs are actually being adopted by churches, with a level of signal granularity that has not previously existed in the worship space.",
  },
  {
    publication: "Music Business Worldwide",
    date: "March 5, 2026",
    headline:
      "Christian music's quiet boom: how Selah is reaching artists secular platforms miss.",
    excerpt:
      "MBW spoke with Selah's leadership about the unique characteristics of Christian music distribution and why purpose-built infrastructure has been overlooked by the major distributors.",
  },
  {
    publication: "Sight Magazine",
    date: "March 18, 2026",
    headline:
      "Sydney-based Selah brings purpose-built distribution to the Christian music world.",
    excerpt:
      "Sight Magazine profiled the Sydney-based platform that is bringing operational rigor to Christian music distribution across the southern hemisphere and Asia.",
  },
  {
    publication: "The Australian Financial Review",
    date: "February 12, 2026",
    headline:
      "Australia's Selah named one of 2026's most promising B2B SaaS exporters.",
    excerpt:
      "The Sydney-based company operates across 8 offices in the Asia-Pacific, with regional revenue driven primarily by South-East Asian church networks.",
  },
  {
    publication: "Eternity News",
    date: "January 10, 2026",
    headline: "Christian Music Group scales distribution across the Asia-Pacific.",
    excerpt:
      "Eternity profiled the rapid Asia-Pacific expansion of Christian music's emerging distribution layer, with new offices opening across South-East Asia.",
  },
  {
    publication: "AsiaTech Daily",
    date: "December 18, 2025",
    headline: "Sydney's Selah expands across the Asia-Pacific Christian music market.",
    excerpt:
      "Christian music distribution platform Selah announced its expansion into multiple Asia-Pacific markets, marking its formal entry into the regional Christian music economy.",
  },
];

const assets = [
  {
    icon: Palette,
    title: "Logo pack",
    desc: "Selah and Christian Music Group logos in SVG and PNG, light and dark variants.",
    cta: "Download .zip",
    accent: "accent" as const,
  },
  {
    icon: BookOpen,
    title: "Brand guidelines",
    desc: "Colors, typography, voice and tone, with full do's and don'ts.",
    cta: "Download PDF",
    accent: "secondary" as const,
  },
  {
    icon: FileText,
    title: "Company fact sheet",
    desc: "One-page company overview with history and headline stats.",
    cta: "Download PDF",
    accent: "accent" as const,
  },
  {
    icon: ImageIcon,
    title: "Product screenshots",
    desc: "Curated, high-resolution product screens for distribution, royalties, and analytics.",
    cta: "Download .zip",
    accent: "secondary" as const,
  },
];

const featured = releases[0];

export default function PressPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-soft/40 via-white to-white pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgb(30 64 175) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-secondary/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-accent/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative max-w-[960px] mx-auto px-8 pt-24 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-accent/15 shadow-sm mb-8">
            <Newspaper size={12} className="text-accent" strokeWidth={2} />
            <span className="text-[12px] font-medium text-accent">Press &amp; newsroom</span>
          </div>
          <h1 className="text-[54px] font-bold tracking-tight leading-[1.05] mb-6">
            What people are saying about{" "}
            <span className="brand-gradient-text">Selah.</span>
          </h1>
          <p className="text-[18px] text-subtle max-w-[720px] mx-auto leading-relaxed">
            Announcements, press coverage, and media resources from Christian Music Group Distribution, Inc.
          </p>
        </div>
      </section>

      {/* Featured release */}
      <section className="pb-20">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="relative overflow-hidden rounded-2xl border border-border-strong bg-white shadow-xl shadow-accent/5">
            <div className="absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Left visual */}
              <div className="md:col-span-5 relative overflow-hidden brand-gradient p-10 text-white min-h-[320px] flex flex-col justify-between">
                <div
                  className="absolute inset-0 opacity-[0.08] pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(white 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="relative">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.1em] bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-2.5 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    Featured release
                  </span>
                </div>
                <div className="relative">
                  <p className="text-[28px] font-bold tracking-tight leading-tight mb-2">
                    Selah expands to KL, Taipei, Bangkok
                  </p>
                  <p className="text-[13px] text-white/85 font-medium">Three new Asia-Pacific offices</p>
                  <div className="mt-6 flex items-center gap-2 text-[11px] text-white/70">
                    <Calendar size={12} />
                    {featured.date}
                  </div>
                </div>
              </div>

              {/* Right copy */}
              <div className="md:col-span-7 p-10">
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`inline-flex items-center text-[10px] font-bold uppercase tracking-[0.08em] px-2 py-0.5 rounded border ${categoryStyles[featured.category]}`}
                  >
                    {featured.category}
                  </span>
                  <span className="text-[11px] text-muted">{featured.date}</span>
                </div>
                <h2 className="text-[28px] font-bold tracking-tight leading-[1.15] mb-5">
                  {featured.headline}
                </h2>
                <div className="space-y-3 text-[13.5px] text-subtle leading-relaxed mb-7">
                  <p>
                    Selah, the Christian music distribution platform built by Christian Music Group Distribution, Inc., today announced the opening of three new regional offices in Kuala Lumpur, Taipei, and Bangkok.
                  </p>
                  <p>
                    The new offices deepen Selah&apos;s presence across South-East and North Asia, bringing the company&apos;s global footprint to 8 markets and enabling closer relationships with local DSPs, Christian channels, and the church networks driving worship music adoption across the region.
                  </p>
                  <p>
                    Each new office will lead local artist, label, and ministry relationships, with regional leads working alongside Selah&apos;s Sydney headquarters to ensure the Christian channel network and CCLI integration extend deeply into each market.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="btn-primary text-[14px] !px-5 !py-2.5 inline-flex items-center gap-2">
                    Read full release
                    <ArrowRight size={14} />
                  </button>
                  <button className="text-[13px] font-medium text-subtle hover:text-foreground inline-flex items-center gap-1.5 transition-colors">
                    <Download size={14} />
                    Download as PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent announcements */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="label-eyebrow mb-3">Announcements</p>
              <h2 className="text-[34px] font-bold tracking-tight">Recent releases from Selah.</h2>
            </div>
            <Link
              href="#"
              className="hidden md:inline-flex text-[13px] font-medium text-accent items-center gap-1 hover:gap-1.5 transition-all"
            >
              View archive
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {releases.map((r) => (
              <article
                key={r.headline}
                className="card p-7 card-interactive flex flex-col group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`inline-flex items-center text-[10px] font-bold uppercase tracking-[0.08em] px-2 py-0.5 rounded border ${categoryStyles[r.category]}`}
                  >
                    {r.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-muted">
                    <Calendar size={11} />
                    {r.date}
                  </span>
                </div>
                <h3 className="text-[17px] font-semibold leading-[1.3] tracking-tight mb-2.5">
                  {r.headline}
                </h3>
                <p className="text-[13px] text-subtle leading-relaxed mb-5 flex-1">{r.excerpt}</p>
                <Link
                  href="#"
                  className="text-[12.5px] font-medium text-accent inline-flex items-center gap-1 group-hover:gap-1.5 transition-all w-fit"
                >
                  Read more
                  <ArrowRight size={13} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Press coverage */}
      <section className="py-24">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="text-center mb-12">
            <p className="label-eyebrow-secondary mb-3">In the news</p>
            <h2 className="text-[34px] font-bold tracking-tight mb-3">Press coverage.</h2>
            <p className="text-subtle max-w-[560px] mx-auto text-[15px]">
              Selected coverage of Selah and Christian Music Group from publications around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coverage.map((c) => (
              <article
                key={c.headline}
                className="card p-6 card-interactive flex flex-col group"
              >
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-border">
                  <p className="text-[13px] font-bold tracking-tight text-foreground">
                    {c.publication}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[10.5px] text-muted">
                    <Calendar size={10} />
                    {c.date}
                  </span>
                </div>
                <h3 className="text-[15px] font-semibold leading-[1.35] tracking-tight mb-3">
                  &ldquo;{c.headline}&rdquo;
                </h3>
                <p className="text-[12.5px] text-subtle leading-relaxed mb-5 flex-1">
                  {c.excerpt}
                </p>
                <Link
                  href="#"
                  className="text-[12px] font-medium text-secondary inline-flex items-center gap-1 group-hover:gap-1.5 transition-all w-fit"
                >
                  Read on {c.publication}
                  <ExternalLink size={12} />
                </Link>
              </article>
            ))}
          </div>

          {/* Recognition strip */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[11px] text-muted border-t border-border pt-10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-subtle">
              Recognition
            </span>
            {[
              { name: "MusicBiz", label: "Distributor to Watch 2026" },
              { name: "WorshipLeader", label: "Top Tech Innovation" },
              { name: "Music Ally", label: "Asia-Pacific Rising" },
              { name: "AIR Awards", label: "Independent Partner" },
            ].map((a) => (
              <span key={a.label} className="flex items-center gap-1.5">
                <Award size={12} className="text-secondary" strokeWidth={1.8} />
                <span className="font-semibold text-subtle">{a.name}</span>
                <span className="text-muted">·</span>
                <span>{a.label}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Brand assets / Media kit */}
      <section className="relative overflow-hidden bg-[#0F172A] text-white py-24">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgb(16 185 129) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[400px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[400px] bg-secondary/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-[1100px] mx-auto px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
              <Download size={12} className="text-secondary" />
              <span className="text-[11px] font-medium text-white/80">Media kit</span>
            </div>
            <h2 className="text-[34px] font-bold tracking-tight mb-3">Brand assets.</h2>
            <p className="text-[#94A3B8] max-w-[560px] mx-auto text-[15px]">
              Logos, brand guidelines, and product imagery. Everything you need to write about Selah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {assets.map((a) => (
              <div
                key={a.title}
                className="group rounded-xl bg-white/[0.04] border border-white/10 p-6 backdrop-blur-sm hover:bg-white/[0.07] hover:border-white/20 transition-all flex flex-col"
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-5 shadow-md ${
                    a.accent === "secondary"
                      ? "bg-gradient-to-br from-secondary to-secondary-hover shadow-secondary/30"
                      : "bg-gradient-to-br from-accent to-accent-hover shadow-accent/30"
                  }`}
                >
                  <a.icon size={18} className="text-white" strokeWidth={1.8} />
                </div>
                <h3 className="text-[15px] font-semibold mb-1.5 text-white">{a.title}</h3>
                <p className="text-[12.5px] text-white/60 leading-relaxed mb-6 flex-1">{a.desc}</p>
                <button
                  className={`inline-flex items-center justify-center gap-1.5 text-[12px] font-semibold rounded-md px-3 py-2 transition-all w-fit ${
                    a.accent === "secondary"
                      ? "bg-secondary text-white hover:bg-secondary-hover"
                      : "bg-white text-foreground hover:bg-white/90"
                  }`}
                >
                  <Download size={12} />
                  {a.cta}
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-[12px] text-white/40 mt-10">
            Please review the brand guidelines before publishing. Logos may not be modified, recolored, or co-branded without permission.
          </p>
        </div>
      </section>

      {/* Press contact */}
      <section className="py-24">
        <div className="max-w-[1080px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            <div className="md:col-span-5">
              <p className="label-eyebrow mb-3">Contact</p>
              <h2 className="text-[34px] font-bold tracking-tight leading-tight mb-4">
                Media inquiries.
              </h2>
              <p className="text-[15px] text-subtle leading-relaxed mb-6">
                For all press, interview requests, and media inquiries, contact our communications team. We aim to respond within one business day, Sydney time.
              </p>
              <a
                href="mailto:press@christianmusicgrp.com"
                className="btn-primary !px-5 !py-2.5 text-[14px] inline-flex items-center gap-2 w-fit"
              >
                <Mail size={14} />
                press@christianmusicgrp.com
              </a>
            </div>

            <div className="md:col-span-7">
              <div className="card p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.08em] mb-2 text-accent">
                      General press
                    </p>
                    <p className="text-[14px] font-semibold text-foreground leading-tight mb-1">Communications</p>
                    <a
                      href="mailto:press@christianmusicgrp.com"
                      className="text-[12.5px] text-subtle hover:text-accent transition-colors"
                    >
                      press@christianmusicgrp.com
                    </a>
                  </div>

                  <div>
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.08em] mb-2 text-secondary">
                      Asia-Pacific
                    </p>
                    <p className="text-[14px] font-semibold text-foreground leading-tight mb-1">Regional press</p>
                    <a
                      href="mailto:press@christianmusicgrp.com"
                      className="text-[12.5px] text-subtle hover:text-accent transition-colors"
                    >
                      press@christianmusicgrp.com
                    </a>
                  </div>

                  <div>
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.08em] mb-2 text-accent">
                      Partnership inquiries
                    </p>
                    <p className="text-[14px] font-semibold text-foreground leading-tight mb-1">Partners</p>
                    <a
                      href="mailto:press@christianmusicgrp.com"
                      className="text-[12.5px] text-subtle hover:text-accent transition-colors"
                    >
                      press@christianmusicgrp.com
                    </a>
                  </div>

                  <div>
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.08em] mb-2 text-secondary">
                      Mailing address
                    </p>
                    <div className="flex items-start gap-2 text-[12.5px] text-subtle leading-relaxed">
                      <MapPin size={13} className="text-secondary mt-0.5 shrink-0" strokeWidth={1.8} />
                      <span>
                        Christian Music Group
                        <br />
                        Attn: Communications
                        <br />
                        Level 1, 60 Martin Place
                        <br />
                        Sydney NSW 2000
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="pb-28">
        <div className="max-w-[1080px] mx-auto px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent-soft via-white to-secondary-soft border border-border p-12 md:p-14">
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(rgb(30 64 175) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-secondary/15 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/15 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <h2 className="text-[30px] md:text-[34px] font-bold tracking-tight leading-tight mb-3">
                  Get press releases in your inbox.
                </h2>
                <p className="text-[14.5px] text-subtle leading-relaxed max-w-[460px]">
                  Subscribe to the Selah press list for new announcements and embargo access. Sent only when there&apos;s news.
                </p>
              </div>
              <form className="md:col-span-5 flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  placeholder="you@publication.com"
                  className="flex-1 bg-white border border-border rounded-md px-4 py-2.5 text-[14px] text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                />
                <button
                  type="button"
                  className="btn-primary text-[14px] !px-5 !py-2.5 inline-flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  Subscribe
                  <ArrowRight size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
