
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Gift, Coins, Star, Award } from 'lucide-react';
import { gsap } from 'gsap';

const RecyclingRewards = () => {
  const [activeTab, setActiveTab] = useState('rewards');
  const headerRef = useRef<HTMLDivElement>(null);
  const balanceCardRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const rewardCardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

  // Initial page animations
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Header animation
    tl.fromTo(headerRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    // Balance card animation
    tl.fromTo(balanceCardRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.4"
    );

    // Tab navigation animation
    tl.fromTo(tabsRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
      "-=0.3"
    );

    // Content animation
    tl.fromTo(contentRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.2"
    );
  }, []);

  // Tab change animations
  useEffect(() => {
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
    );
  }, [activeTab]);

  // Reward card hover animations
  const handleCardHover = (index: number, isHovering: boolean) => {
    const card = rewardCardsRef.current[index];
    if (!card) return;

    if (isHovering) {
      gsap.to(card, {
        scale: 1.05,
        y: -10,
        duration: 0.3,
        ease: "power2.out"
      });
    } else {
      gsap.to(card, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 dark:from-blue-900/80 dark:via-background dark:to-green-900/80 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Recycling Rewards</h1>
          <p className="text-muted-foreground">Earn points by recycling and redeem amazing rewards!</p>
        </div>

        {/* Points Balance */}
        <Card ref={balanceCardRef} className="bg-gradient-to-r from-green-600 to-blue-600 border-none">
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
        <div ref={tabsRef} className="flex gap-4 justify-center">
          <Button
            variant={activeTab === 'rewards' ? 'default' : 'outline'}
            onClick={() => setActiveTab('rewards')}
          >
            <Gift className="w-4 h-4 mr-2" />
            Rewards Store
          </Button>
          <Button
            variant={activeTab === 'history' ? 'default' : 'outline'}
            onClick={() => setActiveTab('history')}
          >
            <Award className="w-4 h-4 mr-2" />
            Recycling History
          </Button>
          <Button
            variant={activeTab === 'achievements' ? 'default' : 'outline'}
            onClick={() => setActiveTab('achievements')}
          >
            <Star className="w-4 h-4 mr-2" />
            Achievements
          </Button>
        </div>

        {/* Content */}
        <div ref={contentRef}>
          {/* Rewards Store */}
          {activeTab === 'rewards' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rewards.map((reward, index) => (
                <Card 
                  key={reward.id} 
                  ref={(el) => rewardCardsRef.current[index] = el}
                  className="bg-card/80 border-border backdrop-blur-sm cursor-pointer"
                  onMouseEnter={() => handleCardHover(index, true)}
                  onMouseLeave={() => handleCardHover(index, false)}
                >
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-4xl mb-4">{reward.image}</div>
                      <h3 className="text-card-foreground font-semibold text-lg mb-2">{reward.title}</h3>
                      <Badge variant="secondary" className="mb-4">
                        {reward.category}
                      </Badge>
                      <div className="space-y-3">
                        <p className="text-2xl font-bold text-primary">{reward.value}</p>
                        <p className="text-muted-foreground">Cost: {reward.points} points</p>
                        <Button 
                          className="w-full"
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
            <Card className="bg-card/80 border-border backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-card-foreground">Your Recycling History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recyclingHistory.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <p className="text-foreground font-medium">{item.items}</p>
                        <p className="text-muted-foreground text-sm">{item.date}</p>
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
                  className={`border-border backdrop-blur-sm ${
                    achievement.earned 
                      ? 'bg-gradient-to-br from-yellow-600/20 to-orange-600/20 border-yellow-500/30' 
                      : 'bg-card/80'
                  }`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{achievement.icon}</div>
                    <h3 className={`font-semibold text-lg mb-2 ${
                      achievement.earned ? 'text-yellow-400' : 'text-foreground'
                    }`}>
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{achievement.description}</p>
                    <Badge 
                      variant={achievement.earned ? 'default' : 'secondary'}
                      className={achievement.earned ? 'bg-yellow-600' : ''}
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
    </div>
  );
};

export default RecyclingRewards;
