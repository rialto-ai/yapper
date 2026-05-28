"use client";

import Link from "next/link";
import { useState } from "react";
import { Linkedin, Instagram, Youtube, Facebook, Send, Check } from "lucide-react";
import { LanguageSwitcher } from "./language-switcher";
import { LogoMark } from "./logo";

const product = [
  { label: "Selah Distribution", href: "/overview" },
  { label: "Selah Rights", href: "/rights" },
  { label: "Selah Worship", href: "/worship" },
  { label: "Selah Campaigns", href: "/campaigns" },
  { label: "Selah YouTube", href: "/youtube" },
  { label: "Selah Analytics", href: "/analytics" },
  { label: "Selah Enterprise", href: "/enterprise" },
  { label: "Selah Intelligence", href: "/ai-strategist" },
];

const company = [
  { label: "About Selah", href: "/about" },
  { label: "Customers", href: "/customers" },
  { label: "Partners", href: "/partners" },
  { label: "Press", href: "/press" },
  { label: "Contact", href: "/contact" },
];

const resources = [
  { label: "Documentation", href: "/docs" },
  { label: "FAQ", href: "/#faq" },
  { label: "Changelog", href: "/changelog" },
  { label: "Service Status", href: "/" },
  { label: "Feedback", href: "/feedback" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/privacy" },
  { label: "Acceptable Use", href: "/terms" },
  { label: "DMCA", href: "/terms" },
];

const offices = [
  { city: "Sydney", country: "Australia", primary: true },
  { city: "Singapore", country: "Singapore" },
  { city: "Kuala Lumpur", country: "Malaysia" },
  { city: "Bangkok", country: "Thailand" },
  { city: "Taipei", country: "Taiwan" },
  { city: "Seoul", country: "South Korea" },
  { city: "Manila", country: "Philippines" },
  { city: "Jakarta", country: "Indonesia" },
];

const socials = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
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
        Industry insights, product updates, and stories from the Christian music economy. No spam.
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
              Built for Christian music. Updated regularly.
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
            <p className="text-[13px] text-subtle leading-relaxed mb-5 max-w-[320px]">
              Selah is the music infrastructure platform for the future of Christian music, built by Christian Music Group. Distribution, rights, marketing, analytics, and worship-specific infrastructure.
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
              Product
            </h4>
            <ul className="space-y-2.5">
              {product.map((l) => (
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
              Company
            </h4>
            <ul className="space-y-2.5">
              {company.map((l) => (
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
              Legal
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

        {/* Soli Deo Gloria */}
        <div className="pt-6 mb-4 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            Soli Deo Gloria
          </p>
          <p className="text-[11px] text-muted mt-1 italic">
            To God alone be the glory
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
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
