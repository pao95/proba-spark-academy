import { LucideIcon } from "lucide-react";

export interface Achievement {
  icon: LucideIcon;
  title: string;
  description: string;
  earned: boolean;
}
