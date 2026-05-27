import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        bg: "#FAFAF7",
        surface: "#F3F2ED",
        border: "#E4E1D8",
        "border-strong": "#D8D5CC",
        fg: "#111111",
        "fg-secondary": "#4A4A45",
        "fg-muted": "#73736D",
        accent: "#B88746",
        "accent-hover": "#A67638",
      },
    },
  },
  plugins: [],
};

export default config;
