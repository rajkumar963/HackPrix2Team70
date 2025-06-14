
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Trash2, LucideIcon } from 'lucide-react';

export interface NotificationItem {
  id: number;
  type: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  icon: LucideIcon;
  color: string;
}

interface NotificationCardProps {
  notification: NotificationItem;
  onDelete: (id: number) => void;
  onHover: (isHovering: boolean) => void;
  cardRef?: (el: HTMLDivElement | null) => void;
}

export const NotificationCard = ({ 
  notification, 
  onDelete, 
  onHover, 
  cardRef 
}: NotificationCardProps) => {
  return (
    <Card 
      ref={cardRef}
      className={`border-gray-700 backdrop-blur-sm transition-all duration-200 hover:shadow-lg cursor-pointer ${
        notification.read 
          ? 'bg-gray-800/30' 
          : 'bg-gray-800/50 border-blue-500/30'
      }`}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className={`p-2 rounded-full ${notification.color} flex-shrink-0`}>
            <notification.icon className="w-5 h-5 text-white" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className={`font-semibold ${
                    notification.read ? 'text-gray-300' : 'text-white'
                  }`}>
                    {notification.title}
                  </h3>
                  {!notification.read && (
                    <Badge className="bg-blue-600 text-white text-xs">New</Badge>
                  )}
                </div>
                <p className={`text-sm mb-2 ${
                  notification.read ? 'text-gray-400' : 'text-gray-300'
                }`}>
                  {notification.message}
                </p>
                <p className="text-xs text-gray-500">{notification.time}</p>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                {!notification.read && (
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 h-8 w-8 p-0"
                  >
                    <CheckCircle className="w-4 h-4" />
                  </Button>
                )}
                <Button 
                  size="sm"
                  variant="outline"
                  onClick={() => onDelete(notification.id)}
                  className="bg-gray-700 border-gray-600 text-gray-300 hover:bg-red-600 hover:border-red-600 h-8 w-8 p-0"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
