import Link from "next/link";
import { TRENDING_ACCOUNTS, NARRATIVES } from "@/lib/mock";
import { Sparkline } from "./sparkline";
import { cn, formatCompact } from "@/lib/utils";

const narrativeLabel = (id: string) =>
  NARRATIVES.find((n) => n.id === id)?.label ?? id;

export function TrendingAccounts() {
  return (
    <div className="divide-y divide-border scrollbar-thin overflow-y-auto max-h-[440px]">
      {TRENDING_ACCOUNTS.map((a, i) => {
        const positive = a.delta >= 0;
        return (
          <Link
            key={a.handle}
            href={`/app/accounts/${a.handle.replace(/^@/, "")}`}
            className="group flex items-center gap-3 px-5 py-3 hover:bg-surface transition-colors"
          >
            <span className="text-[11px] font-mono text-subtle w-5 text-right">
              {(i + 1).toString().padStart(2, "0")}
            </span>
            <Avatar name={a.name} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[13px] font-medium text-foreground truncate group-hover:text-accent transition-colors">
                  {a.name}
                </span>
                <span className="text-[11.5px] text-subtle truncate">{a.handle}</span>
              </div>
              <div className="flex items-center gap-2 mt-0.5 text-[11px] text-muted">
                <span>{narrativeLabel(a.narrative)}</span>
                <span className="text-subtle">·</span>
                <span>{formatCompact(a.followers)} followers</span>
              </div>
            </div>
            <div className="hidden md:block">
              <Sparkline
                data={a.sparkline}
                color={positive ? "rgb(var(--positive))" : "rgb(var(--negative))"}
                width={64}
                height={22}
                filled={false}
              />
            </div>
            <div className="text-right shrink-0 w-[70px]">
              <div className="text-[14px] font-mono font-semibold text-foreground">
                {a.signal.toFixed(1)}
              </div>
              <div className={cn("text-[11px] font-medium", positive ? "text-positive" : "text-negative")}>
                {positive ? "↑" : "↓"} {Math.abs(a.delta).toFixed(1)}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export function Avatar({ name, size = 28 }: { name: string; size?: number }) {
  return (
    <div
      className="shrink-0 rounded-full bg-surface-2 grid place-items-center text-[10.5px] font-medium text-muted border border-border"
      style={{ width: size, height: size }}
    >
      {name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
    </div>
  );
}
