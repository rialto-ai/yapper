"use client";

import {
  Building2,
  Users,
  ShieldCheck,
  Key,
  FileText,
  BarChart3,
  Disc3,
  DollarSign,
  Globe2,
  Layers,
  Settings,
  ChevronRight,
  Webhook,
  Plug,
  Download,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import { StatCard } from "@/components/stat-card";
import { StatusBadge } from "@/components/status-badge";
import { Tabs } from "@/components/tabs";

const tabList = [
  "Organisations",
  "Rosters",
  "Permissions",
  "Catalogue Administration",
  "Reporting",
  "API Access",
];

type OrgType =
  | "Label"
  | "Worship Collective"
  | "Ministry"
  | "Worship Movement"
  | "Church"
  | "Catalogue Owner"
  | "Publisher"
  | "Artist Collective";

interface SubOrg {
  name: string;
  type: OrgType;
  city: string;
  artists: number;
  catalogue: number;
  catalogueLabel: string;
  health: number;
}

const subOrgs: SubOrg[] = [
  { name: "Kingdom House Music", type: "Label", city: "Sydney, AU", artists: 14, catalogue: 86, catalogueLabel: "releases", health: 96 },
  { name: "New City Music Group", type: "Label", city: "Auckland, NZ", artists: 6, catalogue: 24, catalogueLabel: "releases", health: 92 },
  { name: "River House Worship", type: "Worship Collective", city: "Singapore", artists: 4, catalogue: 18, catalogueLabel: "releases", health: 88 },
  { name: "The Table Worship", type: "Ministry", city: "Manila, PH", artists: 8, catalogue: 22, catalogueLabel: "releases", health: 84 },
  { name: "Lightwell Music", type: "Label", city: "Kuala Lumpur, MY", artists: 5, catalogue: 16, catalogueLabel: "releases", health: 90 },
  { name: "Covenant House Collective", type: "Worship Movement", city: "Sydney, AU", artists: 12, catalogue: 38, catalogueLabel: "releases", health: 94 },
  { name: "Maranatha Road", type: "Label", city: "Bangkok, TH", artists: 3, catalogue: 12, catalogueLabel: "releases", health: 78 },
  { name: "Northbridge Worship Centre", type: "Church", city: "Melbourne, AU", artists: 5, catalogue: 14, catalogueLabel: "releases", health: 82 },
  { name: "Psalm & Sound", type: "Catalogue Owner", city: "Taipei, TW", artists: 0, catalogue: 142, catalogueLabel: "catalogue items", health: 76 },
  { name: "Kingdom Songs", type: "Publisher", city: "Seoul, KR", artists: 0, catalogue: 86, catalogueLabel: "compositions", health: 80 },
  { name: "Cornerstone Records", type: "Label", city: "Jakarta, ID", artists: 7, catalogue: 28, catalogueLabel: "releases", health: 86 },
  { name: "The Narrow Way Music", type: "Artist Collective", city: "Sydney, AU", artists: 4, catalogue: 18, catalogueLabel: "releases", health: 89 },
];

const orgTypeIcon: Record<OrgType, typeof Building2> = {
  Label: Disc3,
  "Worship Collective": Users,
  Ministry: Globe2,
  "Worship Movement": Globe2,
  Church: Building2,
  "Catalogue Owner": Layers,
  Publisher: FileText,
  "Artist Collective": Users,
};

const rosterRows = [
  { artist: "Grace & Stone", org: "Kingdom House Music", tier: "Featured", releases: 8, catalogue: 42, manager: "Hannah Reed", status: "Active" },
  { artist: "The Narrow Way", org: "The Narrow Way Music", tier: "Featured", releases: 4, catalogue: 18, manager: "Ben Walker", status: "Active" },
  { artist: "Emma James", org: "New City Music Group", tier: "Active", releases: 3, catalogue: 12, manager: "Sara Lim", status: "Active" },
  { artist: "River House Worship", org: "River House Worship", tier: "Featured", releases: 6, catalogue: 18, manager: "Daniel Tan", status: "Active" },
  { artist: "New City Collective", org: "New City Music Group", tier: "Active", releases: 5, catalogue: 14, manager: "Sara Lim", status: "Active" },
  { artist: "Psalm & Sound", org: "Psalm & Sound", tier: "Catalogue", releases: 0, catalogue: 142, manager: "Wei Chen", status: "Managed" },
  { artist: "Lightwell Music", org: "Lightwell Music", tier: "Active", releases: 4, catalogue: 16, manager: "Aisha Rahman", status: "Active" },
  { artist: "Kingdom Songs", org: "Kingdom Songs", tier: "Catalogue", releases: 0, catalogue: 86, manager: "Joon Park", status: "Managed" },
  { artist: "Maranatha Road", org: "Maranatha Road", tier: "Active", releases: 2, catalogue: 12, manager: "Nicha Suwan", status: "Active" },
  { artist: "The Table Worship", org: "The Table Worship", tier: "Featured", releases: 7, catalogue: 22, manager: "Maria Cruz", status: "Active" },
  { artist: "Northbridge Worship", org: "Northbridge Worship Centre", tier: "Active", releases: 4, catalogue: 14, manager: "James Carter", status: "Active" },
  { artist: "Covenant House Collective", org: "Covenant House Collective", tier: "Featured", releases: 9, catalogue: 38, manager: "Hannah Reed", status: "Active" },
];

const rolesInfo = [
  { name: "Owner", icon: ShieldCheck, description: "Full access across all sub-organisations and operations.", scopeLabel: "Global" },
  { name: "Org Admin", icon: Building2, description: "Manages a single sub-organisation and its roster.", scopeLabel: "Single org" },
  { name: "Catalogue Manager", icon: Layers, description: "Manages catalogue items, splits, rights, and metadata.", scopeLabel: "Catalogue scope" },
  { name: "Read Only", icon: BarChart3, description: "Reporting and analytics access only, no edits.", scopeLabel: "View only" },
];

const teamMembers = [
  { name: "Hannah Reed", email: "hannah.reed@selah.co", role: "Owner", scope: "All organisations", lastActive: "2 min ago", status: "Active" },
  { name: "Ben Walker", email: "ben.walker@selah.co", role: "Org Admin", scope: "The Narrow Way Music", lastActive: "12 min ago", status: "Active" },
  { name: "Sara Lim", email: "sara.lim@selah.co", role: "Org Admin", scope: "New City Music Group", lastActive: "1 hr ago", status: "Active" },
  { name: "Daniel Tan", email: "daniel.tan@selah.co", role: "Org Admin", scope: "River House Worship", lastActive: "3 hr ago", status: "Active" },
  { name: "Wei Chen", email: "wei.chen@selah.co", role: "Catalogue Manager", scope: "Psalm & Sound", lastActive: "Yesterday", status: "Active" },
  { name: "Aisha Rahman", email: "aisha.rahman@selah.co", role: "Org Admin", scope: "Lightwell Music", lastActive: "Yesterday", status: "Active" },
  { name: "Joon Park", email: "joon.park@selah.co", role: "Catalogue Manager", scope: "Kingdom Songs", lastActive: "2 days ago", status: "Active" },
  { name: "Maria Cruz", email: "maria.cruz@selah.co", role: "Org Admin", scope: "The Table Worship", lastActive: "2 days ago", status: "Active" },
  { name: "James Carter", email: "james.carter@selah.co", role: "Read Only", scope: "Northbridge Worship Centre", lastActive: "5 days ago", status: "Active" },
  { name: "Nicha Suwan", email: "nicha.suwan@selah.co", role: "Org Admin", scope: "Maranatha Road", lastActive: "1 week ago", status: "Inactive" },
];

const catalogueStatusCounts = [
  { label: "Excellent", count: "8,200", tone: "positive" as const },
  { label: "Good", count: "3,400", tone: "info" as const },
  { label: "Needs Review", count: "640", tone: "warning" as const },
  { label: "Incomplete", count: "140", tone: "neutral" as const },
  { label: "Blocked", count: "20", tone: "negative" as const },
];

const catalogueIssues = [
  { item: "Living Water (Acoustic)", org: "Kingdom House Music", issue: "Missing writer metadata", severity: "High", action: "Add writer" },
  { item: "Kingdom Come (Live)", org: "Covenant House Collective", issue: "Incomplete splits", severity: "High", action: "Resolve splits" },
  { item: "Hold On to Hope", org: "The Table Worship", issue: "Missing CCLI information", severity: "Medium", action: "Submit to CCLI" },
  { item: "Still My Soul (Video)", org: "New City Music Group", issue: "YouTube claim issue", severity: "High", action: "Reclaim asset" },
  { item: "All the Earth", org: "Psalm & Sound", issue: "Unclear ownership", severity: "Medium", action: "Verify rights" },
  { item: "Cornerstone (Reprise)", org: "Kingdom Songs", issue: "Missing publishing metadata", severity: "Medium", action: "Update metadata" },
  { item: "Quiet Waters", org: "Lightwell Music", issue: "Missing lyric information", severity: "Low", action: "Upload lyrics" },
  { item: "Until the Morning", org: "Maranatha Road", issue: "Unclear master ownership", severity: "High", action: "Verify masters" },
];

const reportingCards = [
  { title: "Royalty Statements", icon: DollarSign, lastGenerated: "27 May 2026", count: 18 },
  { title: "Catalogue Reports", icon: Layers, lastGenerated: "26 May 2026", count: 12 },
  { title: "Performance Reports", icon: BarChart3, lastGenerated: "25 May 2026", count: 9 },
  { title: "CCLI Reports", icon: FileText, lastGenerated: "20 May 2026", count: 6 },
];

const reportRows = [
  { report: "Q1 2026 Royalty Statement", org: "Kingdom House Music", period: "Jan to Mar 2026", generated: "27 May 2026", format: "PDF" },
  { report: "Q1 2026 Royalty Statement", org: "New City Music Group", period: "Jan to Mar 2026", generated: "27 May 2026", format: "PDF" },
  { report: "Catalogue Health Report", org: "Psalm & Sound", period: "May 2026", generated: "26 May 2026", format: "CSV" },
  { report: "Performance Summary", org: "Covenant House Collective", period: "Apr 2026", generated: "25 May 2026", format: "PDF" },
  { report: "CCLI Usage Report", org: "The Table Worship", period: "Apr 2026", generated: "20 May 2026", format: "XLSX" },
  { report: "Catalogue Reconciliation", org: "Kingdom Songs", period: "Q1 2026", generated: "19 May 2026", format: "CSV" },
  { report: "YouTube Performance", org: "Lightwell Music", period: "Apr 2026", generated: "18 May 2026", format: "PDF" },
  { report: "Q1 2026 Royalty Statement", org: "Maranatha Road", period: "Jan to Mar 2026", generated: "15 May 2026", format: "PDF" },
];

const apiKeys = [
  { name: "Reporting Pipeline", scope: "Read: reporting, royalties", created: "12 Jan 2026", lastUsed: "2 hr ago", status: "Active" },
  { name: "Catalogue Sync", scope: "Read/Write: catalogue", created: "04 Mar 2026", lastUsed: "Yesterday", status: "Active" },
  { name: "Finance Integration", scope: "Read: royalties, statements", created: "22 Feb 2026", lastUsed: "5 days ago", status: "Active" },
  { name: "Legacy Importer", scope: "Read: catalogue, rosters", created: "08 Nov 2025", lastUsed: "3 months ago", status: "Inactive" },
];

const webhookSubs = [
  { event: "release.delivered", endpoint: "https://hooks.kingdomhouse.co/releases", status: "Active", lastDelivery: "12 min ago" },
  { event: "royalty.statement.ready", endpoint: "https://finance.selah.co/webhooks/royalty", status: "Active", lastDelivery: "1 hr ago" },
  { event: "catalogue.issue.flagged", endpoint: "https://ops.selah.co/webhooks/catalogue", status: "Active", lastDelivery: "3 hr ago" },
];

const integrationEndpoints = [
  { name: "Production API", url: "https://api.selah.co/v1", region: "Asia Pacific" },
  { name: "Sandbox API", url: "https://sandbox.selah.co/v1", region: "Asia Pacific" },
  { name: "Reporting Export", url: "https://export.selah.co/v1", region: "Global" },
];

function severityBadge(sev: string) {
  if (sev === "High") return <StatusBadge status="High" />;
  if (sev === "Medium") return <StatusBadge status="Medium" />;
  return <StatusBadge status="Low" />;
}

function tierBadge(tier: string) {
  const cls =
    tier === "Featured"
      ? "bg-accent-soft text-accent border-accent/15"
      : tier === "Active"
      ? "bg-secondary-soft text-secondary border-secondary/15"
      : "bg-surface-2 text-subtle border-border";
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border ${cls}`}>
      {tier}
    </span>
  );
}

function orgTypePill(type: OrgType) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-surface-2 text-subtle border border-border">
      {type}
    </span>
  );
}

export default function EnterprisePage() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title block */}
      <div>
        <p className="label-eyebrow mb-1.5">Selah by Christian Music Group</p>
        <h1 className="text-[22px] font-semibold tracking-tight">Selah Enterprise</h1>
        <p className="text-[13px] text-muted mt-1 max-w-4xl leading-relaxed">
          Back-office infrastructure for Christian labels, ministries, churches, managers, and catalogue owners that need professional release operations, rights workflows, campaign management, analytics, and team permissions.
        </p>
      </div>

      {/* Top stats */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard label="Sub-organisations" value="24" detail="Labels, ministries, churches" highlight />
        <StatCard label="Artist rosters" value="186" detail="Across all sub-orgs" />
        <StatCard label="Team members" value="42" detail="Active permissions" />
        <StatCard label="Catalogue items administered" value="12,400+" detail="Tracks, compositions, videos" />
      </div>

      <Tabs tabs={tabList}>
        {(activeTab) => {
          if (activeTab === "Organisations") {
            return (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-[13px] text-muted">
                    {subOrgs.length} sub-organisations operating under Selah Enterprise.
                  </p>
                  <button className="inline-flex items-center gap-1.5 text-[12px] font-medium text-accent hover:text-accent/80">
                    <Building2 className="w-3.5 h-3.5" />
                    Add sub-organisation
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {subOrgs.map((org) => {
                    const Icon = orgTypeIcon[org.type];
                    return (
                      <div key={org.name} className="card card-interactive p-5">
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-9 h-9 rounded-lg bg-accent-soft border border-accent/15 flex items-center justify-center text-accent">
                            <Icon className="w-4 h-4" />
                          </div>
                          {orgTypePill(org.type)}
                        </div>
                        <h3 className="text-[14px] font-semibold tracking-tight mb-0.5">{org.name}</h3>
                        <p className="text-[12px] text-muted mb-4">{org.city}</p>

                        <div className="grid grid-cols-2 gap-3 mb-4 pt-3 border-t border-border">
                          <div>
                            <p className="text-[11px] text-muted">Artists</p>
                            <p className="text-[15px] font-semibold tracking-tight">{org.artists}</p>
                          </div>
                          <div>
                            <p className="text-[11px] text-muted capitalize">{org.catalogueLabel}</p>
                            <p className="text-[15px] font-semibold tracking-tight">{org.catalogue}</p>
                          </div>
                        </div>

                        <button className="inline-flex items-center gap-1 text-[12px] font-medium text-accent hover:text-accent/80">
                          View workspace
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }

          if (activeTab === "Rosters") {
            return (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-[13px] text-muted">Aggregated artist rosters across all sub-organisations.</p>
                  <div className="flex items-center gap-2">
                    <select className="px-3 py-1.5 rounded-md border border-border bg-background text-[12px] focus:outline-none">
                      <option>All organisations</option>
                      {subOrgs.map((o) => (
                        <option key={o.name}>{o.name}</option>
                      ))}
                    </select>
                    <select className="px-3 py-1.5 rounded-md border border-border bg-background text-[12px] focus:outline-none">
                      <option>All tiers</option>
                      <option>Featured</option>
                      <option>Active</option>
                      <option>Catalogue</option>
                    </select>
                  </div>
                </div>

                <div className="card overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border bg-surface">
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Artist</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Parent organisation</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Roster tier</th>
                          <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Active releases</th>
                          <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Catalogue items</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Account manager</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rosterRows.map((row, i) => (
                          <tr key={i} className="border-b border-border last:border-b-0 hover:bg-surface/50 transition-colors">
                            <td className="px-4 py-3 text-[13px] font-medium">{row.artist}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{row.org}</td>
                            <td className="px-4 py-3">{tierBadge(row.tier)}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle text-right">{row.releases}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle text-right">{row.catalogue}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{row.manager}</td>
                            <td className="px-4 py-3"><StatusBadge status={row.status} /></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          }

          if (activeTab === "Permissions") {
            return (
              <div className="space-y-6">
                <div>
                  <h2 className="text-[14px] font-semibold mb-3">Permission roles</h2>
                  <div className="grid grid-cols-4 gap-4">
                    {rolesInfo.map((role) => {
                      const Icon = role.icon;
                      return (
                        <div key={role.name} className="card p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="w-8 h-8 rounded-lg bg-secondary-soft border border-secondary/15 flex items-center justify-center text-secondary">
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-[11px] text-muted">{role.scopeLabel}</span>
                          </div>
                          <h3 className="text-[13px] font-semibold mb-1">{role.name}</h3>
                          <p className="text-[12px] text-muted leading-relaxed">{role.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-[14px] font-semibold">Team members</h2>
                    <button className="inline-flex items-center gap-1.5 text-[12px] font-medium text-accent hover:text-accent/80">
                      <Users className="w-3.5 h-3.5" />
                      Invite member
                    </button>
                  </div>
                  <div className="card overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-border bg-surface">
                            <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Member</th>
                            <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Email</th>
                            <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Role</th>
                            <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Scope</th>
                            <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Last active</th>
                            <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {teamMembers.map((m, i) => (
                            <tr key={i} className="border-b border-border last:border-b-0 hover:bg-surface/50 transition-colors">
                              <td className="px-4 py-3 text-[13px] font-medium">{m.name}</td>
                              <td className="px-4 py-3 text-[13px] text-subtle font-mono text-[12px]">{m.email}</td>
                              <td className="px-4 py-3 text-[13px] text-subtle">{m.role}</td>
                              <td className="px-4 py-3 text-[13px] text-subtle">{m.scope}</td>
                              <td className="px-4 py-3 text-[13px] text-subtle">{m.lastActive}</td>
                              <td className="px-4 py-3"><StatusBadge status={m.status} /></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          if (activeTab === "Catalogue Administration") {
            const topOrgs = subOrgs.slice(0, 6);
            return (
              <div className="space-y-6">
                <div className="grid grid-cols-5 gap-4">
                  {catalogueStatusCounts.map((s) => {
                    const dot =
                      s.tone === "positive"
                        ? "bg-positive"
                        : s.tone === "info"
                        ? "bg-accent"
                        : s.tone === "warning"
                        ? "bg-warning"
                        : s.tone === "negative"
                        ? "bg-negative"
                        : "bg-muted";
                    return (
                      <div key={s.label} className="card p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                          <p className="text-[12px] text-muted font-medium">{s.label}</p>
                        </div>
                        <p className="text-[20px] font-semibold tracking-tight">{s.count}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="card p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-[14px] font-semibold">Catalogue health by organisation</h2>
                    <span className="text-[11px] text-muted">Top 6 organisations</span>
                  </div>
                  <div className="space-y-3">
                    {topOrgs.map((org) => (
                      <div key={org.name} className="grid grid-cols-12 items-center gap-3">
                        <div className="col-span-3">
                          <p className="text-[13px] font-medium">{org.name}</p>
                          <p className="text-[11px] text-muted">{org.type}</p>
                        </div>
                        <div className="col-span-8">
                          <div className="h-2 rounded-full bg-surface-2 overflow-hidden">
                            <div
                              className="h-full brand-gradient"
                              style={{ width: `${org.health}%` }}
                            />
                          </div>
                        </div>
                        <div className="col-span-1 text-right">
                          <span className="text-[12px] font-semibold tracking-tight">{org.health}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-[14px] font-semibold">Items needing attention</h2>
                    <div className="flex items-center gap-1.5 text-[12px] text-muted">
                      <AlertTriangle className="w-3.5 h-3.5 text-warning" />
                      <span>{catalogueIssues.length} items flagged</span>
                    </div>
                  </div>
                  <div className="card overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-border bg-surface">
                            <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Item</th>
                            <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Organisation</th>
                            <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Issue</th>
                            <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Severity</th>
                            <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {catalogueIssues.map((row, i) => (
                            <tr key={i} className="border-b border-border last:border-b-0 hover:bg-surface/50 transition-colors">
                              <td className="px-4 py-3 text-[13px] font-medium">{row.item}</td>
                              <td className="px-4 py-3 text-[13px] text-subtle">{row.org}</td>
                              <td className="px-4 py-3 text-[13px] text-subtle">{row.issue}</td>
                              <td className="px-4 py-3">{severityBadge(row.severity)}</td>
                              <td className="px-4 py-3">
                                <button className="inline-flex items-center gap-1 text-[12px] font-medium text-accent hover:text-accent/80">
                                  {row.action}
                                  <ChevronRight className="w-3 h-3" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          if (activeTab === "Reporting") {
            return (
              <div className="space-y-6">
                <div className="grid grid-cols-4 gap-4">
                  {reportingCards.map((c) => {
                    const Icon = c.icon;
                    return (
                      <div key={c.title} className="card card-interactive p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-8 h-8 rounded-lg bg-accent-soft border border-accent/15 flex items-center justify-center text-accent">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-[11px] text-muted">{c.count} recent</span>
                        </div>
                        <h3 className="text-[13px] font-semibold mb-1">{c.title}</h3>
                        <p className="text-[11px] text-muted">Last generated {c.lastGenerated}</p>
                        <button className="mt-3 inline-flex items-center gap-1 text-[12px] font-medium text-accent hover:text-accent/80">
                          <Download className="w-3.5 h-3.5" />
                          Download latest
                        </button>
                      </div>
                    );
                  })}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-[14px] font-semibold">Recent reports</h2>
                    <button className="inline-flex items-center gap-1.5 text-[12px] font-medium text-accent hover:text-accent/80">
                      <FileText className="w-3.5 h-3.5" />
                      Generate report
                    </button>
                  </div>
                  <div className="card overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-border bg-surface">
                            <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Report</th>
                            <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Organisation</th>
                            <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Period</th>
                            <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Generated</th>
                            <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Format</th>
                            <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {reportRows.map((row, i) => (
                            <tr key={i} className="border-b border-border last:border-b-0 hover:bg-surface/50 transition-colors">
                              <td className="px-4 py-3 text-[13px] font-medium">{row.report}</td>
                              <td className="px-4 py-3 text-[13px] text-subtle">{row.org}</td>
                              <td className="px-4 py-3 text-[13px] text-subtle">{row.period}</td>
                              <td className="px-4 py-3 text-[13px] text-subtle">{row.generated}</td>
                              <td className="px-4 py-3">
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-surface-2 text-subtle border border-border font-mono">
                                  {row.format}
                                </span>
                              </td>
                              <td className="px-4 py-3 text-right">
                                <button className="inline-flex items-center gap-1 text-[12px] font-medium text-accent hover:text-accent/80">
                                  <Download className="w-3.5 h-3.5" />
                                  Download
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          if (activeTab === "API Access") {
            return (
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="card p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg bg-accent-soft border border-accent/15 flex items-center justify-center text-accent">
                        <Key className="w-4 h-4" />
                      </div>
                      <StatusBadge status="Active" />
                    </div>
                    <h3 className="text-[14px] font-semibold mb-1">API Keys</h3>
                    <p className="text-[12px] text-muted leading-relaxed mb-3">
                      Issue, rotate, and revoke programmatic access keys per integration and scope.
                    </p>
                    <p className="text-[11px] text-muted">{apiKeys.length} keys issued</p>
                  </div>
                  <div className="card p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg bg-secondary-soft border border-secondary/15 flex items-center justify-center text-secondary">
                        <Webhook className="w-4 h-4" />
                      </div>
                      <StatusBadge status="Active" />
                    </div>
                    <h3 className="text-[14px] font-semibold mb-1">Webhooks</h3>
                    <p className="text-[12px] text-muted leading-relaxed mb-3">
                      Receive real-time notifications for release, royalty, and catalogue events.
                    </p>
                    <p className="text-[11px] text-muted">{webhookSubs.length} active subscriptions</p>
                  </div>
                  <div className="card p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg bg-accent-soft border border-accent/15 flex items-center justify-center text-accent">
                        <Plug className="w-4 h-4" />
                      </div>
                      <StatusBadge status="Active" />
                    </div>
                    <h3 className="text-[14px] font-semibold mb-1">Integration Endpoints</h3>
                    <p className="text-[12px] text-muted leading-relaxed mb-3">
                      Production, sandbox, and reporting endpoints for downstream systems.
                    </p>
                    <p className="text-[11px] text-muted">{integrationEndpoints.length} endpoints available</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-[14px] font-semibold">API keys</h2>
                    <button className="inline-flex items-center gap-1.5 text-[12px] font-medium text-accent hover:text-accent/80">
                      <Key className="w-3.5 h-3.5" />
                      Issue new key
                    </button>
                  </div>
                  <div className="card overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-border bg-surface">
                            <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Name</th>
                            <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Scope</th>
                            <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Created</th>
                            <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Last used</th>
                            <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {apiKeys.map((k, i) => (
                            <tr key={i} className="border-b border-border last:border-b-0 hover:bg-surface/50 transition-colors">
                              <td className="px-4 py-3 text-[13px] font-medium">{k.name}</td>
                              <td className="px-4 py-3 text-[13px] text-subtle font-mono text-[12px]">{k.scope}</td>
                              <td className="px-4 py-3 text-[13px] text-subtle">{k.created}</td>
                              <td className="px-4 py-3 text-[13px] text-subtle">{k.lastUsed}</td>
                              <td className="px-4 py-3"><StatusBadge status={k.status} /></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-[14px] font-semibold">Webhook subscriptions</h2>
                    <button className="inline-flex items-center gap-1.5 text-[12px] font-medium text-accent hover:text-accent/80">
                      <Webhook className="w-3.5 h-3.5" />
                      Add subscription
                    </button>
                  </div>
                  <div className="card overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-border bg-surface">
                            <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Event</th>
                            <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Endpoint</th>
                            <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Last delivery</th>
                            <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {webhookSubs.map((w, i) => (
                            <tr key={i} className="border-b border-border last:border-b-0 hover:bg-surface/50 transition-colors">
                              <td className="px-4 py-3 text-[13px] font-medium font-mono text-[12px]">{w.event}</td>
                              <td className="px-4 py-3 text-[13px] text-subtle font-mono text-[12px]">{w.endpoint}</td>
                              <td className="px-4 py-3 text-[13px] text-subtle">{w.lastDelivery}</td>
                              <td className="px-4 py-3"><StatusBadge status={w.status} /></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="card p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-[14px] font-semibold">Integration endpoints</h2>
                    <Settings className="w-4 h-4 text-muted" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {integrationEndpoints.map((e) => (
                      <div key={e.name} className="p-3 rounded-lg border border-border bg-surface/40">
                        <div className="flex items-center gap-1.5 mb-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-positive" />
                          <p className="text-[12px] font-semibold">{e.name}</p>
                        </div>
                        <p className="text-[11px] font-mono text-subtle truncate">{e.url}</p>
                        <p className="text-[11px] text-muted mt-1">Region: {e.region}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          }

          return null;
        }}
      </Tabs>
    </div>
  );
}
