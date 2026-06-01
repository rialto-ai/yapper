"use client";

import { useState } from "react";
import {
  MapPin,
  Calendar,
  Check,
  Minus,
  Plus,
  ShieldCheck,
  X,
  HandHeart,
  Baby,
  ShieldHalf,
  Play,
} from "lucide-react";
import {
  events,
  playlists,
  audiobooks,
  scriptures,
  getContent,
  getArtist,
} from "@/lib/demo/data";
import { useDemo } from "@/lib/demo/store";
import { ContentRow, ContentCard, Artwork } from "@/components/demo/content-card";
import { SectionTitle } from "@/components/demo/primitives";
import { gradientFor } from "@/lib/demo/format";
import { cn } from "@/lib/utils";

/* --------------------------------- Events -------------------------------- */

export function EventsView() {
  const { rsvped, toggleRsvp, openDetail } = useDemo();
  const cities = ["All", ...Array.from(new Set(events.map((e) => e.city)))];
  const [city, setCity] = useState("All");
  const shown = city === "All" ? events : events.filter((e) => e.city === city);

  return (
    <div>
      <h2 className="text-[24px] font-semibold tracking-tightest sm:text-[28px]">
        Worship Nights & Events
      </h2>
      <p className="mb-4 mt-1 max-w-2xl text-[14px] leading-relaxed text-subtle">
        Listening should lead to gathering. Rejoice helps connect Christian audio
        with worship nights, concerts, church events, and local moments of praise.
      </p>

      <div className="mb-5 flex flex-wrap gap-2">
        {cities.map((c) => (
          <button
            key={c}
            onClick={() => setCity(c)}
            className={cn(
              "rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors",
              city === c
                ? "bg-accent text-accent-foreground"
                : "border border-border-strong bg-card text-subtle hover:text-foreground"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {shown.map((e) => {
          const isRsvped = rsvped.includes(e.id);
          return (
            <div key={e.id} className="card overflow-hidden">
              <div className={cn("flex h-24 items-end p-4 text-white", gradientFor(e.artwork))}>
                {e.familyFriendly && (
                  <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[11px] font-semibold backdrop-blur">
                    Family-friendly
                  </span>
                )}
              </div>
              <div className="p-4">
                <button onClick={() => openDetail(e.id)} className="text-left">
                  <h3 className="text-[16px] font-semibold tracking-tight hover:text-accent">
                    {e.title}
                  </h3>
                </button>
                <p className="mt-1 text-[13px] text-muted">{e.host}</p>
                <div className="mt-2.5 space-y-1 text-[13px] text-subtle">
                  <p className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-muted" /> {e.city} · {e.venue}
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-muted" /> {e.date} · {e.time}
                  </p>
                </div>
                <button
                  onClick={() => toggleRsvp(e.id)}
                  className={cn(
                    "mt-3.5 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-semibold transition-colors",
                    isRsvped
                      ? "bg-surface text-foreground"
                      : "bg-accent text-accent-foreground hover:bg-accent-hover"
                  )}
                >
                  {isRsvped && <Check size={14} />}
                  {isRsvped ? "Interest Registered" : "RSVP Interest"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* --------------------------------- Family -------------------------------- */

export function FamilyView() {
  const { family, setFamily } = useDemo();
  const familyPlaylists = playlists.filter((p) => p.family);

  const toggles: { key: keyof typeof family; label: string; icon: typeof Baby }[] = [
    { key: "kidsMode", label: "Kids Mode", icon: Baby },
    { key: "familySafeOnly", label: "Family-safe only", icon: ShieldHalf },
    { key: "autoplay", label: "Autoplay", icon: Play },
  ];

  return (
    <div>
      <h2 className="text-[24px] font-semibold tracking-tightest sm:text-[28px]">
        Family Listening
      </h2>
      <p className="mb-6 mt-1 max-w-2xl text-[14px] leading-relaxed text-subtle">
        A calmer, safer audio environment for households, children, and churches —
        with parent-controlled listening and family-safe sponsorship only.
      </p>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
        {/* Controls + profile */}
        <div className="space-y-4">
          <div className="card p-5">
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-wider text-muted">
              Household controls
            </p>
            <div className="space-y-2.5">
              {toggles.map(({ key, label, icon: Icon }) => (
                <label
                  key={key}
                  className="flex cursor-pointer items-center justify-between rounded-lg border border-border bg-background px-3.5 py-2.5"
                >
                  <span className="flex items-center gap-2.5 text-[14px] font-medium">
                    <Icon size={16} className="text-accent" />
                    {label}
                  </span>
                  <Toggle
                    on={family[key]}
                    onChange={(v) => setFamily(key, v)}
                    label={label}
                  />
                </label>
              ))}
            </div>
            <p className="mt-3 text-[12px] text-muted">
              {family.kidsMode
                ? "Kids Mode is on — only family-suitable content is shown."
                : "Standard household profile."}
            </p>
          </div>

          <div className="card p-5">
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-wider text-muted">
              Profiles
            </p>
            <div className="space-y-2">
              {["Household", "Kids", "Parents"].map((p, i) => (
                <div
                  key={p}
                  className="flex items-center gap-3 rounded-lg border border-border bg-background p-2.5"
                >
                  <span
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-full text-[13px] font-semibold text-white",
                      gradientFor(["dawn", "sage", "blue"][i])
                    )}
                  >
                    {p[0]}
                  </span>
                  <span className="text-[14px] font-medium">{p}</span>
                  {p === "Kids" && family.kidsMode && (
                    <span className="ml-auto rounded-full bg-accent/[0.08] px-2 py-0.5 text-[11px] font-semibold text-accent">
                      Active
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Playlists */}
        <div>
          <SectionTitle>Family playlists</SectionTitle>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {familyPlaylists.map((pl) => (
              <ContentCard key={pl.id} item={pl} />
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <MiniList title="Morning Scripture" ids={["s-ps23", "s-eph1"]} />
            <MiniList title="Bedtime Psalms" ids={["s-ps42", "t-night"]} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniList({ title, ids }: { title: string; ids: string[] }) {
  const items = ids.map(getContent).filter(Boolean);
  return (
    <div className="card p-4">
      <p className="mb-2.5 text-[14px] font-semibold">{title}</p>
      <div className="space-y-2">
        {items.map((i) => (
          <ContentRow key={i!.id} item={i!} />
        ))}
      </div>
    </div>
  );
}

function Toggle({
  on,
  onChange,
  label,
}: {
  on: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={() => onChange(!on)}
      className={cn(
        "relative h-6 w-11 shrink-0 rounded-full transition-colors",
        on ? "bg-accent" : "bg-surface-2"
      )}
    >
      <span
        className={cn(
          "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform",
          on ? "translate-x-[22px]" : "translate-x-0.5"
        )}
      />
    </button>
  );
}

/* --------------------------------- Support ------------------------------- */

const RECIPIENTS: { id: string; name: string; sub: string }[] = [
  { id: "a-grace", name: "Grace & Harp", sub: "Artist" },
  { id: "a-psalms", name: "The Psalms Project", sub: "Ministry" },
  { id: "a-emmaus", name: "Emmaus Audio", sub: "Publisher" },
  { id: "mission", name: "Mission Field Notes", sub: "Podcast" },
  { id: "infra", name: "Open Christian Audio Infrastructure", sub: "Public-interest" },
];

export function SupportView() {
  const { allocations, setAllocation } = useDemo();
  const total = Object.values(allocations).reduce((a, b) => a + b, 0);

  return (
    <div className="max-w-3xl">
      <h2 className="text-[24px] font-semibold tracking-tightest sm:text-[28px]">
        Support that follows your listening.
      </h2>
      <p className="mb-6 mt-1 text-[14px] leading-relaxed text-subtle">
        Rejoice is exploring a user-centric support model where a member&rsquo;s
        contribution can flow toward the artists, ministries, publishers, and
        creators they actually listen to, follow, save, or intentionally support.
      </p>

      <div className="card p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-[14px] font-semibold">
            <HandHeart size={17} className="text-accent" /> Total monthly support
          </span>
          <span className="text-[22px] font-semibold tabular-nums">
            ${total.toFixed(2)}
          </span>
        </div>

        <div className="mt-5 space-y-4">
          {RECIPIENTS.map((r) => {
            const amount = allocations[r.id] ?? 0;
            const pct = total > 0 ? (amount / total) * 100 : 0;
            return (
              <div key={r.id}>
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-[14px] font-medium">{r.name}</p>
                    <p className="text-[12px] text-muted">{r.sub}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setAllocation(r.id, Math.max(0, amount - 0.5))}
                      aria-label={`Decrease support for ${r.name}`}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-border-strong hover:bg-surface"
                    >
                      <Minus size={13} />
                    </button>
                    <span className="w-14 text-center text-[14px] font-semibold tabular-nums">
                      ${amount.toFixed(2)}
                    </span>
                    <button
                      onClick={() => setAllocation(r.id, amount + 0.5)}
                      aria-label={`Increase support for ${r.name}`}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-border-strong hover:bg-surface"
                    >
                      <Plus size={13} />
                    </button>
                  </div>
                </div>
                <input
                  type="range"
                  min={0}
                  max={10}
                  step={0.1}
                  value={amount}
                  onChange={(e) => setAllocation(r.id, Number(e.target.value))}
                  aria-label={`Support amount for ${r.name}`}
                  className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-full accent-accent"
                  style={{
                    background: `linear-gradient(to right, rgb(var(--accent)) ${pct}%, rgb(var(--surface-2)) ${pct}%)`,
                  }}
                />
              </div>
            );
          })}
        </div>

        <p className="mt-5 rounded-lg bg-surface px-4 py-3 text-[12.5px] leading-relaxed text-muted">
          Demo only. Final creator support mechanics will depend on licensing,
          rights, governance, and partner agreements.
        </p>
      </div>
    </div>
  );
}

/* --------------------------------- Library ------------------------------- */

export function LibraryView() {
  const { saved, followed, rsvped, queue } = useDemo();

  const recent = queue.slice().reverse().map(getContent).filter(Boolean);
  const savedItems = saved.map(getContent).filter(Boolean);
  const savedSongs = savedItems.filter((i) => i!.kind === "track");
  const savedPods = savedItems.filter((i) => i!.kind === "podcast");
  const booksInProgress = audiobooks.slice(0, 2);
  const followedArtists = followed.map(getArtist).filter(Boolean);
  const upcoming = rsvped.map(getContent).filter(Boolean);
  const planItems = scriptures.slice(0, 3);

  return (
    <div className="space-y-8">
      <h2 className="text-[24px] font-semibold tracking-tightest sm:text-[28px]">Library</h2>

      <LibrarySection title="Recently Played" empty="Play something to see it here.">
        {recent.length > 0 && (
          <div className="space-y-2">
            {recent.slice(0, 5).map((i) => (
              <ContentRow key={i!.id} item={i!} />
            ))}
          </div>
        )}
      </LibrarySection>

      <LibrarySection
        title="Saved Songs"
        empty="Tap the heart on any song to save it."
      >
        {savedSongs.length > 0 && (
          <div className="space-y-2">
            {savedSongs.map((i) => (
              <ContentRow key={i!.id} item={i!} />
            ))}
          </div>
        )}
      </LibrarySection>

      <LibrarySection title="Followed Artists" empty="Follow an artist to see them here.">
        {followedArtists.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {followedArtists.map((a) => (
              <div key={a!.id} className="flex items-center gap-2.5 rounded-full border border-border bg-card py-1.5 pl-1.5 pr-4">
                <Artwork token={a!.artwork} kind="artist" size="sm" className="h-8 w-8" />
                <span className="text-[13.5px] font-medium">{a!.name}</span>
              </div>
            ))}
          </div>
        )}
      </LibrarySection>

      <LibrarySection title="Saved Podcasts" empty="Save podcasts to build your queue.">
        {savedPods.length > 0 && (
          <div className="space-y-2">
            {savedPods.map((i) => (
              <ContentRow key={i!.id} item={i!} />
            ))}
          </div>
        )}
      </LibrarySection>

      <LibrarySection title="Audiobooks in Progress">
        <div className="space-y-2">
          {booksInProgress.map((b) => (
            <ContentRow key={b.id} item={b} />
          ))}
        </div>
      </LibrarySection>

      <LibrarySection title="Scripture Listening Plan">
        <div className="space-y-2">
          {planItems.map((s) => (
            <ContentRow key={s.id} item={s} />
          ))}
        </div>
      </LibrarySection>

      <LibrarySection title="Upcoming Events" empty="RSVP to an event to see it here.">
        {upcoming.length > 0 && (
          <div className="space-y-2">
            {upcoming.map((e) => (
              <ContentRow key={e!.id} item={e!} />
            ))}
          </div>
        )}
      </LibrarySection>
    </div>
  );
}

function LibrarySection({
  title,
  empty,
  children,
}: {
  title: string;
  empty?: string;
  children?: React.ReactNode;
}) {
  const hasContent = Boolean(children);
  return (
    <section>
      <SectionTitle>{title}</SectionTitle>
      {hasContent ? (
        children
      ) : (
        <p className="rounded-xl border border-dashed border-border-strong bg-surface px-4 py-5 text-[13.5px] text-muted">
          {empty}
        </p>
      )}
    </section>
  );
}

/* -------------------------------- Integrity ------------------------------ */

const AFFIRM = [
  "Human-created music is welcomed and elevated.",
  "AI-assisted work should be clearly disclosed.",
  "Synthetic vocals and synthetic personas must be labelled.",
];
const PROHIBIT = [
  "No deceptive artist biographies, testimonies, church affiliations, or identities.",
  "No synthetic worship leaders presented as human worshippers.",
  "No fake spiritual authority.",
];

export function IntegrityView() {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-2">
        <ShieldCheck size={20} className="text-accent" />
        <h2 className="text-[24px] font-semibold tracking-tightest sm:text-[28px]">
          Trust &amp; Disclosure
        </h2>
      </div>
      <p className="mb-6 mt-2 text-[14.5px] leading-relaxed text-subtle">
        Rejoice is building disclosure standards for Christian audio so listeners
        can understand whether a work is human-created, AI-assisted, synthetic,
        translated, sampled, or public domain.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        {AFFIRM.map((t) => (
          <div key={t} className="card flex items-start gap-3 p-4">
            <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/[0.08] text-accent">
              <Check size={14} strokeWidth={2.4} />
            </span>
            <p className="text-[14px] leading-relaxed text-subtle">{t}</p>
          </div>
        ))}
        {PROHIBIT.map((t) => (
          <div key={t} className="card flex items-start gap-3 p-4">
            <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/[0.14] text-gold">
              <X size={14} strokeWidth={2.4} />
            </span>
            <p className="text-[14px] leading-relaxed text-subtle">{t}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-gold/30 bg-gold/[0.06] p-5">
        <p className="font-serif text-[17px] italic leading-relaxed text-foreground">
          Worship and Christian music are not merely sonic outputs. They are acts
          of praise, lament, confession, memory, doctrine, longing, and testimony
          before God. AI is the infrastructure layer, not the spiritual authority.
        </p>
      </div>
    </div>
  );
}
