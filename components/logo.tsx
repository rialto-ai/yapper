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

/**
 * Selah mark: a stylized David's harp inside a gradient rounded square.
 * Side-profile harp with curved neck and parallel strings.
 */
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
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Background tile */}
      <rect width="40" height="40" rx="10" fill="url(#selah-logo-grad)" />
      <rect width="40" height="40" rx="10" fill="url(#selah-logo-highlight)" />

      {/* Strings (drawn behind the frame) */}
      <line x1="17" y1="22" x2="17" y2="29" stroke="white" strokeOpacity="0.55" strokeWidth="0.6" strokeLinecap="round" />
      <line x1="20" y1="17.5" x2="20" y2="29" stroke="white" strokeOpacity="0.65" strokeWidth="0.6" strokeLinecap="round" />
      <line x1="23" y1="13.5" x2="23" y2="29" stroke="white" strokeOpacity="0.75" strokeWidth="0.6" strokeLinecap="round" />
      <line x1="26" y1="11" x2="26" y2="29" stroke="white" strokeOpacity="0.85" strokeWidth="0.6" strokeLinecap="round" />

      {/* Harp frame: curved neck + sound box outline */}
      <path
        d="M 28.5 9.5 Q 17.5 13 13.5 29"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right pillar */}
      <line x1="28.5" y1="9.5" x2="28.5" y2="29" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      {/* Bottom base */}
      <line x1="13.5" y1="29" x2="28.5" y2="29" stroke="white" strokeWidth="2.2" strokeLinecap="round" />

      {/* Small accent at the top of the neck (tuning peg) */}
      <circle cx="28.5" cy="9.5" r="1.6" fill="#10B981" />
    </svg>
  );
}
