import BackToHome from "@/components/BackToHome";
import Deck from "@/components/Deck";
import MeshBackground from "@/components/MeshBackground";
import { getDeck, getDeckSlugs } from "@/decks";
import { binance } from "@/lib/theme";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";

type RouteParams = { slug: string };

export function generateStaticParams(): RouteParams[] {
  return getDeckSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const deck = getDeck(slug);
  if (!deck) return {};
  return {
    title: deck.title,
    description: deck.description,
    openGraph: {
      title: deck.title,
      description: deck.description,
      locale: "es_AR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: deck.title,
      description: deck.description,
    },
  };
}

export const viewport: Viewport = {
  themeColor: binance.dark,
};

export default async function DeckPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const deck = getDeck(slug);
  if (!deck) notFound();

  return (
    <div className="h-screen overflow-hidden">
      <MeshBackground>
        <Deck slug={deck.slug} />
        <BackToHome />
      </MeshBackground>
    </div>
  );
}
