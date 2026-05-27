"use client";

import { useState, useCallback } from "react";
import { Share2 } from "lucide-react";

interface ShareButtonProps {
  title: string;
  text: string;
  url: string;
}

export default function ShareButton({ title, text, url }: ShareButtonProps) {
  const [showToast, setShowToast] = useState(false);

  const handleShare = useCallback(async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch {
        // User cancelled or share failed, fall through to clipboard
      }
    }

    // Fallback: copy to clipboard
    try {
      await navigator.clipboard.writeText(url);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    } catch {
      // Clipboard not available
    }
  }, [title, text, url]);

  return (
    <div className="relative inline-block">
      <button
        onClick={handleShare}
        className="inline-flex items-center gap-2 rounded-md border border-border bg-white px-3 py-2 text-sm font-medium text-fg-secondary transition-colors hover:border-border-strong hover:bg-surface hover:text-fg"
        aria-label={`Share: ${title}`}
      >
        <Share2 className="h-4 w-4" />
        Share
      </button>

      {/* Toast notification */}
      {showToast && (
        <div
          role="status"
          aria-live="polite"
          className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-fg px-3 py-1.5 text-xs font-medium text-white shadow-lg"
        >
          Link copied to clipboard
        </div>
      )}
    </div>
  );
}
