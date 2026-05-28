"use client";

import { StatCard } from "@/components/stat-card";
import { StatusBadge } from "@/components/status-badge";
import { Tabs } from "@/components/tabs";
import { youtubeVideos } from "@/lib/mock-data";
import { formatCompact } from "@/lib/utils";

const contentIdData = [
  { asset: "Living Water", type: "Sound Recording", totalClaims: 42, active: 38, released: 2, disputed: 2 },
  { asset: "Kingdom Come", type: "Sound Recording", totalClaims: 128, active: 124, released: 4, disputed: 0 },
  { asset: "Come Alive", type: "Sound Recording", totalClaims: 86, active: 82, released: 3, disputed: 1 },
  { asset: "House of Prayer", type: "Sound Recording", totalClaims: 156, active: 152, released: 4, disputed: 0 },
  { asset: "Mercy Is Near", type: "Sound Recording", totalClaims: 34, active: 32, released: 1, disputed: 1 },
];

const channelsData = [
  { channel: "Grace Harbor", subscribers: 18400, monthlyViews: 482000, videos: 24, monetization: "Active", status: "Managed" },
  { channel: "New City Worship", subscribers: 42600, monthlyViews: 1240000, videos: 48, monetization: "Active", status: "Managed" },
  { channel: "Open Heaven Worship", subscribers: 36200, monthlyViews: 890000, videos: 36, monetization: "Active", status: "Managed" },
  { channel: "Mercy Collective", subscribers: 12800, monthlyViews: 320000, videos: 18, monetization: "Active", status: "Managed" },
  { channel: "Kingdom House Music", subscribers: 68400, monthlyViews: 2100000, videos: 86, monetization: "Active", status: "Managed" },
];

const services = [
  "Channel optimization",
  "Content ID claiming",
  "Rights conflict resolution",
  "Video release strategy",
  "Short-form strategy",
  "Audience development",
  "Asset reporting",
];

