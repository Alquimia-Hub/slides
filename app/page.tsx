import DeckCard from "@/components/DeckCard";
import HomeNav from "@/components/HomeNav";
import { decks } from "@/decks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alquimia — Presentaciones",
  description: "Galería de presentaciones de Alquimia.",
};

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-binance-dark">
      <HomeNav />
      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-14 lg:py-16"
      >
        <div className="mb-8 flex flex-col gap-3 sm:mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-binance-yellow">
            Presentaciones
          </p>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Decks de Alquimia
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {decks.map((deck) => (
            <DeckCard key={deck.slug} slug={deck.slug} />
          ))}
        </div>
      </main>
    </div>
  );
}
