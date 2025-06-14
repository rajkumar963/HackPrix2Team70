
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, CheckCircle, Recycle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ImpactStats = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  const stats = [
    { icon: Users, value: 12500, label: 'Active Citizens', suffix: '+' },
    { icon: CheckCircle, value: 8900, label: 'Issues Resolved', suffix: '+' },
    { icon: Recycle, value: 45, label: 'Tons Recycled', suffix: 'T' },
  ];
  
  useEffect(() => {
    if (!statsRef.current) return;
    gsap.fromTo(statsRef.current, { opacity: 0 }, { opacity: 1, duration: 1, scrollTrigger: { trigger: statsRef.current, start: 'top 80%' }});

    countersRef.current.forEach((counter, index) => {
      if (!counter) return;
      const target = stats[index].value;
      gsap.from(counter, {
        textContent: 0,
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: counter,
          start: 'top 90%',
        },
        onUpdate: function() {
          // @ts-ignore
          this.targets()[0].innerHTML = Math.ceil(this.targets()[0].textContent);
        },
        onComplete: () => {
          counter.textContent = target.toLocaleString();
        }
      });
    });
  }, []);

  return (
    <div ref={statsRef} className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Our Collective Impact</h2>
          <p className="text-lg text-primary/80 mt-2">Making a tangible difference, together.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card/50 p-8 rounded-xl border border-border">
              <div className="flex justify-center mb-4">
                 <stat.icon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground">
                <span ref={el => countersRef.current[index] = el}>{stat.value}</span>{stat.suffix}
              </h3>
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactStats;
