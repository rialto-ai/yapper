"use client";

import { useState } from "react";
import { StatCard } from "@/components/stat-card";
import { StatusBadge } from "@/components/status-badge";

const sidebarTabs = [
  "Master Rights",
  "Publishing Rights",
  "Neighboring Rights",
  "YouTube Content ID",
  "Sync Representation",
  "Church Licensing",
];

const participantRows = [
  {
    participant: "Primary Artist",
    role: "Artist",
    entityType: "Individual",
    master: "40%",
    publishing: "-",
    neighboring: "-",
    status: "Confirmed",
    agreement: "Signed",
  },
  {
    participant: "Featured Artist",
    role: "Artist",
    entityType: "Individual",
    master: "5%",
    publishing: "-",
    neighboring: "-",
    status: "Confirmed",
    agreement: "Signed",
  },
  {
    participant: "Producer",
    role: "Producer",
    entityType: "Individual",
    master: "5%",
    publishing: "-",
    neighboring: "-",
    status: "Confirmed",
    agreement: "Signed",
  },
  {
    participant: "Songwriter A",
    role: "Songwriter",
    entityType: "Individual",
    master: "-",
    publishing: "50%",
    neighboring: "50%",
    status: "Confirmed",
    agreement: "Signed",
  },
  {
    participant: "Songwriter B",
    role: "Songwriter",
    entityType: "Individual",
    master: "-",
    publishing: "25%",
    neighboring: "25%",
    status: "Pending",
    agreement: "Needs signature",
  },
  {
    participant: "Worship Ministry",
    role: "Ministry",
    entityType: "Organization",
    master: "-",
    publishing: "10%",
    neighboring: "-",
    status: "Confirmed",
    agreement: "Signed",
  },
  {
    participant: "Publishing Administrator",
    role: "Publisher",
    entityType: "Company",
    master: "-",
    publishing: "15%",
    neighboring: "25%",
    status: "Confirmed",
    agreement: "Signed",
  },
  {
    participant: "Distribution Platform",
    role: "Distributor",
    entityType: "Company",
    master: "15% fee",
    publishing: "-",
    neighboring: "-",
    status: "Confirmed",
    agreement: "Active",
  },
];

const waterfallItems = [
  { label: "Gross revenue", amount: "$10,000", indent: 0, bold: true },
  { label: "DSP / platform deductions", amount: "-$3,000", indent: 1, bold: false },
  { label: "Distribution fee (15%)", amount: "-$1,050", indent: 1, bold: false },
  { label: "Publishing allocation (40%)", amount: "-$2,380", indent: 1, bold: false },
  { label: "Marketing recoupment", amount: "-$500", indent: 1, bold: false },
  { label: "Net master royalties", amount: "$3,070", indent: 0, bold: true },
  { label: "Net publishing royalties", amount: "$2,380", indent: 0, bold: true },
  { label: "Total participant payouts", amount: "$5,450", indent: 0, bold: true },
];

