import Slide from "@/components/Slide";
import { AnimatedStatNumber, StatBig } from "@/components/ui/StatBig";
import { useMotionVariants } from "@/lib/motion";
import { motion } from "framer-motion";

export default function Slide09VentajasTecnicas() {
  const { containerVariants, fadeUpVariants } = useMotionVariants();

  return (
    <Slide
      eyebrow="Ventajas técnicas"
      title="opBNB en números"
      subtitle="Cuatro métricas que importan cuando los pagos los dispara una máquina, no una persona en un home banking."
      align="start"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid gap-4 sm:grid-cols-2"
      >
        <StatBig label="Gas fee típico">
          ~ US$<span className="text-binance-yellow">0,005</span> –{" "}
          <span className="text-binance-yellow">0,01</span>
        </StatBig>
        <StatBig label="Throughput">
          <AnimatedStatNumber to={4000} suffix="+" />{" "}
          <span className="text-2xl font-semibold text-white/80">TPS</span>
        </StatBig>
        <StatBig label="Compatibilidad EVM">100%</StatBig>
        <StatBig label="Ecosistema">Nativo en BNB Chain</StatBig>
      </motion.div>
      <motion.p
        variants={fadeUpVariants}
        initial="hidden"
        animate="show"
        className="mt-6 text-sm text-white/65"
      >
        *TPS y roadmap sujetos a evolución de la red; valores alineados al memo
        (4.000+ TPS, hasta 20.000 en roadmap 2026).
      </motion.p>
    </Slide>
  );
}
