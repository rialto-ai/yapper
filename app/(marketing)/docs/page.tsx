"use client";

import Link from "next/link";
import { useState } from "react";
import {
  BookOpen,
  Rocket,
  Scale,
  DollarSign,
  FileText,
  Youtube,
  Church,
  Disc3,
  ChevronRight,
  Search,
  Sparkles,
} from "lucide-react";

const sections = [
  {
    label: "Get started",
    items: [
      { id: "welcome", title: "Welcome to Selah", icon: Sparkles },
      { id: "quickstart", title: "Quickstart", icon: Rocket },
      { id: "concepts", title: "Core concepts", icon: BookOpen },
    ],
  },
  {
    label: "Workflows",
    items: [
      { id: "catalog", title: "Catalog onboarding", icon: Disc3 },
      { id: "rights", title: "Rights & splits", icon: Scale },
      { id: "distribution", title: "Distribution & delivery", icon: Rocket },
      { id: "royalties", title: "Royalty accounting", icon: DollarSign },
    ],
  },
  {
    label: "Christian-native",
    items: [
      { id: "christian-metadata", title: "Christian metadata", icon: Church },
      { id: "ccli", title: "CCLI workflow", icon: FileText },
      { id: "church-adoption", title: "Church Adoption Score", icon: Church },
    ],
  },
  {
    label: "Services",
    items: [
      { id: "youtube", title: "YouTube monetization", icon: Youtube },
      { id: "publishing", title: "Publishing partnerships", icon: FileText },
      { id: "label-services", title: "Label Services", icon: Sparkles },
    ],
  },
];

