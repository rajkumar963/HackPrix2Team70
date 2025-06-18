
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
      color: 'text-blue-400'
    },
    {
      title: 'Issues Resolved',
      value: '89',
      change: '+8.2%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-green-400'
    },
    {
      title: 'Carbon Footprint Saved',
      value: '156.8 kg',
      change: '+15.3%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-purple-400'
    },
    {
      title: 'Community Ranking',
      value: '#15',
      change: '+3 positions',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-orange-400'
    }
  ];

  const achievementProgress = [
    { name: 'Eco Warrior', current: 89, target: 100, percentage: 89 },
    { name: 'Recycling Master', current: 156, target: 200, percentage: 78 },
    { name: 'Community Hero', current: 45, target: 50, percentage: 90 },
    { name: 'Streak Champion', current: 22, target: 30, percentage: 73 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Analytics</h1>
            <p className="text-muted-foreground">Track your impact and community engagement through metrics</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Button
              variant={timeRange === 'week' ? 'default' : 'outline'}
              onClick={() => setTimeRange('week')}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Weekly
            </Button>
            <Button
              variant={timeRange === 'month' ? 'default' : 'outline'}
              onClick={() => setTimeRange('month')}
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Monthly
            </Button>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card/50 border-border backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  <div className={`flex items-center gap-1 text-sm ${
                    stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {stat.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    {stat.change}
                  </div>
                </div>
                <h3 className="text-foreground text-2xl font-bold mb-1">{stat.value}</h3>
                <p className="text-muted-foreground text-sm">{stat.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Activity Overview */}
          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Activity Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  reports: { label: "Reports", color: "hsl(var(--primary))" },
                  recycling: { label: "Recycling", color: "hsl(var(--secondary))" },
                  resolved: { label: "Resolved", color: "hsl(var(--accent))" }
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={getCurrentData()}>
                    <XAxis dataKey={timeRange === 'week' ? 'week' : 'month'} stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                    <ChartTooltip cursor={{ fill: 'hsl(var(--card))' }} content={<ChartTooltipContent indicator="dot" />} />
                    <Bar dataKey="reports" fill="hsl(var(--primary))" radius={4} />
                    <Bar dataKey="recycling" fill="hsl(var(--secondary))" radius={4} />
                    <Bar dataKey="resolved" fill="hsl(var(--accent))" radius={4} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Environmental Impact */}
          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Environmental Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  carbonSaved: { label: "Carbon Saved (kg)", color: "hsl(var(--secondary))" },
                  pointsEarned: { label: "Points Earned", color: "hsl(var(--primary))" }
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={impactData}>
                    <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                    <ChartTooltip cursor={{ fill: 'hsl(var(--card))' }} content={<ChartTooltipContent />} />
                    <Area 
                      type="monotone" 
                      dataKey="carbonSaved" 
                      stroke="hsl(var(--secondary))" 
                      fill="hsl(var(--secondary))" 
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Issue Types Distribution */}
          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Issue Types Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  issues: { label: "Issues" }
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={issueTypeData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      dataKey="value"
                      labelLine={false}
                    >
                      {issueTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip cursor={{ fill: 'hsl(var(--card))' }} content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="mt-4 space-y-2">
                {issueTypeData.map((type, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: type.color }}
                      />
                      <span className="text-muted-foreground">{type.name}</span>
                    </div>
                    <span className="text-foreground font-medium">{type.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recycling Breakdown */}
          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Recycling Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  recycling: { label: "Recycling" }
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={recyclingData} layout="vertical">
                    <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis dataKey="type" type="category" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} width={80} />
                    <ChartTooltip cursor={{ fill: 'hsl(var(--card))' }} content={<ChartTooltipContent />} />
                    <Bar dataKey="amount" fill="hsl(var(--primary))" radius={4} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Achievement Progress */}
        <Card className="bg-card/50 border-border backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Achievement Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievementProgress.map((achievement, index) => (
                <div key={index} className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-foreground font-semibold">{achievement.name}</h3>
                    <span className="text-muted-foreground text-sm">
                      {achievement.current}/{achievement.target}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${achievement.percentage}%` }}
                    />
                  </div>
                  <p className="text-muted-foreground text-sm">{achievement.percentage}% complete</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Rewards Trend */}
        <Card className="bg-card/50 border-border backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Points & Rewards Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                rewards: { label: "Points Earned", color: "hsl(var(--accent))" }
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={getCurrentData()}>
                  <XAxis dataKey={timeRange === 'week' ? 'week' : 'month'} stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                  <ChartTooltip cursor={{ fill: 'hsl(var(--card))' }} content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="rewards" 
                    stroke="hsl(var(--accent))" 
                    strokeWidth={2}
                    dot={{ r: 4, fill: "hsl(var(--accent))", stroke: "hsl(var(--background))" }}
                    activeDot={{ r: 6, stroke: "hsl(var(--background))" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
