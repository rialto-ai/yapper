import { buildHeatmap } from "@/lib/mock";

const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

export function EngagementHeatmap() {
  const grid = buildHeatmap();
  return (
    <div className="p-4 pt-3">
      <div className="flex gap-1.5">
        <div className="flex flex-col justify-around pr-1 pt-3 text-[9.5px] font-mono text-ink-400 leading-tight">
          {DAYS.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
        <div className="flex-1">
          <div className="flex justify-between px-[1px] text-[9px] font-mono text-ink-400 mb-1">
            {["00", "04", "08", "12", "16", "20", "24"].map((h) => (
              <span key={h}>{h}</span>
            ))}
          </div>
          <div className="space-y-1">
            {grid.map((row, di) => (
              <div key={di} className="flex gap-[3px]">
                {row.map((v, hi) => {
                  const opacity = 0.12 + v * 0.88;
                  return (
                    <div
                      key={hi}
                      className="flex-1 aspect-square rounded-[2px]"
                      style={{
                        background: `rgba(34, 230, 255, ${opacity.toFixed(3)})`,
                        boxShadow: v > 0.7 ? "0 0 6px rgba(34, 230, 255, 0.5)" : undefined,
                      }}
                      title={`${DAYS[di]} ${hi.toString().padStart(2, "0")}:00 · intensity ${(v * 100).toFixed(0)}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-3 text-[9.5px] font-mono text-ink-400">
            <span>LESS</span>
            <div className="flex gap-[3px]">
              {[0.15, 0.35, 0.55, 0.75, 0.95].map((v) => (
                <div
                  key={v}
                  className="size-2.5 rounded-[2px]"
                  style={{ background: `rgba(34, 230, 255, ${v})` }}
                />
              ))}
            </div>
            <span>MORE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
