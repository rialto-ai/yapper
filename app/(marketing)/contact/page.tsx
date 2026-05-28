"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Sparkles,
  Headphones,
  MessageCircle,
  MapPin,
  Mail,
  Phone,
  Building2,
  Globe2,
  Send,
  Check,
  ArrowRight,
  Bug,
  Heart,
  Megaphone,
  BookOpen,
} from "lucide-react";

const contactMethods = [
  {
    icon: Sparkles,
    color: "accent" as const,
    title: "Sales",
    body: "Talk to our distribution team about Label Services or Enterprise partnerships.",
    email: "sales@cmg.com",
  },
  {
    icon: Headphones,
    color: "secondary" as const,
    title: "Support",
    body: "Existing customers can reach the support team for help with releases, royalties, and accounts.",
    email: "support@cmg.com",
  },
  {
    icon: MessageCircle,
    color: "accent" as const,
    title: "Press",
    body: "Media inquiries, interviews, and press resources for journalists and publications.",
    email: "press@cmg.com",
  },
];

const inquiryTypes = [
  "General",
  "Sales (Label Services)",
  "Sales (Enterprise / Partner Portal)",
  "Support",
  "Partnerships",
  "Press / Media",
  "Legal",
  "Other",
];

const regions = [
  "Australia & NZ",
  "South-East Asia",
  "North Asia (Japan/Korea)",
  "Greater China",
  "South Asia",
  "Other",
];

const offices = [
  {
    city: "Sydney",
    country: "Australia",
    address: "Level 1, 60 Martin Place, Sydney NSW 2000",
    email: "sydney@cmg.com",
    phone: "+61 2 8XXX XXXX",
    primary: "Global HQ, engineering, executive",
    hq: true,
  },
  {
    city: "Singapore",
    country: "Singapore",
    address: "8 Marina View, Asia Square Tower 1, Singapore 018960",
    email: "singapore@cmg.com",
    phone: "+65 6XXX XXXX",
    primary: "South-East Asia, DSP partnerships",
  },
  {
    city: "Tokyo",
    country: "Japan",
    address: "Marunouchi Park Building, 2-6-1 Marunouchi, Chiyoda-ku, Tokyo 100-6917",
    email: "tokyo@cmg.com",
    phone: "+81 3 6XXX XXXX",
    primary: "Japan operations",
  },
  {
    city: "Seoul",
    country: "South Korea",
    address: "Gangnam Finance Center, 152 Teheran-ro, Gangnam-gu, Seoul",
    email: "seoul@cmg.com",
    phone: "+82 2 6XXX XXXX",
    primary: "Korea operations",
  },
  {
    city: "Hong Kong",
    country: "Hong Kong SAR",
    address: "Two IFC, 8 Finance Street, Central",
    email: "hongkong@cmg.com",
    phone: "+852 3XXX XXXX",
    primary: "Greater China",
  },
  {
    city: "Manila",
    country: "Philippines",
    address: "One Bonifacio High Street, 5th Avenue, BGC, Taguig 1634",
    email: "manila@cmg.com",
    phone: "+63 2 8XXX XXXX",
    primary: "Customer success, operations",
  },
  {
    city: "Jakarta",
    country: "Indonesia",
    address: "Pacific Place, SCBD Lot 3-5, Jakarta 12190",
    email: "jakarta@cmg.com",
    phone: "+62 21 5XXX XXXX",
    primary: "Indonesia",
  },
  {
    city: "Mumbai",
    country: "India",
    address: "One BKC, Bandra Kurla Complex, Mumbai 400051",
    email: "mumbai@cmg.com",
    phone: "+91 22 6XXX XXXX",
    primary: "South Asia",
  },
];

