import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#06080c",
          900: "#0a0d14",
          850: "#0d111a",
          800: "#11151f",
          700: "#161b27",
          600: "#1c2230",
          500: "#272d3c",
          400: "#3a4150",
        },
        cyan: {
          neon: "#22e6ff",
          glow: "#5bf0ff",
        },
        violet: {
          neon: "#a78bfa",
          deep: "#7c3aed",
        },
        emerald: {
          neon: "#34f5b1",
        },
        amber: {
          neon: "#fbbf24",
        },
        rose: {
          neon: "#fb7185",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        glow: "0 0 24px -4px rgba(34, 230, 255, 0.35)",
        "glow-violet": "0 0 24px -4px rgba(167, 139, 250, 0.4)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        ticker: "ticker 60s linear infinite",
        "fade-in": "fade-in 0.4s ease-out",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
