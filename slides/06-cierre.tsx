import Slide from "@/components/Slide";
import { useMotionVariants } from "@/lib/motion";
import { motion } from "framer-motion";
import { ArrowRight, AtSign, Globe } from "lucide-react";

const CTAS = [
  {
    href: "https://alquimia.community",
    Icon: Globe,
    label: "Sitio",
    value: "alquimia.community",
  },
  {
    href: "https://x.com/alquimia_hub",
    Icon: AtSign,
    label: "Seguinos en X",
    value: "@alquimia_hub",
  },
];

export default function Slide12Cierre() {
  const { containerVariants, fadeUpVariants } = useMotionVariants();

  return (
    <Slide eyebrow="Gracias" title="Sumate a la comunidad" align="center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8"
      >
        <motion.p
          variants={fadeUpVariants}
          className="text-balance text-center text-lg text-white/80 sm:text-xl"
        >
          Construyamos el futuro de los{" "}
          <strong className="font-semibold text-binance-yellow">
            pagos agenticos
          </strong>{" "}
          en Argentina.
        </motion.p>

        <motion.ul
          role="list"
          variants={containerVariants}
          className="m-0 grid w-full list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 sm:gap-5"
          aria-label="Enlaces de la comunidad"
        >
          {CTAS.map(({ href, Icon, label, value }) => (
            <motion.li key={href} variants={fadeUpVariants}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-binance-yellow/40 bg-binance-yellow/[0.08] p-4 text-left shadow-[0_18px_60px_-30px_rgba(240,185,11,0.5)] transition-colors hover:bg-binance-yellow/15 sm:p-5"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_right,rgba(240,185,11,0.22),transparent_70%)]"
                />
                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-binance-yellow/50 bg-binance-yellow/15 text-binance-yellow sm:h-14 sm:w-14">
                  <Icon size={24} aria-hidden />
                </span>
                <span className="relative flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-binance-yellow">
                    {label}
                  </span>
                  <span className="truncate text-lg font-bold tracking-tight text-white sm:text-xl">
                    {value}
                  </span>
                </span>
                <ArrowRight
                  size={18}
                  aria-hidden
                  className="relative shrink-0 text-binance-yellow transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          variants={fadeUpVariants}
          className="text-sm uppercase tracking-[0.28em] text-white/55"
        >
          ¿Preguntas?
        </motion.p>
      </motion.div>
    </Slide>
  );
}