export default function RightsPage() {
  const [activeTab, setActiveTab] = useState("Master Rights");

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page header */}
      <div>
        <h1 className="text-[22px] font-semibold tracking-tight">Rights & Splits</h1>
        <p className="text-[13px] text-muted mt-1">
          Manage master rights, publishing rights, and royalty allocations.
        </p>
      </div>

      {/* Top stats */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard label="Total Participants" value="42" />
        <StatCard label="Confirmed Splits" value="34" />
        <StatCard label="Pending Approvals" value="7" />
        <StatCard label="Disputed" value="1" />
      </div>

      {/* Main content with sidebar */}
      <div className="flex gap-4">
        {/* Left sidebar navigation */}
        <div className="w-[200px] shrink-0">
          <div className="card p-2">
            <nav className="space-y-0.5">
              {sidebarTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left px-3 py-2 rounded-md text-[13px] transition-colors ${
                    activeTab === tab
                      ? "bg-foreground text-white font-medium"
                      : "text-foreground hover:bg-surface"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 min-w-0 space-y-4">
          {/* Royalty split table */}
          <div className="card p-5">
            <h2 className="text-[14px] font-semibold mb-4">Royalty Split Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="border-b border-border text-left text-muted">
                    <th className="pb-2 font-medium">Participant</th>
                    <th className="pb-2 font-medium">Role</th>
                    <th className="pb-2 font-medium">Entity Type</th>
                    <th className="pb-2 font-medium text-right">Master Share</th>
                    <th className="pb-2 font-medium text-right">Publishing Share</th>
                    <th className="pb-2 font-medium text-right">Neighboring Rights</th>
                    <th className="pb-2 font-medium">Status</th>
                    <th className="pb-2 font-medium">Agreement</th>
                  </tr>
                </thead>
                <tbody>
                  {participantRows.map((row) => (
                    <tr key={row.participant} className="border-b border-border last:border-0">
                      <td className="py-2.5 font-medium">{row.participant}</td>
                      <td className="py-2.5 text-muted">{row.role}</td>
                      <td className="py-2.5 text-muted">{row.entityType}</td>
                      <td className="py-2.5 text-right text-muted">{row.master}</td>
                      <td className="py-2.5 text-right text-muted">{row.publishing}</td>
                      <td className="py-2.5 text-right text-muted">{row.neighboring}</td>
                      <td className="py-2.5">
                        <StatusBadge status={row.status} />
                      </td>
                      <td className="py-2.5">
                        <StatusBadge status={row.agreement} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Royalty Waterfall */}
          <div className="card p-5">
            <h2 className="text-[14px] font-semibold mb-4">Royalty Waterfall</h2>
            <div className="space-y-0">
              {waterfallItems.map((item, i) => {
                const isDeduction = item.amount.startsWith("-");
                const isLast = i === waterfallItems.length - 1;
                const isNetLine = item.bold && i > 0;

                return (
                  <div
                    key={item.label}
                    className={`flex items-center justify-between py-2.5 text-[13px] ${
                      isNetLine ? "border-t border-border" : ""
                    } ${isLast ? "border-t-2 border-foreground/20 mt-1 pt-3" : ""}`}
                  >
                    <span
                      className={`${item.bold ? "font-semibold" : "text-muted"}`}
                      style={{ paddingLeft: item.indent * 20 }}
                    >
                      {item.label}
                    </span>
                    <span
                      className={`font-mono text-[13px] ${
                        item.bold ? "font-semibold" : isDeduction ? "text-muted" : ""
                      }`}
                    >
                      {item.amount}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Visual stepped bar */}
            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-[12px] font-medium text-muted mb-3">Revenue Breakdown</p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-muted w-[140px] shrink-0 text-right">Gross Revenue</span>
                  <div className="flex-1 h-5 bg-[#0a0a0a] rounded" />
                  <span className="text-[11px] text-muted w-[60px]">$10,000</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-muted w-[140px] shrink-0 text-right">After DSP</span>
                  <div className="flex-1 h-5 rounded overflow-hidden" style={{ maxWidth: "70%" }}>
                    <div className="h-full bg-[#333] rounded" />
                  </div>
                  <span className="text-[11px] text-muted w-[60px]">$7,000</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-muted w-[140px] shrink-0 text-right">After Distribution</span>
                  <div className="flex-1 h-5 rounded overflow-hidden" style={{ maxWidth: "59.5%" }}>
                    <div className="h-full bg-[#555] rounded" />
                  </div>
                  <span className="text-[11px] text-muted w-[60px]">$5,950</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-muted w-[140px] shrink-0 text-right">Master Royalties</span>
                  <div className="flex-1 h-5 rounded overflow-hidden" style={{ maxWidth: "30.7%" }}>
                    <div className="h-full bg-[#888] rounded" />
                  </div>
                  <span className="text-[11px] text-muted w-[60px]">$3,070</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-muted w-[140px] shrink-0 text-right">Publishing Royalties</span>
                  <div className="flex-1 h-5 rounded overflow-hidden" style={{ maxWidth: "23.8%" }}>
                    <div className="h-full bg-[#b4b4b4] rounded" />
                  </div>
                  <span className="text-[11px] text-muted w-[60px]">$2,380</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
