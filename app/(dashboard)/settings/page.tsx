"use client";

import { useState } from "react";
import { StatusBadge } from "@/components/status-badge";
import { Tabs } from "@/components/tabs";

const usersData = [
  { user: "CMG Admin", email: "admin@cmg.com", role: "Owner", status: "Active", lastActive: "Today" },
  { user: "Release Manager", email: "releases@cmg.com", role: "Label Manager", status: "Active", lastActive: "Today" },
  { user: "Rights Team", email: "rights@cmg.com", role: "Rights Manager", status: "Active", lastActive: "Yesterday" },
  { user: "Finance", email: "finance@cmg.com", role: "Finance", status: "Active", lastActive: "2 days ago" },
  { user: "Campaign Lead", email: "campaigns@cmg.com", role: "Campaign Manager", status: "Active", lastActive: "Today" },
];

const availableRoles = [
  "Owner",
  "Admin",
  "Label Manager",
  "Campaign Manager",
  "Rights Manager",
  "Finance",
  "Artist",
  "Publisher",
  "Viewer",
];

const auditLog = [
  { timestamp: "2026-05-27 10:30", user: "CMG Admin", action: "Release updated", detail: '"Light of the World" metadata modified' },
  { timestamp: "2026-05-27 09:15", user: "Rights Team", action: "Split confirmed", detail: '"Come Alive" songwriter splits approved' },
  { timestamp: "2026-05-26 16:45", user: "Release Manager", action: "Release submitted", detail: '"All Things New" submitted for review' },
  { timestamp: "2026-05-26 14:20", user: "Campaign Lead", action: "Campaign created", detail: '"Come Alive" launch campaign' },
  { timestamp: "2026-05-26 11:00", user: "Finance", action: "Statement generated", detail: "Q1 2026 royalty statements" },
];

