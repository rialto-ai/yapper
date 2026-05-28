"use client";

import { StatCard } from "@/components/stat-card";
import { Tabs } from "@/components/tabs";
import {
  streamData,
  revenueByPlatform,
  churchAdoptionFunnel,
} from "@/lib/mock-data";
import { formatCompact } from "@/lib/utils";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const territoryData = [
  { territory: "US", pct: 42 },
  { territory: "AU", pct: 18 },
  { territory: "UK", pct: 12 },
  { territory: "CA", pct: 8 },
  { territory: "NZ", pct: 5 },
  { territory: "Other", pct: 15 },
];

const audienceGrowth = [
  { month: "Oct", listeners: 800000 },
  { month: "Nov", listeners: 845000 },
  { month: "Dec", listeners: 920000 },
  { month: "Jan", listeners: 960000 },
  { month: "Feb", listeners: 1010000 },
  { month: "Mar", listeners: 1080000 },
  { month: "Apr", listeners: 1140000 },
  { month: "May", listeners: 1200000 },
];

const adoptionScores = [
  { label: "Congregational Suitability", score: 82 },
  { label: "Lyric Clarity", score: 90 },
  { label: "Theological Alignment", score: 88 },
  { label: "Worship Leader Engagement", score: 72 },
  { label: "Chord Chart Availability", score: 65 },
  { label: "Church Network Traction", score: 74 },
  { label: "Repeat Usage Signal", score: 68 },
];

const barColors = ["#4338CA", "#6366F1", "#A5B4FC", "#C7D2FE", "#E0E7FF", "#EEF2FF"];

export default function AnalyticsPage() {
  const maxFunnel = churchAdoptionFunnel[0].count;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page header */}
      <div>
        <h1 className="text-[22px] font-semibold tracking-tight">Analytics</h1>
        <p className="text-[13px] text-muted mt-1">
          Business intelligence across streams, revenue, audience, and church adoption.
        </p>
      </div>

      {/* Top metrics */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard label="Total Streams" value="4.8M" detail="Last 8 months" />
        <StatCard label="Monthly Listeners" value="1.2M" detail="Current month" />
        <StatCard label="YouTube Views" value="5.3M" detail="All videos" />
        <StatCard label="Playlist Adds" value="2,400" detail="Across DSPs" />
        <StatCard label="Royalty Estimate" value="A$82,400" detail="Year to date" />
        <StatCard label="Revenue by Source" value="6 platforms" detail="Contributing revenue" />
        <StatCard label="Church Downloads" value="8,200" detail="Chord charts + tracks" />
        <StatCard label="Chord Chart Downloads" value="3,100" detail="Worship leaders" />
      </div>

      {/* Tabbed content */}
      <Tabs tabs={["Streams", "Revenue", "Audience", "Church Adoption"]}>
        {(activeTab) => (
          <div>
            {activeTab === "Streams" && (
              <div className="space-y-4">
                <div className="card p-5">
                  <h2 className="text-[14px] font-semibold mb-4">Streams Over Time</h2>
                  <ResponsiveContainer width="100%" height={320}>
                    <AreaChart data={streamData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
                      <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#737373" }} />
                      <YAxis tick={{ fontSize: 12, fill: "#737373" }} tickFormatter={(v) => formatCompact(v)} />
                      <Tooltip
                        formatter={(value: number) => [formatCompact(value), "Streams"]}
                        contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #E5E5E5" }}
                      />
                      <Area
                        type="monotone"
                        dataKey="streams"
                        stroke="#4338CA"
                        fill="#4338CA"
                        fillOpacity={0.05}
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {activeTab === "Revenue" && (
              <div className="grid grid-cols-2 gap-4">
                {/* Revenue by platform */}
                <div className="card p-5">
                  <h2 className="text-[14px] font-semibold mb-4">Revenue by Platform</h2>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={revenueByPlatform} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" horizontal={false} />
                      <XAxis
                        type="number"
                        tick={{ fontSize: 12, fill: "#737373" }}
                        tickFormatter={(v) => `$${formatCompact(v)}`}
                      />
                      <YAxis type="category" dataKey="platform" tick={{ fontSize: 12, fill: "#737373" }} width={100} />
                      <Tooltip
                        formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
                        contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #E5E5E5" }}
                      />
                      <Bar dataKey="revenue" radius={[0, 4, 4, 0]}>
                        {revenueByPlatform.map((_, i) => (
                          <Cell key={i} fill={barColors[i]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Revenue by territory */}
                <div className="card p-5">
                  <h2 className="text-[14px] font-semibold mb-4">Revenue by Territory</h2>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={territoryData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" horizontal={false} />
                      <XAxis
                        type="number"
                        tick={{ fontSize: 12, fill: "#737373" }}
                        tickFormatter={(v) => `${v}%`}
                      />
                      <YAxis type="category" dataKey="territory" tick={{ fontSize: 12, fill: "#737373" }} width={60} />
                      <Tooltip
                        formatter={(value: number) => [`${value}%`, "Share"]}
                        contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #E5E5E5" }}
                      />
                      <Bar dataKey="pct" radius={[0, 4, 4, 0]}>
                        {territoryData.map((_, i) => (
                          <Cell key={i} fill={barColors[i]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {activeTab === "Audience" && (
              <div className="card p-5">
                <h2 className="text-[14px] font-semibold mb-4">Audience Growth</h2>
                <ResponsiveContainer width="100%" height={320}>
                  <LineChart data={audienceGrowth}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
                    <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#737373" }} />
                    <YAxis tick={{ fontSize: 12, fill: "#737373" }} tickFormatter={(v) => formatCompact(v)} />
                    <Tooltip
                      formatter={(value: number) => [formatCompact(value), "Listeners"]}
                      contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #E5E5E5" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="listeners"
                      stroke="#4338CA"
                      strokeWidth={2}
                      dot={{ fill: "#4338CA", r: 3 }}
                      activeDot={{ r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}

            {activeTab === "Church Adoption" && (
              <div className="space-y-4">
                {/* Funnel */}
                <div className="card p-5">
                  <h2 className="text-[14px] font-semibold mb-4">Church Adoption Funnel</h2>
                  <div className="space-y-3 max-w-2xl mx-auto">
                    {churchAdoptionFunnel.map((item) => {
                      const pct = (item.count / maxFunnel) * 100;
                      return (
                        <div key={item.stage} className="flex items-center gap-4">
                          <span className="text-[13px] text-muted w-[200px] text-right shrink-0">
                            {item.stage}
                          </span>
                          <div className="flex-1 flex justify-center">
                            <div
                              className="h-8 bg-[#4338CA] rounded flex items-center justify-center transition-all"
                              style={{ width: `${pct}%` }}
                            >
                              <span className="text-[11px] font-medium text-white">
                                {formatCompact(item.count)}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Adoption score */}
                <div className="card p-5">
                  <div className="flex items-baseline gap-3 mb-5">
                    <h2 className="text-[14px] font-semibold">Church Adoption Score</h2>
                    <span className="text-[22px] font-semibold tracking-tight">78 / 100</span>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {adoptionScores.map((item) => (
                      <div key={item.label} className="card p-4">
                        <p className="text-[12px] text-muted mb-1">{item.label}</p>
                        <p className="text-[20px] font-semibold tracking-tight">{item.score}</p>
                        <div className="mt-2 h-1.5 bg-[#F0F0F0] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#4338CA] rounded-full"
                            style={{ width: `${item.score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </Tabs>
    </div>
  );
}
