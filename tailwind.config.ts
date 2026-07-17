import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep ocean / cosmic palette for "Beyond Signal".
        abyss: {
          950: "#03040a",
          900: "#070b1a",
          800: "#0c1326",
          700: "#131d38",
          600: "#1c2a52",
        },
        signal: {
          DEFAULT: "#38e1ff",
          400: "#5cebff",
          500: "#38e1ff",
          600: "#19b6e0",
        },
        glow: "#7c4dff",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "deep-space":
          "radial-gradient(1200px 600px at 50% -10%, rgba(124,77,255,0.18), transparent), radial-gradient(900px 500px at 90% 10%, rgba(56,225,255,0.12), transparent)",
      },
    },
  },
  plugins: [],
};

export default config;
