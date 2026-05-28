"use client";

import Link from "next/link";
import {
  Globe2,
  Sparkles,
  Rocket,
  ArrowRight,
  MapPin,
  Linkedin,
  Twitter,
  Quote,
  Compass,
} from "lucide-react";

const stats = [
  { value: "2026", label: "Founded" },
  { value: "8", label: "Global offices" },
  { value: "84", label: "Markets served" },
  { value: "150+", label: "DSPs & channels" },
];

const offices = [
  { city: "Sydney", country: "Australia", address: "Level 1, 60 Martin Place, Sydney NSW 2000", role: "Global HQ", primary: true },
  { city: "Singapore", country: "Singapore", address: "8 Marina View, Asia Square Tower 1, Singapore 018960", role: "South-East Asia hub" },
  { city: "Kuala Lumpur", country: "Malaysia", address: "Menara TM, Jalan Pantai Bahru, 50672 Kuala Lumpur", role: "Malaysia operations" },
  { city: "Bangkok", country: "Thailand", address: "King Power Mahanakhon, 114 Naradhiwas Rajanagarindra Road, Silom, Bangkok 10500", role: "Thailand operations" },
  { city: "Taipei", country: "Taiwan", address: "Taipei 101 Tower, 7 Xinyi Road, Section 5, Taipei 110", role: "Taiwan operations" },
  { city: "Seoul", country: "South Korea", address: "Gangnam Finance Center, 152 Teheran-ro, Gangnam-gu, Seoul", role: "Korea operations" },
  { city: "Manila", country: "Philippines", address: "One Bonifacio High Street, 5th Avenue, BGC, Taguig 1634", role: "Customer success" },
  { city: "Jakarta", country: "Indonesia", address: "Pacific Place, SCBD Lot 3-5, Jakarta 12190", role: "Indonesia operations" },
];

const press = [
  { pub: "WorshipLeader Magazine", date: "Jan 2026", title: "How Selah is reshaping how worship songs reach the church." },
  { pub: "Music Business Worldwide", date: "Feb 2026", title: "Christian Music Group expands its distribution footprint across Asia-Pacific." },
  { pub: "Sight Magazine", date: "Mar 2026", title: "Sydney-based Selah brings purpose-built distribution to the Christian music world." },
  { pub: "The Australian Financial Review", date: "Dec 2025", title: "Selah named one of Australia's most promising B2B SaaS exporters." },
];

