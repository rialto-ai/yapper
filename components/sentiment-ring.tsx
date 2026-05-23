"use client";

import { SENTIMENT } from "@/lib/mock";

const COLORS: Record<string, string> = {
  bullish: "rgb(var(--positive))",
  technical: "rgb(var(--chart-2))",
  neutral: "rgb(var(--subtle))",
  bearish: "rgb(var(--negative))",
  speculative: "rgb(var(--accent))",
};

const LABELS: Record<string, string> = {
  bullish: "Bullish",
  technical: "Technical",
  neutral: "Neutral",
  bearish: "Bearish",
  speculative: "Speculative",
};

export function SentimentRing() {
  const entries = Object.entries(SENTIMENT) as [keyof typeof SENTIMENT, number][];
  const total = entries.reduce((s, [, v]) => s + v, 0);
  const r = 54;
  const C = 2 * Math.PI * r;
  let offset = 0;

  return (
    <div className="px-5 py-5 flex items-center gap-6">
      <div className="relative shrink-0">
        <svg width="140" height="140" viewBox="0 0 140 140" className="-rotate-90">
          <circle cx="70" cy="70" r={r} fill="none" stroke="rgb(var(--surface-2))" strokeWidth="10" />
          {entries.map(([k, v]) => {
            const frac = v / total;
            const len = C * frac;
            const dash = `${len} ${C - len}`;
            const dashOffset = -offset;
            offset += len;
            return (
              <circle
                key={k}
                cx="70" cy="70" r={r}
                fill="none"
                stroke={COLORS[k]}
                strokeWidth="10"
                strokeDasharray={dash}
                strokeDashoffset={dashOffset}
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[26px] font-semibold text-foreground tracking-tight leading-none">
            +0.62
          </span>
          <span className="text-[10.5px] font-mono text-muted mt-1 tracking-wider uppercase">Net</span>
        </div>
      </div>
      <div className="flex-1 min-w-0 space-y-2">
        {entries.map(([k, v]) => (
          <div key={k} className="flex items-center gap-2.5">
            <span className="size-2 rounded-full shrink-0" style={{ background: COLORS[k] }} />
            <span className="text-[12.5px] text-foreground flex-1">{LABELS[k]}</span>
            <span className="text-[12px] font-mono text-muted">{v}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
