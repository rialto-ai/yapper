"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Command } from "cmdk";
import {
  Bell,
  Bookmark,
  GitBranch,
  LayoutDashboard,
  Moon,
  Network,
  Search,
  Settings,
  Sun,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";
import { ACCOUNTS, NARRATIVES } from "@/lib/mock";

const NAV = [
  { label: "Dashboard",     href: "/app",                 icon: LayoutDashboard },
  { label: "Leaderboards",  href: "/app/leaderboards",    icon: Trophy },
  { label: "Narratives",    href: "/app/narratives",      icon: Network },
  { label: "Trends",        href: "/app/trends",          icon: TrendingUp },
  { label: "Graph Explorer",href: "/app/narratives",      icon: GitBranch },
  { label: "Alerts",        href: "/app/alerts",          icon: Bell },
  { label: "Saved Lists",   href: "/app/saved",           icon: Bookmark },
  { label: "Settings",      href: "/app/settings",        icon: Settings },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    setQuery("");
    router.push(href);
  };

  const isDark = (resolvedTheme ?? theme) === "dark";

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command palette"
      className="fixed inset-0 z-50 flex items-start justify-center pt-[14vh] px-4"
      shouldFilter
    >
      <div
        className="absolute inset-0 bg-foreground/10 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div className="relative w-full max-w-[640px] card overflow-hidden shadow-lg">
        <div className="flex items-center gap-2.5 px-4 h-12 border-b border-border">
          <Search className="size-4 text-subtle" />
          <Command.Input
            value={query}
            onValueChange={setQuery}
            placeholder="Search accounts, narratives, commands…"
            className="flex-1 bg-transparent outline-none text-[14px] text-foreground placeholder:text-subtle"
            autoFocus
          />
          <span className="text-[10.5px] font-mono text-subtle border border-border rounded px-1.5 py-px">ESC</span>
        </div>

        <Command.List className="max-h-[420px] overflow-y-auto scrollbar-thin p-1.5">
          <Command.Empty className="px-3 py-6 text-center text-[13px] text-muted">
            Nothing matches “{query}”.
          </Command.Empty>

          <Command.Group heading="Navigate" className="px-1 [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[10.5px] [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-muted">
            {NAV.map((n) => (
              <Item key={n.label} icon={n.icon} onSelect={() => go(n.href)} kbd={`${n.href.split("/").slice(-1)[0]}`}>
                {n.label}
              </Item>
            ))}
          </Command.Group>

          <Command.Group heading="Accounts" className="px-1 [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[10.5px] [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-muted">
            {ACCOUNTS.slice(0, 12).map((a) => (
              <Item
                key={a.handle}
                onSelect={() => go(`/app/accounts/${a.handle.replace(/^@/, "")}`)}
                avatar={a.name}
              >
                <div className="flex-1 min-w-0">
                  <div className="text-foreground truncate">{a.name}</div>
                  <div className="text-[11.5px] text-subtle truncate">{a.handle}</div>
                </div>
                <span className="text-[11.5px] font-mono text-muted">{a.signal.toFixed(1)}</span>
              </Item>
            ))}
          </Command.Group>

          <Command.Group heading="Narratives" className="px-1 [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[10.5px] [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-muted">
            {NARRATIVES.map((n) => (
              <Item
                key={n.id}
                onSelect={() => go(`/app/narratives`)}
                dot={n.color}
              >
                {n.label}
                <span className="text-[11.5px] font-mono text-muted">{n.mentions24h.toLocaleString()}</span>
              </Item>
            ))}
          </Command.Group>

          <Command.Group heading="Theme" className="px-1 [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[10.5px] [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-muted">
            <Item
              icon={isDark ? Sun : Moon}
              onSelect={() => {
                setTheme(isDark ? "light" : "dark");
                setOpen(false);
              }}
            >
              Switch to {isDark ? "light" : "dark"} mode
            </Item>
          </Command.Group>
        </Command.List>

        <div className="flex items-center justify-between px-4 py-2 border-t border-border bg-surface text-[11px] text-muted">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Kbd>↑</Kbd><Kbd>↓</Kbd> navigate
            </span>
            <span className="flex items-center gap-1">
              <Kbd>↵</Kbd> select
            </span>
          </div>
          <span>Rialto Command</span>
        </div>
      </div>
    </Command.Dialog>
  );
}

function Item({
  children, icon: Icon, onSelect, kbd, avatar, dot,
}: {
  children: React.ReactNode;
  icon?: React.ElementType;
  onSelect: () => void;
  kbd?: string;
  avatar?: string;
  dot?: string;
}) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex items-center gap-2.5 px-3 py-2 rounded-md text-[13px] text-foreground cursor-pointer aria-selected:bg-accent-soft aria-selected:text-accent transition-colors"
    >
      {Icon  && <Icon className="size-4 text-subtle" />}
      {dot   && <span className="size-2 rounded-full" style={{ background: dot }} />}
      {avatar && (
        <div className="size-6 shrink-0 rounded-full bg-surface-2 grid place-items-center text-[10px] font-medium text-muted border border-border">
          {avatar.split(" ").map((w) => w[0]).slice(0, 2).join("")}
        </div>
      )}
      <div className="flex-1 flex items-center gap-2 min-w-0">{children}</div>
      {kbd && <span className="text-[10.5px] font-mono text-subtle">{kbd}</span>}
    </Command.Item>
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block min-w-[18px] text-center font-mono text-[10px] border border-border bg-card text-foreground px-1 py-px rounded">
      {children}
    </span>
  );
}
