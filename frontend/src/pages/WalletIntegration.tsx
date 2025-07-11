
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Wallet, CreditCard, ArrowUpRight, ArrowDownLeft, Plus, Minus, History, QrCode } from 'lucide-react';
import { gsap } from 'gsap';

const WalletIntegration = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const headerRef = useRef<HTMLDivElement>(null);
  const walletCardRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const quickActionsRef = useRef<HTMLDivElement>(null);
  const transactionCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const transactions = [
    { id: 1, type: 'earned', amount: 45, description: 'Recycled plastic bottles', date: '2024-01-15', time: '14:30' },
    { id: 2, type: 'redeemed', amount: -500, description: 'Shopping voucher redemption', date: '2024-01-14', time: '11:20' },
    { id: 3, type: 'earned', amount: 25, description: 'Reported streetlight issue', date: '2024-01-12', time: '09:15' },
    { id: 4, type: 'earned', amount: 100, description: 'Electronic waste recycling', date: '2024-01-10', time: '16:45' },
    { id: 5, type: 'redeemed', amount: -200, description: 'Coffee shop credit', date: '2024-01-09', time: '12:30' },
    { id: 6, type: 'earned', amount: 32, description: 'Glass bottles recycling', date: '2024-01-08', time: '10:20' }
  ];

  const walletMethods = [
    { id: 1, type: 'UPI', name: 'PhonePe', number: '****1234', primary: true },
    { id: 2, type: 'Bank', name: 'HDFC Bank', number: '****5678', primary: false },
    { id: 3, type: 'UPI', name: 'Google Pay', number: '****9012', primary: false }
  ];

  const rewardCategories = [
    { name: 'Shopping', earned: 1200, redeemed: 800, balance: 400, color: 'bg-blue-500' },
    { name: 'Food & Dining', earned: 800, redeemed: 600, balance: 200, color: 'bg-green-500' },
    { name: 'Transportation', earned: 600, redeemed: 300, balance: 300, color: 'bg-purple-500' },
    { name: 'Entertainment', earned: 400, redeemed: 400, balance: 0, color: 'bg-orange-500' }
  ];

  // Initial page animations
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Header animation
    tl.fromTo(headerRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    // Wallet balance card animation
    tl.fromTo(walletCardRef.current,
      { scale: 0.9, opacity: 0 },
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

  // Transaction card hover animation
  const handleTransactionHover = (index: number, isHovering: boolean) => {
    const card = transactionCardsRef.current[index];
    if (!card) return;

    if (isHovering) {
      gsap.to(card, {
        x: 5,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out"
      });
    } else {
      gsap.to(card, {
        x: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  // Quick action button hover animation
  const handleQuickActionHover = (element: HTMLElement, isHovering: boolean) => {
    if (isHovering) {
      gsap.to(element, {
        scale: 1.05,
        duration: 0.2,
        ease: "power2.out"
      });
    } else {
      gsap.to(element, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 dark:from-blue-900/80 dark:via-background dark:to-green-900/80 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div ref={headerRef} className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-2">Wallet Integration</h1>
          <p className="text-muted-foreground">Manage your rewards and transactions seamlessly</p>
        </div>

        {/* Wallet Balance Card */}
        <Card ref={walletCardRef} className="bg-gradient-to-r from-green-600 to-blue-600 border-none">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Wallet className="w-8 h-8 text-white" />
                <h2 className="text-white text-2xl font-bold">JanSahay Wallet</h2>
              </div>
              <Badge className="bg-white/20 text-white">Verified</Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-green-100 mb-2">Available Balance</p>
                <p className="text-4xl font-bold text-white">₹2,450</p>
                <p className="text-green-100 text-sm">2,450 points</p>
              </div>
              <div className="text-center">
                <p className="text-green-100 mb-2">Total Earned</p>
                <p className="text-2xl font-bold text-white">₹5,670</p>
                <p className="text-green-100 text-sm">Lifetime earnings</p>
              </div>
              <div className="text-center">
                <p className="text-green-100 mb-2">Total Redeemed</p>
                <p className="text-2xl font-bold text-white">₹3,220</p>
                <p className="text-green-100 text-sm">Lifetime redemptions</p>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <Button className="flex-1 bg-white/20 hover:bg-white/30 text-white border border-white/30">
                <Plus className="w-4 h-4 mr-2" />
                Add Money
              </Button>
              <Button className="flex-1 bg-white/20 hover:bg-white/30 text-white border border-white/30">
                <Minus className="w-4 h-4 mr-2" />
                Withdraw
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tab Navigation */}
        <div ref={tabsRef} className="flex justify-center gap-4">
          <Button
            variant={activeTab === 'overview' ? 'default' : 'outline'}
            onClick={() => setActiveTab('overview')}
          >
            <Wallet className="w-4 h-4 mr-2" />
            Overview
          </Button>
          <Button
            variant={activeTab === 'transactions' ? 'default' : 'outline'}
            onClick={() => setActiveTab('transactions')}
          >
            <History className="w-4 h-4 mr-2" />
            Transactions
          </Button>
          <Button
            variant={activeTab === 'methods' ? 'default' : 'outline'}
            onClick={() => setActiveTab('methods')}
          >
            <CreditCard className="w-4 h-4 mr-2" />
            Payment Methods
          </Button>
        </div>

        {/* Content */}
        <div ref={contentRef}>
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Quick Actions */}
              <Card ref={quickActionsRef} className="bg-card/80 border-border backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-card-foreground">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full justify-start bg-green-600 hover:bg-green-700 text-white"
                    onMouseEnter={(e) => handleQuickActionHover(e.currentTarget, true)}
                    onMouseLeave={(e) => handleQuickActionHover(e.currentTarget, false)}
                  >
                    <QrCode className="w-4 h-4 mr-3" />
                    Scan QR to Pay
                  </Button>
                  <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700 text-white">
                    <ArrowUpRight className="w-4 h-4 mr-3" />
                    Send Money
                  </Button>
                  <Button className="w-full justify-start bg-purple-600 hover:bg-purple-700 text-white">
                    <ArrowDownLeft className="w-4 h-4 mr-3" />
                    Request Money
                  </Button>
                  <Button className="w-full justify-start bg-orange-600 hover:bg-orange-700 text-white">
                    <Plus className="w-4 h-4 mr-3" />
                    Redeem Rewards
                  </Button>
                </CardContent>
              </Card>

              {/* Reward Categories */}
              <Card className="bg-card/80 border-border backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-card-foreground">Reward Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {rewardCategories.map((category, index) => (
                    <div key={index} className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full ${category.color}`}></div>
                          <span className="text-foreground font-medium">{category.name}</span>
                        </div>
                        <span className="text-green-400 font-bold">₹{category.balance}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                        <div>Earned: ₹{category.earned}</div>
                        <div>Redeemed: ₹{category.redeemed}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          )}

          {/* Transactions Tab */}
          {activeTab === 'transactions' && (
            <Card className="bg-card/80 border-border backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-card-foreground">Transaction History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((transaction, index) => (
                    <div 
                      key={transaction.id} 
                      ref={(el) => transactionCardsRef.current[index] = el}
                      className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg cursor-pointer"
                      onMouseEnter={() => handleTransactionHover(index, true)}
                      onMouseLeave={() => handleTransactionHover(index, false)}
                    >
                      <div className={`p-2 rounded-full ${
                        transaction.type === 'earned' ? 'bg-green-500' : 'bg-red-500'
                      }`}>
                        {transaction.type === 'earned' ? (
                          <ArrowDownLeft className="w-4 h-4 text-white" />
                        ) : (
                          <ArrowUpRight className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-foreground font-medium">{transaction.description}</p>
                        <p className="text-muted-foreground text-sm">{transaction.date} at {transaction.time}</p>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold ${
                          transaction.type === 'earned' ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {transaction.amount > 0 ? '+' : ''}₹{Math.abs(transaction.amount)}
                        </p>
                        <Badge 
                          variant={transaction.type === 'earned' ? 'default' : 'secondary'}
                          className={transaction.type === 'earned' ? 'bg-green-600' : 'bg-red-600'}
                        >
                          {transaction.type === 'earned' ? 'Earned' : 'Redeemed'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Payment Methods Tab */}
          {activeTab === 'methods' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-card/80 border-border backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-card-foreground">Linked Payment Methods</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {walletMethods.map((method) => (
                    <div key={method.id} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                      <div className="bg-blue-500 p-2 rounded-full">
                        <CreditCard className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-foreground font-medium">{method.name}</p>
                        <p className="text-muted-foreground text-sm">{method.type} • {method.number}</p>
                      </div>
                      {method.primary && (
                        <Badge className="bg-green-600 text-white">Primary</Badge>
                      )}
                    </div>
                  ))}
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Payment Method
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/80 border-border backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-card-foreground">Wallet Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h3 className="text-foreground font-medium mb-2">Auto-withdrawal</h3>
                    <p className="text-muted-foreground text-sm mb-3">Automatically withdraw rewards when balance reaches ₹1000</p>
                    <Button variant="outline">
                      Configure
                    </Button>
                  </div>
                  
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h3 className="text-foreground font-medium mb-2">Transaction Limits</h3>
                    <p className="text-muted-foreground text-sm mb-3">Daily: ₹5,000 • Monthly: ₹50,000</p>
                    <Button variant="outline">
                      Modify Limits
                    </Button>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <h3 className="text-foreground font-medium mb-2">Security</h3>
                    <p className="text-muted-foreground text-sm mb-3">Enable PIN for transactions above ₹500</p>
                    <Button variant="outline">
                      Security Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WalletIntegration;
