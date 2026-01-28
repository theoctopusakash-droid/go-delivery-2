import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating?: number;
  className?: string;
  delay?: number;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  rating = 5,
  className,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <GlassCard glow="accent" className={cn("h-full", className)}>
        <div className="flex flex-col h-full">
          {/* Quote Icon */}
          <Quote className="h-8 w-8 text-accent/40 mb-4" />

          {/* Quote Text */}
          <blockquote className="text-foreground text-lg leading-relaxed flex-grow mb-6">
            "{quote}"
          </blockquote>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < rating ? "text-accent fill-accent" : "text-muted-foreground"
                )}
              />
            ))}
          </div>

          {/* Author */}
          <div className="pt-4 border-t border-border">
            <p className="font-semibold text-foreground">{author}</p>
            <p className="text-sm text-muted-foreground">
              {role} at {company}
            </p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default TestimonialCard;
