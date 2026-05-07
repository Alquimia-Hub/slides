import Slide from "@/components/Slide";
import { GlassCard } from "@/components/ui/GlassCard";
import { useMotionVariants } from "@/lib/motion";
import { motion } from "framer-motion";

const points = [
  "Referente en la intersección IA + Cripto en el mercado local.",
  "Contacto directo con developers, emprendedores y empresas ya activas en BNB/opBNB.",
  "Apertura de colaboraciones futuras: integraciones, grants y proyectos pagos.",
  "Casos reales argentinos (freelancers, retail, remesas) con ejecución autónoma.",
];

export default function Slide11Oportunidad() {
  const { containerVariants, fadeUpVariants } = useMotionVariants();

  return (
    <Slide
      eyebrow="Workshop"
      title="Por qué esta charla es una oportunidad enorme"
      subtitle="Binance Arg + Alquimia como megáfono y comunidad: convertí la narrativa en relaciones, pipelines y construcción."
      align="start"
    >
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-4xl flex-col gap-4"
      >
        {points.map((p) => (
          <motion.li key={p} variants={fadeUpVariants}>
            <GlassCard className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-binance-yellow shadow-[0_0_12px_rgba(240,185,11,0.55)]" />
              <span className="text-lg text-white/85">{p}</span>
            </GlassCard>
          </motion.li>
        ))}
      </motion.ul>
    </Slide>
  );
}
