"use client";

import type { Lesson } from "@/lib/lessons-data";
import SourceVideoCard from "@/components/source-video-card";

interface VideoPlayerProps {
  lesson: Lesson;
}

export default function VideoPlayer({ lesson }: VideoPlayerProps) {
  const hasEmbed = !!lesson.embedUrl;
  const hasVideo = !!lesson.videoUrl;

  return (
    <div className="space-y-3">
      {/* Player container - 16:9 aspect ratio */}
      <div
        className="relative w-full overflow-hidden rounded-xl border border-border bg-surface"
        style={{ aspectRatio: "16 / 9" }}
        aria-label={`Video player: ${lesson.title}`}
      >
        {hasEmbed ? (
          <iframe
            src={lesson.embedUrl}
            title={lesson.title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : hasVideo ? (
          <video
            src={lesson.videoUrl}
            controls
            className="absolute inset-0 h-full w-full object-contain"
            aria-label={lesson.title}
          >
            <track kind="captions" />
            Your browser does not support the video element.
          </video>
        ) : (
          <SourceVideoCard
            sourceName={lesson.sourceName}
            sourceUrl={lesson.sourceUrl}
            permissionStatus={lesson.permissionStatus}
          />
        )}
      </div>

      {/* Source info below player */}
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
