"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Plus,
  Minus,
  Sparkles,
  Star,
  Send,
  BarChart3,
  Megaphone,
  Users,
  Music2,
  Church,
  Heart,
  Building2,
  Scale,
  Youtube,
  Brain,
  Globe2,
  Award,
} from "lucide-react";
import { useState } from "react";
import { LogoMark } from "@/components/logo";

// ============================================================
// SIX PLATFORM PILLARS
// ============================================================

const pillars = [
  {
    icon: Send,
    color: "accent",
    eyebrow: "Selah Distribution",
    title: "Distribution",
    body: "Release music and video across global platforms with professional metadata, artist profile matching, smart links, pre-saves, release scheduling, and territory controls.",
    bullets: [
      "Global DSP delivery",
      "Music and video distribution",
      "UPC and ISRC management",
      "Lyrics and metadata delivery",
      "Smart links and pre-saves",
      "Release scheduling",
      "Artist profile matching",
    ],
  },
  {
    icon: Scale,
    color: "secondary",
    eyebrow: "Selah Rights",
    title: "Rights and Royalty Administration",
    body: "Coordinate rights, splits, royalty collection, catalogue records, publishing information, YouTube claims, neighbouring rights, and worship-specific royalty workflows.",
    bullets: [
      "Royalty splits",
      "Rights holder records",
      "Publishing metadata",
      "Neighbouring rights support",
      "YouTube Content ID coordination",
      "Catalogue administration",
      "Statement preparation",
    ],
  },
  {
    icon: Church,
    color: "accent",
    eyebrow: "Selah Worship",
    title: "Worship and CCLI Workflows",
    body: "Built for the unique way worship music is used, sung, streamed, displayed, and reported across churches, ministries, conferences, and worship teams.",
    bullets: [
      "CCLI registration checklist",
      "Church usage metadata",
      "Worship song records",
      "Lyric display rights tracking",
      "Church livestream policy settings",
      "Worship leader adoption notes",
      "Ministry catalogue workflows",
    ],
    featured: true,
  },
  {
    icon: Megaphone,
    color: "secondary",
    eyebrow: "Selah Campaigns",
    title: "Campaigns and Marketing",
    body: "Plan and manage Christian music campaigns across DSPs, YouTube, social platforms, Christian media, radio, churches, and worship leader networks.",
    bullets: [
      "Release campaign planning",
      "DSP pitch preparation",
      "Christian playlist strategy",
      "YouTube release strategy",
      "Paid media tracking",
      "Christian creator outreach",
      "Radio and press notes",
      "Church and worship leader seeding",
    ],
  },
  {
    icon: Youtube,
    color: "accent",
    eyebrow: "Selah YouTube",
    title: "YouTube and Video Monetisation",
    body: "Manage official videos, lyric videos, live worship recordings, acoustic sessions, ministry content, and church-sensitive monetisation without damaging relationships with churches and worship teams.",
    bullets: [
      "Official video delivery",
      "Lyric video tracking",
      "YouTube Content ID policy notes",
      "Church livestream whitelist settings",
      "Short-form video planning",
      "Claim review workflow",
      "Channel growth analytics",
    ],
  },
  {
    icon: BarChart3,
    color: "secondary",
    eyebrow: "Selah Analytics",
    title: "Analytics and Intelligence",
    body: "Unify performance, catalogue, audience, royalty, and campaign data into a single workspace for Christian music teams.",
    bullets: [
      "Release performance",
      "Royalty insights",
      "Audience geography",
      "Platform breakdowns",
      "Campaign KPIs",
      "Catalogue opportunity detection",
      "Metadata issue detection",
      "AI-assisted release recommendations",
    ],
  },
];

// ============================================================
// WHO IT SERVES
// ============================================================

