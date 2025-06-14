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
      case 1: return <Trophy className="w-6 h-6 text-yellow-400" />;
      case 2: return <Medal className="w-6 h-6 text-gray-400" />;
      case 3: return <Award className="w-6 h-6 text-amber-600" />;
      default: return <span className="text-gray-400 font-bold text-lg">#{rank}</span>;
    }
  };

  const getRankBg = (rank: number) => {
    switch (rank) {
      case 1: return 'bg-gradient-to-r from-yellow-600 to-yellow-700 border-yellow-500 text-white';
      case 2: return 'bg-gradient-to-r from-slate-500 to-slate-600 border-slate-400 text-white';
      case 3: return 'bg-gradient-to-r from-amber-600 to-amber-700 border-amber-500 text-white';
      default: return 'bg-card/50 border-border';
    }
  };

  const userRank = 15; // Current user's rank

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-2">Leaderboard</h1>
          <p className="text-muted-foreground">Compete with other community members and climb the ranks!</p>
        </div>

        {/* User's Current Position */}
        <Card className="bg-gradient-to-r from-primary to-secondary border-none text-primary-foreground">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarFallback className="bg-primary-foreground text-primary text-xl font-bold">JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold">Your Current Position</h3>
                  <p className="text-primary-foreground/80">Keep climbing to reach the top!</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl font-bold">#{userRank}</span>
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <p className="text-primary-foreground/80">2,450 points</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4">
          <Button
            variant={activeTab === 'overall' ? 'default' : 'outline'}
            onClick={() => setActiveTab('overall')}
          >
            <Trophy className="w-4 h-4 mr-2" />
            Overall
          </Button>
          <Button
            variant={activeTab === 'monthly' ? 'default' : 'outline'}
            onClick={() => setActiveTab('monthly')}
          >
            <Star className="w-4 h-4 mr-2" />
            This Month
          </Button>
          <Button
            variant={activeTab === 'weekly' ? 'default' : 'outline'}
            onClick={() => setActiveTab('weekly')}
          >
            <Users className="w-4 h-4 mr-2" />
            This Week
          </Button>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {getCurrentData().slice(0, 3).map((leader) => (
            <Card key={leader.rank} className={`${getRankBg(leader.rank)} backdrop-blur-sm`}>
              <CardContent className="p-6 text-center">
                <div className="mb-4">{getRankIcon(leader.rank)}</div>
                <Avatar className="w-16 h-16 mx-auto mb-4">
                  <AvatarFallback className="bg-background/20 text-lg font-bold">
                    {leader.avatar}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-bold text-lg mb-1">{leader.name}</h3>
                <Badge className="mb-3 bg-white/20">{leader.badge}</Badge>
                <div className="space-y-2 text-sm">
                  <p className="font-bold text-xl">{leader.points} pts</p>
                  <div className="grid grid-cols-2 gap-2 text-white/80">
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
        <Card className="bg-card/50 border-border backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Complete Rankings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {getCurrentData().map((leader) => (
                <div 
                  key={leader.rank}
                  className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${
                    leader.rank === userRank 
                      ? 'bg-primary/10 border border-primary/20' 
                      : 'bg-muted/30 hover:bg-muted/50'
                  }`}
                >
                  <div className="flex items-center justify-center w-12">
                    {getRankIcon(leader.rank)}
                  </div>
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-primary-foreground font-bold">
                      {leader.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-foreground font-semibold">{leader.name}</h3>
                      {leader.rank === userRank && (
                        <Badge className="bg-primary text-primary-foreground text-xs">You</Badge>
                      )}
                    </div>
                    <Badge variant="secondary">
                      {leader.badge}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-center text-sm">
                    <div>
                      <p className="text-foreground font-bold">{leader.points}</p>
                      <p className="text-muted-foreground text-xs">Points</p>
                    </div>
                    <div>
                      <p className="text-foreground font-bold">{leader.reports}</p>
                      <p className="text-muted-foreground text-xs">Reports</p>
                    </div>
                    <div>
                      <p className="text-foreground font-bold">{leader.recycled}</p>
                      <p className="text-muted-foreground text-xs">Recycled</p>
                    </div>
                    <div>
                      <p className="text-foreground font-bold">{leader.streak}</p>
                      <p className="text-muted-foreground text-xs">Streak</p>
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
