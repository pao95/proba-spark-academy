export const exerciseInterfaceStyles = {
  container: "space-y-4 sm:space-y-6",
  header: "",
  title: "text-2xl sm:text-3xl font-bold text-gray-800",
  subtitle: "text-gray-600 mt-2 text-sm sm:text-base",
  tabsList: "grid w-full grid-cols-2",
  tabsTrigger: "text-xs sm:text-sm",
  tabsContent: "space-y-4 sm:space-y-6",
  grid: "grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6",
  sidebar: "lg:col-span-1",
  sidebarCard: "bg-white rounded-lg shadow-sm border border-gray-200 p-4",
  sidebarTitle: "font-semibold text-gray-800 mb-4 text-sm sm:text-base",
  accordionTrigger: "text-sm font-medium text-gray-700 hover:no-underline",
  topicNav: "space-y-1 ml-2",
  topicButton: {
    base: "w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm transition-colors",
    active: "bg-blue-50 text-blue-600 font-medium",
    inactive: "text-gray-600 hover:bg-gray-50",
  },
  content: "lg:col-span-3",
  contentCard:
    "bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6",
  exerciseHeader:
    "flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4",
  exerciseTitle: "text-lg sm:text-xl font-semibold text-gray-800",
  navigationButtons: "flex space-x-2 w-full sm:w-auto",
  navButton: {
    base: "flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm",
    previous: "bg-gray-100 text-gray-600 disabled:opacity-50 hover:bg-gray-200",
    next: "bg-blue-600 text-white disabled:opacity-50 hover:bg-blue-700",
  },
};
