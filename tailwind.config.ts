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
        // 60-30-10 Rule:
        // 60% = Clean Whites / Crisp canvas
        canvas: "#FFFFFF",
        subtle: "#F8FAFC",
        borderSubtle: "#E2E8F0",
        
        // 30% = Deep Obsidian / Slate for Structure, High-Contrast Typography, Neutral Cards
        dark: {
          900: "#090D16",
          800: "#0F172A",
          700: "#1E293B",
          600: "#334155",
          500: "#64748B",
        },
        
        // 10% = Controlled Accent (Confidence Blue + Defense Gold)
        brand: {
          blue: "#1E40AF", // Deep Royal
          accent: "#2563EB", // Vibrant Action Blue
          accentHover: "#1D4ED8",
          emerald: "#059669",
          gold: "#D97706", // Defense badge
        }
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
