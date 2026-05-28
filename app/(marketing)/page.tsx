"use client";

import Link from "next/link";
import {
  ArrowRight,
  Disc3,
  Scale,
  DollarSign,
  Megaphone,
  FileText,
  Youtube,
  Users,
  Building2,
  BookOpen,
  Church,
  Check,
  Library,
  Send,
  CircleDollarSign,
  ChevronRight,
  Plus,
  Minus,
  Globe2,
  Sparkles,
  Award,
  Rocket,
  TrendingUp,
  Radio,
  Star,
} from "lucide-react";
import { useState } from "react";

const features = [
  { icon: Users, title: "Artists & Worship Teams", desc: "Release music, track performance, manage splits, and grow listener and church adoption." },
  { icon: Building2, title: "Labels & Managers", desc: "Coordinate rosters, releases, campaigns, rights, reporting, and partner communication." },
  { icon: BookOpen, title: "Publishers & Songwriters", desc: "Manage compositions, songwriter splits, publishing administration, licensing status, and royalty collection." },
  { icon: Church, title: "Churches & Ministries", desc: "Organize worship catalogs, prepare releases, manage contributors, and support congregational adoption." },
];

const modules = [
  { icon: Disc3, title: "Distribution", desc: "Global delivery to 150+ DSPs, Christian channels, and church-native platforms.", featured: true },
  { icon: Scale, title: "Rights & Splits", desc: "Master, publishing, neighboring, and sync rights in one place." },
  { icon: DollarSign, title: "Royalty Accounting", desc: "Transparent statements, payee management, and recoupment tracking." },
  { icon: Megaphone, title: "Campaign Management", desc: "Playlist pitching, church outreach, radio, and content operations." },
  { icon: Youtube, title: "YouTube Monetization", desc: "Content ID claiming, channel management, and revenue tracking." },
  { icon: FileText, title: "Publishing Administration", desc: "Composition registration, PRO management, and mechanical licensing." },
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

const workflow = [
  { icon: Library, title: "Catalog", desc: "Onboard tracks, releases, compositions, and assets with rich metadata." },
  { icon: Scale, title: "Rights", desc: "Lock down master, publishing, and neighboring rights with full splits." },
  { icon: Send, title: "Distribution", desc: "Deliver globally to every major DSP plus Christian-native channels.", featured: true },
  { icon: Megaphone, title: "Campaign", desc: "Run playlist pitching, church outreach, and YouTube strategy." },
  { icon: CircleDollarSign, title: "Royalty", desc: "Transparent statements and payouts to every collaborator and partner." },
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
      "Finally a distributor that understands CCLI workflows and chord chart distribution. This is built for our space, not retrofitted to it.",
    name: "Label Manager",
    role: "Kingdom House Music",
  },
  {
    quote:
      "The royalty accounting is the cleanest I've seen. Splits, currencies, recoupment — all in one transparent ledger.",
    name: "Independent Artist",
    role: "Grace Harbor",
  },
];

const ecosystemDSPs = [
  "Spotify",
  "Apple Music",
  "YouTube Music",
  "Amazon Music",
  "Deezer",
  "Tidal",
  "Pandora",
  "TikTok",
  "Instagram",
  "SoundCloud",
  "Audiomack",
  "NetEase Music",
  "JOOX",
  "KKBox",
  "Anghami",
  "Boomplay",
];

const ecosystemChristian = [
  "CCLI SongSelect",
  "PraiseCharts",
  "Multitracks.com",
  "WorshipReady",
  "Loop Community",
  "Planning Center",
  "Church on Demand",
  "GodTube",
];

const ecosystemRights = [
  "APRA AMCOS",
  "ASCAP",
  "BMI",
  "SESAC",
  "PRS for Music",
  "GEMA",
  "SACEM",
  "JASRAC",
  "MLC",
  "HFA",
  "SoundExchange",
  "PPL",
];

const ecosystemPartners = [
  "Stripe Connect",
  "Plaid",
  "Wise",
  "DocuSign",
  "AWS",
  "Cloudflare",
  "Snowflake",
  "Vercel",
];

