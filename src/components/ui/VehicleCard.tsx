import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { CTAButton } from "./CTAButton";
import { Truck, Package, Thermometer, Ruler, Weight } from "lucide-react";

interface VehicleSpec {
  capacity: string;
  dimensions: string;
  idealUse: string;
}

interface VehicleCardProps {
  name: string;
  type: "mini-van" | "box-truck" | "refrigerated";
  specs: VehicleSpec;
  className?: string;
  delay?: number;
}

const vehicleIcons = {
  "mini-van": Truck,
  "box-truck": Package,
  "refrigerated": Thermometer,
};

export function VehicleCard({ name, type, specs, className, delay = 0 }: VehicleCardProps) {
  const Icon = vehicleIcons[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <GlassCard glow="primary" className={cn("h-full", className)}>
        <div className="flex flex-col h-full">
          {/* Vehicle Icon */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
            <Icon className="h-8 w-8 text-primary-foreground" />
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-xl text-foreground mb-4">{name}</h3>

          {/* Specs Table */}
          <div className="space-y-3 flex-grow mb-6">
            <div className="flex items-center gap-3 text-sm">
              <Weight className="h-4 w-4 text-accent" />
              <span className="text-muted-foreground">Capacity:</span>
              <span className="text-foreground font-medium ml-auto">{specs.capacity}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Ruler className="h-4 w-4 text-accent" />
              <span className="text-muted-foreground">Dimensions:</span>
              <span className="text-foreground font-medium ml-auto">{specs.dimensions}</span>
            </div>
            <div className="pt-3 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <span className="text-accent font-medium">Ideal for: </span>
                {specs.idealUse}
              </p>
            </div>
          </div>

          {/* CTA */}
          <CTAButton variant="outline" size="sm" className="w-full">
            Request Vehicle
          </CTAButton>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default VehicleCard;
