import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e8f5f5",
          100: "#c5e6e7",
          200: "#9ed4d5",
          300: "#6eb8ba",
          400: "#4a9a9c",
          500: "#2d7a7c",
          600: "#1f5c5d",
          700: "#153f40",
          800: "#0d2a2b",
          900: "#071c1d",
          950: "#021B1C",
        },
        gold: {
          300: "#F9F295",
          400: "#FAF398",
          500: "#E0AA3E",
          600: "#B88A44",
          700: "#9a7235",
        },
        surface: {
          50: "#f0fdf8",
          100: "#e8f5f5",
          200: "#c5e6e7",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        arabic: ["var(--font-noto-arabic)", "system-ui", "sans-serif"],
      },
      animation: {
        "soundwave-1": "soundwave 0.5s ease-in-out infinite",
        "soundwave-2": "soundwave 0.5s ease-in-out infinite 0.1s",
        "soundwave-3": "soundwave 0.5s ease-in-out infinite 0.2s",
      },
      keyframes: {
        soundwave: {
          "0%, 100%": { height: "4px" },
          "50%": { height: "16px" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