const offices = [
  { city: "Sydney", country: "Australia", role: "Global HQ", primary: true, employees: "180+" },
  { city: "Singapore", country: "Singapore", role: "South-East Asia", employees: "62" },
  { city: "Tokyo", country: "Japan", role: "Japan & Korea", employees: "48" },
  { city: "Seoul", country: "South Korea", role: "Korea operations", employees: "34" },
  { city: "Hong Kong", country: "Hong Kong SAR", role: "Greater China", employees: "41" },
  { city: "Manila", country: "Philippines", role: "Philippines", employees: "120+" },
  { city: "Jakarta", country: "Indonesia", role: "Indonesia", employees: "58" },
  { city: "Mumbai", country: "India", role: "South Asia", employees: "76" },
];

const faqs = [
  {
    q: "How does Selah differ from generic distributors like DistroKid or TuneCore?",
    a: "Selah is purpose-built for Christian music distribution. We deliver to standard DSPs plus a Christian-native channel network including CCLI SongSelect, PraiseCharts, Planning Center, and worship-leader platforms that generic distributors don't reach. We also support CCLI workflows, chord chart distribution, and the Church Adoption Funnel that tracks worship leader engagement.",
  },
  {
    q: "What service tiers do you offer?",
    a: "Self-Service Distribution, Managed Distribution, Label Services, Publishing Administration, YouTube Services, and Enterprise / Partner Portal. Tiers can be mixed across a roster.",
  },
  {
    q: "Do you handle global distribution from your Sydney HQ?",
    a: "Yes — but with regional teams. Our Sydney HQ runs platform engineering and global operations, while our offices in Singapore, Tokyo, Seoul, Hong Kong, Manila, Jakarta, and Mumbai handle local DSP relationships, church network outreach, and regional artist support.",
  },
  {
    q: "What is the Church Adoption Score?",
    a: "A proprietary 100-point score that measures congregational suitability, lyric clarity, theological alignment, worship leader engagement, chord chart availability, church network traction, and repeat usage signal.",
  },
  {
    q: "Which Christian platforms do you distribute to?",
    a: "CCLI SongSelect, PraiseCharts, Multitracks.com, WorshipReady, Loop Community, Planning Center, Church on Demand, GodTube, plus regional Christian platforms across Asia. We're constantly adding to the Christian channel network.",
  },
  {
    q: "Can I administer my own publishing, or do you require admin?",
    a: "Both options. Distribution is our core product; publishing administration is optional. Many of our artists self-administer through the Publishing module while we handle their distribution.",
  },
];

const screens = [
  {
    label: "Distribution",
    title: "Deliver releases to 150+ DSPs and Christian channels",
    desc: "Granular per-territory and per-platform delivery with live status tracking from queued to accepted.",
    accent: "indigo",
  },
  {
    label: "Royalties",
    title: "Transparent waterfall from gross revenue to payout",
    desc: "Multi-currency statements, recoupment tracking, and one source of truth for every collaborator.",
    accent: "amber",
  },
  {
    label: "Campaigns",
    title: "Run church outreach alongside playlist pitching",
    desc: "Track worship leader engagement, CCLI listings, and Sunday setlist adds in one timeline.",
    accent: "indigo",
  },
  {
    label: "Analytics",
    title: "Church Adoption Score across your catalog",
    desc: "Proprietary metric measuring congregational fit and church network traction.",
    accent: "amber",
  },
];

