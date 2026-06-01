import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-[8px] bg-accent",
        className
      )}
      aria-hidden="true"
    >
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 21V11.6C10 10.16 11.16 9 12.6 9H17.4C19.39 9 21 10.61 21 12.6C21 14.59 19.39 16.2 17.4 16.2H13"
          stroke="rgb(var(--gold-soft))"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.4 16.2L21 23"
          stroke="rgb(var(--gold-soft))"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function Wordmark({
  className,
  showBadge = false,
}: {
  className?: string;
  showBadge?: boolean;
}) {
  return (
    <a href="#top" className={cn("group flex items-center gap-2.5", className)}>
      <Logo />
      <span className="text-[19px] font-semibold tracking-tightest text-foreground">
        Rejoice
      </span>
      {showBadge && (
        <span className="hidden rounded-full border border-border-strong px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted sm:inline-block">
          Q4 2026
        </span>
      )}
    </a>
  );
}
