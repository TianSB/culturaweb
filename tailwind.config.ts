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
        background: "var(--color-bg)",
        foreground: "var(--color-text)",
        muted: "var(--color-muted)",
        accent: {
          DEFAULT: "var(--color-accent)",
        },
        border: "var(--color-border)",
        pilar: {
          "libros": "#4A90A4",
          "artisticos": "#C0392B",
          "formacion": "#D4A017",
          "ludicas": "#2D6A4F",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        display: ["3.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        h1: ["2.25rem", { lineHeight: "1.2" }],
        h2: ["1.75rem", { lineHeight: "1.3" }],
        h3: ["1.25rem", { lineHeight: "1.4" }],
        body: ["1rem", { lineHeight: "1.65" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        label: ["0.75rem", { lineHeight: "1", letterSpacing: "0.08em" }],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
