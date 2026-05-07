import Slide from "@/components/Slide";
import { GlassCard } from "@/components/ui/GlassCard";
import { useMotionVariants } from "@/lib/motion";
import { motion } from "framer-motion";

const chips = [
  { k: "A2A", label: "Agent → Agent", hint: "Coordinación máquina–máquina." },
  { k: "A2B", label: "Agent → Business", hint: "Compras a empresas y proveedores." },
  { k: "A2C", label: "Agent → Consumer", hint: "Distribución a personas y familias." },
];

export default function Slide04QueSonPagosAgenticos() {
  const { containerVariants, fadeUpVariants } = useMotionVariants();

  return (
    <Slide
      eyebrow="Definición"
      title="¿Qué son los pagos agenticos?"
      subtitle="Son transferencias iniciadas y ejecutadas 100% por agentes autónomos, sin intervención humana, con reglas on-chain y costos mínimos."
      align="center"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8"
      >
        <motion.div variants={fadeUpVariants}>
          <GlassCard className="max-w-3xl text-left">
            <p className="text-lg leading-relaxed text-white/80">
              En Argentina estos casos{" "}
              <strong className="text-white">ya existen</strong> (freelancers,
              Mercado Libre, remesas, P2P). Lo que falta es la infraestructura
              para que{" "}
              <strong className="text-binance-yellow">
                los agentes los ejecuten solos
              </strong>
              , en tiempo real y con fricción cercana a cero.
            </p>
          </GlassCard>
        </motion.div>
        <div className="grid w-full gap-4 sm:grid-cols-3">
          {chips.map((c) => (
            <motion.div key={c.k} variants={fadeUpVariants}>
              <GlassCard className="h-full border-white/10">
                <p className="text-xs font-semibold uppercase tracking-widest text-binance-yellow">
                  {c.k}
                </p>
                <p className="mt-2 text-lg font-semibold text-white">{c.label}</p>
                <p className="mt-2 text-sm text-white/70">{c.hint}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Slide>
  );
}