const values = [
  { icon: Sparkles, title: "Christian music deserves great tools", body: "We measure ourselves by how well artists, worship teams, and ministries can operate. The product comes second to the people it serves." },
  { icon: Rocket, title: "Distribution first, always", body: "Distribution is the spine of music infrastructure. Marketing, accounting, analytics, and publishing partnerships extend from that core." },
  { icon: Globe2, title: "Asia-Pacific native", body: "We build for the world but our roots are in Sydney and the markets where Christian music is growing fastest." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-soft/40 via-white to-white pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgb(30 64 175) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-[15%] right-[10%] w-[380px] h-[380px] bg-secondary/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="relative max-w-[900px] mx-auto px-8 pt-20 pb-16 text-center">
          <p className="label-eyebrow mb-4">About Selah</p>
          <h1 className="text-[48px] md:text-[54px] font-bold tracking-tight leading-[1.05] mb-6">
            Christian music distribution{" "}
            <span className="brand-gradient-text">from the southern hemisphere to the world.</span>
          </h1>
          <p className="text-[18px] text-subtle max-w-[680px] mx-auto leading-relaxed">
            Founded in Sydney in 2026, Selah delivers Christian music globally to every major DSP and the Christian channel network. We operate from 8 offices across the Asia-Pacific, distributing on behalf of artists, labels, worship teams, and ministries.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-white">
        <div className="max-w-[1100px] mx-auto px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-y-8 text-center">
          {stats.map((s, i) => (
            <div key={s.label}>
              <p
                className={`text-[40px] md:text-[48px] font-bold tracking-tight mb-1 bg-clip-text text-transparent ${
                  i % 2 === 0
                    ? "bg-gradient-to-r from-accent to-accent-hover"
                    : "bg-gradient-to-r from-secondary to-secondary-hover"
                }`}
              >
                {s.value}
              </p>
              <p className="text-[12px] text-muted font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder message */}
      <section className="py-24">
        <div className="max-w-[1080px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <p className="label-eyebrow-secondary mb-3">A word from our founder</p>
            <h2 className="text-[34px] font-bold tracking-tight leading-tight">
              Built by an Australian for the global Christian music economy.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <div className="card p-8 relative">
              <Quote className="absolute top-6 right-6 text-accent/10" size={48} strokeWidth={1.5} />
              <div className="relative space-y-4 text-[15px] text-subtle leading-relaxed">
                <p>
                  Christian music has a unique distribution problem. Generic platforms don&apos;t understand CCLI workflows, congregational suitability, or the church networks that determine whether a worship song actually gets sung on a Sunday morning.
                </p>
                <p>
                  Selah exists because the artists, labels, worship teams, and ministries shaping Christian music globally deserve infrastructure built for them. We&apos;re a distribution company first. Marketing, accounting, analytics, and publishing partnerships all extend from that core mission: getting Christian music to the people, places, and platforms where it belongs.
                </p>
                <p>
                  We chose Sydney as our headquarters intentionally. Australia has long been known in Christian tradition as the Great Southland of the Holy Spirit. From here, we serve the artists and ministries shaping Christian music across the Asia-Pacific region and around the world.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-7 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full brand-gradient flex items-center justify-center text-white text-[14px] font-bold">
                  CG
                </div>
                <div className="flex-1">
                  <p className="text-[14px] font-semibold">Cameron Gullo</p>
                  <p className="text-[12px] text-muted">Founder &amp; CEO, Christian Music Group</p>
                </div>
                <div className="flex gap-1.5">
                  <a
                    href="https://linkedin.com"
                    aria-label="LinkedIn"
                    className="w-8 h-8 rounded-md border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-colors"
                  >
                    <Linkedin size={13} strokeWidth={1.8} />
                  </a>
                  <a
                    href="https://twitter.com"
                    aria-label="X"
                    className="w-8 h-8 rounded-md border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-colors"
                  >
                    <Twitter size={13} strokeWidth={1.8} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Great Southland section */}
      <section className="relative overflow-hidden bg-[#0F172A] text-white py-24">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgb(16 185 129) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent/15 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative max-w-[900px] mx-auto px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 mb-6">
            <Compass size={12} className="text-secondary" />
            <span className="text-[11px] font-medium text-white/80">Headquartered in the Great Southland of the Holy Spirit</span>
          </div>
          <h2 className="text-[36px] md:text-[40px] font-bold tracking-tight mb-6 leading-tight">
            Sydney, Australia.
            <br />
            <span className="brand-gradient-text">The Great Southland of the Holy Spirit.</span>
          </h2>
          <p className="text-[16px] text-[#94A3B8] leading-relaxed max-w-[640px] mx-auto">
            In 1606, the Spanish explorer Pedro Fernandes de Queiros sighted the southern lands and dedicated them as &ldquo;Australia del Espiritu Santo&rdquo;, the Great Southland of the Holy Spirit. Centuries later, Sydney is home to Selah&apos;s global headquarters and the platform from which we distribute Christian music across the Asia-Pacific and the world.
          </p>
        </div>
      </section>

      {/* Offices */}
      <section className="py-24">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="text-center mb-12">
            <p className="label-eyebrow mb-3">Global offices</p>
            <h2 className="text-[36px] font-bold tracking-tight mb-3">Across the Asia-Pacific.</h2>
            <p className="text-subtle max-w-[600px] mx-auto text-[15px]">
              Eight offices across Asia-Pacific running local DSP relationships, church network operations, and customer support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {offices.map((o) => (
              <div
                key={o.city}
                className={`card p-5 card-interactive ${
                  o.primary ? "bg-gradient-to-br from-accent-soft/40 to-white border-accent/20" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin
                      size={15}
                      className={o.primary ? "text-secondary" : "text-muted"}
                      strokeWidth={1.8}
                    />
                    <p className="text-[15px] font-semibold">{o.city}</p>
                  </div>
                  {o.primary && (
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-secondary text-white px-1.5 py-0.5 rounded">
                      HQ
                    </span>
                  )}
                </div>
                <p className="text-[12px] text-muted mb-2">{o.country}</p>
                <p className="text-[11px] text-subtle leading-relaxed mb-3">{o.address}</p>
                <p className="text-[11px] text-accent font-medium">{o.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="text-center mb-14">
            <p className="label-eyebrow-secondary mb-3">What we believe</p>
            <h2 className="text-[36px] font-bold tracking-tight">Three things we hold to.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <div key={v.title} className="card p-7 card-interactive">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-md ${
                    i === 1
                      ? "bg-gradient-to-br from-secondary to-secondary-hover shadow-secondary/20"
                      : "bg-gradient-to-br from-accent to-accent-hover shadow-accent/20"
                  }`}
                >
                  <v.icon size={20} className="text-white" strokeWidth={1.6} />
                </div>
                <h3 className="text-[16px] font-semibold mb-2.5">{v.title}</h3>
                <p className="text-[13px] text-subtle leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="py-20 bg-surface border-t border-border">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="text-center mb-10">
            <p className="label-eyebrow-secondary mb-3">Recognition</p>
            <h2 className="text-[32px] font-bold tracking-tight">In the press.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {press.map((p) => (
              <article key={p.title} className="card p-6 card-interactive">
                <div className="flex items-center gap-2 mb-3 text-[12px] text-muted">
                  <span className="font-semibold text-subtle">{p.pub}</span>
                  <span>·</span>
                  <span>{p.date}</span>
                </div>
                <h3 className="text-[15px] font-semibold leading-snug">{p.title}</h3>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/press"
              className="text-[13px] font-medium text-accent inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              See all press
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#0B2E5C] to-[#064E3B] p-12 text-center text-white">
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(rgb(16 185 129) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="relative">
              <h2 className="text-[36px] font-bold tracking-tight leading-[1.1] mb-4">
                Distribute your music with Selah.
              </h2>
              <p className="text-[#94A3B8] mb-8 max-w-[520px] mx-auto">
                Join artists, labels, worship teams, and ministries distributing through Selah.
              </p>
              <div className="flex items-center justify-center gap-3">
                <Link
                  href="/overview"
                  className="bg-white text-foreground hover:bg-white/90 font-medium rounded-md px-7 py-3 text-[15px] inline-flex items-center gap-2 transition-colors"
                >
                  Join Selah
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="border border-white/20 text-white hover:bg-white/5 font-medium rounded-md px-7 py-3 text-[15px] transition-colors"
                >
                  Talk to our team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
