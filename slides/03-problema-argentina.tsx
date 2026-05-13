import Slide from "@/components/Slide";
import { GlassCard } from "@/components/ui/GlassCard";
import { useMotionVariants } from "@/lib/motion";
import { motion } from "framer-motion";

/** Tres rutas donde un agente ejecuta cómo mueve valor hacia otros agentes, empresas o personas. */
const CASOS_DE_USO: { etiqueta: string; texto: string }[] = [
  {
    etiqueta: "A2A · Agente a agente",
    texto:
      "El valor corre entre dos sistemas autónomos sin humano en cada pulsación: en comercio, un agente de viajes paga en nombre del pasajero al agente que reserva con la aerolínea; en trabajo colaborativo, dos automatizadores en la misma app móvil (diseño y desarrollo), liquidándose trabajo entre sí, un caso menos explorado frente al relato típico con consumidor final.",
  },
  {
    etiqueta: "A2B · Agente a empresa",
    texto:
      "Un agente personal de compras paga usando el checkout clásico del comerciante con un navegador guiado, o un gestor de obra liquida a una electricista por una nueva instalación usando los mismos canales formales de cobro que hoy usa ese negocio.",
  },
  {
    etiqueta: "A2C · Agente a persona",
    texto:
      "Equivale a los pagos entre personas fuera del comercio formal, como cuando dividís la cuenta desde el celular: podés delegar un agente automatizado en tu cuenta personal para cumplir esos envíos cuando corresponda, sin ticket ni factura comercial al frente.",
  },
];

export default function Slide03ProblemaArgentina() {
  const { containerVariants, fadeUpVariants } = useMotionVariants();

  return (
    <Slide
      compact
      eyebrow="Pagos agenticos"
      title="Casos de uso de los pagos agenticos"
      subtitle="Tres rutas habituales — agente a agente, agente a empresa y agente a persona — donde el proceso no sólo arma texto sino ejecuta cómo mueve valor."
      align="start"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex max-w-4xl flex-col gap-3 sm:gap-3.5"
      >
        <motion.ul
          role="list"
          className="m-0 flex list-none flex-col gap-2.5 p-0 sm:gap-3"
          aria-label="Tres rutas donde un automatizador mueve valor hacia otros actores"
        >
          {CASOS_DE_USO.map(({ etiqueta, texto }) => (
            <motion.li key={etiqueta} variants={fadeUpVariants} className="flex gap-3">
              <span
                className="mt-2 h-2 w-2 shrink-0 rounded-full bg-binance-yellow shadow-[0_0_10px_rgba(240,185,11,0.45)]"
                aria-hidden
              />
              <p className="min-w-0 text-[0.9375rem] leading-snug text-white/85 sm:text-base sm:leading-relaxed">
                <strong className="font-semibold text-binance-yellow">{etiqueta}</strong>
                {" — "}
                {texto}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div variants={fadeUpVariants}>
          <GlassCard className="border-binance-yellow/25 bg-binance-graphite/40 p-4 sm:p-5">
            <p className="text-[0.9375rem] leading-snug text-white sm:text-base sm:leading-relaxed">
              Juntos estos modos atraviesan liquidación dentro de equipos automatizadores, cobros contra
              empresas y envíos persona a persona como cuando movés dinero desde el teléfono sin factura de
              comerciante.
            </p>
            <p className="mt-3 border-t border-white/[0.08] pt-3 text-[0.875rem] leading-snug text-white/72 sm:text-[0.9375rem] sm:leading-relaxed">
              Cuando cada camino queda bien definido sobre una red pública con reglas legibles por todos los
              interesados, los flujos con agent pueden volverse automáticos desde el arranque hasta que la plata llega efectiva sin un humano pulsando cada paso en la banca en línea.
            </p>
          </GlassCard>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
