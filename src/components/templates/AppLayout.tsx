
import { ReactNode, useState } from 'react';
import { Sidebar } from '@/components/organisms/Sidebar';
import { Header } from '@/components/organisms/Header';
import { useIsMobile } from '@/hooks/use-mobile';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gray-50 flex w-full">
      {/* Mobile sidebar overlay */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        ${isMobile ? 'fixed inset-y-0 left-0 z-50' : 'relative'}
        ${isMobile && !sidebarOpen ? '-translate-x-full' : 'translate-x-0'}
        transition-transform duration-300 ease-in-out
      `}>
        <Sidebar 
          isOpen={sidebarOpen} 
          onToggle={() => setSidebarOpen(!sidebarOpen)}
          isMobile={isMobile}
        />
      </div>
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header 
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          isMobile={isMobile}
        />
        <main className="flex-1 p-3 sm:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
