import Slide from "@/components/Slide";
import { GlassCard } from "@/components/ui/GlassCard";
import { useMotionVariants } from "@/lib/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  GitFork,
  MessagesSquare,
  type LucideIcon,
} from "lucide-react";

const HIGHLIGHTS: {
  titulo: string;
  texto: string;
  Icon: LucideIcon;
}[] = [
  {
    titulo: "Comunidad de Discord",
    texto: "Conversaciones diarias y novedades automatizadas por bots.",
    Icon: MessagesSquare,
  },
  {
    titulo: "GitHub open source",
    texto: "Construimos experimentos en abierto, listos para hackear.",
    Icon: GitFork,
  },
  {
    titulo: "Eventos y charlas",
    texto: "Divulgamos en vivo y nos encontramos cara a cara.",
    Icon: CalendarDays,
  },
];

export default function SlideSobreNosotros() {
  const { containerVariants, fadeUpVariants } = useMotionVariants();

  return (
    <Slide
      compact
      eyebrow="Sobre nosotros"
      title="Una comunidad abierta sobre IA y automatización"
      subtitle="Espacio para debatir, construir y encontrarnos."
      align="start"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex w-full flex-col gap-6 sm:gap-7"
      >
        <motion.div
          variants={fadeUpVariants}
          className="flex items-center gap-4 sm:gap-5"
        >
          <div className="relative h-16 w-16 shrink-0 sm:h-20 sm:w-20">
            <Image
              src="/alquimia_icon.png"
              alt="Alquimia"
              fill
              sizes="80px"
              className="object-contain"
              priority
            />
          </div>
          <a
            href="https://alquimia.community"
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-1 items-center justify-between gap-4 overflow-hidden rounded-2xl border border-binance-yellow/45 bg-binance-yellow/10 p-4 shadow-[0_18px_60px_-30px_rgba(240,185,11,0.55)] transition-colors hover:bg-binance-yellow/15 sm:p-5"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_right,rgba(240,185,11,0.25),transparent_70%)]"
            />
            <div className="relative flex flex-col gap-0.5">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-binance-yellow">
                Sumate al Discord
              </span>
              <span className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                alquimia.community
              </span>
            </div>
            <span className="relative inline-flex items-center gap-2 rounded-full bg-binance-yellow px-4 py-2 text-sm font-semibold text-binance-dark transition-transform group-hover:translate-x-0.5">
              Entrar
              <ArrowRight size={16} aria-hidden />
            </span>
          </a>
        </motion.div>

        <motion.ul
          role="list"
          variants={containerVariants}
          className="m-0 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-3 md:gap-5"
          aria-label="Tres pilares de la comunidad"
        >
          {HIGHLIGHTS.map(({ titulo, texto, Icon }) => (
            <motion.li key={titulo} variants={fadeUpVariants} className="h-full">
              <GlassCard className="flex h-full flex-col gap-3 p-5 sm:p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-binance-yellow/30 bg-binance-yellow/10 text-binance-yellow">
                  <Icon size={24} aria-hidden />
                </div>
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
      </motion.div>
    </Slide>
  );
}
