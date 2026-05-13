import type { ComponentType } from "react";

export type SlideDefinition = {
  id: string;
  Component: ComponentType;
};

export type DeckMeta = {
  slug: string;
  title: string;
  description: string;
  dateLabel: string;
  langLabel: string;
};

export type DeckDefinition = DeckMeta & {
  slides: SlideDefinition[];
  CoverComponent: ComponentType;
  preloadAdjacent: (index: number) => void;
};
