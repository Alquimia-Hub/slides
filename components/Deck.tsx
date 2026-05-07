"use client";

import SlideNav from "@/components/ui/SlideNav";
import { useMotionVariants } from "@/lib/motion";
import { preloadAdjacentSlides, slides } from "@/slides";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

export default function Deck() {
  const { slidePageVariants } = useMotionVariants();
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const next = useCallback(
    () => setIndex((i) => Math.min(i + 1, total - 1)),
    [total],
  );
  const prev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), []);

  const jump = useCallback((i: number) => {
    setIndex(() => Math.max(0, Math.min(i, total - 1)));
  }, [total]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.closest("input, textarea, select, [contenteditable=true]")
      ) {
        return;
      }

      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
        return;
      }
      if (e.key === "Home") {
        e.preventDefault();
        setIndex(0);
        return;
      }
      if (e.key === "End") {
        e.preventDefault();
        setIndex(total - 1);
        return;
      }
      if (/^[1-9]$/.test(e.key)) {
        const n = Number(e.key) - 1;
        if (n < total) {
          e.preventDefault();
          setIndex(n);
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, prev, total]);

  useEffect(() => {
    preloadAdjacentSlides(index, total);
  }, [index, total]);

  const Current = slides[index].Component;

  return (
    <div className="relative min-h-screen">
      <main
        id="main-content"
        tabIndex={-1}
        className="relative z-10 min-h-screen scroll-mt-2 outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-binance-yellow"
      >
        <p className="sr-only" aria-live="polite" aria-atomic="true">
          {`Diapositiva ${index + 1} de ${total}`}
        </p>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slides[index].id}
            className="min-h-screen [contain:layout_style_paint]"
            variants={slidePageVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <Current />
          </motion.div>
        </AnimatePresence>
      </main>

      <SlideNav
        total={total}
        current={index}
        onPrev={prev}
        onNext={next}
        onJump={jump}
      />
    </div>
  );
}