export default function SettingsPage() {
  const [workspaceName, setWorkspaceName] = useState("Christian Music Group");
  const [contactEmail, setContactEmail] = useState("admin@cmg.com");
  const [currency, setCurrency] = useState("AUD");
  const [territory, setTerritory] = useState("Worldwide");
  const [timezone, setTimezone] = useState("Australia/Sydney");
  const [statementFreq, setStatementFreq] = useState("Quarterly");

  const inputClass =
    "w-full px-3 py-2 text-[13px] border border-border rounded-lg bg-white focus:outline-none focus:border-[rgb(var(--border-strong))] transition-colors";
  const selectClass =
    "w-full px-3 py-2 text-[13px] border border-border rounded-lg bg-white focus:outline-none focus:border-[rgb(var(--border-strong))] transition-colors appearance-none";
  const labelClass = "block text-[12px] font-medium text-muted mb-1.5";

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-[22px] font-semibold tracking-tight">Settings</h1>
        <p className="text-[13px] text-muted mt-1">
          Workspace configuration, team permissions, payment settings, and integration controls for your Selah workspace.
        </p>
      </div>

      <Tabs tabs={["Workspace", "Users & Roles", "Permissions", "Notifications", "Payments", "DSP Delivery", "Publishing", "YouTube", "Brand", "Audit Log"]}>
        {(activeTab) => (
          <>
            {activeTab === "Workspace" && (
              <div className="card p-5">
                <h2 className="text-[14px] font-semibold mb-4">Workspace Settings</h2>
                <div className="grid grid-cols-2 gap-4 max-w-2xl">
                  <div>
                    <label className={labelClass}>Workspace name</label>
                    <input
                      type="text"
                      value={workspaceName}
                      onChange={(e) => setWorkspaceName(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Primary contact email</label>
                    <input
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Default currency</label>
                    <select value={currency} onChange={(e) => setCurrency(e.target.value)} className={selectClass}>
                      <option>AUD</option>
                      <option>USD</option>
                      <option>GBP</option>
                      <option>EUR</option>
                      <option>NZD</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Default territory</label>
                    <select value={territory} onChange={(e) => setTerritory(e.target.value)} className={selectClass}>
                      <option>Worldwide</option>
                      <option>AU</option>
                      <option>US</option>
                      <option>UK</option>
                      <option>NZ</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Timezone</label>
                    <select value={timezone} onChange={(e) => setTimezone(e.target.value)} className={selectClass}>
                      <option>Australia/Sydney</option>
                      <option>America/New_York</option>
                      <option>America/Los_Angeles</option>
                      <option>Europe/London</option>
                      <option>Pacific/Auckland</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Statement frequency</label>
                    <select value={statementFreq} onChange={(e) => setStatementFreq(e.target.value)} className={selectClass}>
                      <option>Monthly</option>
                      <option>Quarterly</option>
                      <option>Semi-Annually</option>
                      <option>Annually</option>
                    </select>
                  </div>
                </div>
                <div className="mt-5">
                  <button className="btn-primary">Save Changes</button>
                </div>
              </div>
            )}

            {activeTab === "Users & Roles" && (
              <div className="space-y-6">
                <div className="card p-5">
                  <h2 className="text-[14px] font-semibold mb-4">Users</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-[13px]">
                      <thead>
                        <tr className="border-b border-border text-left text-muted">
                          <th className="pb-2 font-medium">User</th>
                          <th className="pb-2 font-medium">Email</th>
                          <th className="pb-2 font-medium">Role</th>
                          <th className="pb-2 font-medium">Status</th>
                          <th className="pb-2 font-medium">Last Active</th>
                        </tr>
                      </thead>
                      <tbody>
                        {usersData.map((u) => (
                          <tr key={u.email} className="border-b border-border last:border-0">
                            <td className="py-2.5 font-medium">{u.user}</td>
                            <td className="py-2.5 text-muted">{u.email}</td>
                            <td className="py-2.5 text-muted">{u.role}</td>
                            <td className="py-2.5"><StatusBadge status={u.status} /></td>
                            <td className="py-2.5 text-muted">{u.lastActive}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card p-5">
                  <h2 className="text-[14px] font-semibold mb-4">Available Roles</h2>
                  <div className="flex flex-wrap gap-2">
                    {availableRoles.map((role) => (
                      <span key={role} className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[rgb(var(--surface))] text-[12px] font-medium">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Permissions" && (
              <div className="card p-5">
                <h2 className="text-[14px] font-semibold mb-4">Permission Settings</h2>
                <div className="space-y-0 max-w-2xl">
                  {[
                    { label: "Release creation", value: "Label Manager, Admin, Owner" },
                    { label: "Rights approval", value: "Rights Manager, Admin, Owner" },
                    { label: "Financial access", value: "Finance, Admin, Owner" },
                    { label: "Campaign management", value: "Campaign Manager, Admin, Owner" },
                    { label: "User management", value: "Admin, Owner" },
                    { label: "API access", value: "Admin, Owner" },
                    { label: "Catalogue export", value: "All roles" },
                  ].map((perm, i, arr) => (
                    <div key={perm.label} className={`flex items-center justify-between py-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                      <span className="text-[13px]">{perm.label}</span>
                      <span className="text-[13px] text-muted">{perm.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "Notifications" && (
              <div className="card p-5">
                <h2 className="text-[14px] font-semibold mb-4">Notification Preferences</h2>
                <div className="space-y-0 max-w-2xl">
                  {[
                    { label: "Release status changes", enabled: true },
                    { label: "Rights issues and conflicts", enabled: true },
                    { label: "Royalty statement ready", enabled: true },
                    { label: "Campaign milestones", enabled: true },
                    { label: "New partner applications", enabled: false },
                    { label: "YouTube Content ID alerts", enabled: true },
                    { label: "Weekly performance digest", enabled: false },
                  ].map((notif, i, arr) => (
                    <div key={notif.label} className={`flex items-center justify-between py-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                      <span className="text-[13px]">{notif.label}</span>
                      <div className={`w-9 h-5 rounded-full relative cursor-pointer transition-colors ${notif.enabled ? "bg-[rgb(var(--foreground))]" : "bg-[rgb(var(--border))]"}`}>
                        <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${notif.enabled ? "left-[18px]" : "left-0.5"}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "Payments" && (
              <div className="card p-5">
                <h2 className="text-[14px] font-semibold mb-4">Payment Settings</h2>
                <div className="space-y-0 max-w-2xl">
                  {[
                    { label: "Payment method", value: "Bank Transfer (AUD)" },
                    { label: "Minimum payout threshold", value: "A$50.00" },
                    { label: "Payment schedule", value: "Quarterly" },
                    { label: "Tax withholding", value: "Configured" },
                    { label: "Currency conversion", value: "Auto (market rate)" },
                    { label: "Statement format", value: "PDF + CSV" },
                  ].map((setting, i, arr) => (
                    <div key={setting.label} className={`flex items-center justify-between py-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                      <span className="text-[13px]">{setting.label}</span>
                      <span className="text-[13px] text-muted">{setting.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "DSP Delivery" && (
              <div className="card p-5">
                <h2 className="text-[14px] font-semibold mb-4">DSP Delivery Settings</h2>
                <div className="space-y-0 max-w-2xl">
                  {[
                    { label: "Spotify", enabled: true },
                    { label: "Apple Music", enabled: true },
                    { label: "YouTube Music", enabled: true },
                    { label: "Amazon Music", enabled: true },
                    { label: "TikTok / resso", enabled: true },
                    { label: "Deezer", enabled: true },
                    { label: "Tidal", enabled: false },
                    { label: "Pandora", enabled: true },
                  ].map((dsp, i, arr) => (
                    <div key={dsp.label} className={`flex items-center justify-between py-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                      <span className="text-[13px]">{dsp.label}</span>
                      <div className={`w-9 h-5 rounded-full relative cursor-pointer transition-colors ${dsp.enabled ? "bg-[rgb(var(--foreground))]" : "bg-[rgb(var(--border))]"}`}>
                        <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${dsp.enabled ? "left-[18px]" : "left-0.5"}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "Publishing" && (
              <div className="card p-5">
                <h2 className="text-[14px] font-semibold mb-4">Publishing Settings</h2>
                <div className="space-y-0 max-w-2xl">
                  {[
                    { label: "Default publisher", value: "CMG Publishing" },
                    { label: "PRO affiliation", value: "APRA AMCOS" },
                    { label: "Mechanical licensing", value: "Auto-register" },
                    { label: "Sync licensing", value: "Opt-in" },
                    { label: "CCLI registration", value: "Enabled" },
                    { label: "International sub-publishing", value: "Active" },
                  ].map((setting, i, arr) => (
                    <div key={setting.label} className={`flex items-center justify-between py-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                      <span className="text-[13px]">{setting.label}</span>
                      <span className="text-[13px] text-muted">{setting.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "YouTube" && (
              <div className="card p-5">
                <h2 className="text-[14px] font-semibold mb-4">YouTube Settings</h2>
                <div className="space-y-0 max-w-2xl">
                  {[
                    { label: "Content ID claiming", value: "Enabled" },
                    { label: "Default claim policy", value: "Whitelist Partner Churches" },
                    { label: "Manual claim review", value: "Disabled" },
                    { label: "Conflict auto-resolution", value: "Off" },
                    { label: "Art Track generation", value: "Enabled" },
                    { label: "Shorts claiming", value: "Enabled" },
                  ].map((setting, i, arr) => (
                    <div key={setting.label} className={`flex items-center justify-between py-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                      <span className="text-[13px]">{setting.label}</span>
                      <span className="text-[13px] text-muted">{setting.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "Brand" && (
              <div className="card p-5">
                <h2 className="text-[14px] font-semibold mb-4">Brand Settings</h2>
                <div className="space-y-0 max-w-2xl">
                  {[
                    { label: "Organisation name", value: "Christian Music Group" },
                    { label: "Display name", value: "Selah by CMG" },
                    { label: "Primary color", value: "#4338CA" },
                    { label: "Logo", value: "Uploaded" },
                    { label: "Favicon", value: "Uploaded" },
                    { label: "Custom domain", value: "selah.cmg.com" },
                  ].map((setting, i, arr) => (
                    <div key={setting.label} className={`flex items-center justify-between py-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                      <span className="text-[13px]">{setting.label}</span>
                      <span className="text-[13px] text-muted">{setting.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "Audit Log" && (
              <div className="card p-5">
                <h2 className="text-[14px] font-semibold mb-4">Recent Activity</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-[13px]">
                    <thead>
                      <tr className="border-b border-border text-left text-muted">
                        <th className="pb-2 font-medium">Timestamp</th>
                        <th className="pb-2 font-medium">User</th>
                        <th className="pb-2 font-medium">Action</th>
                        <th className="pb-2 font-medium">Detail</th>
                      </tr>
                    </thead>
                    <tbody>
                      {auditLog.map((entry, i) => (
                        <tr key={i} className="border-b border-border last:border-0">
                          <td className="py-2.5 text-muted whitespace-nowrap">{entry.timestamp}</td>
                          <td className="py-2.5 font-medium">{entry.user}</td>
                          <td className="py-2.5 text-muted">{entry.action}</td>
                          <td className="py-2.5 text-muted">{entry.detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}
      </Tabs>
    </div>
  );
}
