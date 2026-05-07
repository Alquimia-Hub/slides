import Slide from "@/components/Slide";
import { GlassCard } from "@/components/ui/GlassCard";
import { useMotionVariants } from "@/lib/motion";
import { motion } from "framer-motion";

const highlights = [
  {
    t: "Gas ultra bajo",
    d: "Micro-pagos masivos posibles sin erosionar márgenes.",
  },
  {
    t: "Alto throughput",
    d: "Muchos agentes liquidando al mismo tiempo, en tiempo real.",
  },
  {
    t: "OP Stack · EVM",
    d: "Mismas herramientas que Ethereum, con costo y latencia L2.",
  },
  {
    t: "Ecosistema Binance",
    d: "Stablecoins, liquidez y UX que el mercado ya entiende.",
  },
];

export default function Slide08SolucionOpbnb() {
  const { containerVariants, fadeUpVariants } = useMotionVariants();

  return (
    <Slide
      eyebrow="Infraestructura"
      title="La solución: opBNB"
      subtitle="opBNB (L2 optimista de BNB Chain) es la capa que mejor encaja con pagos agenticos en Argentina: barata, rápida, programable y arraigada al ecosistema Binance."
      align="start"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid gap-4 sm:grid-cols-2"
      >
        {highlights.map((h) => (
          <motion.div key={h.t} variants={fadeUpVariants}>
            <GlassCard className="h-full">
              <p className="text-lg font-semibold text-binance-yellow">{h.t}</p>
              <p className="mt-2 text-white/80">{h.d}</p>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={fadeUpVariants} initial="hidden" animate="show">
        <GlassCard className="mt-8 border-binance-yellow/30">
          <p className="text-lg text-white/85">
            Con opBNB un agente puede verificar receptores on-chain, ejecutar el
            pago en segundos, dejar una auditoría inmutable y operar en{" "}
            <strong className="text-white">dólares digitales (USDT)</strong>{" "}
            sin padecer la volatilidad del peso en cada paso operativo.
          </p>
        </GlassCard>
      </motion.div>
    </Slide>
  );
}
