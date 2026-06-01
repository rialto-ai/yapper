import { allContent, artists } from "./data";
import type { AnyContent, Artist } from "./types";
import { creatorOf } from "./format";

function haystackFor(c: AnyContent): string {
  const parts: string[] = [c.title, c.kind, creatorOf(c)];
  if (c.themes) parts.push(...c.themes);
  if (c.scripture) parts.push(...c.scripture);
  if (c.description) parts.push(c.description);
  if (c.kind === "track") parts.push(c.category, c.mood ?? "", c.album);
  if (c.kind === "event") parts.push(c.city);
  if (c.disclosure?.human) parts.push("human-created");
  return parts.join(" ").toLowerCase();
}

function artistHaystack(a: Artist): string {
  return [a.name, a.type, a.location, a.bio, ...(a.traditions ?? []), ...(a.scriptureThemes ?? [])]
    .join(" ")
    .toLowerCase();
}

const FILTER_TO_KIND: Record<string, string> = {
  Music: "track",
  Podcasts: "podcast",
  Audiobooks: "audiobook",
  Scripture: "scripture",
  Events: "event",
};

export interface SearchResults {
  content: AnyContent[];
  artists: Artist[];
  total: number;
}

export function searchDemo(query: string, filter: string): SearchResults {
  const q = query.trim().toLowerCase();

  let content = q
    ? allContent.filter((c) => haystackFor(c).includes(q))
    : allContent;
  let matchedArtists = q
    ? artists.filter((a) => artistHaystack(a).includes(q))
    : artists;

  if (filter !== "All") {
    if (filter === "Artists") {
      content = [];
    } else {
      const kind = FILTER_TO_KIND[filter];
      content = content.filter((c) => c.kind === kind);
      matchedArtists = [];
    }
  }

  return {
    content,
    artists: matchedArtists,
    total: content.length + matchedArtists.length,
  };
}

export const SEARCH_FILTERS = [
  "All",
  "Music",
  "Podcasts",
  "Audiobooks",
  "Scripture",
  "Artists",
  "Events",
];

export const MEANING_CHIPS: { label: string; query: string }[] = [
  { label: "Songs for grief and hope", query: "lament hope" },
  { label: "Audio on prayer", query: "prayer" },
  { label: "Worship for family mornings", query: "family worship" },
  { label: "Romans 8 across music and teaching", query: "Romans 8" },
  { label: "Advent listening path", query: "Advent" },
  { label: "Local worship nights", query: "worship night" },
];
