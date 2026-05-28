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
  TrendingUp,
  CircleDollarSign,
  ChevronRight,
  Plus,
  Minus,
} from "lucide-react";
import { useState } from "react";

const features = [
  { icon: Users, title: "Artists & Worship Teams", desc: "Release music, track performance, manage splits, and grow listener and church adoption." },
  { icon: Building2, title: "Labels & Managers", desc: "Coordinate rosters, releases, campaigns, rights, reporting, and partner communication." },
  { icon: BookOpen, title: "Publishers & Songwriters", desc: "Manage compositions, songwriter splits, publishing administration, licensing status, and royalty collection." },
  { icon: Church, title: "Churches & Ministries", desc: "Organize worship catalogs, prepare releases, manage contributors, and support congregational adoption." },
];

const modules = [
  { icon: Disc3, title: "Distribution", desc: "Global delivery to all major DSPs and Christian music channels." },
  { icon: Scale, title: "Rights & Splits", desc: "Master, publishing, neighboring, and sync rights in one place." },
  { icon: DollarSign, title: "Royalty Accounting", desc: "Transparent statements, payee management, and recoupment tracking." },
  { icon: Megaphone, title: "Campaign Management", desc: "Playlist pitching, church outreach, radio, and content operations." },
  { icon: FileText, title: "Publishing Administration", desc: "Composition registration, PRO management, and mechanical licensing." },
  { icon: Youtube, title: "YouTube & Video Monetization", desc: "Content ID claiming, channel management, and revenue tracking." },
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
  { icon: Send, title: "Distribution", desc: "Deliver globally to every major DSP plus Christian-native channels." },
  { icon: Megaphone, title: "Campaign", desc: "Run playlist pitching, church outreach, and YouTube strategy." },
  { icon: CircleDollarSign, title: "Royalty", desc: "Transparent statements and payouts to every collaborator and partner." },
];

const dsps = [
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
  "CCLI SongSelect",
];

const stats = [
  { value: "4.8M+", label: "Tracks distributed" },
  { value: "120+", label: "Partner labels & ministries" },
  { value: "8.2K+", label: "Churches reached" },
  { value: "84", label: "Countries delivered to" },
  { value: "A$2.4M+", label: "Royalties paid quarterly" },
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
      "The publishing administration alone replaces three tools we were using. The royalty accounting is the cleanest I've seen.",
    name: "Independent Artist",
    role: "Grace Harbor",
  },
];

