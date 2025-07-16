import { LucideIcon } from "lucide-react";

export interface NavItem {
  icon: LucideIcon;
  label: string;
  path: string;
}

export interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  isMobile: boolean;
}