const audiences = [
  {
    icon: Users,
    title: "Artists",
    body: "For independent Christian artists building sustainable careers with professional release, rights, and campaign infrastructure.",
  },
  {
    icon: Heart,
    title: "Worship Leaders",
    body: "For worship leaders releasing songs that may move from personal devotion into churches, teams, conferences, and congregational use.",
  },
  {
    icon: Building2,
    title: "Labels",
    body: "For Christian labels needing modern release operations, analytics, rights workflows, and campaign coordination.",
  },
  {
    icon: Sparkles,
    title: "Ministries",
    body: "For ministries managing music, video, worship, teaching, live events, and media catalogues.",
  },
  {
    icon: Church,
    title: "Churches",
    body: "For churches and worship teams releasing live worship, original songs, sermon clips, and ministry media.",
  },
  {
    icon: Music2,
    title: "Catalogue Owners",
    body: "For rights holders managing master recordings, publishing data, royalties, YouTube claims, and long-term catalogue value.",
  },
];

// ============================================================
// PLATFORM MODULES
// ============================================================

const modules = [
  { icon: Send, name: "Selah Distribution", desc: "Music and video delivery, metadata, smart links, release scheduling, platform delivery, and artist profile management." },
  { icon: Scale, name: "Selah Rights", desc: "Royalty splits, rights records, publishing metadata, neighbouring rights support, YouTube monetisation coordination, and catalogue administration." },
  { icon: Church, name: "Selah Worship", desc: "CCLI workflows, church usage records, worship song metadata, lyric display tracking, and church-sensitive livestream policy settings." },
  { icon: Megaphone, name: "Selah Campaigns", desc: "Release planning, DSP pitching, Christian playlisting, paid media notes, social content planning, creator outreach, and campaign reporting." },
  { icon: Building2, name: "Selah Enterprise", desc: "Back-office infrastructure for Christian labels, ministries, churches, managers, and catalogue owners." },
  { icon: Brain, name: "Selah Intelligence", desc: "AI-assisted insights for metadata issues, release planning, audience growth, catalogue opportunities, and campaign recommendations." },
];

// ============================================================
// WHY CHRISTIAN MUSIC
// ============================================================

const ecosystemPoints = [
  "Mainstream distribution is not enough",
  "Worship usage creates unique royalty and rights workflows",
  "Church livestreams require sensitive YouTube policies",
  "Christian radio, churches, ministries, and conferences matter",
  "Metadata quality affects discovery, royalties, and long-term catalogue value",
  "Christian artists need infrastructure, not just uploads",
];

// ============================================================
// STATS, TESTIMONIALS, DSPs
// ============================================================

const stats = [
  { value: "150+", label: "Global DSPs", color: "indigo" },
  { value: "40+", label: "Christian channels", color: "amber" },
  { value: "60+", label: "Rights organisations", color: "indigo" },
  { value: "84", label: "Markets served", color: "amber" },
];

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
  "CCLI SongSelect",
  "PraiseCharts",
  "Multitracks.com",
  "Planning Center",
  "NetEase Music",
  "JOOX",
  "KKBox",
  "Anghami",
  "Boomplay",
  "WorshipReady",
];

const testimonials = [
  {
    quote: "Selah's worship workflows finally gave us visibility into how our songs are actually being used inside churches. Streaming numbers do not tell the whole story.",
    name: "Worship Director",
    role: "River House Worship",
  },
  {
    quote: "We needed catalogue infrastructure, not an upload tool. Selah handles rights, splits, statements, and church-sensitive YouTube monetisation in one operating system.",
    name: "Label Manager",
    role: "Kingdom House Music",
  },
  {
    quote: "The combination of distribution, rights, and Christian-specific metadata is what makes Selah different. It is built for how Christian music actually moves.",
    name: "Independent Artist",
    role: "Grace & Stone",
  },
];

const metadata = [
  "CCLI workflow status",
  "Worship suitability",
  "Lyric display rights",
  "Church livestream policy",
  "Worship leader adoption",
  "Ministry catalogue notes",
  "Conference usage",
  "Scripture reference",
  "Theological review status",
];

const offices = [
  { city: "Sydney", country: "Australia", role: "Global HQ", primary: true },
  { city: "Singapore", country: "Singapore", role: "South-East Asia hub" },
  { city: "Kuala Lumpur", country: "Malaysia", role: "Malaysia operations" },
  { city: "Bangkok", country: "Thailand", role: "Thailand operations" },
  { city: "Taipei", country: "Taiwan", role: "Taiwan operations" },
  { city: "Seoul", country: "South Korea", role: "Korea operations" },
  { city: "Manila", country: "Philippines", role: "Customer success" },
  { city: "Jakarta", country: "Indonesia", role: "Indonesia operations" },
];

