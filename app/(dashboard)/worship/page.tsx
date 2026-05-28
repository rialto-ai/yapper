"use client";

import {
  Church,
  Music2,
  FileText,
  Sparkles,
  Heart,
  Users,
  Globe2,
  Video,
  Calendar,
  MapPin,
  Library,
  ScrollText,
  Mic2,
  BarChart3,
  AlertCircle,
  CheckCircle2,
  Clock,
} from "lucide-react";

import { StatCard } from "@/components/stat-card";
import { StatusBadge } from "@/components/status-badge";
import { Tabs } from "@/components/tabs";

type CcliStatus =
  | "Registered"
  | "Under Review"
  | "Submitted"
  | "Information Needed"
  | "Not Started"
  | "Not Applicable";

const ccliRows: {
  song: string;
  artist: string;
  ccliStatus: CcliStatus;
  lyricRights: string;
  churchReporting: string;
  updated: string;
}[] = [
  { song: "Always Near", artist: "Grace & Stone", ccliStatus: "Registered", lyricRights: "Confirmed", churchReporting: "Active", updated: "2026-05-14" },
  { song: "Mercy Like Morning", artist: "The Narrow Way", ccliStatus: "Under Review", lyricRights: "Confirmed", churchReporting: "Active", updated: "2026-05-12" },
  { song: "Come Alive", artist: "Emma James", ccliStatus: "Registered", lyricRights: "Confirmed", churchReporting: "Active", updated: "2026-05-10" },
  { song: "Holy Is The Lord", artist: "River House Worship", ccliStatus: "Submitted", lyricRights: "Pending", churchReporting: "Pending", updated: "2026-05-08" },
  { song: "The King Is Coming", artist: "New City Collective", ccliStatus: "Information Needed", lyricRights: "Pending", churchReporting: "Not Started", updated: "2026-05-05" },
  { song: "Shelter", artist: "Psalm & Sound", ccliStatus: "Registered", lyricRights: "Confirmed", churchReporting: "Active", updated: "2026-05-01" },
  { song: "All Things New", artist: "Lightwell Music", ccliStatus: "Submitted", lyricRights: "Confirmed", churchReporting: "Pending", updated: "2026-04-28" },
  { song: "Behold The Lamb", artist: "Kingdom Songs", ccliStatus: "Under Review", lyricRights: "Confirmed", churchReporting: "Active", updated: "2026-04-22" },
  { song: "Living Water", artist: "Maranatha Road", ccliStatus: "Registered", lyricRights: "Confirmed", churchReporting: "Active", updated: "2026-04-15" },
  { song: "Christ Alone", artist: "The Table Worship", ccliStatus: "Not Started", lyricRights: "Pending", churchReporting: "Not Started", updated: "2026-04-10" },
  { song: "Grace Upon Grace", artist: "Northbridge Worship", ccliStatus: "Registered", lyricRights: "Confirmed", churchReporting: "Active", updated: "2026-04-05" },
  { song: "At The Table", artist: "Covenant House Collective", ccliStatus: "Information Needed", lyricRights: "Pending", churchReporting: "Pending", updated: "2026-03-30" },
];

const catalogueEntries: {
  title: string;
  artist: string;
  suitability: "High" | "Medium" | "Low";
  scripture: string;
  theology: "Approved" | "Under Review" | "Pending";
  lyricDisplay: string;
  chordChart: string;
}[] = [
  { title: "Always Near", artist: "Grace & Stone", suitability: "High", scripture: "Psalm 145:18", theology: "Approved", lyricDisplay: "Cleared for projection", chordChart: "Available, key of G" },
  { title: "Mercy Like Morning", artist: "The Narrow Way", suitability: "High", scripture: "Lamentations 3:22-23", theology: "Approved", lyricDisplay: "Cleared for projection", chordChart: "Available, key of D" },
  { title: "Come Alive", artist: "Emma James", suitability: "High", scripture: "Ezekiel 37:1-14", theology: "Approved", lyricDisplay: "Cleared for projection", chordChart: "Available, key of A" },
  { title: "Holy Is The Lord", artist: "River House Worship", suitability: "High", scripture: "Isaiah 6:1-3", theology: "Under Review", lyricDisplay: "Pending review", chordChart: "Available, key of E" },
  { title: "Shelter", artist: "Psalm & Sound", suitability: "Medium", scripture: "Psalm 91:1-4", theology: "Approved", lyricDisplay: "Cleared for projection", chordChart: "Available, key of C" },
  { title: "All Things New", artist: "Lightwell Music", suitability: "High", scripture: "Revelation 21:5", theology: "Approved", lyricDisplay: "Cleared for projection", chordChart: "Available, key of B" },
  { title: "Behold The Lamb", artist: "Kingdom Songs", suitability: "High", scripture: "John 1:29", theology: "Under Review", lyricDisplay: "Cleared for projection", chordChart: "Pending arrangement" },
  { title: "Living Water", artist: "Maranatha Road", suitability: "High", scripture: "John 4:13-14", theology: "Approved", lyricDisplay: "Cleared for projection", chordChart: "Available, key of G" },
  { title: "Grace Upon Grace", artist: "Northbridge Worship", suitability: "Medium", scripture: "John 1:16", theology: "Pending", lyricDisplay: "Pending review", chordChart: "Available, key of D" },
];

