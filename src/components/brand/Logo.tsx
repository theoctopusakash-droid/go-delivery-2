import logoImage from "@/assets/logo-godelivery.png";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeMap = {
  sm: "h-10",
  md: "h-12",
  lg: "h-16",
  xl: "h-24",
};

export function Logo({ size = "md", className }: LogoProps) {
  return (
    <img
      src={logoImage}
      alt="Go-Delivery Logo"
      className={cn(sizeMap[size], "w-auto object-contain", className)}
    />
  );
}

export default Logo;
