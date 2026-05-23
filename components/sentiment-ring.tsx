import { SENTIMENT } from "@/lib/mock";

const COLORS: Record<string, string> = {
  bullish: "#34f5b1",
  technical: "#22e6ff",
  neutral: "#8b94a8",
  bearish: "#fb7185",
  speculative: "#a78bfa",
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
  const r = 52;
  const C = 2 * Math.PI * r;
  let offset = 0;

  return (
    <div className="px-4 py-4 flex items-center gap-5">
      <div className="relative shrink-0">
        <svg width="132" height="132" viewBox="0 0 132 132" className="-rotate-90">
          <circle cx="66" cy="66" r={r} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="12" />
          {entries.map(([k, v]) => {
            const frac = v / total;
            const len = C * frac;
            const dash = `${len} ${C - len}`;
            const dashOffset = -offset;
            offset += len;
            return (
              <circle
                key={k}
                cx="66"
                cy="66"
                r={r}
                fill="none"
                stroke={COLORS[k]}
                strokeWidth="12"
                strokeDasharray={dash}
                strokeDashoffset={dashOffset}
                strokeLinecap="butt"
                style={{
                  filter: `drop-shadow(0 0 6px ${COLORS[k]}66)`,
                }}
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[24px] font-semibold text-white font-mono tracking-tight leading-none">
            +0.62
          </span>
          <span className="label-eyebrow mt-1">NET SENTIMENT</span>
        </div>
      </div>
      <div className="flex-1 min-w-0 space-y-1.5">
        {entries.map(([k, v]) => (
          <div key={k} className="flex items-center gap-2">
            <span
              className="size-2 rounded-sm shrink-0"
              style={{ background: COLORS[k], boxShadow: `0 0 6px ${COLORS[k]}99` }}
            />
            <span className="text-[12px] text-white flex-1">{LABELS[k]}</span>
            <span className="text-[11px] font-mono text-ink-400">{v}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
