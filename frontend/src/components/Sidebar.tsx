
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggle }) => {
  const location = useLocation();

  const navigationItems = [
    { icon: '📊', label: 'Dashboard', path: '/dashboard' },
    { icon: '📋', label: 'Civic Reporting', path: '/civic-reporting' },
    { icon: '🎁', label: 'Recycling Rewards', path: '/recycling-rewards' },
    { icon: '🗺️', label: 'Issue Map', path: '/issue-map' },
    { icon: '🏆', label: 'Leaderboard', path: '/leaderboard' },
    { icon: '💰', label: 'Wallet Integration', path: '/wallet-integration' },
    { icon: '👤', label: 'Profile', path: '/profile' },
    { icon: '🔔', label: 'Notifications', path: '/notifications' },
    { icon: '📈', label: 'Analytics', path: '/analytics' },
  ];

  return (
    <div className={cn(
      "h-screen bg-gradient-to-b from-slate-800 via-purple-900 to-indigo-900 text-white transition-all duration-300 flex flex-col relative",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
            ⚡
          </div>
          {!isCollapsed && (
            <div>
              <h1 className="font-bold text-lg">JanSahay</h1>
              <p className="text-sm text-white/70">RecycleFusion</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-3 space-y-2">
        {navigationItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={index}
              to={item.path}
              className={cn(
                "w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-white/10",
                isActive ? "bg-purple-600/50 border border-purple-400/30" : "",
                isCollapsed ? "justify-center" : ""
              )}
            >
              <span className="text-lg">{item.icon}</span>
              {!isCollapsed && (
                <span className="font-medium text-white/90">{item.label}</span>
              )}
            </Link>
          );
        })}
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-sm font-bold">JD</span>
          </div>
          {!isCollapsed && (
            <div className="flex-1">
              <p className="font-medium text-sm">John Doe</p>
              <p className="text-xs text-white/60">john@example.com</p>
            </div>
          )}
          {!isCollapsed && (
            <button className="p-1 hover:bg-white/10 rounded">
              <span className="text-white/60">⚙️</span>
            </button>
          )}
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-8 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center border-2 border-slate-800 hover:bg-purple-700 transition-colors"
      >
        {isCollapsed ? (
          <ChevronRight className="w-3 h-3" />
        ) : (
          <ChevronLeft className="w-3 h-3" />
        )}
      </button>
    </div>
  );
};

export default Sidebar;
