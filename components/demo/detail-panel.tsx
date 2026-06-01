"use client";

import {
  ArrowLeft,
  Clock,
  MapPin,
  Calendar,
  Check,
  FileText,
  BookOpen,
} from "lucide-react";
import type { AnyContent } from "@/lib/demo/types";
import { allContent, getContent, getArtist } from "@/lib/demo/data";
import { useDemo } from "@/lib/demo/store";
import {
  Artwork,
  ContentRow,
  PlayButton,
  SaveButton,
} from "@/components/demo/content-card";
import { DisclosureBadge, ThemeChip } from "@/components/demo/primitives";
import { gradientFor, formatDuration, kindLabel, creatorOf } from "@/lib/demo/format";

function relatedTo(item: AnyContent): AnyContent[] {
  if (item.kind === "scripture" && item.linked) {
    return item.linked.map(getContent).filter(Boolean) as AnyContent[];
  }
  const themes = new Set(item.themes ?? []);
  return allContent
    .filter((c) => c.id !== item.id && (c.themes ?? []).some((t) => themes.has(t)))
    .slice(0, 5);
}

export function ContentDetailPanel({ id }: { id: string }) {
  const item = getContent(id);
  const { closeOverlay, rsvped, toggleRsvp, openArtist } = useDemo();
  if (!item) return null;

  const related = relatedTo(item);
  const artistId =
    item.kind === "track" ? item.artistId : undefined;

  return (
    <div className="pb-10">
      <button
        onClick={closeOverlay}
        className="mb-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-muted hover:text-foreground"
      >
        <ArrowLeft size={15} /> Back
      </button>

      {/* Header */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end">
        <Artwork
          token={item.artwork}
          kind={item.kind}
          size="lg"
          className="h-40 w-40 shrink-0 shadow-sm"
        />
        <div className="min-w-0 flex-1">
          <span className="text-[12px] font-semibold uppercase tracking-wider text-gold">
            {kindLabel(item.kind)}
          </span>
          <h2 className="mt-1 text-[26px] font-semibold leading-tight tracking-tightest sm:text-[32px]">
            {item.title}
          </h2>
          <p className="mt-1 text-[15px] text-subtle">
            {artistId ? (
              <button
                onClick={() => openArtist(artistId)}
                className="font-medium text-accent hover:underline"
              >
                {creatorOf(item)}
              </button>
            ) : (
              creatorOf(item)
            )}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-muted">
            {item.duration && item.kind !== "event" && (
              <span className="inline-flex items-center gap-1">
                <Clock size={13} /> {formatDuration(item.duration)}
              </span>
            )}
            {item.kind === "audiobook" && (
              <span className="inline-flex items-center gap-1">
                <BookOpen size={13} /> {item.chapters} chapters · {item.publisher}
              </span>
            )}
            {item.kind === "podcast" && item.transcriptAvailable && (
              <span className="inline-flex items-center gap-1">
                <FileText size={13} /> Transcript available
              </span>
            )}
            {item.kind === "audiobook" && (
              <span>Narrated by {item.narrator}</span>
            )}
            {item.kind === "scripture" && <span>Read by {item.reader}</span>}
            {item.kind === "event" && (
              <>
                <span className="inline-flex items-center gap-1">
                  <MapPin size={13} /> {item.city} · {item.venue}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar size={13} /> {item.date} · {item.time}
                </span>
              </>
            )}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2.5">
            {item.kind === "event" ? (
              <button
                onClick={() => toggleRsvp(item.id)}
                className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-[14px] font-semibold ${
                  rsvped.includes(item.id)
                    ? "bg-surface text-foreground"
                    : "bg-accent text-accent-foreground hover:bg-accent-hover"
                }`}
              >
                {rsvped.includes(item.id) && <Check size={15} />}
                {rsvped.includes(item.id) ? "Interest Registered" : "RSVP Interest"}
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <PlayButton item={item} size={48} />
                <span className="text-[13px] text-muted">Play</span>
              </div>
            )}
            <SaveButton id={item.id} />
            {item.supportEligible && (
              <button className="rounded-full border border-border-strong px-4 py-2 text-[13px] font-semibold hover:bg-surface">
                Support
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="mt-7 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6">
          {item.description && (
            <p className="text-[15px] leading-relaxed text-subtle">{item.description}</p>
          )}

          {item.kind === "track" && item.lyricsExcerpt && (
            <blockquote className="border-l-2 border-gold pl-4 font-serif text-[17px] italic leading-relaxed text-foreground">
              {item.lyricsExcerpt}
            </blockquote>
          )}

          {item.kind === "scripture" && item.reflection && (
            <div className="rounded-xl border border-border bg-surface p-4">
              <p className="text-[12px] font-semibold uppercase tracking-wider text-muted">
                Reflection prompt
              </p>
              <p className="mt-1.5 text-[14.5px] leading-relaxed text-subtle">
                {item.reflection}
              </p>
            </div>
          )}

          {item.themes && item.themes.length > 0 && (
            <div>
              <p className="mb-2 text-[13px] font-semibold">Themes</p>
              <div className="flex flex-wrap gap-2">
                {item.themes.map((t) => (
                  <ThemeChip key={t} label={t} />
                ))}
              </div>
            </div>
          )}

          {item.scripture && item.scripture.length > 0 && (
            <div>
              <p className="mb-2 text-[13px] font-semibold">Scripture references</p>
              <div className="flex flex-wrap gap-2">
                {item.scripture.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-accent/[0.07] px-2.5 py-1 text-[13px] font-medium text-accent"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {related.length > 0 && (
            <div>
              <p className="mb-3 text-[14px] font-semibold">
                {item.kind === "scripture" || item.kind === "event"
                  ? "Connected audio"
                  : "Related listening"}
              </p>
              <div className="space-y-2">
                {related.map((r) => (
                  <ContentRow key={r.id} item={r} />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-5">
          {item.disclosure && <DisclosureBadge disclosure={item.disclosure} />}
          {item.kind === "event" && item.relatedArtists && (
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="mb-2.5 text-[14px] font-semibold">Featuring</p>
              <div className="space-y-2">
                {item.relatedArtists.map((aid) => {
                  const a = getArtist(aid);
                  if (!a) return null;
                  return (
                    <button
                      key={aid}
                      onClick={() => openArtist(aid)}
                      className="flex w-full items-center gap-3 rounded-lg p-1.5 text-left hover:bg-surface"
                    >
                      <Artwork token={a.artwork} kind="artist" size="sm" className="h-9 w-9" />
                      <span className="text-[13.5px] font-medium">{a.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
          {(item.kind === "track" || item.kind === "audiobook") && (
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="text-[14px] font-semibold">
                {item.kind === "track" ? `From ${item.album}` : `Published by ${item.publisher}`}
              </p>
              <p className="mt-1 text-[12.5px] text-muted">
                {item.kind === "track" ? item.category : `Narrated by ${item.narrator}`}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
