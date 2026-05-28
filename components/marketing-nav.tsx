"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { LanguageSwitcher } from "./language-switcher";

const businessSolutions = [
  { label: "Digital Distribution", desc: "Global delivery to 150+ DSPs and Christian channels", href: "/#delivery" },
  { label: "Promotion & Marketing", desc: "Playlist pitching, church outreach, ads", href: "/#promotion" },
  { label: "Royalties & Accounting", desc: "Statements, splits, multi-currency payouts", href: "/royalties" },
  { label: "Full Suite Analytics", desc: "Business intelligence and Church Adoption Score", href: "/analytics" },
  { label: "Church Network", desc: "CCLI, worship leaders, Sunday setlists", href: "/#church-network" },
  { label: "Publishing Partnerships", desc: "We partner with publishers and aggregate PROs", href: "/#publishing" },
];

const whoWeAre = [
  { label: "About Selah", desc: "Sydney HQ and 8 Asia-Pacific offices", href: "/about" },
  { label: "Customers", desc: "Case studies from Christian artists and ministries", href: "/customers" },
  { label: "Partners", desc: "Our DSP, Christian channel, and rights ecosystem", href: "/partners" },
  { label: "Blog", desc: "Industry insights and product stories", href: "/blog" },
  { label: "Press", desc: "Announcements and media resources", href: "/press" },
  { label: "Careers", desc: "Open roles across 8 offices", href: "/careers" },
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
        <div className="absolute top-full left-0 mt-1 w-[340px] bg-white border border-border rounded-lg shadow-xl shadow-foreground/5 py-2 z-50">
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
      <div className="flex items-center gap-8">
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
          <Dropdown label="Business Solutions" items={businessSolutions} />
          <Dropdown label="Who We Are" items={whoWeAre} />
          <Link
            href="/blog"
            className={`px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors ${
              pathname.startsWith("/blog") ? "text-accent bg-accent-soft" : "text-subtle hover:text-foreground hover:bg-surface"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors ${
              pathname.startsWith("/contact") ? "text-accent bg-accent-soft" : "text-subtle hover:text-foreground hover:bg-surface"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <LanguageSwitcher />
        <Link href="/overview" className="text-[13px] font-medium text-subtle hover:text-foreground px-2">
          Login
        </Link>
        <Link
          href="/overview"
          className="btn-primary flex items-center gap-2 !py-2 !px-4 text-[13px]"
        >
          Join
          <ArrowRight size={13} />
        </Link>
      </div>
    </nav>
  );
}
