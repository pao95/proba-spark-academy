import React from "react";
import { AvatarProps } from "./types";
import { avatarStyles } from "./styles";

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "md",
  fallback,
  fallbackIcon: FallbackIcon,
}) => {
  const classes = [avatarStyles.base, avatarStyles.sizes[size]]
    .filter(Boolean)
    .join(" ");

  const getFallbackText = () => {
    if (fallback) return fallback;
    if (alt) return alt.charAt(0).toUpperCase();
    return "U";
  };

  const getFallbackClasses = () => {
    return `${avatarStyles.fallback} bg-gray-100 text-gray-600 font-medium`;
  };

  const getIconClasses = () => {
    return avatarStyles.icon;
  };

  return (
    <div className={classes}>
      {src ? (
        <img src={src} alt={alt} className={avatarStyles.image} />
      ) : (
        <div className={getFallbackClasses()}>
          {FallbackIcon ? (
            <FallbackIcon className={getIconClasses()} />
          ) : (
            getFallbackText()
          )}
        </div>
      )}
    </div>
  );
};
