import { focusRingClass } from "@/lib/focus-ring";
import Image from "next/image";
import Link from "next/link";

export default function HomeNav() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-binance-dark/70 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8 sm:py-4">
        <Link
          href="/"
          aria-label="Alquimia — inicio"
          className={`inline-flex items-center ${focusRingClass} rounded-sm`}
        >
          <Image
            src="/alquimia_logo.png"
            alt="Alquimia"
            width={512}
            height={61}
            priority
            className="h-7 w-auto sm:h-8"
          />
        </Link>

        <a
          href="https://alquimia.community"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-[border-color,background-color] duration-150 hover:border-binance-yellow/50 hover:bg-white/10 sm:px-5 sm:py-2.5 ${focusRingClass}`}
        >
          <span className="hidden sm:inline">alquimia.community</span>
          <span className="sm:hidden">Community</span>
          <ExternalLinkIcon className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
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
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}
