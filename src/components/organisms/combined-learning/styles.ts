export const combinedLearningStyles = {
  container: "min-h-screen bg-gray-50",
  
  header: "bg-white border-b border-gray-200 px-6 py-4",
  backButton: "text-blue-600 hover:text-blue-800 font-medium mb-2 flex items-center gap-2",
  title: "text-2xl font-bold text-gray-900",
  subtitle: "text-gray-600 mt-1",
  
  tabsList: "grid w-full grid-cols-2 bg-gray-100 rounded-lg p-1 mb-6",
  tabsTrigger: "rounded-md px-6 py-2 text-sm font-medium transition-all data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm",
  tabsContent: "mt-6",
  
  practiceTabsList: "grid w-full grid-cols-2 bg-gray-100 rounded-lg p-1 mb-4",
  
  grid: "grid grid-cols-1 lg:grid-cols-4 gap-6 p-6",
  
  sidebar: "lg:col-span-1",
  sidebarCard: "bg-white rounded-lg shadow-sm border p-6 sticky top-6",
  sidebarTitle: "text-lg font-semibold mb-4 text-gray-900",
  
  topicNav: "space-y-2",
  topicButton: {
    base: "w-full text-left px-4 py-3 rounded-lg border transition-all duration-200 text-sm font-medium",
    active: "bg-blue-50 border-blue-200 text-blue-700",
    inactive: "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 hover:border-gray-300",
  },
  
  content: "lg:col-span-3",
  contentCard: "bg-white rounded-lg shadow-sm border p-6",
  contentContainer: "space-y-6",
  
  exerciseHeader: "flex justify-between items-center mb-6 pb-4 border-b border-gray-200",
  exerciseTitle: "text-xl font-semibold text-gray-900",
  
  navigationButtons: "flex gap-3",
  navButton: {
    base: "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
    previous: "bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:hover:bg-gray-100",
    next: "bg-blue-600 text-white hover:bg-blue-700 disabled:hover:bg-blue-600",
  },
  
  errorContainer: "min-h-screen bg-gray-50 flex items-center justify-center",
}; 