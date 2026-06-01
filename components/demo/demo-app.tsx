"use client";

import { DemoProvider, useDemo } from "@/lib/demo/store";
import {
  DemoBanner,
  DemoSidebar,
  DemoBottomNav,
  DemoTopBar,
  MobileTabStrip,
} from "@/components/demo/shell";
import { MiniPlayer } from "@/components/demo/mini-player";
import {
  HomeView,
  SearchView,
  MusicView,
  PodcastsView,
  AudiobooksView,
  ScriptureView,
  ArtistsView,
} from "@/components/demo/views";
import {
  EventsView,
  FamilyView,
  SupportView,
  LibraryView,
  IntegrityView,
} from "@/components/demo/feature-views";
import { ArtistPageDemo } from "@/components/demo/artist";
import { ContentDetailPanel } from "@/components/demo/detail-panel";

function ActiveView() {
  const { tab, detailId, artistId } = useDemo();

  if (artistId) return <ArtistPageDemo artistId={artistId} />;
  if (detailId) return <ContentDetailPanel id={detailId} />;

  switch (tab) {
    case "home":
      return <HomeView />;
    case "search":
      return <SearchView />;
    case "music":
      return <MusicView />;
    case "podcasts":
      return <PodcastsView />;
    case "audiobooks":
      return <AudiobooksView />;
    case "scripture":
      return <ScriptureView />;
    case "artists":
      return <ArtistsView />;
    case "events":
      return <EventsView />;
    case "family":
      return <FamilyView />;
    case "support":
      return <SupportView />;
    case "library":
      return <LibraryView />;
    case "integrity":
      return <IntegrityView />;
    default:
      return <HomeView />;
  }
}

function DemoLayout() {
  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden bg-background">
      <DemoBanner />
      <div className="flex min-h-0 flex-1">
        <DemoSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <DemoTopBar />
          <MobileTabStrip />
          <main className="min-h-0 flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1280px]">
              <ActiveView />
            </div>
          </main>
        </div>
      </div>
      <MiniPlayer />
      <DemoBottomNav />
    </div>
  );
}

export function DemoApp() {
  return (
    <DemoProvider>
      <DemoLayout />
    </DemoProvider>
  );
}
