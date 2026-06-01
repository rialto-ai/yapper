"use client";

import { useState } from "react";
import { Search as SearchIcon, Sparkles, Check } from "lucide-react";
import {
  tracks,
  podcasts,
  audiobooks,
  scriptures,
  events,
  artists,
} from "@/lib/demo/data";
import { useDemo } from "@/lib/demo/store";
import { searchDemo, SEARCH_FILTERS, MEANING_CHIPS } from "@/lib/demo/search";
import { ContentCard, ContentRow } from "@/components/demo/content-card";
import { ArtistCard } from "@/components/demo/artist";
import { RedemptiveDiscoveryGraph } from "@/components/demo/discovery";
import { SectionTitle } from "@/components/demo/primitives";

function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {children}
    </div>
  );
}

function RowList({ children }: { children: React.ReactNode }) {
  return <div className="space-y-2">{children}</div>;
}

/* ---------------------------------- Home --------------------------------- */

export function HomeView() {
  const { setTab } = useDemo();
  return (
    <div className="space-y-9">
      <div>
        <h2 className="text-[26px] font-semibold tracking-tightest sm:text-[30px]">
          Welcome to Rejoice
        </h2>
        <p className="mt-1.5 text-[15px] text-subtle">
          Christian audio for worship, formation, and faithful discovery.
        </p>
      </div>

      <section>
        <SectionTitle>Continue Listening</SectionTitle>
        <Grid>
          {[tracks[0], scriptures[1], podcasts[2], audiobooks[0], tracks[5]].map((i) => (
            <ContentCard key={i.id} item={i} />
          ))}
        </Grid>
      </section>

      <section>
        <SectionTitle
          action={
            <button onClick={() => setTab("music")} className="text-[13px] font-medium text-accent hover:underline">
              See all
            </button>
          }
        >
          Featured Worship
        </SectionTitle>
        <Grid>
          {tracks.slice(0, 5).map((t) => (
            <ContentCard key={t.id} item={t} />
          ))}
        </Grid>
      </section>

      <section>
        <SectionTitle
          action={
            <button onClick={() => setTab("scripture")} className="text-[13px] font-medium text-accent hover:underline">
              See all
            </button>
          }
        >
          Scripture for Today
        </SectionTitle>
        <Grid>
          {scriptures.slice(0, 5).map((s) => (
            <ContentCard key={s.id} item={s} />
          ))}
        </Grid>
      </section>

      <section>
        <SectionTitle
          action={
            <button onClick={() => setTab("podcasts")} className="text-[13px] font-medium text-accent hover:underline">
              See all
            </button>
          }
        >
          Podcasts for Discipleship
        </SectionTitle>
        <RowList>
          {podcasts.slice(0, 4).map((p) => (
            <ContentRow key={p.id} item={p} />
          ))}
        </RowList>
      </section>

      <section>
        <SectionTitle
          action={
            <button onClick={() => setTab("audiobooks")} className="text-[13px] font-medium text-accent hover:underline">
              See all
            </button>
          }
        >
          Audiobooks in Progress
        </SectionTitle>
        <Grid>
          {audiobooks.slice(0, 5).map((b) => (
            <ContentCard key={b.id} item={b} />
          ))}
        </Grid>
      </section>

      <section>
        <SectionTitle
          action={
            <button onClick={() => setTab("events")} className="text-[13px] font-medium text-accent hover:underline">
              See all
            </button>
          }
        >
          Upcoming Worship Nights
        </SectionTitle>
        <RowList>
          {events.slice(0, 3).map((e) => (
            <ContentRow key={e.id} item={e} />
          ))}
        </RowList>
      </section>

      <section>
        <SectionTitle
          action={
            <button onClick={() => setTab("artists")} className="text-[13px] font-medium text-accent hover:underline">
              See all
            </button>
          }
        >
          Artists to Follow
        </SectionTitle>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {artists.slice(0, 4).map((a) => (
            <ArtistCard key={a.id} artist={a} />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle>Redemptive Discovery Paths</SectionTitle>
        <RedemptiveDiscoveryGraph compact />
      </section>

      <DemoWaitlist />
    </div>
  );
}

const ROLES = [
  "listener",
  "artist",
  "church",
  "ministry",
  "publisher",
  "donor",
  "technologist",
  "other",
];

function DemoWaitlist() {
  const [done, setDone] = useState(false);
  if (done) {
    return (
      <section className="rounded-2xl border border-border bg-surface p-6 text-center sm:p-8">
        <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <Check size={20} strokeWidth={2.4} />
        </span>
        <h3 className="mt-4 text-[19px] font-semibold tracking-tight">
          Thank you. You are on the demo waitlist.
        </h3>
        <p className="mx-auto mt-2 max-w-md text-[13px] text-muted">
          This demo does not submit data to a live backend yet.
        </p>
      </section>
    );
  }
  return (
    <section className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <h3 className="text-[19px] font-semibold tracking-tight">Join the waitlist</h3>
      <p className="mt-1 text-[13.5px] text-subtle">
        Be the first to know when the Rejoice app launches in Q4 2026.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setDone(true);
        }}
        className="mt-5 grid gap-3 sm:grid-cols-2"
      >
        <input
          required
          placeholder="Name"
          aria-label="Name"
          className="h-10 rounded-lg border border-border bg-card px-3 text-[14px] focus:border-accent focus:outline-none"
        />
        <input
          required
          type="email"
          placeholder="Email"
          aria-label="Email"
          className="h-10 rounded-lg border border-border bg-card px-3 text-[14px] focus:border-accent focus:outline-none"
        />
        <select
          aria-label="I am a"
          defaultValue="listener"
          className="h-10 rounded-lg border border-border bg-card px-3 text-[14px] capitalize focus:border-accent focus:outline-none"
        >
          {ROLES.map((r) => (
            <option key={r} value={r} className="capitalize">
              I am a: {r}
            </option>
          ))}
        </select>
        <input
          placeholder="Location"
          aria-label="Location"
          className="h-10 rounded-lg border border-border bg-card px-3 text-[14px] focus:border-accent focus:outline-none"
        />
        <input
          placeholder="Interest area (e.g. worship, audiobooks)"
          aria-label="Interest area"
          className="h-10 rounded-lg border border-border bg-card px-3 text-[14px] focus:border-accent focus:outline-none sm:col-span-2"
        />
        <button className="btn-primary sm:col-span-2">Join the Waitlist</button>
      </form>
    </section>
  );
}

/* ------------------------------ simple browse ---------------------------- */

export function MusicView() {
  return (
    <BrowseShell title="Music & Worship" subtitle="Songs, hymns, and worship for the whole Church.">
      <Grid>
        {tracks.map((t) => (
          <ContentCard key={t.id} item={t} />
        ))}
      </Grid>
    </BrowseShell>
  );
}

export function PodcastsView() {
  return (
    <BrowseShell title="Podcasts & Teaching" subtitle="Theology, discipleship, culture, and conversation.">
      <RowList>
        {podcasts.map((p) => (
          <ContentRow key={p.id} item={p} />
        ))}
      </RowList>
    </BrowseShell>
  );
}

export function AudiobooksView() {
  return (
    <BrowseShell title="Audiobooks & Teaching" subtitle="Christian books and teaching libraries in audio.">
      <Grid>
        {audiobooks.map((b) => (
          <ContentCard key={b.id} item={b} />
        ))}
      </Grid>
    </BrowseShell>
  );
}

export function ScriptureView() {
  return (
    <BrowseShell
      title="Scripture Audio"
      subtitle="Bible audio connected to songs, teaching, and gatherings."
    >
      <RowList>
        {scriptures.map((s) => (
          <ContentRow key={s.id} item={s} />
        ))}
      </RowList>
    </BrowseShell>
  );
}

export function ArtistsView() {
  return (
    <BrowseShell
      title="Artists & Ministries"
      subtitle="Artists, churches, ministries, publishers, and podcasts."
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {artists.map((a) => (
          <ArtistCard key={a.id} artist={a} />
        ))}
      </div>
    </BrowseShell>
  );
}

function BrowseShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-[24px] font-semibold tracking-tightest sm:text-[28px]">{title}</h2>
      <p className="mb-6 mt-1 text-[14px] text-subtle">{subtitle}</p>
      {children}
    </div>
  );
}

