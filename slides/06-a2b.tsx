import Slide from "@/components/Slide";
import { GlassCard } from "@/components/ui/GlassCard";
import { useMotionVariants } from "@/lib/motion";
import { motion } from "framer-motion";

export default function Slide06A2B() {
  const { containerVariants, fadeUpVariants } = useMotionVariants();

  return (
    <Slide
      eyebrow="A2B · Agent to Business"
      title="Un agente le paga a una empresa o proveedor"
      subtitle="Compras B2B y operaciones retail con liquidez en stablecoins, integradas a workflows autónomos."
      align="start"
      className="lg:justify-start lg:pt-8"
      titleClassName="!text-3xl sm:!text-4xl lg:!text-5xl"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid w-full gap-4 sm:gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:items-stretch"
      >
        <motion.div variants={fadeUpVariants} className="h-full md:h-auto">
          <GlassCard className="h-full">
            <p className="text-xs font-semibold uppercase tracking-wider text-binance-yellow">
              Retail · Mercado Libre
            </p>
            <p className="mt-3 text-base leading-snug text-white/85 sm:text-lg">
              Un agente detecta stock bajo, coordina con el proveedor argentino y{" "}
              <strong className="text-white">
                ejecuta el pago en USDT de forma autónoma
              </strong>{" "}
              sin abrir el banco ni esperar una aprobación humana.
            </p>
          </GlassCard>
        </motion.div>
        <motion.div variants={fadeUpVariants} className="h-full md:h-auto">
          <GlassCard className="h-full">
            <p className="text-xs font-semibold uppercase tracking-wider text-binance-yellow">
              Procurement recurrente
            </p>
            <p className="mt-3 text-base leading-snug text-white/85 sm:text-lg">
              Suscripciones y licencias: el agente liquida{" "}
              <strong className="text-white">pagos mensuales on-chain</strong>{" "}
              desde una billetera programable con reglas de gasto y auditoría.
            </p>
          </GlassCard>
        </motion.div>
        <motion.div
          variants={fadeUpVariants}
          className="h-full md:col-span-2 md:h-auto lg:col-span-1"
        >
          <GlassCard className="h-full">
            <p className="text-xs font-semibold uppercase tracking-wider text-binance-yellow">
              P2P y dólar blue
            </p>
            <p className="mt-3 text-base leading-snug text-white/85 sm:text-lg">
              Un negocio que hoy opera P2P puede reemplazar colas manuales: el
              agente compra/vende stablecoins en automático con{" "}
              <strong className="text-white">riesgo y tiempos acotados</strong>.
            </p>
          </GlassCard>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
