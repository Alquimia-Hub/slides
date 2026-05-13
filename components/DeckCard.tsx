"use client";

import { focusRingClass } from "@/lib/focus-ring";
import { cn } from "@/lib/cn";
import { getDeck } from "@/decks";
import { MotionConfig } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const STAGE_WIDTH = 1280;
const STAGE_HEIGHT = 720;

export default function DeckCard({ slug }: { slug: string }) {
  const deck = getDeck(slug);
  if (!deck) return null;
  const Cover = deck.CoverComponent;
  const frameRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth;
      if (w > 0) setScale(w / STAGE_WIDTH);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <Link
      href={`/${deck.slug}`}
      className={cn(
        "group block overflow-hidden rounded-2xl border border-white/10 bg-binance-graphite/40 transition-[border-color,transform,box-shadow] duration-200 ease",
        "hover:-translate-y-0.5 hover:border-binance-yellow/40 hover:shadow-[0_18px_40px_-20px_rgba(240,185,11,0.35)]",
        focusRingClass,
      )}
      aria-label={`Abrir presentación: ${deck.title}`}
    >
      <div
        ref={frameRef}
        className="deck-thumb relative aspect-[16/9] w-full overflow-hidden bg-binance-dark"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(240,185,11,0.18),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(240,185,11,0.08),transparent_55%)]"
        />
        {scale > 0 ? (
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 top-0"
            style={{
              width: STAGE_WIDTH,
              height: STAGE_HEIGHT,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
          >
            <MotionConfig reducedMotion="always">
              <Cover />
            </MotionConfig>
          </div>
        ) : null}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5"
        />
      </div>

      <div className="flex flex-col gap-2 p-5 sm:p-6">
        <h3 className="text-balance text-xl font-semibold text-white sm:text-2xl">
          {deck.title}
        </h3>
        <p className="text-pretty line-clamp-2 text-sm text-white/70 sm:text-base">
          {deck.description}
        </p>
        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-[0.18em] text-white/55">
          <span>{deck.slides.length} slides</span>
          <span aria-hidden>·</span>
          <span>{deck.langLabel}</span>
          <span aria-hidden>·</span>
          <span>{deck.dateLabel}</span>
        </div>
      </div>
    </Link>
  );
}
