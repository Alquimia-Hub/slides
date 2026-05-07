import { cn } from "@/lib/cn";
import { useMotionVariants } from "@/lib/motion";
import { motion } from "framer-motion";

export function Bullet({
  icon,
  title,
  children,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { fadeUpVariants } = useMotionVariants();

  return (
    <motion.div
      variants={fadeUpVariants}
      className={cn(
        "flex max-w-3xl gap-4 text-left sm:gap-5",
        className,
      )}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-binance-yellow/30 bg-binance-yellow/10 text-binance-yellow">
        {icon}
      </div>
      <div className="min-w-0">
        <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
          {title}
        </h3>
        <p className="mt-2 text-base leading-relaxed text-pretty text-white/80">
          {children}
        </p>
      </div>
    </motion.div>
  );
}
