export const aiChatStyles = {
  container: "h-[calc(100vh-200px)] flex flex-col",
  header: "mb-6",
  title: "text-3xl font-bold text-gray-800",
  subtitle: "text-gray-600 mt-2",
  chatContainer:
    "flex-1 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col",
  messagesContainer: "flex-1 p-6 overflow-y-auto space-y-4",
  messageItem: {
    base: "flex items-start space-x-3",
    user: "flex-row-reverse space-x-reverse",
  },
  avatar: {
    base: "w-8 h-8 rounded-full flex items-center justify-center",
    user: "bg-blue-600",
    ai: "bg-green-600",
  },
  messageContent: {
    base: "flex-1 max-w-2xl",
    user: "text-right",
  },
  messageBubble: {
    base: "p-4 rounded-lg",
    user: "bg-blue-600 text-white",
    ai: "bg-gray-100 text-gray-800",
  },
  messageText: "whitespace-pre-wrap font-sans text-sm",
  timestamp: "text-xs text-gray-500 mt-1 block",
  loadingContainer: "flex items-start space-x-3",
  loadingBubble: "bg-gray-100 p-4 rounded-lg",
  loadingDots: "flex space-x-1",
  loadingDot: {
    base: "w-2 h-2 bg-gray-400 rounded-full animate-bounce",
    delay1: "animation-delay-100",
    delay2: "animation-delay-200",
  },
  inputContainer: "p-4 border-t border-gray-200",
  inputWrapper: "flex space-x-3",
  textarea:
    "flex-1 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none",
  sendButton:
    "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
};
