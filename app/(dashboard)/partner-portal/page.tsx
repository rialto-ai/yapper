"use client";

import { StatusBadge } from "@/components/status-badge";
import { partners } from "@/lib/mock-data";
import { formatCompact } from "@/lib/utils";

const modules = [
  { title: "Partner Roster", description: "Manage artists, writers, and rights holders within your partner account." },
  { title: "Sub-labels", description: "Configure and manage sub-label imprints and their catalogue assignments." },
  { title: "Catalogue Delivery", description: "Submit and track releases through the delivery pipeline." },
  { title: "Rights Approvals", description: "Review and approve rights registrations and ownership claims." },
  { title: "Royalty Statements", description: "Access and download detailed royalty statements and transaction history." },
  { title: "Analytics", description: "View streaming, revenue, and audience analytics across your catalogue." },
  { title: "Campaign Reporting", description: "Track campaign performance metrics and engagement data." },
  { title: "White-label Settings", description: "Customise branding, domain, and appearance for your portal instance." },
];

const configOptions = [
  { label: "Custom branding", value: "Enabled" },
  { label: "User roles", value: "4 configured" },
  { label: "Approval workflows", value: "Active" },
  { label: "Territory permissions", value: "Worldwide" },
  { label: "Reporting access", value: "Full" },
  { label: "Royalty statement access", value: "Enabled" },
];

const partnerTypes = [
  "Label",
  "Church Network",
  "Publisher",
  "Distributor",
  "Management Company",
  "Worship Collective",
];

export default function PartnerPortalPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-[22px] font-semibold tracking-tight">Partner Portal</h1>
        <p className="text-[13px] text-muted mt-1">
          White-label workspaces for labels, ministries, church networks, and catalogue owners managing their own artists and releases inside Selah.
        </p>
      </div>

      {/* Partner Table */}
      <div className="card p-5">
        <h2 className="text-[14px] font-semibold mb-4">Partners</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-border text-left text-muted">
                <th className="pb-2 font-medium">Partner</th>
                <th className="pb-2 font-medium">Type</th>
                <th className="pb-2 font-medium text-right">Artists</th>
                <th className="pb-2 font-medium text-right">Releases</th>
                <th className="pb-2 font-medium text-right">Monthly Streams</th>
                <th className="pb-2 font-medium text-right">Open Rights Issues</th>
                <th className="pb-2 font-medium text-right">Pending Payouts</th>
                <th className="pb-2 font-medium">Service Tier</th>
                <th className="pb-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {partners.map((p) => (
                <tr key={p.partner} className="border-b border-border last:border-0">
                  <td className="py-2.5 font-medium">{p.partner}</td>
                  <td className="py-2.5 text-muted">{p.type}</td>
                  <td className="py-2.5 text-right text-muted">{p.artists}</td>
                  <td className="py-2.5 text-right text-muted">{p.releases}</td>
                  <td className="py-2.5 text-right text-muted">{formatCompact(p.monthlyStreams)}</td>
                  <td className="py-2.5 text-right text-muted">{p.openRightsIssues}</td>
                  <td className="py-2.5 text-right text-muted">A${p.pendingPayouts.toLocaleString()}</td>
                  <td className="py-2.5 text-muted">{p.serviceTier}</td>
                  <td className="py-2.5"><StatusBadge status={p.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modules Section */}
      <div>
        <h2 className="text-[14px] font-semibold mb-4">Available Modules</h2>
        <div className="grid grid-cols-4 gap-4">
          {modules.map((m) => (
            <div key={m.title} className="card p-4">
              <h3 className="text-[13px] font-semibold mb-1">{m.title}</h3>
              <p className="text-[12px] text-muted leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Configuration Card */}
      <div className="grid grid-cols-2 gap-4">
        <div className="card p-5">
          <h2 className="text-[14px] font-semibold mb-4">Portal Configuration</h2>
          <div className="space-y-0">
            {configOptions.map((opt, i) => (
              <div
                key={opt.label}
                className={`flex items-center justify-between py-3 ${
                  i < configOptions.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="text-[13px]">{opt.label}</span>
                <span className="text-[13px] text-muted">{opt.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-5">
          <h2 className="text-[14px] font-semibold mb-4">Partner Types</h2>
          <div className="space-y-2">
            {partnerTypes.map((type) => (
              <div key={type} className="flex items-center gap-2.5 text-[13px] p-2.5 bg-[rgb(var(--surface))] rounded-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4338CA] shrink-0" />
                <span>{type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
