"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const productLinks = [
  { label: "Distribution", desc: "Global delivery to every DSP", href: "/#workflow" },
  { label: "Rights & Splits", desc: "Master, publishing, neighboring", href: "/rights" },
  { label: "Royalty Accounting", desc: "Statements and payouts", href: "/royalties" },
  { label: "Campaign Management", desc: "Playlist pitching, church outreach", href: "/campaigns" },
  { label: "YouTube Monetization", desc: "Content ID and channel services", href: "/youtube" },
  { label: "Publishing Administration", desc: "PRO and mechanical licensing", href: "/publishing" },
];

const companyLinks = [
  { label: "About", desc: "Mission, leadership, global offices", href: "/about" },
  { label: "Partners", desc: "Ecosystem and integration partners", href: "/partners" },
  { label: "Customers", desc: "Case studies and testimonials", href: "/customers" },
  { label: "Press", desc: "News, announcements, brand assets", href: "/press" },
  { label: "Careers", desc: "Join the team", href: "/careers" },
];

const resourceLinks = [
  { label: "Documentation", href: "/docs" },
  { label: "Pricing", href: "/pricing" },
  { label: "Changelog", href: "/changelog" },
];

function Dropdown({ label, items }: { label: string; items: { label: string; desc?: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 px-3 py-1.5 rounded-md text-[13px] font-medium text-subtle hover:text-foreground hover:bg-surface transition-colors"
      >
        {label}
        <ChevronDown size={12} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-[320px] bg-white border border-border rounded-lg shadow-xl shadow-foreground/5 py-2 z-50">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 hover:bg-surface transition-colors group"
            >
              <p className="text-[13px] font-semibold text-foreground group-hover:text-accent transition-colors">
                {item.label}
              </p>
              {item.desc && <p className="text-[12px] text-muted mt-0.5">{item.desc}</p>}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function MarketingNav() {
  const pathname = usePathname();

  return (
    <nav className="h-[64px] border-b border-border flex items-center justify-between px-8 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
      <div className="flex items-center gap-10">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent-hover rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-white text-sm font-bold">S</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[16px] font-semibold tracking-tight leading-none">Selah</span>
            <span className="text-[10px] text-muted leading-none mt-0.5">by Christian Music Group</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          <Dropdown label="Product" items={productLinks} />
          <Dropdown label="Company" items={companyLinks} />
          {resourceLinks.map((l) => {
            const active = pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors ${
                  active ? "text-accent bg-accent-soft" : "text-subtle hover:text-foreground hover:bg-surface"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Link href="/overview" className="text-[13px] font-medium text-subtle hover:text-foreground">
          Sign in
        </Link>
        <Link
          href="/overview"
          className="btn-primary flex items-center gap-2 !py-2 !px-4 text-[13px]"
        >
          Enter Demo
          <ArrowRight size={13} />
        </Link>
      </div>
    </nav>
  );
}
