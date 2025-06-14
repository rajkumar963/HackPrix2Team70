
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Award, MapPin, Users, Wallet, Plus, ThumbsUp, GitPullRequest, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Dashboard = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(".anim-element", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  const monthlyData = [
    { month: 'Jan', reports: 45, resolved: 30 },
    { month: 'Feb', reports: 52, resolved: 35 },
    { month: 'Mar', reports: 38, resolved: 28 },
    { month: 'Apr', reports: 67, resolved: 56 },
    { month: 'May', reports: 71, resolved: 65 },
    { month: 'Jun', reports: 58, resolved: 48 }
  ];

  const issueTypes = [
    { name: 'Garbage', value: 35, color: '#ef4444' },
    { name: 'Streetlights', value: 25, color: '#f59e0b' },
    { name: 'Potholes', value: 20, color: '#8b5cf6' },
    { name: 'Water', value: 15, color: '#06b6d4' },
    { name: 'Others', value: 5, color: '#10b981' }
  ];

  const recentActivities = [
    { type: 'report', title: 'Reported broken streetlight', location: 'MG Road', time: '2 hours ago', points: 'New' },
    { type: 'comment', title: 'Commented on "Pothole"', location: 'Station Road', time: '4 hours ago', points: '' },
    { type: 'update', title: 'Pothole status updated to "In Progress"', location: 'Station Road', time: '1 day ago', points: 'Update' },
    { type: 'resolved', title: 'Your report "Garbage Overflow" was resolved', location: 'City Mall Area', time: '2 days ago', points: 'Resolved' }
  ];

  const quickActions = [
    { title: 'New Report', icon: Plus, color: 'bg-blue-500', href: '/civic-reporting' },
    { title: 'My Reports', icon: GitPullRequest, color: 'bg-green-500', href: '/dashboard' },
    { title: 'View Map', icon: MapPin, color: 'bg-purple-500', href: '/issue-map' },
    { title: 'Leaderboard', icon: Users, color: 'bg-orange-500', href: '/leaderboard' }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-background to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="w-full space-y-4 sm:space-y-6 p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 anim-element">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-1 sm:mb-2">Dashboard</h1>
            <p className="text-sm sm:text-base text-muted-foreground">Welcome back! Here's your community impact overview.</p>
          </div>
          <div>
            <Button asChild className="w-full sm:w-auto">
              <Link to="/civic-reporting">
                <Plus className="w-4 h-4 mr-2" />
                Quick Report
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 anim-element">
          <Card>
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-muted-foreground text-xs sm:text-sm truncate">Total Reports</p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold">1,247</p>
                  <p className="text-green-600 text-xs sm:text-sm flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    <span className="truncate">+12%</span>
                  </p>
                </div>
                <div className="bg-blue-500 text-white p-2 sm:p-3 rounded-full flex-shrink-0">
                  <GitPullRequest className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-muted-foreground text-xs sm:text-sm truncate">Issues Resolved</p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold">892</p>
                  <p className="text-green-600 text-xs sm:text-sm flex items-center mt-1">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    <span className="truncate">+5 this week</span>
                  </p>
                </div>
                <div className="bg-green-500 text-white p-2 sm:p-3 rounded-full flex-shrink-0">
                  <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-muted-foreground text-xs sm:text-sm truncate">Current Rank</p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold">#15</p>
                  <p className="text-purple-600 text-xs sm:text-sm flex items-center mt-1">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    <span className="truncate">Top 5%</span>
                  </p>
                </div>
                <div className="bg-purple-500 text-white p-2 sm:p-3 rounded-full flex-shrink-0">
                  <Award className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-muted-foreground text-xs sm:text-sm truncate">Upvotes Received</p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold">5,432</p>
                  <p className="text-blue-600 text-xs sm:text-sm flex items-center mt-1">
                    <ThumbsUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    <span className="truncate">+250</span>
                  </p>
                </div>
                <div className="bg-orange-500 text-white p-2 sm:p-3 rounded-full flex-shrink-0">
                   <ThumbsUp className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="anim-element">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-lg sm:text-xl">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-16 sm:h-20 flex flex-col gap-1 sm:gap-2 bg-slate-50 hover:bg-slate-100 p-2 sm:p-4"
                  asChild
                >
                  <Link to={action.href}>
                    <div className={`p-1.5 sm:p-2 rounded-full ${action.color}`}>
                      <action.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="text-foreground text-xs sm:text-sm text-center leading-tight">{action.title}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Charts Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 anim-element">
          {/* Monthly Activity Chart */}
          <Card>
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="text-lg sm:text-xl">Monthly Activity</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ChartContainer
                config={{
                  reports: { label: "Reports", color: "hsl(var(--primary))" },
                  resolved: { label: "Resolved", color: "hsl(var(--secondary))" }
                }}
                className="h-[250px] sm:h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <ChartTooltip cursor={{fill: 'hsl(var(--muted))'}} content={<ChartTooltipContent />} />
                    <Bar dataKey="reports" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="resolved" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Issue Distribution */}
          <Card>
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="text-lg sm:text-xl">Issue Distribution</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ChartContainer
                config={{ issues: { label: "Issues" } }}
                className="h-[250px] sm:h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={issueTypes}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {issueTypes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip cursor={{fill: 'hsl(var(--muted))'}} content={<ChartTooltipContent />} />
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
                      <span className="text-muted-foreground">{type.name}</span>
                    </div>
                    <span className="font-medium">{type.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="anim-element">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-lg sm:text-xl">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3 sm:space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-50 border rounded-lg">
                  <div className={`p-2 rounded-full flex-shrink-0 text-white ${
                    activity.type === 'report' ? 'bg-blue-500' :
                    activity.type === 'comment' ? 'bg-gray-500' :
                    activity.type === 'resolved' ? 'bg-green-500' :
                    'bg-purple-500'
                  }`}>
                    {activity.type === 'report' && <GitPullRequest className="w-3 h-3 sm:w-4 sm:h-4" />}
                    {activity.type === 'comment' && <ThumbsUp className="w-3 h-3 sm:w-4 sm:h-4" />}
                    {activity.type === 'update' && <Wallet className="w-3 h-3 sm:w-4 sm:h-4" />}
                    {activity.type === 'resolved' && <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm sm:text-base truncate">{activity.title}</p>
                    <p className="text-muted-foreground text-xs sm:text-sm truncate">
                      {activity.location} • {activity.time}
                    </p>
                  </div>
                  <div className={`text-xs sm:text-sm font-medium flex-shrink-0 ${
                    activity.type === 'resolved' ? 'text-green-600' : 'text-blue-600'
                  }`}>
                    {activity.points}
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
