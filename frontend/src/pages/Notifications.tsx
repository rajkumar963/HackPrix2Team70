
import React, { useState, useEffect, useRef } from 'react';
import { AlertTriangle, Gift, CheckCircle, Users, MapPin, Settings } from 'lucide-react';
import { gsap } from 'gsap';
import { NotificationHeader } from '@/components/notifications/NotificationHeader';
import { NotificationSummary } from '@/components/notifications/NotificationSummary';
import { NotificationFilters } from '@/components/notifications/NotificationFilters';
import { NotificationsList } from '@/components/notifications/NotificationsList';
import { NotificationItem } from '@/components/notifications/NotificationCard';

const Notifications = () => {
  const [filter, setFilter] = useState('all');
  const headerRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const notificationCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const notifications: NotificationItem[] = [
    {
      id: 1,
      type: 'report_update',
      title: 'Issue Status Updated',
      message: 'Your reported streetlight issue on MG Road has been marked as "In Progress"',
      time: '2 hours ago',
      read: false,
      icon: AlertTriangle,
      color: 'bg-blue-500'
    },
    {
      id: 2,
      type: 'reward',
      title: 'Reward Earned!',
      message: 'You earned 45 points for recycling plastic bottles. Keep up the good work!',
      time: '4 hours ago',
      read: false,
      icon: Gift,
      color: 'bg-green-500'
    },
    {
      id: 3,
      type: 'issue_resolved',
      title: 'Issue Resolved',
      message: 'The pothole you reported on Station Road has been fixed. Thank you for your contribution!',
      time: '1 day ago',
      read: true,
      icon: CheckCircle,
      color: 'bg-green-600'
    },
    {
      id: 4,
      type: 'leaderboard',
      title: 'Rank Update',
      message: 'Congratulations! You moved up to #15 on the community leaderboard',
      time: '2 days ago',
      read: true,
      icon: Users,
      color: 'bg-purple-500'
    },
    {
      id: 5,
      type: 'nearby_issue',
      title: 'New Issue Nearby',
      message: 'A new garbage overflow issue was reported 0.5km from your location',
      time: '3 days ago',
      read: true,
      icon: MapPin,
      color: 'bg-orange-500'
    },
    {
      id: 6,
      type: 'reward',
      title: 'Bonus Points',
      message: 'You received 100 bonus points for completing your first week streak!',
      time: '1 week ago',
      read: true,
      icon: Gift,
      color: 'bg-yellow-500'
    },
    {
      id: 7,
      type: 'system',
      title: 'App Update Available',
      message: 'A new version of JanSahay is available with improved features',
      time: '1 week ago',
      read: true,
      icon: Settings,
      color: 'bg-gray-500'
    }
  ];

  const filters = [
    { id: 'all', label: 'All', count: notifications.length },
    { id: 'unread', label: 'Unread', count: notifications.filter(n => !n.read).length },
    { id: 'rewards', label: 'Rewards', count: notifications.filter(n => n.type === 'reward').length },
    { id: 'reports', label: 'Reports', count: notifications.filter(n => n.type.includes('report') || n.type.includes('issue')).length }
  ];

  const unreadCount = notifications.filter(n => !n.read).length;
  const rewardsCount = notifications.filter(n => n.type === 'reward').length;
  const updatesCount = notifications.filter(n => n.type.includes('issue')).length;

  const markAllAsRead = () => {
    // Logic to mark all notifications as read
  };

  const deleteNotification = (id: number) => {
    // Logic to delete notification
  };

  // Initial page animations
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Header animation
    tl.fromTo(headerRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    // Summary card animation
    tl.fromTo(summaryRef.current,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.4"
    );

    // Filters animation
    tl.fromTo(filtersRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
      "-=0.3"
    );

    // Notifications list animation
    tl.fromTo(notificationsRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.2"
    );

    // Stagger notification cards
    tl.fromTo(notificationCardsRef.current,
      { x: -30, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 0.4, 
        stagger: 0.1, 
        ease: "power2.out" 
      },
      "-=0.3"
    );
  }, []);

  // Filter change animation
  useEffect(() => {
    gsap.fromTo(notificationCardsRef.current,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.3, 
        stagger: 0.05, 
        ease: "power2.out" 
      }
    );
  }, [filter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <NotificationHeader
          unreadCount={unreadCount}
          onMarkAllAsRead={markAllAsRead}
          headerRef={headerRef}
        />

        <NotificationSummary
          unreadCount={unreadCount}
          totalCount={notifications.length}
          rewardsCount={rewardsCount}
          updatesCount={updatesCount}
          summaryRef={summaryRef}
        />

        <NotificationFilters
          filters={filters}
          activeFilter={filter}
          onFilterChange={setFilter}
          filtersRef={filtersRef}
        />

        <NotificationsList
          notifications={notifications}
          filter={filter}
          onDelete={deleteNotification}
          notificationsRef={notificationsRef}
          notificationCardsRef={notificationCardsRef}
        />
      </div>
    </div>
  );
};

export default Notifications;
