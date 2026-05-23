"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { NARRATIVES } from "@/lib/mock";

export function NarrativeVelocityChart() {
  // Stack the top 5 narratives over 48 buckets.
  const top = NARRATIVES.slice(0, 5);
  const buckets = top[0].series.length;
  const data = Array.from({ length: buckets }, (_, i) => {
    const row: Record<string, number | string> = { t: `${(buckets - i - 1) * 0.5}h` };
    top.forEach((n) => {
      row[n.id] = n.series[i].v;
    });
    return row;
  });

  return (
    <div className="h-[260px] w-full px-2 pt-2 pb-1">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 14, left: 0, bottom: 0 }}>
          <defs>
            {top.map((n) => (
              <linearGradient key={n.id} id={`g-${n.id}`} x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor={n.color} stopOpacity={0.45} />
                <stop offset="100%" stopColor={n.color} stopOpacity={0} />
              </linearGradient>
            ))}
          </defs>
          <XAxis
            dataKey="t"
            tick={{ fontSize: 10, fill: "#6a7488", fontFamily: "var(--font-mono)" }}
            tickLine={false}
            axisLine={{ stroke: "rgba(255,255,255,0.06)" }}
            interval={7}
            reversed
          />
          <YAxis
            tick={{ fontSize: 10, fill: "#6a7488", fontFamily: "var(--font-mono)" }}
            tickLine={false}
            axisLine={false}
            width={28}
          />
          <Tooltip
            cursor={{ stroke: "rgba(34, 230, 255, 0.3)", strokeWidth: 1 }}
            contentStyle={{
              background: "rgba(10, 13, 20, 0.95)",
              border: "1px solid rgba(34, 230, 255, 0.2)",
              borderRadius: 6,
              fontSize: 11,
              fontFamily: "var(--font-mono)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            }}
            labelStyle={{ color: "#8b94a8", marginBottom: 4 }}
          />
          {top.map((n) => (
            <Area
              key={n.id}
              type="monotone"
              dataKey={n.id}
              stackId="1"
              stroke={n.color}
              strokeWidth={1.2}
              fill={`url(#g-${n.id})`}
              name={n.label}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function NarrativeLegend() {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 px-4 pb-3">
      {NARRATIVES.slice(0, 5).map((n) => (
        <div key={n.id} className="flex items-center gap-1.5">
          <span
            className="size-2 rounded-sm"
            style={{ background: n.color, boxShadow: `0 0 8px ${n.color}99` }}
          />
          <span className="text-[11px] text-ink-400">{n.label}</span>
        </div>
      ))}
    </div>
  );
}
