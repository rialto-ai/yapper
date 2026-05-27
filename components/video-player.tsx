"use client";

import type { Lesson } from "@/lib/lessons-data";
import SourceVideoCard from "@/components/source-video-card";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  lesson: Lesson;
}

export default function VideoPlayer({ lesson }: VideoPlayerProps) {
  const hasDirectVideo = !!lesson.directVideoUrl;
  const hasEmbed = !!lesson.embedUrl;
  const hasSource = !!lesson.sourceUrl;

  return (
    <div className="space-y-3">
      <div
        className="relative w-full overflow-hidden rounded-xl border border-border bg-white"
        style={{ aspectRatio: "16 / 9" }}
        aria-label={`Video: ${lesson.title}`}
      >
        {hasDirectVideo ? (
          <video
            src={lesson.directVideoUrl}
            controls
            className="absolute inset-0 h-full w-full object-contain bg-black"
            aria-label={lesson.title}
          >
            <track kind="captions" />
            Your browser does not support the video element.
          </video>
        ) : hasEmbed ? (
          <iframe
            src={lesson.embedUrl}
            title={lesson.title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : hasSource ? (
          <SourceVideoCard
            title={lesson.title}
            track={lesson.track}
            sourceName={lesson.sourceName}
            sourceUrl={lesson.sourceUrl}
            permissionStatus={lesson.permissionStatus}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <Play className="h-12 w-12 text-fg-muted/30" />
            <p className="mt-3 text-sm font-medium text-fg-muted">
              Video coming soon
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2 text-xs text-fg-muted">
        <span>Source: {lesson.sourceName}</span>
        {lesson.permissionStatus && (
          <>
            <span>&middot;</span>
            <span>{lesson.permissionStatus}</span>
          </>
        )}
      </div>
    </div>
  );
}
