import { cn } from "@/lib/cn";

export function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-none border border-white/[0.06] bg-white/[0.04] p-5 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_10px_36px_-14px_rgba(0,0,0,0.42)] backdrop-blur-sm sm:p-6 md:backdrop-blur-lg lg:p-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
