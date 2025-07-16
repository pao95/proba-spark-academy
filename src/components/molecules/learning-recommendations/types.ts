import { LucideIcon } from "lucide-react";

export interface Recommendation {
  icon: LucideIcon;
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low";
  estimatedTime: string;
}
