"use client";

import Link from "next/link";
import { ArrowRight, Disc3, Scale, DollarSign, Megaphone, FileText, Youtube } from "lucide-react";

const features = [
  { title: "Artists & Worship Teams", desc: "Release music, track performance, manage splits, and grow listener and church adoption." },
  { title: "Labels & Managers", desc: "Coordinate rosters, releases, campaigns, rights, reporting, and partner communication." },
  { title: "Publishers & Songwriters", desc: "Manage compositions, songwriter splits, publishing administration, licensing status, and royalty collection." },
  { title: "Churches & Ministries", desc: "Organize worship catalogs, prepare releases, manage contributors, and support congregational adoption." },
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

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="h-[64px] border-b border-border flex items-center justify-between px-8 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
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

      {/* Hero */}
      <section className="max-w-[900px] mx-auto px-8 pt-24 pb-20 text-center">
        <h1 className="text-[48px] font-bold tracking-tight leading-[1.1] mb-6">
          Infrastructure for the Christian music economy.
        </h1>
        <p className="text-[18px] text-subtle max-w-[680px] mx-auto mb-10 leading-relaxed">
          Selah helps Christian artists, worship teams, labels, publishers, and rights holders distribute music, manage rights, track royalties, run campaigns, and grow church and listener adoption from one platform.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/overview" className="btn-primary text-[15px] !px-7 !py-3 flex items-center gap-2">
            Enter Demo
            <ArrowRight size={16} />
          </Link>
          <Link href="/releases" className="btn-secondary text-[15px] !px-7 !py-3">
            View Release Workflow
          </Link>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="max-w-[1000px] mx-auto px-8 pb-24">
        <div className="card p-6 border-border-strong">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-surface rounded-lg p-4">
              <p className="text-[11px] text-muted mb-1">Release Pipeline</p>
              <p className="text-[18px] font-semibold">24 Active</p>
              <p className="text-[11px] text-muted mt-1">5 pending review</p>
            </div>
            <div className="bg-surface rounded-lg p-4">
              <p className="text-[11px] text-muted mb-1">Rights Approval</p>
              <p className="text-[18px] font-semibold">7 Pending</p>
              <p className="text-[11px] text-muted mt-1">2 high priority</p>
            </div>
            <div className="bg-surface rounded-lg p-4">
              <p className="text-[11px] text-muted mb-1">Royalty Summary</p>
              <p className="text-[18px] font-semibold">A$82,400</p>
              <p className="text-[11px] text-muted mt-1">Q2 2026 estimate</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-surface rounded-lg p-4">
              <p className="text-[11px] text-muted mb-1">Campaign Timeline</p>
              <div className="space-y-1.5 mt-2">
                {["Strategy approved", "Assets locked", "DSP delivery"].map((t, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                    <span className="text-[11px]">{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface rounded-lg p-4">
              <p className="text-[11px] text-muted mb-1">Streams (May)</p>
              <p className="text-[18px] font-semibold">680K</p>
              <p className="text-[11px] text-muted mt-1">+9.7% vs April</p>
            </div>
            <div className="bg-surface rounded-lg p-4">
              <p className="text-[11px] text-muted mb-1">Church Adoption</p>
              <p className="text-[18px] font-semibold">78 / 100</p>
              <p className="text-[11px] text-muted mt-1">Strong engagement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Built For */}
      <section className="bg-surface py-24">
        <div className="max-w-[1000px] mx-auto px-8">
          <h2 className="text-[32px] font-bold tracking-tight text-center mb-4">
            Built for Christian music rights holders
          </h2>
          <p className="text-center text-subtle mb-12 max-w-[500px] mx-auto">
            One platform for every participant in the Christian music value chain.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="card p-6">
                <h3 className="text-[16px] font-semibold mb-2">{f.title}</h3>
                <p className="text-[13px] text-subtle leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-24">
        <div className="max-w-[1000px] mx-auto px-8">
          <h2 className="text-[32px] font-bold tracking-tight text-center mb-4">
            Platform modules
          </h2>
          <p className="text-center text-subtle mb-12 max-w-[500px] mx-auto">
            Integrated tools covering the full lifecycle of Christian music operations.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {modules.map((m) => (
              <div key={m.title} className="card p-6">
                <m.icon size={20} className="text-foreground mb-3" strokeWidth={1.5} />
                <h3 className="text-[15px] font-semibold mb-1.5">{m.title}</h3>
                <p className="text-[13px] text-subtle leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Christian Metadata */}
      <section className="bg-[#111111] text-white py-24">
        <div className="max-w-[1000px] mx-auto px-8">
          <h2 className="text-[32px] font-bold tracking-tight text-center mb-4">
            Christian-native metadata
          </h2>
          <p className="text-center text-[#999] mb-12 max-w-[520px] mx-auto">
            Purpose-built fields that secular distribution platforms do not support.
          </p>
          <div className="grid grid-cols-3 gap-3">
            {metadata.map((m) => (
              <div key={m} className="bg-[#1A1A1A] border border-[#333] rounded-lg px-5 py-4">
                <span className="text-[14px] text-[#ccc]">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-[600px] mx-auto px-8 text-center">
          <h2 className="text-[32px] font-bold tracking-tight mb-4">
            A professional operating layer for Christian music.
          </h2>
          <p className="text-subtle mb-8">
            Distribution, rights, royalties, campaigns, publishing, video monetization, and label services in one platform.
          </p>
          <Link href="/overview" className="btn-primary text-[15px] !px-8 !py-3 inline-flex items-center gap-2">
            Launch Selah Demo
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-8">
        <div className="max-w-[1000px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-foreground rounded flex items-center justify-center">
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
