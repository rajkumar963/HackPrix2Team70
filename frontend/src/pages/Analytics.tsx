import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { TrendingUp, TrendingDown, BarChart3, PieChart as PieChartIcon, Activity, Calendar } from 'lucide-react';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('month');

  const monthlyData = [
    { month: 'Jan', reports: 45, recycling: 120, rewards: 850, resolved: 38 },
    { month: 'Feb', reports: 52, recycling: 135, rewards: 920, resolved: 45 },
    { month: 'Mar', reports: 38, recycling: 98, rewards: 780, resolved: 32 },
    { month: 'Apr', reports: 67, recycling: 156, rewards: 1100, resolved: 58 },
    { month: 'May', reports: 71, recycling: 189, rewards: 1250, resolved: 61 },
    { month: 'Jun', reports: 58, recycling: 167, rewards: 1050, resolved: 52 }
  ];

  const weeklyData = [
    { week: 'Week 1', reports: 12, recycling: 34, rewards: 280, resolved: 10 },
    { week: 'Week 2', reports: 15, recycling: 42, rewards: 340, resolved: 12 },
    { week: 'Week 3', reports: 8, recycling: 28, rewards: 210, resolved: 7 },
    { week: 'Week 4', reports: 18, recycling: 56, rewards: 420, resolved: 16 }
  ];

  const issueTypeData = [
    { name: 'Garbage', value: 35, color: '#ef4444' },
    { name: 'Streetlights', value: 25, color: '#f59e0b' },
    { name: 'Potholes', value: 20, color: '#8b5cf6' },
    { name: 'Water Issues', value: 15, color: '#06b6d4' },
    { name: 'Others', value: 5, color: '#10b981' }
  ];

  const recyclingData = [
    { type: 'Plastic', amount: 45, color: '#3b82f6' },
    { type: 'Paper', amount: 30, color: '#10b981' },
    { type: 'Glass', amount: 15, color: '#f59e0b' },
    { type: 'Metal', amount: 8, color: '#8b5cf6' },
    { type: 'Electronics', amount: 2, color: '#ef4444' }
  ];

  const impactData = [
    { date: '2024-01-01', carbonSaved: 12.5, pointsEarned: 250, issuesResolved: 5 },
    { date: '2024-01-08', carbonSaved: 18.2, pointsEarned: 340, issuesResolved: 7 },
    { date: '2024-01-15', carbonSaved: 15.8, pointsEarned: 290, issuesResolved: 6 },
    { date: '2024-01-22', carbonSaved: 22.1, pointsEarned: 420, issuesResolved: 9 },
    { date: '2024-01-29', carbonSaved: 19.7, pointsEarned: 380, issuesResolved: 8 }
  ];

  const getCurrentData = () => {
    return timeRange === 'week' ? weeklyData : monthlyData;
  };

  const stats = [
    {
      title: 'Total Impact Score',
      value: '8,450',
      change: '+12.5%',
      trend: 'up',
      icon: Activity,
      color: 'text-blue-600'
    },
    {
      title: 'Issues Resolved',
      value: '89',
      change: '+8.2%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      title: 'Carbon Footprint Saved',
      value: '156.8 kg',
      change: '+15.3%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-purple-600'
    },
    {
      title: 'Community Ranking',
      value: '#15',
      change: '+3 positions',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-orange-600'
    }
  ];

  const achievementProgress = [
    { name: 'Eco Warrior', current: 89, target: 100, percentage: 89 },
    { name: 'Recycling Master', current: 156, target: 200, percentage: 78 },
    { name: 'Community Hero', current: 45, target: 50, percentage: 90 },
    { name: 'Streak Champion', current: 22, target: 30, percentage: 73 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="w-full max-w-7xl mx-auto space-y-4 sm:space-y-6 p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Analytics</h1>
            <p className="text-base sm:text-lg text-gray-600">Track your impact and community engagement metrics</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Button
              variant={timeRange === 'week' ? 'default' : 'outline'}
              onClick={() => setTimeRange('week')}
              className={`w-full sm:w-auto font-medium shadow-sm ${
                timeRange === 'week' 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg' 
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
              }`}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Weekly
            </Button>
            <Button
              variant={timeRange === 'month' ? 'default' : 'outline'}
              onClick={() => setTimeRange('month')}
              className={`w-full sm:w-auto font-medium shadow-sm ${
                timeRange === 'month' 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg' 
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
              }`}
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Monthly
            </Button>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color}`} />
                  <div className={`flex items-center gap-1 text-xs sm:text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.trend === 'up' ? <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" /> : <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4" />}
                    {stat.change}
                  </div>
                </div>
                <h3 className="text-gray-900 text-xl sm:text-2xl font-bold mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Activity Overview */}
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="text-gray-900 text-lg sm:text-xl">Activity Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[280px] sm:h-[300px]">
                <ChartContainer
                  config={{
                    reports: { label: "Reports", color: "#3b82f6" },
                    recycling: { label: "Recycling", color: "#10b981" },
                    resolved: { label: "Resolved", color: "#f59e0b" }
                  }}
                  className="w-full h-full"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={getCurrentData()} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <XAxis dataKey={timeRange === 'week' ? 'week' : 'month'} className="text-gray-600" fontSize={12} />
                      <YAxis className="text-gray-600" fontSize={12} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="reports" fill="#3b82f6" radius={4} />
                      <Bar dataKey="recycling" fill="#10b981" radius={4} />
                      <Bar dataKey="resolved" fill="#f59e0b" radius={4} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>

          {/* Environmental Impact */}
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="text-gray-900 text-lg sm:text-xl">Environmental Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[280px] sm:h-[300px]">
                <ChartContainer
                  config={{
                    carbonSaved: { label: "Carbon Saved (kg)", color: "#10b981" },
                    pointsEarned: { label: "Points Earned", color: "#3b82f6" }
                  }}
                  className="w-full h-full"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={impactData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <XAxis dataKey="date" className="text-gray-600" fontSize={12} />
                      <YAxis className="text-gray-600" fontSize={12} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area 
                        type="monotone" 
                        dataKey="carbonSaved" 
                        stroke="#10b981" 
                        fill="#10b981" 
                        fillOpacity={0.3}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>

          {/* Issue Types Distribution */}
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="text-gray-900 text-lg sm:text-xl">Issue Types Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[280px] sm:h-[300px] flex flex-col">
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
                          data={issueTypeData}
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={100}
                          dataKey="value"
                        >
                          {issueTypeData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
                <div className="mt-4 space-y-2 flex-shrink-0">
                  {issueTypeData.map((type, index) => (
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

          {/* Recycling Breakdown */}
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="text-gray-900 text-lg sm:text-xl">Recycling Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[280px] sm:h-[300px]">
                <ChartContainer
                  config={{
                    recycling: { label: "Recycling", color: "#3b82f6" }
                  }}
                  className="w-full h-full"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={recyclingData} layout="horizontal" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <XAxis type="number" className="text-gray-600" fontSize={12} />
                      <YAxis dataKey="type" type="category" className="text-gray-600" fontSize={12} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="amount" fill="#3b82f6" radius={4} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievement Progress */}
        <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-gray-900 text-lg sm:text-xl">Achievement Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {achievementProgress.map((achievement, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-gray-900 font-semibold text-sm sm:text-base">{achievement.name}</h3>
                    <span className="text-gray-600 text-sm font-medium">
                      {achievement.current}/{achievement.target}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2 shadow-inner">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300 shadow-sm"
                      style={{ width: `${achievement.percentage}%` }}
                    />
                  </div>
                  <p className="text-gray-600 text-sm font-medium">{achievement.percentage}% complete</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Rewards Trend */}
        <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-gray-900 text-lg sm:text-xl">Points & Rewards Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-[280px] sm:h-[300px]">
              <ChartContainer
                config={{
                  rewards: { label: "Points Earned", color: "#f59e0b" }
                }}
                className="w-full h-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={getCurrentData()} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey={timeRange === 'week' ? 'week' : 'month'} className="text-gray-600" fontSize={12} />
                    <YAxis className="text-gray-600" fontSize={12} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line 
                      type="monotone" 
                      dataKey="rewards" 
                      stroke="#f59e0b" 
                      strokeWidth={3}
                      dot={{ fill: "#f59e0b", strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;