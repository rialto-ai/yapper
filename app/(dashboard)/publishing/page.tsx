"use client";

import { StatCard } from "@/components/stat-card";
import { StatusBadge } from "@/components/status-badge";
import { Tabs } from "@/components/tabs";
import { compositions } from "@/lib/mock-data";

const songwriters = [
  { writer: "Grace Harbor", pro: "ASCAP", ipi: "00123456789", compositions: 8, publisher: "Northstar Publishing", splitStatus: "Confirmed", taxStatus: "Complete" },
  { writer: "J. Whitfield", pro: "BMI", ipi: "00234567890", compositions: 12, publisher: "Cornerstone Songs", splitStatus: "Confirmed", taxStatus: "Complete" },
  { writer: "S. Park", pro: "BMI", ipi: "00345678901", compositions: 6, publisher: "Cornerstone Songs", splitStatus: "Confirmed", taxStatus: "Complete" },
  { writer: "Hannah Rejoice", pro: "APRA", ipi: "00456789012", compositions: 4, publisher: "Northstar Publishing", splitStatus: "Pending", taxStatus: "Pending" },
  { writer: "M. Torres", pro: "ASCAP", ipi: "00567890123", compositions: 5, publisher: "Northstar Publishing", splitStatus: "Confirmed", taxStatus: "Complete" },
  { writer: "L. Chen", pro: "SESAC", ipi: "00678901234", compositions: 3, publisher: "Harbor Songs Admin", splitStatus: "Confirmed", taxStatus: "Complete" },
  { writer: "R. Tane", pro: "APRA", ipi: "00789012345", compositions: 7, publisher: "Kingdom House Publishing", splitStatus: "Confirmed", taxStatus: "Complete" },
];

const churchLicensing = [
  { composition: "Living Water", ccliNumber: "7890123", status: "Listed", churchesUsing: 42, downloads: 186, lastUpdated: "2026-04-15" },
  { composition: "Kingdom Come", ccliNumber: "7890124", status: "Listed", churchesUsing: 128, downloads: 520, lastUpdated: "2026-04-10" },
  { composition: "Come Alive", ccliNumber: "7890125", status: "Listed", churchesUsing: 96, downloads: 340, lastUpdated: "2026-03-20" },
  { composition: "Mercy Is Near", ccliNumber: "7890126", status: "Listed", churchesUsing: 64, downloads: 210, lastUpdated: "2026-04-01" },
  { composition: "Still My Soul", ccliNumber: " -", status: "Not Listed", churchesUsing: 0, downloads: 0, lastUpdated: " -" },
  { composition: "The Narrow Road", ccliNumber: " -", status: "Not Listed", churchesUsing: 0, downloads: 0, lastUpdated: " -" },
];

const tabList = ["Compositions", "Songwriters", "PRO Status", "Publishing Claims", "Church Licensing", "Unmatched Works"];

