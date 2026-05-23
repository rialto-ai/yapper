import { cn } from "@/lib/utils";
import { Sparkline } from "./sparkline";

export function StatTile({
  label,
  value,
  delta,
  series,
  colorVar = "--accent",
  unit,
}: {
  label: string;
  value: string;
  delta?: number;
  series?: number[];
  colorVar?: string;
  unit?: string;
}) {
  const positive = (delta ?? 0) >= 0;
  return (
    <div className="card card-interactive p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-[12px] font-medium text-muted tracking-tight">{label}</span>
        {delta !== undefined && (
          <span
            className={cn(
              "text-[11.5px] font-medium px-1.5 py-0.5 rounded-md",
              positive ? "text-positive bg-positive/10" : "text-negative bg-negative/10",
            )}
          >
            {positive ? "↑" : "↓"} {Math.abs(delta).toFixed(1)}%
          </span>
        )}
      </div>
      <div className="flex items-baseline gap-1.5">
        <span className="text-[28px] font-semibold text-foreground tracking-tight leading-none">
          {value}
        </span>
        {unit && <span className="text-[12.5px] text-muted">{unit}</span>}
      </div>
      {series && (
        <div className="-mx-1 -mb-1">
          <Sparkline data={series} color={`rgb(var(${colorVar}))`} height={36} width={240} />
        </div>
      )}
    </div>
  );
}
