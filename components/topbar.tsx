"use client";

import { Search, Filter, Download, RefreshCw } from "lucide-react";
import { TICKER } from "@/lib/mock";
import { cn } from "@/lib/utils";

export function TopBar() {
  return (
    <div className="border-b hairline bg-ink-950/60 backdrop-blur-md">
      <div className="flex items-center gap-3 px-6 py-3">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="label-eyebrow">Workspace / Venice</span>
            <span className="size-1 rounded-full bg-ink-500" />
            <span className="label-eyebrow text-cyan-neon/80">Ecosystem Overview</span>
          </div>
          <h1 className="text-[18px] font-semibold tracking-tight text-white mt-0.5">
            Ecosystem Overview
          </h1>
        </div>

        <div className="flex-1" />

        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md border hairline bg-ink-900/80 w-[320px]">
          <Search className="size-3.5 text-ink-400" />
          <input
            className="bg-transparent text-[12.5px] text-white placeholder:text-ink-400 outline-none flex-1"
            placeholder="Search accounts, narratives, posts…"
          />
          <span className="text-[10px] font-mono text-ink-400 border hairline px-1.5 rounded">⌘K</span>
        </div>

        <div className="flex items-center gap-1.5">
          <ToolBtn icon={Filter} label="Filter" />
          <ToolBtn icon={Download} label="Export" />
          <ToolBtn icon={RefreshCw} label="" />
          <div className="ml-2 flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-emerald-neon/[0.08] border border-emerald-neon/20">
            <span className="size-1.5 rounded-full bg-emerald-neon glow-dot text-emerald-neon animate-pulse" />
            <span className="text-[11px] font-mono text-emerald-neon tracking-wider">LIVE</span>
          </div>
        </div>
      </div>

      {/* Stat ticker rail */}
      <div className="relative overflow-hidden border-t hairline">
        <div className="flex w-max animate-ticker">
          {[...TICKER, ...TICKER].map((t, i) => (
            <div
              key={i}
              className="flex items-baseline gap-2 px-6 py-2 border-r hairline whitespace-nowrap"
            >
              <span className="label-eyebrow">{t.label}</span>
              <span className="text-[12.5px] font-mono font-medium text-white">{t.value}</span>
              {t.delta !== 0 && (
                <span
                  className={cn(
                    "text-[11px] font-mono",
                    t.delta > 0 ? "text-emerald-neon" : "text-rose-neon",
                  )}
                >
                  {t.delta > 0 ? "▲" : "▼"} {Math.abs(t.delta).toFixed(1)}%
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ToolBtn({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border hairline bg-ink-900/60 text-ink-400 hover:text-white hover:border-cyan-neon/30 transition-colors text-[12px]">
      <Icon className="size-3.5" />
      {label && <span>{label}</span>}
    </button>
  );
}
