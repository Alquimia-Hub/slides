import Slide from "@/components/Slide";
import { GlassCard } from "@/components/ui/GlassCard";
import { useMotionVariants } from "@/lib/motion";
import { motion } from "framer-motion";

const steps = [
  "Simular una factura o milestone completado por un agente.",
  "Seleccionar stablecoin y red (opBNB) en una wallet programable.",
  "Firmar o automatizar con policy / smart account (según stack).",
  "Confirmar tx en segundos con fee trivial; dejar el receipt on-chain.",
];

export default function Slide10Demo() {
  const { containerVariants, fadeUpVariants } = useMotionVariants();

  return (
    <Slide
      eyebrow="Demo"
      title="Cómo se ve en la práctica"
      subtitle="Espacio para una mini demo en vivo o un mockup grabado: foco en velocidad, costo y trazabilidad, no en complejidad de código."
      align="start"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2"
      >
        <motion.div variants={fadeUpVariants}>
          <GlassCard className="h-full border-dashed border-binance-yellow/35">
            <p className="text-xs font-semibold uppercase tracking-wider text-binance-yellow">
              Live · Mockup
            </p>
            <p className="mt-4 text-lg text-white/85">
              Mostrar el flujo end-to-end: evento → regla de pago → ejecución
              on-chain (explorer) → notificación al receptor.
            </p>
            <p className="mt-4 text-sm text-white/65">
              Tip: dejá un QR al explorer / contrato para que el público lo
              siga en tiempo real.
            </p>
          </GlassCard>
        </motion.div>
        <motion.div variants={fadeUpVariants}>
          <GlassCard className="h-full">
            <p className="text-xs font-semibold uppercase tracking-wider text-binance-yellow">
              Guión sugerido
            </p>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-white/85">
              {steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </GlassCard>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
