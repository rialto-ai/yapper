"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Mission", href: "#mission" },
  { label: "Research", href: "#research" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Global Network", href: "#network" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-[#E2E8F0]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-[7px] bg-gradient-to-br from-[#2563EB] to-[#6D28D9]">
            <span className="text-[13px] font-bold text-white">R</span>
          </span>
          <span className="text-[16px] font-semibold tracking-[-0.01em] text-[#0F172A]">
            Rejoice Foundation
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[14px] font-medium text-[#475569] transition-colors hover:text-[#0F172A]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#partner"
            className="rounded-[8px] bg-[#0F172A] px-4 py-2 text-[14px] font-medium text-white transition-colors hover:bg-[#1E293B]"
          >
            Partner With Us
          </a>
        </nav>

        <button
          className="lg:hidden text-[#0F172A]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#E2E8F0] bg-white lg:hidden">
          <nav className="mx-auto flex max-w-[1280px] flex-col gap-1 px-6 py-4">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-[15px] font-medium text-[#334155] hover:bg-[#F5F8FF]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#partner"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-[8px] bg-[#0F172A] px-4 py-2.5 text-center text-[15px] font-medium text-white"
            >
              Partner With Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
