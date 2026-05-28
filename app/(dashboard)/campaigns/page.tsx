"use client";

import { StatCard } from "@/components/stat-card";
import { StatusBadge } from "@/components/status-badge";
import { Tabs } from "@/components/tabs";
import { campaignTimeline } from "@/lib/mock-data";

const doneTasks = [
  "Distribution delivery confirmed",
  "Metadata locked",
  "Assets approved",
  "Chord chart prepared",
  "Worship leader one-sheet created",
];

const inProgressTasks = [
  "Playlist pitch submitted",
  "Scripture-based content plan",
  "Acoustic worship video editing",
  "CCLI pathway confirmation",
];

const todoTasks = [
  "Church network outreach",
  "Christian radio contacts",
  "Short-form clips (0/10 created)",
  "Devotional caption set",
  "Sunday setlist pitch",
  "Campaign report",
];

const churchOutreach = [
  { network: "Worship Leader Network", contacted: 240, responses: 86, downloads: 42, setlistAdds: 18, status: "Active" },
  { network: "Church Collective AU", contacted: 120, responses: 34, downloads: 22, setlistAdds: 8, status: "Active" },
  { network: "Ministry Partners US", contacted: 180, responses: 52, downloads: 28, setlistAdds: 12, status: "Scheduled" },
];

const christianTasks = [
  { task: "Prepare worship leader one-sheet", status: "Complete" },
  { task: "Prepare scripture-based content plan", status: "In Progress" },
  { task: "Create devotional caption set", status: "In Progress" },
  { task: "Send to church network", status: "Upcoming" },
  { task: "Create acoustic worship video", status: "In Progress" },
  { task: "Prepare chord chart", status: "Complete" },
  { task: "Confirm CCLI pathway", status: "In Progress" },
  { task: "Identify Sunday setlist potential", status: "Complete" },
];

const budgetRows = [
  { category: "Playlist Pitching", allocated: "A$800", spent: "A$600", remaining: "A$200" },
  { category: "Church Outreach", allocated: "A$600", spent: "A$200", remaining: "A$400" },
  { category: "Content Production", allocated: "A$1,200", spent: "A$800", remaining: "A$400" },
  { category: "YouTube Ads", allocated: "A$800", spent: "A$400", remaining: "A$400" },
  { category: "Christian Radio", allocated: "A$400", spent: "A$0", remaining: "A$400" },
  { category: "PR", allocated: "A$400", spent: "A$100", remaining: "A$300" },
];

const budgetTotal = { category: "Total", allocated: "A$4,200", spent: "A$2,100", remaining: "A$2,100" };

const tabList = ["Timeline", "Tasks", "Playlist Pitching", "Church Outreach", "YouTube", "Budget", "Results"];