const quickLinks = [
  {
    href: "/docs",
    icon: BookOpen,
    title: "Customer support",
    desc: "Browse guides, troubleshooting, and how-to articles.",
    color: "accent" as const,
  },
  {
    href: "/partners",
    icon: Building2,
    title: "Partner with us",
    desc: "Labels, publishers, and ministries — explore partnership.",
    color: "secondary" as const,
  },
  {
    href: "/press",
    icon: Megaphone,
    title: "Press inquiries",
    desc: "Media kit, press releases, and interview requests.",
    color: "accent" as const,
  },
  {
    href: "/feedback",
    icon: Heart,
    title: "Send product feedback",
    desc: "Tell us what to build, fix, or improve next.",
    color: "secondary" as const,
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    inquiry: "General",
    region: "Australia & NZ",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
        <div className="absolute top-[10%] left-[10%] w-[420px] h-[420px] bg-secondary/15 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-[5%] right-[10%] w-[420px] h-[420px] bg-accent/15 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative max-w-[920px] mx-auto px-8 pt-24 pb-20 text-center">
          <p className="label-eyebrow mb-4">Contact us</p>
          <h1 className="text-[44px] md:text-[56px] font-bold tracking-tight leading-[1.05] mb-5">
            We&apos;d love to hear{" "}
            <span className="bg-gradient-to-r from-accent via-accent-hover to-secondary bg-clip-text text-transparent">
              from you.
            </span>
          </h1>
          <p className="text-[17px] text-subtle leading-relaxed max-w-[680px] mx-auto">
            Whether you&apos;re an artist getting started, a label exploring partnership, a ministry running services, or a publisher interested in our network — our team is here to help.
          </p>
        </div>
      </section>

      {/* CONTACT METHODS GRID */}
      <section className="pb-16 -mt-4">
        <div className="max-w-[1080px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactMethods.map((m) => (
              <div key={m.title} className="card p-6 card-interactive">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                    m.color === "secondary"
                      ? "bg-secondary-soft border border-secondary/15"
                      : "bg-accent-soft border border-accent/15"
                  }`}
                >
                  <m.icon
                    size={20}
                    strokeWidth={1.8}
                    className={m.color === "secondary" ? "text-secondary" : "text-accent"}
                  />
                </div>
                <h3 className="text-[16px] font-semibold mb-1.5">{m.title}</h3>
                <p className="text-[13px] text-subtle leading-relaxed mb-3">{m.body}</p>
                <a
                  href={`mailto:${m.email}`}
                  className={`inline-flex items-center gap-1.5 text-[13px] font-semibold ${
                    m.color === "secondary" ? "text-secondary" : "text-accent"
                  } hover:gap-2 transition-all`}
                >
                  {m.email}
                  <ArrowRight size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + OFFICE INFO */}
      <section className="pb-24">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* FORM */}
            <div className="lg:col-span-3">
              <div className="card p-8 md:p-10 shadow-xl shadow-accent/5">
                {submitted ? (
                  <div className="py-8 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-positive-soft mb-5">
                      <Check size={26} strokeWidth={2.5} className="text-positive" />
                    </div>
                    <h3 className="text-[22px] font-bold tracking-tight mb-2">
                      Thanks — we&apos;ll be in touch within 1 business day.
                    </h3>
                    <p className="text-[14px] text-subtle leading-relaxed max-w-[440px] mx-auto mb-6">
                      Your inquiry was routed to our{" "}
                      <span className="font-semibold text-foreground">{form.region}</span> team.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          name: "",
                          email: "",
                          company: "",
                          inquiry: "General",
                          region: "Australia & NZ",
                          message: "",
                        });
                      }}
                      className="btn-secondary text-[14px]"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-[22px] font-bold tracking-tight mb-1">How can we help?</h2>
                    <p className="text-[13px] text-subtle mb-7">
                      Tell us a little about you and we&apos;ll route your message to the right team.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[12px] font-semibold text-foreground mb-1.5">
                            Name
                          </label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Jane Smith"
                            className="w-full px-3.5 py-2.5 text-[14px] rounded-lg border border-border bg-white focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none transition-all placeholder:text-muted"
                          />
                        </div>
                        <div>
                          <label className="block text-[12px] font-semibold text-foreground mb-1.5">
                            Email
                          </label>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="you@example.com"
                            className="w-full px-3.5 py-2.5 text-[14px] rounded-lg border border-border bg-white focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none transition-all placeholder:text-muted"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[12px] font-semibold text-foreground mb-1.5">
                          Company / artist / ministry name
                        </label>
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="Grace Harbor Music"
                          className="w-full px-3.5 py-2.5 text-[14px] rounded-lg border border-border bg-white focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none transition-all placeholder:text-muted"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[12px] font-semibold text-foreground mb-1.5">
                            Type of inquiry
                          </label>
                          <select
                            value={form.inquiry}
                            onChange={(e) => setForm({ ...form, inquiry: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-[14px] rounded-lg border border-border bg-white focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none transition-all"
                          >
                            {inquiryTypes.map((t) => (
                              <option key={t}>{t}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-[12px] font-semibold text-foreground mb-1.5">
                            Region
                          </label>
                          <select
                            value={form.region}
                            onChange={(e) => setForm({ ...form, region: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-[14px] rounded-lg border border-border bg-white focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none transition-all"
                          >
                            {regions.map((r) => (
                              <option key={r}>{r}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-[12px] font-semibold text-foreground mb-1.5">
                          Message
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Tell us what you're working on and how we can help."
                          className="w-full px-3.5 py-2.5 text-[14px] rounded-lg border border-border bg-white focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none transition-all placeholder:text-muted resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn-primary w-full !py-3 text-[14px] flex items-center justify-center gap-2 shadow-md shadow-accent/20"
                      >
                        <Send size={14} />
                        Send message
                      </button>
                      <p className="text-[11px] text-muted text-center pt-1">
                        We typically respond within 1 business day.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* OFFICE INFO */}
            <div className="lg:col-span-2">
              <div className="card p-7 bg-gradient-to-br from-white via-white to-accent-soft/40 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 size={16} className="text-accent" strokeWidth={1.8} />
                  <p className="label-eyebrow !mb-0">Global headquarters</p>
                </div>
                <p className="text-[15px] font-semibold text-foreground leading-snug mb-2">
                  Christian Music Group Distribution, Inc.
                </p>
                <p className="text-[13px] text-subtle leading-relaxed mb-1">
                  Level 1, 60 Martin Place
                  <br />
                  Sydney, NSW, 2000
                  <br />
                  Australia
                </p>
                <p className="text-[12px] text-muted mb-5">ABN 12 345 678 901</p>

                <div className="space-y-2.5 text-[12.5px] text-subtle mb-5 pb-5 border-b border-border">
                  <div className="flex items-start gap-2.5">
                    <Phone size={13} className="text-accent mt-0.5 shrink-0" strokeWidth={1.8} />
                    <span>+61 2 8XXX XXXX</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Mail size={13} className="text-accent mt-0.5 shrink-0" strokeWidth={1.8} />
                    <a href="mailto:sydney@cmg.com" className="hover:text-accent transition-colors">
                      sydney@cmg.com
                    </a>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Globe2 size={13} className="text-accent mt-0.5 shrink-0" strokeWidth={1.8} />
                    <span>Mon–Fri, 9:00 AM – 6:00 PM AEST</span>
                  </div>
                </div>

                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted mb-3">
                  Regional offices
                </p>
                <ul className="space-y-2">
                  {offices.slice(1).map((o) => (
                    <li
                      key={o.city}
                      className="flex items-center justify-between text-[12px] py-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <MapPin size={11} className="text-secondary shrink-0" strokeWidth={1.8} />
                        <span className="font-semibold text-foreground">{o.city}</span>
                        <span className="text-muted">·</span>
                        <span className="text-subtle">{o.country}</span>
                      </div>
                      <span className="text-muted text-[11px]">{o.phone}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REGIONAL OFFICES */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="text-center mb-12">
            <p className="label-eyebrow-secondary mb-3">Our offices</p>
            <h2 className="text-[36px] font-bold tracking-tight mb-3">
              Local teams. Global coverage.
            </h2>
            <p className="text-subtle max-w-[620px] mx-auto text-[15px]">
              Sydney-headquartered, with regional teams across Asia-Pacific running local DSP relationships and church network operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {offices.map((o) => (
              <div
                key={o.city}
                className={`card p-6 card-interactive ${
                  o.hq ? "bg-gradient-to-br from-white via-white to-secondary-soft/40 border-secondary/30" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-[18px] font-semibold tracking-tight">{o.city}</h3>
                      {o.hq && (
                        <span className="text-[9px] font-bold uppercase tracking-wider bg-secondary text-white px-1.5 py-0.5 rounded">
                          HQ
                        </span>
                      )}
                    </div>
                    <p className="text-[12px] text-muted">{o.country}</p>
                  </div>
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      o.hq ? "bg-secondary-soft" : "bg-accent-soft"
                    }`}
                  >
                    <MapPin
                      size={14}
                      strokeWidth={1.8}
                      className={o.hq ? "text-secondary" : "text-accent"}
                    />
                  </div>
                </div>
                <p className="text-[12.5px] text-subtle leading-relaxed mb-4 min-h-[3.5em]">
                  {o.address}
                </p>
                <div className="space-y-1.5 mb-4 pb-4 border-b border-border">
                  <div className="flex items-center gap-2 text-[12px] text-subtle">
                    <Mail size={11} className="text-muted shrink-0" strokeWidth={1.8} />
                    <a href={`mailto:${o.email}`} className="hover:text-accent transition-colors">
                      {o.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-[12px] text-subtle">
                    <Phone size={11} className="text-muted shrink-0" strokeWidth={1.8} />
                    <span>{o.phone}</span>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted mb-1">
                    Primary office for
                  </p>
                  <p className="text-[12px] text-foreground">{o.primary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="py-24">
        <div className="max-w-[1080px] mx-auto px-8">
          <div className="text-center mb-12">
            <p className="label-eyebrow mb-3">Quick links</p>
            <h2 className="text-[32px] font-bold tracking-tight mb-3">
              Looking for something specific?
            </h2>
            <p className="text-subtle max-w-[520px] mx-auto text-[14px]">
              Jump straight to the team or resource you need.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((l) => (
              <Link key={l.href} href={l.href} className="card p-6 card-interactive group block">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                    l.color === "secondary"
                      ? "bg-secondary-soft border border-secondary/15"
                      : "bg-accent-soft border border-accent/15"
                  }`}
                >
                  <l.icon
                    size={18}
                    strokeWidth={1.8}
                    className={l.color === "secondary" ? "text-secondary" : "text-accent"}
                  />
                </div>
                <h3 className="text-[15px] font-semibold mb-1.5 group-hover:text-accent transition-colors">
                  {l.title}
                </h3>
                <p className="text-[12.5px] text-subtle leading-relaxed mb-3">{l.desc}</p>
                <span
                  className={`inline-flex items-center gap-1 text-[12px] font-semibold ${
                    l.color === "secondary" ? "text-secondary" : "text-accent"
                  } group-hover:gap-2 transition-all`}
                >
                  Open
                  <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
