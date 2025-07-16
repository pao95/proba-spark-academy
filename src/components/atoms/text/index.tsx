import React from "react";
import { TextProps } from "./types";
import { textStyles } from "./styles";

export const Text: React.FC<TextProps> = ({
  children,
  variant = "body",
  size,
  weight,
  color = "primary",
  className = "",
  as,
}) => {
  const Component = as || (variant.startsWith("h") ? variant : "span");

  const classes = [
    textStyles.variants[variant],
    size && textStyles.sizes[size],
    weight && textStyles.weights[weight],
    textStyles.colors[color],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <Component className={classes}>{children}</Component>;
};
