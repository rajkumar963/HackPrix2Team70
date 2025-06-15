
import React from 'react';
import { Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "JanSahay has transformed how our community handles civic issues. It's fast, transparent, and incredibly effective.",
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
    },
    {
      quote: "Reporting a pothole was surprisingly easy and I got updates on the repair status. Great initiative!",
      name: "Amit Kumar",
      title: "Software Engineer, Bengaluru",
      avatar: "https://i.pravatar.cc/150?img=7"
    },
    {
      quote: "I love the leaderboard feature. It adds a bit of friendly competition to keeping our neighborhood clean.",
      name: "Sunita Reddy",
      title: "Homemaker, Hyderabad",
      avatar: "https://i.pravatar.cc/150?img=8"
    },
    {
      quote: "The transparency is what I appreciate most. You can see what's being done about the issues you care about.",
      name: "Vikram Patel",
      title: "Small Business Owner, Ahmedabad",
      avatar: "https://i.pravatar.cc/150?img=11"
    }
  ];

  return (
    <div className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-bl from-primary to-secondary">What Our Citizens Say</h2>
        <p className="text-lg text-primary/80 mt-2">Real stories from real people making a difference.</p>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2500,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <div className="bg-card/50 backdrop-blur-sm border border-border p-8 rounded-2xl flex flex-col h-full">
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
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Testimonials;
