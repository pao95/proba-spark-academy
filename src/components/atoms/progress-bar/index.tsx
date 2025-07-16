import React from "react";
import { ProgressBarProps } from "./types";
import { progressBarStyles } from "./styles";

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  size = "md",
  variant = "default",
  showLabel = false,
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const containerClasses = [
    progressBarStyles.base,
    progressBarStyles.sizes[size],
  ]
    .filter(Boolean)
    .join(" ");

  const fillClasses = [
    progressBarStyles.fill,
    progressBarStyles.variants[variant],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div>
      <div className={containerClasses}>
        <div className={fillClasses} style={{ width: `${percentage}%` }} />
      </div>
      {showLabel && (
        <div className={progressBarStyles.label}>{Math.round(percentage)}%</div>
      )}
    </div>
  );
};
