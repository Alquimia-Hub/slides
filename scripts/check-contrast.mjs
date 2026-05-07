/**
 * Contraste relativo WCAG 2.x entre dos hex (#rrggbb).
 * Ejecutar: node scripts/check-contrast.mjs
 * Valores alineados con lib/theme.ts
 */
const binanceDark = "#0c0e12";
const foreground = "#f4f4f5";
const yellow = "#f0b90b";
const graphite = "#1e2329";

function hexRgbs(hex) {
  const h = hex.slice(1);
  return [
    Number.parseInt(h.slice(0, 2), 16) / 255,
    Number.parseInt(h.slice(2, 4), 16) / 255,
    Number.parseInt(h.slice(4, 6), 16) / 255,
  ];
}

function lin2srgb(c) {
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}

function relLum(hex) {
  const [r, g, b] = hexRgbs(hex).map(lin2srgb);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function ratio(fg, bg) {
  const L1 = relLum(fg);
  const L2 = relLum(bg);
  const lighter = Math.max(L1, L2);
  const darker = Math.min(L1, L2);
  return (lighter + 0.05) / (darker + 0.05);
}

const rows = [
  ["foreground / binance.dark (cuerpo)", foreground, binanceDark],
  ["yellow / binance.dark (acento)", yellow, binanceDark],
  ["yellow / graphite (chip sobre superficie)", yellow, graphite],
  ["foreground / graphite", foreground, graphite],
];

console.log("Contraste (WCAG 2.1 relación luminancia)\n");
for (const [label, fg, bg] of rows) {
  const r = ratio(fg, bg);
  const aa = r >= 4.5 ? "pasa AA texto normal" : "revisa (AA normal <4.5:1)";
  const aaLarge = r >= 3 ? "pasa AA texto grande" : "falla AA grande";
  console.log(`${label}\n  ${fg} sobre ${bg}\n  ${r.toFixed(2)}:1 · ${aa} · ${aaLarge}\n`);
}
