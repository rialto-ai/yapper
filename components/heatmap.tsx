"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { buildHeatmap } from "@/lib/mock";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function EngagementHeatmap() {
  const grid = buildHeatmap();
  const accent = useAccentRgb();

  return (
    <div className="p-5">
      <div className="flex gap-2">
        <div className="flex flex-col justify-around pr-1 pt-3 text-[10px] font-mono text-subtle leading-tight">
          {DAYS.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
        <div className="flex-1">
          <div className="flex justify-between px-[1px] text-[9.5px] font-mono text-subtle mb-1">
            {["00", "04", "08", "12", "16", "20", "24"].map((h) => (
              <span key={h}>{h}</span>
            ))}
          </div>
          <div className="space-y-1">
            {grid.map((row, di) => (
              <div key={di} className="flex gap-[3px]">
                {row.map((v, hi) => {
                  const opacity = 0.08 + v * 0.92;
                  return (
                    <div
                      key={hi}
                      className="flex-1 aspect-square rounded-[3px]"
                      style={{ background: `rgba(${accent}, ${opacity.toFixed(3)})` }}
                      title={`${DAYS[di]} ${hi.toString().padStart(2, "0")}:00`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4 text-[10.5px] font-mono text-subtle">
            <span>Less</span>
            <div className="flex gap-[3px]">
              {[0.1, 0.3, 0.5, 0.75, 1].map((v) => (
                <div
                  key={v}
                  className="size-2.5 rounded-[3px]"
                  style={{ background: `rgba(${accent}, ${v})` }}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function useAccentRgb() {
  const { resolvedTheme } = useTheme();
  const [v, setV] = useState("234, 88, 12");
  useEffect(() => {
    const root = getComputedStyle(document.documentElement);
    setV(root.getPropertyValue("--accent").trim().replace(/\s+/g, ", "));
  }, [resolvedTheme]);
  return v;
}
