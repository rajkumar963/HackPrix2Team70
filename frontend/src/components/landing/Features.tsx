
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ClipboardList, Recycle, Trophy, Map, Wallet, BarChart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  const featureItems = [
    { icon: ClipboardList, title: 'Civic Reporting', desc: 'Report civic issues in your community and track their resolution.', link: '/civic-reporting' },
    { icon: Recycle, title: 'Recycling Rewards', desc: 'Earn rewards for your recycling activities and environmental contributions.', link: '/recycling-rewards' },
    { icon: Trophy, title: 'Leaderboard', desc: 'Compete with other community members and climb the leaderboard.', link: '/leaderboard' },
    { icon: Map, title: 'Issue Map', desc: 'View and track civic issues on an interactive map.', link: '/issue-map' },
    { icon: Wallet, title: 'Wallet Integration', desc: 'Manage your rewards and transactions seamlessly.', link: '/wallet-integration' },
    { icon: BarChart, title: 'Analytics', desc: 'Track your impact and community engagement metrics.', link: '/analytics' }
  ];

  useEffect(() => {
    if (!featuresRef.current) return;
    gsap.fromTo('.feature-card', {
      y: 50,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: featuresRef.current,
        start: 'top 80%',
      }
    });
  }, []);

  return (
    <div ref={featuresRef} className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">One Platform, Endless Possibilities</h2>
        <p className="text-lg text-primary/80 mt-2">Everything you need to create a better community.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featureItems.map((item, index) => (
          <Link to={item.link} key={index} className="feature-card block">
            <div className="bg-gradient-to-br from-card/60 to-card/20 backdrop-blur-sm border border-border p-8 rounded-2xl h-full hover:border-primary transition-all duration-300">
              <div className="bg-gradient-to-r from-primary to-secondary w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Features;
