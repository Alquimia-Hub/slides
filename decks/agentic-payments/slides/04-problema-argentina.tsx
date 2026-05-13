import Slide from "@/components/Slide";
import { GlassCard } from "@/components/ui/GlassCard";
import { useMotionVariants } from "@/lib/motion";
import { motion } from "framer-motion";
import { Bot, Sparkles, Store, Users, type LucideIcon } from "lucide-react";

const CASOS_DE_USO: {
  etiqueta: string;
  titulo: string;
  texto: string;
  Icon: LucideIcon;
}[] = [
  {
    etiqueta: "A2C",
    titulo: "Agente a persona",
    texto: "Pagos P2P delegados: el agente envía cuando corresponde.",
    Icon: Users,
  },
  {
    etiqueta: "A2B",
    titulo: "Agente a empresa",
    texto: "El agente paga al comercio usando los rails formales del negocio.",
    Icon: Store,
  },
  {
    etiqueta: "A2A",
    titulo: "Agente a agente",
    texto: "Dos sistemas autónomos se liquidan entre sí, sin humano pulsando.",
    Icon: Bot,
  },
];

export default function Slide03PagosAgenticos() {
  const { containerVariants, fadeUpVariants } = useMotionVariants();

  return (
    <Slide
      compact
      eyebrow="Pagos agenticos"
      title="Paradigma nuevo: pagos agenticos"
      titleIcon={<Sparkles size={26} aria-hidden />}
      subtitle="Tres rutas donde el agente no solo decide: ejecuta el pago."
      align="start"
    >
      <motion.ul
        role="list"
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="m-0 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-3 md:gap-5"
        aria-label="Tres rutas donde un agente mueve valor"
      >
        {CASOS_DE_USO.map(({ etiqueta, titulo, texto, Icon }) => (
          <motion.li key={etiqueta} variants={fadeUpVariants} className="h-full">
            <GlassCard className="flex h-full flex-col gap-3 p-5 sm:p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-binance-yellow/30 bg-binance-yellow/10 text-binance-yellow">
                <Icon size={24} aria-hidden />
              </div>
              <p className="text-xs font-semibold tracking-[0.18em] text-binance-yellow">
                {etiqueta}
              </p>
              <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                {titulo}
              </h3>
              <p className="text-sm leading-relaxed text-white/80 sm:text-[0.9375rem]">
                {texto}
              </p>
            </GlassCard>
          </motion.li>
        ))}
      </motion.ul>
    </Slide>
  );
}
