
import React from 'react';
import { Bell, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NotificationHeaderProps {
  unreadCount: number;
  onMarkAllAsRead: () => void;
  headerRef: React.RefObject<HTMLDivElement>;
}

export const NotificationHeader = ({ unreadCount, onMarkAllAsRead, headerRef }: NotificationHeaderProps) => {
  return (
    <div ref={headerRef} className="flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-3">
        <Bell className="w-8 h-8 text-white" />
        <div>
          <h1 className="text-4xl font-bold text-white mb-1">Notifications</h1>
          <p className="text-purple-200">Stay updated with your community activities</p>
        </div>
      </div>
      <div className="flex gap-3 mt-4 md:mt-0">
        {unreadCount > 0 && (
          <Button 
            onClick={onMarkAllAsRead}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Mark All Read
          </Button>
        )}
        <Button 
          variant="outline" 
          className="bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600"
        >
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Button>
      </div>
    </div>
  );
};
