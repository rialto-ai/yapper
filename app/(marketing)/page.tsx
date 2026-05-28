"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Plus,
  Minus,
  Globe2,
  Sparkles,
  Award,
  Radio,
  Star,
  Send,
  BarChart3,
  Megaphone,
  Users,
  Headphones,
  Calculator,
  Music2,
  FileText,
  Church,
  Newspaper,
  Heart,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import { LogoMark } from "@/components/logo";

// ============================================================
// Marketing copy
// ============================================================

const features = [
  { icon: Users, title: "Artists & Worship Teams", desc: "Self-service distribution, marketing, royalties, and analytics - all in one workspace." },
  { icon: Church, title: "Labels & Ministries", desc: "Manage rosters, releases, splits, and partner reporting at scale." },
  { icon: Music2, title: "Publishers & Songwriters", desc: "We partner with publishers and aggregate global PROs, MROs, and CCLI." },
  { icon: Newspaper, title: "Video Creators", desc: "ProRes encoding, video distribution, and YouTube Content ID services." },
];

const solutions = [
  {
    icon: Send,
    color: "accent",
    eyebrow: "Digital Delivery",
    title: "Global music & video distribution.",
    body: "Selah delivers your music and video to every major DSP, the Christian-native channel network, and 150+ stores across 84 territories.",
    bullets: [
      "Free UPC and ISRC codes on every release",
      "Music & video delivery to Apple, Spotify, YouTube, Tidal, Deezer, Amazon, TikTok, and more",
      "ProRes cloud video encoding",
      "Multi-format audio encoding with manual QA",
      "Lyrics, chord chart, and lead sheet inclusion",
      "30-second ringtone generator",
      "TikTok Official Sound distribution",
      "Custom pricing per territory and store",
      "Pre-order hide-previews and territory exclusions",
      "Artist profile matching across Spotify, Apple Music, Deezer",
      "Audio fingerprinting and Content ID rights protection",
      "Distribution to 45+ DSPs plus the Christian channel network",
    ],
  },
  {
    icon: Megaphone,
    color: "secondary",
    eyebrow: "Promotion & Marketing",
    title: "Reach your church and listener audience.",
    body: "Selah&apos;s promotion suite covers DSP pitching, advertising, pre-saves, smart links, and the church outreach tools that secular distributors don&apos;t provide.",
    bullets: [
      "Pre-save generator with full analytics",
      "Smart link generator with deep-linking",
      "DSP pitch forms for Christian editorial playlists",
      "Release task manager with team checklists",
      "Advertising campaign manager (Meta, Google, TikTok)",
      "Spotify-for-Artists and iTunes Connect integrations",
      "Verified fan email collection via pre-saves",
      "Worship leader outreach campaigns",
      "Chord chart and lead sheet distribution to churches",
      "Christian radio servicing across 12 markets",
      "Genre-focused project managers for Label Services",
      "Machine-assisted release planning",
    ],
  },
  {
    icon: Calculator,
    color: "accent",
    eyebrow: "Royalties & Accounting",
    title: "Transparent accounting at every level.",
    body: "Royalty splits, multi-currency payouts, configurable statements, and downloadable invoices - built for collaborators across every role.",
    bullets: [
      "Royalty sharing and multiple splits among rights holders",
      "Configurable monthly and quarterly statements",
      "Custom reports by product type, artist, store, territory",
      "Multi-currency payouts in 28+ currencies",
      "Recoupment tracking with line-item history",
      "Downloadable invoices and statements",
      "Account balance ledger with audit trail",
      "Tax document collection (W-8, W-9, AU TFN, +24 regions)",
      "Bank transfer, wire, and digital wallet payouts",
      "Partner with PROs, MROs, and neighboring rights bodies",
      "CCLI royalty integration for congregational use",
      "Recoupment caps and revenue-share waterfall",
    ],
  },
  {
    icon: BarChart3,
    color: "secondary",
    eyebrow: "Full Suite Analytics",
    title: "Business intelligence for music operators.",
    body: "Streams, revenue, audience growth, playlist impact, territory breakdowns - plus the proprietary Church Adoption Score nobody else measures.",
    bullets: [
      "Daily streaming and revenue data from every DSP",
      "Audience growth by territory, age, gender, platform",
      "Playlist impact and editorial placement tracking",
      "Catalog performance benchmarks",
      "Top territory and city analysis",
      "Comparable artist benchmarking",
      "Campaign ROI and conversion tracking",
      "Church Adoption Score across your catalog",
      "Worship leader engagement signal",
      "Sunday setlist adoption tracking",
      "Custom dashboards per artist or label",
      "Export to CSV, Excel, or via API",
    ],
  },
  {
    icon: Church,
    color: "accent",
    eyebrow: "Church Network",
    title: "The Christian-native distribution layer.",
    body: "Selah is the only distributor with deep integration into the church economy - CCLI workflows, chord chart delivery, worship leader networks, and the Church Adoption Funnel.",
    bullets: [
      "CCLI SongSelect distribution and reporting",
      "PraiseCharts and Multitracks.com integration",
      "Worship leader outreach across 8,200+ churches",
      "Chord chart and lead sheet automated delivery",
      "Planning Center and Church on Demand sync",
      "Sunday setlist adoption tracking",
      "Congregational suitability metadata",
      "Theological review status fields",
      "Scripture reference cataloguing",
      "Christian radio market servicing",
      "Worship resource partner network",
      "Denominational sensitivity flagging",
    ],
  },
  {
    icon: Music2,
    color: "secondary",
    eyebrow: "Publishing Partnerships",
    title: "We partner with publishers - not replace them.",
    body: "Selah aggregates publishing administration across global PROs, mechanical rights organizations, and CCLI on behalf of publishers and self-administering songwriters.",
    bullets: [
      "Integration with ASCAP, BMI, SESAC, APRA AMCOS, PRS, GEMA, SACEM",
      "Mechanical rights via HFA, MLC, MCPS, and equivalents",
      "CCLI registration and reporting for congregational use",
      "Neighboring rights collection through PPL, SoundExchange, and 60+ societies",
      "Sync representation for partner publishers",
      "Songwriter split management and dispute resolution",
      "Composition matching across recordings",
      "Unmatched works resolution",
      "Quarterly publisher statements",
      "Direct deals with publishers and admin companies",
      "Open API for publisher partner integrations",
      "Transparent admin fee structure",
    ],
  },
  {
    icon: Headphones,
    color: "accent",
    eyebrow: "Support & Service",
    title: "Local support across 8 offices.",
    body: "Every artist, label, and partner gets dedicated regional support - from Sydney HQ to Mumbai, Manila to Seoul.",
    bullets: [
      "On-line technical support ticketing system",
      "Regional account managers across 8 offices",
      "Genre-focused project managers for Label Services",
      "Onboarding and catalog migration team",
      "Rights and royalty operations team",
      "DSP escalation pathways for delivery issues",
      "Multi-language support: English, 日本語, 한국어, 中文, Bahasa, Tagalog, हिन्दी",
      "24/5 ticket coverage following the sun",
      "Quarterly business reviews for Enterprise partners",
      "Dedicated solutions engineer for Partner Portal",
      "Custom integration support via API",
      "Christian music industry expertise across every team",
    ],
  },
];

