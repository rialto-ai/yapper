"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpDown } from "lucide-react";
import { Sparkline } from "./sparkline";
import { Avatar } from "./trending-accounts";
import { cn, formatCompact } from "@/lib/utils";
import { NARRATIVES, type Account, type AccountCategory } from "@/lib/mock";

const TABS: { id: AccountCategory | "all"; label: string }[] = [
  { id: "all",        label: "All" },
  { id: "researcher", label: "Researchers" },
  { id: "founder",    label: "Founders" },
  { id: "developer",  label: "Developers" },
  { id: "trader",     label: "Traders" },
  { id: "media",      label: "Media" },
  { id: "meme",       label: "Memes" },
];

type Sort =
  | "signal" | "delta" | "velocity"
  | "growth7d" | "followers" | "engagement" | "reach";

const RANGES = ["24h", "7d", "30d", "All"] as const;

const narrativeMeta = (id: string) => {
  const n = NARRATIVES.find((x) => x.id === id);
  return { label: n?.label ?? id, color: n?.color ?? "rgb(var(--accent))" };
};

export function LeaderboardTable({ accounts }: { accounts: Account[] }) {
  const [tab, setTab] = useState<AccountCategory | "all">("all");
  const [range, setRange] = useState<(typeof RANGES)[number]>("24h");
  const [sort, setSort] = useState<Sort>("signal");
  const [dir, setDir] = useState<"asc" | "desc">("desc");

  const rows = useMemo(() => {
    let r = accounts;
    if (tab !== "all") r = r.filter((a) => a.category === tab);
    const v = (a: Account): number => {
      switch (sort) {
        case "delta":      return a.delta;
        case "velocity":   return a.velocity;
        case "growth7d":   return a.growth7d;
        case "followers":  return a.followers;
        case "engagement": return a.engagement;
        case "reach":      return a.reachEfficiency;
        default:           return a.signal;
      }
    };
    return [...r].sort((a, b) => (dir === "desc" ? v(b) - v(a) : v(a) - v(b)));
  }, [accounts, tab, sort, dir]);

  const flipSort = (s: Sort) => {
    if (sort === s) setDir(dir === "desc" ? "asc" : "desc");
    else { setSort(s); setDir("desc"); }
  };

  return (
    <div className="card overflow-hidden animate-fade-in">
      <header className="flex flex-wrap items-center gap-3 px-5 py-4 border-b border-border">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-thin">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "text-[12.5px] font-medium px-3 py-1.5 rounded-md transition-colors whitespace-nowrap",
                tab === t.id
                  ? "bg-accent-soft text-accent"
                  : "text-muted hover:text-foreground hover:bg-surface",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-1 p-0.5 rounded-md bg-surface border border-border">
          {RANGES.map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={cn(
                "text-[11.5px] font-medium px-2.5 py-1 rounded transition-colors",
                range === r
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted hover:text-foreground",
              )}
            >
              {r}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-[44px_minmax(220px,1.6fr)_minmax(150px,1fr)_90px_90px_100px_100px_100px_70px] gap-x-4 px-5 py-2.5 border-b border-border text-[11px] font-medium text-muted uppercase tracking-wider">
        <span>#</span>
        <span>Account</span>
        <span>Narrative</span>
        <SortHeader label="Signal"     active={sort === "signal"}    dir={dir} onClick={() => flipSort("signal")} />
        <SortHeader label="24h Δ"      active={sort === "delta"}     dir={dir} onClick={() => flipSort("delta")} />
        <SortHeader label="Velocity"   active={sort === "velocity"}  dir={dir} onClick={() => flipSort("velocity")} />
        <SortHeader label="Followers"  active={sort === "followers"} dir={dir} onClick={() => flipSort("followers")} />
        <SortHeader label="Engagement" active={sort === "engagement"}dir={dir} onClick={() => flipSort("engagement")} />
        <span className="text-right">Trend</span>
      </div>

      <div className="divide-y divide-border">
        {rows.map((a, i) => {
          const n = narrativeMeta(a.narrative);
          const positive = a.delta >= 0;
          return (
            <Link
              key={a.handle}
              href={`/app/accounts/${a.handle.replace(/^@/, "")}`}
              className="grid grid-cols-[44px_minmax(220px,1.6fr)_minmax(150px,1fr)_90px_90px_100px_100px_100px_70px] gap-x-4 px-5 py-3 items-center hover:bg-surface transition-colors"
            >
              <span className="text-[11.5px] font-mono text-subtle">
                {(i + 1).toString().padStart(2, "0")}
              </span>
              <div className="flex items-center gap-2.5 min-w-0">
                <Avatar name={a.name} />
                <div className="min-w-0">
                  <div className="text-[13px] font-medium text-foreground truncate">{a.name}</div>
                  <div className="text-[11.5px] text-subtle truncate">{a.handle}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 min-w-0">
                <span className="size-2 rounded-full shrink-0" style={{ background: n.color }} />
                <span className="text-[12.5px] text-foreground truncate">{n.label}</span>
              </div>
              <span className="text-[13.5px] font-mono font-semibold text-foreground">{a.signal.toFixed(1)}</span>
              <span className={cn("text-[12.5px] font-medium", positive ? "text-positive" : "text-negative")}>
                {positive ? "↑" : "↓"} {Math.abs(a.delta).toFixed(1)}
              </span>
              <div className="flex items-center gap-2">
                <div className="h-1 flex-1 max-w-[44px] bg-surface-2 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${a.velocity}%`, background: n.color }}
                  />
                </div>
                <span className="text-[11px] font-mono text-muted">{a.velocity}</span>
              </div>
              <span className="text-[12.5px] font-mono text-foreground">{formatCompact(a.followers)}</span>
              <span className="text-[12.5px] font-mono text-foreground">{formatCompact(a.engagement)}</span>
              <div className="flex justify-end">
                <Sparkline
                  data={a.sparkline}
                  color={positive ? "rgb(var(--positive))" : "rgb(var(--negative))"}
                  width={52}
                  height={22}
                  filled={false}
                />
              </div>
            </Link>
          );
        })}
      </div>

      <footer className="px-5 py-3 border-t border-border flex items-center justify-between text-[12px] text-muted">
        <span>{rows.length} accounts</span>
        <span>Range · {range}</span>
        <span>Next snapshot in 04:12</span>
      </footer>
    </div>
  );
}

function SortHeader({
  label, active, dir, onClick,
}: { label: string; active: boolean; dir: "asc" | "desc"; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-1 hover:text-foreground transition-colors uppercase tracking-wider",
        active && "text-accent",
      )}
    >
      <span>{label}</span>
      <ArrowUpDown className={cn("size-2.5", active ? "opacity-100" : "opacity-40")} />
    </button>
  );
}
