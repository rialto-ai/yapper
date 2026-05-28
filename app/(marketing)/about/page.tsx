"use client";

import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  Building2,
  Users,
  Award,
  Sparkles,
  Rocket,
  TrendingUp,
  MapPin,
  Linkedin,
  Twitter,
} from "lucide-react";

const bigStats = [
  { value: "2024", label: "Founded", gradient: "from-accent to-accent-hover" },
  { value: "8", label: "Global offices", gradient: "from-secondary to-secondary-hover" },
  { value: "84", label: "Markets served", gradient: "from-accent to-accent-hover" },
  { value: "850+", label: "Team members", gradient: "from-secondary to-secondary-hover" },
];

const leaders = [
  {
    initials: "AB",
    name: "A. Bennett",
    role: "Co-founder & CEO",
    bio: "12 years in music distribution. Previously led APAC at a major distributor.",
    gradient: "from-accent to-accent-hover",
  },
  {
    initials: "LC",
    name: "L. Chen",
    role: "Co-founder & CTO",
    bio: "Built royalty infrastructure at a Fortune 500 music company. Stanford CS.",
    gradient: "from-secondary to-secondary-hover",
  },
  {
    initials: "MO",
    name: "M. Okafor",
    role: "Chief Operating Officer",
    bio: "Scaled global operations at two music technology companies.",
    gradient: "from-accent to-accent-hover",
  },
  {
    initials: "ST",
    name: "S. Tanaka",
    role: "VP, Asia-Pacific",
    bio: "Led DSP partnerships across Japan, Korea, and Southeast Asia for 10 years.",
    gradient: "from-secondary to-secondary-hover",
  },
];

const offices = [
  {
    city: "Sydney",
    country: "Australia",
    address: "Level 1, 60 Martin Place, Sydney NSW 2000",
    team: "180+",
    role: "Global headquarters: engineering, finance, executive.",
    hq: true,
  },
  {
    city: "Singapore",
    country: "Singapore",
    address: "8 Marina View, Asia Square Tower 1, Singapore 018960",
    team: "62",
    role: "South-East Asia hub.",
  },
  {
    city: "Tokyo",
    country: "Japan",
    address: "Marunouchi Park Building, 2-6-1 Marunouchi, Chiyoda-ku, Tokyo 100-6917",
    team: "48",
    role: "Japan operations, DSP partnerships.",
  },
  {
    city: "Seoul",
    country: "South Korea",
    address: "Gangnam Finance Center, 152 Teheran-ro, Gangnam-gu, Seoul",
    team: "34",
    role: "Korea operations, K-worship scene.",
  },
  {
    city: "Hong Kong",
    country: "Hong Kong SAR",
    address: "Two IFC, 8 Finance Street, Central, Hong Kong",
    team: "41",
    role: "Greater China.",
  },
  {
    city: "Manila",
    country: "Philippines",
    address: "One Bonifacio High Street, 5th Avenue, BGC, Taguig 1634",
    team: "120+",
    role: "Customer success, operations.",
  },
  {
    city: "Jakarta",
    country: "Indonesia",
    address: "Pacific Place, SCBD Lot 3-5, Jakarta 12190",
    team: "58",
    role: "Indonesia.",
  },
  {
    city: "Mumbai",
    country: "India",
    address: "One BKC, Bandra Kurla Complex, Mumbai 400051",
    team: "76",
    role: "South Asia.",
  },
];

const investors = [
  "Antler",
  "Square Peg Capital",
  "Blackbird Ventures",
  "AirTree Ventures",
  "Sequoia Capital India",
  "Patamar Capital",
];

const press = [
  {
    publication: "TechCrunch",
    date: "Mar 2026",
    headline:
      "Sydney's Selah raises $18M to build Christian music's infrastructure layer.",
  },
  {
    publication: "Music Business Worldwide",
    date: "Feb 2026",
    headline: "Christian Music Group expands to 8 Asia-Pacific markets.",
  },
  {
    publication: "WorshipLeader Magazine",
    date: "Jan 2026",
    headline: "How Selah is reshaping how worship songs reach the church.",
  },
  {
    publication: "The Australian Financial Review",
    date: "Dec 2025",
    headline:
      "Selah named one of Australia's most promising B2B SaaS startups.",
  },
];

