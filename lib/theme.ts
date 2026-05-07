/**
 * Fuente única de tokens de color para JS, Tailwind (`tailwind.config.ts`)
 * y referencia para `app/globals.css` (:root).
 */
export const binance = {
  dark: "#0c0e12",
  graphite: "#1e2329",
  yellow: "#f0b90b",
} as const;

/** Texto principal sobre fondo oscuro (no ligar a blanco puro #fff, Impeccable). */
export const foreground = "#f4f4f5" as const;

/** Hover del enlace “Saltar al contenido” (globals.css debe coincidir). */
export const skipLinkHoverBg = "#ffe056" as const;

/** Paleta para `MeshGradient` (4 paradas). */
export const meshGradientColors: [
  string,
  string,
  string,
  string,
] = [
  binance.dark,
  binance.graphite,
  binance.graphite,
  binance.yellow,
];