const faqs = [
  {
    q: "How does Selah differ from generic distributors like DistroKid or TuneCore?",
    a: "Selah is purpose-built for Christian music. We support CCLI workflows, chord chart distribution, congregational suitability metadata, church-network outreach, and a Church Adoption Funnel that tracks worship leader engagement. Generic distributors treat Christian music as one of many genres; we treat it as the whole product.",
  },
  {
    q: "What service tiers do you offer?",
    a: "Self-Service Distribution, Managed Distribution, Label Services, Publishing Administration, YouTube Services, and Enterprise / Partner Portal. Tiers can be mixed across a roster — for example a label can keep distribution self-service while engaging us for publishing admin.",
  },
  {
    q: "Do you handle YouTube Content ID claims and conflicts?",
    a: "Yes. We manage Content ID claiming, claim conflicts, channel optimization, and revenue tracking for every video asset in your catalog. Our YouTube team also handles dispute resolution end-to-end.",
  },
  {
    q: "What is the Church Adoption Score?",
    a: "A proprietary 100-point score that measures congregational suitability, lyric clarity, theological alignment, worship leader engagement, chord chart availability, church network traction, and repeat usage signal. It tells you in one number how a song is performing inside the church market.",
  },
  {
    q: "How do royalty splits and payouts work?",
    a: "Configure master, publishing, and neighboring rights shares per participant. We handle multi-currency payouts, tax documentation collection, recoupment tracking, and quarterly statement generation. Every collaborator sees the same source of truth.",
  },
  {
    q: "Can I administer my own publishing, or do you require admin?",
    a: "Both options. You can self-administer through the Publishing module, or engage CMG Publishing Administration for full PRO registration, mechanical licensing, sync representation, and global collection.",
  },
];

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Hero with gradient background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-soft/40 via-white to-white pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgb(67 56 202) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative max-w-[920px] mx-auto px-8 pt-24 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-accent/15 shadow-sm mb-8 animate-fade-in-up">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[12px] font-medium text-accent">
              Christian music infrastructure, in private beta
            </span>
          </div>
          <h1 className="text-[52px] font-bold tracking-tight leading-[1.05] mb-6 animate-fade-in-up">
            Infrastructure for the{" "}
            <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
              Christian music economy.
            </span>
          </h1>
          <p className="text-[18px] text-subtle max-w-[680px] mx-auto mb-10 leading-relaxed animate-fade-in-up">
            Selah helps Christian artists, worship teams, labels, publishers, and rights holders distribute music, manage rights, track royalties, run campaigns, and grow church and listener adoption from one platform.
          </p>
          <div className="flex items-center justify-center gap-3 animate-fade-in-up">
            <Link href="/overview" className="btn-primary text-[15px] !px-7 !py-3 flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow">
              Enter Demo
              <ArrowRight size={16} />
            </Link>
            <Link href="/pricing" className="btn-secondary text-[15px] !px-7 !py-3">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="max-w-[1040px] mx-auto px-8 pb-24">
        <div className="card p-6 shadow-xl shadow-accent/5 border-border-strong relative">
          <div className="absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-surface rounded-lg p-4 border border-border">
              <p className="text-[11px] text-muted mb-1">Release Pipeline</p>
              <p className="text-[20px] font-semibold tracking-tight">24 Active</p>
              <p className="text-[11px] text-muted mt-1">5 pending review</p>
            </div>
            <div className="bg-surface rounded-lg p-4 border border-border">
              <p className="text-[11px] text-muted mb-1">Rights Approval</p>
              <p className="text-[20px] font-semibold tracking-tight">7 Pending</p>
              <p className="text-[11px] text-warning mt-1">2 high priority</p>
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
                    className="flex-1 rounded-sm bg-gradient-to-t from-accent to-accent/40"
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
                <div className="h-full w-[78%] bg-gradient-to-r from-accent to-accent-hover rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DSP Integration logos */}
      <section className="border-y border-border bg-white py-14">
        <div className="max-w-[1040px] mx-auto px-8">
          <p className="text-center text-[12px] font-medium uppercase tracking-[0.08em] text-muted mb-7">
            Delivering to every store, streaming service, and Christian channel that matters
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-y-6 gap-x-4">
            {dsps.map((dsp) => (
              <div
                key={dsp}
                className="flex items-center justify-center text-[13px] font-semibold text-subtle hover:text-foreground transition-colors"
              >
                {dsp}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Diagram - How it works */}
      <section id="workflow" className="py-24">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="text-center mb-14">
            <p className="label-eyebrow mb-3">How it works</p>
            <h2 className="text-[36px] font-bold tracking-tight mb-3">
              The release lifecycle, end-to-end.
            </h2>
            <p className="text-subtle max-w-[600px] mx-auto text-[15px]">
              One platform from first asset upload to final royalty payout. No handoffs, no spreadsheets, no missed splits.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-[42px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 md:gap-y-0 md:gap-x-4 relative">
              {workflow.map((step, i) => (
                <div key={step.title} className="flex flex-col items-center text-center px-2">
                  <div className="w-[84px] h-[84px] rounded-2xl bg-gradient-to-br from-white to-accent-soft/40 border border-accent/15 flex items-center justify-center mb-4 relative shadow-sm">
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-white text-[11px] font-semibold flex items-center justify-center shadow-md">
                      {i + 1}
                    </div>
                    <step.icon size={28} className="text-accent" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-[15px] font-semibold mb-1.5">{step.title}</h3>
                  <p className="text-[12px] text-subtle leading-relaxed max-w-[180px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/docs" className="text-[13px] font-medium text-accent inline-flex items-center gap-1 hover:gap-2 transition-all">
              Read the full workflow guide
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Built For */}
      <section className="bg-surface py-24 border-y border-border">
        <div className="max-w-[1040px] mx-auto px-8">
          <div className="text-center mb-14">
            <p className="label-eyebrow mb-3">Who we build for</p>
            <h2 className="text-[36px] font-bold tracking-tight mb-3">
              Built for Christian music rights holders
            </h2>
            <p className="text-subtle max-w-[560px] mx-auto text-[15px]">
              One platform for every participant in the Christian music value chain.
            </p>
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

      {/* Modules */}
      <section id="modules" className="py-24">
        <div className="max-w-[1040px] mx-auto px-8">
          <div className="text-center mb-14">
            <p className="label-eyebrow mb-3">Platform</p>
            <h2 className="text-[36px] font-bold tracking-tight mb-3">
              Six modules. One integrated workflow.
            </h2>
            <p className="text-subtle max-w-[560px] mx-auto text-[15px]">
              Integrated tools covering the full lifecycle of Christian music operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {modules.map((m) => (
              <div key={m.title} className="card p-6 card-interactive group">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center mb-4 shadow-sm shadow-accent/20 group-hover:shadow-md group-hover:shadow-accent/25 transition-shadow">
                  <m.icon size={18} className="text-white" strokeWidth={1.8} />
                </div>
                <h3 className="text-[15px] font-semibold mb-1.5">{m.title}</h3>
                <p className="text-[13px] text-subtle leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-br from-accent-soft/40 to-white py-20 border-y border-accent/10">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 md:gap-x-4 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-[32px] md:text-[36px] font-bold tracking-tight bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent mb-1">
                  {s.value}
                </p>
                <p className="text-[12px] text-subtle font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
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
                <svg width="22" height="18" viewBox="0 0 22 18" className="text-accent mb-4">
                  <path
                    d="M0 18V8.4C0 3.76 3.04 0 7.6 0V3.6C5.04 3.6 3.2 5.84 3.2 8.4H6.4V18H0ZM12.8 18V8.4C12.8 3.76 15.84 0 20.4 0V3.6C17.84 3.6 16 5.84 16 8.4H19.2V18H12.8Z"
                    fill="currentColor"
                  />
                </svg>
                <p className="text-[14px] text-foreground leading-relaxed flex-1 mb-5">{t.quote}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center text-white text-[12px] font-semibold">
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

      {/* Christian Metadata - dark with indigo accents */}
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
            <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-accent mb-3">
              Christian-native
            </p>
            <h2 className="text-[36px] font-bold tracking-tight mb-3">
              Metadata built for worship.
            </h2>
            <p className="text-[#94A3B8] max-w-[560px] mx-auto text-[15px]">
              Purpose-built fields that secular distribution platforms do not support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {metadata.map((m) => (
              <div
                key={m}
                className="bg-white/[0.04] border border-white/10 rounded-lg px-5 py-4 backdrop-blur-sm hover:bg-white/[0.06] hover:border-accent/30 transition-all"
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
            <h2 className="text-[36px] font-bold tracking-tight mb-3">
              Questions, answered.
            </h2>
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
        <div className="max-w-[1040px] mx-auto px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#0F172A] p-12 text-center text-white">
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(rgb(165 180 252) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/30 blur-[120px] rounded-full pointer-events-none" />
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
