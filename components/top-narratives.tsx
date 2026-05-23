import { NARRATIVES } from "@/lib/mock";
import { Sparkline } from "./sparkline";
import { cn, formatCompact } from "@/lib/utils";

export function TopNarratives() {
  return (
    <div className="divide-y hairline">
      {NARRATIVES.map((n) => {
        const positive = n.delta24h >= 0;
        return (
          <div
            key={n.id}
            className="group flex items-center gap-3 px-4 py-2.5 hover:bg-white/[0.02] transition-colors cursor-pointer"
          >
            <span
              className="size-2.5 rounded-sm shrink-0"
              style={{
                background: n.color,
                boxShadow: `0 0 10px ${n.color}88`,
              }}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[12.5px] font-medium text-white truncate">
                  {n.label}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <div className="h-[3px] flex-1 max-w-[120px] bg-white/[0.04] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${n.velocity}%`,
                      background: `linear-gradient(90deg, ${n.color}55, ${n.color})`,
                      boxShadow: `0 0 6px ${n.color}`,
                    }}
                  />
                </div>
                <span className="text-[10.5px] font-mono text-ink-400">
                  {n.velocity}
                </span>
              </div>
            </div>
            <div className="hidden md:block opacity-80">
              <Sparkline
                data={n.series.map((s) => s.v)}
                color={n.color}
                width={70}
                height={22}
                filled={false}
              />
            </div>
            <div className="text-right shrink-0">
              <div className="text-[12px] font-mono text-white">
                {formatCompact(n.mentions24h)}
              </div>
              <div
                className={cn(
                  "text-[10.5px] font-mono",
                  positive ? "text-emerald-neon" : "text-rose-neon",
                )}
              >
                {positive ? "▲" : "▼"} {Math.abs(n.delta24h).toFixed(1)}%
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
