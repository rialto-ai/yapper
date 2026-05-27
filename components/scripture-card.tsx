interface ScriptureCardProps {
  verse: string;
  reference: string;
  className?: string;
}

export default function ScriptureCard({
  verse,
  reference,
  className = "",
}: ScriptureCardProps) {
  return (
    <blockquote
      className={`rounded-lg border border-stone-200 border-l-stone-400 border-l-4 bg-white px-6 py-5 ${className}`}
      aria-label={`Scripture: ${reference}`}
    >
      <p className="text-lg leading-relaxed text-stone-800 italic">
        &ldquo;{verse}&rdquo;
      </p>
      <footer className="mt-3">
        <cite className="text-sm font-medium not-italic tracking-wide text-stone-500 uppercase">
          {reference}
        </cite>
      </footer>
    </blockquote>
  );
}
