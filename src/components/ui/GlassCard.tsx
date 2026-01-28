import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  hover?: boolean;
  glow?: "primary" | "accent" | "none";
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, hover = true, glow = "none", ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "glass-card p-6",
          hover && "transition-all duration-300 hover:translate-y-[-4px]",
          glow === "primary" && "hover:shadow-glow-primary",
          glow === "accent" && "hover:shadow-glow-accent",
          className
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export { GlassCard };
