import { cn } from "@/lib/utils";

export function Logo({
  size = 24,
  withWordmark = true,
  className,
}: {
  size?: number;
  withWordmark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <Mark size={size} />
      {withWordmark && (
        <span className="font-semibold text-[15px] tracking-tight text-foreground">
          Rialto<span className="text-accent">.</span>
        </span>
      )}
    </div>
  );
}

export function Mark({ size = 24 }: { size?: number }) {
  // Flat orange top semicircle. The path is a half-circle with the flat edge at the bottom.
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Rialto AI"
      role="img"
    >
      <path
        d="M4 18 A12 12 0 0 1 28 18 L4 18 Z"
        fill="rgb(var(--accent))"
      />
    </svg>
  );
}