const faqs = [
  {
    q: "What is Selah?",
    a: "Selah is the music infrastructure platform for the future of Christian music. It brings together distribution, rights, marketing, analytics, worship-specific workflows, YouTube monetisation, and catalogue infrastructure for Christian artists, worship leaders, labels, ministries, and rights holders.",
  },
  {
    q: "Is Selah a Christian distributor?",
    a: "Selah includes distribution as one of six platform pillars, but it is not just a distributor. Selah is a full operating system for Christian music teams covering distribution, rights, worship workflows, campaigns, YouTube, analytics, and enterprise infrastructure.",
  },
  {
    q: "Does Selah replace my publisher?",
    a: "No. Selah provides publishing coordination, publishing metadata, and publishing administration support. Your existing publishing relationships continue. Selah helps you keep rights, splits, and catalogue data consistent across the partners you already work with.",
  },
  {
    q: "What makes Selah Worship different from other distributors?",
    a: "Selah Worship is built for the unique way worship songs are used, sung, streamed, displayed, and reported across churches, ministries, conferences, and worship teams. CCLI workflows, lyric display rights, church livestream policies, and worship leader adoption are first-class concepts.",
  },
  {
    q: "What is church-sensitive YouTube monetisation?",
    a: "Selah YouTube includes policy modes designed for ministry sensitivity, including Whitelist Partner Churches, Track Only, and Manual Review, so that monetising your catalogue does not damage relationships with churches and worship teams who use your music.",
  },
  {
    q: "Who is Selah built for?",
    a: "Christian artists, worship leaders, Christian labels, ministries, churches, and catalogue owners. Selah Enterprise extends the platform with team permissions, artist rosters, and catalogue administration for larger organisations.",
  },
];

const featuredNews = {
  tag: "Latest",
  date: "May 22, 2026",
  category: "Platform",
  title: "Selah Worship launches: CCLI workflows, church-sensitive policies, and worship leader adoption in one workspace.",
  excerpt: "Selah Worship makes congregational use, lyric display rights, and church livestream policies first-class concepts inside the operating system for Christian music.",
};

