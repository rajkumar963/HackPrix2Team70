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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="w-full max-w-7xl mx-auto space-y-4 sm:space-y-6 p-4 sm:p-6">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Recycling Rewards</h1>
          <p className="text-base sm:text-lg text-gray-600">Earn points by recycling and redeem amazing rewards!</p>
        </div>

        {/* Points Balance */}
        <Card className="bg-gradient-to-r from-green-500 to-blue-600 border-none shadow-xl">
          <CardContent className="p-6 sm:p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Coins className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">2,450 Points</h2>
            </div>
            <p className="text-green-100 mb-4 sm:mb-6 text-sm sm:text-base">Available Balance</p>
            <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-white">892</p>
                <p className="text-green-100 text-xs sm:text-sm">Items Recycled</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-white">₹1,200</p>
                <p className="text-green-100 text-xs sm:text-sm">Rewards Earned</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-white">15</p>
                <p className="text-green-100 text-xs sm:text-sm">This Month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
          <Button
            variant={activeTab === 'rewards' ? 'default' : 'outline'}
            onClick={() => setActiveTab('rewards')}
            className={`w-full sm:w-auto ${
              activeTab === 'rewards' 
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg' 
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 shadow-sm'
            }`}
          >
            <Gift className="w-4 h-4 mr-2" />
            Rewards Store
          </Button>
          <Button
            variant={activeTab === 'history' ? 'default' : 'outline'}
            onClick={() => setActiveTab('history')}
            className={`w-full sm:w-auto ${
              activeTab === 'history' 
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg' 
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 shadow-sm'
            }`}
          >
            <Award className="w-4 h-4 mr-2" />
            Recycling History
          </Button>
          <Button
            variant={activeTab === 'achievements' ? 'default' : 'outline'}
            onClick={() => setActiveTab('achievements')}
            className={`w-full sm:w-auto ${
              activeTab === 'achievements' 
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg' 
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 shadow-sm'
            }`}
          >
            <Star className="w-4 h-4 mr-2" />
            Achievements
          </Button>
        </div>

        {/* Rewards Store */}
        {activeTab === 'rewards' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {rewards.map((reward) => (
              <Card key={reward.id} className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl mb-4">{reward.image}</div>
                    <h3 className="text-gray-900 font-semibold text-lg mb-2">{reward.title}</h3>
                    <Badge 
                      variant="secondary" 
                      className="mb-4 bg-blue-100 text-blue-800 border-blue-200 font-medium"
                    >
                      {reward.category}
                    </Badge>
                    <div className="space-y-3">
                      <p className="text-xl sm:text-2xl font-bold text-green-600">{reward.value}</p>
                      <p className="text-gray-600 font-medium">Cost: {reward.points} points</p>
                      <Button 
                        className={`w-full font-semibold shadow-md ${
                          reward.available 
                            ? 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white' 
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-300'
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
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="text-gray-900 text-lg sm:text-xl">Your Recycling History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4">
                {recyclingHistory.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
                    <div className="mb-2 sm:mb-0">
                      <p className="text-gray-900 font-medium text-sm sm:text-base">{item.items}</p>
                      <p className="text-gray-600 text-xs sm:text-sm">{item.date}</p>
                    </div>
                    <div className="flex items-center justify-between sm:text-right sm:block">
                      <p className="text-green-600 font-bold text-sm sm:text-base">+{item.points} pts</p>
                      <Badge 
                        variant={item.status === 'Verified' ? 'default' : 'secondary'}
                        className={`ml-2 sm:ml-0 sm:mt-1 font-medium ${
                          item.status === 'Verified' 
                            ? 'bg-green-600 text-white hover:bg-green-700' 
                            : 'bg-yellow-500 text-white hover:bg-yellow-600'
                        }`}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className={`border-gray-200 shadow-lg hover:shadow-xl transition-all ${
                  achievement.earned 
                    ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200' 
                    : 'bg-white'
                }`}
              >
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="text-3xl sm:text-4xl mb-4">{achievement.icon}</div>
                  <h3 className={`font-semibold text-lg mb-2 ${
                    achievement.earned ? 'text-yellow-700' : 'text-gray-900'
                  }`}>
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">{achievement.description}</p>
                  <Badge 
                    variant={achievement.earned ? 'default' : 'secondary'}
                    className={`font-medium ${
                      achievement.earned 
                        ? 'bg-yellow-500 text-white hover:bg-yellow-600' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
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