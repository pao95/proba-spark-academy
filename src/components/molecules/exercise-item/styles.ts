export const exerciseItemStyles = {
  container: "space-y-6",
  questionContainer: "",
  questionTitle: "text-lg font-medium text-gray-800 mb-4",
  optionsContainer: "space-y-3",
  optionLabel: {
    base: "flex items-center p-3 border rounded-lg cursor-pointer transition-colors",
    selected: "border-blue-500 bg-blue-50",
    unselected: "border-gray-200 hover:border-gray-300",
  },
  radioInput: "mr-3",
  textarea:
    "w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px] resize-vertical",
  submitButton:
    "px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
  feedbackContainer: {
    base: "p-4 rounded-lg border",
    correct: "bg-green-50 border-green-200",
    incorrect: "bg-red-50 border-red-200",
  },
  feedbackHeader: "flex items-center space-x-2 mb-2",
  feedbackIcon: {
    correct: "text-green-600",
    incorrect: "text-red-600",
  },
  feedbackTitle: {
    correct: "font-medium text-green-800",
    incorrect: "font-medium text-red-800",
  },
  feedbackContent: "flex items-start space-x-2",
  feedbackExplanation: {
    correct: "text-sm text-green-700",
    incorrect: "text-sm text-red-700",
  },
  resetButton:
    "px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors",
};
