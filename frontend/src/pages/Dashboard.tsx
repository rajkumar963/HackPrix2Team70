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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="w-full max-w-7xl mx-auto space-y-4 sm:space-y-6 p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">Dashboard</h1>
            <p className="text-sm sm:text-base text-gray-600">Welcome back! Here's your community impact overview.</p>
          </div>
          <div>
            <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
              <Plus className="w-4 h-4 mr-2" />
              Quick Report
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-gray-600 text-xs sm:text-sm truncate font-medium">Total Reports</p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">1,247</p>
                  <p className="text-green-600 text-xs sm:text-sm flex items-center mt-1 font-medium">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    <span className="truncate">+12%</span>
                  </p>
                </div>
                <div className="bg-blue-500 p-2 sm:p-3 rounded-full flex-shrink-0 shadow-md">
                  <span className="text-lg sm:text-2xl">📊</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-gray-600 text-xs sm:text-sm truncate font-medium">Rewards Earned</p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">₹2,450</p>
                  <p className="text-green-600 text-xs sm:text-sm flex items-center mt-1 font-medium">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    <span className="truncate">+₹340</span>
                  </p>
                </div>
                <div className="bg-green-500 p-2 sm:p-3 rounded-full flex-shrink-0 shadow-md">
                  <span className="text-lg sm:text-2xl">🎁</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-gray-600 text-xs sm:text-sm truncate font-medium">Current Rank</p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">#15</p>
                  <p className="text-purple-600 text-xs sm:text-sm flex items-center mt-1 font-medium">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    <span className="truncate">Top 5%</span>
                  </p>
                </div>
                <div className="bg-purple-500 p-2 sm:p-3 rounded-full flex-shrink-0 shadow-md">
                  <span className="text-lg sm:text-2xl">🏆</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-gray-600 text-xs sm:text-sm truncate font-medium">Items Recycled</p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">892</p>
                  <p className="text-blue-600 text-xs sm:text-sm flex items-center mt-1 font-medium">
                    <Activity className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    <span className="truncate">+45</span>
                  </p>
                </div>
                <div className="bg-orange-500 p-2 sm:p-3 rounded-full flex-shrink-0 shadow-md">
                  <span className="text-lg sm:text-2xl">♻️</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="bg-white border-gray-200 shadow-lg">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-gray-900 text-lg sm:text-xl">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-16 sm:h-20 flex flex-col gap-1 sm:gap-2 bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300 p-2 sm:p-4 shadow-sm hover:shadow-md transition-all"
                >
                  <div className={`p-1.5 sm:p-2 rounded-full ${action.color} shadow-md`}>
                    <action.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-gray-900 text-xs sm:text-sm text-center leading-tight font-medium">{action.title}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Charts Section - Fixed Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Monthly Activity Chart */}
          <div className="w-full">
            <Card className="bg-white border-gray-200 shadow-lg h-full">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-gray-900 text-lg sm:text-xl">Monthly Activity</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="w-full h-[300px] sm:h-[350px]">
                  <ChartContainer
                    config={{
                      reports: { label: "Reports", color: "#3b82f6" },
                      recycling: { label: "Recycling", color: "#10b981" }
                    }}
                    className="w-full h-full"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="month" className="text-gray-600" fontSize={12} />
                        <YAxis className="text-gray-600" fontSize={12} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="reports" fill="#3b82f6" radius={4} />
                        <Bar dataKey="recycling" fill="#10b981" radius={4} />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Issue Distribution */}
          <div className="w-full">
            <Card className="bg-white border-gray-200 shadow-lg h-full">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-gray-900 text-lg sm:text-xl">Issue Distribution</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="w-full h-[300px] sm:h-[350px] flex flex-col">
                  <div className="flex-1 min-h-0">
                    <ChartContainer
                      config={{
                        issues: { label: "Issues", color: "#8b5cf6" }
                      }}
                      className="w-full h-full"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                          <Pie
                            data={issueTypes}
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={100}
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
                  </div>
                  <div className="mt-4 space-y-2 flex-shrink-0">
                    {issueTypes.map((type, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-3 h-3 rounded-full shadow-sm flex-shrink-0" 
                            style={{ backgroundColor: type.color }}
                          />
                          <span className="text-gray-700 font-medium">{type.name}</span>
                        </div>
                        <span className="text-gray-600 font-medium">{type.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Activity */}
        <Card className="bg-white border-gray-200 shadow-lg">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-gray-900 text-lg sm:text-xl">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3 sm:space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
                  <div className={`p-2 rounded-full flex-shrink-0 shadow-md ${
                    activity.type === 'report' ? 'bg-blue-500' :
                    activity.type === 'recycle' ? 'bg-green-500' :
                    'bg-purple-500'
                  }`}>
                    {activity.type === 'report' && <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-white" />}
                    {activity.type === 'recycle' && <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-white" />}
                    {activity.type === 'reward' && <Wallet className="w-3 h-3 sm:w-4 sm:h-4 text-white" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-900 font-medium text-sm sm:text-base truncate">{activity.title}</p>
                    <p className="text-gray-600 text-xs sm:text-sm truncate font-medium">
                      {activity.location || activity.amount} • {activity.time}
                    </p>
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
  );
};

export default Dashboard;