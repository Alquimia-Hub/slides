import Slide from "@/components/Slide";
import { GlassCard } from "@/components/ui/GlassCard";
import { useMotionVariants } from "@/lib/motion";
import { motion } from "framer-motion";

export default function Slide12Cierre() {
  const { fadeUpVariants } = useMotionVariants();

  return (
    <Slide
      eyebrow="Gracias"
      title="Gracias. ¿Preguntas?"
      align="center"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8">
        <motion.div variants={fadeUpVariants} initial="hidden" animate="show">
          <GlassCard className="text-center">
            <p className="text-lg text-white/85">
              Contacto: definí tu handle real (LinkedIn / X / Telegram) antes del
              streaming.
            </p>
            <p className="mt-4 text-2xl font-semibold text-binance-yellow">
              Construyamos el futuro de los pagos agenticos en Argentina
            </p>
          </GlassCard>
        </motion.div>
        <motion.p
          variants={fadeUpVariants}
          initial="hidden"
          animate="show"
          className="text-sm text-white/60"
        >
          Título del workshop: &ldquo;Crypto for Agents: Cómo opBNB habilita
          pagos autónomos de IA en Argentina&rdquo;
        </motion.p>
      </div>
    </Slide>
  );
}