const churchUsageRows = [
  { song: "Always Near", period: "Q1 2026", churches: 142, congregations: 38000, source: "CCLI SongSelect", status: "Active" },
  { song: "Mercy Like Morning", period: "Q1 2026", churches: 86, congregations: 22000, source: "CCLI SongSelect", status: "Active" },
  { song: "Come Alive", period: "Q1 2026", churches: 218, congregations: 64000, source: "CCLI SongSelect", status: "Active" },
  { song: "Holy Is The Lord", period: "Q1 2026", churches: 92, congregations: 28000, source: "CCLI SongSelect", status: "Active" },
  { song: "Living Water", period: "Q1 2026", churches: 156, congregations: 41000, source: "CCLI SongSelect", status: "Active" },
  { song: "Grace Upon Grace", period: "Q1 2026", churches: 74, congregations: 18000, source: "CCLI SongSelect", status: "Active" },
  { song: "Behold The Lamb", period: "Q1 2026", churches: 48, congregations: 12000, source: "CCLI SongSelect", status: "Pending" },
  { song: "All Things New", period: "Q1 2026", churches: 36, congregations: 9000, source: "CCLI SongSelect", status: "Pending" },
];

const worshipLeaders = [
  { name: "M. Reeves", church: "New City Church, Sydney", saved: 38, setlist: 22, lastActivity: "2026-05-22", status: "Active" },
  { name: "L. Tanaka", church: "Open Door Tokyo", saved: 26, setlist: 14, lastActivity: "2026-05-20", status: "Active" },
  { name: "S. Park", church: "Grace Cathedral, Seoul", saved: 42, setlist: 28, lastActivity: "2026-05-19", status: "Active" },
  { name: "J. Whitfield", church: "Covenant Chapel, Auckland", saved: 31, setlist: 18, lastActivity: "2026-05-18", status: "Active" },
  { name: "K. Sharma", church: "Hope House, Mumbai", saved: 19, setlist: 8, lastActivity: "2026-05-15", status: "Active" },
  { name: "D. Okafor", church: "Living Stone, Lagos", saved: 24, setlist: 12, lastActivity: "2026-05-12", status: "Active" },
  { name: "R. Tane", church: "Harbour Light, Auckland", saved: 15, setlist: 6, lastActivity: "2026-05-08", status: "Pending" },
  { name: "C. Tan", church: "River House Singapore", saved: 33, setlist: 21, lastActivity: "2026-05-06", status: "Active" },
];

const livestreamModes = [
  {
    name: "Monetise",
    description: "Run Content ID claims on partner livestreams and collect revenue.",
    icon: BarChart3,
  },
  {
    name: "Track Only",
    description: "Allow streams to run without claims, capture usage analytics only.",
    icon: Globe2,
  },
  {
    name: "Whitelist Partner Churches",
    description: "Recommended for worship. No claims on whitelisted partner streams.",
    icon: Church,
    recommended: true,
    active: true,
  },
  {
    name: "Manual Review",
    description: "Hold each livestream claim for ministry team review before action.",
    icon: AlertCircle,
  },
  {
    name: "Do Not Claim",
    description: "Switch off all livestream monetisation for the selected song.",
    icon: ScrollText,
  },
  {
    name: "Blocked / Needs Review",
    description: "Block livestream usage pending rights clearance or theological review.",
    icon: Clock,
  },
];

