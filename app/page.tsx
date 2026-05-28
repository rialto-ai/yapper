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
} from "lucide-react";

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

const trustedBy = [
  "ONErpm-class distribution",
  "Orchard-class label services",
  "Absolute-class campaign ops",
  "FUGA-class infrastructure",
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="h-[64px] border-b border-border flex items-center justify-between px-8 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent-hover rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-white text-sm font-bold">S</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[16px] font-semibold tracking-tight leading-none">Selah</span>
            <span className="text-[10px] text-muted leading-none mt-0.5">by Christian Music Group</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/overview" className="btn-primary flex items-center gap-2">
            Enter Demo
            <ArrowRight size={14} />
          </Link>
        </div>
      </nav>

      {/* Hero with gradient background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-soft/40 via-white to-white pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgb(67 56 202) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative max-w-[920px] mx-auto px-8 pt-28 pb-20 text-center">
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
            <Link href="/releases" className="btn-secondary text-[15px] !px-7 !py-3">
              View Release Workflow
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12px] text-muted">
            {trustedBy.map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <Check size={12} className="text-accent" strokeWidth={2.5} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="max-w-[1040px] mx-auto px-8 pb-28">
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
          <div className="grid grid-cols-2 gap-4">
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
      <section className="py-24">
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
          <div className="grid grid-cols-3 gap-4">
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

      {/* Christian Metadata - dark with indigo accents */}
      <section className="relative overflow-hidden bg-[#0F172A] text-white py-24">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgb(165 180 252) 1px, transparent 1px)",
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
          <div className="grid grid-cols-3 gap-3">
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

      {/* Final CTA */}
      <section className="py-28">
        <div className="max-w-[680px] mx-auto px-8 text-center">
          <h2 className="text-[40px] font-bold tracking-tight leading-[1.1] mb-5">
            A professional operating layer for{" "}
            <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
              Christian music.
            </span>
          </h2>
          <p className="text-subtle mb-10 text-[16px]">
            Distribution, rights, royalties, campaigns, publishing, video monetization, and label services in one platform.
          </p>
          <Link
            href="/overview"
            className="btn-primary text-[15px] !px-8 !py-3 inline-flex items-center gap-2 shadow-lg shadow-accent/15 hover:shadow-xl hover:shadow-accent/20 transition-shadow"
          >
            Launch Selah Demo
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-8 bg-surface">
        <div className="max-w-[1040px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-accent to-accent-hover rounded flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">S</span>
            </div>
            <span className="text-[13px] text-muted">Selah by Christian Music Group</span>
          </div>
          <span className="text-[12px] text-muted">Prototype Demo</span>
        </div>
      </footer>
    </div>
  );
}
