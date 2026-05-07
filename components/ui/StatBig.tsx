import { easeOutSmooth, useMotionVariants } from "@/lib/motion";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useReducedMotion,
} from "framer-motion";
import { useEffect } from "react";

export function StatBig({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { fadeUpVariants } = useMotionVariants();

  return (
    <motion.div
      variants={fadeUpVariants}
      className={`rounded-none border border-white/[0.06] bg-white/[0.04] p-5 text-left shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_10px_36px_-14px_rgba(0,0,0,0.42)] backdrop-blur-sm sm:p-6 md:backdrop-blur-lg lg:p-8 ${className ?? ""}`}
    >
      <p className="text-xs font-medium uppercase tracking-wider text-binance-yellow/85">
        {label}
      </p>
      <div className="mt-3 text-3xl font-semibold tracking-tight text-white tabular-nums sm:text-4xl">
        {children}
      </div>
    </motion.div>
  );
}

export function AnimatedStatNumber({
  to,
  suffix = "",
}: {
  to: number;
  suffix?: string;
}) {
  const reduceMotion = useReducedMotion() ?? false;
  const count = useMotionValue(0);
  const text = useTransform(count, (v) => Math.round(v).toLocaleString("es-AR"));

  useEffect(() => {
    if (reduceMotion) {
      count.set(to);
      return;
    }
    const controls = animate(count, to, {
      duration: 0.85,
      ease: easeOutSmooth,
    });
    return () => controls.stop();
  }, [count, to, reduceMotion]);

  return (
    <>
      <motion.span>{text}</motion.span>
      {suffix ? (
        <span className="font-semibold text-binance-yellow">{suffix}</span>
      ) : null}
    </>
  );
}