// ============================================================
// COMPONENT
// ============================================================

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activePillar, setActivePillar] = useState(0);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-soft/40 via-white to-white pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgb(30 64 175) 1px, transparent 1px)",
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
                Selah by Christian Music Group
              </span>
            </div>
            <h1 className="text-[44px] md:text-[52px] font-bold tracking-tight leading-[1.05] mb-5 animate-fade-in-up">
              The music infrastructure platform for the future of{" "}
              <span className="brand-gradient-text animate-gradient">Christian music.</span>
            </h1>
            <p className="text-[17px] text-subtle mb-8 leading-relaxed max-w-[560px] animate-fade-in-up">
              Distribution, rights, marketing, analytics, and catalogue infrastructure for Christian artists, worship leaders, labels, ministries, and rights holders.
            </p>
            <p className="text-[14px] text-muted mb-8 leading-relaxed max-w-[560px] animate-fade-in-up italic">
              Built for the unique way Christian and worship music moves through listeners, churches, worship leaders, platforms, and ministries.
            </p>

            {/* Animated equalizer accent */}
            <div className="flex items-end gap-1 h-7 mb-8 max-w-[160px]">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm brand-gradient animate-eq"
                  style={{ animationDelay: `${i * 0.08}s`, height: "100%" }}
                />
              ))}
            </div>

            <div className="flex items-center gap-3 animate-fade-in-up">
              <Link
                href="/overview"
                className="btn-primary text-[15px] !px-7 !py-3 flex items-center gap-2 shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/30 transition-shadow"
              >
                Explore Selah
                <ArrowRight size={16} />
              </Link>
              <Link href="/overview" className="btn-secondary text-[15px] !px-7 !py-3">
                View Platform Demo
              </Link>
            </div>
          </div>

          {/* Right: distribution network graphic */}
          <div className="relative h-[440px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-accent/20 animate-pulse-ring pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full border border-secondary/15 animate-pulse-ring pointer-events-none" style={{ animationDelay: "1.5s" }} />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] rounded-2xl brand-gradient shadow-2xl shadow-accent/30 flex flex-col items-center justify-center z-20 p-3">
              <LogoMark size={42} />
              <p className="text-white text-[11px] font-semibold uppercase tracking-wider mt-2">Selah</p>
              <p className="text-white/70 text-[9px] font-medium">Operating System</p>
            </div>

            {/* Pillar labels orbiting */}
            {[
              { label: "Distribution", x: "5%", y: "10%", color: "accent" },
              { label: "Rights", x: "0%", y: "45%", color: "accent" },
              { label: "Worship", x: "8%", y: "80%", color: "secondary" },
              { label: "Catalogue", x: "30%", y: "92%", color: "accent" },
              { label: "Campaigns", x: "60%", y: "92%", color: "accent" },
              { label: "Analytics", x: "72%", y: "78%", color: "accent" },
              { label: "YouTube", x: "85%", y: "55%", color: "accent" },
              { label: "Enterprise", x: "82%", y: "30%", color: "secondary" },
              { label: "Intelligence", x: "75%", y: "8%", color: "secondary" },
              { label: "CCLI", x: "60%", y: "5%", color: "secondary" },
              { label: "PraiseCharts", x: "22%", y: "20%", color: "secondary" },
              { label: "Multitracks", x: "20%", y: "65%", color: "secondary" },
              { label: "Planning Center", x: "68%", y: "45%", color: "secondary" },
              { label: "Worship Leaders", x: "30%", y: "5%", color: "secondary" },
            ].map((n, i) => (
              <div
                key={n.label}
                className={`absolute bg-white border rounded-lg px-2.5 py-1.5 shadow-sm text-[11px] font-semibold z-10 animate-float ${
                  n.color === "secondary"
                    ? "border-secondary/20 text-secondary"
                    : "border-accent/20 text-accent"
                }`}
                style={{ left: n.x, top: n.y, animationDelay: `${i * 0.18}s` }}
              >
                {n.label}
              </div>
            ))}

            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgb(30 64 175)" stopOpacity="0.25" />
                  <stop offset="50%" stopColor="rgb(30 64 175)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="rgb(16 185 129)" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              {Array.from({ length: 14 }).map((_, i) => {
                const angle = (i / 14) * Math.PI * 2;
                const x = 50 + Math.cos(angle) * 38;
                const y = 50 + Math.sin(angle) * 38;
                return <line key={i} x1="50" y1="50" x2={x} y2={y} stroke="url(#line-grad)" strokeWidth="0.15" />;
              })}
            </svg>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-gradient-to-br from-accent/15 to-secondary/15 blur-3xl rounded-full pointer-events-none" />
          </div>
        </div>
      </section>

      {/* OPERATING SYSTEM STATEMENT */}
      <section className="border-y border-border bg-white py-20">
        <div className="max-w-[920px] mx-auto px-8 text-center">
          <p className="label-eyebrow mb-4">One operating system for Christian music teams</p>
          <h2 className="text-[36px] md:text-[40px] font-bold tracking-tight leading-tight mb-5">
            Release operations, rights workflows, worship metadata, YouTube monetisation, campaigns, catalogue, and analytics, in one platform.
          </h2>
          <p className="text-[16px] text-subtle leading-relaxed max-w-[680px] mx-auto">
            Selah brings together everything Christian artists, worship leaders, labels, ministries, and rights holders need to release, manage, monetise, and grow music with excellence.
          </p>
        </div>
      </section>

      {/* LATEST NEWS BANNER */}
      <section className="border-b border-border bg-gradient-to-r from-accent-soft/40 via-white to-secondary-soft/30">
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
              Read more
              <ChevronRight size={14} />
            </span>
          </Link>
        </div>
      </section>

      {/* DSP LOGOS STRIP */}
      <section className="bg-white py-16 border-b border-border overflow-hidden">
        <div className="max-w-[1180px] mx-auto px-8 mb-10 text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-muted mb-3">
            Selah Distribution
          </p>
          <p className="text-[15px] text-subtle max-w-[640px] mx-auto">
            Delivering Christian music to every major DSP and the Christian channel network.
          </p>
        </div>

        <div
          className="relative"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee">
            {[...dspsTier1, ...dspsTier1].map((dsp, i) => (
              <div key={`${dsp.name}-${i}`} className="flex items-center justify-center px-10 shrink-0">
                <span className={`text-[18px] text-foreground ${dsp.style}`}>{dsp.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative mt-8"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee-slow">
            {[...dspsTier2, ...dspsTier2].map((dsp, i) => (
              <div key={`${dsp}-${i}`} className="flex items-center justify-center px-8 shrink-0">
                <span className="text-[13px] font-semibold text-muted">{dsp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM PILLARS */}
      <section id="platform" className="py-24 bg-gradient-to-b from-white to-surface">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="text-center mb-12">
            <p className="label-eyebrow mb-3">Platform pillars</p>
            <h2 className="text-[36px] font-bold tracking-tight mb-3">
              Six pillars, one Selah operating system.
            </h2>
            <p className="text-subtle max-w-[680px] mx-auto text-[15px]">
              Selah combines distribution, rights, worship workflows, campaigns, YouTube monetisation, and analytics, in a single platform purpose-built for Christian music.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {pillars.map((p, i) => (
              <button
                key={p.eyebrow}
                onClick={() => setActivePillar(i)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-[12.5px] font-semibold transition-all ${
                  activePillar === i
                    ? p.color === "secondary"
                      ? "bg-secondary text-white shadow-md shadow-secondary/20"
                      : "bg-accent text-white shadow-md shadow-accent/20"
                    : "bg-white border border-border text-subtle hover:border-border-strong hover:text-foreground"
                }`}
              >
                <p.icon size={14} strokeWidth={1.8} />
                {p.eyebrow}
              </button>
            ))}
          </div>

          <div className="card p-8 md:p-10 shadow-xl shadow-accent/5">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-5">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 shadow-md ${
                    pillars[activePillar].color === "secondary"
                      ? "bg-gradient-to-br from-secondary to-secondary-hover shadow-secondary/20"
                      : "bg-gradient-to-br from-accent to-accent-hover shadow-accent/20"
                  }`}
                >
                  {(() => {
                    const Icon = pillars[activePillar].icon;
                    return <Icon size={20} className="text-white" strokeWidth={1.8} />;
                  })()}
                </div>
                <p
                  className={`text-[11px] font-semibold uppercase tracking-wider mb-2 ${
                    pillars[activePillar].color === "secondary" ? "text-secondary" : "text-accent"
                  }`}
                >
                  {pillars[activePillar].eyebrow}
                </p>
                <h3 className="text-[26px] font-bold tracking-tight mb-3 leading-tight">
                  {pillars[activePillar].title}
                  {pillars[activePillar].featured && (
                    <span className="ml-2 inline-block align-middle text-[10px] font-bold uppercase tracking-wider bg-secondary text-white px-1.5 py-0.5 rounded">
                      Differentiator
                    </span>
                  )}
                </h3>
                <p className="text-[14px] text-subtle leading-relaxed">{pillars[activePillar].body}</p>
              </div>
              <div className="md:col-span-7 md:border-l md:pl-8 border-border">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted mb-4">
                  Feature highlights
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                  {pillars[activePillar].bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[13px] text-subtle">
                      <div
                        className={`shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5 ${
                          pillars[activePillar].color === "secondary"
                            ? "bg-secondary-soft"
                            : "bg-accent-soft"
                        }`}
                      >
                        <Check
                          size={10}
                          strokeWidth={3}
                          className={pillars[activePillar].color === "secondary" ? "text-secondary" : "text-accent"}
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

      {/* WHY CHRISTIAN MUSIC */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="text-center mb-12 max-w-[760px] mx-auto">
            <p className="label-eyebrow-secondary mb-3">Why Christian music needs its own infrastructure</p>
            <h2 className="text-[36px] font-bold tracking-tight mb-5 leading-tight">
              Christian music does not move like mainstream music.
            </h2>
            <p className="text-subtle text-[15px] leading-relaxed">
              Christian and worship music moves through a different ecosystem. Songs are not only streamed by listeners. They are sung in churches, shared by worship leaders, used in conferences, displayed on screens, performed by teams, streamed in services, and carried by ministries.
            </p>
            <p className="text-subtle text-[15px] leading-relaxed mt-3">
              That creates different needs across rights, reporting, metadata, marketing, video, church relationships, and catalogue administration. Selah is building infrastructure for that reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {ecosystemPoints.map((p, i) => (
              <div
                key={p}
                className={`card p-5 card-interactive ${
                  i % 2 === 0
                    ? "bg-gradient-to-br from-white to-accent-soft/30 border-accent/15"
                    : "bg-gradient-to-br from-white to-secondary-soft/30 border-secondary/15"
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <div
                    className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                      i % 2 === 0 ? "bg-accent-soft" : "bg-secondary-soft"
                    }`}
                  >
                    <Check
                      size={11}
                      strokeWidth={2.5}
                      className={i % 2 === 0 ? "text-accent" : "text-secondary"}
                    />
                  </div>
                  <span className="text-[14px] font-medium text-foreground leading-snug">{p}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT SERVES */}
      <section className="py-24">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="text-center mb-12">
            <p className="label-eyebrow mb-3">Who it serves</p>
            <h2 className="text-[36px] font-bold tracking-tight mb-3">
              Built for the Christian music ecosystem.
            </h2>
            <p className="text-subtle max-w-[600px] mx-auto text-[15px]">
              Selah serves every operator across the Christian music value chain, from independent artists to enterprise catalogue owners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {audiences.map((a, i) => (
              <div key={a.title} className="card p-6 card-interactive">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                    i % 2 === 0
                      ? "bg-accent-soft border border-accent/15"
                      : "bg-secondary-soft border border-secondary/15"
                  }`}
                >
                  <a.icon
                    size={20}
                    className={i % 2 === 0 ? "text-accent" : "text-secondary"}
                    strokeWidth={1.8}
                  />
                </div>
                <h3 className="text-[17px] font-semibold mb-2">{a.title}</h3>
                <p className="text-[13px] text-subtle leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM MODULES */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="text-center mb-12">
            <p className="label-eyebrow-secondary mb-3">Platform modules</p>
            <h2 className="text-[36px] font-bold tracking-tight mb-3">
              The Selah module suite.
            </h2>
            <p className="text-subtle max-w-[600px] mx-auto text-[15px]">
              Distribution, rights, worship, campaigns, enterprise infrastructure, and AI intelligence. One workspace.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((m, i) => (
              <div key={m.name} className="card p-6 card-interactive group">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg transition-shadow ${
                    i % 2 === 0
                      ? "bg-gradient-to-br from-accent to-accent-hover shadow-accent/20"
                      : "bg-gradient-to-br from-secondary to-secondary-hover shadow-secondary/20"
                  }`}
                >
                  <m.icon size={18} className="text-white" strokeWidth={1.8} />
                </div>
                <h3 className="text-[15px] font-semibold mb-1.5">{m.name}</h3>
                <p className="text-[13px] text-subtle leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHRISTIAN-SPECIFIC METADATA */}
      <section className="relative overflow-hidden bg-[#0F172A] text-white py-24">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgb(16 185 129) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-secondary/20 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative max-w-[1100px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-secondary mb-3">
                Worship-specific infrastructure
              </p>
              <h2 className="text-[40px] font-bold tracking-tight mb-5 leading-tight">
                Built for the realities of Christian music.
              </h2>
              <p className="text-[15px] text-[#94A3B8] leading-relaxed mb-6">
                Christian music is not only streamed. It is sung, displayed, shared, performed, taught, and carried through churches, ministries, worship teams, conferences, schools, and families. Selah is designed for that ecosystem.
              </p>
              <Link
                href="/worship"
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-secondary hover:gap-2 transition-all"
              >
                Explore Selah Worship
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {metadata.map((m, i) => (
                <div
                  key={m}
                  className={`p-4 rounded-lg backdrop-blur-sm transition-all ${
                    i % 2 === 0
                      ? "bg-white/[0.05] border border-white/10"
                      : "bg-gradient-to-br from-secondary/10 to-white/[0.02] border border-secondary/20"
                  }`}
                >
                  <span className="text-[14px] font-semibold text-white">{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL OFFICES */}
      <section className="relative overflow-hidden bg-[#0F172A] text-white py-24 border-t border-white/5">
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
              <span className="text-[11px] font-medium text-white/80">8 offices · 84 markets served</span>
            </div>
            <h2 className="text-[36px] font-bold tracking-tight mb-3">From the Great Southland to the world.</h2>
            <p className="text-[#94A3B8] max-w-[580px] mx-auto text-[15px]">
              Sydney-headquartered, with regional teams across the Asia-Pacific running local DSP relationships, Christian channel operations, and church network outreach.
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
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-secondary text-white px-1.5 py-0.5 rounded">HQ</span>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-x-4 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p
                  className={`text-[40px] md:text-[48px] font-bold tracking-tight mb-1 bg-clip-text text-transparent ${
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

      {/* SCRIPTURE BANNER */}
      <section className="relative overflow-hidden py-20 border-y border-border">
        <div className="absolute inset-0 brand-gradient animate-gradient pointer-events-none opacity-95" />
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(white 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[420px] bg-white/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="absolute top-[10%] left-[8%] w-2 h-2 rounded-full bg-white/60 animate-float" />
        <div className="absolute top-[70%] left-[12%] w-1.5 h-1.5 rounded-full bg-white/50 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[25%] right-[12%] w-2 h-2 rounded-full bg-white/60 animate-float" style={{ animationDelay: "2s" }} />

        <div className="relative max-w-[840px] mx-auto px-8 text-center text-white">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70 mb-6">The Selah pause</p>
          <p className="text-[28px] md:text-[36px] font-bold tracking-tight leading-[1.2] mb-5">
            &ldquo;Sing to the Lord a new song; sing to the Lord, all the earth.&rdquo;
          </p>
          <p className="text-[13px] text-white/70 uppercase tracking-[0.2em] font-semibold">Psalm 96:1</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="text-center mb-14">
            <p className="label-eyebrow mb-3">Voices from the network</p>
            <h2 className="text-[36px] font-bold tracking-tight mb-3">Built with Christian music in mind.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="card p-7 flex flex-col">
                <div className="flex items-center gap-0.5 mb-4">
                  {[0, 1, 2, 3, 4].map((j) => (
                    <Star key={j} size={13} className="text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-[14px] text-foreground leading-relaxed flex-1 mb-5">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-[12px] font-semibold ${
                      i % 2 === 0
                        ? "bg-gradient-to-br from-accent to-accent-hover"
                        : "bg-gradient-to-br from-secondary to-secondary-hover"
                    }`}
                  >
                    {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
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
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#0B2E5C] to-[#064E3B] p-12 text-center text-white">
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(rgb(16 185 129) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-accent/30 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-secondary/30 blur-[120px] rounded-full pointer-events-none" />
            <div className="relative">
              <h2 className="text-[36px] md:text-[44px] font-bold tracking-tight leading-[1.1] mb-4">
                Build the future of Christian music on Selah.
              </h2>
              <p className="text-[#94A3B8] mb-8 max-w-[600px] mx-auto text-[16px]">
                Selah by Christian Music Group helps artists, worship leaders, labels, ministries, and rights holders release, manage, monetise, and grow Christian music with modern distribution, rights, marketing, analytics, and worship-specific infrastructure.
              </p>
              <div className="flex items-center justify-center gap-3">
                <Link
                  href="/overview"
                  className="bg-white text-foreground hover:bg-white/90 font-medium rounded-md px-7 py-3 text-[15px] inline-flex items-center gap-2 transition-colors shadow-lg"
                >
                  Explore Selah
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="border border-white/20 text-white hover:bg-white/5 font-medium rounded-md px-7 py-3 text-[15px] transition-colors"
                >
                  Contact Christian Music Group
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
