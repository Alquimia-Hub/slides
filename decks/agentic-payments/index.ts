import dynamic from "next/dynamic";
import SlideLoading from "@/components/SlideLoading";
import Slide01Cover from "./slides/01-cover";
import type { DeckDefinition, SlideDefinition } from "../types";

const lazySlideSpecs = [
  { id: "sobre-nosotros", load: () => import("./slides/02-sobre-nosotros") },
  { id: "prefacio", load: () => import("./slides/03-prefacio") },
  { id: "problema-argentina", load: () => import("./slides/04-problema-argentina") },
  { id: "demo", load: () => import("./slides/05-demo") },
  { id: "cierre", load: () => import("./slides/06-cierre") },
] as const;

const lazySlides: SlideDefinition[] = lazySlideSpecs.map(({ id, load }) => ({
  id,
  Component: dynamic(load, { loading: SlideLoading }),
}));

const slides: SlideDefinition[] = [
  { id: "cover", Component: Slide01Cover },
  ...lazySlides,
];

const allLazyLoads = [
  () => import("./slides/01-cover"),
  ...lazySlideSpecs.map((s) => s.load),
] as const;

function preloadAdjacent(index: number): void {
  const total = slides.length;
  const next = index + 1;
  const prev = index - 1;
  if (next < total) void allLazyLoads[next]!();
  if (prev >= 0) void allLazyLoads[prev]!();
}

const deck: DeckDefinition = {
  slug: "agentic-payments",
  title: "Agentic Payments en Argentina",
  description:
    "Workshop: cómo opBNB habilita pagos autónomos de IA en Argentina (Binance Arg + Alquimia).",
  dateLabel: "Mayo 2026",
  langLabel: "ES",
  slides,
  CoverComponent: Slide01Cover,
  preloadAdjacent,
};

export default deck;
