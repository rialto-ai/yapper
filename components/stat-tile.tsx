import { cn } from "@/lib/utils";
import { Sparkline } from "./sparkline";

export function StatTile({
  label,
  value,
  delta,
  series,
  color = "#22e6ff",
  unit,
}: {
  label: string;
  value: string;
  delta?: number;
  series?: number[];
  color?: string;
  unit?: string;
}) {
  const positive = (delta ?? 0) >= 0;
  return (
    <div className="glass rounded-lg p-4 flex flex-col gap-2 relative overflow-hidden">
      <div
        className="absolute -inset-px rounded-lg pointer-events-none opacity-50"
        style={{
          background: `radial-gradient(ellipse 60% 80% at 100% 0%, ${color}22, transparent 70%)`,
        }}
      />
      <div className="flex items-center justify-between relative">
        <span className="label-eyebrow">{label}</span>
        {delta !== undefined && (
          <span
            className={cn(
              "text-[10.5px] font-mono px-1.5 py-0.5 rounded",
              positive ? "text-emerald-neon bg-emerald-neon/10" : "text-rose-neon bg-rose-neon/10",
            )}
          >
            {positive ? "▲" : "▼"} {Math.abs(delta).toFixed(1)}%
          </span>
        )}
      </div>
      <div className="flex items-baseline gap-1.5 relative">
        <span className="text-[24px] font-semibold text-white tracking-tight font-mono">
          {value}
        </span>
        {unit && <span className="text-[11px] text-ink-400 font-mono">{unit}</span>}
      </div>
      {series && (
        <div className="-mb-1 -mx-1 relative">
          <Sparkline data={series} color={color} height={32} width={220} />
        </div>
      )}
    </div>
  );
}
