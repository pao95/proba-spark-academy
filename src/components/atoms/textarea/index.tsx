import React from "react";
import { TextareaProps } from "./types";
import { textareaStyles } from "./styles";

export const Textarea: React.FC<TextareaProps> = ({
  value,
  onChange,
  placeholder,
  disabled = false,
  fullWidth = true,
  size = "md",
  rows = 4,
  name,
  required = false,
  resize = "vertical",
  onKeyPress,
}) => {
  const classes = [
    textareaStyles.base,
    textareaStyles.sizes[size],
    textareaStyles.resize[resize],
    fullWidth && textareaStyles.modifiers.fullWidth,
  ]
    .filter(Boolean)
    .join(" ");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <textarea
      className={classes}
      value={value}
      onChange={handleChange}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
      disabled={disabled}
      rows={rows}
      name={name}
      required={required}
    />
  );
};
