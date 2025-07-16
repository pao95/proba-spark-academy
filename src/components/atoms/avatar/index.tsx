import React from "react";
import { AvatarProps } from "./types";
import { avatarStyles } from "./styles";

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "md",
  fallback,
  className = "",
}) => {
  const classes = [avatarStyles.base, avatarStyles.sizes[size], className]
    .filter(Boolean)
    .join(" ");

  const getFallbackText = () => {
    if (fallback) return fallback;
    if (alt) return alt.charAt(0).toUpperCase();
    return "U";
  };

  return (
    <div className={classes}>
      {src ? (
        <img src={src} alt={alt} className={avatarStyles.image} />
      ) : (
        <div className={avatarStyles.fallback}>{getFallbackText()}</div>
      )}
    </div>
  );
};
