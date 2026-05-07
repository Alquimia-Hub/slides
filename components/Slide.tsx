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
        "relative z-10 flex min-h-screen w-full flex-col justify-center px-5 pb-40 pt-[max(5rem,env(safe-area-inset-top,0px))] sm:px-10 sm:pb-44 sm:pt-24 md:px-14 lg:px-[clamp(3.5rem,6vw,5.5rem)] lg:pb-48 lg:pt-28",
        alignClasses,
        className,
      )}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className={cn(
          "mx-auto flex w-full max-w-6xl flex-col gap-4 sm:gap-5",
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
            "text-balance scroll-mt-24 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl",
            titleClassName,
          )}
        >
          {title}
        </MotionTitle>

        {subtitle ? (
          <motion.p
            variants={fadeUpVariants}
            className="text-pretty max-w-[65ch] text-xl leading-[1.45] text-white/85 sm:text-2xl sm:leading-snug"
          >
            {subtitle}
          </motion.p>
        ) : null}

        {children ? (
          <div className="mt-8 w-full sm:mt-11 lg:mt-14">{children}</div>
        ) : null}
      </motion.div>
    </section>
  );
}
