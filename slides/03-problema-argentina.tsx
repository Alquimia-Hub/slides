import Slide from "@/components/Slide";
import { Bullet } from "@/components/ui/Bullet";
import { useMotionVariants } from "@/lib/motion";
import { motion } from "framer-motion";

function IconBank() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 10h18v2H3v-2Zm2 4h14v6H5v-6Zm2 2v2h10v-2H7Zm-2-8 7-5 7 5H5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconMp() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Zm5 3a4 4 0 1 0 .01 0H12Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconUsd() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2v20M17 6.5A5.5 5.5 0 0 0 7.09 9H7a5 5 0 1 0 0 6h.09A5.5 5.5 0 0 0 17 17.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Slide03ProblemaArgentina() {
  const { containerVariants } = useMotionVariants();

  return (
    <Slide
      eyebrow="Contexto local"
      title="El problema en Argentina"
      subtitle="El sistema está optimizado para transacciones humanas lentas y costosas. Los agentes necesitan liquidez en segundos y con costos casi nulos."
      align="start"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mx-auto flex w-full max-w-3xl flex-col gap-8"
      >
        <Bullet title="Bancos y transferencias" icon={<IconBank />}>
          24–48 hs de demora, riesgo de cortes y flujos pensados para humanos,
          no para automatización continua.
        </Bullet>
        <Bullet title="Tarjetas y Mercado Pago" icon={<IconMp />}>
          Comisiones altas y hold de fondos: insostenible para micropagos y
          rutinas de alto volumen entre agentes.
        </Bullet>
        <Bullet title="Dólar blue y stablecoins" icon={<IconUsd />}>
          Necesarias para proteger valor, pero falta una capa eficiente para que
          un agente las use de forma autónoma y programática.
        </Bullet>
      </motion.div>
    </Slide>
  );
}
