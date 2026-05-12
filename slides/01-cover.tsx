import Slide from "@/components/Slide";
import { useMotionVariants } from "@/lib/motion";
import { motion } from "framer-motion";
import Image from "next/image";

function BinanceMark() {
  return (
    <div translate="no" className="flex items-center gap-3">
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-binance-yellow/40 bg-neutral-950">
        <Image
          src="/bnb-chain-logo.png"
          alt=""
          fill
          sizes="48px"
          className="object-contain p-1"
          aria-hidden
        />
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
