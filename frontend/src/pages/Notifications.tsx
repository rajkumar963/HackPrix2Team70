
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, Settings, CheckCircle, AlertTriangle, Gift, MapPin, Users, Trash2 } from 'lucide-react';

const Notifications = () => {
  const [filter, setFilter] = useState('all');

  const notifications = [
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

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllAsRead = () => {
    // Logic to mark all notifications as read
  };

  const deleteNotification = (id: number) => {
    // Logic to delete notification
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
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
                onClick={markAllAsRead}
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

        {/* Notification Summary */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-none">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-white">{unreadCount}</p>
                <p className="text-blue-100 text-sm">Unread</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">{notifications.length}</p>
                <p className="text-blue-100 text-sm">Total</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">
                  {notifications.filter(n => n.type === 'reward').length}
                </p>
                <p className="text-blue-100 text-sm">Rewards</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">
                  {notifications.filter(n => n.type.includes('issue')).length}
                </p>
                <p className="text-blue-100 text-sm">Updates</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filter Tabs */}
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-2">
              {filters.map((filterOption) => (
                <Button
                  key={filterOption.id}
                  variant={filter === filterOption.id ? 'default' : 'outline'}
                  onClick={() => setFilter(filterOption.id)}
                  className={
                    filter === filterOption.id
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600'
                  }
                >
                  {filterOption.label} ({filterOption.count})
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Notifications List */}
        <div className="space-y-4">
          {getFilteredNotifications().map((notification) => (
            <Card 
              key={notification.id} 
              className={`border-gray-700 backdrop-blur-sm transition-all duration-200 hover:shadow-lg ${
                notification.read 
                  ? 'bg-gray-800/30' 
                  : 'bg-gray-800/50 border-blue-500/30'
              }`}
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
                          onClick={() => deleteNotification(notification.id)}
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
          ))}
        </div>

        {/* Empty State */}
        {getFilteredNotifications().length === 0 && (
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
    </div>
  );
};

export default Notifications;
