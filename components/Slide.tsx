"use client";

import { cn } from "@/lib/cn";
import { useMotionVariants } from "@/lib/motion";
import { motion } from "framer-motion";

export type SlideAlign = "center" | "start";

export type SlideProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** Por accesibilidad: un solo `h1` en el deck (portada). Resto: `h2`. */
  titleAs?: "h1" | "h2";
  titleClassName?: string;
  /** Menos aire vertical, tipografía más contenida — útil en slides muy textuales */
  compact?: boolean;
  children?: React.ReactNode;
  align?: SlideAlign;
  className?: string;
};

export default function Slide({
  eyebrow,
  title,
  subtitle,
  titleAs = "h2",
  titleClassName,
  compact,
  children,
  align = "center",
  className,
}: SlideProps) {
  const { containerVariants, fadeUpVariants } = useMotionVariants();
  const MotionTitle = titleAs === "h1" ? motion.h1 : motion.h2;

  const alignClasses =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <section
      className={cn(
        "relative z-10 flex min-h-screen w-full flex-col px-5 pb-[max(7.5rem,env(safe-area-inset-bottom,0px)+5.75rem)] pt-[max(5rem,env(safe-area-inset-top,0px))] sm:px-10 sm:pb-[max(8rem,env(safe-area-inset-bottom,0px)+5.75rem)] sm:pt-24 md:px-14 lg:px-[clamp(3.5rem,6vw,5.5rem)] lg:pb-[max(8.5rem,env(safe-area-inset-bottom,0px)+6rem)] lg:pt-28",
        compact ? "justify-start" : "justify-center",
        alignClasses,
        className,
      )}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className={cn(
          "mx-auto flex w-full max-w-6xl flex-col",
          compact ? "gap-2.5 sm:gap-3.5" : "gap-4 sm:gap-5",
          alignClasses,
        )}
      >
        {eyebrow ? (
          <motion.p
            variants={fadeUpVariants}
            className="text-sm font-medium uppercase tracking-[0.22em] text-binance-yellow"
          >
            {eyebrow}
          </motion.p>
        ) : null}

        <MotionTitle
          variants={fadeUpVariants}
          className={cn(
            compact
              ? "text-balance scroll-mt-24 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.85rem]"
              : "text-balance scroll-mt-24 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl",
            titleClassName,
          )}
        >
          {title}
        </MotionTitle>

        {subtitle ? (
          <motion.p
            variants={fadeUpVariants}
            className={cn(
              "text-pretty max-w-[65ch] leading-snug text-white/85",
              compact ? "max-w-[70ch] text-base sm:text-lg" : "text-xl sm:text-2xl",
            )}
          >
            {subtitle}
          </motion.p>
        ) : null}

        {children ? (
          <div
            className={cn(
              "w-full",
              compact ? "mt-4 sm:mt-5 lg:mt-7" : "mt-8 sm:mt-11 lg:mt-14",
            )}
          >
            {children}
          </div>
        ) : null}
      </motion.div>
    </section>
  );
}
