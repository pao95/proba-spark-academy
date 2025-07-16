import React from "react";
import { IconProps } from "./types";
import { iconStyles } from "./styles";

export const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  size = 20,
  className = "",
  color,
}) => {
  const classes = [iconStyles.base, className].filter(Boolean).join(" ");

  return <IconComponent size={size} className={classes} color={color} />;
};
