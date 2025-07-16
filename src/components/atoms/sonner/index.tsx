import React from "react";
import { SonnerProps } from "./types";
import { sonnerStyles } from "./styles";

export const Sonner: React.FC<SonnerProps> = () => {
  // This is a placeholder - in a real implementation, this would handle toast notifications
  return <div className={sonnerStyles.base} />;
};
