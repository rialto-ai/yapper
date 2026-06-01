import { cn } from "@/lib/utils";

// Deterministic pseudo-waveform so server/client render identically.
function bars(count: number, seed = 7) {
  const out: number[] = [];
  let s = seed;
  for (let i = 0; i < count; i++) {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    const base = (s / 0x7fffffff) * 0.7 + 0.18;
    const wave = (Math.sin(i * 0.45) + 1) / 2;
    out.push(Math.min(1, base * 0.65 + wave * 0.45));
  }
  return out;
}

export function Waveform({
  count = 48,
  className,
  color = "currentColor",
  active,
}: {
  count?: number;
  className?: string;
  color?: string;
  active?: number; // index up to which bars are "played"
}) {
  const data = bars(count);
  const cut = active ?? Math.floor(count * 0.42);
  return (
    <div
      className={cn("flex h-full w-full items-center gap-[3px]", className)}
      aria-hidden="true"
    >
      {data.map((v, i) => (
        <span
          key={i}
          className="flex-1 rounded-full"
          style={{
            height: `${Math.round(v * 100)}%`,
            backgroundColor: color,
            opacity: i <= cut ? 1 : 0.32,
          }}
        />
      ))}
    </div>
  );
}
