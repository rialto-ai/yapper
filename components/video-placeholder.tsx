import { Play } from "lucide-react";

interface VideoPlaceholderProps {
  title: string;
  duration?: string;
  language?: string;
  className?: string;
}

export default function VideoPlaceholder({
  title,
  duration,
  language,
  className = "",
}: VideoPlaceholderProps) {
  return (
    <div
      className={`group relative flex aspect-video w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-stone-200 bg-stone-100 ${className}`}
      role="img"
      aria-label={`Video placeholder: ${title}${duration ? `, duration ${duration}` : ""}${language ? `, language ${language}` : ""}`}
    >
      {/* Play button */}
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-stone-300 bg-white shadow-sm transition-shadow group-hover:shadow-md">
        <Play className="h-6 w-6 text-stone-600" fill="currentColor" />
      </div>

      {/* Coming soon label */}
      <p className="mt-3 text-sm font-medium text-stone-500">
        Video coming soon
      </p>

      {/* Metadata overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-200/80 to-transparent px-4 pb-3 pt-8">
        <p className="text-sm font-medium text-stone-800">{title}</p>
        <div className="mt-0.5 flex items-center gap-3">
          {duration && (
            <span className="text-xs text-stone-500">{duration}</span>
          )}
          {language && (
            <span className="text-xs text-stone-500">{language}</span>
          )}
        </div>
      </div>
    </div>
  );
}
