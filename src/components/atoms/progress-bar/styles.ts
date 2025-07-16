export const progressBarStyles = {
  base: "w-full bg-gray-200 rounded-full overflow-hidden",
  sizes: {
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
  },
  variants: {
    default: "bg-blue-600",
    success: "bg-green-600",
    warning: "bg-yellow-600",
    error: "bg-red-600",
  },
  fill: "h-full transition-all duration-300 ease-in-out",
  label: "text-sm font-medium text-gray-700 mt-1",
};