export default function YouTubePage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-[22px] font-semibold tracking-tight">YouTube &amp; Video Monetization</h1>
        <p className="text-[13px] text-muted mt-1">
          Channel management, Content ID claims, and video revenue tracking.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <StatCard label="Managed Channels" value="8" />
        <StatCard label="Monthly Views" value="5.3M" />
        <StatCard label="Claimed Videos" value="318" />
        <StatCard label="Monetized Claims" value="284" />
        <StatCard label="Conflicts Pending" value="2" />
        <StatCard label="Estimated YouTube Revenue" value="A$29,060" />
        <StatCard label="Shorts Views" value="1.8M" />
        <StatCard label="Subscribers Gained" value="12,400" />
      </div>

      <Tabs tabs={["Video Assets", "Content ID", "Monetization", "Channels", "Conflicts"]}>
        {(activeTab) => (
          <>
            {activeTab === "Video Assets" && (
              <div className="card p-5">
                <h2 className="text-[14px] font-semibold mb-4">Video Assets</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-[13px]">
                    <thead>
                      <tr className="border-b border-border text-left text-muted">
                        <th className="pb-2 font-medium">Video</th>
                        <th className="pb-2 font-medium">Channel</th>
                        <th className="pb-2 font-medium">Asset Type</th>
                        <th className="pb-2 font-medium">Claim Status</th>
                        <th className="pb-2 font-medium">Monetization</th>
                        <th className="pb-2 font-medium text-right">Views</th>
                        <th className="pb-2 font-medium text-right">Revenue</th>
                        <th className="pb-2 font-medium">Conflict Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {youtubeVideos.map((v) => (
                        <tr key={v.video} className="border-b border-border last:border-0">
                          <td className="py-2.5 font-medium">{v.video}</td>
                          <td className="py-2.5 text-muted">{v.channel}</td>
                          <td className="py-2.5 text-muted">{v.assetType}</td>
                          <td className="py-2.5"><StatusBadge status={v.claimStatus} /></td>
                          <td className="py-2.5"><StatusBadge status={v.monetization} /></td>
                          <td className="py-2.5 text-right text-muted">{formatCompact(v.views)}</td>
                          <td className="py-2.5 text-right text-muted">A${v.revenue.toLocaleString()}</td>
                          <td className="py-2.5"><StatusBadge status={v.conflictStatus} /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "Content ID" && (
              <div className="card p-5">
                <h2 className="text-[14px] font-semibold mb-4">Content ID Claiming Activity</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-[13px]">
                    <thead>
                      <tr className="border-b border-border text-left text-muted">
                        <th className="pb-2 font-medium">Asset</th>
                        <th className="pb-2 font-medium">Type</th>
                        <th className="pb-2 font-medium text-right">Total Claims</th>
                        <th className="pb-2 font-medium text-right">Active</th>
                        <th className="pb-2 font-medium text-right">Released</th>
                        <th className="pb-2 font-medium text-right">Disputed</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contentIdData.map((c) => (
                        <tr key={c.asset} className="border-b border-border last:border-0">
                          <td className="py-2.5 font-medium">{c.asset}</td>
                          <td className="py-2.5 text-muted">{c.type}</td>
                          <td className="py-2.5 text-right text-muted">{c.totalClaims}</td>
                          <td className="py-2.5 text-right text-muted">{c.active}</td>
                          <td className="py-2.5 text-right text-muted">{c.released}</td>
                          <td className="py-2.5 text-right text-muted">{c.disputed}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "Monetization" && (
              <div className="card p-5">
                <h2 className="text-[14px] font-semibold mb-4">Monetization Overview</h2>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="p-4 bg-[rgb(var(--surface))] rounded-lg">
                    <p className="text-[12px] text-muted mb-1">Total Monetized Claims</p>
                    <p className="text-[20px] font-semibold">284</p>
                  </div>
                  <div className="p-4 bg-[rgb(var(--surface))] rounded-lg">
                    <p className="text-[12px] text-muted mb-1">Monetization Rate</p>
                    <p className="text-[20px] font-semibold">89.3%</p>
                  </div>
                  <div className="p-4 bg-[rgb(var(--surface))] rounded-lg">
                    <p className="text-[12px] text-muted mb-1">Avg. Revenue per Claim</p>
                    <p className="text-[20px] font-semibold">A$102.32</p>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-[13px]">
                    <thead>
                      <tr className="border-b border-border text-left text-muted">
                        <th className="pb-2 font-medium">Video</th>
                        <th className="pb-2 font-medium">Monetization</th>
                        <th className="pb-2 font-medium text-right">Views</th>
                        <th className="pb-2 font-medium text-right">Revenue</th>
                        <th className="pb-2 font-medium text-right">RPM</th>
                      </tr>
                    </thead>
                    <tbody>
                      {youtubeVideos
                        .filter((v) => v.monetization === "Monetized")
                        .map((v) => (
                          <tr key={v.video} className="border-b border-border last:border-0">
                            <td className="py-2.5 font-medium">{v.video}</td>
                            <td className="py-2.5"><StatusBadge status={v.monetization} /></td>
                            <td className="py-2.5 text-right text-muted">{formatCompact(v.views)}</td>
                            <td className="py-2.5 text-right text-muted">A${v.revenue.toLocaleString()}</td>
                            <td className="py-2.5 text-right text-muted">
                              A${((v.revenue / v.views) * 1000).toFixed(2)}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "Channels" && (
              <div className="space-y-6">
                <div className="card p-5">
                  <h2 className="text-[14px] font-semibold mb-4">Managed Channels</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-[13px]">
                      <thead>
                        <tr className="border-b border-border text-left text-muted">
                          <th className="pb-2 font-medium">Channel</th>
                          <th className="pb-2 font-medium text-right">Subscribers</th>
                          <th className="pb-2 font-medium text-right">Monthly Views</th>
                          <th className="pb-2 font-medium text-right">Videos</th>
                          <th className="pb-2 font-medium">Monetization</th>
                          <th className="pb-2 font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {channelsData.map((c) => (
                          <tr key={c.channel} className="border-b border-border last:border-0">
                            <td className="py-2.5 font-medium">{c.channel}</td>
                            <td className="py-2.5 text-right text-muted">{formatCompact(c.subscribers)}</td>
                            <td className="py-2.5 text-right text-muted">{formatCompact(c.monthlyViews)}</td>
                            <td className="py-2.5 text-right text-muted">{c.videos}</td>
                            <td className="py-2.5"><StatusBadge status={c.monetization} /></td>
                            <td className="py-2.5"><StatusBadge status={c.status} /></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="card p-5">
                  <h2 className="text-[14px] font-semibold mb-4">Channel Services</h2>
                  <div className="grid grid-cols-3 gap-3">
                    {services.map((s) => (
                      <div key={s} className="flex items-center gap-2 text-[13px] p-3 bg-[rgb(var(--surface))] rounded-lg">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4338CA] shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Conflicts" && (
              <div className="card p-5">
                <h2 className="text-[14px] font-semibold mb-4">Active Conflicts</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-[13px]">
                    <thead>
                      <tr className="border-b border-border text-left text-muted">
                        <th className="pb-2 font-medium">Video</th>
                        <th className="pb-2 font-medium">Channel</th>
                        <th className="pb-2 font-medium">Conflict Status</th>
                        <th className="pb-2 font-medium">Claim Status</th>
                        <th className="pb-2 font-medium">Monetization</th>
                      </tr>
                    </thead>
                    <tbody>
                      {youtubeVideos
                        .filter((v) => v.conflictStatus !== "None")
                        .map((v) => (
                          <tr key={v.video} className="border-b border-border last:border-0">
                            <td className="py-2.5 font-medium">{v.video}</td>
                            <td className="py-2.5 text-muted">{v.channel}</td>
                            <td className="py-2.5"><StatusBadge status={v.conflictStatus} /></td>
                            <td className="py-2.5"><StatusBadge status={v.claimStatus} /></td>
                            <td className="py-2.5"><StatusBadge status={v.monetization} /></td>
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
