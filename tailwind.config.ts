import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B1020",
        panel: "#111827",
        panel2: "#151E33",
        accent: "#2563EB",
        accent2: "#06B6D4",
        line: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      backgroundImage: {
        "grad-accent": "linear-gradient(135deg, #2563EB, #06B6D4)",
      },
    },
  },
  plugins: [],
};

export default config;
