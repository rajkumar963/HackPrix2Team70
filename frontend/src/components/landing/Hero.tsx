import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const tl = gsap.timeline();
    tl.fromTo('.hero-anim', {
      y: 50,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center text-center overflow-hidden -mt-20 -mx-4 -mb-8">
      {/* Grid Background */}
      <div className="absolute inset-0 [background-size:20px_20px] [background-image:linear-gradient(to_right,rgba(148,163,184,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.4)_1px,transparent_1px)]"></div>
      
      {/* Original background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596432150438-3372e57b4421?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-secondary/60 to-white/10"></div>
      </div>
      
      <div className="relative z-10 p-4">
        <h1 className="hero-anim text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          JanSahay
        </h1>
        <p className="hero-anim text-lg md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto drop-shadow-md">
          Be the change. Report civic issues. Transform your city.
        </p>
        <div className="hero-anim flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform">
            <Link to="/civic-reporting">Report an Issue</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-gray-100 backdrop-blur-sm border-slate-300 text-gray-500 text-lg px-8 py-6 rounded-full hover:bg-white/20 hover:text-white hover:scale-105 transition-all">
            <Link to="/issue-map">View Live Map</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

export { Hero }