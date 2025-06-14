
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
    { label: 'Total Points', value: '2,450', icon: '💎', color: 'text-blue-400' },
    { label: 'Reports Submitted', value: '28', icon: '📋', color: 'text-green-400' },
    { label: 'Items Recycled', value: '54', icon: '♻️', color: 'text-purple-400' },
    { label: 'Current Streak', value: '7 days', icon: '🔥', color: 'text-orange-400' },
    { label: 'Rewards Earned', value: '₹1,200', icon: '🎁', color: 'text-yellow-400' },
    { label: 'Community Rank', value: '#15', icon: '🏅', color: 'text-pink-400' }
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Profile</h1>
          <p className="text-purple-200">Manage your account and track your impact</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <Avatar className="w-24 h-24 mx-auto">
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-2xl font-bold">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <Button 
                    size="sm" 
                    className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-2 bg-blue-600 hover:bg-blue-700 rounded-full w-8 h-8 p-0"
                  >
                    <Camera className="w-4 h-4" />
                  </Button>
                </div>
                
                <h2 className="text-white text-xl font-bold mb-1">{userData.name}</h2>
                <p className="text-gray-400 mb-4">Member since {userData.joinDate}</p>
                
                <div className="space-y-3">
                  <Badge className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
                    🏆 Green Champion
                  </Badge>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">2,450</p>
                    <p className="text-gray-400 text-sm">Total Points</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-purple-400">#15</p>
                    <p className="text-gray-400 text-sm">Community Rank</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm mt-6">
              <CardHeader>
                <CardTitle className="text-white text-lg">Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.slice(0, 3).map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <p className="text-white font-medium text-sm">{achievement.title}</p>
                      <p className="text-gray-400 text-xs">{achievement.date}</p>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600">
                  View All Achievements
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Information */}
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Profile Information</CardTitle>
                <Button
                  variant="outline"
                  onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                  className="bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  {isEditing ? 'Save' : 'Edit'}
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-300">Full Name</Label>
                    {isEditing ? (
                      <Input 
                        value={userData.name}
                        onChange={(e) => setUserData({...userData, name: e.target.value})}
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    ) : (
                      <div className="flex items-center gap-2 p-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-white">{userData.name}</span>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <Label className="text-gray-300">Email</Label>
                    {isEditing ? (
                      <Input 
                        value={userData.email}
                        onChange={(e) => setUserData({...userData, email: e.target.value})}
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    ) : (
                      <div className="flex items-center gap-2 p-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span className="text-white">{userData.email}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <Label className="text-gray-300">Phone</Label>
                    {isEditing ? (
                      <Input 
                        value={userData.phone}
                        onChange={(e) => setUserData({...userData, phone: e.target.value})}
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    ) : (
                      <div className="flex items-center gap-2 p-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="text-white">{userData.phone}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <Label className="text-gray-300">Location</Label>
                    {isEditing ? (
                      <Input 
                        value={userData.location}
                        onChange={(e) => setUserData({...userData, location: e.target.value})}
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    ) : (
                      <div className="flex items-center gap-2 p-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-white">{userData.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Statistics */}
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Your Impact Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-gray-700/30 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                      <p className="text-gray-400 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-gray-700/30 rounded-lg">
                      <div className={`p-2 rounded-full ${
                        activity.type === 'report' ? 'bg-blue-500' :
                        activity.type === 'recycle' ? 'bg-green-500' :
                        activity.type === 'reward' ? 'bg-purple-500' :
                        'bg-yellow-500'
                      }`}>
                        {activity.type === 'report' && <User className="w-4 h-4 text-white" />}
                        {activity.type === 'recycle' && <Star className="w-4 h-4 text-white" />}
                        {activity.type === 'reward' && <Trophy className="w-4 h-4 text-white" />}
                        {activity.type === 'achievement' && <Award className="w-4 h-4 text-white" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium">{activity.title}</p>
                        <p className="text-gray-400 text-sm">{activity.date}</p>
                      </div>
                      <div className={`text-sm font-medium ${
                        activity.points.startsWith('+') ? 'text-green-400' : 'text-red-400'
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
