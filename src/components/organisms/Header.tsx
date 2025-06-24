
import { Bell, Search, User, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuToggle: () => void;
  isMobile: boolean;
}

export const Header = ({ onMenuToggle, isMobile }: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-3 sm:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {isMobile && (
            <button
              onClick={onMenuToggle}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Menu size={20} />
            </button>
          )}
          <h1 className="text-lg sm:text-2xl font-bold text-gray-800 truncate">
            Probability & Statistics
          </h1>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search topics..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-48 lg:w-64"
            />
          </div>
          
          <button className="p-2 text-gray-400 hover:text-gray-600 relative sm:block hidden">
            <Bell size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-700 hidden sm:inline">Student</span>
          </div>
        </div>
      </div>
    </header>
  );
};
