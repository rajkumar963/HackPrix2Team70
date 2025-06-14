
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Gift, Coins, Star, ShoppingBag, Coffee, Fuel, Award } from 'lucide-react';

const RecyclingRewards = () => {
  const [activeTab, setActiveTab] = useState('rewards');

  const rewards = [
    { id: 1, title: 'Shopping Voucher', value: '₹500', points: 500, image: '🛍️', category: 'Shopping', available: true },
    { id: 2, title: 'Coffee Shop Credit', value: '₹200', points: 200, image: '☕', category: 'Food', available: true },
    { id: 3, title: 'Fuel Discount', value: '₹300', points: 300, image: '⛽', category: 'Transport', available: true },
    { id: 4, title: 'Movie Tickets', value: '₹600', points: 600, image: '🎬', category: 'Entertainment', available: false },
    { id: 5, title: 'Restaurant Voucher', value: '₹800', points: 800, image: '🍽️', category: 'Food', available: true },
    { id: 6, title: 'Electronics Store', value: '₹1000', points: 1000, image: '📱', category: 'Electronics', available: true }
  ];

  const recyclingHistory = [
    { date: '2024-01-15', items: 'Plastic Bottles (15)', points: 45, status: 'Verified' },
    { date: '2024-01-12', items: 'Newspapers (5kg)', points: 25, status: 'Verified' },
    { date: '2024-01-10', items: 'Electronics (2 items)', points: 100, status: 'Pending' },
    { date: '2024-01-08', items: 'Glass Bottles (8)', points: 32, status: 'Verified' },
    { date: '2024-01-05', items: 'Cardboard (3kg)', points: 18, status: 'Verified' }
  ];

  const achievements = [
    { title: 'Eco Warrior', description: 'Recycled 100 items', icon: '🌟', earned: true },
    { title: 'Plastic Fighter', description: 'Recycled 50 plastic items', icon: '♻️', earned: true },
    { title: 'Paper Saver', description: 'Recycled 25kg of paper', icon: '📄', earned: false },
    { title: 'Glass Master', description: 'Recycled 100 glass items', icon: '🥤', earned: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Recycling Rewards</h1>
          <p className="text-purple-200">Earn points by recycling and redeem amazing rewards!</p>
        </div>

        {/* Points Balance */}
        <Card className="bg-gradient-to-r from-green-600 to-blue-600 border-none">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Coins className="w-8 h-8 text-yellow-300" />
              <h2 className="text-3xl font-bold text-white">2,450 Points</h2>
            </div>
            <p className="text-green-100 mb-4">Available Balance</p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-white">892</p>
                <p className="text-green-100 text-sm">Items Recycled</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">₹1,200</p>
                <p className="text-green-100 text-sm">Rewards Earned</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">15</p>
                <p className="text-green-100 text-sm">This Month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tab Navigation */}
        <div className="flex gap-4 justify-center">
          <Button
            variant={activeTab === 'rewards' ? 'default' : 'outline'}
            onClick={() => setActiveTab('rewards')}
            className={activeTab === 'rewards' ? 'bg-blue-600' : 'bg-gray-700 border-gray-600 text-gray-300'}
          >
            <Gift className="w-4 h-4 mr-2" />
            Rewards Store
          </Button>
          <Button
            variant={activeTab === 'history' ? 'default' : 'outline'}
            onClick={() => setActiveTab('history')}
            className={activeTab === 'history' ? 'bg-blue-600' : 'bg-gray-700 border-gray-600 text-gray-300'}
          >
            <Award className="w-4 h-4 mr-2" />
            Recycling History
          </Button>
          <Button
            variant={activeTab === 'achievements' ? 'default' : 'outline'}
            onClick={() => setActiveTab('achievements')}
            className={activeTab === 'achievements' ? 'bg-blue-600' : 'bg-gray-700 border-gray-600 text-gray-300'}
          >
            <Star className="w-4 h-4 mr-2" />
            Achievements
          </Button>
        </div>

        {/* Rewards Store */}
        {activeTab === 'rewards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rewards.map((reward) => (
              <Card key={reward.id} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{reward.image}</div>
                    <h3 className="text-white font-semibold text-lg mb-2">{reward.title}</h3>
                    <Badge variant="secondary" className="mb-4 bg-purple-600 text-white">
                      {reward.category}
                    </Badge>
                    <div className="space-y-3">
                      <p className="text-2xl font-bold text-green-400">{reward.value}</p>
                      <p className="text-gray-400">Cost: {reward.points} points</p>
                      <Button 
                        className={`w-full ${
                          reward.available 
                            ? 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700' 
                            : 'bg-gray-600 cursor-not-allowed'
                        }`}
                        disabled={!reward.available}
                      >
                        {reward.available ? 'Redeem Now' : 'Out of Stock'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Recycling History */}
        {activeTab === 'history' && (
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Your Recycling History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recyclingHistory.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                    <div>
                      <p className="text-white font-medium">{item.items}</p>
                      <p className="text-gray-400 text-sm">{item.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-400 font-bold">+{item.points} pts</p>
                      <Badge 
                        variant={item.status === 'Verified' ? 'default' : 'secondary'}
                        className={item.status === 'Verified' ? 'bg-green-600' : 'bg-yellow-600'}
                      >
                        {item.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Achievements */}
        {activeTab === 'achievements' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className={`border-gray-700 backdrop-blur-sm ${
                  achievement.earned 
                    ? 'bg-gradient-to-br from-yellow-600/20 to-orange-600/20 border-yellow-500/30' 
                    : 'bg-gray-800/50'
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h3 className={`font-semibold text-lg mb-2 ${
                    achievement.earned ? 'text-yellow-400' : 'text-white'
                  }`}>
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{achievement.description}</p>
                  <Badge 
                    variant={achievement.earned ? 'default' : 'secondary'}
                    className={achievement.earned ? 'bg-yellow-600' : 'bg-gray-600'}
                  >
                    {achievement.earned ? 'Earned' : 'Locked'}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecyclingRewards;
