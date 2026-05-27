"use client";

import { useState } from "react";
import { ExternalLink, Copy, CheckCircle } from "lucide-react";

interface SourceVideoCardProps {
  title: string;
  track: string;
  sourceName: string;
  sourceUrl: string;
  permissionStatus: string;
}

export default function SourceVideoCard({
  title,
  track,
  sourceName,
  sourceUrl,
  permissionStatus,
}: SourceVideoCardProps) {
  const [copied, setCopied] = useState(false);
  const hasUrl = !!sourceUrl;

  async function handleCopy() {
    if (!sourceUrl) return;
    try {
      await navigator.clipboard.writeText(sourceUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {}
  }

  return (
    <div className="flex h-full flex-col items-center justify-center px-6 py-10 text-center sm:px-10 sm:py-14">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
        <ExternalLink className="h-7 w-7 text-accent" />
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-tight text-fg sm:text-2xl">
        Watch Signed Video
      </h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-fg-secondary">
        This signed lesson is available from our approved partner source.
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-fg-muted">
        <span className="pill-track">{track}</span>
        <span>Source: {sourceName}</span>
        {permissionStatus && (
          <>
            <span>&middot;</span>
            <span>Permission: {permissionStatus}</span>
          </>
        )}
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {hasUrl ? (
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-6 py-3 text-sm"
          >
            <ExternalLink className="h-4 w-4" />
            Open Signed Video
          </a>
        ) : (
          <button
            disabled
            className="btn-primary cursor-not-allowed px-6 py-3 text-sm opacity-50"
          >
            <ExternalLink className="h-4 w-4" />
            Open Signed Video
          </button>
        )}
        {hasUrl && (
          <button onClick={handleCopy} className="btn-secondary px-4 py-3 text-sm">
            {copied ? (
              <>
                <CheckCircle className="h-4 w-4 text-green-600" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copy Video Link
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
