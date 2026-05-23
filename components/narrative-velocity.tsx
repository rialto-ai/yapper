"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { NARRATIVES } from "@/lib/mock";

export function NarrativeVelocityChart() {
  const top = NARRATIVES.slice(0, 5);
  const buckets = top[0].series.length;
  const data = Array.from({ length: buckets }, (_, i) => {
    const row: Record<string, number | string> = { t: `${(buckets - i - 1) * 0.5}h` };
    top.forEach((n) => {
      row[n.id] = n.series[i].v;
    });
    return row;
  });

  const { theme } = useChartTheme();

  return (
    <div className="h-[280px] w-full px-3 pt-3 pb-2">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 14, left: 0, bottom: 0 }}>
          <defs>
            {top.map((n) => (
              <linearGradient key={n.id} id={`g-${n.id}`} x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor={n.color} stopOpacity={0.35} />
                <stop offset="100%" stopColor={n.color} stopOpacity={0} />
              </linearGradient>
            ))}
          </defs>
          <XAxis
            dataKey="t"
            tick={{ fontSize: 11, fill: theme.muted, fontFamily: "var(--font-mono)" }}
            tickLine={false}
            axisLine={{ stroke: theme.border }}
            interval={7}
            reversed
          />
          <YAxis
            tick={{ fontSize: 11, fill: theme.muted, fontFamily: "var(--font-mono)" }}
            tickLine={false}
            axisLine={false}
            width={28}
          />
          <Tooltip
            cursor={{ stroke: theme.borderStrong, strokeWidth: 1 }}
            contentStyle={{
              background: theme.card,
              border: `1px solid ${theme.border}`,
              borderRadius: 8,
              fontSize: 12,
              fontFamily: "var(--font-sans)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              color: theme.fg,
            }}
            labelStyle={{ color: theme.muted, marginBottom: 4, fontSize: 11 }}
            itemStyle={{ color: theme.fg }}
          />
          {top.map((n) => (
            <Area
              key={n.id}
              type="monotone"
              dataKey={n.id}
              stackId="1"
              stroke={n.color}
              strokeWidth={1.4}
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
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 px-5 pb-4 pt-1">
      {NARRATIVES.slice(0, 5).map((n) => (
        <div key={n.id} className="flex items-center gap-1.5">
          <span className="size-2 rounded-full" style={{ background: n.color }} />
          <span className="text-[12px] text-muted">{n.label}</span>
        </div>
      ))}
    </div>
  );
}

// Tiny hook to resolve current theme-aware chart colors from CSS vars.
function useChartTheme() {
  const { resolvedTheme } = useTheme();
  const [theme, setTheme] = useState({
    muted: "#6c727c",
    border: "#e4e6eb",
    borderStrong: "#d4d7de",
    card: "#ffffff",
    fg: "#11151c",
  });
  useEffect(() => {
    const root = getComputedStyle(document.documentElement);
    const c = (v: string) => `rgb(${root.getPropertyValue(v).trim()})`;
    setTheme({
      muted: c("--muted"),
      border: c("--border"),
      borderStrong: c("--border-strong"),
      card: c("--card"),
      fg: c("--foreground"),
    });
  }, [resolvedTheme]);
  return { theme };
}
