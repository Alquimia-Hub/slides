import { cn } from "@/lib/cn";
import { focusRingClass } from "@/lib/focus-ring";
import Link from "next/link";

export default function BackToHome() {
  return (
    <Link
      href="/"
      aria-label="Volver a la galería"
      className={cn(
        "fixed left-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md transition-[border-color,background-color] duration-150 ease",
        "hover:border-binance-yellow/50 hover:bg-white/10 active:scale-[0.97]",
        "sm:left-6 sm:top-6",
        focusRingClass,
      )}
    >
      <ArrowLeftIcon className="h-5 w-5" />
    </Link>
  );
}

function ArrowLeftIcon({ className }: { className?: string }) {
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
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
  );
}
