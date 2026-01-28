import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

interface CTAButtonProps {
  variant?: "primary" | "outline" | "white";
  size?: "sm" | "md" | "lg" | "hero";
  loading?: boolean;
  icon?: ReactNode;
  showArrow?: boolean;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export function CTAButton({
  className,
  children,
  variant = "primary",
  size = "md",
  loading = false,
  icon,
  showArrow = false,
  disabled,
  type = "button",
  onClick,
}: CTAButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-xl",
    hero: "px-10 py-5 text-lg rounded-2xl",
  };

  const variantClasses = {
    primary: "btn-gradient text-white",
    outline: "btn-outline",
    white: "bg-white text-primary hover:bg-white/90 shadow-md font-semibold",
  };

  return (
    <motion.button
      type={type}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transition-all duration-300",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      disabled={disabled || loading}
      onClick={onClick}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      {!loading && icon}
      <span>{children}</span>
      {showArrow && !loading && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      )}
    </motion.button>
  );
}

export default CTAButton;
