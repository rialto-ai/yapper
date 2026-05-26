"use client";

import { Play, CheckCircle2, Clock, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  title: string;
  duration: number;
  scripture?: string;
  watched: boolean;
  onMarkWatched: () => void;
}

export function VideoPlayer({
  title,
  duration,
  scripture,
  watched,
  onMarkWatched,
}: VideoPlayerProps) {
  return (
    <div className="space-y-4">
      <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-800 border border-border">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <div className="size-16 sm:size-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors group">
            <Play className="size-7 sm:size-8 text-white ml-1 group-hover:scale-110 transition-transform" />
          </div>
          <h3 className="text-white/90 text-sm sm:text-lg font-medium text-center px-6 max-w-lg">
            {title}
          </h3>
        </div>

        <div className="absolute top-3 right-3 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white/80 text-xs font-medium px-2.5 py-1 rounded-full">
            <Clock className="size-3" />
            {duration} min
          </span>
        </div>

        {scripture && (
          <div className="absolute bottom-3 left-3">
            <span className="inline-flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white/80 text-xs font-medium px-2.5 py-1 rounded-full">
              <BookOpen className="size-3" />
              {scripture}
            </span>
          </div>
        )}

        {watched && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1.5 bg-positive/80 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
              <CheckCircle2 className="size-3" />
              Watched
            </span>
          </div>
        )}
      </div>

      <button
        onClick={onMarkWatched}
        disabled={watched}
        className={cn(
          "inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all",
          watched
            ? "bg-positive/10 text-positive cursor-default"
            : "bg-accent text-white hover:opacity-90 active:scale-[0.98]"
        )}
      >
        <CheckCircle2 className="size-4" />
        {watched ? "Watched" : "Mark as Watched"}
      </button>
    </div>
  );
}