const content: Record<string, { title: string; eyebrow: string; body: React.ReactNode }> = {
  welcome: {
    eyebrow: "Get started",
    title: "Welcome to Selah",
    body: (
      <>
        <p>
          Selah is a digital music distribution platform purpose-built for Christian music. Founded in 2026 and headquartered in Sydney, we deliver music and video globally to every major DSP, the Christian channel network, and partner with publishers and rights organizations on behalf of our artists, labels, worship teams, and ministries.
        </p>
        <h3>What Selah does</h3>
        <ul>
          <li>Delivers Christian music and video globally to 150+ DSPs across 84 territories</li>
          <li>Connects to the Christian channel network: CCLI SongSelect, PraiseCharts, Multitracks.com, Planning Center, and worship leader platforms</li>
          <li>Provides marketing, promotion, accounting, and analytics tools alongside distribution</li>
          <li>Partners with publishers and aggregates royalty collection across 60+ PROs, MROs, and CCLI</li>
          <li>Manages royalty splits, multi-currency payouts, and transparent statements</li>
          <li>Tracks Church Adoption with our proprietary scoring across the church market</li>
        </ul>
        <h3>What Selah is not</h3>
        <p>Selah is not your publisher. We partner with publishers and aggregate global publishing administration on their behalf. Your existing publishing relationships continue.</p>
        <h3>Service tiers</h3>
        <p>Selah is available across self-service, managed, label services, publishing partnerships, YouTube services, and enterprise / partner portal tiers. Contact our team for tier details and onboarding.</p>
        <h3>Next steps</h3>
        <p>If you&apos;re new, start with the <a href="#quickstart">Quickstart</a> guide. If you&apos;re evaluating, the <a href="#concepts">Core concepts</a> page explains how Selah models the Christian music distribution value chain.</p>
      </>
    ),
  },
  quickstart: {
    eyebrow: "Get started",
    title: "Quickstart",
    body: (
      <>
        <p>Get your first release live on Selah in under 30 minutes. This guide walks through the five-stage release lifecycle from catalog onboarding to royalty accounting.</p>
        <h3>1. Onboard your catalog</h3>
        <p>Import your existing tracks via CSV upload or connect an existing distributor for catalog migration. Selah supports ISRC matching, UPC linking, and composition-level metadata.</p>
        <h3>2. Configure rights & splits</h3>
        <p>For each track, define master ownership, publishing splits, neighboring rights shares, and YouTube Content ID rights. Participants confirm via signed agreements before delivery.</p>
        <h3>3. Build the release</h3>
        <p>Use the Release Builder to walk through 8 steps: Release Details, Tracks & Assets, Metadata, Christian Metadata, Rights & Splits, Distribution, Campaign, and Review.</p>
        <h3>4. Deliver to DSPs</h3>
        <p>Selecting Worldwide delivery sends to Spotify, Apple Music, YouTube Music, Amazon Music, TikTok, Deezer, Tidal, Pandora, SoundCloud, Audiomack, and the CMG Christian channel network.</p>
        <h3>5. Launch the campaign</h3>
        <p>Configure playlist pitching, church outreach, Christian radio servicing, YouTube strategy, and PR. Track everything inside the Campaign Command Center.</p>
      </>
    ),
  },
  concepts: {
    eyebrow: "Get started",
    title: "Core concepts",
    body: (
      <>
        <p>Selah models the Christian music value chain across six layers. Understanding these layers will help you choose the right service tier and configure your account.</p>
        <h3>Roster</h3>
        <p>Every entity Selah serves - artists, worship teams, labels, publishers, churches, managers, producers, and songwriters. Each entity has a service tier and an account manager.</p>
        <h3>Catalog</h3>
        <p>The full corpus of tracks, releases, compositions, videos, and assets you control or administer. Catalog items are the atomic unit Selah operates on.</p>
        <h3>Rights</h3>
        <p>Master, publishing, neighboring, sync, YouTube Content ID, and church licensing rights. Each is tracked separately with its own splits.</p>
        <h3>Royalty</h3>
        <p>Revenue flowing in from DSPs, YouTube, neighboring rights societies, mechanical licensing, sync deals, and church licensing. Allocated to participants via configured splits.</p>
        <h3>Campaign</h3>
        <p>The marketing activity around a release - playlist pitching, church outreach, YouTube strategy, content production, Christian radio, and PR.</p>
        <h3>Partner</h3>
        <p>Labels, publishers, distributors, church networks, and management companies that use Selah&apos;s white-label partner portal to manage their own rosters.</p>
      </>
    ),
  },
  catalog: {
    eyebrow: "Workflow",
    title: "Catalog onboarding",
    body: (
      <>
        <p>Onboard your catalog into Selah via CSV import, direct distributor migration, or manual track creation. All methods normalize into the same catalog schema.</p>
        <h3>CSV import</h3>
        <p>Download the Selah catalog template, fill in track metadata, ISRC/UPC codes, composition IDs, territories, and rights status. Upload via Catalog → Import.</p>
        <h3>Distributor migration</h3>
        <p>Selah supports automated migration from common distributors. Provide credentials or export and we&apos;ll match ISRCs, preserve revenue history, and reconstruct splits.</p>
        <h3>Manual creation</h3>
        <p>For new releases, use the Release Builder. Each track created becomes a catalog item linked to its composition, video assets, and rights records.</p>
      </>
    ),
  },
  rights: {
    eyebrow: "Workflow",
    title: "Rights & splits",
    body: (
      <>
        <p>Selah tracks six rights categories per work, each with independent participant splits.</p>
        <h3>Master rights</h3>
        <p>Ownership of the sound recording. Typically held by the artist or label. Master royalties flow from DSP streaming and download sales.</p>
        <h3>Publishing rights</h3>
        <p>Ownership of the underlying composition. Held by songwriters and their publishers. Publishing royalties flow from mechanical licensing, performance income, and sync deals.</p>
        <h3>Neighboring rights</h3>
        <p>Performance royalties owed to performers and producers when recordings are publicly broadcast. Collected via neighboring rights societies in each territory.</p>
        <h3>YouTube Content ID</h3>
        <p>Rights to monetize and claim videos containing your recordings on YouTube. Selah handles claiming, dispute resolution, and revenue collection.</p>
        <h3>Sync representation</h3>
        <p>Authority to license recordings or compositions for film, TV, advertising, and other audiovisual works.</p>
        <h3>Church licensing</h3>
        <p>Rights for congregational use via CCLI and similar Christian licensing organizations. Tracked separately because of unique terms and revenue mechanics.</p>
      </>
    ),
  },
  distribution: {
    eyebrow: "Workflow",
    title: "Distribution & delivery",
    body: (
      <>
        <p>Selah delivers globally to all major DSPs plus a network of Christian-native channels. Delivery is configured per release with full territory granularity.</p>
        <h3>Standard DSPs</h3>
        <p>Spotify, Apple Music, YouTube Music, Amazon Music, TikTok, Instagram, Deezer, Tidal, Pandora, SoundCloud, and Audiomack.</p>
        <h3>Christian channels</h3>
        <p>CCLI SongSelect, worship leader networks, church planning platforms, Christian radio servicing networks, and worship resource partners.</p>
        <h3>Territory controls</h3>
        <p>Select Worldwide, choose specific territories, or exclude markets. Useful for managing publisher restrictions or staggered international releases.</p>
        <h3>Delivery status</h3>
        <p>Track delivery state per DSP per release: Queued, Delivered, Accepted, Rejected, or Action required. Rejections surface with the DSP&apos;s reason for fast resolution.</p>
      </>
    ),
  },
  royalties: {
    eyebrow: "Workflow",
    title: "Royalty accounting",
    body: (
      <>
        <p>Selah&apos;s royalty engine processes incoming revenue, allocates it via configured splits, and generates statements for every participant.</p>
        <h3>Revenue intake</h3>
        <p>Daily import from every DSP and rights body. Selah normalizes currencies, matches earnings to your catalog, and surfaces unmatched income for review.</p>
        <h3>Allocation</h3>
        <p>Revenue flows through the configured rights waterfall: gross → platform deductions → distribution fee → publishing allocation → marketing recoupment → net participant payouts.</p>
        <h3>Statements</h3>
        <p>Generate quarterly or monthly statements per payee. Each statement details earnings by source, territory, and release, with line-item recoupment tracking.</p>
        <h3>Payment runs</h3>
        <p>Configurable payment cadence (monthly, quarterly, threshold-based). Selah handles tax withholding, currency conversion, and bank/wire/Stripe Connect payouts.</p>
      </>
    ),
  },
  "christian-metadata": {
    eyebrow: "Christian-native",
    title: "Christian metadata",
    body: (
      <>
        <p>Selah adds purpose-built metadata fields that secular distribution platforms do not support. These fields drive the Church Adoption Funnel and Christian-native discoverability.</p>
        <h3>Required fields</h3>
        <ul>
          <li><strong>Scripture reference</strong> - primary biblical anchor for the song</li>
          <li><strong>Primary theme</strong> - Praise, Worship, Prayer, Salvation, Resurrection, Lament, Communion, Christmas, Easter, Mission, Revival, Discipleship, Scripture meditation, Baptism, Surrender, Hope, Grace, Redemption</li>
          <li><strong>Worship suitability</strong> - High, Medium, or Low based on congregational singability</li>
          <li><strong>CCLI status</strong> - Listed, Pending, or Not Listed</li>
        </ul>
        <h3>Optional but recommended</h3>
        <ul>
          <li>Chord chart availability</li>
          <li>Lead sheet availability</li>
          <li>Sunday setlist potential</li>
          <li>Seasonal relevance (Advent, Lent, Easter, etc.)</li>
          <li>Denominational sensitivity notes</li>
          <li>Theological review status</li>
          <li>Ministry focus</li>
        </ul>
      </>
    ),
  },
  ccli: {
    eyebrow: "Christian-native",
    title: "CCLI workflow",
    body: (
      <>
        <p>Selah integrates with CCLI workflows for songs intended for congregational use. This unlocks church licensing revenue streams that secular distributors don&apos;t support.</p>
        <h3>Registration</h3>
        <p>Submit songs for CCLI listing directly from the Publishing module. Selah pre-populates required fields from your composition metadata.</p>
        <h3>Reporting</h3>
        <p>Receive quarterly congregational use reports from CCLI. Selah ingests reports automatically and allocates revenue per song and territory.</p>
        <h3>Chord chart distribution</h3>
        <p>Distribute chord charts and lead sheets to CCLI&apos;s SongSelect catalog. Worship leaders can download directly without leaving the platform they already use.</p>
      </>
    ),
  },
  "church-adoption": {
    eyebrow: "Christian-native",
    title: "Church Adoption Score",
    body: (
      <>
        <p>The Church Adoption Score is a proprietary 100-point metric that quantifies how well a song is performing inside the church market. It complements DSP streaming metrics, which under-represent congregational usage.</p>
        <h3>Components</h3>
        <ul>
          <li><strong>Congregational suitability</strong> - singability, tempo, key, structure</li>
          <li><strong>Lyric clarity</strong> - theological clarity and singability of lyrics</li>
          <li><strong>Theological alignment</strong> - alignment with mainstream Reformed, evangelical, charismatic positions</li>
          <li><strong>Worship leader engagement</strong> - saves, downloads, and shares by worship leaders</li>
          <li><strong>Chord chart availability</strong> - presence and quality of supporting resources</li>
          <li><strong>Church network traction</strong> - adoption across CMG&apos;s church network</li>
          <li><strong>Repeat usage signal</strong> - reported recurring Sunday usage</li>
        </ul>
        <h3>How it&apos;s used</h3>
        <p>The score informs campaign strategy, helps prioritize church outreach, and surfaces songs with high congregational potential that may be under-promoted to worship leaders.</p>
      </>
    ),
  },
  youtube: {
    eyebrow: "Workflow",
    title: "YouTube monetization",
    body: (
      <>
        <p>Selah manages YouTube Content ID claiming, conflict resolution, channel optimization, and revenue tracking for every video asset in your catalog.</p>
        <h3>Content ID claims</h3>
        <p>Upload your reference audio to Content ID. Selah claims monetization on user-generated content using your recording. Revenue is tracked in the YouTube module and flows through standard royalty accounting.</p>
        <h3>Conflict resolution</h3>
        <p>When Content ID surfaces ownership disputes or publishing conflicts, Selah&apos;s YouTube team handles the dispute lifecycle end-to-end. You see the status; we do the work.</p>
        <h3>Channel services</h3>
        <p>For Label Services and Enterprise tier accounts, CMG provides full channel optimization, video release strategy, short-form content strategy, and audience development.</p>
      </>
    ),
  },
  publishing: {
    eyebrow: "Workflow",
    title: "Publishing administration",
    body: (
      <>
        <p>Selah&apos;s Publishing Administration handles composition registration with global PROs, mechanical licensing, sync representation, and royalty collection from every territory.</p>
        <h3>PRO registration</h3>
        <p>Selah registers compositions with ASCAP, BMI, SESAC, APRA AMCOS, PRS, GEMA, SACEM, and 50+ other societies. We track conflicts and unmatched works for resolution.</p>
        <h3>Mechanical licensing</h3>
        <p>Selah manages mechanical licensing across all territories via direct deals with HFA, MLC, MCPS, and equivalent bodies in each market.</p>
        <h3>Sync representation</h3>
        <p>Available to Label Services and Publishing Admin tier accounts. CMG&apos;s sync team pitches your compositions for film, TV, ads, and games.</p>
      </>
    ),
  },
  "label-services": {
    eyebrow: "Service",
    title: "Label Services",
    body: (
      <>
        <p>Label Services is Selah&apos;s managed-distribution tier for selected Christian artists, labels, ministries, and rights holders. Includes everything in Self-Service plus a dedicated account manager and hands-on campaign work.</p>
        <h3>What&apos;s included</h3>
        <ul>
          <li>Dedicated account manager and campaign team</li>
          <li>Release strategy and A&amp;R consultation</li>
          <li>Playlist pitching across editorial Christian and worship playlists</li>
          <li>Church outreach to 8,200+ worship leaders</li>
          <li>Christian radio servicing across 12 markets</li>
          <li>YouTube channel optimization and short-form strategy</li>
          <li>Marketing campaign management and recoupment</li>
          <li>Publishing administration aggregation</li>
          <li>Sync representation</li>
          <li>Brand and ministry partnership development</li>
        </ul>
        <h3>How to apply</h3>
        <p>Label Services is selective. Apply through the Label Services page inside the demo, or contact our team through the contact page.</p>
      </>
    ),
  },
};