const values = [
  {
    icon: Sparkles,
    title: "Christian music deserves great tools",
    body: "We measure ourselves by how well artists and worship teams can operate, not by how clever our tech sounds.",
  },
  {
    icon: Rocket,
    title: "Distribution first, always",
    body: "Distribution is the spine of music infrastructure. Everything we build extends or supports that core.",
  },
  {
    icon: Globe2,
    title: "Asia-Pacific native",
    body: "We build for the world but we're rooted in the markets where Christian music is growing fastest.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-soft/40 via-white to-white pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgb(67 56 202) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-[15%] left-[8%] w-[420px] h-[420px] bg-secondary/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-[10%] right-[8%] w-[420px] h-[420px] bg-accent/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative max-w-[1000px] mx-auto px-8 pt-24 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-accent/15 shadow-sm mb-8 animate-fade-in-up">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[12px] font-medium text-accent uppercase tracking-[0.08em]">
              About Selah
            </span>
          </div>
          <h1 className="text-[54px] font-bold tracking-tight leading-[1.05] mb-6 animate-fade-in-up">
            We&apos;re building the distribution infrastructure for{" "}
            <span className="bg-gradient-to-r from-accent via-accent-hover to-secondary bg-clip-text text-transparent">
              Christian music.
            </span>
          </h1>
          <p className="text-[18px] text-subtle max-w-[760px] mx-auto leading-relaxed animate-fade-in-up">
            Founded in Sydney in 2024 with a single mission: give Christian artists,
            worship teams, labels, and rights holders the same operational platform
            that secular music has had for a decade. Today we operate across 8 offices
            in 7 countries, distributing for 120+ partner organizations to 84 markets.
          </p>
        </div>
      </section>

      {/* Section 2: Big stats */}
      <section className="border-y border-border bg-white py-20">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
            {bigStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className={`text-[64px] md:text-[72px] font-bold tracking-tight leading-none bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </p>
                <p className="mt-3 text-[13px] uppercase tracking-[0.1em] text-muted font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Mission */}
      <section className="py-24 bg-surface">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-16 items-start">
            <div>
              <p className="label-eyebrow mb-3">Mission</p>
              <h2 className="text-[40px] font-bold tracking-tight leading-[1.1]">
                Christian music deserves modern infrastructure.
              </h2>
            </div>
            <div className="space-y-5 text-[16px] leading-relaxed text-subtle">
              <p>
                The Christian music economy is large and growing — but it&apos;s
                underserved by generic distribution tools that don&apos;t understand
                CCLI workflows, congregational suitability, or church network outreach.
              </p>
              <p>
                Selah was founded to be the operational backbone — distribution,
                rights, royalties, campaigns, and analytics — purpose-built for this
                space. Every primitive we ship is designed for how Christian music
                actually moves through the world.
              </p>
              <p>
                We&apos;re Sydney-headquartered and Asia-Pacific-native because
                that&apos;s where the fastest-growing Christian music economies are.
                Our teams across 7 countries give us first-hand presence in the
                markets we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Leadership */}
      <section className="py-24 bg-white border-y border-border">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="text-center mb-14">
            <p className="label-eyebrow-secondary mb-3">Leadership</p>
            <h2 className="text-[40px] font-bold tracking-tight mb-3">
              Operators who&apos;ve built this before.
            </h2>
            <p className="text-subtle max-w-[600px] mx-auto text-[15px]">
              The team behind Selah has shipped music infrastructure at global
              scale — and now we&apos;re doing it for the Christian music economy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {leaders.map((leader) => (
              <div key={leader.name} className="card card-interactive p-6">
                <div
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${leader.gradient} flex items-center justify-center text-white font-semibold text-[16px] mb-5 shadow-sm`}
                >
                  {leader.initials}
                </div>
                <h3 className="text-[16px] font-semibold tracking-tight text-foreground">
                  {leader.name}
                </h3>
                <p className="text-[13px] text-accent font-medium mt-0.5 mb-3">
                  {leader.role}
                </p>
                <p className="text-[13px] text-subtle leading-relaxed mb-5">
                  {leader.bio}
                </p>
                <div className="flex items-center gap-2.5 pt-4 border-t border-border">
                  <Linkedin size={14} className="text-muted hover:text-accent transition-colors cursor-pointer" />
                  <Twitter size={14} className="text-muted hover:text-accent transition-colors cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Offices */}
      <section className="py-24 bg-surface">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="text-center mb-14">
            <p className="label-eyebrow mb-3">Global presence</p>
            <h2 className="text-[40px] font-bold tracking-tight mb-3">
              Eight offices.{" "}
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Seven countries.
              </span>{" "}
              One platform.
            </h2>
            <p className="text-subtle max-w-[600px] mx-auto text-[15px]">
              We operate where Christian music is growing — with local teams running
              DSP relationships, partner support, and church-network outreach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {offices.map((office) => (
              <div
                key={office.city}
                className={`card card-interactive p-6 relative ${
                  office.hq
                    ? "bg-gradient-to-br from-secondary-soft/60 via-white to-white border-secondary/15"
                    : ""
                }`}
              >
                {office.hq && (
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary text-white text-[10px] font-semibold uppercase tracking-[0.08em]">
                    HQ
                  </div>
                )}
                <div className="flex items-center gap-2 mb-4">
                  <MapPin
                    size={16}
                    className={office.hq ? "text-secondary" : "text-accent"}
                    strokeWidth={2}
                  />
                  <h3 className="text-[18px] font-semibold tracking-tight">
                    {office.city}
                  </h3>
                </div>
                <p className="text-[12px] uppercase tracking-[0.08em] text-muted font-medium mb-3">
                  {office.country}
                </p>
                <p className="text-[12px] text-subtle leading-relaxed mb-4 min-h-[48px]">
                  {office.address}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-1.5">
                    <Users size={12} className="text-muted" />
                    <span className="text-[12px] font-semibold text-foreground">
                      {office.team}
                    </span>
                    <span className="text-[12px] text-muted">team</span>
                  </div>
                </div>
                <p className="text-[12px] text-subtle mt-3 leading-relaxed">
                  {office.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Investors */}
      <section className="py-24 bg-white border-y border-border">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="text-center mb-12">
            <p className="label-eyebrow-secondary mb-3">Backed by</p>
            <h2 className="text-[40px] font-bold tracking-tight mb-3">
              Backed by world-class investors.
            </h2>
            <p className="text-subtle max-w-[600px] mx-auto text-[15px]">
              Selah is supported by leading institutional investors across
              Asia-Pacific and globally.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
            {investors.map((investor) => (
              <div
                key={investor}
                className="bg-white py-10 px-6 flex items-center justify-center text-center"
              >
                <span className="text-[17px] font-semibold tracking-tight text-subtle hover:text-accent transition-colors">
                  {investor}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Press */}
      <section className="py-24 bg-surface">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="text-center mb-14">
            <p className="label-eyebrow mb-3">Recognition</p>
            <h2 className="text-[40px] font-bold tracking-tight mb-3">
              In the press.
            </h2>
            <p className="text-subtle max-w-[600px] mx-auto text-[15px]">
              How the world&apos;s leading publications cover our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {press.map((item) => (
              <div key={item.headline} className="card card-interactive p-7 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[13px] font-semibold text-foreground tracking-tight">
                    {item.publication}
                  </span>
                  <span className="text-[12px] text-muted">{item.date}</span>
                </div>
                <p className="text-[17px] font-medium text-foreground leading-snug mb-5">
                  &ldquo;{item.headline}&rdquo;
                </p>
                <div className="inline-flex items-center gap-1.5 text-[12px] font-medium text-accent group-hover:gap-2 transition-all">
                  Read article
                  <ArrowRight size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Values */}
      <section className="py-24 bg-white border-y border-border">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="text-center mb-14">
            <p className="label-eyebrow-secondary mb-3">Values</p>
            <h2 className="text-[40px] font-bold tracking-tight mb-3">
              What we believe.
            </h2>
            <p className="text-subtle max-w-[600px] mx-auto text-[15px]">
              The principles that guide how we build, hire, and partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              const isAmber = i === 1;
              return (
                <div key={value.title} className="card p-7">
                  <div
                    className={`w-11 h-11 rounded-lg flex items-center justify-center mb-5 ${
                      isAmber
                        ? "bg-secondary-soft text-secondary"
                        : "bg-accent-soft text-accent"
                    }`}
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-[18px] font-semibold tracking-tight mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[14px] text-subtle leading-relaxed">
                    {value.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 9: Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#0F172A]">
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgb(255 255 255) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-accent/20 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-secondary/15 blur-[160px] rounded-full pointer-events-none" />

        <div className="relative max-w-[900px] mx-auto px-8 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-7">
            <Sparkles size={12} className="text-secondary" />
            <span className="text-[12px] font-medium text-white/90 uppercase tracking-[0.08em]">
              Join us
            </span>
          </div>
          <h2 className="text-[44px] font-bold tracking-tight text-white leading-[1.05] mb-5">
            Want to work with us?
          </h2>
          <p className="text-[17px] text-white/70 max-w-[560px] mx-auto leading-relaxed mb-10">
            Whether you&apos;re an artist, label, partner, or potential teammate —
            we&apos;d love to talk.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 bg-white text-foreground rounded-lg px-7 py-3 text-[15px] font-medium hover:bg-white/90 transition-colors shadow-lg shadow-black/20"
            >
              View open roles
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-white/20 text-white rounded-lg px-7 py-3 text-[15px] font-medium hover:bg-white/5 transition-colors"
            >
              Contact us
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 pt-10 border-t border-white/10">
            <div className="flex items-center gap-2 text-white/60">
              <Building2 size={14} className="text-secondary" />
              <span className="text-[12px]">Sydney HQ</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <Globe2 size={14} className="text-secondary" />
              <span className="text-[12px]">8 offices · 7 countries</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <Users size={14} className="text-secondary" />
              <span className="text-[12px]">850+ teammates</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <TrendingUp size={14} className="text-secondary" />
              <span className="text-[12px]">84 markets served</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <Award size={14} className="text-secondary" />
              <span className="text-[12px]">Backed by top-tier VCs</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
