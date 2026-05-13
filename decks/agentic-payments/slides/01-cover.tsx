import Slide from "@/components/Slide";
import { useMotionVariants } from "@/lib/motion";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Slide01Cover() {
  const { fadeUpVariants } = useMotionVariants();

  return (
    <Slide
      eyebrow="Workshop · Binance Arg + Alquimia · Mayo 2026"
      title="Agentic Finance: un nuevo paradigma"
      titleAs="h1"
      titleClassName="text-5xl !leading-tight sm:text-6xl lg:text-7xl"
      align="center"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-10 sm:gap-12">
        <motion.p
          variants={fadeUpVariants}
          initial="hidden"
          animate="show"
          className="text-balance text-3xl font-medium leading-snug text-white sm:text-4xl"
        >
          La forma en la que gestionamos nuestras{" "}
          <strong className="font-bold text-binance-yellow">FINANZAS</strong>,
          va a cambiar para siempre con IA
        </motion.p>

        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-3"
        >
          <span className="text-xs uppercase tracking-[0.28em] text-white/55">
            Presentado por
          </span>
          <Image
            src="/alquimia_logo.png"
            alt="Alquimia"
            width={260}
            height={48}
            priority
            className="h-9 w-auto opacity-95 sm:h-11"
          />
        </motion.div>
      </div>
    </Slide>
  );
}
