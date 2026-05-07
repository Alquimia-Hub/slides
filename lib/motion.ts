import type { Variants } from "framer-motion";
import { useReducedMotion } from "framer-motion";

/** Ease-out (~quint) para entradas y salidas (guía: enter/exit → ease-out). */
export const easeOutSmooth: [number, number, number, number] = [
  0.22, 1, 0.36, 1,
];

export function createContainerVariants(reduceMotion: boolean): Variants {
  if (reduceMotion) {
    return {
      hidden: {},
      show: { transition: { staggerChildren: 0, delayChildren: 0 } },
      exit: {},
    };
  }
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.05,
      },
    },
    exit: {},
  };
}

export function createFadeUpVariants(reduceMotion: boolean): Variants {
  if (reduceMotion) {
    return {
      hidden: { opacity: 1, y: 0 },
      show: { opacity: 1, y: 0, transition: { duration: 0 } },
      exit: { opacity: 1, y: 0, transition: { duration: 0 } },
    };
  }
  return {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.32, ease: easeOutSmooth },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2, ease: easeOutSmooth },
    },
  };
}

export function createSlidePageVariants(reduceMotion: boolean): Variants {
  if (reduceMotion) {
    return {
      hidden: { opacity: 1, x: 0 },
      show: { opacity: 1, x: 0, transition: { duration: 0 } },
      exit: { opacity: 1, x: 0, transition: { duration: 0 } },
    };
  }
  return {
    hidden: { opacity: 0, x: 22 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.28, ease: easeOutSmooth },
    },
    exit: {
      opacity: 0,
      x: -22,
      transition: { duration: 0.2, ease: easeOutSmooth },
    },
  };
}

export function useMotionVariants() {
  const reduceMotion = useReducedMotion() ?? false;
  return {
    reduceMotion,
    containerVariants: createContainerVariants(reduceMotion),
    fadeUpVariants: createFadeUpVariants(reduceMotion),
    slidePageVariants: createSlidePageVariants(reduceMotion),
  };
}
