import agenticPayments from "./agentic-payments";
import type { DeckDefinition } from "./types";

export type { DeckDefinition, DeckMeta, SlideDefinition } from "./types";

export const decks: DeckDefinition[] = [agenticPayments];

export function getDeck(slug: string): DeckDefinition | undefined {
  return decks.find((d) => d.slug === slug);
}

export function getDeckSlugs(): string[] {
  return decks.map((d) => d.slug);
}