const whitelistedChurches = [
  "New City Church, Sydney",
  "River House Ministry, Singapore",
  "The Table Church, Manila",
  "Covenant Chapel, Auckland",
  "Northbridge Worship Centre, Melbourne",
  "Maranatha Fellowship, Bangkok",
  "Covenant House, Taipei",
  "Kingdom Songs Network, Jakarta",
];

const policyPerSong = [
  { song: "Always Near", policy: "Whitelist Partner Churches", reviewed: "2026-05-14" },
  { song: "Mercy Like Morning", policy: "Whitelist Partner Churches", reviewed: "2026-05-12" },
  { song: "Come Alive", policy: "Whitelist Partner Churches", reviewed: "2026-05-10" },
  { song: "Holy Is The Lord", policy: "Manual Review", reviewed: "2026-05-08" },
  { song: "Shelter", policy: "Whitelist Partner Churches", reviewed: "2026-05-01" },
  { song: "Behold The Lamb", policy: "Track Only", reviewed: "2026-04-22" },
  { song: "Living Water", policy: "Whitelist Partner Churches", reviewed: "2026-04-15" },
  { song: "Grace Upon Grace", policy: "Whitelist Partner Churches", reviewed: "2026-04-05" },
];

const partnerChurches = [
  { name: "New City Church", location: "Sydney, AU", network: "New City", whitelisted: 38, status: "Active" },
  { name: "River House Ministry", location: "Singapore", network: "River House", whitelisted: 24, status: "Active" },
  { name: "The Table Church", location: "Manila, PH", network: "The Table", whitelisted: 18, status: "Active" },
  { name: "Covenant Chapel", location: "Auckland, NZ", network: "Independent", whitelisted: 22, status: "Active" },
  { name: "Northbridge Worship Centre", location: "Melbourne, AU", network: "Northbridge", whitelisted: 31, status: "Active" },
  { name: "Lightwell Ministries", location: "Kuala Lumpur, MY", network: "Lightwell", whitelisted: 14, status: "Pending" },
  { name: "Maranatha Fellowship", location: "Bangkok, TH", network: "Maranatha", whitelisted: 12, status: "Active" },
  { name: "Covenant House", location: "Taipei, TW", network: "Covenant", whitelisted: 18, status: "Active" },
  { name: "Grace & Light", location: "Seoul, KR", network: "Grace", whitelisted: 8, status: "Pending" },
  { name: "Kingdom Songs Network", location: "Jakarta, ID", network: "Kingdom", whitelisted: 26, status: "Active" },
];

