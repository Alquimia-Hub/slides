import type { ComponentType } from "react";
import dynamic from "next/dynamic";
import Slide01Cover from "./01-cover";
import SlideLoading from "./SlideLoading";

/** Portada en el chunk principal para LCP estable; el resto se parte por ruta. */
const lazySlideSpecs = [
  { id: "prefacio", load: () => import("./02-prefacio") },
  { id: "problema-argentina", load: () => import("./03-problema-argentina") },
  { id: "pagos-agenticos", load: () => import("./04-que-son-pagos-agenticos") },
  { id: "a2a", load: () => import("./05-a2a") },
  { id: "a2b", load: () => import("./06-a2b") },
  { id: "a2c", load: () => import("./07-a2c") },
  { id: "solucion-opbnb", load: () => import("./08-solucion-opbnb") },
  { id: "ventajas-tecnicas", load: () => import("./09-ventajas-tecnicas") },
  { id: "demo", load: () => import("./10-demo") },
  { id: "oportunidad", load: () => import("./11-oportunidad") },
  { id: "cierre", load: () => import("./12-cierre") },
] as const;

export type SlideDefinition = {
  id: string;
  Component: ComponentType;
};

const lazySlides: SlideDefinition[] = lazySlideSpecs.map(({ id, load }) => ({
  id,
  Component: dynamic(load, {
    loading: SlideLoading,
  }),
}));

export const slides: SlideDefinition[] = [
  { id: "cover", Component: Slide01Cover },
  ...lazySlides,
];

const allLazyLoads = [
  () => import("./01-cover"),
  ...lazySlideSpecs.map((s) => s.load),
] as const;

/** Precarga chunks vecinos para navegación fluida (import asíncrono, no bloquea el hilo). */
export function preloadAdjacentSlides(index: number, total: number): void {
  const next = index + 1;
  const prev = index - 1;
  if (next < total) void allLazyLoads[next]!();
  if (prev >= 0) void allLazyLoads[prev]!();
}
