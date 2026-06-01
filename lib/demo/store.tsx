"use client";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
  type ReactNode,
} from "react";
import type { AnyContent } from "./types";

export type DemoTab =
  | "home"
  | "search"
  | "music"
  | "podcasts"
  | "audiobooks"
  | "scripture"
  | "artists"
  | "events"
  | "family"
  | "support"
  | "library"
  | "integrity";

export interface FamilySettings {
  kidsMode: boolean;
  familySafeOnly: boolean;
  autoplay: boolean;
}

interface DemoState {
  tab: DemoTab;
  detailId: string | null;
  artistId: string | null;

  currentId: string | null;
  isPlaying: boolean;
  progress: number; // seconds
  duration: number; // seconds
  queue: string[];

  saved: string[];
  followed: string[];
  rsvped: string[];
  family: FamilySettings;
  allocations: Record<string, number>;

  query: string;
  filter: string;
}

const initialAllocations: Record<string, number> = {
  "a-grace": 3.2,
  "a-psalms": 2.1,
  "a-emmaus": 1.7,
  mission: 1.0,
  infra: 2.0,
};

const initialState: DemoState = {
  tab: "home",
  detailId: null,
  artistId: null,
  currentId: null,
  isPlaying: false,
  progress: 0,
  duration: 0,
  queue: [],
  saved: [],
  followed: [],
  rsvped: [],
  family: { kidsMode: false, familySafeOnly: true, autoplay: true },
  allocations: initialAllocations,
  query: "",
  filter: "All",
};

type Action =
  | { type: "SET_TAB"; tab: DemoTab }
  | { type: "OPEN_DETAIL"; id: string }
  | { type: "OPEN_ARTIST"; id: string }
  | { type: "CLOSE_OVERLAY" }
  | { type: "PLAY"; item: AnyContent }
  | { type: "TOGGLE_PLAY" }
  | { type: "TICK" }
  | { type: "SEEK"; value: number }
  | { type: "NEXT" }
  | { type: "PREV" }
  | { type: "TOGGLE_SAVE"; id: string }
  | { type: "TOGGLE_FOLLOW"; id: string }
  | { type: "TOGGLE_RSVP"; id: string }
  | { type: "SET_FAMILY"; key: keyof FamilySettings; value: boolean }
  | { type: "SET_ALLOCATION"; id: string; value: number }
  | { type: "SET_QUERY"; value: string }
  | { type: "SET_FILTER"; value: string }
  | { type: "SEARCH"; value: string };

function toggle(list: string[], id: string): string[] {
  return list.includes(id) ? list.filter((x) => x !== id) : [...list, id];
}

function reducer(state: DemoState, action: Action): DemoState {
  switch (action.type) {
    case "SET_TAB":
      return { ...state, tab: action.tab, detailId: null, artistId: null };
    case "OPEN_DETAIL":
      return { ...state, detailId: action.id, artistId: null };
    case "OPEN_ARTIST":
      return { ...state, artistId: action.id, detailId: null };
    case "CLOSE_OVERLAY":
      return { ...state, detailId: null, artistId: null };
    case "PLAY": {
      const { item } = action;
      const duration = item.duration ?? 240;
      const queue = state.queue.includes(item.id)
        ? state.queue
        : [...state.queue.slice(-9), item.id];
      return {
        ...state,
        currentId: item.id,
        isPlaying: true,
        progress: 0,
        duration,
        queue,
      };
    }
    case "TOGGLE_PLAY":
      if (!state.currentId) return state;
      return { ...state, isPlaying: !state.isPlaying };
    case "TICK": {
      if (!state.isPlaying || !state.currentId) return state;
      const next = state.progress + 1;
      if (next >= state.duration) {
        return { ...state, progress: state.duration, isPlaying: false };
      }
      return { ...state, progress: next };
    }
    case "SEEK":
      return { ...state, progress: Math.max(0, Math.min(action.value, state.duration)) };
    case "NEXT": {
      if (state.queue.length === 0 || !state.currentId) return state;
      const i = state.queue.indexOf(state.currentId);
      const ni = i < 0 ? 0 : (i + 1) % state.queue.length;
      return { ...state, currentId: state.queue[ni], progress: 0, isPlaying: true };
    }
    case "PREV": {
      if (state.queue.length === 0 || !state.currentId) return state;
      if (state.progress > 3) return { ...state, progress: 0 };
      const i = state.queue.indexOf(state.currentId);
      const pi = i <= 0 ? state.queue.length - 1 : i - 1;
      return { ...state, currentId: state.queue[pi], progress: 0, isPlaying: true };
    }
    case "TOGGLE_SAVE":
      return { ...state, saved: toggle(state.saved, action.id) };
    case "TOGGLE_FOLLOW":
      return { ...state, followed: toggle(state.followed, action.id) };
    case "TOGGLE_RSVP":
      return { ...state, rsvped: toggle(state.rsvped, action.id) };
    case "SET_FAMILY":
      return { ...state, family: { ...state.family, [action.key]: action.value } };
    case "SET_ALLOCATION":
      return {
        ...state,
        allocations: { ...state.allocations, [action.id]: Math.max(0, action.value) },
      };
    case "SET_QUERY":
      return { ...state, query: action.value };
    case "SET_FILTER":
      return { ...state, filter: action.value };
    case "SEARCH":
      return { ...state, tab: "search", query: action.value, detailId: null, artistId: null };
    default:
      return state;
  }
}

