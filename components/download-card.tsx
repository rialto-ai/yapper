import { Download } from "lucide-react";

interface DownloadCardProps {
  title: string;
  description: string;
  type: string;
  size?: string;
}

export default function DownloadCard({
  title,
  description,
  type,
  size,
}: DownloadCardProps) {
  return (
    <article
      className="flex flex-col rounded-lg border border-stone-200 bg-white p-5 transition-shadow hover:shadow-sm"
      aria-label={`Download: ${title}`}
    >
      {/* Type badge */}
      <div className="mb-3 flex items-center gap-2">
        <span className="inline-block rounded bg-stone-100 px-2 py-0.5 text-xs font-semibold tracking-wider text-stone-600 uppercase">
          {type}
        </span>
        {size && (
          <span className="text-xs text-stone-400">{size}</span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold leading-snug text-black">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-stone-500">
        {description}
      </p>

      {/* Download button */}
      <button
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border border-stone-200 bg-white px-4 py-2.5 text-sm font-medium text-stone-700 transition-colors hover:border-stone-300 hover:bg-stone-50"
        aria-label={`Download ${title}`}
      >
        <Download className="h-4 w-4" />
        Download
      </button>
    </article>
  );
}
