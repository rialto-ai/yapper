"use client";

import { useState } from "react";
import {
  Home,
  Search as SearchIcon,
  Music4,
  Mic,
  BookOpen,
  ScrollText,
  Users,
  CalendarHeart,
  Heart,
  HandHeart,
  Library as LibraryIcon,
  ShieldCheck,
  X,
} from "lucide-react";
import { useDemo, type DemoTab } from "@/lib/demo/store";
import { Logo } from "@/components/wordmark";
import { cn } from "@/lib/utils";

export const TABS: { tab: DemoTab; label: string; icon: typeof Home }[] = [
  { tab: "home", label: "Home", icon: Home },
  { tab: "search", label: "Search", icon: SearchIcon },
  { tab: "music", label: "Music", icon: Music4 },
  { tab: "podcasts", label: "Podcasts", icon: Mic },
  { tab: "audiobooks", label: "Audiobooks", icon: BookOpen },
  { tab: "scripture", label: "Scripture", icon: ScrollText },
  { tab: "artists", label: "Artists", icon: Users },
  { tab: "events", label: "Events", icon: CalendarHeart },
  { tab: "family", label: "Family", icon: Heart },
  { tab: "support", label: "Support", icon: HandHeart },
  { tab: "library", label: "Library", icon: LibraryIcon },
  { tab: "integrity", label: "Trust & Disclosure", icon: ShieldCheck },
];

const BOTTOM_TABS: DemoTab[] = ["home", "search", "library", "events", "support"];

export function DemoBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="relative bg-accent px-4 py-2 text-center text-accent-foreground">
      <p className="mx-auto max-w-4xl pr-6 text-[12.5px] leading-snug">
        <span className="font-semibold">Demo Preview</span> — Rejoice is launching
        Q4 2026. Content, pages, recommendations, and playback are sample
        experiences for demonstration only.
      </p>
      <button
        onClick={() => setOpen(false)}
        aria-label="Dismiss demo notice"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-accent-foreground/80 hover:text-accent-foreground"
      >
        <X size={15} />
      </button>
    </div>
  );
}

export function DemoSidebar() {
  const { tab, setTab } = useDemo();
  return (
    <aside className="hidden w-[232px] shrink-0 flex-col border-r border-border bg-card lg:flex">
      <a href="/" className="flex items-center gap-2.5 px-5 py-4">
        <Logo />
        <span className="text-[17px] font-semibold tracking-tightest">Rejoice</span>
        <span className="rounded-full bg-surface px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted">
          Demo
        </span>
      </a>
      <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 py-2">
        {TABS.map(({ tab: t, label, icon: Icon }) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            aria-current={tab === t ? "page" : undefined}
            className={cn(
              "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-[14px] font-medium transition-colors",
              tab === t
                ? "bg-surface text-foreground"
                : "text-subtle hover:bg-surface/60 hover:text-foreground"
            )}
          >
            <Icon size={17} strokeWidth={1.8} className={tab === t ? "text-accent" : ""} />
            {label}
          </button>
        ))}
      </nav>
      <div className="border-t border-border p-3">
        <a
          href="/"
          className="flex items-center justify-center rounded-lg border border-border-strong px-3 py-2 text-[13px] font-medium text-subtle hover:bg-surface"
        >
          Exit demo
        </a>
      </div>
    </aside>
  );
}

/** Mobile horizontally-scrollable category chips for the less-common tabs. */
export function MobileTabStrip() {
  const { tab, setTab } = useDemo();
  const strip = TABS.filter(
    (t) => !["home", "search", "library", "events"].includes(t.tab)
  );
  return (
    <div className="flex gap-2 overflow-x-auto px-4 py-2.5 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {strip.map(({ tab: t, label }) => (
        <button
          key={t}
          onClick={() => setTab(t)}
          className={cn(
            "whitespace-nowrap rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors",
            tab === t
              ? "border-accent bg-accent text-accent-foreground"
              : "border-border-strong bg-card text-subtle"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export function DemoBottomNav() {
  const { tab, setTab } = useDemo();
  return (
    <nav className="flex items-center justify-around border-t border-border bg-card lg:hidden">
      {BOTTOM_TABS.map((t) => {
        const meta = TABS.find((x) => x.tab === t)!;
        const Icon = meta.icon;
        const active = tab === t;
        return (
          <button
            key={t}
            onClick={() => setTab(t)}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex flex-1 flex-col items-center gap-0.5 py-2.5 text-[10.5px] font-medium transition-colors",
              active ? "text-accent" : "text-muted"
            )}
          >
            <Icon size={19} strokeWidth={active ? 2.2 : 1.8} />
            {meta.label}
          </button>
        );
      })}
    </nav>
  );
}

export function DemoTopBar() {
  const { query, search, tab } = useDemo();
  const [local, setLocal] = useState("");
  const value = tab === "search" ? query : local;

  return (
    <div className="flex items-center gap-3 border-b border-border bg-background/90 px-4 py-3 backdrop-blur sm:px-6">
      <a href="/" className="flex items-center gap-2 lg:hidden">
        <Logo />
      </a>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          search(value);
        }}
        className="relative flex-1"
      >
        <SearchIcon
          size={16}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
        />
        <input
          type="search"
          value={value}
          onChange={(e) => {
            setLocal(e.target.value);
            search(e.target.value);
          }}
          placeholder="Search songs, artists, Scripture, themes…"
          aria-label="Search the demo"
          className="h-10 w-full rounded-full border border-border bg-card pl-9 pr-4 text-[14px] placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30"
        />
      </form>
      <a
        href="/#waitlist"
        className="hidden shrink-0 rounded-full bg-accent px-4 py-2 text-[13px] font-medium text-accent-foreground hover:bg-accent-hover sm:inline-block"
      >
        Join the Waitlist
      </a>
    </div>
  );
}
