import Slide from "@/components/Slide";
import { GlassCard } from "@/components/ui/GlassCard";
import { useMotionVariants } from "@/lib/motion";
import { motion } from "framer-motion";
import {
  Hand,
  HardHat,
  ShoppingCart,
  Truck,
  type LucideIcon,
} from "lucide-react";

const EJEMPLOS: {
  titulo: string;
  flujo: string;
  freno: string;
  Icon: LucideIcon;
}[] = [
  {
    titulo: "Logística",
    flujo: "El flete se mueve solo.",
    freno: "La transferencia, la pulsa una persona.",
    Icon: Truck,
  },
  {
    titulo: "Edificación y obra",
    flujo: "El contratista terminó.",
    freno: "El depósito espera autorización manual.",
    Icon: HardHat,
  },
  {
    titulo: "Compras a proveedores",
    flujo: "La orden está firmada.",
    freno: "El pago sigue en cola humana.",
    Icon: ShoppingCart,
  },
];

export default function Slide02Intro() {
  const { containerVariants, fadeUpVariants } = useMotionVariants();

  return (
    <Slide
      compact
      eyebrow="Intro"
      title="Paradigma hoy: pagos manuales"
      titleIcon={<Hand size={26} aria-hidden />}
      subtitle="Hoy el negocio se mueve solo. El pago, no. Algunos ejemplos:"
      align="start"
    >
      <motion.ul
        role="list"
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="m-0 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-3 md:gap-5"
        aria-label="Tres ejemplos donde el pago queda a mitad de camino"
      >
        {EJEMPLOS.map(({ titulo, flujo, freno, Icon }) => (
          <motion.li key={titulo} variants={fadeUpVariants} className="h-full">
            <GlassCard className="flex h-full flex-col gap-4 p-5 sm:p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-binance-yellow/30 bg-binance-yellow/10 text-binance-yellow">
                <Icon size={24} aria-hidden />
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                {titulo}
              </h3>
              <div className="flex flex-col gap-2 text-sm leading-relaxed sm:text-[0.9375rem]">
                <p className="flex gap-2 text-white/85">
                  <span aria-hidden className="text-binance-yellow">✓</span>
                  <span>{flujo}</span>
                </p>
                <p className="flex gap-2 text-white/55">
                  <span aria-hidden className="text-white/40">✕</span>
                  <span>{freno}</span>
                </p>
              </div>
            </GlassCard>
          </motion.li>
        ))}
      </motion.ul>
    </Slide>
  );
}
