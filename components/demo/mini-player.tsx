"use client";

import { useState } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  ListMusic,
  Heart,
} from "lucide-react";
import { useDemo } from "@/lib/demo/store";
import { getContent } from "@/lib/demo/data";
import { Artwork } from "@/components/demo/content-card";
import { formatClock, creatorOf, kindLabel } from "@/lib/demo/format";
import { cn } from "@/lib/utils";

export function MiniPlayer() {
  const {
    currentId,
    isPlaying,
    progress,
    duration,
    queue,
    togglePlay,
    next,
    prev,
    seek,
    saved,
    toggleSave,
    openDetail,
  } = useDemo();
  const [volume, setVolume] = useState(70);
  const [showQueue, setShowQueue] = useState(false);

  const current = currentId ? getContent(currentId) : undefined;
  const pct = duration > 0 ? (progress / duration) * 100 : 0;

  return (
    <div className="relative border-t border-border bg-card/95 backdrop-blur">
      {/* Queue popover */}
      {showQueue && (
        <div className="absolute bottom-full right-3 mb-2 w-72 rounded-xl border border-border bg-card p-3 shadow-lg">
          <p className="mb-2 text-[12px] font-semibold uppercase tracking-wider text-muted">
            Queue
          </p>
          {queue.length === 0 ? (
            <p className="text-[13px] text-muted">Nothing queued yet.</p>
          ) : (
            <ul className="max-h-60 space-y-1.5 overflow-y-auto">
              {queue
                .slice()
                .reverse()
                .map((id) => {
                  const c = getContent(id);
                  if (!c) return null;
                  return (
                    <li
                      key={id}
                      className={cn(
                        "flex items-center gap-2 rounded-lg p-1.5",
                        id === currentId && "bg-surface"
                      )}
                    >
                      <Artwork token={c.artwork} kind={c.kind} size="sm" className="h-8 w-8" />
                      <div className="min-w-0">
                        <p className="truncate text-[12.5px] font-medium">{c.title}</p>
                        <p className="truncate text-[11px] text-muted">{creatorOf(c)}</p>
                      </div>
                    </li>
                  );
                })}
            </ul>
          )}
        </div>
      )}

      <div className="mx-auto flex max-w-[1600px] items-center gap-3 px-3 py-2.5 sm:px-4">
        {/* Now playing */}
        <div className="flex min-w-0 flex-1 items-center gap-3">
          {current ? (
            <>
              <button
                onClick={() => openDetail(current.id)}
                className="shrink-0"
                aria-label="Open details"
              >
                <Artwork token={current.artwork} kind={current.kind} size="sm" className="h-11 w-11" />
              </button>
              <div className="min-w-0">
                <p className="truncate text-[13.5px] font-semibold leading-tight">
                  {current.title}
                </p>
                <p className="truncate text-[12px] text-muted">
                  {kindLabel(current.kind)} · {creatorOf(current)}
                </p>
              </div>
              <button
                onClick={() => toggleSave(current.id)}
                aria-label="Save"
                className={cn(
                  "ml-1 hidden shrink-0 sm:inline-flex",
                  saved.includes(current.id) ? "text-gold" : "text-muted hover:text-foreground"
                )}
              >
                <Heart size={15} fill={saved.includes(current.id) ? "currentColor" : "none"} />
              </button>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2 text-muted">
                <Play size={18} />
              </div>
              <p className="text-[13px] text-muted">Select something to play.</p>
            </div>
          )}
        </div>

        {/* Controls + progress */}
        <div className="flex flex-1 flex-col items-center gap-1.5">
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              disabled={!current}
              aria-label="Previous"
              className="text-subtle transition-colors hover:text-foreground disabled:opacity-40"
            >
              <SkipBack size={18} fill="currentColor" />
            </button>
            <button
              onClick={togglePlay}
              disabled={!current}
              aria-label={isPlaying ? "Pause" : "Play"}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform hover:scale-105 disabled:opacity-40"
            >
              {isPlaying ? (
                <Pause size={16} fill="currentColor" />
              ) : (
                <Play size={16} fill="currentColor" className="ml-0.5" />
              )}
            </button>
            <button
              onClick={next}
              disabled={!current}
              aria-label="Next"
              className="text-subtle transition-colors hover:text-foreground disabled:opacity-40"
            >
              <SkipForward size={18} fill="currentColor" />
            </button>
          </div>
          <div className="flex w-full max-w-md items-center gap-2">
            <span className="w-9 text-right text-[11px] tabular-nums text-muted">
              {formatClock(progress)}
            </span>
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={progress}
              onChange={(e) => seek(Number(e.target.value))}
              disabled={!current}
              aria-label="Seek"
              className="h-1.5 flex-1 cursor-pointer appearance-none rounded-full bg-surface-2 accent-accent disabled:cursor-default"
              style={{
                background: `linear-gradient(to right, rgb(var(--accent)) ${pct}%, rgb(var(--surface-2)) ${pct}%)`,
              }}
            />
            <span className="w-9 text-[11px] tabular-nums text-muted">
              {formatClock(duration)}
            </span>
          </div>
        </div>

        {/* Right controls */}
        <div className="hidden flex-1 items-center justify-end gap-3 md:flex">
          <Volume2 size={17} className="text-muted" />
          <input
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            aria-label="Volume"
            className="h-1.5 w-24 cursor-pointer appearance-none rounded-full accent-accent"
            style={{
              background: `linear-gradient(to right, rgb(var(--accent)) ${volume}%, rgb(var(--surface-2)) ${volume}%)`,
            }}
          />
          <button
            onClick={() => setShowQueue((v) => !v)}
            aria-label="Queue"
            aria-pressed={showQueue}
            className={cn(
              "inline-flex h-8 w-8 items-center justify-center rounded-lg transition-colors",
              showQueue ? "bg-surface text-foreground" : "text-muted hover:text-foreground"
            )}
          >
            <ListMusic size={17} />
          </button>
        </div>
      </div>
      <p className="pb-1.5 text-center text-[10.5px] text-muted">
        Simulated demo playback — no audio file is streamed.
      </p>
    </div>
  );
}
