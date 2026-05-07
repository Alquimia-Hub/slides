import type { Config } from "tailwindcss";
import { binance } from "./lib/theme";

/** Theme: colores desde `lib/theme.ts` (única fuente en JS/Config). */
const config = {
  theme: {
    extend: {
      colors: {
        binance: {
          yellow: binance.yellow,
          dark: binance.dark,
          graphite: binance.graphite,
        },
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
    },
  },
} satisfies Config;

export default config;
