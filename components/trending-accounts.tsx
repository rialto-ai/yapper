import { TRENDING_ACCOUNTS } from "@/lib/mock";
import { Sparkline } from "./sparkline";
import { cn, formatCompact } from "@/lib/utils";

export function TrendingAccounts() {
  return (
    <div className="divide-y hairline scrollbar-thin overflow-y-auto max-h-[420px]">
      {TRENDING_ACCOUNTS.map((a, i) => {
        const positive = a.delta >= 0;
        return (
          <div
            key={a.handle}
            className="group flex items-center gap-3 px-4 py-2.5 hover:bg-white/[0.02] transition-colors"
          >
            <span className="text-[10px] font-mono text-ink-400 w-5 text-right">
              {(i + 1).toString().padStart(2, "0")}
            </span>
            <div className="size-7 shrink-0 rounded-full bg-gradient-to-br from-ink-500 to-ink-700 grid place-items-center text-[10px] font-mono text-ink-400 border hairline">
              {a.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[12.5px] font-medium text-white truncate">
                  {a.name}
                </span>
                <span className="text-[11px] text-ink-400 truncate">{a.handle}</span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] font-mono px-1 py-px rounded bg-white/[0.04] text-ink-400">
                  {a.narrative}
                </span>
                <span className="text-[10px] font-mono text-ink-400">
                  {formatCompact(a.followers)} followers
                </span>
              </div>
            </div>
            <div className="hidden md:block opacity-80">
              <Sparkline
                data={a.sparkline}
                color={positive ? "#34f5b1" : "#fb7185"}
                width={64}
                height={22}
                filled={false}
              />
            </div>
            <div className="text-right shrink-0 w-[64px]">
              <div className="text-[13px] font-mono font-semibold text-white">
                {a.signal.toFixed(1)}
              </div>
              <div
                className={cn(
                  "text-[10.5px] font-mono",
                  positive ? "text-emerald-neon" : "text-rose-neon",
                )}
              >
                {positive ? "▲" : "▼"} {Math.abs(a.delta).toFixed(1)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
