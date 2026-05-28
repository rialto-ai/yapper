interface LogoProps {
  size?: number;
  showText?: boolean;
  textOnDark?: boolean;
}

export function Logo({ size = 32, showText = false, textOnDark = false }: LogoProps) {
  return (
    <div className="flex items-center gap-2.5">
      <LogoMark size={size} />
      {showText && (
        <div className="flex flex-col">
          <span
            className={`text-[16px] font-semibold tracking-tight leading-none ${
              textOnDark ? "text-white" : ""
            }`}
          >
            Selah
          </span>
          <span
            className={`text-[10px] leading-none mt-0.5 ${
              textOnDark ? "text-white/60" : "text-muted"
            }`}
          >
            by Christian Music Group
          </span>
        </div>
      )}
    </div>
  );
}

export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <defs>
        <linearGradient id="selah-logo-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0F172A" />
          <stop offset="55%" stopColor="#1E40AF" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
        <linearGradient id="selah-logo-highlight" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="10" fill="url(#selah-logo-grad)" />
      <rect width="40" height="40" rx="10" fill="url(#selah-logo-highlight)" />
      {/* Custom S mark: two arcs forming a clean monogram with a music-cue dot */}
      <path
        d="M26.5 14.5c-1-1.6-3.2-2.5-6.5-2.5-3.6 0-6.5 1.8-6.5 4.8 0 2.5 1.7 3.8 5.5 4.5 3.5.6 4.5 1.3 4.5 2.7 0 1.4-1.5 2.5-4 2.5-2.7 0-4.6-1-5.5-2.6"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="28" cy="28" r="1.8" fill="#10B981" />
    </svg>
  );
}
