import { LucideIcon } from "lucide-react";

export interface InputProps {
  type?: "text" | "email" | "password" | "number" | "search";
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
  name?: string;
  required?: boolean;
  icon?: LucideIcon;
}
