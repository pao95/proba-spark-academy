
import { NavLink } from 'react-router-dom';
import { 
  BookOpen, BarChart3, PenTool, MessageCircle, 
  User, ChevronLeft, ChevronRight, GraduationCap, X 
} from 'lucide-react';

const navItems = [
  { icon: BarChart3, label: 'Dashboard', path: '/' },
  { icon: BookOpen, label: 'Curriculum', path: '/curriculum' },
  { icon: GraduationCap, label: 'Theory', path: '/theory' },
  { icon: PenTool, label: 'Exercises', path: '/exercises' },
  { icon: MessageCircle, label: 'AI Assistant', path: '/assistant' },
  { icon: User, label: 'Progress', path: '/progress' },
];

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  isMobile: boolean;
}

export const Sidebar = ({ isOpen, onToggle, isMobile }: SidebarProps) => {
  const isCollapsed = !isMobile && !isOpen;

  return (
    <div className={`bg-white shadow-lg transition-all duration-300 h-full ${
      isMobile ? 'w-64' : isCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        {(!isCollapsed || isMobile) && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-800">StatLearn</span>
          </div>
        )}
        <button
          onClick={onToggle}
          className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isMobile ? (
            <X size={20} />
          ) : isCollapsed ? (
            <ChevronRight size={20} />
          ) : (
            <ChevronLeft size={20} />
          )}
        </button>
      </div>
      
      <nav className="mt-6">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={isMobile ? onToggle : undefined}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                isActive ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : ''
              }`
            }
          >
            <item.icon size={20} />
            {(!isCollapsed || isMobile) && <span className="ml-3">{item.label}</span>}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
