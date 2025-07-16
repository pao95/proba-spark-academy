import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  BookOpen,
  BarChart3,
  PenTool,
  MessageCircle,
  User,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  X,
} from "lucide-react";
import { NavItem, SidebarProps } from "./types";
import { sidebarStyles } from "./styles";
import { Button, Icon, Text } from "@/components/atoms";

export const Sidebar = ({ isOpen, onToggle, isMobile }: SidebarProps) => {
  const { t } = useTranslation();
  const isCollapsed = !isMobile && !isOpen;

  const navItems: NavItem[] = [
    { icon: BarChart3, label: t("sidebar.dashboard"), path: "/" },
    { icon: BookOpen, label: t("sidebar.curriculum"), path: "/curriculum" },
    { icon: GraduationCap, label: t("sidebar.theory"), path: "/theory" },
    { icon: PenTool, label: t("sidebar.exercises"), path: "/exercises" },
    { icon: MessageCircle, label: t("sidebar.assistant"), path: "/assistant" },
    { icon: User, label: t("sidebar.progress"), path: "/progress" },
  ];

  const getContainerClasses = () => {
    const base = sidebarStyles.container.base;
    if (isMobile) return `${base} ${sidebarStyles.container.mobile}`;
    if (isCollapsed) return `${base} ${sidebarStyles.container.collapsed}`;
    return `${base} ${sidebarStyles.container.expanded}`;
  };

  return (
    <div className={getContainerClasses()}>
      <div className={sidebarStyles.header}>
        {(!isCollapsed || isMobile) && (
          <div className={sidebarStyles.logo}>
            <div className={sidebarStyles.logoIcon}>
              <Icon icon={BarChart3} className="w-5 h-5 text-white" size={20} />
            </div>
            <Text className={sidebarStyles.logoText}>StatLearn</Text>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className={sidebarStyles.toggleButton}
        >
          {isMobile ? (
            <Icon icon={X} size={20} />
          ) : isCollapsed ? (
            <Icon icon={ChevronRight} size={20} />
          ) : (
            <Icon icon={ChevronLeft} size={20} />
          )}
        </Button>
      </div>

      <nav className={sidebarStyles.nav}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={isMobile ? onToggle : undefined}
            className={({ isActive }) =>
              `${sidebarStyles.navLink.base} ${
                isActive ? sidebarStyles.navLink.active : ""
              }`
            }
          >
            <Icon icon={item.icon} size={20} />
            {(!isCollapsed || isMobile) && (
              <Text className={sidebarStyles.navText}>{item.label}</Text>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
