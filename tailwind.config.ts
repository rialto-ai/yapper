import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
      },
      colors: {
        warm: {
          50: "#faf9f7",
          100: "#f5f3f0",
          200: "#e8e4df",
          300: "#d4cfc8",
          400: "#b5aea4",
          500: "#9a9288",
          600: "#7d756b",
          700: "#635c54",
          800: "#4a453f",
          900: "#332f2b",
        },
      },
    },
  },
  plugins: [],
};

export default config;
