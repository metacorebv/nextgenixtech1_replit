import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Track touch events for mobile swipe
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const testimonials: Testimonial[] = [
    {
      quote: "NextGenixTech transformed our fraud detection pipeline. Their AI-native solutions helped us reduce false positives by over 40%, and their regulatory reporting automation saved weeks of compliance overhead each quarter.",
      name: "John Smith",
      role: "VP of Engineering, Global Payments Platform",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      quote: "We needed a partner who understood both AI and healthcare compliance. NextGenixTech delivered a fully secure, HIPAA-compliant data platform that's powering predictive diagnostics across our patient network.",
      name: "Sarah Johnson",
      role: "CTO, AI Health Diagnostics Company",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
      quote: "NextGenixTech helped us shift from reactive to predictive logistics. Their cloud-smart architecture and embedded ML models now help us forecast demand spikes and avoid last-minute disruptions.",
      name: "Michael Chen",
      role: "COO, Global Logistics Provider",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    {
      quote: "Their e-discovery automation changed the game for our law firm. What took teams 10+ hours is now handled in minutes with AI-powered sorting and summarization.",
      name: "Jennifer Williams",
      role: "Managing Partner, Corporate Law Firm",
      avatar: "https://i.pravatar.cc/150?img=9"
    },
    {
      quote: "They didn't just suggest trendy tech—they delivered AI and cloud solutions mapped to our growth metrics. The outcome-based pricing gave us confidence they were invested in our success.",
      name: "David Rodriguez",
      role: "Head of Strategy, SaaS Startup",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    {
      quote: "Security was not bolted on—it was built in from day one. Their DevSecOps pipelines ensured every release passed automated security checks without slowing velocity.",
      name: "Emily Taylor",
      role: "VP of Product, Cybersecurity Platform",
      avatar: "https://i.pravatar.cc/150?img=20"
    },
    {
      quote: "We tripled our organic reach in under 90 days. Their AI-led marketing stack gave us real leads—not vanity metrics.",
      name: "Alex Thompson",
      role: "Director of Growth, D2C eCommerce Brand",
      avatar: "https://i.pravatar.cc/150?img=15"
    }
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current && touchEndX.current) {
      const diff = touchStartX.current - touchEndX.current;
      
      // If the swipe is significant enough (more than 50px)
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          // Swipe left, go to next
          handleManualNavigation(nextTestimonial);
        } else {
          // Swipe right, go to previous
          handleManualNavigation(prevTestimonial);
        }
      }
    }
    
    // Reset values
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const startAutoRotation = () => {
      intervalRef.current = setInterval(() => {
        if (!isPaused) {
          nextTestimonial();
        }
      }, 1000); // Reduced from 7000 to 1000 (1 second) Animation time
    };

    startAutoRotation();

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  // Reset interval when manually navigating
  const handleManualNavigation = (callback: () => void) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    callback();
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        nextTestimonial();
      }
    }, 4000); // Reduced from 7000 to 4000 (4 seconds)
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  return (
    <section className="py-20 bg-[color:var(--background)] dark:bg-[color:var(--card)]/10">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-heading font-bold text-[color:var(--foreground)]"
          >
            What Our <span className="bg-gradient-to-r from-primary to-secondary text-gradient">Clients Say</span>
          </motion.h2>
        </div>
        
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Testimonial Carousel */}
          <div className="relative overflow-hidden min-h-[400px] md:min-h-[350px]">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 25 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full"
              >
                <div className="bg-[color:var(--card)] rounded-2xl shadow-lg p-8 md:p-10 border border-[color:var(--border)]">
                  <div className="flex flex-col items-center">
                    <div className="mb-6">
                      <svg className="w-10 h-10 text-primary/30" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10,8H6a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h4V8Zm0,0" />
                        <path d="M10,16H6a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h4V16Zm0,0" />
                        <path d="M26,8H22a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h4V8Zm0,0" />
                        <path d="M26,16H22a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h4V16Zm0,0" />
                      </svg>
                    </div>
                    <p className="text-[color:var(--foreground)] text-lg md:text-xl leading-relaxed mb-8 text-center max-h-[200px] overflow-y-auto">
                      {testimonials[currentIndex].quote}
                    </p>
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary/20 flex-shrink-0">
                        <img 
                          src={testimonials[currentIndex].avatar} 
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-[color:var(--foreground)]">{testimonials[currentIndex].name}</h4>
                        <div className="text-[color:var(--muted-foreground)] text-sm">
                          {testimonials[currentIndex].role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={() => handleManualNavigation(prevTestimonial)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 md:-translate-x-10 w-10 h-10 rounded-full bg-[color:var(--card)] border border-[color:var(--border)] shadow-md flex items-center justify-center text-[color:var(--foreground)] hover:bg-[color:var(--accent)] transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => handleManualNavigation(nextTestimonial)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 md:translate-x-10 w-10 h-10 rounded-full bg-[color:var(--card)] border border-[color:var(--border)] shadow-md flex items-center justify-center text-[color:var(--foreground)] hover:bg-[color:var(--accent)] transition-colors z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  handleManualNavigation(() => setCurrentIndex(index));
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-primary' 
                    : 'bg-[color:var(--border)] hover:bg-[color:var(--muted-foreground)]'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;