export default function CampaignsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-[22px] font-semibold tracking-tight">Selah Campaigns</h1>
        <p className="text-[13px] text-muted mt-1">
          Campaigns built for Christian discovery. Plan releases across DSPs, YouTube, Christian media, social platforms, radio, churches, worship leaders, and ministry networks.
        </p>
      </div>

      {/* Campaign overview card */}
      <div className="card p-5">
        <h2 className="text-[14px] font-semibold mb-4">Campaign Overview</h2>
        <div className="grid grid-cols-4 gap-x-8 gap-y-3">
          <div>
            <p className="text-[12px] font-medium text-muted mb-0.5">Campaign</p>
            <p className="text-[13px] font-medium">&ldquo;Come Alive&rdquo; Launch Campaign</p>
          </div>
          <div>
            <p className="text-[12px] font-medium text-muted mb-0.5">Artist</p>
            <p className="text-[13px]">Open Heaven Worship</p>
          </div>
          <div>
            <p className="text-[12px] font-medium text-muted mb-0.5">Release Date</p>
            <p className="text-[13px]">2026-03-08</p>
          </div>
          <div>
            <p className="text-[12px] font-medium text-muted mb-0.5">Service Tier</p>
            <p className="text-[13px]">Label Services</p>
          </div>
          <div>
            <p className="text-[12px] font-medium text-muted mb-0.5">Budget</p>
            <p className="text-[13px] font-medium">A$4,200</p>
          </div>
          <div>
            <p className="text-[12px] font-medium text-muted mb-0.5">Status</p>
            <StatusBadge status="In Progress" />
          </div>
          <div>
            <p className="text-[12px] font-medium text-muted mb-0.5">Objective</p>
            <p className="text-[13px]">Worship adoption</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs tabs={tabList}>
        {(activeTab) => {
          if (activeTab === "Timeline") {
            return (
              <div className="card p-5">
                <div className="space-y-0">
                  {campaignTimeline.map((step, i) => {
                    const isComplete = step.status === "Complete";
                    const isInProgress = step.status === "In Progress";
                    const isLast = i === campaignTimeline.length - 1;

                    return (
                      <div key={i} className="flex gap-4">
                        {/* Timeline column */}
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-3.5 h-3.5 rounded-full border-2 shrink-0 ${
                              isComplete
                                ? "bg-foreground border-foreground"
                                : isInProgress
                                ? "bg-background border-foreground"
                                : "bg-background border-border-strong border-dashed"
                            }`}
                          />
                          {!isLast && (
                            <div
                              className={`w-px flex-1 min-h-[32px] ${
                                isComplete ? "bg-foreground" : "bg-border"
                              }`}
                            />
                          )}
                        </div>

                        {/* Content */}
                        <div className="pb-6">
                          <p className="text-[12px] text-muted font-medium">{step.week}</p>
                          <p className="text-[13px] font-medium mt-0.5">{step.task}</p>
                          <div className="mt-1">
                            <StatusBadge status={step.status} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }

          if (activeTab === "Tasks") {
            return (
              <div className="grid grid-cols-3 gap-4">
                {/* To Do */}
                <div className="card p-4">
                  <h3 className="text-[13px] font-semibold mb-3 pb-2 border-b border-border">To Do</h3>
                  <div className="space-y-2">
                    {todoTasks.map((task, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg border border-border bg-surface/50 text-[13px]"
                      >
                        {task}
                      </div>
                    ))}
                  </div>
                </div>

                {/* In Progress */}
                <div className="card p-4">
                  <h3 className="text-[13px] font-semibold mb-3 pb-2 border-b border-border">In Progress</h3>
                  <div className="space-y-2">
                    {inProgressTasks.map((task, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg border border-border bg-surface/50 text-[13px]"
                      >
                        {task}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Done */}
                <div className="card p-4">
                  <h3 className="text-[13px] font-semibold mb-3 pb-2 border-b border-border">Done</h3>
                  <div className="space-y-2">
                    {doneTasks.map((task, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg border border-border bg-surface/50 text-[13px] text-subtle"
                      >
                        {task}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          }

          if (activeTab === "Playlist Pitching") {
            return (
              <div className="card p-5">
                <p className="text-[13px] text-muted">Playlist pitching data and submissions will appear here.</p>
              </div>
            );
          }

          if (activeTab === "Church Outreach") {
            return (
              <div className="space-y-6">
                {/* Church outreach table */}
                <div className="card overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border bg-surface">
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Network</th>
                          <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Churches Contacted</th>
                          <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Responses</th>
                          <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Downloads</th>
                          <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Setlist Adds</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {churchOutreach.map((row, i) => (
                          <tr
                            key={i}
                            className="border-b border-border last:border-b-0 hover:bg-surface/50 transition-colors"
                          >
                            <td className="px-4 py-3 text-[13px] font-medium">{row.network}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle text-right">{row.contacted}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle text-right">{row.responses}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle text-right">{row.downloads}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle text-right">{row.setlistAdds}</td>
                            <td className="px-4 py-3">
                              <StatusBadge status={row.status} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Christian-specific task list */}
                <div className="card p-5">
                  <h3 className="text-[14px] font-semibold mb-4">Christian-Specific Tasks</h3>
                  <div className="space-y-3">
                    {christianTasks.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-2 border-b border-border last:border-b-0"
                      >
                        <span className="text-[13px]">{item.task}</span>
                        <StatusBadge status={item.status} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          }

          if (activeTab === "YouTube") {
            return (
              <div className="card p-5">
                <p className="text-[13px] text-muted">YouTube campaign data and analytics will appear here.</p>
              </div>
            );
          }

          if (activeTab === "Budget") {
            return (
              <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-surface">
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Category</th>
                        <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Allocated</th>
                        <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Spent</th>
                        <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Remaining</th>
                      </tr>
                    </thead>
                    <tbody>
                      {budgetRows.map((row, i) => (
                        <tr
                          key={i}
                          className="border-b border-border hover:bg-surface/50 transition-colors"
                        >
                          <td className="px-4 py-3 text-[13px]">{row.category}</td>
                          <td className="px-4 py-3 text-[13px] text-right text-subtle">{row.allocated}</td>
                          <td className="px-4 py-3 text-[13px] text-right text-subtle">{row.spent}</td>
                          <td className="px-4 py-3 text-[13px] text-right">{row.remaining}</td>
                        </tr>
                      ))}
                      <tr className="bg-surface">
                        <td className="px-4 py-3 text-[13px] font-semibold">{budgetTotal.category}</td>
                        <td className="px-4 py-3 text-[13px] text-right font-semibold">{budgetTotal.allocated}</td>
                        <td className="px-4 py-3 text-[13px] text-right font-semibold">{budgetTotal.spent}</td>
                        <td className="px-4 py-3 text-[13px] text-right font-semibold">{budgetTotal.remaining}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            );
          }

          if (activeTab === "Results") {
            return (
              <div className="card p-5">
                <p className="text-[13px] text-muted">Campaign results and performance metrics will appear here.</p>
              </div>
            );
          }

          return null;
        }}
      </Tabs>
    </div>
  );
}
