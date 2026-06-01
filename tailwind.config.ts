import type { Config } from "tailwindcss";

const withAlpha = (v: string) => `rgb(var(${v}) / <alpha-value>)`;

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: withAlpha("--background"),
        surface: withAlpha("--surface"),
        "surface-2": withAlpha("--surface-2"),
        foreground: withAlpha("--foreground"),
        muted: withAlpha("--muted"),
        subtle: withAlpha("--subtle"),
        border: withAlpha("--border"),
        "border-strong": withAlpha("--border-strong"),
        card: withAlpha("--card"),
        "card-foreground": withAlpha("--card-foreground"),
        accent: withAlpha("--accent"),
        "accent-hover": withAlpha("--accent-hover"),
        "accent-foreground": withAlpha("--accent-foreground"),
        slate: withAlpha("--slate"),
        gold: withAlpha("--gold"),
        "gold-soft": withAlpha("--gold-soft"),
        ink: withAlpha("--ink"),
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1120px",
        prose: "720px",
      },
      borderRadius: {
        xl: "16px",
        lg: "12px",
        md: "8px",
        sm: "6px",
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
    },
  },
  plugins: [],
};

export default config;