function SuitabilityPill({ level }: { level: "High" | "Medium" | "Low" }) {
  const styles =
    level === "High"
      ? "bg-secondary-soft text-secondary border border-secondary/15"
      : level === "Medium"
      ? "bg-accent-soft text-accent border border-accent/15"
      : "bg-surface-2 text-subtle border border-border";
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium ${styles}`}
    >
      <Sparkles className="w-3 h-3" />
      {level} suitability
    </span>
  );
}

export default function WorshipPage() {
  const ccliCounts = {
    Registered: ccliRows.filter((r) => r.ccliStatus === "Registered").length,
    "Under Review": ccliRows.filter((r) => r.ccliStatus === "Under Review").length,
    Submitted: ccliRows.filter((r) => r.ccliStatus === "Submitted").length,
    Action: ccliRows.filter((r) =>
      ["Information Needed", "Not Started"].includes(r.ccliStatus)
    ).length,
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title block */}
      <div className="card p-6 bg-gradient-to-br from-accent-soft/50 via-white to-secondary-soft/30 border-accent/15">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl brand-gradient flex items-center justify-center shrink-0 shadow-sm">
            <Church className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="label-eyebrow mb-1">Selah by Christian Music Group</p>
            <h1 className="text-[24px] font-semibold tracking-tight brand-gradient-text">
              Selah Worship
            </h1>
            <p className="text-[13px] text-muted mt-1.5 max-w-3xl">
              Built for songs that move from release to worship. Track CCLI
              workflows, church usage, worship leader adoption, lyric display
              rights, and ministry catalogue usage in one place.
            </p>
          </div>
        </div>
      </div>

      {/* Top stats row */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard
          label="CCLI Workflow Status"
          value="12 active"
          detail="4 awaiting review"
          highlight
        />
        <StatCard
          label="Partner Churches"
          value="284"
          detail="+18 this quarter"
          trend="up"
        />
        <StatCard
          label="Worship Leader Adoption"
          value="1,420 saves"
          detail="Strong engagement"
        />
        <StatCard
          label="Lyric Display Coverage"
          value="92%"
          detail="of catalogue compliant"
        />
      </div>

      <Tabs
        tabs={[
          "CCLI Workflow",
          "Worship Catalogue",
          "Church Usage",
          "Worship Leaders",
          "Livestream Policy",
          "Partner Churches",
        ]}
      >
        {(activeTab) => (
          <>
            {/* Tab 1: CCLI Workflow */}
            {activeTab === "CCLI Workflow" && (
              <div className="space-y-6">
                <div className="grid grid-cols-4 gap-4">
                  <div className="card p-4 border-secondary/15 bg-secondary-soft/40">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      <p className="text-[12px] font-medium text-secondary">
                        Registered
                      </p>
                    </div>
                    <p className="text-[20px] font-semibold tracking-tight">
                      {ccliCounts.Registered} / {ccliRows.length}
                    </p>
                  </div>
                  <div className="card p-4 border-accent/15 bg-accent-soft/40">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-accent" />
                      <p className="text-[12px] font-medium text-accent">
                        Under Review
                      </p>
                    </div>
                    <p className="text-[20px] font-semibold tracking-tight">
                      {ccliCounts["Under Review"]} / {ccliRows.length}
                    </p>
                  </div>
                  <div className="card p-4 border-accent/15 bg-accent-soft/40">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="w-4 h-4 text-accent" />
                      <p className="text-[12px] font-medium text-accent">
                        Submitted
                      </p>
                    </div>
                    <p className="text-[20px] font-semibold tracking-tight">
                      {ccliCounts.Submitted} / {ccliRows.length}
                    </p>
                  </div>
                  <div className="card p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="w-4 h-4 text-warning" />
                      <p className="text-[12px] font-medium text-warning">
                        Action needed
                      </p>
                    </div>
                    <p className="text-[20px] font-semibold tracking-tight">
                      {ccliCounts.Action} / {ccliRows.length}
                    </p>
                  </div>
                </div>

                <div className="card p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-[14px] font-semibold">
                        CCLI Registration Checklist
                      </h2>
                      <p className="text-[12px] text-muted mt-0.5">
                        End-to-end status for every worship release in the
                        Selah catalogue.
                      </p>
                    </div>
                    <span className="label-eyebrow-secondary">Worship workflow</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-[13px]">
                      <thead>
                        <tr className="border-b border-border text-left text-muted">
                          <th className="pb-2 font-medium">Song</th>
                          <th className="pb-2 font-medium">Artist</th>
                          <th className="pb-2 font-medium">CCLI Status</th>
                          <th className="pb-2 font-medium">
                            Lyric Display Rights
                          </th>
                          <th className="pb-2 font-medium">
                            Church Usage Reporting
                          </th>
                          <th className="pb-2 font-medium">Last Updated</th>
                          <th className="pb-2 font-medium text-right">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {ccliRows.map((row) => (
                          <tr
                            key={row.song}
                            className="border-b border-border last:border-0"
                          >
                            <td className="py-2.5 font-medium">{row.song}</td>
                            <td className="py-2.5 text-muted">{row.artist}</td>
                            <td className="py-2.5">
                              <StatusBadge status={row.ccliStatus} />
                            </td>
                            <td className="py-2.5">
                              <StatusBadge status={row.lyricRights} />
                            </td>
                            <td className="py-2.5">
                              <StatusBadge status={row.churchReporting} />
                            </td>
                            <td className="py-2.5 text-muted">
                              {row.updated}
                            </td>
                            <td className="py-2.5 text-right">
                              <button className="text-[12px] font-medium text-accent hover:underline">
                                Open file
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Worship Catalogue */}
            {activeTab === "Worship Catalogue" && (
              <div className="space-y-6">
                <div className="card p-5 border-secondary/15 bg-secondary-soft/30">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                      <Library className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <h2 className="text-[14px] font-semibold">
                        Worship-Ready Catalogue
                      </h2>
                      <p className="text-[12px] text-muted mt-0.5 max-w-3xl">
                        Every song is reviewed for theological alignment,
                        scripture grounding, and congregational singability
                        before going to the worship-leader-facing catalogue.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {catalogueEntries.map((entry) => (
                    <div
                      key={entry.title}
                      className="card p-5 card-interactive"
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="text-[14px] font-semibold tracking-tight">
                            {entry.title}
                          </h3>
                          <p className="text-[12px] text-muted mt-0.5">
                            {entry.artist}
                          </p>
                        </div>
                        <Music2 className="w-4 h-4 text-accent shrink-0" />
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5 mb-3">
                        <SuitabilityPill level={entry.suitability} />
                        <StatusBadge status={entry.theology} />
                      </div>

                      <div className="space-y-2 pt-3 border-t border-border">
                        <div className="flex items-start gap-2 text-[12px]">
                          <ScrollText className="w-3.5 h-3.5 text-muted mt-0.5 shrink-0" />
                          <div>
                            <span className="text-muted">Scripture</span>
                            <p className="text-foreground">
                              {entry.scripture}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 text-[12px]">
                          <FileText className="w-3.5 h-3.5 text-muted mt-0.5 shrink-0" />
                          <div>
                            <span className="text-muted">
                              Lyric display rights
                            </span>
                            <p className="text-foreground">
                              {entry.lyricDisplay}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 text-[12px]">
                          <Mic2 className="w-3.5 h-3.5 text-muted mt-0.5 shrink-0" />
                          <div>
                            <span className="text-muted">Chord chart</span>
                            <p className="text-foreground">
                              {entry.chordChart}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: Church Usage */}
            {activeTab === "Church Usage" && (
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <StatCard
                    label="Churches Reporting"
                    value="852"
                    detail="across 8 active songs"
                    trend="up"
                  />
                  <StatCard
                    label="Estimated Congregations"
                    value="232,000"
                    detail="weekly reach"
                    trend="up"
                  />
                  <StatCard
                    label="Reporting Period"
                    value="Q1 2026"
                    detail="CCLI SongSelect feed"
                  />
                </div>

                <div className="card p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-[14px] font-semibold">
                        Church Usage Reporting
                      </h2>
                      <p className="text-[12px] text-muted mt-0.5">
                        Sourced from CCLI SongSelect, mapped to Selah catalogue
                        IDs.
                      </p>
                    </div>
                    <span className="label-eyebrow">CCLI feed</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-[13px]">
                      <thead>
                        <tr className="border-b border-border text-left text-muted">
                          <th className="pb-2 font-medium">Song</th>
                          <th className="pb-2 font-medium">Reporting Period</th>
                          <th className="pb-2 font-medium text-right">
                            Churches Reporting
                          </th>
                          <th className="pb-2 font-medium text-right">
                            Estimated Congregations
                          </th>
                          <th className="pb-2 font-medium">CCLI Source</th>
                          <th className="pb-2 font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {churchUsageRows.map((row) => (
                          <tr
                            key={row.song}
                            className="border-b border-border last:border-0"
                          >
                            <td className="py-2.5 font-medium">{row.song}</td>
                            <td className="py-2.5 text-muted">
                              {row.period}
                            </td>
                            <td className="py-2.5 text-right text-muted">
                              {row.churches.toLocaleString()}
                            </td>
                            <td className="py-2.5 text-right text-muted">
                              {row.congregations.toLocaleString()}
                            </td>
                            <td className="py-2.5 text-muted">
                              {row.source}
                            </td>
                            <td className="py-2.5">
                              <StatusBadge status={row.status} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 4: Worship Leaders */}
            {activeTab === "Worship Leaders" && (
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <StatCard
                    label="Tracked Worship Leaders"
                    value="412"
                    detail="actively engaged"
                  />
                  <StatCard
                    label="Songs Saved (90d)"
                    value="1,420"
                    detail="across the catalogue"
                    trend="up"
                  />
                  <StatCard
                    label="Setlist Inclusions (90d)"
                    value="638"
                    detail="confirmed live usage"
                    trend="up"
                  />
                </div>

                <div className="card p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-[14px] font-semibold">
                        Worship Leader Adoption
                      </h2>
                      <p className="text-[12px] text-muted mt-0.5">
                        Save and setlist signals from worship-leader profiles
                        across the Selah network.
                      </p>
                    </div>
                    <span className="label-eyebrow-secondary">Worship signal</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-[13px]">
                      <thead>
                        <tr className="border-b border-border text-left text-muted">
                          <th className="pb-2 font-medium">Worship Leader</th>
                          <th className="pb-2 font-medium">
                            Church / Network
                          </th>
                          <th className="pb-2 font-medium text-right">
                            Songs Saved
                          </th>
                          <th className="pb-2 font-medium text-right">
                            Songs Used in Setlist
                          </th>
                          <th className="pb-2 font-medium">Last Activity</th>
                          <th className="pb-2 font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {worshipLeaders.map((row) => (
                          <tr
                            key={row.name}
                            className="border-b border-border last:border-0"
                          >
                            <td className="py-2.5 font-medium">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-accent-soft text-accent flex items-center justify-center text-[10px] font-semibold">
                                  {row.name
                                    .split(" ")
                                    .map((p) => p[0])
                                    .join("")}
                                </div>
                                {row.name}
                              </div>
                            </td>
                            <td className="py-2.5 text-muted">
                              {row.church}
                            </td>
                            <td className="py-2.5 text-right text-muted">
                              {row.saved}
                            </td>
                            <td className="py-2.5 text-right text-muted">
                              {row.setlist}
                            </td>
                            <td className="py-2.5 text-muted">
                              {row.lastActivity}
                            </td>
                            <td className="py-2.5">
                              <StatusBadge status={row.status} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 5: Livestream Policy */}
            {activeTab === "Livestream Policy" && (
              <div className="space-y-6">
                <div className="card p-5 border-accent/15 bg-gradient-to-br from-accent-soft/40 to-white">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg brand-gradient flex items-center justify-center shrink-0">
                      <Video className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="label-eyebrow mb-1">
                        Church livestream sensitivity
                      </p>
                      <h2 className="text-[14px] font-semibold">
                        Worship-aware monetisation controls
                      </h2>
                      <p className="text-[12px] text-muted mt-1 max-w-3xl">
                        Selah ships with worship-leader-safe defaults. Whitelist
                        partner churches so Sunday livestreams stay clear of
                        Content ID claims, while the wider catalogue keeps
                        earning.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {livestreamModes.map((mode) => {
                    const Icon = mode.icon;
                    return (
                      <div
                        key={mode.name}
                        className={`card p-5 card-interactive ${
                          mode.active
                            ? "border-secondary/30 bg-secondary-soft/40 ring-1 ring-secondary/15"
                            : ""
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              mode.active
                                ? "bg-secondary text-white"
                                : "bg-accent-soft text-accent"
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          {mode.active && (
                            <span className="text-[10px] font-medium uppercase tracking-wider text-secondary">
                              Currently active
                            </span>
                          )}
                          {mode.recommended && !mode.active && (
                            <span className="text-[10px] font-medium uppercase tracking-wider text-accent">
                              Recommended
                            </span>
                          )}
                        </div>
                        <h3 className="text-[13px] font-semibold tracking-tight">
                          {mode.name}
                        </h3>
                        <p className="text-[12px] text-muted mt-1 leading-relaxed">
                          {mode.description}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="card p-5 col-span-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-[13px] font-semibold">
                        Whitelisted partner churches
                      </h3>
                      <Church className="w-4 h-4 text-muted" />
                    </div>
                    <ul className="space-y-2">
                      {whitelistedChurches.map((church) => (
                        <li
                          key={church}
                          className="flex items-center justify-between gap-3 py-1.5 border-b border-border last:border-0"
                        >
                          <span className="text-[12px] text-foreground">
                            {church}
                          </span>
                          <span
                            className="relative inline-flex items-center w-9 h-5 rounded-full bg-secondary"
                            aria-hidden
                          >
                            <span className="absolute right-0.5 w-4 h-4 rounded-full bg-white shadow-sm" />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="card p-5 col-span-2">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-[13px] font-semibold">
                          Policies per song
                        </h3>
                        <p className="text-[12px] text-muted mt-0.5">
                          Per-song livestream policy, last reviewed by the
                          Selah team.
                        </p>
                      </div>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-[13px]">
                        <thead>
                          <tr className="border-b border-border text-left text-muted">
                            <th className="pb-2 font-medium">Song</th>
                            <th className="pb-2 font-medium">Current Policy</th>
                            <th className="pb-2 font-medium">Last Reviewed</th>
                          </tr>
                        </thead>
                        <tbody>
                          {policyPerSong.map((row) => (
                            <tr
                              key={row.song}
                              className="border-b border-border last:border-0"
                            >
                              <td className="py-2.5 font-medium">
                                {row.song}
                              </td>
                              <td className="py-2.5 text-muted">
                                {row.policy}
                              </td>
                              <td className="py-2.5 text-muted">
                                {row.reviewed}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 6: Partner Churches */}
            {activeTab === "Partner Churches" && (
              <div className="space-y-6">
                <div className="grid grid-cols-4 gap-4">
                  <StatCard
                    label="Partner Churches"
                    value="284"
                    detail="+18 this quarter"
                    trend="up"
                  />
                  <StatCard
                    label="Whitelisted Songs"
                    value="211"
                    detail="across the network"
                  />
                  <StatCard
                    label="Active Networks"
                    value="14"
                    detail="across APAC"
                  />
                  <StatCard
                    label="Pending Onboards"
                    value="6"
                    detail="paperwork in flight"
                  />
                </div>

                <div className="card p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-[14px] font-semibold">
                        Whitelisted Partner Churches
                      </h2>
                      <p className="text-[12px] text-muted mt-0.5">
                        Churches with live livestream agreements. Conference
                        and ministry usage is covered under the same
                        agreement.
                      </p>
                    </div>
                    <span className="label-eyebrow-secondary">
                      Ministry network
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-[13px]">
                      <thead>
                        <tr className="border-b border-border text-left text-muted">
                          <th className="pb-2 font-medium">Church Name</th>
                          <th className="pb-2 font-medium">City / Country</th>
                          <th className="pb-2 font-medium">Network</th>
                          <th className="pb-2 font-medium text-right">
                            Songs Whitelisted
                          </th>
                          <th className="pb-2 font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {partnerChurches.map((row) => (
                          <tr
                            key={row.name}
                            className="border-b border-border last:border-0"
                          >
                            <td className="py-2.5 font-medium">
                              <div className="flex items-center gap-2">
                                <Church className="w-3.5 h-3.5 text-accent shrink-0" />
                                {row.name}
                              </div>
                            </td>
                            <td className="py-2.5 text-muted">
                              <span className="inline-flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {row.location}
                              </span>
                            </td>
                            <td className="py-2.5 text-muted">
                              {row.network}
                            </td>
                            <td className="py-2.5 text-right text-muted">
                              {row.whitelisted}
                            </td>
                            <td className="py-2.5">
                              <StatusBadge status={row.status} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="card p-5">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-accent-soft text-accent flex items-center justify-center shrink-0">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-[13px] font-semibold">
                          Conference usage
                        </h3>
                        <p className="text-[12px] text-muted mt-1 leading-relaxed">
                          Hillsong, Awakening, and Kingdom Sound conferences
                          covered under the same blanket licence. 8 upcoming
                          confirmed events.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card p-5">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-secondary-soft text-secondary flex items-center justify-center shrink-0">
                        <Heart className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-[13px] font-semibold">
                          Ministry usage notes
                        </h3>
                        <p className="text-[12px] text-muted mt-1 leading-relaxed">
                          Camp, youth ministry, and small group usage is
                          permitted at no extra cost for whitelisted partner
                          churches. Reporting handled via CCLI feed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </Tabs>

      {/* Footer support strip */}
      <div className="card p-5 border-accent/15 bg-gradient-to-br from-white to-accent-soft/30">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-accent-soft text-accent flex items-center justify-center shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[13px] font-semibold">
                Selah Worship support
              </p>
              <p className="text-[12px] text-muted mt-0.5">
                A dedicated worship liaison reviews CCLI submissions, lyric
                rights, and partner church paperwork within two business
                days.
              </p>
            </div>
          </div>
          <button className="text-[12px] font-medium text-accent hover:underline whitespace-nowrap">
            Contact liaison
          </button>
        </div>
      </div>
    </div>
  );
}
