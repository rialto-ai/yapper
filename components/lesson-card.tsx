"use client";

import Link from "next/link";
import { Play, Printer, Share2, ExternalLink } from "lucide-react";
import type { Lesson } from "@/lib/lessons-data";

interface LessonCardProps {
  lesson: Lesson;
}

export default function LessonCard({ lesson }: LessonCardProps) {
  async function handleShare() {
    const url = `${window.location.origin}/lessons/${lesson.slug}`;
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: lesson.title,
          text: `${lesson.title} - Gospel in Sign`,
          url,
        });
        return;
      } catch {
        // User cancelled or share failed, fall through to clipboard
      }
    }
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // Clipboard not available
    }
  }

  return (
    <div className="card flex flex-col overflow-hidden p-0">
      {/* Thumbnail placeholder - 16:9 */}
      <div className="relative flex aspect-video items-center justify-center bg-surface">
        <Play className="h-10 w-10 text-fg-muted/50" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        {/* Title */}
        <Link
          href={`/lessons/${lesson.slug}`}
          className="text-base font-semibold tracking-tight text-fg hover:underline"
        >
          {lesson.title}
        </Link>

        {/* Pills */}
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          <span className="pill-track">{lesson.track}</span>
          <span className="pill-topic">{lesson.topic}</span>
        </div>

        {/* Bible passage */}
        {lesson.biblePassage && (
          <p className="mt-2 text-xs text-fg-muted">{lesson.biblePassage}</p>
        )}

        {/* Source */}
        <p className="mt-2 text-xs text-fg-muted">
          {lesson.sourceName}
          {lesson.permissionStatus && (
            <span className="ml-1 text-fg-muted/70">
              &middot; {lesson.permissionStatus}
            </span>
          )}
        </p>

        {/* Action buttons */}
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
          <Link
            href={`/lessons/${lesson.slug}`}
            className="btn-accent px-3 py-1.5 text-xs"
          >
            <Play className="h-3.5 w-3.5" />
            View Lesson
          </Link>
          {lesson.sourceUrl && (
            <a
              href={lesson.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent px-3 py-1.5 text-xs"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Open Video
            </a>
          )}
          <Link
            href={`/lessons/${lesson.slug}/print`}
            className="btn-ghost px-3 py-1.5 text-xs"
          >
            <Printer className="h-3.5 w-3.5" />
            Print
          </Link>
          <button
            onClick={handleShare}
            className="btn-ghost px-3 py-1.5 text-xs"
          >
            <Share2 className="h-3.5 w-3.5" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
