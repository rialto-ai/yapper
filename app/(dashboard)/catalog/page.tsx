"use client";

import { useState } from "react";
import { StatCard } from "@/components/stat-card";
import { StatusBadge } from "@/components/status-badge";
import { Tabs } from "@/components/tabs";
import { catalog, compositions } from "@/lib/mock-data";

const tabList = ["Tracks", "Releases", "Compositions", "Videos", "Assets", "Claims"];

function formatCurrency(n: number): string {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

const releaseRows = [
  { title: "Grace Overflows (EP)", artist: "Grace Harbor", upc: "196588410001", type: "EP", tracks: 5, releaseDate: "2026-03-15", status: "Delivered", territories: "Worldwide" },
  { title: "The Kingdom Sessions", artist: "New City Worship", upc: "196588410002", type: "Album", tracks: 12, releaseDate: "2026-04-01", status: "Delivered", territories: "Worldwide" },
  { title: "Still My Soul (Single)", artist: "Hannah Rejoice", upc: "196588410003", type: "Single", tracks: 1, releaseDate: "2026-02-20", status: "Delivered", territories: "Worldwide" },
  { title: "All Things New (EP)", artist: "Covenant Sound", upc: "196588410008", type: "EP", tracks: 4, releaseDate: "2026-05-20", status: "Queued", territories: "Worldwide" },
  { title: "Come Alive (Deluxe)", artist: "Open Heaven Worship", upc: "196588410007", type: "Album", tracks: 14, releaseDate: "2026-03-08", status: "Delivered", territories: "Worldwide" },
];

const videoRows = [
  { title: "Living Water (Official Video)", artist: "Grace Harbor", assetType: "Music Video", status: "Claimed", monetization: "Monetized", views: "482K", revenue: "$2,840" },
  { title: "Kingdom Come (Live)", artist: "New City Worship", assetType: "Live Performance", status: "Claimed", monetization: "Monetized", views: "1.2M", revenue: "$7,200" },
  { title: "Come Alive (Lyric Video)", artist: "Open Heaven Worship", assetType: "Lyric Video", status: "Claimed", monetization: "Monetized", views: "890K", revenue: "$4,100" },
  { title: "Still My Soul (Audio)", artist: "Hannah Rejoice", assetType: "Audio", status: "Pending", monetization: "Not Monetized", views: "45K", revenue: "$0" },
];

const assetRows = [
  { filename: "living_water_master.wav", artist: "Grace Harbor", type: "Audio Master", format: "WAV 24bit/48kHz", size: "42 MB", uploaded: "2026-02-28", status: "Approved" },
  { filename: "kingdom_come_artwork.png", artist: "New City Worship", type: "Cover Art", format: "PNG 3000x3000", size: "8.2 MB", uploaded: "2026-03-10", status: "Approved" },
  { filename: "all_things_new_master.wav", artist: "Covenant Sound", type: "Audio Master", format: "WAV 24bit/48kHz", size: "38 MB", uploaded: "2026-05-05", status: "Pending" },
  { filename: "come_alive_video.mp4", artist: "Open Heaven Worship", type: "Music Video", format: "MP4 1080p", size: "1.2 GB", uploaded: "2026-02-20", status: "Approved" },
];

const claimRows = [
  { asset: "Living Water", claimant: "Grace Harbor", type: "Composition", territory: "Worldwide", status: "Active", revenue: "$1,420", source: "YouTube Content ID" },
  { asset: "Kingdom Come", claimant: "Cornerstone Songs", type: "Composition", territory: "Worldwide", status: "Active", revenue: "$3,600", source: "YouTube Content ID" },
  { asset: "Still My Soul", claimant: "Hannah Rejoice", type: "Sound Recording", territory: "Worldwide", status: "Disputed", revenue: "$0", source: "YouTube Content ID" },
  { asset: "The Narrow Road", claimant: "The Narrow Way", type: "Composition", territory: "US, CA", status: "Conflict", revenue: "$0", source: "YouTube Content ID" },
];

export default function CatalogPage() {
  const [artistFilter, setArtistFilter] = useState("all");
  const [releaseStatusFilter, setReleaseStatusFilter] = useState("all");
  const [rightsFilter, setRightsFilter] = useState("all");
  const [territoryFilter, setTerritoryFilter] = useState("all");

  const uniqueArtists = Array.from(new Set(catalog.map((c) => c.artist)));

  const filteredCatalog = catalog.filter((item) => {
    if (artistFilter !== "all" && item.artist !== artistFilter) return false;
    if (releaseStatusFilter !== "all" && item.dspStatus !== releaseStatusFilter) return false;
    if (rightsFilter !== "all" && item.rightsStatus !== rightsFilter) return false;
    if (territoryFilter !== "all" && item.territories !== territoryFilter) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-[22px] font-semibold tracking-tight">Catalog</h1>
        <p className="text-[13px] text-muted mt-1">
          Manage tracks, releases, compositions, and assets across your entire catalog.
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard label="Total Tracks" value="142" detail="Across all releases" />
        <StatCard label="Active Releases" value="24" detail="Currently distributed" />
        <StatCard label="Pending Rights" value="7" detail="Awaiting confirmation" />
        <StatCard label="Revenue YTD" value="A$136,900" detail="2026 year to date" />
      </div>

      {/* Tabs + Content */}
      <Tabs tabs={tabList}>
        {(activeTab) => {
          if (activeTab === "Tracks") {
            return (
              <div className="space-y-4">
                {/* Filter Dropdowns */}
                <div className="flex items-center gap-3">
                  <select
                    value={artistFilter}
                    onChange={(e) => setArtistFilter(e.target.value)}
                    className="px-3 py-2 rounded-md border border-border bg-background text-[13px] text-foreground focus:outline-none focus:border-border-strong"
                  >
                    <option value="all">All Artists</option>
                    {uniqueArtists.map((a) => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                  <select
                    value={releaseStatusFilter}
                    onChange={(e) => setReleaseStatusFilter(e.target.value)}
                    className="px-3 py-2 rounded-md border border-border bg-background text-[13px] text-foreground focus:outline-none focus:border-border-strong"
                  >
                    <option value="all">All Statuses</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Queued">Queued</option>
                    <option value="Not delivered">Not delivered</option>
                  </select>
                  <select
                    value={rightsFilter}
                    onChange={(e) => setRightsFilter(e.target.value)}
                    className="px-3 py-2 rounded-md border border-border bg-background text-[13px] text-foreground focus:outline-none focus:border-border-strong"
                  >
                    <option value="all">All</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Pending">Pending</option>
                    <option value="Review">Review</option>
                  </select>
                  <select
                    value={territoryFilter}
                    onChange={(e) => setTerritoryFilter(e.target.value)}
                    className="px-3 py-2 rounded-md border border-border bg-background text-[13px] text-foreground focus:outline-none focus:border-border-strong"
                  >
                    <option value="all">All Territories</option>
                    <option value="Worldwide">Worldwide</option>
                    <option value="US, CA, UK, AU">US, CA, UK, AU</option>
                    <option value="NZ, AU, US">NZ, AU, US</option>
                  </select>
                </div>

                {/* Tracks Table */}
                <div className="card overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border bg-surface">
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Title</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Artist</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">ISRC</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">UPC</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Release Date</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Territories</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">DSP Status</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Rights Status</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Publishing</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">YouTube</th>
                          <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Revenue YTD</th>
                          <th className="text-center text-[12px] font-medium text-muted px-4 py-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredCatalog.length === 0 ? (
                          <tr>
                            <td colSpan={12} className="px-4 py-8 text-center text-[13px] text-muted">
                              No tracks match the current filters.
                            </td>
                          </tr>
                        ) : (
                          filteredCatalog.map((track, i) => (
                            <tr
                              key={i}
                              className="border-b border-border last:border-b-0 hover:bg-surface/50 transition-colors"
                            >
                              <td className="px-4 py-3 text-[13px] font-medium">{track.title}</td>
                              <td className="px-4 py-3 text-[13px] text-subtle">{track.artist}</td>
                              <td className="px-4 py-3 text-[13px] text-subtle font-mono text-[12px]">{track.isrc}</td>
                              <td className="px-4 py-3 text-[13px] text-subtle font-mono text-[12px]">{track.upc}</td>
                              <td className="px-4 py-3 text-[13px] text-subtle">{track.releaseDate}</td>
                              <td className="px-4 py-3 text-[13px] text-subtle">{track.territories}</td>
                              <td className="px-4 py-3">
                                <StatusBadge status={track.dspStatus} />
                              </td>
                              <td className="px-4 py-3">
                                <StatusBadge status={track.rightsStatus} />
                              </td>
                              <td className="px-4 py-3">
                                <StatusBadge status={track.publishingStatus} />
                              </td>
                              <td className="px-4 py-3">
                                <StatusBadge status={track.youtubeStatus} />
                              </td>
                              <td className="px-4 py-3 text-[13px] text-subtle text-right">
                                {track.revenueYTD > 0 ? formatCurrency(track.revenueYTD) : " -"}
                              </td>
                              <td className="px-4 py-3 text-center">
                                <button className="w-7 h-7 rounded-md hover:bg-surface-2 transition-colors inline-flex items-center justify-center text-muted hover:text-foreground">
                                  <span className="text-[16px] leading-none">&hellip;</span>
                                </button>
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
          }

          if (activeTab === "Releases") {
            return (
              <div className="space-y-4">
                <p className="text-[13px] text-muted">Showing releases view.</p>
                <div className="card overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border bg-surface">
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Title</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Artist</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">UPC</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Type</th>
                          <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Tracks</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Release Date</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Status</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Territories</th>
                          <th className="text-center text-[12px] font-medium text-muted px-4 py-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {releaseRows.map((row, i) => (
                          <tr key={i} className="border-b border-border last:border-b-0 hover:bg-surface/50 transition-colors">
                            <td className="px-4 py-3 text-[13px] font-medium">{row.title}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{row.artist}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle font-mono text-[12px]">{row.upc}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{row.type}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle text-right">{row.tracks}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{row.releaseDate}</td>
                            <td className="px-4 py-3"><StatusBadge status={row.status} /></td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{row.territories}</td>
                            <td className="px-4 py-3 text-center">
                              <button className="w-7 h-7 rounded-md hover:bg-surface-2 transition-colors inline-flex items-center justify-center text-muted hover:text-foreground">
                                <span className="text-[16px] leading-none">&hellip;</span>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          }

          if (activeTab === "Compositions") {
            return (
              <div className="space-y-4">
                <p className="text-[13px] text-muted">Showing compositions view.</p>
                <div className="card overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border bg-surface">
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Title</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Writers</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Publisher</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Split Status</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">PRO Status</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">ISWC</th>
                          <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Recordings</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Church Licensing</th>
                          <th className="text-center text-[12px] font-medium text-muted px-4 py-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {compositions.map((row, i) => (
                          <tr key={i} className="border-b border-border last:border-b-0 hover:bg-surface/50 transition-colors">
                            <td className="px-4 py-3 text-[13px] font-medium">{row.title}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{row.writers}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{row.publisher}</td>
                            <td className="px-4 py-3"><StatusBadge status={row.splitStatus} /></td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{row.proStatus}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle font-mono text-[12px]">{row.iswc}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle text-right">{row.relatedRecordings}</td>
                            <td className="px-4 py-3"><StatusBadge status={row.churchLicensing} /></td>
                            <td className="px-4 py-3 text-center">
                              <button className="w-7 h-7 rounded-md hover:bg-surface-2 transition-colors inline-flex items-center justify-center text-muted hover:text-foreground">
                                <span className="text-[16px] leading-none">&hellip;</span>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          }

          if (activeTab === "Videos") {
            return (
              <div className="space-y-4">
                <p className="text-[13px] text-muted">Showing videos view.</p>
                <div className="card overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border bg-surface">
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Title</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Artist</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Asset Type</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Claim Status</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Monetization</th>
                          <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Views</th>
                          <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Revenue</th>
                          <th className="text-center text-[12px] font-medium text-muted px-4 py-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {videoRows.map((row, i) => (
                          <tr key={i} className="border-b border-border last:border-b-0 hover:bg-surface/50 transition-colors">
                            <td className="px-4 py-3 text-[13px] font-medium">{row.title}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{row.artist}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{row.assetType}</td>
                            <td className="px-4 py-3"><StatusBadge status={row.status} /></td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{row.monetization}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle text-right">{row.views}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle text-right">{row.revenue}</td>
                            <td className="px-4 py-3 text-center">
                              <button className="w-7 h-7 rounded-md hover:bg-surface-2 transition-colors inline-flex items-center justify-center text-muted hover:text-foreground">
                                <span className="text-[16px] leading-none">&hellip;</span>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          }

          if (activeTab === "Assets") {
            return (
              <div className="space-y-4">
                <p className="text-[13px] text-muted">Showing assets view.</p>
                <div className="card overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border bg-surface">
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Filename</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Artist</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Type</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Format</th>
                          <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Size</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Uploaded</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Status</th>
                          <th className="text-center text-[12px] font-medium text-muted px-4 py-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {assetRows.map((row, i) => (
                          <tr key={i} className="border-b border-border last:border-b-0 hover:bg-surface/50 transition-colors">
                            <td className="px-4 py-3 text-[13px] font-medium font-mono text-[12px]">{row.filename}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{row.artist}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{row.type}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{row.format}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle text-right">{row.size}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{row.uploaded}</td>
                            <td className="px-4 py-3"><StatusBadge status={row.status} /></td>
                            <td className="px-4 py-3 text-center">
                              <button className="w-7 h-7 rounded-md hover:bg-surface-2 transition-colors inline-flex items-center justify-center text-muted hover:text-foreground">
                                <span className="text-[16px] leading-none">&hellip;</span>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          }

          if (activeTab === "Claims") {
            return (
              <div className="space-y-4">
                <p className="text-[13px] text-muted">Showing claims view.</p>
                <div className="card overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border bg-surface">
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Asset</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Claimant</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Type</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Territory</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Status</th>
                          <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Revenue</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Source</th>
                          <th className="text-center text-[12px] font-medium text-muted px-4 py-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {claimRows.map((row, i) => (
                          <tr key={i} className="border-b border-border last:border-b-0 hover:bg-surface/50 transition-colors">
                            <td className="px-4 py-3 text-[13px] font-medium">{row.asset}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{row.claimant}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{row.type}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{row.territory}</td>
                            <td className="px-4 py-3"><StatusBadge status={row.status} /></td>
                            <td className="px-4 py-3 text-[13px] text-subtle text-right">{row.revenue}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{row.source}</td>
                            <td className="px-4 py-3 text-center">
                              <button className="w-7 h-7 rounded-md hover:bg-surface-2 transition-colors inline-flex items-center justify-center text-muted hover:text-foreground">
                                <span className="text-[16px] leading-none">&hellip;</span>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
