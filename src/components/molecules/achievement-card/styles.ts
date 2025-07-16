export const achievementCardStyles = {
  base: "bg-white rounded-lg shadow-sm border border-gray-200 p-6",
  title: "text-xl font-semibold text-gray-800 mb-4",
  achievementsContainer: "space-y-4",
  achievementItem: {
    base: "flex items-center space-x-3 p-3 rounded-lg",
    earned: "bg-yellow-50 border border-yellow-200",
    locked: "bg-gray-50 border border-gray-200",
  },
  iconContainer: {
    base: "p-2 rounded-lg",
    earned: "bg-yellow-100",
    locked: "bg-gray-100",
  },
  icon: {
    earned: "text-yellow-600",
    locked: "text-gray-400",
  },
  content: "flex-1",
  achievementTitle: {
    earned: "font-medium text-yellow-800",
    locked: "font-medium text-gray-500",
  },
  achievementDescription: {
    earned: "text-sm text-yellow-600",
    locked: "text-sm text-gray-400",
  },
  starIcon: "text-yellow-600",
};