const awards = [
  { name: "MusicBiz", label: "Distributor to Watch 2026" },
  { name: "WorshipLeader", label: "Top Tech Innovation" },
  { name: "Music Ally", label: "Asia-Pacific Rising" },
  { name: "AIR Awards", label: "Independent Partner" },
];

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeScreen, setActiveScreen] = useState(0);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-soft/40 via-white to-white pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgb(67 56 202) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-secondary/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-accent/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative max-w-[960px] mx-auto px-8 pt-24 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-accent/15 shadow-sm mb-8 animate-fade-in-up">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[12px] font-medium text-accent">
              Christian music distribution, in 8 markets across Asia-Pacific
            </span>
          </div>
          <h1 className="text-[54px] font-bold tracking-tight leading-[1.05] mb-6 animate-fade-in-up">
            The distribution layer for{" "}
            <span className="bg-gradient-to-r from-accent via-accent-hover to-secondary bg-clip-text text-transparent">
              Christian music.
            </span>
          </h1>
          <p className="text-[18px] text-subtle max-w-[720px] mx-auto mb-10 leading-relaxed animate-fade-in-up">
            Selah delivers Christian music globally — to every major DSP, CCLI SongSelect, and the worship-leader networks that generic distributors don&apos;t reach. Headquartered in Sydney, operating across South-East, North, and South Asia.
          </p>
          <div className="flex items-center justify-center gap-3 animate-fade-in-up">
            <Link href="/overview" className="btn-primary text-[15px] !px-7 !py-3 flex items-center gap-2 shadow-md shadow-accent/15 hover:shadow-lg hover:shadow-accent/25 transition-shadow">
              Enter Demo
              <ArrowRight size={16} />
            </Link>
            <Link href="/pricing" className="btn-secondary text-[15px] !px-7 !py-3">
              View Pricing
            </Link>
          </div>

          {/* Award strip */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] text-muted">
            {awards.map((a) => (
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

      {/* Dashboard preview */}
      <section className="max-w-[1080px] mx-auto px-8 pb-24">
        <div className="card p-6 shadow-2xl shadow-accent/10 border-border-strong relative">
          <div className="absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-surface rounded-lg p-4 border border-border">
              <p className="text-[11px] text-muted mb-1">Release Pipeline</p>
              <p className="text-[20px] font-semibold tracking-tight">24 Active</p>
              <p className="text-[11px] text-muted mt-1">5 pending review</p>
            </div>
            <div className="bg-gradient-to-br from-secondary-soft to-white rounded-lg p-4 border border-secondary/15">
              <p className="text-[11px] text-secondary mb-1 font-medium">DSP Delivery</p>
              <p className="text-[20px] font-semibold tracking-tight">218 / 224</p>
              <p className="text-[11px] text-positive mt-1">97% delivered</p>
            </div>
            <div className="bg-gradient-to-br from-accent-soft to-white rounded-lg p-4 border border-accent/15">
              <p className="text-[11px] text-accent mb-1 font-medium">Royalty Summary</p>
              <p className="text-[20px] font-semibold tracking-tight">A$82,400</p>
              <p className="text-[11px] text-positive mt-1">+14% vs Q1 estimate</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-surface rounded-lg p-4 border border-border">
              <p className="text-[11px] text-muted mb-2">Campaign Timeline</p>
              <div className="space-y-1.5">
                {[
                  { label: "Strategy approved", done: true },
                  { label: "Assets locked", done: true },
                  { label: "DSP delivery", done: true },
                  { label: "Playlist pitch", done: false },
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full flex items-center justify-center ${t.done ? "bg-accent" : "bg-surface-2 border border-border"}`}>
                      {t.done && <Check size={8} className="text-white" strokeWidth={3} />}
                    </div>
                    <span className={`text-[11px] ${t.done ? "text-foreground" : "text-muted"}`}>{t.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface rounded-lg p-4 border border-border">
              <p className="text-[11px] text-muted mb-1">Streams (May)</p>
              <p className="text-[20px] font-semibold tracking-tight">680K</p>
              <p className="text-[11px] text-positive mt-1">+9.7% vs April</p>
              <div className="mt-2 flex items-end gap-0.5 h-6">
                {[40, 52, 38, 60, 48, 72, 88, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-accent to-secondary/60"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="bg-surface rounded-lg p-4 border border-border">
              <p className="text-[11px] text-muted mb-1">Church Adoption</p>
              <p className="text-[20px] font-semibold tracking-tight">78 / 100</p>
              <p className="text-[11px] text-muted mt-1">Strong engagement</p>
              <div className="mt-2 h-1.5 bg-surface-2 rounded-full overflow-hidden">
                <div className="h-full w-[78%] bg-gradient-to-r from-accent via-accent-hover to-secondary rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution-first DSP strip */}
      <section className="border-y border-border bg-white py-14">
        <div className="max-w-[1080px] mx-auto px-8">
          <p className="text-center text-[12px] font-medium uppercase tracking-[0.08em] text-muted mb-3">
            Distribution-first. Christian-native.
          </p>
          <p className="text-center text-[15px] font-medium text-foreground mb-9 max-w-[600px] mx-auto">
            Delivering to 150+ stores, streaming services, and Christian channels across 84 countries.
          </p>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-y-6 gap-x-4">
            {ecosystemDSPs.slice(0, 16).map((dsp) => (
              <div
                key={dsp}
                className="flex items-center justify-center text-[13px] font-semibold text-subtle hover:text-accent transition-colors"
              >
                {dsp}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product screens preview */}
      <section className="py-24 bg-gradient-to-b from-white to-surface">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="text-center mb-12">
            <p className="label-eyebrow mb-3">Tour the product</p>
            <h2 className="text-[36px] font-bold tracking-tight mb-3">
              Built for the operators running Christian music.
            </h2>
            <p className="text-subtle max-w-[580px] mx-auto text-[15px]">
              From a single artist&apos;s release to enterprise label rollouts — same surface, same primitives.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex bg-surface border border-border rounded-full p-1">
              {screens.map((s, i) => (
                <button
                  key={s.label}
                  onClick={() => setActiveScreen(i)}
                  className={`px-4 py-1.5 rounded-full text-[12px] font-medium transition-all ${
                    activeScreen === i
                      ? s.accent === "amber"
                        ? "bg-secondary text-white shadow-sm"
                        : "bg-accent text-white shadow-sm"
                      : "text-subtle hover:text-foreground"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Screen preview frame */}
          <div className="relative">
            <div className="absolute -inset-x-4 -bottom-4 h-32 bg-gradient-to-t from-accent/5 to-transparent blur-2xl pointer-events-none" />
            <div className="relative card border-border-strong shadow-2xl shadow-foreground/10 overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/60" />
                <span className="ml-3 text-[11px] text-muted font-mono">selah.cmg.com/{screens[activeScreen].label.toLowerCase()}</span>
              </div>

              <div className="grid grid-cols-12">
                {/* Mini sidebar */}
                <div className="col-span-3 border-r border-border p-3 bg-white">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                    <div className="w-6 h-6 bg-gradient-to-br from-accent to-accent-hover rounded-md flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">S</span>
                    </div>
                    <span className="text-[12px] font-semibold">Selah</span>
                  </div>
                  <div className="space-y-1">
                    {["Overview", "Catalog", "Releases", "Distribution", "Royalties", "Campaigns", "Analytics"].map((item, i) => (
                      <div
                        key={item}
                        className={`px-2 py-1 rounded text-[11px] font-medium ${
                          screens[activeScreen].label === item ||
                          (screens[activeScreen].label === "Distribution" && item === "Distribution") ||
                          (screens[activeScreen].label === "Royalties" && item === "Royalties") ||
                          (screens[activeScreen].label === "Campaigns" && item === "Campaigns") ||
                          (screens[activeScreen].label === "Analytics" && item === "Analytics")
                            ? "bg-accent-soft text-accent"
                            : "text-subtle"
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main view */}
                <div className="col-span-9 p-6 bg-surface min-h-[360px]">
                  <h3 className="text-[18px] font-bold mb-1">{screens[activeScreen].label}</h3>
                  <p className="text-[12px] text-muted mb-5">{screens[activeScreen].title}</p>

                  {/* Mock content depending on tab */}
                  {activeScreen === 0 && (
                    <div className="space-y-2">
                      {[
                        { dsp: "Spotify", status: "Delivered", color: "positive" },
                        { dsp: "Apple Music", status: "Delivered", color: "positive" },
                        { dsp: "YouTube Music", status: "Delivered", color: "positive" },
                        { dsp: "CCLI SongSelect", status: "Listed", color: "positive" },
                        { dsp: "PraiseCharts", status: "Listed", color: "positive" },
                        { dsp: "Multitracks.com", status: "Pending", color: "warning" },
                        { dsp: "TikTok", status: "Delivered", color: "positive" },
                      ].map((row) => (
                        <div key={row.dsp} className="flex items-center justify-between bg-white border border-border rounded-md px-3 py-2">
                          <span className="text-[12px] font-medium">{row.dsp}</span>
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded inline-flex items-center gap-1 ${
                            row.color === "positive" ? "bg-positive-soft text-positive" : "bg-warning-soft text-warning"
                          }`}>
                            <span className={`w-1 h-1 rounded-full ${row.color === "positive" ? "bg-positive" : "bg-warning"}`} />
                            {row.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeScreen === 1 && (
                    <div className="space-y-3">
                      {[
                        { label: "Gross revenue", value: "A$82,400", tone: "neutral" },
                        { label: "DSP & platform deductions", value: "−A$24,720", tone: "neg" },
                        { label: "Distribution fee (15%)", value: "−A$8,652", tone: "neg" },
                        { label: "Publishing allocation", value: "−A$11,800", tone: "neg" },
                        { label: "Marketing recoupment", value: "−A$3,200", tone: "neg" },
                      ].map((row) => (
                        <div key={row.label} className="flex items-center justify-between text-[12px]">
                          <span className="text-subtle">{row.label}</span>
                          <span className={row.tone === "neg" ? "text-negative font-mono" : "text-foreground font-mono font-semibold"}>{row.value}</span>
                        </div>
                      ))}
                      <div className="pt-3 mt-3 border-t border-border flex items-center justify-between bg-gradient-to-r from-secondary-soft to-white -mx-2 px-2 py-2 rounded">
                        <span className="text-[13px] font-semibold text-secondary">Net payable to participants</span>
                        <span className="text-[16px] font-bold font-mono text-secondary">A$34,028</span>
                      </div>
                    </div>
                  )}

                  {activeScreen === 2 && (
                    <div className="space-y-2">
                      {[
                        { t: "Strategy approved", d: "8 weeks before", done: true },
                        { t: "Assets locked", d: "6 weeks before", done: true },
                        { t: "DSP delivery", d: "4 weeks before", done: true },
                        { t: "Playlist pitch submitted", d: "3 weeks before", done: true },
                        { t: "Church network outreach", d: "1 week before", done: false },
                        { t: "Launch activation", d: "Release day", done: false },
                      ].map((row, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white border border-border rounded-md px-3 py-2">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center ${row.done ? "bg-accent" : "bg-surface-2 border border-border"}`}>
                            {row.done && <Check size={9} className="text-white" strokeWidth={3} />}
                          </div>
                          <span className={`text-[12px] flex-1 ${row.done ? "text-foreground" : "text-muted"}`}>{row.t}</span>
                          <span className="text-[10px] text-muted">{row.d}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeScreen === 3 && (
                    <div>
                      <div className="bg-white border border-border rounded-lg p-4 mb-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[12px] text-muted">Church Adoption Score</span>
                          <span className="text-[20px] font-bold text-secondary">78 / 100</span>
                        </div>
                        <div className="h-2 bg-surface-2 rounded-full overflow-hidden">
                          <div className="h-full w-[78%] bg-gradient-to-r from-accent via-accent-hover to-secondary rounded-full" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { l: "Congregational suitability", v: 82 },
                          { l: "Lyric clarity", v: 90 },
                          { l: "Worship leader engagement", v: 72 },
                          { l: "Chord chart availability", v: 65 },
                        ].map((row) => (
                          <div key={row.l} className="bg-white border border-border rounded-md px-3 py-2">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[11px] text-muted">{row.l}</span>
                              <span className="text-[12px] font-semibold">{row.v}</span>
                            </div>
                            <div className="h-1 bg-surface-2 rounded-full overflow-hidden">
                              <div className="h-full bg-accent rounded-full" style={{ width: `${row.v}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/overview" className="text-[13px] font-medium text-accent inline-flex items-center gap-1 hover:gap-2 transition-all">
              See the full product
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section id="workflow" className="py-24 border-y border-border">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="text-center mb-14">
            <p className="label-eyebrow mb-3">How it works</p>
            <h2 className="text-[36px] font-bold tracking-tight mb-3">
              The release lifecycle, end-to-end.
            </h2>
            <p className="text-subtle max-w-[600px] mx-auto text-[15px]">
              One distribution platform from first asset upload to final royalty payout. No handoffs, no spreadsheets, no missed splits.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-[42px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 md:gap-y-0 md:gap-x-4 relative">
              {workflow.map((step, i) => (
                <div key={step.title} className="flex flex-col items-center text-center px-2">
                  <div className={`w-[84px] h-[84px] rounded-2xl border flex items-center justify-center mb-4 relative shadow-sm ${
                    step.featured
                      ? "bg-gradient-to-br from-secondary to-secondary-hover border-secondary/30"
                      : "bg-gradient-to-br from-white to-accent-soft/40 border-accent/15"
                  }`}>
                    <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-white text-[11px] font-semibold flex items-center justify-center shadow-md ${
                      step.featured ? "bg-secondary" : "bg-accent"
                    }`}>
                      {i + 1}
                    </div>
                    <step.icon size={28} className={step.featured ? "text-white" : "text-accent"} strokeWidth={1.6} />
                  </div>
                  <h3 className="text-[15px] font-semibold mb-1.5">{step.title}</h3>
                  <p className="text-[12px] text-subtle leading-relaxed max-w-[180px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Built For */}
      <section className="bg-surface py-24">
        <div className="max-w-[1080px] mx-auto px-8">
          <div className="text-center mb-14">
            <p className="label-eyebrow mb-3">Who we build for</p>
            <h2 className="text-[36px] font-bold tracking-tight mb-3">
              Built for Christian music rights holders.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="card p-6 card-interactive">
                <div className="w-10 h-10 rounded-lg bg-accent-soft border border-accent/10 flex items-center justify-center mb-4">
                  <f.icon size={18} className="text-accent" strokeWidth={1.8} />
                </div>
                <h3 className="text-[16px] font-semibold mb-1.5">{f.title}</h3>
                <p className="text-[13px] text-subtle leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules - distribution first */}
      <section id="modules" className="py-24">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="text-center mb-14">
            <p className="label-eyebrow mb-3">Platform</p>
            <h2 className="text-[36px] font-bold tracking-tight mb-3">
              Distribution-led. Six integrated modules.
            </h2>
            <p className="text-subtle max-w-[580px] mx-auto text-[15px]">
              Distribution is the spine. Rights, royalties, campaigns, YouTube, and publishing surround it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {modules.map((m) => (
              <div
                key={m.title}
                className={`card p-6 card-interactive group relative ${
                  m.featured ? "ring-1 ring-accent/15 bg-gradient-to-br from-accent-soft/30 to-white" : ""
                }`}
              >
                {m.featured && (
                  <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider bg-accent text-white px-2 py-0.5 rounded-full">
                    Core
                  </span>
                )}
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-shadow ${
                    m.featured
                      ? "bg-gradient-to-br from-accent to-secondary shadow-accent/30"
                      : "bg-gradient-to-br from-accent to-accent-hover shadow-accent/20"
                  }`}
                >
                  <m.icon size={18} className="text-white" strokeWidth={1.8} />
                </div>
                <h3 className="text-[15px] font-semibold mb-1.5">{m.title}</h3>
                <p className="text-[13px] text-subtle leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global presence */}
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

        <div className="relative max-w-[1100px] mx-auto px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
              <Globe2 size={12} className="text-secondary" />
              <span className="text-[11px] font-medium text-white/80">8 offices · 7 countries · 84 markets served</span>
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
                className={`rounded-lg p-5 backdrop-blur-sm transition-all ${
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
                <p className="text-[10px] text-white/40 mt-2">{o.employees} on team</p>
              </div>
            ))}
          </div>

          <p className="text-center text-[12px] text-white/50 mt-10">
            Global HQ: Level 1, 60 Martin Place, Sydney, NSW, 2000, Australia
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-secondary-soft/40 via-white to-accent-soft/30 border-y border-secondary/10">
        <div className="max-w-[1100px] mx-auto px-8">
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

      {/* Ecosystem */}
      <section className="py-24">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="text-center mb-14">
            <p className="label-eyebrow-secondary mb-3">Ecosystem</p>
            <h2 className="text-[36px] font-bold tracking-tight mb-3">
              Plugged into the Christian music economy.
            </h2>
            <p className="text-subtle max-w-[600px] mx-auto text-[15px]">
              Integrations with streaming platforms, Christian channels, rights bodies, and the infrastructure that moves money.
            </p>
          </div>

          <div className="space-y-5">
            <EcosystemCategory
              icon={Radio}
              title="DSPs & streaming platforms"
              count="150+"
              items={ecosystemDSPs}
              accent="accent"
            />
            <EcosystemCategory
              icon={Church}
              title="Christian channels & worship platforms"
              count="32"
              items={ecosystemChristian}
              accent="secondary"
            />
            <EcosystemCategory
              icon={Scale}
              title="PROs & rights organizations"
              count="60+"
              items={ecosystemRights}
              accent="accent"
            />
            <EcosystemCategory
              icon={Building2}
              title="Payment, identity & infrastructure"
              count="20+"
              items={ecosystemPartners}
              accent="secondary"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="max-w-[1100px] mx-auto px-8">
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
                <p className="text-[14px] text-foreground leading-relaxed flex-1 mb-5">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-[12px] font-semibold ${
                    i % 2 === 0
                      ? "bg-gradient-to-br from-accent to-accent-hover"
                      : "bg-gradient-to-br from-secondary to-secondary-hover"
                  }`}>
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

      {/* Christian Metadata */}
      <section className="relative overflow-hidden bg-[#0F172A] text-white py-24">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgb(165 180 252) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative max-w-[1040px] mx-auto px-8">
          <div className="text-center mb-14">
            <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-secondary mb-3">
              Christian-native
            </p>
            <h2 className="text-[36px] font-bold tracking-tight mb-3">Metadata built for worship.</h2>
            <p className="text-[#94A3B8] max-w-[560px] mx-auto text-[15px]">
              Purpose-built fields that secular distribution platforms do not support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {metadata.map((m) => (
              <div
                key={m}
                className="bg-white/[0.04] border border-white/10 rounded-lg px-5 py-4 backdrop-blur-sm hover:bg-white/[0.06] hover:border-secondary/30 transition-all"
              >
                <span className="text-[14px] text-white/90">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-[820px] mx-auto px-8">
          <div className="text-center mb-12">
            <p className="label-eyebrow mb-3">Frequently asked</p>
            <h2 className="text-[36px] font-bold tracking-tight mb-3">Questions, answered.</h2>
            <p className="text-subtle max-w-[520px] mx-auto text-[15px]">
              Can&apos;t find what you&apos;re looking for? Visit our{" "}
              <Link href="/docs" className="text-accent font-medium underline-offset-2 hover:underline">
                documentation
              </Link>
              .
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

      {/* Final CTA */}
      <section className="pb-28 pt-8">
        <div className="max-w-[1080px] mx-auto px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#0F172A] p-12 text-center text-white">
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(rgb(165 180 252) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-accent/30 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-secondary/30 blur-[120px] rounded-full pointer-events-none" />
            <div className="relative">
              <h2 className="text-[36px] md:text-[40px] font-bold tracking-tight leading-[1.1] mb-4">
                Ready to build on Christian music infrastructure?
              </h2>
              <p className="text-[#94A3B8] mb-8 max-w-[520px] mx-auto">
                Explore the full demo or book a tailored walkthrough with our team.
              </p>
              <div className="flex items-center justify-center gap-3">
                <Link
                  href="/overview"
                  className="bg-white text-foreground hover:bg-white/90 font-medium rounded-md px-7 py-3 text-[15px] inline-flex items-center gap-2 transition-colors"
                >
                  Enter Demo
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/pricing"
                  className="border border-white/20 text-white hover:bg-white/5 font-medium rounded-md px-7 py-3 text-[15px] transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function EcosystemCategory({
  icon: Icon,
  title,
  count,
  items,
  accent,
}: {
  icon: React.ElementType;
  title: string;
  count: string;
  items: string[];
  accent: "accent" | "secondary";
}) {
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
            accent === "secondary"
              ? "bg-secondary-soft border border-secondary/10"
              : "bg-accent-soft border border-accent/10"
          }`}>
            <Icon
              size={16}
              className={accent === "secondary" ? "text-secondary" : "text-accent"}
              strokeWidth={1.8}
            />
          </div>
          <div>
            <h3 className="text-[15px] font-semibold leading-tight">{title}</h3>
            <p className={`text-[11px] mt-0.5 font-semibold ${accent === "secondary" ? "text-secondary" : "text-accent"}`}>
              {count} integrations
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-x-4 gap-y-2.5">
        {items.map((item) => (
          <div
            key={item}
            className="text-[12.5px] font-medium text-subtle hover:text-foreground transition-colors"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