const metadata = [
  "Scripture reference",
  "Worship theme",
  "Congregational suitability",
  "Church licensing status",
  "CCLI workflow",
  "Chord chart availability",
  "Worship leader engagement",
  "Sunday setlist potential",
  "Church adoption funnel",
];

const stats = [
  { value: "4.8M+", label: "Tracks distributed", color: "indigo" },
  { value: "150+", label: "DSPs & channels", color: "amber" },
  { value: "120+", label: "Partner organizations", color: "indigo" },
  { value: "8.2K+", label: "Churches reached", color: "amber" },
  { value: "84", label: "Countries served", color: "indigo" },
];

const testimonials = [
  {
    quote:
      "Selah's church adoption funnel let us see exactly which worship leaders were finding our songs. We went from guessing to growing.",
    name: "Worship Director",
    role: "Open Heaven Worship",
  },
  {
    quote:
      "Finally a distributor that understands CCLI workflows and chord chart distribution. Built for our space, not retrofitted to it.",
    name: "Label Manager",
    role: "Kingdom House Music",
  },
  {
    quote:
      "The royalty accounting is the cleanest I've seen. Splits, currencies, recoupment - all in one transparent ledger.",
    name: "Independent Artist",
    role: "Grace Harbor",
  },
];

// Logo-styled name lists
const dspsTier1 = [
  { name: "Spotify", style: "font-bold tracking-tight" },
  { name: "Apple Music", style: "font-semibold tracking-tight" },
  { name: "YouTube Music", style: "font-bold" },
  { name: "Amazon Music", style: "font-semibold tracking-wide" },
  { name: "Tidal", style: "font-bold uppercase tracking-[0.2em]" },
  { name: "Deezer", style: "font-bold italic" },
  { name: "TikTok", style: "font-extrabold tracking-tight" },
  { name: "Pandora", style: "font-medium tracking-wide" },
];