export default function PublishingPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-[22px] font-semibold tracking-tight">Publishing Coordination</h1>
        <p className="text-[13px] text-muted mt-1">
          Composition records, publishing metadata, songwriter splits, PRO registration tracking, and CCLI workflow status. Selah supports publishing coordination across the partners you already work with.
        </p>
      </div>

      {/* Top stats */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard label="Total Compositions" value="86" />
        <StatCard label="Registered" value="72" />
        <StatCard label="Pending Registration" value="8" />
        <StatCard label="Conflicts" value="2" />
      </div>

      {/* Tabs */}
      <Tabs tabs={tabList}>
        {(activeTab) => {
          if (activeTab === "Compositions") {
            return (
              <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-surface">
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Composition</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Writers</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Publisher</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Split Status</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">PRO Status</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">ISWC</th>
                        <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Related Recordings</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">YouTube Publishing</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Mechanical Status</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Church Licensing</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Royalty Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {compositions.map((row, i) => (
                        <tr
                          key={i}
                          className="border-b border-border last:border-b-0 hover:bg-surface/50 transition-colors"
                        >
                          <td className="px-4 py-3 text-[13px] font-medium">{row.title}</td>
                          <td className="px-4 py-3 text-[13px] text-subtle">{row.writers}</td>
                          <td className="px-4 py-3 text-[13px] text-subtle">{row.publisher}</td>
                          <td className="px-4 py-3">
                            <StatusBadge status={row.splitStatus} />
                          </td>
                          <td className="px-4 py-3">
                            <StatusBadge status={row.proStatus} />
                          </td>
                          <td className="px-4 py-3 text-[13px] text-subtle font-mono text-[12px]">{row.iswc}</td>
                          <td className="px-4 py-3 text-[13px] text-subtle text-right">{row.relatedRecordings}</td>
                          <td className="px-4 py-3">
                            <StatusBadge status={row.youtubePublishing} />
                          </td>
                          <td className="px-4 py-3">
                            <StatusBadge status={row.mechanicalStatus} />
                          </td>
                          <td className="px-4 py-3">
                            <StatusBadge status={row.churchLicensing} />
                          </td>
                          <td className="px-4 py-3">
                            <StatusBadge status={row.royaltyStatus} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          }

          if (activeTab === "Songwriters") {
            return (
              <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-surface">
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Writer</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">PRO</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">IPI Number</th>
                        <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Compositions</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Publisher</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Split Status</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Tax Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {songwriters.map((row, i) => (
                        <tr
                          key={i}
                          className="border-b border-border last:border-b-0 hover:bg-surface/50 transition-colors"
                        >
                          <td className="px-4 py-3 text-[13px] font-medium">{row.writer}</td>
                          <td className="px-4 py-3 text-[13px] text-subtle">{row.pro}</td>
                          <td className="px-4 py-3 text-[13px] text-subtle font-mono text-[12px]">{row.ipi}</td>
                          <td className="px-4 py-3 text-[13px] text-subtle text-right">{row.compositions}</td>
                          <td className="px-4 py-3 text-[13px] text-subtle">{row.publisher}</td>
                          <td className="px-4 py-3">
                            <StatusBadge status={row.splitStatus} />
                          </td>
                          <td className="px-4 py-3">
                            <StatusBadge status={row.taxStatus} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          }

          if (activeTab === "PRO Status") {
            return (
              <div className="card p-5">
                <p className="text-[13px] text-muted">PRO registration status and details will appear here.</p>
              </div>
            );
          }

          if (activeTab === "Publishing Claims") {
            return (
              <div className="card p-5">
                <p className="text-[13px] text-muted">Publishing claims and dispute management will appear here.</p>
              </div>
            );
          }

          if (activeTab === "Church Licensing") {
            return (
              <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-surface">
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Composition</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">CCLI Number</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Status</th>
                        <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Churches Using</th>
                        <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Downloads</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Last Updated</th>
                      </tr>
                    </thead>
                    <tbody>
                      {churchLicensing.map((row, i) => (
                        <tr
                          key={i}
                          className="border-b border-border last:border-b-0 hover:bg-surface/50 transition-colors"
                        >
                          <td className="px-4 py-3 text-[13px] font-medium">{row.composition}</td>
                          <td className="px-4 py-3 text-[13px] text-subtle font-mono text-[12px]">{row.ccliNumber}</td>
                          <td className="px-4 py-3">
                            <StatusBadge status={row.status} />
                          </td>
                          <td className="px-4 py-3 text-[13px] text-subtle text-right">{row.churchesUsing}</td>
                          <td className="px-4 py-3 text-[13px] text-subtle text-right">{row.downloads}</td>
                          <td className="px-4 py-3 text-[13px] text-subtle">{row.lastUpdated}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          }

          if (activeTab === "Unmatched Works") {
            return (
              <div className="card p-5">
                <p className="text-[13px] text-muted">Unmatched works and reconciliation tools will appear here.</p>
              </div>
            );
          }

          return null;
        }}
      </Tabs>
    </div>
  );
}
