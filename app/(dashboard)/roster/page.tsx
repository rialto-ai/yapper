"use client";

import { useState } from "react";
import { StatCard } from "@/components/stat-card";
import { StatusBadge } from "@/components/status-badge";
import { Tabs } from "@/components/tabs";
import { artists } from "@/lib/mock-data";
import { formatCompact } from "@/lib/utils";

const tabList = [
  "Artists",
  "Worship Teams",
  "Labels",
  "Publishers",
  "Churches",
  "Managers",
  "Producers",
  "Songwriters",
];

const typeMap: Record<string, string> = {
  Artists: "Artist",
  "Worship Teams": "Worship Team",
  Labels: "Label",
  Publishers: "Publisher",
};

const inlineMockRows: Record<string, typeof artists> = {
  Churches: [
    { name: "Hillside Community Church", type: "Church", country: "US", contact: "worship@hillsidecc.org", catalogSize: 12, monthlyListeners: 0, activeReleases: 2, rightsStatus: "Clear", serviceTier: "Self-Service Distribution", accountManager: "Team B", status: "Active" },
    { name: "The Well Church", type: "Church", country: "AU", contact: "music@thewellchurch.com", catalogSize: 8, monthlyListeners: 0, activeReleases: 1, rightsStatus: "Pending", serviceTier: "Self-Service Distribution", accountManager: "Team A", status: "Pending" },
    { name: "Calvary Chapel Brisbane", type: "Church", country: "AU", contact: "admin@calvarybne.org", catalogSize: 5, monthlyListeners: 0, activeReleases: 1, rightsStatus: "Clear", serviceTier: "Self-Service Distribution", accountManager: "Team C", status: "Active" },
  ],
  Managers: [
    { name: "Joshua Lee Management", type: "Manager", country: "US", contact: "joshua@jlmgmt.com", catalogSize: 0, monthlyListeners: 0, activeReleases: 0, rightsStatus: "Clear", serviceTier: "Managed Distribution", accountManager: "Team A", status: "Active" },
    { name: "Selah Artists Group", type: "Manager", country: "UK", contact: "info@selahartists.co", catalogSize: 0, monthlyListeners: 0, activeReleases: 0, rightsStatus: "Clear", serviceTier: "Label Services", accountManager: "Team C", status: "Active" },
  ],
  Producers: [
    { name: "Michael Torres", type: "Producer", country: "US", contact: "mike@torresmusic.com", catalogSize: 46, monthlyListeners: 0, activeReleases: 5, rightsStatus: "Clear", serviceTier: "Self-Service Distribution", accountManager: "Team B", status: "Active" },
    { name: "Sarah Kim", type: "Producer", country: "CA", contact: "sarah@skproductions.ca", catalogSize: 22, monthlyListeners: 0, activeReleases: 3, rightsStatus: "Pending", serviceTier: "Managed Distribution", accountManager: "Team A", status: "Active" },
    { name: "Daniel Okafor", type: "Producer", country: "NG", contact: "daniel@faithsound.ng", catalogSize: 18, monthlyListeners: 0, activeReleases: 2, rightsStatus: "Clear", serviceTier: "Self-Service Distribution", accountManager: "Team C", status: "Review" },
  ],
  Songwriters: [
    { name: "M. Torres", type: "Songwriter", country: "US", contact: "mtorres@northstar.com", catalogSize: 38, monthlyListeners: 0, activeReleases: 0, rightsStatus: "Clear", serviceTier: "Publishing Administration", accountManager: "Team A", status: "Active" },
    { name: "J. Whitfield", type: "Songwriter", country: "US", contact: "jwhitfield@cornerstone.com", catalogSize: 24, monthlyListeners: 0, activeReleases: 0, rightsStatus: "Clear", serviceTier: "Publishing Administration", accountManager: "Team B", status: "Active" },
    { name: "L. Chen", type: "Songwriter", country: "US", contact: "lchen@harborsongs.com", catalogSize: 16, monthlyListeners: 0, activeReleases: 0, rightsStatus: "Pending", serviceTier: "Publishing Administration", accountManager: "Team C", status: "Pending" },
    { name: "R. Tane", type: "Songwriter", country: "NZ", contact: "rtane@openheaven.com", catalogSize: 20, monthlyListeners: 0, activeReleases: 0, rightsStatus: "Clear", serviceTier: "Publishing Administration", accountManager: "Team A", status: "Active" },
  ],
};

const filterOptions = ["All", "Active", "Pending", "Review"] as const;

function getRowsForTab(tab: string) {
  const mappedType = typeMap[tab];
  if (mappedType) {
    return artists.filter((a) => a.type === mappedType);
  }
  return inlineMockRows[tab] || [];
}

export default function RosterPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-[22px] font-semibold tracking-tight">Roster & Partners</h1>
        <p className="text-[13px] text-muted mt-1">
          Manage artists, worship teams, labels, publishers, and service relationships.
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard label="Total Partners" value="12" detail="Across all categories" />
        <StatCard label="Active Artists" value="8" detail="Solo and group acts" />
        <StatCard label="Labels" value="2" detail="Distribution partners" />
        <StatCard label="Publishers" value="3" detail="Rights administration" />
      </div>

      {/* Tabs + Table */}
      <Tabs tabs={tabList}>
        {(activeTab) => {
          const allRows = getRowsForTab(activeTab);
          const rows =
            activeFilter === "All"
              ? allRows
              : allRows.filter((r) => r.status === activeFilter);

          return (
            <div className="space-y-4">
              {/* Filter Pills */}
              <div className="flex items-center gap-2">
                {filterOptions.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-colors ${
                      activeFilter === f
                        ? "bg-foreground text-background"
                        : "bg-surface border border-border text-subtle hover:bg-surface-2"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              {/* Table */}
              <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-surface">
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Name</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Type</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Country</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Contact</th>
                        <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Catalog Size</th>
                        <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Monthly Listeners</th>
                        <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Active Releases</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Rights Status</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Service Tier</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Account Manager</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.length === 0 ? (
                        <tr>
                          <td colSpan={11} className="px-4 py-8 text-center text-[13px] text-muted">
                            No records match the current filter.
                          </td>
                        </tr>
                      ) : (
                        rows.map((row, i) => (
                          <tr
                            key={i}
                            className="border-b border-border last:border-b-0 hover:bg-surface/50 transition-colors"
                          >
                            <td className="px-4 py-3 text-[13px] font-medium">{row.name}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{row.type}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{row.country}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{row.contact}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle text-right">{row.catalogSize}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle text-right">
                              {row.monthlyListeners > 0 ? formatCompact(row.monthlyListeners) : "—"}
                            </td>
                            <td className="px-4 py-3 text-[13px] text-subtle text-right">{row.activeReleases}</td>
                            <td className="px-4 py-3">
                              <StatusBadge status={row.rightsStatus} />
                            </td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{row.serviceTier}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{row.accountManager}</td>
                            <td className="px-4 py-3">
                              <StatusBadge status={row.status} />
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          );
        }}
      </Tabs>
    </div>
  );
}
