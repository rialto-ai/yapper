"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Watch", href: "/watch" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold tracking-tight text-fg">
          Gospel in Sign
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-fg-secondary transition-colors hover:text-fg"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/watch" className="btn-accent px-4 py-2 text-sm">
            Start Watching
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-fg-secondary transition-colors hover:bg-surface hover:text-fg md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="border-t border-border bg-bg px-4 pb-4 pt-2 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-fg-secondary transition-colors hover:bg-surface hover:text-fg"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/watch"
            onClick={() => setMenuOpen(false)}
            className="btn-accent mt-2 w-full px-4 py-2 text-sm"
          >
            Start Watching
          </Link>
        </nav>
      )}
    </header>
  );
}
