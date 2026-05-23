"use client";

import { Area, AreaChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function GrowthChart({
  data,
}: {
  data: { t: number; followers: number; signal: number }[];
}) {
  const c = useColors();
  return (
    <div className="h-[240px] w-full px-3 pt-3 pb-1">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="g-followers" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={c.accent} stopOpacity={0.32} />
              <stop offset="100%" stopColor={c.accent} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="t"
            tick={{ fontSize: 11, fill: c.muted, fontFamily: "var(--font-mono)" }}
            tickFormatter={(t) => `d${30 - Number(t)}`}
            tickLine={false}
            axisLine={{ stroke: c.border }}
            interval={5}
          />
          <YAxis
            yAxisId="f"
            tick={{ fontSize: 11, fill: c.muted, fontFamily: "var(--font-mono)" }}
            tickLine={false}
            axisLine={false}
            width={42}
          />
          <YAxis
            yAxisId="s"
            orientation="right"
            tick={{ fontSize: 11, fill: c.violet, fontFamily: "var(--font-mono)" }}
            tickLine={false}
            axisLine={false}
            width={32}
            domain={["dataMin - 5", "dataMax + 5"]}
          />
          <Tooltip
            cursor={{ stroke: c.borderStrong, strokeWidth: 1 }}
            contentStyle={{
              background: c.card,
              border: `1px solid ${c.border}`,
              borderRadius: 8,
              fontSize: 12,
              fontFamily: "var(--font-sans)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              color: c.fg,
            }}
            labelStyle={{ color: c.muted, fontSize: 11 }}
            itemStyle={{ color: c.fg }}
          />
          <Area yAxisId="f" type="monotone" dataKey="followers" stroke={c.accent} strokeWidth={1.6} fill="url(#g-followers)" name="Followers" />
          <Line  yAxisId="s" type="monotone" dataKey="signal"    stroke={c.violet} strokeWidth={1.6} dot={false} name="Signal" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

function useColors() {
  const { resolvedTheme } = useTheme();
  const [c, setC] = useState({
    accent: "#ea580c", violet: "#8b5cf6", muted: "#6c727c",
    border: "#e4e6eb", borderStrong: "#d4d7de", card: "#ffffff", fg: "#11151c",
  });
  useEffect(() => {
    const r = getComputedStyle(document.documentElement);
    const rgb = (v: string) => `rgb(${r.getPropertyValue(v).trim()})`;
    setC({
      accent: rgb("--accent"),
      violet: rgb("--chart-4"),
      muted: rgb("--muted"),
      border: rgb("--border"),
      borderStrong: rgb("--border-strong"),
      card: rgb("--card"),
      fg: rgb("--foreground"),
    });
  }, [resolvedTheme]);
  return c;
}
