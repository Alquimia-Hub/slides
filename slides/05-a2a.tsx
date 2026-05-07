import Slide from "@/components/Slide";
import { GlassCard } from "@/components/ui/GlassCard";
import { useMotionVariants } from "@/lib/motion";
import { motion } from "framer-motion";

export default function Slide05A2A() {
  const { containerVariants, fadeUpVariants } = useMotionVariants();

  return (
    <Slide
      eyebrow="A2A · Agent to Agent"
      title="Un agente le paga a otro agente"
      subtitle="Coordinación económica directa: el flujo de valor sigue al flujo de trabajo, sin approvals humanos."
      align="start"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid gap-6 lg:grid-cols-2"
      >
        <motion.div variants={fadeUpVariants}>
          <GlassCard>
            <p className="text-xs font-semibold uppercase tracking-wider text-binance-yellow">
              Diseño → Desarrollo
            </p>
            <p className="mt-3 text-lg leading-relaxed text-white/85">
              Un agente de diseño termina el banner y{" "}
              <strong className="text-white">paga en USDT automáticamente</strong>{" "}
              al agente de desarrollo que entregó la landing page.
            </p>
          </GlassCard>
        </motion.div>
        <motion.div variants={fadeUpVariants}>
          <GlassCard>
            <p className="text-xs font-semibold uppercase tracking-wider text-binance-yellow">
              Logística → Transporte
            </p>
            <p className="mt-3 text-lg leading-relaxed text-white/85">
              Un agente de logística detecta un envío y{" "}
              <strong className="text-white">
                liquida el pago en segundos al agente de transporte
              </strong>{" "}
              que lo va a mover.
            </p>
          </GlassCard>
        </motion.div>
      </motion.div>
      <motion.p
        variants={fadeUpVariants}
        initial="hidden"
        animate="show"
        className="mt-8 text-center text-xl font-medium text-binance-yellow"
      >
        &lt; 3 segundos · costo cercano a cero · sin intervención humana
      </motion.p>
    </Slide>
  );
}
