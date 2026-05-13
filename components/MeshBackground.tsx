"use client";

import { meshGradientColors } from "@/lib/theme";
import { MeshGradient } from "@paper-design/shaders-react";
import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const IDLE_SPEED = 0.4;

export default function MeshBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [tabHidden, setTabHidden] = useState(false);

  useEffect(() => {
    const sync = () => setTabHidden(document.visibilityState === "hidden");
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, []);

  const paused = prefersReducedMotion || tabHidden;
  const speed = paused ? 0 : IDLE_SPEED;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-binance-dark">
      <MeshGradient
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.42,
          filter: "blur(28px)",
          contain: "paint",
        }}
        colors={meshGradientColors}
        distortion={1}
        swirl={0.1}
        grainMixer={0.3}
        grainOverlay={0}
        speed={speed}
        scale={0.88}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-binance-dark/55"
      />
      <div className="relative z-10 min-h-screen">{children}</div>
    </div>
  );
}
