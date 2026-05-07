import Slide from "@/components/Slide";
import { useMotionVariants } from "@/lib/motion";
import { motion } from "framer-motion";

function BinanceMark() {
  return (
    <div translate="no" className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-binance-yellow/40 bg-binance-yellow/10">
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7 text-binance-yellow"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M12.1 10.6 9.4 13.3 12.1 16 14.8 13.3zm3.8-3.7L13.2 9.6l2.7 2.7 2.7-2.7zm7.5 3.7-2.7-2.7-2.7 2.7 2.7 2.7zm-11.3 0-2.7-2.7-2.7 2.7 2.7 2.7zm5.7 5.6-2.7-2.7-2.7 2.7 2.7 2.7zm3.8-3.7 2.7 2.7-2.7 2.7-2.7-2.7zM16 6.9l2.7 2.7L16 12.3l-2.7-2.7z"
          />
        </svg>
      </div>
      <span className="text-lg font-semibold tracking-wide text-white">
        Binance
      </span>
    </div>
  );
}

export default function Slide01Cover() {
  const { fadeUpVariants } = useMotionVariants();

  return (
    <Slide
      eyebrow="Workshop · Binance Arg + Alquimia · Mayo 2026"
      title="Crypto for Agents"
      titleAs="h1"
      titleClassName="text-5xl !leading-tight sm:text-6xl lg:text-7xl"
      align="center"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-7 sm:gap-10 lg:gap-12">
        <motion.p
          variants={fadeUpVariants}
          initial="hidden"
          animate="show"
          className="text-balance text-3xl font-medium leading-snug text-binance-yellow sm:text-4xl"
        >
          Cómo opBNB habilita pagos autónomos de IA en Argentina
        </motion.p>

        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="show"
        >
          <BinanceMark />
        </motion.div>
      </div>
    </Slide>
  );
}
