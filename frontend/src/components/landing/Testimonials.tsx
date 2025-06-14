
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote: "EcoChain has transformed how our community handles civic issues. It's fast, transparent, and incredibly effective.",
      name: "Anjali Sharma",
      title: "Community Leader, Jaipur",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      quote: "The recycling rewards system is genius! My kids are now excited about recycling, and we're earning rewards for it.",
      name: "Rohan Verma",
      title: "Resident, Pune",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    {
      quote: "Finally, a platform that empowers citizens. Seeing issues get resolved on the map gives me hope for our city.",
      name: "Priya Singh",
      title: "Student, Lucknow",
      avatar: "https://i.pravatar.cc/150?img=5"
    }
  ];

  useEffect(() => {
    if (!testimonialsRef.current) return;
    gsap.fromTo('.testimonial-card', {
      y: 50,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: testimonialsRef.current,
        start: 'top 80%',
      }
    });
  }, []);

  return (
    <div ref={testimonialsRef} className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-bl from-primary to-secondary">What Our Citizens Say</h2>
        <p className="text-lg text-primary/80 mt-2">Real stories from real people making a difference.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card bg-card/50 backdrop-blur-sm border border-border p-8 rounded-2xl flex flex-col">
            <Quote className="w-8 h-8 text-primary mb-4" />
            <p className="text-muted-foreground italic flex-grow">"{testimonial.quote}"</p>
            <div className="mt-6 flex items-center">
              <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
