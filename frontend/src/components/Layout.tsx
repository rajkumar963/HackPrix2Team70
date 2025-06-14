
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsSidebarCollapsed(true);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className={cn(
        "fixed z-30 h-full transition-transform duration-300",
        isMobile && isSidebarCollapsed ? "-translate-x-full" : "translate-x-0"
      )}>
        <Sidebar isCollapsed={isSidebarCollapsed} onToggle={toggleSidebar} />
      </div>

      {/* Overlay for mobile */}
      {isMobile && !isSidebarCollapsed && (
        <div
          className="fixed inset-0 bg-black/50 z-20"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <div className={cn(
        "flex-1 transition-all duration-300",
        !isMobile && !isSidebarCollapsed ? "ml-64" : !isMobile && isSidebarCollapsed ? "ml-16" : "ml-0"
      )}>
        {/* Mobile header with menu button */}
        {isMobile && (
          <div className="sticky top-0 z-10 bg-background border-b border-border p-4">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <span className="text-lg">☰</span>
            </button>
          </div>
        )}
        
        <main className="w-full h-full overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