const dspsTier2 = [
  "SoundCloud",
  "Audiomack",
  "NetEase Music",
  "JOOX",
  "KKBox",
  "Anghami",
  "Boomplay",
  "Beatport",
  "iHeartRadio",
  "Napster",
  "Yandex Music",
  "Mixcloud",
];

const christianPlatforms = [
  { name: "CCLI SongSelect", desc: "Congregational licensing" },
  { name: "PraiseCharts", desc: "Chord charts & lead sheets" },
  { name: "Multitracks.com", desc: "Stems & loops" },
  { name: "Planning Center", desc: "Service planning" },
  { name: "Loop Community", desc: "Worship tracks" },
  { name: "WorshipReady", desc: "Worship resources" },
  { name: "Church on Demand", desc: "Streaming for churches" },
  { name: "GodTube", desc: "Christian video" },
];

const rightsOrgs = [
  "ASCAP",
  "BMI",
  "SESAC",
  "APRA AMCOS",
  "PRS for Music",
  "GEMA",
  "SACEM",
  "JASRAC",
  "KOMCA",
  "MLC",
  "HFA",
  "SoundExchange",
  "PPL",
  "PPCA",
  "CCLI",
];

const offices = [
  { city: "Sydney", country: "Australia", role: "Global HQ", primary: true },
  { city: "Singapore", country: "Singapore", role: "South-East Asia" },
  { city: "Tokyo", country: "Japan", role: "Japan & Korea" },
  { city: "Seoul", country: "South Korea", role: "Korea operations" },
  { city: "Hong Kong", country: "Hong Kong SAR", role: "Greater China" },
  { city: "Manila", country: "Philippines", role: "Philippines" },
  { city: "Jakarta", country: "Indonesia", role: "Indonesia" },
  { city: "Mumbai", country: "India", role: "South Asia" },
];

const faqs = [
  {
    q: "What does Selah actually do?",
    a: "Selah is a digital music and video distribution platform purpose-built for Christian music. We deliver to all major DSPs, the Christian channel network (CCLI, PraiseCharts, Multitracks, Planning Center), and partner with publishers globally to aggregate royalty collection from PROs, MROs, and rights bodies.",
  },
  {
    q: "Are you a publisher? Do you replace my publisher?",
    a: "No. Selah partners with publishers and self-administering songwriters. We aggregate global PRO and MRO connections (ASCAP, BMI, APRA AMCOS, PRS, GEMA, SACEM, JASRAC, KOMCA, HFA, MLC, and 50+ others) and integrate with CCLI for congregational use reporting. Your existing publishing relationships continue.",
  },
  {
    q: "How is the Church Network different from standard distribution?",
    a: "Standard distribution stops at Spotify and Apple Music. Selah's Christian Network extends to CCLI SongSelect, PraiseCharts, Planning Center, Multitracks.com, worship-leader email networks, Sunday setlist tracking, and chord chart distribution - channels generic distributors don't reach.",
  },
  {
    q: "What is the Church Adoption Score?",
    a: "A proprietary 100-point score measuring how well a song is performing inside the church market. It combines congregational suitability, lyric clarity, theological alignment, worship leader engagement, chord chart availability, church network traction, and repeat usage signal.",
  },
  {
    q: "Which offices serve my region?",
    a: "Sydney HQ runs platform and global operations. Regional teams in Singapore (SEA), Tokyo (Japan/Korea), Seoul (Korea), Hong Kong (Greater China), Manila (Philippines), Jakarta (Indonesia), and Mumbai (South Asia) handle local DSP relationships and church network outreach.",
  },
  {
    q: "What service tiers are available?",
    a: "Self-Service Distribution for individual artists, Managed Distribution with onboarding support, Label Services for full-managed campaigns and publishing aggregation, Publishing Partnerships for publisher integration, YouTube Services, and Enterprise / Partner Portal for label networks and church organizations.",
  },
];

