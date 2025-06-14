
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Bell } from 'lucide-react';
import { NotificationCard, NotificationItem } from './NotificationCard';
import { gsap } from 'gsap';

interface NotificationsListProps {
  notifications: NotificationItem[];
  filter: string;
  onDelete: (id: number) => void;
  notificationsRef: React.RefObject<HTMLDivElement>;
  notificationCardsRef: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

export const NotificationsList = ({ 
  notifications, 
  filter, 
  onDelete, 
  notificationsRef, 
  notificationCardsRef 
}: NotificationsListProps) => {
  const getFilteredNotifications = () => {
    switch (filter) {
      case 'unread':
        return notifications.filter(n => !n.read);
      case 'rewards':
        return notifications.filter(n => n.type === 'reward');
      case 'reports':
        return notifications.filter(n => n.type.includes('report') || n.type.includes('issue'));
      default:
        return notifications;
    }
  };

  const handleNotificationHover = (index: number, isHovering: boolean) => {
    const card = notificationCardsRef.current[index];
    if (!card) return;

    if (isHovering) {
      gsap.to(card, {
        x: 10,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out"
      });
    } else {
      gsap.to(card, {
        x: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const filteredNotifications = getFilteredNotifications();

  return (
    <div ref={notificationsRef} className="space-y-4">
      {filteredNotifications.map((notification, index) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
          onDelete={onDelete}
          onHover={(isHovering) => handleNotificationHover(index, isHovering)}
          cardRef={(el) => notificationCardsRef.current[index] = el}
        />
      ))}

      {/* Empty State */}
      {filteredNotifications.length === 0 && (
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <Bell className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-white text-xl font-semibold mb-2">No notifications found</h3>
            <p className="text-gray-400">
              {filter === 'unread' 
                ? "You're all caught up! No unread notifications."
                : "No notifications match your current filter."
              }
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
