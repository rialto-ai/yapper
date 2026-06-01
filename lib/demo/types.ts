// Shared types for the Rejoice interactive demo. All content is fictional and
// for demonstration only — see DemoBanner / DemoNotice components.

export type ContentKind =
  | "track"
  | "podcast"
  | "audiobook"
  | "scripture"
  | "event"
  | "artist"
  | "playlist";

export interface Disclosure {
  human: boolean;
  aiAssisted: string; // "No" or a short disclosure string
  syntheticVocals: boolean;
  familySuitable: boolean;
  note?: string;
}

export interface PlayableBase {
  id: string;
  kind: ContentKind;
  title: string;
  /** seconds */
  duration?: number;
  description?: string;
  themes?: string[];
  scripture?: string[];
  artwork: string; // gradient css token, e.g. "blue"
  disclosure?: Disclosure;
  supportEligible?: boolean;
}

export interface Track extends PlayableBase {
  kind: "track";
  artist: string;
  artistId?: string;
  album: string;
  mood?: string;
  category: string; // Worship, Hymn, Acoustic...
  lyricsExcerpt?: string;
}

export interface Podcast extends PlayableBase {
  kind: "podcast";
  show: string;
  host: string;
  episode: string;
  transcriptAvailable?: boolean;
}

export interface Audiobook extends PlayableBase {
  kind: "audiobook";
  author: string;
  narrator: string;
  chapters: number;
  publisher: string;
}

export interface Scripture extends PlayableBase {
  kind: "scripture";
  book: string;
  chapter: string; // e.g. "23" or "8"
  reader: string;
  linked?: string[]; // ids of related content
  reflection?: string;
}

export interface RejoiceEvent extends PlayableBase {
  kind: "event";
  host: string;
  city: string;
  venue: string;
  date: string; // human readable
  time: string;
  relatedArtists?: string[];
  familyFriendly?: boolean;
}

export type ArtistType =
  | "Artist"
  | "Church"
  | "Ministry"
  | "Publisher"
  | "Podcast"
  | "Author";

export interface Artist {
  id: string;
  kind: "artist";
  name: string;
  type: ArtistType;
  bio: string;
  location: string;
  traditions?: string[];
  artwork: string;
  featuredTrackId?: string;
  trackIds?: string[];
  eventIds?: string[];
  humanArtistry: string;
  aiUse: string;
  scriptureThemes?: string[];
  supportEligible?: boolean;
}

export interface Playlist {
  id: string;
  kind: "playlist";
  title: string;
  description: string;
  artwork: string;
  itemIds: string[];
  family?: boolean;
}

export interface DiscoveryPath {
  id: string;
  label: string;
  kind: "theme" | "passage";
  selection: string;
  explanation: string;
  itemIds: string[];
}

export type AnyContent =
  | Track
  | Podcast
  | Audiobook
  | Scripture
  | RejoiceEvent;

export type AnyPlayable = AnyContent;