export default function DocsPage() {
  const [active, setActive] = useState("welcome");
  const [query, setQuery] = useState("");
  const current = content[active];

  return (
    <div className="max-w-[1240px] mx-auto px-8 py-10 grid grid-cols-12 gap-10">
      {/* Sidebar */}
      <aside className="col-span-12 md:col-span-3 md:sticky md:top-[80px] md:h-[calc(100vh-100px)] md:overflow-y-auto">
        <div className="relative mb-5">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Search docs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-[34px] pl-9 pr-3 rounded-md border border-border bg-surface text-[13px] placeholder:text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
          />
        </div>
        {sections.map((section) => (
          <div key={section.label} className="mb-6">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted mb-2 px-2">
              {section.label}
            </p>
            <div className="space-y-0.5">
              {section.items
                .filter((i) => !query || i.title.toLowerCase().includes(query.toLowerCase()))
                .map((item) => {
                  const isActive = active === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActive(item.id)}
                      className={`group w-full flex items-center gap-2.5 px-2 py-1.5 rounded-md text-[13px] font-medium text-left transition-all ${
                        isActive
                          ? "bg-accent-soft text-accent"
                          : "text-subtle hover:text-foreground hover:bg-surface"
                      }`}
                    >
                      <item.icon
                        size={14}
                        strokeWidth={isActive ? 2.2 : 1.8}
                        className={isActive ? "text-accent" : "text-muted group-hover:text-foreground"}
                      />
                      {item.title}
                    </button>
                  );
                })}
            </div>
          </div>
        ))}
      </aside>

      {/* Content */}
      <article className="col-span-12 md:col-span-9 max-w-[760px]">
        <div className="mb-2 flex items-center gap-1.5 text-[12px] text-muted">
          <span>Docs</span>
          <ChevronRight size={12} />
          <span>{current.eyebrow}</span>
          <ChevronRight size={12} />
          <span className="text-foreground font-medium">{current.title}</span>
        </div>
        <h1 className="text-[36px] font-bold tracking-tight mb-6">{current.title}</h1>
        <div className="docs-content prose-selah">
          {current.body}
        </div>

        <div className="mt-16 pt-6 border-t border-border flex items-center justify-between">
          <button className="text-[13px] text-muted hover:text-accent transition-colors flex items-center gap-1">
            <ChevronRight size={14} className="rotate-180" />
            Previous
          </button>
          <button className="text-[13px] text-muted hover:text-accent transition-colors flex items-center gap-1">
            Next
            <ChevronRight size={14} />
          </button>
        </div>
      </article>

      <style jsx global>{`
        .docs-content {
          font-size: 14px;
          line-height: 1.75;
          color: rgb(var(--subtle));
        }
        .docs-content p {
          margin-bottom: 16px;
        }
        .docs-content h3 {
          font-size: 18px;
          font-weight: 600;
          color: rgb(var(--foreground));
          margin-top: 32px;
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }
        .docs-content ul {
          margin: 16px 0;
          padding-left: 20px;
        }
        .docs-content li {
          margin-bottom: 6px;
          list-style: disc;
        }
        .docs-content a {
          color: rgb(var(--accent));
          font-weight: 500;
        }
        .docs-content a:hover {
          text-decoration: underline;
        }
        .docs-content strong {
          color: rgb(var(--foreground));
          font-weight: 600;
        }
        .docs-content code {
          background: rgb(var(--surface));
          border: 1px solid rgb(var(--border));
          padding: 1px 6px;
          border-radius: 4px;
          font-family: ui-monospace, SFMono-Regular, monospace;
          font-size: 12.5px;
          color: rgb(var(--accent));
        }
      `}</style>
    </div>
  );
}
