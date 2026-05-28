import Link from "next/link";
import { Twitter, Linkedin, Instagram, Youtube, Github } from "lucide-react";

const product = [
  { label: "Distribution", href: "/overview" },
  { label: "Rights & Splits", href: "/rights" },
  { label: "Royalty Accounting", href: "/royalties" },
  { label: "Campaign Management", href: "/campaigns" },
  { label: "YouTube Monetization", href: "/youtube" },
  { label: "Publishing Administration", href: "/publishing" },
  { label: "Label Services", href: "/label-services" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Customers", href: "/customers" },
  { label: "Partners", href: "/partners" },
  { label: "Press", href: "/press" },
  { label: "Careers", href: "/careers" },
];

const resources = [
  { label: "Documentation", href: "/docs" },
  { label: "API Reference", href: "/docs" },
  { label: "Changelog", href: "/changelog" },
  { label: "Service Status", href: "/changelog" },
  { label: "Brand Assets", href: "/press" },
];

const legal = [
  { label: "Privacy Policy", href: "/about" },
  { label: "Terms of Service", href: "/about" },
  { label: "Cookie Policy", href: "/about" },
  { label: "Acceptable Use", href: "/about" },
  { label: "DMCA", href: "/about" },
];

const offices = [
  { city: "Sydney", country: "Australia", label: "Global HQ", primary: true },
  { city: "Singapore", country: "Singapore" },
  { city: "Tokyo", country: "Japan" },
  { city: "Seoul", country: "South Korea" },
  { city: "Hong Kong", country: "Hong Kong SAR" },
  { city: "Manila", country: "Philippines" },
  { city: "Jakarta", country: "Indonesia" },
  { city: "Mumbai", country: "India" },
];

const socials = [
  { icon: Twitter, href: "https://twitter.com", label: "X (Twitter)" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-[1240px] mx-auto px-8 pt-16 pb-10">
        {/* Top: Brand + Link columns */}
        <div className="grid grid-cols-12 gap-8 pb-12 border-b border-border">
          <div className="col-span-12 md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent-hover rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white text-sm font-bold">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-semibold tracking-tight leading-none">Selah</span>
                <span className="text-[10px] text-muted leading-none mt-0.5">by Christian Music Group</span>
              </div>
            </div>
            <p className="text-[13px] text-subtle leading-relaxed mb-5 max-w-[300px]">
              The distribution and label-services infrastructure for the Christian music economy. Sydney-headquartered, operating across eight markets.
            </p>
            <div className="flex items-center gap-1.5 mb-6">
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
          </div>

          <div className="col-span-6 md:col-span-2">
            <h4 className="text-[12px] font-semibold uppercase tracking-wider text-foreground mb-4">Product</h4>
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
            <h4 className="text-[12px] font-semibold uppercase tracking-wider text-foreground mb-4">Company</h4>
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
            <h4 className="text-[12px] font-semibold uppercase tracking-wider text-foreground mb-4">Resources</h4>
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
            <h4 className="text-[12px] font-semibold uppercase tracking-wider text-foreground mb-4">Legal</h4>
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
                {o.label && (
                  <span className="inline-block mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-secondary bg-secondary-soft px-1.5 py-0.5 rounded">
                    {o.label}
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="text-[12px] text-muted mt-6 max-w-[600px] leading-relaxed">
            Christian Music Group, Level 1, 60 Martin Place, Sydney, NSW, 2000, Australia.
            Regional offices across South-East Asia, North Asia, and South Asia.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-[12px] text-muted">
            © 2026 Christian Music Group Distribution, Inc. ABN 12 345 678 901. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-muted inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-positive" />
              All systems operational
            </span>
            <span className="text-[11px] text-muted">v1.4.2</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
