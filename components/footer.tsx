"use client";

import Link from "next/link";
import { useState } from "react";
import { Twitter, Linkedin, Instagram, Youtube, Facebook, Send, Check } from "lucide-react";
import { LanguageSwitcher } from "./language-switcher";
import { LogoMark } from "./logo";

const businessSolutions = [
  { label: "Digital Distribution", href: "/overview" },
  { label: "Promotion & Marketing", href: "/campaigns" },
  { label: "Royalties & Accounting", href: "/royalties" },
  { label: "Full Suite Analytics", href: "/analytics" },
  { label: "Church Network", href: "/" },
  { label: "Publishing Partnerships", href: "/" },
  { label: "YouTube Monetization", href: "/youtube" },
];

const whoWeAre = [
  { label: "About Selah", href: "/about" },
  { label: "Customers", href: "/customers" },
  { label: "Partners", href: "/partners" },
  { label: "Press", href: "/press" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Distribution Partners", href: "/partners" },
];

const resources = [
  { label: "Documentation", href: "/docs" },
  { label: "FAQ", href: "/#faq" },
  { label: "Service Status", href: "/" },
  { label: "Brand Assets", href: "/press" },
  { label: "Changelog", href: "/changelog" },
  { label: "Feedback", href: "/feedback" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/privacy" },
  { label: "Acceptable Use", href: "/terms" },
  { label: "DMCA", href: "/terms" },
  { label: "Contact", href: "/contact" },
];

const offices = [
  { city: "Sydney", country: "Australia", primary: true },
  { city: "Singapore", country: "Singapore" },
  { city: "Tokyo", country: "Japan" },
  { city: "Seoul", country: "South Korea" },
  { city: "Hong Kong", country: "Hong Kong SAR" },
  { city: "Manila", country: "Philippines" },
  { city: "Jakarta", country: "Indonesia" },
  { city: "Mumbai", country: "India" },
];

const socials = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "X (Twitter)" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.includes("@")) setSubscribed(true);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <p className="text-[13px] font-semibold text-foreground mb-2">
        Subscribe to our newsletter
      </p>
      <p className="text-[12px] text-muted mb-3 leading-relaxed">
        Industry insights, product updates, and stories from the Christian music economy. No spam, ever.
      </p>
      {subscribed ? (
        <div className="flex items-center gap-2 px-3 py-2.5 rounded-md bg-positive-soft border border-positive/15 text-positive text-[13px] font-medium">
          <Check size={14} strokeWidth={2.5} />
          You&apos;re subscribed
        </div>
      ) : (
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@church.com"
            className="flex-1 h-[36px] px-3 rounded-md border border-border bg-white text-[13px] placeholder:text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all"
          />
          <button
            type="submit"
            className="btn-primary !py-2 !px-3 text-[13px] flex items-center gap-1.5 shrink-0"
          >
            <Send size={12} />
            Subscribe
          </button>
        </div>
      )}
    </form>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      {/* Newsletter strip */}
      <div className="border-b border-border bg-gradient-to-br from-accent-soft/40 via-white to-secondary-soft/30">
        <div className="max-w-[1240px] mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="label-eyebrow mb-2">Stay in the loop</p>
            <h3 className="text-[24px] font-bold tracking-tight mb-2">
              Built for Christian music. Updated weekly.
            </h3>
            <p className="text-[14px] text-subtle leading-relaxed">
              Get the latest from Selah&apos;s product, partner network, and church distribution insights.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-8 pt-16 pb-10">
        {/* Top: Brand + Link columns */}
        <div className="grid grid-cols-12 gap-8 pb-12 border-b border-border">
          <div className="col-span-12 md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <LogoMark size={32} />
              <div className="flex flex-col">
                <span className="text-[15px] font-semibold tracking-tight leading-none">Selah</span>
                <span className="text-[10px] text-muted leading-none mt-0.5">by Christian Music Group</span>
              </div>
            </div>
            <p className="text-[13px] text-subtle leading-relaxed mb-5 max-w-[300px]">
              Digital distribution, marketing, accounting, and analytics - purpose-built for Christian music. Sydney-headquartered, serving 84 markets globally.
            </p>
            <div className="flex items-center gap-1.5 mb-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md border border-border bg-white flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-colors"
                >
                  <s.icon size={14} strokeWidth={1.8} />
                </a>
              ))}
            </div>
            <LanguageSwitcher />
          </div>

          <div className="col-span-6 md:col-span-2">
            <h4 className="text-[12px] font-semibold uppercase tracking-wider text-foreground mb-4">
              Business Solutions
            </h4>
            <ul className="space-y-2.5">
              {businessSolutions.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[13px] text-subtle hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <h4 className="text-[12px] font-semibold uppercase tracking-wider text-foreground mb-4">
              Who We Are
            </h4>
            <ul className="space-y-2.5">
              {whoWeAre.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[13px] text-subtle hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <h4 className="text-[12px] font-semibold uppercase tracking-wider text-foreground mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {resources.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[13px] text-subtle hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <h4 className="text-[12px] font-semibold uppercase tracking-wider text-foreground mb-4">
              Legal & Help
            </h4>
            <ul className="space-y-2.5">
              {legal.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[13px] text-subtle hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Offices */}
        <div className="py-10 border-b border-border">
          <h4 className="text-[12px] font-semibold uppercase tracking-wider text-foreground mb-5">
            Global offices
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
            {offices.map((o) => (
              <div key={o.city}>
                <p className={`text-[13px] font-semibold ${o.primary ? "text-accent" : "text-foreground"}`}>
                  {o.city}
                </p>
                <p className="text-[11px] text-muted mt-0.5">{o.country}</p>
                {o.primary && (
                  <span className="inline-block mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-secondary bg-secondary-soft px-1.5 py-0.5 rounded">
                    HQ
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="text-[12px] text-muted mt-6 max-w-[640px] leading-relaxed">
            Global Headquarters: Christian Music Group, Level 1, 60 Martin Place, Sydney, NSW, 2000, Australia. Sydney sits in what early explorers and Christian tradition have called the Great Southland of the Holy Spirit.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-[12px] text-muted">
            © Copyright 2026 Christian Music Group Distribution, Inc. ABN 12 345 678 901. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-muted inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-positive" />
              All systems operational
            </span>
            <Link href="/changelog" className="text-[11px] text-muted hover:text-accent transition-colors">
              v1.4.2 · Changelog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
