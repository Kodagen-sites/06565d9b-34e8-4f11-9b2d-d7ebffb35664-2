import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1A1A1A",
          50: "#FAFAFA",
          100: "#F5F4F1",
          200: "#E8E6E1",
          300: "#C9C6C0",
          400: "#9C9A95",
          500: "#6B6B6B",
          600: "#4A4A4A",
          700: "#2C2C2C",
          800: "#1A1A1A",
          900: "#0F0F0F"
        },
        sand: {
          50: "#FBF8F3",
          100: "#F5EDDE",
          200: "#EAD9B7",
          300: "#D9B97E",
          400: "#C99A53",
          500: "#C77C44",
          600: "#A85F2E",
          700: "#854920"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"]
      },
      letterSpacing: {
        tightest: "-0.04em",
        "wide-display": "0.08em"
      }
    }
  },
  plugins: []
};

export default config;
