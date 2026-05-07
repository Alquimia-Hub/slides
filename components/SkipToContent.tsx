"use client";

import { useReducedMotion } from "framer-motion";

export default function SkipToContent() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <a
      href="#main-content"
      onClick={(e) => {
        e.preventDefault();
        const el = document.getElementById("main-content");
        el?.focus({ preventScroll: true });
        el?.scrollIntoView({
          behavior: prefersReducedMotion ? "instant" : "smooth",
          block: "start",
        });
      }}
      className="skip-to-content"
    >
      Saltar al contenido
    </a>
  );
}
