"use client";

import { useState } from "react";
import {
  MapPin,
  BadgeCheck,
  Check,
  Share2,
  Mail,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";
import type { Artist } from "@/lib/demo/types";
import { artists, getArtist, getContent } from "@/lib/demo/data";
import { useDemo } from "@/lib/demo/store";
import { Artwork, ContentRow, PlayButton } from "@/components/demo/content-card";
import { ThemeChip } from "@/components/demo/primitives";
import { gradientFor } from "@/lib/demo/format";
import { cn } from "@/lib/utils";

export function ArtistCard({ artist }: { artist: Artist }) {
  const { openArtist } = useDemo();
  return (
    <button
      onClick={() => openArtist(artist.id)}
      className="card group p-4 text-left transition-colors hover:border-border-strong"
    >
      <div
        className={cn(
          "flex aspect-[1.6] items-end rounded-xl p-3",
          gradientFor(artist.artwork)
        )}
      >
        <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-semibold text-white backdrop-blur">
          {artist.type}
        </span>
      </div>
      <p className="mt-3 flex items-center gap-1 text-[15px] font-semibold tracking-tight">
        {artist.name}
        <BadgeCheck size={15} className="text-accent" />
      </p>
      <p className="mt-0.5 flex items-center gap-1 text-[12.5px] text-muted">
        <MapPin size={12} /> {artist.location}
      </p>
    </button>
  );
}

function NewsletterMini() {
  const [done, setDone] = useState(false);
  return done ? (
    <p className="rounded-lg bg-accent/[0.08] px-3 py-2 text-[13px] font-medium text-accent">
      Subscribed — demo only.
    </p>
  ) : (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="flex gap-2"
    >
      <input
        type="email"
        required
        placeholder="you@example.com"
        aria-label="Newsletter email"
        className="h-9 flex-1 rounded-lg border border-border bg-card px-3 text-[13px] focus:border-accent focus:outline-none"
      />
      <button className="rounded-lg bg-foreground px-3 text-[13px] font-medium text-background">
        Join
      </button>
    </form>
  );
}

export function ArtistPageDemo({ artistId }: { artistId: string }) {
  const artist = getArtist(artistId);
  const { followed, toggleFollow, closeOverlay, openArtist } = useDemo();
  const [shared, setShared] = useState(false);
  if (!artist) return null;

  const isFollowing = followed.includes(artist.id);
  const tracks = (artist.trackIds ?? []).map(getContent).filter(Boolean);
  const events = (artist.eventIds ?? []).map(getContent).filter(Boolean);
  const featured = artist.featuredTrackId ? getContent(artist.featuredTrackId) : undefined;
  const similar = artists.filter((a) => a.id !== artist.id && a.type === artist.type).slice(0, 3);

  return (
    <div className="pb-10">
      <button
        onClick={closeOverlay}
        className="mb-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-muted hover:text-foreground"
      >
        <ArrowLeft size={15} /> Back
      </button>

      {/* Hero */}
      <div className={cn("rounded-2xl p-6 text-white sm:p-8", gradientFor(artist.artwork))}>
        <span className="rounded-full bg-white/15 px-3 py-1 text-[12px] font-semibold backdrop-blur">
          {artist.type}
        </span>
        <h2 className="mt-3 flex items-center gap-2 text-[28px] font-semibold tracking-tightest sm:text-[34px]">
          {artist.name}
          <BadgeCheck size={22} />
        </h2>
        <p className="mt-1 flex items-center gap-1.5 text-[14px] text-white/85">
          <MapPin size={14} /> {artist.location}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <button
            onClick={() => toggleFollow(artist.id)}
            aria-pressed={isFollowing}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13.5px] font-semibold transition-colors",
              isFollowing ? "bg-white/20 text-white" : "bg-white text-ink hover:bg-white/90"
            )}
          >
            {isFollowing && <Check size={15} />}
            {isFollowing ? "Following" : "Follow"}
          </button>
          {artist.supportEligible && (
            <button className="rounded-full border border-white/40 px-4 py-2 text-[13.5px] font-semibold hover:bg-white/10">
              Support
            </button>
          )}
          <button
            onClick={() => setShared(true)}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/40 px-4 py-2 text-[13.5px] font-semibold hover:bg-white/10"
          >
            <Share2 size={14} /> {shared ? "Link copied" : "Share Page"}
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-7">
          {featured && (
            <section>
              <h3 className="mb-3 text-[16px] font-semibold tracking-tight">Featured</h3>
              <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-3">
                <Artwork token={featured.artwork} kind="track" className="h-16 w-16" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[15px] font-semibold">{featured.title}</p>
                  <p className="truncate text-[13px] text-muted">Latest release</p>
                </div>
                <PlayButton item={featured} />
              </div>
            </section>
          )}

          <section>
            <h3 className="mb-2 text-[16px] font-semibold tracking-tight">About</h3>
            <p className="text-[14.5px] leading-relaxed text-subtle">{artist.bio}</p>
            {artist.traditions && (
              <div className="mt-3 flex flex-wrap gap-2">
                {artist.traditions.map((t) => (
                  <ThemeChip key={t} label={t} />
                ))}
              </div>
            )}
          </section>

          {tracks.length > 0 && (
            <section>
              <h3 className="mb-3 text-[16px] font-semibold tracking-tight">Music & teaching</h3>
              <div className="space-y-2">
                {tracks.map((t) => (
                  <ContentRow key={t!.id} item={t!} />
                ))}
              </div>
            </section>
          )}

          {events.length > 0 && (
            <section>
              <h3 className="mb-3 text-[16px] font-semibold tracking-tight">Events</h3>
              <div className="space-y-2">
                {events.map((e) => (
                  <ContentRow key={e!.id} item={e!} />
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="space-y-5">
          {/* Disclosure */}
          <div className="rounded-xl border border-border bg-surface p-5">
            <div className="mb-2 flex items-center gap-2">
              <ShieldCheck size={16} className="text-accent" />
              <h3 className="text-[14px] font-semibold">Human Artistry Statement</h3>
            </div>
            <p className="text-[13px] leading-relaxed text-subtle">{artist.humanArtistry}</p>
            <p className="mt-2.5 border-t border-border pt-2.5 text-[13px] leading-relaxed text-subtle">
              <span className="font-medium text-foreground">AI use: </span>
              {artist.aiUse}
            </p>
          </div>

          {/* Support */}
          {artist.supportEligible && (
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-[14px] font-semibold">Support this artist</h3>
              <p className="mt-1 text-[12.5px] text-muted">
                Support follows your listening. Demo only.
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <button
                  onClick={() => toggleFollow(artist.id)}
                  className={cn(
                    "rounded-lg px-3 py-2 text-[13px] font-semibold",
                    isFollowing
                      ? "bg-surface text-foreground"
                      : "bg-accent text-accent-foreground"
                  )}
                >
                  {isFollowing ? "Following" : "Follow"}
                </button>
                <button className="rounded-lg border border-border-strong px-3 py-2 text-[13px] font-semibold">
                  Support
                </button>
              </div>
            </div>
          )}

          {/* Newsletter */}
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="mb-2 flex items-center gap-2">
              <Mail size={15} className="text-accent" />
              <h3 className="text-[14px] font-semibold">Join newsletter</h3>
            </div>
            <NewsletterMini />
            <p className="mt-2 text-[11.5px] text-muted">Website & socials: placeholder</p>
          </div>

          {/* Scripture themes */}
          {artist.scriptureThemes && (
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="mb-2.5 text-[14px] font-semibold">Related Scripture themes</h3>
              <div className="flex flex-wrap gap-2">
                {artist.scriptureThemes.map((t) => (
                  <ThemeChip key={t} label={t} />
                ))}
              </div>
            </div>
          )}

          {/* Similar */}
          {similar.length > 0 && (
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="mb-2.5 text-[14px] font-semibold">Similar artists</h3>
              <div className="space-y-2">
                {similar.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => openArtist(a.id)}
                    className="flex w-full items-center gap-3 rounded-lg p-1.5 text-left hover:bg-surface"
                  >
                    <Artwork token={a.artwork} kind="artist" size="sm" className="h-9 w-9" />
                    <span className="text-[13.5px] font-medium">{a.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
