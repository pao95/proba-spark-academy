export const sidebarStyles = {
  container: {
    base: "bg-white shadow-lg transition-all duration-300 h-full",
    mobile: "w-64",
    collapsed: "w-16",
    expanded: "w-64",
  },
  header: "p-4 border-b border-gray-200 flex items-center justify-between",
  logo: "flex items-center space-x-2",
  logoIcon: "w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center",
  logoText: "font-bold text-xl text-gray-800",
  toggleButton: "p-1 rounded-lg hover:bg-gray-100 transition-colors",
  nav: "mt-6",
  navLink: {
    base: "flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors",
    active: "bg-blue-50 text-blue-600 border-r-2 border-blue-600",
  },
  navText: "ml-3",
};
