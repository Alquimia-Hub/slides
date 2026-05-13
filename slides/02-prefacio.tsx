import Slide from "@/components/Slide";
import { GlassCard } from "@/components/ui/GlassCard";
import { useMotionVariants } from "@/lib/motion";
import { motion } from "framer-motion";

/** Tres ejemplos donde el negocio avanza y el pago no termina solo. */
const DONDE_FALLA_EL_CIERRE: { etiqueta: string; texto: string }[] = [
  {
    etiqueta: "Logística",
    texto:
      "El equipo de automatización ya encaminó la carga, pero al cobrar el flete falta entrar al banco en línea para pulsar la transferencia cada vez.",
  },
  {
    etiqueta: "Edificación y obra",
    texto:
      "Ya saben quién hizo el arreglo y cuánto cobra el contratista, pero ese mismo día no pueden depositarle sin que antes alguien autorice desde la cuenta de la empresa.",
  },
  {
    etiqueta: "Compras a proveedores",
    texto:
      "La orden al proveedor sale aprobada y con monto claro, pero el efectivo se queda en pasos manuales entre el “ya firmamos” y el “ya cayó el depósito en la cuenta del proveedor”.",
  },
];

export default function Slide02Prefacio() {
  const { containerVariants, fadeUpVariants } = useMotionVariants();

  return (
    <Slide
      compact
      eyebrow="Prefacio"
      title="El flujo termina donde empieza el pago"
      subtitle="Hay industrias que pierden mucho margen porque el circuito que va del acuerdo hasta que el dinero cambia de mano jamás termina solo: siempre aparece gente en el medio pulsando en el sitio web del banco."
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
          aria-label="Tres ejemplos donde el pago queda a mitad de camino"
        >
          {DONDE_FALLA_EL_CIERRE.map(({ etiqueta, texto }) => (
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
              Esta charla trae cómo puede armarse ese acuerdo común donde máquinas y empresas
              muevan dinero con reglas fijas que todos ven, sin que cada paso pida un humano
              metido en medio del banco en línea.
            </p>
            <p className="mt-3 border-t border-white/[0.08] pt-3 text-[0.875rem] leading-snug text-white/72 sm:text-[0.9375rem] sm:leading-relaxed">
              Cuando esa base queda bien hecha, cada proceso con agentes inteligentes puede quedar automático desde el primer paso hasta que el cobro termina solo, sin trampas manuales en el medio. Por años la manera de mover plata apenas cambió; toca rearmar ese camino pensando primero para que lo haga una máquina y después la pantalla de una persona donde haga falta.
            </p>
          </GlassCard>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
