import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { User, Mail, Phone, MapPin, Camera, Edit, Star, Award, Trophy } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+91 98765 43210',
    location: 'New Delhi, India',
    joinDate: 'January 2024'
  });

  const achievements = [
    { title: 'Eco Warrior', description: 'Recycled 100+ items', icon: '🌟', date: 'Jan 2024' },
    { title: 'Civic Hero', description: 'Reported 50+ issues', icon: '🏆', date: 'Feb 2024' },
    { title: 'Community Star', description: 'Top 10 contributor', icon: '⭐', date: 'Mar 2024' },
    { title: 'Green Champion', description: '30-day streak', icon: '🌱', date: 'Mar 2024' }
  ];

  const stats = [
    { label: 'Total Points', value: '2,450', icon: '💎', color: 'text-blue-600' },
    { label: 'Reports Submitted', value: '28', icon: '📋', color: 'text-green-600' },
    { label: 'Items Recycled', value: '54', icon: '♻️', color: 'text-purple-600' },
    { label: 'Current Streak', value: '7 days', icon: '🔥', color: 'text-orange-600' },
    { label: 'Rewards Earned', value: '₹1,200', icon: '🎁', color: 'text-yellow-600' },
    { label: 'Community Rank', value: '#15', icon: '🏅', color: 'text-pink-600' }
  ];

  const recentActivity = [
    { type: 'report', title: 'Reported broken streetlight', date: '2 hours ago', points: '+25' },
    { type: 'recycle', title: 'Recycled plastic bottles', date: '1 day ago', points: '+45' },
    { type: 'reward', title: 'Redeemed coffee voucher', date: '3 days ago', points: '-200' },
    { type: 'achievement', title: 'Earned Green Champion badge', date: '1 week ago', points: '+100' }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Save logic would go here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="w-full max-w-6xl mx-auto space-y-4 sm:space-y-6 p-4 sm:p-6">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Profile</h1>
          <p className="text-base sm:text-lg text-gray-600">Manage your account and track your impact</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="relative mb-6">
                  <Avatar className="w-20 h-20 sm:w-24 sm:h-24 mx-auto shadow-lg">
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xl sm:text-2xl font-bold">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <Button 
                    size="sm" 
                    className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-8 h-8 p-0 shadow-md"
                  >
                    <Camera className="w-4 h-4" />
                  </Button>
                </div>
                
                <h2 className="text-gray-900 text-lg sm:text-xl font-bold mb-1">{userData.name}</h2>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">Member since {userData.joinDate}</p>
                
                <div className="space-y-3">
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-medium shadow-sm hover:shadow-md">
                    🏆 Green Champion
                  </Badge>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">2,450</p>
                    <p className="text-gray-600 text-sm font-medium">Total Points</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-purple-600">#15</p>
                    <p className="text-gray-600 text-sm font-medium">Community Rank</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow mt-4 sm:mt-6">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-gray-900 text-base sm:text-lg">Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-0">
                {achievements.slice(0, 3).map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all">
                    <div className="text-xl sm:text-2xl flex-shrink-0">{achievement.icon}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-900 font-medium text-sm sm:text-base truncate">{achievement.title}</p>
                      <p className="text-gray-600 text-xs sm:text-sm">{achievement.date}</p>
                    </div>
                  </div>
                ))}
                <Button 
                  variant="outline" 
                  className="w-full bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-medium shadow-sm"
                >
                  View All Achievements
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Profile Information */}
            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-3 sm:pb-4">
                <CardTitle className="text-gray-900 text-base sm:text-lg">Profile Information</CardTitle>
                <Button
                  variant="outline"
                  onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                  className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-medium shadow-sm"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  {isEditing ? 'Save' : 'Edit'}
                </Button>
              </CardHeader>
              <CardContent className="space-y-4 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-700 font-medium text-sm">Full Name</Label>
                    {isEditing ? (
                      <Input 
                        value={userData.name}
                        onChange={(e) => setUserData({...userData, name: e.target.value})}
                        className="mt-1 bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      />
                    ) : (
                      <div className="flex items-center gap-2 p-2 mt-1">
                        <User className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-900 font-medium">{userData.name}</span>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <Label className="text-gray-700 font-medium text-sm">Email</Label>
                    {isEditing ? (
                      <Input 
                        value={userData.email}
                        onChange={(e) => setUserData({...userData, email: e.target.value})}
                        className="mt-1 bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      />
                    ) : (
                      <div className="flex items-center gap-2 p-2 mt-1">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-900 font-medium">{userData.email}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <Label className="text-gray-700 font-medium text-sm">Phone</Label>
                    {isEditing ? (
                      <Input 
                        value={userData.phone}
                        onChange={(e) => setUserData({...userData, phone: e.target.value})}
                        className="mt-1 bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      />
                    ) : (
                      <div className="flex items-center gap-2 p-2 mt-1">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-900 font-medium">{userData.phone}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <Label className="text-gray-700 font-medium text-sm">Location</Label>
                    {isEditing ? (
                      <Input 
                        value={userData.location}
                        onChange={(e) => setUserData({...userData, location: e.target.value})}
                        className="mt-1 bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      />
                    ) : (
                      <div className="flex items-center gap-2 p-2 mt-1">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-900 font-medium">{userData.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Statistics */}
            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-gray-900 text-base sm:text-lg">Your Impact Statistics</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 sm:p-4 text-center border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all shadow-sm">
                      <div className="text-xl sm:text-2xl mb-2">{stat.icon}</div>
                      <p className={`text-lg sm:text-xl font-bold ${stat.color}`}>{stat.value}</p>
                      <p className="text-gray-600 text-xs sm:text-sm font-medium">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-gray-900 text-base sm:text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 sm:space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all">
                      <div className={`p-2 rounded-full flex-shrink-0 shadow-md ${
                        activity.type === 'report' ? 'bg-blue-500' :
                        activity.type === 'recycle' ? 'bg-green-500' :
                        activity.type === 'reward' ? 'bg-purple-500' :
                        'bg-yellow-500'
                      }`}>
                        {activity.type === 'report' && <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />}
                        {activity.type === 'recycle' && <Star className="w-3 h-3 sm:w-4 sm:h-4 text-white" />}
                        {activity.type === 'reward' && <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-white" />}
                        {activity.type === 'achievement' && <Award className="w-3 h-3 sm:w-4 sm:h-4 text-white" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-900 font-medium text-sm sm:text-base truncate">{activity.title}</p>
                        <p className="text-gray-600 text-xs sm:text-sm">{activity.date}</p>
                      </div>
                      <div className={`text-xs sm:text-sm font-bold flex-shrink-0 ${
                        activity.points.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {activity.points} pts
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;