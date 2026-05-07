import Slide from "@/components/Slide";
import { GlassCard } from "@/components/ui/GlassCard";
import { useMotionVariants } from "@/lib/motion";
import { motion } from "framer-motion";

export default function Slide02Prefacio() {
  const { containerVariants, fadeUpVariants } = useMotionVariants();

  return (
    <Slide
      eyebrow="Prefacio"
      title="El nuevo mundo de los agentes IA"
      subtitle="Hoy los agentes ya pueden negociar logística, contratar freelancers, gestionar compras, generar contenido o cerrar ventas… hasta que aparece la fricción del dinero."
      align="start"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex max-w-4xl flex-col gap-6"
      >
        <motion.p variants={fadeUpVariants} className="text-lg text-white/80">
          En el momento en que hay que <strong>mover dinero</strong>, todo se
          detiene: un humano debe aprobar, abrir el home banking o usar Mercado
          Pago. Las vías tradicionales{" "}
          <strong className="text-white">no fueron construidas para máquinas</strong>
          .
        </motion.p>
        <motion.div variants={fadeUpVariants}>
          <GlassCard className="border-binance-yellow/25 bg-binance-graphite/40">
            <p className="text-xl font-medium leading-relaxed text-white">
              En Argentina el problema es{" "}
              <span className="text-binance-yellow">aún más urgente</span> por
              la inflación, restricciones cambiarias, comisiones altas y
              devaluación constante.
            </p>
            <p className="mt-4 text-lg text-white/80">
              La solución <strong className="text-white">no puede ser tradicional</strong>
              : tiene que ser{" "}
              <strong className="text-binance-yellow">
                cripto nativa, programable y barata
              </strong>
              . Construyamos pagos pensados para agentes sobre{" "}
              <strong className="text-white">opBNB</strong>.
            </p>
          </GlassCard>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
