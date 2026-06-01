"use client";

import {
  Play,
  Pause,
  Heart,
  Music4,
  Mic,
  BookOpen,
  ScrollText,
  CalendarHeart,
  ListMusic,
} from "lucide-react";
import type { AnyContent, Playlist } from "@/lib/demo/types";
import { getContent } from "@/lib/demo/data";
import { gradientFor, formatDuration, kindLabel, creatorOf } from "@/lib/demo/format";
import { useDemo } from "@/lib/demo/store";
import { cn } from "@/lib/utils";

type Item = AnyContent | Playlist;

const kindIcon: Record<string, typeof Music4> = {
  track: Music4,
  podcast: Mic,
  audiobook: BookOpen,
  scripture: ScrollText,
  event: CalendarHeart,
  playlist: ListMusic,
};

function firstPlayable(item: Item): AnyContent | undefined {
  if (item.kind === "playlist") {
    for (const id of item.itemIds) {
      const c = getContent(id);
      if (c) return c;
    }
    return undefined;
  }
  return item;
}

export function Artwork({
  token,
  kind,
  size = "md",
  className,
}: {
  token: string;
  kind: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const Icon = kindIcon[kind] ?? Music4;
  const iconSize = size === "lg" ? 40 : size === "sm" ? 16 : 26;
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl text-white/90",
        gradientFor(token),
        className
      )}
      aria-hidden="true"
    >
      <Icon size={iconSize} strokeWidth={1.5} />
    </div>
  );
}

export function PlayButton({
  item,
  size = 40,
}: {
  item: Item;
  size?: number;
}) {
  const { play, currentId, isPlaying, togglePlay } = useDemo();
  const playable = firstPlayable(item);
  const isCurrent = playable && currentId === playable.id;

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        if (!playable) return;
        if (isCurrent) togglePlay();
        else play(playable);
      }}
      aria-label={isCurrent && isPlaying ? "Pause" : `Play ${item.title}`}
      className="flex shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-sm transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      style={{ width: size, height: size }}
    >
      {isCurrent && isPlaying ? (
        <Pause size={size * 0.42} fill="currentColor" />
      ) : (
        <Play size={size * 0.42} fill="currentColor" className="ml-0.5" />
      )}
    </button>
  );
}

export function SaveButton({ id }: { id: string }) {
  const { saved, toggleSave } = useDemo();
  const isSaved = saved.includes(id);
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        toggleSave(id);
      }}
      aria-label={isSaved ? "Remove from saved" : "Save"}
      aria-pressed={isSaved}
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold",
        isSaved ? "text-gold" : "text-muted hover:text-foreground"
      )}
    >
      <Heart size={16} fill={isSaved ? "currentColor" : "none"} />
    </button>
  );
}

/** Vertical tile for grids. */
export function ContentCard({ item }: { item: Item }) {
  const { openDetail } = useDemo();
  const meta =
    item.kind === "playlist"
      ? `${item.itemIds.length} items`
      : creatorOf(item);
  const onOpen = () => {
    if (item.kind !== "playlist") openDetail(item.id);
  };

  return (
    <div
      onClick={onOpen}
      className={cn(
        "group card overflow-hidden p-3 transition-colors",
        item.kind !== "playlist" && "cursor-pointer hover:border-border-strong"
      )}
    >
      <div className="relative">
        <Artwork token={item.artwork} kind={item.kind} className="aspect-square w-full" />
        <div className="absolute bottom-2 right-2 translate-y-1 opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
          <PlayButton item={item} />
        </div>
      </div>
      <div className="mt-3 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-[14px] font-semibold leading-tight">{item.title}</p>
          <p className="mt-0.5 truncate text-[12.5px] text-muted">{meta}</p>
        </div>
        {item.kind !== "playlist" && <SaveButton id={item.id} />}
      </div>
      {item.kind !== "playlist" && (
        <span className="mt-1 inline-block text-[11px] font-medium uppercase tracking-wide text-gold">
          {kindLabel(item.kind)}
        </span>
      )}
    </div>
  );
}

/** Horizontal row for lists. */
export function ContentRow({ item }: { item: Item }) {
  const { openDetail } = useDemo();
  const meta =
    item.kind === "playlist"
      ? `Playlist · ${item.itemIds.length} items`
      : `${kindLabel(item.kind)} · ${creatorOf(item)}`;
  const onOpen = () => {
    if (item.kind !== "playlist") openDetail(item.id);
  };

  return (
    <div
      onClick={onOpen}
      className={cn(
        "group flex items-center gap-3 rounded-xl border border-border bg-card p-2.5 transition-colors",
        item.kind !== "playlist" && "cursor-pointer hover:border-border-strong"
      )}
    >
      <Artwork token={item.artwork} kind={item.kind} size="sm" className="h-12 w-12 shrink-0" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-[14px] font-medium leading-tight">{item.title}</p>
        <p className="truncate text-[12.5px] text-muted">{meta}</p>
      </div>
      {item.kind !== "playlist" && "duration" in item && (
        <span className="hidden shrink-0 text-[12px] tabular-nums text-muted sm:inline">
          {formatDuration((item as AnyContent).duration)}
        </span>
      )}
      {item.kind !== "playlist" && <SaveButton id={item.id} />}
      <PlayButton item={item} size={34} />
    </div>
  );
}
