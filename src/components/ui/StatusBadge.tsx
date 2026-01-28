import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  variant?: "primary" | "accent" | "muted";
  children: React.ReactNode;
  className?: string;
}

export function StatusBadge({ variant = "primary", children, className }: StatusBadgeProps) {
  const variantClasses = {
    primary: "badge-primary",
    accent: "badge-accent",
    muted: "bg-muted text-muted-foreground border border-border",
  };

  return (
    <span className={cn("inline-flex items-center", variantClasses[variant], className)}>
      {children}
    </span>
  );
}

export default StatusBadge;
