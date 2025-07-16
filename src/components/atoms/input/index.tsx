import React from "react";
import { InputProps } from "./types";
import { inputStyles } from "./styles";

export const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  disabled = false,
  fullWidth = true,
  size = "md",
  className = "",
  name,
  required = false,
}) => {
  const classes = [
    inputStyles.base,
    inputStyles.sizes[size],
    fullWidth && inputStyles.modifiers.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <input
      type={type}
      className={classes}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      disabled={disabled}
      name={name}
      required={required}
    />
  );
};