const awards = [
  { name: "MusicBiz", label: "Distributor to Watch 2026" },
  { name: "WorshipLeader", label: "Top Tech Innovation" },
  { name: "Music Ally", label: "Asia-Pacific Rising" },
  { name: "AIR Awards", label: "Independent Partner" },
];

const featuredNews = {
  tag: "Latest",
  date: "May 14, 2026",
  category: "Funding · Series A",
  title: "Selah raises A$28M Series A led by Square Peg Capital to scale Christian music infrastructure across Asia-Pacific.",
  excerpt:
    "The round brings together Square Peg, Blackbird Ventures, AirTree, and Sequoia Capital India to support expansion into 4 new markets and deeper integration with global Christian rights organizations.",
};

// ============================================================
// Component
// ============================================================

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeSolution, setActiveSolution] = useState(0);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-soft/40 via-white to-white pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgb(67 56 202) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-[15%] left-[5%] w-[420px] h-[420px] bg-secondary/15 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-[8%] right-[5%] w-[420px] h-[420px] bg-accent/15 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative max-w-[1100px] mx-auto px-8 pt-20 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-accent/15 shadow-sm mb-7 animate-fade-in-up">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-[12px] font-medium text-accent">
                Digital distribution, built for Christian music
              </span>
            </div>
            <h1 className="text-[44px] md:text-[52px] font-bold tracking-tight leading-[1.05] mb-5 animate-fade-in-up">
              The distribution platform for{" "}
              <span className="bg-gradient-to-r from-accent via-accent-hover to-secondary bg-clip-text text-transparent">
                Christian music.
              </span>
            </h1>
            <p className="text-[17px] text-subtle mb-8 leading-relaxed max-w-[540px] animate-fade-in-up">
              Selah delivers your music to every major DSP, the Christian channel network, and 8,200+ churches - with marketing, accounting, analytics, and publishing partnerships built in.
            </p>
            <div className="flex items-center gap-3 animate-fade-in-up mb-10">
              <Link
                href="/overview"
                className="btn-primary text-[15px] !px-7 !py-3 flex items-center gap-2 shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/30 transition-shadow"
              >
                Join Selah
                <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-secondary text-[15px] !px-7 !py-3">
                Talk to our team
              </Link>
            </div>
            <div className="flex items-center gap-5 text-[11px] text-muted">
              {awards.slice(0, 3).map((a) => (
                <span key={a.label} className="flex items-center gap-1.5">
                  <Award size={12} className="text-secondary" strokeWidth={1.8} />
                  <span className="font-semibold text-subtle">{a.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Right: layered visual - distribution network graphic */}
          <div className="relative h-[440px]">
            {/* Center hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] rounded-2xl brand-gradient shadow-2xl shadow-accent/30 flex flex-col items-center justify-center z-20 p-3">
              <LogoMark size={42} />
              <p className="text-white text-[11px] font-semibold uppercase tracking-wider mt-2">Selah</p>
              <p className="text-white/70 text-[9px] font-medium">Distribution Hub</p>
            </div>

            {/* Orbiting nodes - DSPs (left) */}
            {[
              { label: "Spotify", x: "5%", y: "10%", color: "accent" },
              { label: "Apple Music", x: "0%", y: "45%", color: "accent" },
              { label: "YouTube", x: "8%", y: "80%", color: "accent" },
              { label: "Tidal", x: "22%", y: "20%", color: "accent" },
              { label: "Deezer", x: "20%", y: "65%", color: "accent" },
              { label: "Amazon", x: "30%", y: "92%", color: "accent" },
              { label: "TikTok", x: "30%", y: "5%", color: "accent" },
            ].map((n, i) => (
              <div
                key={n.label}
                className="absolute bg-white border border-accent/20 rounded-lg px-2.5 py-1.5 shadow-sm text-[11px] font-semibold text-accent z-10 animate-fade-in-up"
                style={{ left: n.x, top: n.y, animationDelay: `${i * 60}ms` }}
              >
                {n.label}
              </div>
            ))}

            {/* Orbiting nodes - Christian channels (right) */}
            {[
              { label: "CCLI", x: "75%", y: "8%", color: "secondary" },
              { label: "PraiseCharts", x: "82%", y: "30%", color: "secondary" },
              { label: "Multitracks", x: "85%", y: "55%", color: "secondary" },
              { label: "Planning Center", x: "72%", y: "78%", color: "secondary" },
              { label: "Loop", x: "60%", y: "92%", color: "secondary" },
              { label: "GodTube", x: "60%", y: "5%", color: "secondary" },
              { label: "WorshipReady", x: "68%", y: "45%", color: "secondary" },
            ].map((n, i) => (
              <div
                key={n.label}
                className="absolute bg-white border border-secondary/20 rounded-lg px-2.5 py-1.5 shadow-sm text-[11px] font-semibold text-secondary z-10 animate-fade-in-up"
                style={{ left: n.x, top: n.y, animationDelay: `${i * 60 + 100}ms` }}
              >
                {n.label}
              </div>
            ))}

            {/* Connecting lines (SVG) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgb(67 56 202)" stopOpacity="0.25" />
                  <stop offset="50%" stopColor="rgb(67 56 202)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="rgb(217 119 6)" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              {Array.from({ length: 14 }).map((_, i) => {
                const angle = (i / 14) * Math.PI * 2;
                const x = 50 + Math.cos(angle) * 38;
                const y = 50 + Math.sin(angle) * 38;
                return (
                  <line
                    key={i}
                    x1="50"
                    y1="50"
                    x2={x}
                    y2={y}
                    stroke="url(#line-grad)"
                    strokeWidth="0.15"
                  />
                );
              })}
            </svg>

            {/* Backdrop glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-gradient-to-br from-accent/15 to-secondary/15 blur-3xl rounded-full pointer-events-none" />
          </div>
        </div>
      </section>

      {/* LATEST NEWS - one prominent card */}
      <section className="border-y border-border bg-gradient-to-r from-accent-soft/40 via-white to-secondary-soft/30">
        <div className="max-w-[1180px] mx-auto px-8 py-5">
          <Link
            href="/press"
            className="group flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5"
          >
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider bg-secondary text-white px-2 py-1 rounded shrink-0">
              <Sparkles size={10} />
              {featuredNews.tag}
            </span>
            <div className="flex-1">
              <p className="text-[11px] text-muted mb-0.5 font-medium">
                {featuredNews.date} · {featuredNews.category}
              </p>
              <p className="text-[14px] font-semibold text-foreground group-hover:text-accent transition-colors">
                {featuredNews.title}
              </p>
            </div>
            <span className="text-[12px] font-medium text-accent inline-flex items-center gap-1 group-hover:gap-2 transition-all shrink-0">
              Read announcement
              <ChevronRight size={14} />
            </span>
          </Link>
        </div>
      </section>

      {/* DSP LOGOS STRIP */}
      <section className="bg-white py-16 border-b border-border">
        <div className="max-w-[1180px] mx-auto px-8">
          <p className="text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-muted mb-3">
            Trusted distribution
          </p>
          <p className="text-center text-[15px] text-subtle max-w-[640px] mx-auto mb-10">
            Delivering Christian music to every major DSP and Christian channel - globally.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-y-6 gap-x-4 items-center">
            {dspsTier1.map((dsp) => (
              <div key={dsp.name} className="flex items-center justify-center">
                <span className={`text-[15px] text-foreground ${dsp.style}`}>{dsp.name}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-10 border-t border-border grid grid-cols-3 md:grid-cols-6 gap-y-4 gap-x-4 items-center">
            {dspsTier2.map((dsp) => (
              <div key={dsp} className="flex items-center justify-center">
                <span className="text-[12px] font-semibold text-muted">{dsp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS & SOLUTIONS - ONErpm style */}
      <section id="solutions" className="py-24 bg-gradient-to-b from-white to-surface">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="text-center mb-12">
            <p className="label-eyebrow mb-3">Tools & Solutions · Self-Service</p>
            <h2 className="text-[36px] font-bold tracking-tight mb-3">
              A powerful self-service platform for Christian music.
            </h2>
            <p className="text-subtle max-w-[680px] mx-auto text-[15px]">
              Selah provides a full suite of automated marketing, promotional, accounting, and business intelligence tools - giving artists, labels, and ministries full control over the distribution workflow.
            </p>
          </div>

          {/* Tab nav */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {solutions.map((s, i) => (
              <button
                key={s.eyebrow}
                onClick={() => setActiveSolution(i)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-[12.5px] font-semibold transition-all ${
                  activeSolution === i
                    ? s.color === "secondary"
                      ? "bg-secondary text-white shadow-md shadow-secondary/20"
                      : "bg-accent text-white shadow-md shadow-accent/20"
                    : "bg-white border border-border text-subtle hover:border-border-strong hover:text-foreground"
                }`}
              >
                <s.icon size={14} strokeWidth={1.8} />
                {s.eyebrow}
              </button>
            ))}
          </div>

          {/* Active solution panel */}
          <div className="card p-8 md:p-10 shadow-xl shadow-accent/5">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-5">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 shadow-md ${
                    solutions[activeSolution].color === "secondary"
                      ? "bg-gradient-to-br from-secondary to-secondary-hover shadow-secondary/20"
                      : "bg-gradient-to-br from-accent to-accent-hover shadow-accent/20"
                  }`}
                >
                  {(() => {
                    const Icon = solutions[activeSolution].icon;
                    return <Icon size={20} className="text-white" strokeWidth={1.8} />;
                  })()}
                </div>
                <p
                  className={`text-[11px] font-semibold uppercase tracking-wider mb-2 ${
                    solutions[activeSolution].color === "secondary" ? "text-secondary" : "text-accent"
                  }`}
                >
                  {solutions[activeSolution].eyebrow}
                </p>
                <h3 className="text-[26px] font-bold tracking-tight mb-3 leading-tight">
                  {solutions[activeSolution].title}
                </h3>
                <p
                  className="text-[14px] text-subtle leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: solutions[activeSolution].body }}
                />
              </div>
              <div className="md:col-span-7 md:border-l md:pl-8 border-border">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted mb-4">
                  Feature highlights
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                  {solutions[activeSolution].bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[13px] text-subtle">
                      <div
                        className={`shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5 ${
                          solutions[activeSolution].color === "secondary"
                            ? "bg-secondary-soft"
                            : "bg-accent-soft"
                        }`}
                      >
                        <Check
                          size={10}
                          strokeWidth={3}
                          className={
                            solutions[activeSolution].color === "secondary"
                              ? "text-secondary"
                              : "text-accent"
                          }
                        />
                      </div>
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE BUILD FOR */}
      <section className="bg-surface py-24 border-y border-border">
        <div className="max-w-[1080px] mx-auto px-8">
          <div className="text-center mb-14">
            <p className="label-eyebrow mb-3">Who we build for</p>
            <h2 className="text-[36px] font-bold tracking-tight mb-3">
              Christian music professionals. Everywhere.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <div key={f.title} className="card p-6 card-interactive">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                    i % 2 === 0
                      ? "bg-accent-soft border border-accent/10"
                      : "bg-secondary-soft border border-secondary/10"
                  }`}
                >
                  <f.icon
                    size={18}
                    className={i % 2 === 0 ? "text-accent" : "text-secondary"}
                    strokeWidth={1.8}
                  />
                </div>
                <h3 className="text-[15px] font-semibold mb-1.5">{f.title}</h3>
                <p className="text-[13px] text-subtle leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHRISTIAN NETWORK GRAPHIC */}
      <section id="church-network" className="relative overflow-hidden bg-[#0F172A] text-white py-24">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgb(165 180 252) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-secondary/20 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative max-w-[1180px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-secondary mb-3">
                Church Network
              </p>
              <h2 className="text-[40px] font-bold tracking-tight mb-5 leading-tight">
                The Christian distribution layer.
              </h2>
              <p className="text-[16px] text-[#94A3B8] leading-relaxed mb-6">
                Standard distribution ends at Spotify and Apple Music. Selah extends into the church - CCLI SongSelect, PraiseCharts, Multitracks.com, Planning Center, and worship-leader networks across 8,200+ congregations.
              </p>
              <div className="space-y-3">
                {[
                  "CCLI registration, reporting, and royalty integration",
                  "Chord chart & lead sheet automated delivery",
                  "Worship leader email networks across 12 markets",
                  "Sunday setlist adoption tracking",
                  "Congregational suitability metadata fields",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                      <Check size={11} className="text-secondary" strokeWidth={2.5} />
                    </div>
                    <span className="text-[14px] text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {christianPlatforms.map((p, i) => (
                <div
                  key={p.name}
                  className={`p-4 rounded-lg backdrop-blur-sm transition-all hover:scale-[1.02] ${
                    i % 2 === 0
                      ? "bg-white/[0.05] border border-white/10 hover:border-secondary/40"
                      : "bg-gradient-to-br from-secondary/10 to-white/[0.02] border border-secondary/20"
                  }`}
                >
                  <p className="text-[14px] font-bold text-white mb-1">{p.name}</p>
                  <p className="text-[11px] text-white/60">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PUBLISHING PARTNERSHIPS */}
      <section id="publishing" className="py-24">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="text-center mb-12">
            <p className="label-eyebrow-secondary mb-3">Publishing Partnerships</p>
            <h2 className="text-[36px] font-bold tracking-tight mb-3">
              We partner with publishers - not replace them.
            </h2>
            <p className="text-subtle max-w-[680px] mx-auto text-[15px]">
              Selah aggregates global publishing administration across 60+ PROs, MROs, and CCLI on behalf of publishers and self-administering songwriters. Your existing publishing relationships continue.
            </p>
          </div>

          <div className="card p-8 md:p-10 bg-gradient-to-br from-white via-white to-secondary-soft/30">
            <div className="text-center mb-8">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-secondary mb-2">
                Integrated with
              </p>
              <p className="text-[14px] text-subtle">
                60+ rights organizations across performance, mechanical, neighboring, and church licensing
              </p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-y-5 gap-x-4 items-center">
              {rightsOrgs.map((org, i) => (
                <div key={org} className="flex items-center justify-center">
                  <span
                    className={`text-[13px] font-bold tracking-wide ${
                      i % 3 === 0
                        ? "text-accent"
                        : i % 3 === 1
                        ? "text-secondary"
                        : "text-foreground"
                    }`}
                  >
                    {org}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-[24px] font-bold tracking-tight bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  60+
                </p>
                <p className="text-[12px] text-muted">PROs & rights organizations</p>
              </div>
              <div>
                <p className="text-[24px] font-bold tracking-tight bg-gradient-to-r from-secondary to-secondary-hover bg-clip-text text-transparent">
                  84
                </p>
                <p className="text-[12px] text-muted">Royalty collection markets</p>
              </div>
              <div>
                <p className="text-[24px] font-bold tracking-tight bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
                  28+
                </p>
                <p className="text-[12px] text-muted">Payout currencies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL OFFICES */}
      <section className="relative overflow-hidden bg-[#0F172A] text-white py-24">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgb(165 180 252) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[400px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[400px] bg-secondary/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-[1180px] mx-auto px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
              <Globe2 size={12} className="text-secondary" />
              <span className="text-[11px] font-medium text-white/80">
                8 offices · 7 countries · 84 markets served
              </span>
            </div>
            <h2 className="text-[36px] font-bold tracking-tight mb-3">Global from day one.</h2>
            <p className="text-[#94A3B8] max-w-[580px] mx-auto text-[15px]">
              Sydney-headquartered, with regional teams across Asia-Pacific running local DSP relationships and church network operations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {offices.map((o) => (
              <div
                key={o.city}
                className={`rounded-lg p-5 backdrop-blur-sm transition-all hover:scale-[1.02] ${
                  o.primary
                    ? "bg-gradient-to-br from-accent/20 to-secondary/10 border border-accent/30"
                    : "bg-white/[0.04] border border-white/10 hover:bg-white/[0.07]"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-[16px] font-semibold text-white">{o.city}</p>
                    <p className="text-[11px] text-white/60 mt-0.5">{o.country}</p>
                  </div>
                  {o.primary && (
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-secondary text-white px-1.5 py-0.5 rounded">
                      HQ
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-white/80">{o.role}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-[12px] text-white/50 mt-10">
            Global HQ: Level 1, 60 Martin Place, Sydney, NSW, 2000, Australia
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-gradient-to-br from-secondary-soft/40 via-white to-accent-soft/30 border-y border-secondary/10">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 md:gap-x-4 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p
                  className={`text-[32px] md:text-[40px] font-bold tracking-tight mb-1 bg-clip-text text-transparent ${
                    s.color === "amber"
                      ? "bg-gradient-to-r from-secondary to-secondary-hover"
                      : "bg-gradient-to-r from-accent to-accent-hover"
                  }`}
                >
                  {s.value}
                </p>
                <p className="text-[12px] text-subtle font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHRISTIAN METADATA */}
      <section className="py-24">
        <div className="max-w-[1080px] mx-auto px-8">
          <div className="text-center mb-12">
            <p className="label-eyebrow mb-3">Christian-native</p>
            <h2 className="text-[36px] font-bold tracking-tight mb-3">
              Metadata built for worship.
            </h2>
            <p className="text-subtle max-w-[560px] mx-auto text-[15px]">
              Purpose-built fields that secular distribution platforms do not support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {metadata.map((m, i) => (
              <div
                key={m}
                className={`p-5 rounded-lg border transition-all hover:scale-[1.01] ${
                  i % 2 === 0
                    ? "bg-gradient-to-br from-accent-soft/40 to-white border-accent/15"
                    : "bg-gradient-to-br from-secondary-soft/40 to-white border-secondary/15"
                }`}
              >
                <span className="text-[14px] font-semibold text-foreground">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="text-center mb-14">
            <p className="label-eyebrow mb-3">Voices from the network</p>
            <h2 className="text-[36px] font-bold tracking-tight mb-3">
              Built with Christian music in mind.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="card p-7 flex flex-col">
                <div className="flex items-center gap-0.5 mb-4">
                  {[0, 1, 2, 3, 4].map((j) => (
                    <Star key={j} size={13} className="text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-[14px] text-foreground leading-relaxed flex-1 mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-[12px] font-semibold ${
                      i % 2 === 0
                        ? "bg-gradient-to-br from-accent to-accent-hover"
                        : "bg-gradient-to-br from-secondary to-secondary-hover"
                    }`}
                  >
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold leading-tight">{t.name}</p>
                    <p className="text-[12px] text-muted leading-tight mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="max-w-[820px] mx-auto px-8">
          <div className="text-center mb-12">
            <p className="label-eyebrow mb-3">Frequently asked</p>
            <h2 className="text-[36px] font-bold tracking-tight mb-3">Questions, answered.</h2>
            <p className="text-subtle max-w-[520px] mx-auto text-[15px]">
              Can&apos;t find what you&apos;re looking for?{" "}
              <Link href="/contact" className="text-accent font-medium underline-offset-2 hover:underline">
                Talk to our team.
              </Link>
            </p>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => {
              const open = openFaq === i;
              return (
                <div key={i} className="card overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-surface transition-colors"
                  >
                    <span className="text-[14px] font-semibold pr-4">{faq.q}</span>
                    <div className="shrink-0 w-6 h-6 rounded-full bg-accent-soft flex items-center justify-center text-accent">
                      {open ? <Minus size={12} /> : <Plus size={12} />}
                    </div>
                  </button>
                  {open && (
                    <div className="px-5 pb-5 -mt-1 text-[13px] text-subtle leading-relaxed border-t border-border pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-28 pt-8">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#0F172A] p-12 text-center text-white">
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(rgb(165 180 252) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-accent/30 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-secondary/30 blur-[120px] rounded-full pointer-events-none" />
            <div className="relative">
              <h2 className="text-[36px] md:text-[44px] font-bold tracking-tight leading-[1.1] mb-4">
                Distribute your Christian music with Selah.
              </h2>
              <p className="text-[#94A3B8] mb-8 max-w-[560px] mx-auto text-[16px]">
                Join thousands of artists, labels, ministries, and worship teams releasing music through Selah&apos;s distribution, marketing, accounting, and analytics platform.
              </p>
              <div className="flex items-center justify-center gap-3">
                <Link
                  href="/overview"
                  className="bg-white text-foreground hover:bg-white/90 font-medium rounded-md px-7 py-3 text-[15px] inline-flex items-center gap-2 transition-colors shadow-lg"
                >
                  Join Selah
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="border border-white/20 text-white hover:bg-white/5 font-medium rounded-md px-7 py-3 text-[15px] transition-colors"
                >
                  Contact our team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
