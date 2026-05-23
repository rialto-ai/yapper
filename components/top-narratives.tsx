import { NARRATIVES } from "@/lib/mock";
import { Sparkline } from "./sparkline";
import { cn, formatCompact } from "@/lib/utils";

export function TopNarratives() {
  return (
    <div className="divide-y divide-border">
      {NARRATIVES.map((n) => {
        const positive = n.delta24h >= 0;
        return (
          <div
            key={n.id}
            className="group flex items-center gap-3 px-5 py-3 hover:bg-surface transition-colors cursor-pointer"
          >
            <span className="size-2 rounded-full shrink-0" style={{ background: n.color }} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-medium text-foreground truncate">{n.label}</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <div className="h-1 flex-1 max-w-[120px] bg-surface-2 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${n.velocity}%`, background: n.color }}
                  />
                </div>
                <span className="text-[11px] font-mono text-muted">{n.velocity}</span>
              </div>
            </div>
            <div className="hidden md:block opacity-90">
              <Sparkline
                data={n.series.map((s) => s.v)}
                color={n.color}
                width={64}
                height={22}
                filled={false}
              />
            </div>
            <div className="text-right shrink-0">
              <div className="text-[12.5px] font-mono text-foreground">{formatCompact(n.mentions24h)}</div>
              <div
                className={cn(
                  "text-[11px] font-medium",
                  positive ? "text-positive" : "text-negative",
                )}
              >
                {positive ? "↑" : "↓"} {Math.abs(n.delta24h).toFixed(1)}%
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