interface DemoContextValue extends DemoState {
  setTab: (tab: DemoTab) => void;
  openDetail: (id: string) => void;
  openArtist: (id: string) => void;
  closeOverlay: () => void;
  play: (item: AnyContent) => void;
  togglePlay: () => void;
  seek: (value: number) => void;
  next: () => void;
  prev: () => void;
  toggleSave: (id: string) => void;
  toggleFollow: (id: string) => void;
  toggleRsvp: (id: string) => void;
  setFamily: (key: keyof FamilySettings, value: boolean) => void;
  setAllocation: (id: string, value: number) => void;
  setQuery: (value: string) => void;
  setFilter: (value: string) => void;
  search: (value: string) => void;
}

const DemoContext = createContext<DemoContextValue | null>(null);

export function DemoProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const stateRef = useRef(state);
  stateRef.current = state;

  // Simulated playback clock.
  useEffect(() => {
    const id = window.setInterval(() => {
      if (stateRef.current.isPlaying) dispatch({ type: "TICK" });
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  const value: DemoContextValue = {
    ...state,
    setTab: (tab) => dispatch({ type: "SET_TAB", tab }),
    openDetail: (id) => dispatch({ type: "OPEN_DETAIL", id }),
    openArtist: (id) => dispatch({ type: "OPEN_ARTIST", id }),
    closeOverlay: () => dispatch({ type: "CLOSE_OVERLAY" }),
    play: (item) => dispatch({ type: "PLAY", item }),
    togglePlay: () => dispatch({ type: "TOGGLE_PLAY" }),
    seek: (v) => dispatch({ type: "SEEK", value: v }),
    next: () => dispatch({ type: "NEXT" }),
    prev: () => dispatch({ type: "PREV" }),
    toggleSave: (id) => dispatch({ type: "TOGGLE_SAVE", id }),
    toggleFollow: (id) => dispatch({ type: "TOGGLE_FOLLOW", id }),
    toggleRsvp: (id) => dispatch({ type: "TOGGLE_RSVP", id }),
    setFamily: (key, v) => dispatch({ type: "SET_FAMILY", key, value: v }),
    setAllocation: (id, v) => dispatch({ type: "SET_ALLOCATION", id, value: v }),
    setQuery: (v) => dispatch({ type: "SET_QUERY", value: v }),
    setFilter: (v) => dispatch({ type: "SET_FILTER", value: v }),
    search: (v) => dispatch({ type: "SEARCH", value: v }),
  };

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}

export function useDemo(): DemoContextValue {
  const ctx = useContext(DemoContext);
  if (!ctx) throw new Error("useDemo must be used within DemoProvider");
  return ctx;
}
