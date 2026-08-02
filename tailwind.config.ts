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
        accent: "#E11D48",
        accent2: "#F43F5E",
        line: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      backgroundImage: {
        "grad-accent": "linear-gradient(135deg, #E11D48, #991B1B)",
      },
    },
  },
  plugins: [],
};

export default config;
