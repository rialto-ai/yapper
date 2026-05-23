import type { Config } from "tailwindcss";

const withAlpha = (v: string) => `rgb(var(${v}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background:       withAlpha("--background"),
        surface:          withAlpha("--surface"),
        "surface-2":      withAlpha("--surface-2"),
        foreground:       withAlpha("--foreground"),
        muted:            withAlpha("--muted"),
        subtle:           withAlpha("--subtle"),
        border:           withAlpha("--border"),
        "border-strong":  withAlpha("--border-strong"),
        card:             withAlpha("--card"),
        "card-foreground":withAlpha("--card-foreground"),
        accent:           withAlpha("--accent"),
        "accent-hover":   withAlpha("--accent-hover"),
        "accent-soft":    withAlpha("--accent-soft"),
        "accent-foreground": withAlpha("--accent-foreground"),
        positive:         withAlpha("--positive"),
        negative:         withAlpha("--negative"),
        warning:          withAlpha("--warning"),
        "chart-1":        withAlpha("--chart-1"),
        "chart-2":        withAlpha("--chart-2"),
        "chart-3":        withAlpha("--chart-3"),
        "chart-4":        withAlpha("--chart-4"),
        "chart-5":        withAlpha("--chart-5"),
        "chart-6":        withAlpha("--chart-6"),
        "chart-7":        withAlpha("--chart-7"),
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "6px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(17, 21, 28, 0.04)",
        DEFAULT: "0 1px 3px rgba(17, 21, 28, 0.05), 0 4px 12px rgba(17, 21, 28, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
