"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpDown, ChevronDown } from "lucide-react";
import { Sparkline } from "./sparkline";
import { cn, formatCompact } from "@/lib/utils";
import { NARRATIVES, type Account, type AccountCategory } from "@/lib/mock";

const TABS: { id: AccountCategory | "all"; label: string }[] = [
  { id: "all",        label: "All" },
  { id: "researcher", label: "Researchers" },
  { id: "founder",    label: "Founders" },
  { id: "developer",  label: "Developers" },
  { id: "trader",     label: "Traders" },
  { id: "media",      label: "Media" },
  { id: "meme",       label: "Meme" },
];

type Sort =
  | "signal" | "delta" | "velocity"
  | "growth7d" | "followers" | "engagement" | "reach";

const RANGES = ["24H", "7D", "30D", "ALL"] as const;

const narrativeMeta = (id: string) => {
  const n = NARRATIVES.find((x) => x.id === id);
  return { label: n?.label ?? id, color: n?.color ?? "#22e6ff" };
};

export function LeaderboardTable({ accounts }: { accounts: Account[] }) {
  const [tab, setTab] = useState<AccountCategory | "all">("all");
  const [range, setRange] = useState<(typeof RANGES)[number]>("24H");
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
    <div className="glass rounded-lg overflow-hidden animate-fade-in">
      <header className="flex flex-wrap items-center gap-3 px-4 py-3 border-b hairline">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-thin">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "text-[11.5px] font-mono px-2.5 py-1 rounded transition-colors whitespace-nowrap",
                tab === t.id
                  ? "bg-violet-neon/10 text-violet-neon border border-violet-neon/30"
                  : "border border-transparent text-ink-400 hover:text-white",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-1">
          {RANGES.map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={cn(
                "text-[10.5px] font-mono px-2 py-1 rounded border",
                range === r
                  ? "border-cyan-neon/40 bg-cyan-neon/10 text-cyan-neon"
                  : "hairline text-ink-400 hover:text-white hover:border-white/10",
              )}
            >
              {r}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-[40px_minmax(220px,1.6fr)_minmax(150px,1fr)_90px_90px_90px_100px_100px_60px] gap-x-3 px-4 py-2 border-b hairline label-eyebrow">
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

      <div className="divide-y hairline">
        {rows.map((a, i) => {
          const n = narrativeMeta(a.narrative);
          const positive = a.delta >= 0;
          return (
            <Link
              key={a.handle}
              href={`/accounts/${a.handle.replace(/^@/, "")}`}
              className="grid grid-cols-[40px_minmax(220px,1.6fr)_minmax(150px,1fr)_90px_90px_90px_100px_100px_60px] gap-x-3 px-4 py-2.5 items-center hover:bg-white/[0.02] transition-colors"
            >
              <span className="text-[10.5px] font-mono text-ink-400">
                {(i + 1).toString().padStart(2, "0")}
              </span>
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="size-7 shrink-0 rounded-full bg-gradient-to-br from-ink-500 to-ink-700 grid place-items-center text-[10px] font-mono text-ink-400 border hairline">
                  {a.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </div>
                <div className="min-w-0">
                  <div className="text-[12.5px] font-medium text-white truncate">{a.name}</div>
                  <div className="text-[10.5px] font-mono text-ink-400 truncate">{a.handle}</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 min-w-0">
                <span
                  className="size-1.5 rounded-sm shrink-0"
                  style={{ background: n.color, boxShadow: `0 0 6px ${n.color}99` }}
                />
                <span className="text-[11.5px] text-white truncate">{n.label}</span>
              </div>
              <span className="text-[12.5px] font-mono font-semibold text-white">{a.signal.toFixed(1)}</span>
              <span className={cn("text-[12px] font-mono", positive ? "text-emerald-neon" : "text-rose-neon")}>
                {positive ? "▲" : "▼"} {Math.abs(a.delta).toFixed(1)}
              </span>
              <div className="flex items-center gap-2">
                <div className="h-[3px] flex-1 max-w-[44px] bg-white/[0.04] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${a.velocity}%`,
                      background: `linear-gradient(90deg, ${n.color}55, ${n.color})`,
                      boxShadow: `0 0 6px ${n.color}`,
                    }}
                  />
                </div>
                <span className="text-[10.5px] font-mono text-ink-400">{a.velocity}</span>
              </div>
              <span className="text-[11.5px] font-mono text-white">{formatCompact(a.followers)}</span>
              <span className="text-[11.5px] font-mono text-white">{formatCompact(a.engagement)}</span>
              <div className="flex justify-end">
                <Sparkline
                  data={a.sparkline}
                  color={positive ? "#34f5b1" : "#fb7185"}
                  width={52}
                  height={22}
                  filled={false}
                />
              </div>
            </Link>
          );
        })}
      </div>

      <footer className="px-4 py-2.5 border-t hairline flex items-center justify-between text-[10.5px] font-mono text-ink-400">
        <span>{rows.length} accounts</span>
        <span>RANGE · {range}</span>
        <span className="flex items-center gap-1">
          NEXT RANK SNAPSHOT · 04:12
          <ChevronDown className="size-3" />
        </span>
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
        "flex items-center gap-1 hover:text-white transition-colors",
        active && "text-cyan-neon",
      )}
    >
      <span>{label}</span>
      <ArrowUpDown className={cn("size-2.5", active ? "opacity-100" : "opacity-40")} />
      {active && <span className="text-[8px]">{dir === "desc" ? "↓" : "↑"}</span>}
    </button>
  );
}