/* --------------------------------- Search -------------------------------- */

export function SearchView() {
  const { query, filter, setQuery, setFilter } = useDemo();
  const results = searchDemo(query, filter);

  return (
    <div>
      <h2 className="text-[24px] font-semibold tracking-tightest sm:text-[28px]">Search</h2>

      {/* Meaning panel */}
      <div className="mt-4 rounded-2xl border border-border bg-surface p-5">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-gold" />
          <p className="text-[15px] font-semibold">Search by meaning, not just keywords.</p>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {MEANING_CHIPS.map((c) => (
            <button
              key={c.label}
              onClick={() => setQuery(c.query)}
              className="rounded-full border border-border-strong bg-card px-3.5 py-1.5 text-[13px] font-medium text-subtle transition-colors hover:border-gold hover:text-foreground"
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="mt-5 flex flex-wrap gap-2">
        {SEARCH_FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
              filter === f
                ? "bg-accent text-accent-foreground"
                : "border border-border-strong bg-card text-subtle hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="mt-6">
        {query.trim() && (
          <p className="mb-3 text-[13px] text-muted">
            {results.total} result{results.total === 1 ? "" : "s"} for “{query}”
          </p>
        )}

        {results.artists.length > 0 && (
          <section className="mb-6">
            <SectionTitle>Artists & ministries</SectionTitle>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {results.artists.map((a) => (
                <ArtistCard key={a.id} artist={a} />
              ))}
            </div>
          </section>
        )}

        {results.content.length > 0 ? (
          <section>
            <SectionTitle>Audio</SectionTitle>
            <RowList>
              {results.content.map((c) => (
                <ContentRow key={c.id} item={c} />
              ))}
            </RowList>
          </section>
        ) : (
          results.artists.length === 0 && (
            <div className="rounded-xl border border-border bg-surface p-8 text-center">
              <SearchIcon size={22} className="mx-auto text-muted" />
              <p className="mt-2 text-[14px] text-subtle">
                No results. Try a theme like <em>lament</em>, <em>hope</em>, or{" "}
                <em>Romans 8</em>.
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
