import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep": "#020408",
        "card": "#0a0f1a",
        "surface": "#0f1729",
        "blue": "#3b82f6",
        "blue-bright": "#60a5fa",
        "gold": "#c9a84c",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
