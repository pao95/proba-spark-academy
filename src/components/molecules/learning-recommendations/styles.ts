export const learningRecommendationsStyles = {
  base: "bg-white rounded-lg shadow-sm border border-gray-200 p-6",
  title: "text-xl font-semibold text-gray-800 mb-4",
  recommendationsContainer: "space-y-4",
  recommendationItem:
    "border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow",
  recommendationContent: "flex items-start space-x-3",
  iconContainer: "p-2 bg-blue-100 rounded-lg",
  icon: "text-blue-600",
  content: "flex-1",
  header: "flex items-center justify-between mb-2",
  recommendationTitle: "font-medium text-gray-800",
  priorityBadge: {
    base: "px-2 py-1 rounded-full text-xs font-medium border",
    high: "bg-red-100 text-red-800 border-red-200",
    medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
    low: "bg-green-100 text-green-800 border-green-200",
    default: "bg-gray-100 text-gray-800 border-gray-200",
  },
  description: "text-sm text-gray-600 mb-2",
  timeInfo: "flex items-center text-xs text-gray-500",
  timeIcon: "mr-1",
};
