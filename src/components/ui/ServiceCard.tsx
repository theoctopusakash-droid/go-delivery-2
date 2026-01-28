import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { CTAButton } from "./CTAButton";
import { LucideIcon, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

export function ServiceCard({ icon: Icon, title, description, className, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <GlassCard glow="primary" className={cn("h-full group cursor-pointer", className)}>
        <div className="flex flex-col h-full">
          {/* Icon */}
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
            <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
          </div>

          {/* Content */}
          <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-6">
            {description}
          </p>

          {/* Learn More */}
          <div className="flex items-center gap-2 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Learn More</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default ServiceCard;
