import { ExternalLink } from "lucide-react";

interface SourceVideoCardProps {
  sourceName: string;
  sourceUrl: string;
  permissionStatus: string;
}

export default function SourceVideoCard({
  sourceName,
  sourceUrl,
  permissionStatus,
}: SourceVideoCardProps) {
  const hasUrl = !!sourceUrl;

  return (
    <div className="flex h-full flex-col items-center justify-center px-6 py-12 text-center">
      <ExternalLink className="h-10 w-10 text-fg-muted/50" />
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-fg-secondary">
        This signed lesson is available from our approved partner source.
      </p>
      <div className="mt-4 flex items-center gap-2 text-xs text-fg-muted">
        <span>{sourceName}</span>
        {permissionStatus && (
          <>
            <span>&middot;</span>
            <span className="pill-track">{permissionStatus}</span>
          </>
        )}
      </div>
      {hasUrl ? (
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-accent mt-6 px-5 py-2.5 text-sm"
        >
          <ExternalLink className="h-4 w-4" />
          Open Video
        </a>
      ) : (
        <button disabled className="btn-accent mt-6 cursor-not-allowed px-5 py-2.5 text-sm opacity-50">
          <ExternalLink className="h-4 w-4" />
          Open Video
        </button>
      )}
    </div>
  );
}
