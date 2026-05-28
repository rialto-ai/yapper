"use client";

import { StatCard } from "@/components/stat-card";
import { StatusBadge } from "@/components/status-badge";
import {
  streamData,
  revenueByPlatform,
  upcomingReleases,
  rightsIssues,
  royaltyPayments,
  churchAdoptionFunnel,
} from "@/lib/mock-data";
import { formatCompact } from "@/lib/utils";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const campaigns = [
  { name: '"Come Alive" campaign', progress: 78 },
  { name: '"Kingdom Come" promo', progress: 62 },
  { name: '"Living Water" church push', progress: 45 },
  { name: '"Mercy Is Near" radio', progress: 30 },
];

const campaignMilestones = [
  { campaign: "Come Alive", milestone: "Playlist pitch accepted by Spotify editorial", date: "May 22" },
  { campaign: "Kingdom Come", milestone: "Music video delivered to YouTube", date: "May 20" },
  { campaign: "Living Water", milestone: "Church network outreach started", date: "May 18" },
  { campaign: "Mercy Is Near", milestone: "Radio servicing package shipped", date: "May 15" },
  { campaign: "Come Alive", milestone: "Content rollout phase 2 launched", date: "May 12" },
];

export default function OverviewPage() {
  const maxFunnel = churchAdoptionFunnel[0].count;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page header */}
      <div>
        <h1 className="text-[22px] font-semibold tracking-tight">Overview</h1>
        <p className="text-[13px] text-muted mt-1">
          Executive summary across distribution, rights, royalties, and campaigns.
        </p>
      </div>

      {/* Top metrics row */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard label="Catalog Streams" value="4.8M" detail="Last 8 months" />
        <StatCard label="Est. Gross Royalties" value="A$82,400" detail="Year to date" />
        <StatCard label="Active Releases" value="24" detail="Across all artists" />
        <StatCard label="Pending Rights Approvals" value="7" detail="Requires action" />
        <StatCard label="Campaigns in Progress" value="5" detail="Active campaigns" />
        <StatCard label="Publishing Claims Pending" value="12" detail="Awaiting confirmation" />
        <StatCard label="YouTube Claims Monetized" value="318" detail="Content ID active" />
        <StatCard label="Church Adoption Score" value="78 / 100" detail="Composite score" />
      </div>

      {/* Charts section */}
      <div className="grid grid-cols-2 gap-4">
        {/* Monthly streams chart */}
        <div className="card p-5">
          <h2 className="text-[14px] font-semibold mb-4">Monthly Streams</h2>
          <ResponsiveContainer width="100%" height={260}>
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

        {/* Revenue by platform */}
        <div className="card p-5">
          <h2 className="text-[14px] font-semibold mb-4">Revenue by Platform</h2>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={revenueByPlatform} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 12, fill: "#737373" }} tickFormatter={(v) => `$${formatCompact(v)}`} />
              <YAxis type="category" dataKey="platform" tick={{ fontSize: 12, fill: "#737373" }} width={100} />
              <Tooltip
                formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
                contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #E5E5E5" }}
              />
              <Bar dataKey="revenue" radius={[0, 4, 4, 0]}>
                {revenueByPlatform.map((_, i) => (
                  <Cell key={i} fill={["#4338CA", "#6366F1", "#A5B4FC", "#C7D2FE", "#E0E7FF", "#EEF2FF"][i]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Campaign performance + Church adoption funnel */}
      <div className="grid grid-cols-2 gap-4">
        {/* Campaign performance */}
        <div className="card p-5">
          <h2 className="text-[14px] font-semibold mb-4">Campaign Performance</h2>
          <div className="space-y-4">
            {campaigns.map((c) => (
              <div key={c.name}>
                <div className="flex justify-between text-[13px] mb-1.5">
                  <span>{c.name}</span>
                  <span className="text-muted">{c.progress}%</span>
                </div>
                <div className="h-2 bg-[#F0F0F0] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#4338CA] rounded-full transition-all"
                    style={{ width: `${c.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Church adoption funnel */}
        <div className="card p-5">
          <h2 className="text-[14px] font-semibold mb-4">Church Adoption Funnel</h2>
          <div className="space-y-3">
            {churchAdoptionFunnel.map((item) => {
              const pct = (item.count / maxFunnel) * 100;
              return (
                <div key={item.stage}>
                  <div className="flex justify-between text-[13px] mb-1">
                    <span>{item.stage}</span>
                    <span className="text-muted">{formatCompact(item.count)}</span>
                  </div>
                  <div className="h-2 bg-[#F0F0F0] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#6366F1] rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tables section */}
      <div className="grid grid-cols-2 gap-4">
        {/* Upcoming releases */}
        <div className="card p-5">
          <h2 className="text-[14px] font-semibold mb-4">Upcoming Releases</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-border text-left text-muted">
                  <th className="pb-2 font-medium">Title</th>
                  <th className="pb-2 font-medium">Artist</th>
                  <th className="pb-2 font-medium">Date</th>
                  <th className="pb-2 font-medium">Type</th>
                  <th className="pb-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {upcomingReleases.map((r) => (
                  <tr key={r.title} className="border-b border-border last:border-0">
                    <td className="py-2.5 font-medium">{r.title}</td>
                    <td className="py-2.5 text-muted">{r.artist}</td>
                    <td className="py-2.5 text-muted">{r.date}</td>
                    <td className="py-2.5 text-muted">{r.type}</td>
                    <td className="py-2.5">
                      <StatusBadge status={r.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Rights issues */}
        <div className="card p-5">
          <h2 className="text-[14px] font-semibold mb-4">Rights Issues</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-border text-left text-muted">
                  <th className="pb-2 font-medium">Title</th>
                  <th className="pb-2 font-medium">Artist</th>
                  <th className="pb-2 font-medium">Issue</th>
                  <th className="pb-2 font-medium">Severity</th>
                  <th className="pb-2 font-medium">Days Open</th>
                </tr>
              </thead>
              <tbody>
                {rightsIssues.map((r) => (
                  <tr key={r.title} className="border-b border-border last:border-0">
                    <td className="py-2.5 font-medium">{r.title}</td>
                    <td className="py-2.5 text-muted">{r.artist}</td>
                    <td className="py-2.5 text-muted max-w-[200px] truncate">{r.issue}</td>
                    <td className="py-2.5">
                      <StatusBadge status={r.severity} />
                    </td>
                    <td className="py-2.5 text-muted">{r.daysOpen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="grid grid-cols-2 gap-4">
        {/* Royalty payments pending */}
        <div className="card p-5">
          <h2 className="text-[14px] font-semibold mb-4">Royalty Payments Pending</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-border text-left text-muted">
                  <th className="pb-2 font-medium">Payee</th>
                  <th className="pb-2 font-medium">Role</th>
                  <th className="pb-2 font-medium text-right">Balance</th>
                  <th className="pb-2 font-medium">Statement</th>
                  <th className="pb-2 font-medium">Next Payment</th>
                </tr>
              </thead>
              <tbody>
                {royaltyPayments.slice(0, 5).map((r) => (
                  <tr key={r.payee} className="border-b border-border last:border-0">
                    <td className="py-2.5 font-medium">{r.payee}</td>
                    <td className="py-2.5 text-muted">{r.role}</td>
                    <td className="py-2.5 text-right">
                      {r.currency === "USD" ? "$" : "A$"}
                      {r.balance.toLocaleString()}
                    </td>
                    <td className="py-2.5">
                      <StatusBadge status={r.statementStatus} />
                    </td>
                    <td className="py-2.5 text-muted">{r.nextPayment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Campaign milestones */}
        <div className="card p-5">
          <h2 className="text-[14px] font-semibold mb-4">Campaign Milestones</h2>
          <div className="space-y-3">
            {campaignMilestones.map((m, i) => (
              <div key={i} className="flex items-start gap-3 text-[13px]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4338CA] mt-1.5 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p>
                    <span className="font-medium">{m.campaign}</span>
                    <span className="text-muted"> &mdash; {m.milestone}</span>
                  </p>
                </div>
                <span className="text-muted shrink-0">{m.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
