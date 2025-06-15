import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import LoginModal from './auth/LoginModal';
import { useAuth } from '@/context/AuthContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    gsap.fromTo('.header-anim', { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power2.out', stagger: 0.1 });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'Report Issue', href: '/civic-reporting' },
    { title: 'Live Map', href: '/issue-map' },
    { title: 'Leaderboard', href: '/leaderboard' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-lg border-b" : "bg-background/50 backdrop-blur-sm"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2 header-anim">
            <img src='https://res.cloudinary.com/dsdcta1sr/image/upload/v1749967567/android-chrome-192x192_b3owbf.png' className="text-blue-600 w-8 h-8" />            <span className="text-2xl font-bold text-foreground">JanSahay</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <Link key={index} to={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-200 header-anim font-medium">
                {link.title}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2 header-anim">
            {user ? (
              <>
                <Button asChild>
                  <Link to="/dashboard">Go to Dashboard</Link>
                </Button>
                <Button asChild>
                  <Link to="/profile">
                    Profile
                  </Link>
                </Button>
                <Button variant="outline" onClick={logout}>Logout</Button>
              </>
            ) : (
              <>
                <LoginModal role="user">
                  <Button variant="outline">User Login</Button>
                </LoginModal>
                <LoginModal role="admin">
                  <Button variant="outline">Admin Login</Button>
                </LoginModal>
              </>
            )}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden bg-background/95 backdrop-blur-xl",
        isOpen ? "block" : "hidden"
      )}>
        <nav className="flex flex-col items-center space-y-6 py-8 px-4">
          {navLinks.map((link, index) => (
            <Link key={index} to={link.href} onClick={() => setIsOpen(false)} className="text-xl text-foreground hover:text-primary transition-colors duration-200">
              {link.title}
            </Link>
          ))}
          <div className="w-full pt-6 mt-6 border-t border-border/20 flex flex-col gap-4">
            {user ? (
              <>
                <Button asChild size="lg" className="w-full">
                  <Link to="/dashboard" onClick={() => setIsOpen(false)}>Go to Dashboard</Link>
                </Button>
                <Button asChild size="lg" className="w-full">
                  <Link to="/profile" onClick={() => setIsOpen(false)}>
                    Profile
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full" onClick={() => { logout(); setIsOpen(false); }}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <LoginModal role="user">
                  <Button variant="outline" size="lg" className="w-full" onClick={() => setIsOpen(false)}>User Login</Button>
                </LoginModal>
                <LoginModal role="admin">
                  <Button variant="outline" size="lg" className="w-full" onClick={() => setIsOpen(false)}>Admin Login</Button>
                </LoginModal>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
