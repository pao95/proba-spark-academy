import React from "react";
import { BadgeProps } from "./types";
import { badgeStyles } from "./styles";

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "md",
  className = "",
}) => {
  const classes = [
    badgeStyles.base,
    badgeStyles.variants[variant],
    badgeStyles.sizes[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{children}</span>;
};
