import { LucideIcon } from "lucide-react";

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xl";
  fallback?: string;
  fallbackIcon?: LucideIcon;
}
