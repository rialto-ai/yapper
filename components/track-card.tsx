import Link from "next/link";

interface TrackCardProps {
  name: string;
  description: string;
  href: string | null;
  featured?: boolean;
}

export default function TrackCard({ name, description, href, featured }: TrackCardProps) {
  const content = (
    <div
      className={`card transition-shadow ${
        featured ? "border-l-4 border-l-accent" : ""
      } ${href ? "hover:shadow-md" : "opacity-60"}`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className={`text-lg font-semibold tracking-tight ${href ? "text-fg" : "text-fg-muted"}`}>
          {name}
        </h3>
        {featured && (
          <span className="pill-track shrink-0">Featured</span>
        )}
      </div>
      <p className={`mt-2 text-sm leading-relaxed ${href ? "text-fg-secondary" : "text-fg-muted"}`}>
        {description}
      </p>
      {!href && (
        <p className="mt-3 text-xs text-fg-muted">Coming soon</p>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
