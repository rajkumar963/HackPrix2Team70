import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Trophy, Medal, Award, TrendingUp, Users, Star } from 'lucide-react';

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState('overall');

  const overallLeaders = [
    { rank: 1, name: 'Priya Sharma', points: 8450, reports: 89, recycled: 234, streak: 15, badge: 'Eco Champion', avatar: 'PS' },
    { rank: 2, name: 'Rahul Kumar', points: 7890, reports: 76, recycled: 198, streak: 12, badge: 'Green Hero', avatar: 'RK' },
    { rank: 3, name: 'Anjali Patel', points: 7234, reports: 82, recycled: 167, streak: 18, badge: 'Civic Star', avatar: 'AP' },
    { rank: 4, name: 'Vikram Singh', points: 6789, reports: 65, recycled: 189, streak: 8, badge: 'Recycling Pro', avatar: 'VS' },
    { rank: 5, name: 'Sneha Gupta', points: 6234, reports: 71, recycled: 145, streak: 22, badge: 'Report Hero', avatar: 'SG' },
    { rank: 6, name: 'Arjun Mehta', points: 5890, reports: 58, recycled: 134, streak: 6, badge: 'Green Warrior', avatar: 'AM' },
    { rank: 7, name: 'Pooja Reddy', points: 5456, reports: 62, recycled: 123, streak: 14, badge: 'Eco Fighter', avatar: 'PR' },
    { rank: 8, name: 'Kiran Joshi', points: 5123, reports: 54, recycled: 156, streak: 9, badge: 'Civic Hero', avatar: 'KJ' },
    { rank: 9, name: 'Manish Tiwari', points: 4890, reports: 49, recycled: 167, streak: 11, badge: 'Green Star', avatar: 'MT' },
    { rank: 10, name: 'Deepika Nair', points: 4567, reports: 45, recycled: 134, streak: 7, badge: 'Eco Helper', avatar: 'DN' },
    { rank: 11, name: 'Rohit Bose', points: 4234, reports: 42, recycled: 98, streak: 5, badge: 'Report Star', avatar: 'RB' },
    { rank: 12, name: 'Kavya Iyer', points: 3890, reports: 38, recycled: 87, streak: 13, badge: 'Green Helper', avatar: 'KI' },
    { rank: 13, name: 'Suresh Yadav', points: 3567, reports: 35, recycled: 76, streak: 4, badge: 'Civic Helper', avatar: 'SY' },
    { rank: 14, name: 'Ritu Agarwal', points: 3234, reports: 32, recycled: 65, streak: 8, badge: 'Eco Rookie', avatar: 'RA' },
    { rank: 15, name: 'John Doe', points: 2450, reports: 28, recycled: 54, streak: 3, badge: 'Green Rookie', avatar: 'JD' }
  ];

  const monthlyLeaders = [
    { rank: 1, name: 'Anjali Patel', points: 890, reports: 12, recycled: 34, streak: 18, badge: 'Monthly Star', avatar: 'AP' },
    { rank: 2, name: 'Rahul Kumar', points: 756, reports: 9, recycled: 28, streak: 12, badge: 'Monthly Hero', avatar: 'RK' },
    { rank: 3, name: 'Priya Sharma', points: 689, reports: 8, recycled: 25, streak: 15, badge: 'Monthly Pro', avatar: 'PS' },
    { rank: 4, name: 'Sneha Gupta', points: 567, reports: 7, recycled: 22, streak: 22, badge: 'Monthly Ace', avatar: 'SG' },
    { rank: 5, name: 'John Doe', points: 234, reports: 4, recycled: 8, streak: 3, badge: 'Rising Star', avatar: 'JD' }
  ];

  const weeklyLeaders = [
    { rank: 1, name: 'Sneha Gupta', points: 234, reports: 3, recycled: 8, streak: 22, badge: 'Weekly Star', avatar: 'SG' },
    { rank: 2, name: 'Anjali Patel', points: 189, reports: 2, recycled: 7, streak: 18, badge: 'Weekly Hero', avatar: 'AP' },
    { rank: 3, name: 'Priya Sharma', points: 156, reports: 2, recycled: 6, streak: 15, badge: 'Weekly Pro', avatar: 'PS' },
    { rank: 4, name: 'John Doe', points: 89, reports: 1, recycled: 3, streak: 3, badge: 'Weekly Ace', avatar: 'JD' },
    { rank: 5, name: 'Rahul Kumar', points: 67, reports: 1, recycled: 2, streak: 12, badge: 'Weekly Helper', avatar: 'RK' }
  ];

  const getCurrentData = () => {
    switch (activeTab) {
      case 'monthly': return monthlyLeaders;
      case 'weekly': return weeklyLeaders;
      default: return overallLeaders;
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2: return <Medal className="w-6 h-6 text-gray-500" />;
      case 3: return <Award className="w-6 h-6 text-amber-600" />;
      default: return <span className="text-gray-600 font-bold text-lg">#{rank}</span>;
    }
  };

  const getRankBg = (rank: number) => {
    switch (rank) {
      case 1: return 'bg-gradient-to-r from-yellow-500 to-yellow-600 border-yellow-400 shadow-lg';
      case 2: return 'bg-gradient-to-r from-gray-500 to-gray-600 border-gray-400 shadow-lg';
      case 3: return 'bg-gradient-to-r from-amber-500 to-amber-600 border-amber-400 shadow-lg';
      default: return 'bg-white border-gray-200 shadow-lg';
    }
  };

  const userRank = 15; // Current user's rank

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="w-full max-w-6xl mx-auto space-y-4 sm:space-y-6 p-4 sm:p-6">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Leaderboard</h1>
          <p className="text-base sm:text-lg text-gray-600">Compete with other community members and climb the ranks!</p>
        </div>

        {/* User's Current Position */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-none shadow-xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center gap-3 sm:gap-4">
                <Avatar className="w-12 h-12 sm:w-16 sm:h-16 shadow-md">
                  <AvatarFallback className="bg-white text-blue-600 text-lg sm:text-xl font-bold">JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-white text-lg sm:text-xl font-bold">Your Current Position</h3>
                  <p className="text-blue-100 text-sm sm:text-base">Keep climbing to reach the top!</p>
                </div>
              </div>
              <div className="text-center sm:text-right">
                <div className="flex items-center justify-center sm:justify-end gap-2 mb-2">
                  <span className="text-2xl sm:text-3xl font-bold text-white">#{userRank}</span>
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-300" />
                </div>
                <p className="text-blue-100 text-sm sm:text-base font-medium">2,450 points</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
          <Button
            variant={activeTab === 'overall' ? 'default' : 'outline'}
            onClick={() => setActiveTab('overall')}
            className={`w-full sm:w-auto font-medium shadow-sm ${
              activeTab === 'overall' 
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg' 
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
            }`}
          >
            <Trophy className="w-4 h-4 mr-2" />
            Overall
          </Button>
          <Button
            variant={activeTab === 'monthly' ? 'default' : 'outline'}
            onClick={() => setActiveTab('monthly')}
            className={`w-full sm:w-auto font-medium shadow-sm ${
              activeTab === 'monthly' 
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg' 
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
            }`}
          >
            <Star className="w-4 h-4 mr-2" />
            This Month
          </Button>
          <Button
            variant={activeTab === 'weekly' ? 'default' : 'outline'}
            onClick={() => setActiveTab('weekly')}
            className={`w-full sm:w-auto font-medium shadow-sm ${
              activeTab === 'weekly' 
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg' 
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
            }`}
          >
            <Users className="w-4 h-4 mr-2" />
            This Week
          </Button>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {getCurrentData().slice(0, 3).map((leader, index) => (
            <Card key={leader.rank} className={`${getRankBg(leader.rank)} hover:shadow-xl transition-shadow`}>
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="mb-4">{getRankIcon(leader.rank)}</div>
                <Avatar className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 shadow-md">
                  <AvatarFallback className={`text-lg font-bold ${
                    leader.rank <= 3 ? 'bg-white text-gray-800' : 'bg-gradient-to-br from-blue-500 to-purple-600 text-white'
                  }`}>
                    {leader.avatar}
                  </AvatarFallback>
                </Avatar>
                <h3 className={`font-bold text-base sm:text-lg mb-1 ${
                  leader.rank <= 3 ? 'text-white' : 'text-gray-900'
                }`}>
                  {leader.name}
                </h3>
                <Badge className={`mb-3 text-xs font-medium ${
                  leader.rank <= 3 
                    ? 'bg-white/20 text-white hover:bg-white/30' 
                    : 'bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200'
                }`}>
                  {leader.badge}
                </Badge>
                <div className="space-y-2 text-sm">
                  <p className={`font-bold text-xl ${
                    leader.rank <= 3 ? 'text-white' : 'text-gray-900'
                  }`}>
                    {leader.points} pts
                  </p>
                  <div className={`grid grid-cols-2 gap-2 ${
                    leader.rank <= 3 ? 'text-white/90' : 'text-gray-600'
                  }`}>
                    <div>
                      <p className="font-medium">{leader.reports}</p>
                      <p className="text-xs">Reports</p>
                    </div>
                    <div>
                      <p className="font-medium">{leader.recycled}</p>
                      <p className="text-xs">Recycled</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Full Leaderboard */}
        <Card className="bg-white border-gray-200 shadow-lg">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-gray-900 text-lg sm:text-xl">Complete Rankings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 sm:space-y-3">
              {getCurrentData().map((leader) => (
                <div 
                  key={leader.rank}
                  className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg transition-all ${
                    leader.rank === userRank 
                      ? 'bg-blue-50 border border-blue-200 shadow-sm' 
                      : 'bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-center w-10 sm:w-12 flex-shrink-0">
                    {getRankIcon(leader.rank)}
                  </div>
                  <Avatar className="w-10 h-10 sm:w-12 sm:h-12 shadow-sm">
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-sm sm:text-base">
                      {leader.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-gray-900 font-semibold text-sm sm:text-base truncate">{leader.name}</h3>
                      {leader.rank === userRank && (
                        <Badge className="bg-blue-600 text-white text-xs font-medium hover:bg-blue-700">You</Badge>
                      )}
                    </div>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-200 text-xs font-medium">
                      {leader.badge}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 text-center text-xs sm:text-sm flex-shrink-0">
                    <div>
                      <p className="text-gray-900 font-bold">{leader.points}</p>
                      <p className="text-gray-500 text-xs">Points</p>
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-gray-900 font-bold">{leader.reports}</p>
                      <p className="text-gray-500 text-xs">Reports</p>
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-gray-900 font-bold">{leader.recycled}</p>
                      <p className="text-gray-500 text-xs">Recycled</p>
                    </div>
                    <div>
                      <p className="text-gray-900 font-bold">{leader.streak}</p>
                      <p className="text-gray-500 text-xs">Streak</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;