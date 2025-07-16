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
  name,
  required = false,
  icon: Icon,
}) => {
  const inputClasses = [
    inputStyles.base,
    inputStyles.sizes[size],
    Icon && inputStyles.withIcon,
    fullWidth && inputStyles.modifiers.fullWidth,
  ]
    .filter(Boolean)
    .join(" ");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const inputElement = (
    <input
      type={type}
      className={inputClasses}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      disabled={disabled}
      name={name}
      required={required}
    />
  );

  if (Icon) {
    return (
      <div className={inputStyles.container}>
        <Icon
          className={`${inputStyles.icon} ${inputStyles.iconSizes[size]}`}
        />
        {inputElement}
      </div>
    );
  }

  return inputElement;
};
