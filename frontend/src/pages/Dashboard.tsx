
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Award, MapPin, Users, Wallet, Bell, Activity, Plus } from 'lucide-react';

const Dashboard = () => {
  const monthlyData = [
    { month: 'Jan', reports: 45, recycling: 120, rewards: 850 },
    { month: 'Feb', reports: 52, recycling: 135, rewards: 920 },
    { month: 'Mar', reports: 38, recycling: 98, rewards: 780 },
    { month: 'Apr', reports: 67, recycling: 156, rewards: 1100 },
    { month: 'May', reports: 71, recycling: 189, rewards: 1250 },
    { month: 'Jun', reports: 58, recycling: 167, rewards: 1050 }
  ];

  const issueTypes = [
    { name: 'Garbage', value: 35, color: '#ef4444' },
    { name: 'Streetlights', value: 25, color: '#f59e0b' },
    { name: 'Potholes', value: 20, color: '#8b5cf6' },
    { name: 'Water', value: 15, color: '#06b6d4' },
    { name: 'Others', value: 5, color: '#10b981' }
  ];

  const recentActivities = [
    { type: 'report', title: 'Reported broken streetlight', location: 'MG Road', time: '2 hours ago', points: '+25' },
    { type: 'recycle', title: 'Recycled plastic bottles', amount: '15 items', time: '4 hours ago', points: '+45' },
    { type: 'reward', title: 'Redeemed shopping voucher', amount: '₹500', time: '1 day ago', points: '-500' },
    { type: 'report', title: 'Fixed pothole status updated', location: 'Station Road', time: '2 days ago', points: '+10' }
  ];

  const quickActions = [
    { title: 'New Report', icon: Plus, color: 'bg-blue-500', href: '/civic-reporting' },
    { title: 'Recycle Items', icon: Activity, color: 'bg-green-500', href: '/recycling-rewards' },
    { title: 'View Map', icon: MapPin, color: 'bg-purple-500', href: '/issue-map' },
    { title: 'Leaderboard', icon: Users, color: 'bg-orange-500', href: '/leaderboard' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="w-full space-y-4 sm:space-y-6 p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">Dashboard</h1>
            <p className="text-sm sm:text-base text-purple-200">Welcome back! Here's your community impact overview.</p>
          </div>
          <div>
            <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              Quick Report
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-gray-400 text-xs sm:text-sm truncate">Total Reports</p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">1,247</p>
                  <p className="text-green-400 text-xs sm:text-sm flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    <span className="truncate">+12%</span>
                  </p>
                </div>
                <div className="bg-blue-500 p-2 sm:p-3 rounded-full flex-shrink-0">
                  <span className="text-lg sm:text-2xl">📊</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-gray-400 text-xs sm:text-sm truncate">Rewards Earned</p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">₹2,450</p>
                  <p className="text-green-400 text-xs sm:text-sm flex items-center mt-1">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    <span className="truncate">+₹340</span>
                  </p>
                </div>
                <div className="bg-green-500 p-2 sm:p-3 rounded-full flex-shrink-0">
                  <span className="text-lg sm:text-2xl">🎁</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-gray-400 text-xs sm:text-sm truncate">Current Rank</p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">#15</p>
                  <p className="text-purple-400 text-xs sm:text-sm flex items-center mt-1">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    <span className="truncate">Top 5%</span>
                  </p>
                </div>
                <div className="bg-purple-500 p-2 sm:p-3 rounded-full flex-shrink-0">
                  <span className="text-lg sm:text-2xl">🏆</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-gray-400 text-xs sm:text-sm truncate">Items Recycled</p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">892</p>
                  <p className="text-blue-400 text-xs sm:text-sm flex items-center mt-1">
                    <Activity className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    <span className="truncate">+45</span>
                  </p>
                </div>
                <div className="bg-orange-500 p-2 sm:p-3 rounded-full flex-shrink-0">
                  <span className="text-lg sm:text-2xl">♻️</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-white text-lg sm:text-xl">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-16 sm:h-20 flex flex-col gap-1 sm:gap-2 bg-gray-700/50 border-gray-600 hover:bg-gray-600/50 p-2 sm:p-4"
                >
                  <div className={`p-1.5 sm:p-2 rounded-full ${action.color}`}>
                    <action.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-white text-xs sm:text-sm text-center leading-tight">{action.title}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Charts Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
          {/* Monthly Activity Chart */}
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="text-white text-lg sm:text-xl">Monthly Activity</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ChartContainer
                config={{
                  reports: { label: "Reports", color: "#3b82f6" },
                  recycling: { label: "Recycling", color: "#10b981" }
                }}
                className="h-[250px] sm:h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <XAxis dataKey="month" className="text-gray-400" fontSize={12} />
                    <YAxis className="text-gray-400" fontSize={12} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="reports" fill="#3b82f6" radius={4} />
                    <Bar dataKey="recycling" fill="#10b981" radius={4} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Issue Distribution */}
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="text-white text-lg sm:text-xl">Issue Distribution</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ChartContainer
                config={{
                  issues: { label: "Issues", color: "#8b5cf6" }
                }}
                className="h-[250px] sm:h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={issueTypes}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      dataKey="value"
                    >
                      {issueTypes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="mt-4 space-y-2">
                {issueTypes.map((type, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: type.color }}
                      />
                      <span className="text-gray-300">{type.name}</span>
                    </div>
                    <span className="text-gray-400">{type.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-white text-lg sm:text-xl">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3 sm:space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-700/30 rounded-lg">
                  <div className={`p-2 rounded-full flex-shrink-0 ${
                    activity.type === 'report' ? 'bg-blue-500' :
                    activity.type === 'recycle' ? 'bg-green-500' :
                    'bg-purple-500'
                  }`}>
                    {activity.type === 'report' && <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-white" />}
                    {activity.type === 'recycle' && <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-white" />}
                    {activity.type === 'reward' && <Wallet className="w-3 h-3 sm:w-4 sm:h-4 text-white" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium text-sm sm:text-base truncate">{activity.title}</p>
                    <p className="text-gray-400 text-xs sm:text-sm truncate">
                      {activity.location || activity.amount} • {activity.time}
                    </p>
                  </div>
                  <div className={`text-xs sm:text-sm font-medium flex-shrink-0 ${
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
  );
};

export default Dashboard;
