"use client";

import { cn } from "@/lib/cn";
import { focusRingClass } from "@/lib/focus-ring";

type SlideNavProps = {
  total: number;
  current: number;
  onPrev: () => void;
  onNext: () => void;
  onJump: (index: number) => void;
};

export default function SlideNav({
  total,
  current,
  onPrev,
  onNext,
  onJump,
}: SlideNavProps) {
  return (
    <nav
      className={cn(
        "group/nav fixed bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-binance-dark via-binance-dark/90 to-transparent pt-10 sm:pt-12",
        "pb-[max(1.25rem,env(safe-area-inset-bottom))]",
      )}
      aria-label="Navegación del deck"
    >
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 pl-[max(1.5rem,env(safe-area-inset-left))] pr-[max(1.5rem,env(safe-area-inset-right))]">
        <button
          type="button"
          onClick={onPrev}
          disabled={current === 0}
          className={cn(
            "flex h-12 min-h-12 w-12 min-w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md transition-[border-color,background-color,opacity] duration-150 ease",
            focusRingClass,
            "opacity-100 max-sm:pointer-events-auto",
            "sm:pointer-events-none sm:opacity-0 sm:group-hover/nav:pointer-events-auto sm:group-hover/nav:opacity-100",
            "sm:group-focus-within/nav:pointer-events-auto sm:group-focus-within/nav:opacity-100",
            "hover:border-binance-yellow/50 hover:bg-white/10 active:scale-[0.97]",
            "disabled:pointer-events-none disabled:opacity-30 sm:disabled:group-hover/nav:opacity-30 sm:disabled:group-focus-within/nav:opacity-30",
          )}
          aria-label="Slide anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div className="flex flex-1 flex-wrap items-center justify-center gap-1 sm:gap-2">
          {Array.from({ length: total }).map((_, i) => {
            const active = i === current;
            return (
              <button
                key={i}
                type="button"
                aria-label={`Ir a diapositiva ${i + 1} de ${total}`}
                aria-current={active ? "true" : undefined}
                onClick={() => onJump(i)}
                className={cn(
                  "flex h-11 min-h-11 w-11 min-w-11 items-center justify-center rounded-full transition-[opacity] duration-150 ease",
                  focusRingClass,
                )}
              >
                <span
                  className={cn(
                    "block h-3 w-3 rounded-full border transition-[border-color,background-color,transform,box-shadow] duration-150 ease",
                    active
                      ? "border-binance-yellow bg-binance-yellow shadow-[0_0_14px_rgba(240,185,11,0.5)] scale-110"
                      : "border-white/25 bg-white/10 hover:border-binance-yellow/40 hover:bg-white/20",
                  )}
                  aria-hidden
                />
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <p className="hidden min-w-[4.5rem] text-center text-sm tabular-nums text-white/75 sm:block">
            {current + 1} / {total}
          </p>
          <button
            type="button"
            onClick={onNext}
            disabled={current === total - 1}
            className={cn(
              "flex h-12 min-h-12 w-12 min-w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md transition-[border-color,background-color,opacity] duration-150 ease",
              focusRingClass,
              "opacity-100 max-sm:pointer-events-auto",
              "sm:pointer-events-none sm:opacity-0 sm:group-hover/nav:pointer-events-auto sm:group-hover/nav:opacity-100",
              "sm:group-focus-within/nav:pointer-events-auto sm:group-focus-within/nav:opacity-100",
              "hover:border-binance-yellow/50 hover:bg-white/10 active:scale-[0.97]",
              "disabled:pointer-events-none disabled:opacity-30 sm:disabled:group-hover/nav:opacity-30 sm:disabled:group-focus-within/nav:opacity-30",
            )}
            aria-label="Slide siguiente"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
