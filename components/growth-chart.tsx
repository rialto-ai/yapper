"use client";

import { Area, AreaChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export function GrowthChart({
  data,
}: {
  data: { t: number; followers: number; signal: number }[];
}) {
  return (
    <div className="h-[220px] w-full px-2 pt-2 pb-1">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="g-followers" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#22e6ff" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#22e6ff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="t"
            tick={{ fontSize: 10, fill: "#6a7488", fontFamily: "var(--font-mono)" }}
            tickFormatter={(t) => `d${30 - Number(t)}`}
            tickLine={false}
            axisLine={{ stroke: "rgba(255,255,255,0.06)" }}
            interval={5}
          />
          <YAxis
            yAxisId="f"
            tick={{ fontSize: 10, fill: "#6a7488", fontFamily: "var(--font-mono)" }}
            tickLine={false}
            axisLine={false}
            width={40}
          />
          <YAxis
            yAxisId="s"
            orientation="right"
            tick={{ fontSize: 10, fill: "#a78bfa", fontFamily: "var(--font-mono)" }}
            tickLine={false}
            axisLine={false}
            width={32}
            domain={["dataMin - 5", "dataMax + 5"]}
          />
          <Tooltip
            cursor={{ stroke: "rgba(34, 230, 255, 0.3)", strokeWidth: 1 }}
            contentStyle={{
              background: "rgba(10, 13, 20, 0.95)",
              border: "1px solid rgba(34, 230, 255, 0.2)",
              borderRadius: 6,
              fontSize: 11,
              fontFamily: "var(--font-mono)",
            }}
          />
          <Area
            yAxisId="f"
            type="monotone"
            dataKey="followers"
            stroke="#22e6ff"
            strokeWidth={1.4}
            fill="url(#g-followers)"
            name="Followers"
          />
          <Line
            yAxisId="s"
            type="monotone"
            dataKey="signal"
            stroke="#a78bfa"
            strokeWidth={1.4}
            dot={false}
            name="Signal"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
