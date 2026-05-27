"use client";

import { useState } from "react";
import Link from "next/link";
import { Printer, Link2, Share2, ExternalLink } from "lucide-react";

interface LessonActionsProps {
  slug: string;
  sourceUrl?: string;
}

export default function LessonActions({ slug, sourceUrl }: LessonActionsProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard not available
    }
  }

  async function handleShare() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "Gospel in Sign",
          url: window.location.href,
        });
        return;
      } catch {
        // User cancelled or share failed, fall through to copy
      }
    }
    await handleCopyLink();
  }

  return (
    <div className="relative flex flex-wrap items-center gap-2">
      <Link
        href={`/lessons/${slug}/print`}
        className="btn-secondary px-4 py-2 text-sm"
      >
        <Printer className="h-4 w-4" />
        Print Sheet
      </Link>

      <button onClick={handleCopyLink} className="btn-ghost px-4 py-2 text-sm">
        <Link2 className="h-4 w-4" />
        {copied ? "Copied!" : "Copy Link"}
      </button>

      <button onClick={handleShare} className="btn-ghost px-4 py-2 text-sm">
        <Share2 className="h-4 w-4" />
        Share
      </button>

      {sourceUrl && (
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost px-4 py-2 text-sm"
        >
          <ExternalLink className="h-4 w-4" />
          Open Source
        </a>
      )}
    </div>
  );
}
