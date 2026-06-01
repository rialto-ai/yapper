const GRADIENTS: Record<string, string> = {
  blue: "from-[#26456f] to-[#3a5c8a]",
  deep: "from-[#152a47] to-[#274a78]",
  gold: "from-[#9c7a45] to-[#c2a062]",
  stone: "from-[#8c8473] to-[#a89f8b]",
  slate: "from-[#3f4a5e] to-[#5b6b86]",
  dawn: "from-[#b07f4e] to-[#d6a463]",
  night: "from-[#171d2b] to-[#2b3650]",
  sage: "from-[#5c7a5e] to-[#84a085]",
};

export function gradientFor(token: string): string {
  return `bg-gradient-to-br ${GRADIENTS[token] ?? GRADIENTS.blue}`;
}

/** "4:14" for short audio, "7h 0m" for long-form. */
export function formatDuration(seconds?: number): string {
  if (!seconds || seconds <= 0) return "—";
  if (seconds >= 3600) {
    const h = Math.floor(seconds / 3600);
    const m = Math.round((seconds % 3600) / 60);
    return `${h}h ${m}m`;
  }
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

/** Always m:ss — used by the player's elapsed/remaining timers. */
export function formatClock(seconds: number): string {
  const safe = Math.max(0, Math.floor(seconds));
  const m = Math.floor(safe / 60);
  const s = safe % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function kindLabel(kind: string): string {
  switch (kind) {
    case "track":
      return "Song";
    case "podcast":
      return "Podcast";
    case "audiobook":
      return "Audiobook";
    case "scripture":
      return "Scripture";
    case "event":
      return "Event";
    case "playlist":
      return "Playlist";
    case "artist":
      return "Artist";
    default:
      return kind;
  }
}

import type { AnyContent } from "./types";

/** Short attribution line for a content item. */
export function creatorOf(item: AnyContent): string {
  switch (item.kind) {
    case "track":
      return item.artist;
    case "podcast":
      return item.show || item.host;
    case "audiobook":
      return item.author;
    case "scripture":
      return `Scripture · ${item.book}`;
    case "event":
      return `${item.host} · ${item.city}`;
    default:
      return "";
  }
}
