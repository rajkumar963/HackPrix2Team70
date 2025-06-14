
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggle }) => {
  const location = useLocation();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const navigationItems = [
    { icon: '📊', label: 'Dashboard', path: '/dashboard' },
    { icon: '📋', label: 'Civic Reporting', path: '/civic-reporting' },
    { icon: '🎁', label: 'Recycling Rewards', path: '/recycling-rewards' },
    { icon: '🗺️', label: 'Issue Map', path: '/issue-map' },
    { icon: '🏆', label: 'Leaderboard', path: '/leaderboard' },
    { icon: '💰', label: 'Wallet Integration', path: '/wallet-integration' },
    { icon: '👤', label: 'Profile', path: '/profile' },
    { icon: '🔔', label: 'Notifications', path: '/notifications' },
    { icon: '📈', label: 'Analytics', path: '/analytics' },
  ];

  // Initial entrance animations
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animate sidebar entrance
    tl.fromTo(sidebarRef.current, 
      { x: -100, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    // Animate header
    tl.fromTo(headerRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    );

    // Animate navigation items with stagger
    tl.fromTo(navItemsRef.current,
      { x: -50, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 0.5, 
        stagger: 0.1, 
        ease: "power2.out" 
      },
      "-=0.3"
    );

    // Animate profile section
    tl.fromTo(profileRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.2"
    );

    // Animate toggle button
    tl.fromTo(toggleButtonRef.current,
      { scale: 0, rotation: 180 },
      { 
        scale: 1, 
        rotation: 0, 
        duration: 0.5, 
        ease: "back.out(1.7)" 
      },
      "-=0.3"
    );
  }, []);

  // Collapse/Expand animations
  useEffect(() => {
    const tl = gsap.timeline();
    
    if (isCollapsed) {
      // Collapse animation
      tl.to(sidebarRef.current, {
        width: "4rem",
        duration: 0.3,
        ease: "power2.inOut"
      });
      
      // Fade out labels
      tl.to(".nav-label", {
        opacity: 0,
        x: -20,
        duration: 0.2,
        stagger: 0.05
      }, 0);
      
      // Scale icons
      tl.to(".nav-icon", {
        scale: 1.2,
        duration: 0.3,
        ease: "power2.out"
      }, 0.1);
    } else {
      // Expand animation
      tl.to(sidebarRef.current, {
        width: "16rem",
        duration: 0.3,
        ease: "power2.inOut"
      });
      
      // Fade in labels
      tl.fromTo(".nav-label", {
        opacity: 0,
        x: -20
      }, {
        opacity: 1,
        x: 0,
        duration: 0.3,
        stagger: 0.05
      }, 0.2);
      
      // Reset icon scale
      tl.to(".nav-icon", {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      }, 0);
    }
  }, [isCollapsed]);

  // Hover animations for navigation items
  const handleNavItemHover = (index: number, isHovering: boolean) => {
    const item = navItemsRef.current[index];
    if (!item) return;

    if (isHovering) {
      gsap.to(item, {
        scale: 1.05,
        x: 5,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(item.querySelector('.nav-icon'), {
        rotate: 10,
        scale: 1.2,
        duration: 0.3,
        ease: "power2.out"
      });
    } else {
      gsap.to(item, {
        scale: 1,
        x: 0,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(item.querySelector('.nav-icon'), {
        rotate: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  // Active item animation
  useEffect(() => {
    navItemsRef.current.forEach((item, index) => {
      if (item && location.pathname === navigationItems[index].path) {
        gsap.to(item, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        });
        
        gsap.to(item.querySelector('.nav-icon'), {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });
  }, [location.pathname]);

  return (
    <div 
      ref={sidebarRef}
      className={cn(
        "h-screen bg-gradient-to-b from-slate-800 via-purple-900 to-indigo-900 text-white transition-all duration-300 flex flex-col relative",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div ref={headerRef} className="p-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
            ⚡
          </div>
          {!isCollapsed && (
            <div>
              <h1 className="font-bold text-lg">JanSahay</h1>
              <p className="text-sm text-white/70">RecycleFusion</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-3 space-y-2">
        {navigationItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={index}
              ref={(el) => navItemsRef.current[index] = el}
              to={item.path}
              className={cn(
                "w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-white/10",
                isActive ? "bg-purple-600/50 border border-purple-400/30" : "",
                isCollapsed ? "justify-center" : ""
              )}
              onMouseEnter={() => handleNavItemHover(index, true)}
              onMouseLeave={() => handleNavItemHover(index, false)}
            >
              <span className="text-lg nav-icon">{item.icon}</span>
              {!isCollapsed && (
                <span className="font-medium text-white/90 nav-label">{item.label}</span>
              )}
            </Link>
          );
        })}
      </div>

      {/* User Profile */}
      <div ref={profileRef} className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-sm font-bold">JD</span>
          </div>
          {!isCollapsed && (
            <div className="flex-1">
              <p className="font-medium text-sm">John Doe</p>
              <p className="text-xs text-white/60">john@example.com</p>
            </div>
          )}
          {!isCollapsed && (
            <button className="p-1 hover:bg-white/10 rounded">
              <span className="text-white/60">⚙️</span>
            </button>
          )}
        </div>
      </div>

      {/* Toggle Button */}
      <button
        ref={toggleButtonRef}
        onClick={onToggle}
        className="absolute -right-3 top-8 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center border-2 border-slate-800 hover:bg-purple-700 transition-colors"
        onMouseEnter={() => {
          gsap.to(toggleButtonRef.current, {
            scale: 1.1,
            duration: 0.2,
            ease: "power2.out"
          });
        }}
        onMouseLeave={() => {
          gsap.to(toggleButtonRef.current, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out"
          });
        }}
      >
        {isCollapsed ? (
          <ChevronRight className="w-3 h-3" />
        ) : (
          <ChevronLeft className="w-3 h-3" />
        )}
      </button>
    </div>
  );
};

export default Sidebar;
