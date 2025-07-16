import React from "react";
import { RadioButtonProps } from "./types";
import { radioButtonStyles } from "./styles";

export const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  value,
  checked,
  onChange,
  disabled = false,
  className = "",
  label,
}) => {
  const handleChange = () => {
    if (!disabled) {
      onChange(value);
    }
  };

  const classes = [
    radioButtonStyles.base,
    disabled && radioButtonStyles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={classes}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className={radioButtonStyles.input}
      />
      {label && <span className={radioButtonStyles.label}>{label}</span>}
    </label>
  );
};
