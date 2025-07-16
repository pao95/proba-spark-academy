import React from "react";
import { FileInputProps } from "./types";
import { fileInputStyles } from "./styles";

export const FileInput: React.FC<FileInputProps> = ({
  accept,
  multiple = false,
  onChange,
  disabled = false,
  id,
  name,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.files);
  };

  const classes = [fileInputStyles.base, disabled && fileInputStyles.disabled]
    .filter(Boolean)
    .join(" ");

  return (
    <input
      type="file"
      accept={accept}
      multiple={multiple}
      onChange={handleChange}
      disabled={disabled}
      className={classes}
      id={id}
      name={name}
    />
  );
};
