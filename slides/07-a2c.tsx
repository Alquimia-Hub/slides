import Slide from "@/components/Slide";
import { GlassCard } from "@/components/ui/GlassCard";
import { useMotionVariants } from "@/lib/motion";
import { motion } from "framer-motion";

export default function Slide07A2C() {
  const { containerVariants, fadeUpVariants } = useMotionVariants();

  return (
    <Slide
      eyebrow="A2C · Agent to Consumer"
      title="Un agente mueve valor hacia personas"
      subtitle="Cobros, remesas y distribución familiar: el agente orquesta pagos sin fricción bancaria clásica."
      align="start"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-6"
      >
        <motion.div variants={fadeUpVariants}>
          <GlassCard>
            <p className="text-xs font-semibold uppercase tracking-wider text-binance-yellow">
              Freelancer · Upwork / Fiverr
            </p>
            <p className="mt-3 text-lg text-white/85">
              Cobrás en USDT y tu agente personal{" "}
              <strong className="text-white">
                distribuye automáticamente
              </strong>{" "}
              entre salud, software, impuestos o envío a familia en el interior.
            </p>
          </GlassCard>
        </motion.div>
        <motion.div variants={fadeUpVariants}>
          <GlassCard>
            <p className="text-xs font-semibold uppercase tracking-wider text-binance-yellow">
              Remesas familiares
            </p>
            <p className="mt-3 text-lg text-white/85">
              Llega USDT desde el exterior y el agente lo reparte entre cuentas
              de los hijos, servicios y gastos, convirtiendo solo lo necesario
              a pesos.
            </p>
          </GlassCard>
        </motion.div>
        <motion.div variants={fadeUpVariants}>
          <GlassCard>
            <p className="text-xs font-semibold uppercase tracking-wider text-binance-yellow">
              Profesionales independientes
            </p>
            <p className="mt-3 text-lg text-white/85">
              Médicos, abogados, devs: cobran consultas en crypto y el agente
              paga proveedores o SaaS recurrente{" "}
              <strong className="text-white">sin depender de bancos</strong> que
              pueden congelar la cuenta.
            </p>
          </GlassCard>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
