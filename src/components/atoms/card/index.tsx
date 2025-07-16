import React from "react";
import { CardProps } from "./types";
import { cardStyles } from "./styles";

export const Card: React.FC<CardProps> = ({
  children,
  variant = "default",
  padding = "md",
  className = "",
}) => {
  const classes = [
    cardStyles.base,
    cardStyles.variants[variant],
    cardStyles.padding[padding],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
};
