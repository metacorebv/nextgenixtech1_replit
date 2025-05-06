import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getQueryFn } from "../lib/queryClient";
import { testimonials as defaultTestimonials } from "../lib/data";
import { Testimonial, TestimonialUI } from "../lib/types";

// Helper function to map API testimonial to UI format
const mapApiToUiTestimonial = (apiTestimonial: Testimonial): TestimonialUI => {
  return {
    name: apiTestimonial.name,
    position: apiTestimonial.position,
    company: apiTestimonial.company,
    metric: apiTestimonial.metric || "",
    title: apiTestimonial.metricTitle || "",
    description: apiTestimonial.testimonial,
    image: apiTestimonial.imageUrl || "",
  };
};

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Fetch testimonials from the API
  const { data: apiTestimonials, isLoading, error } = useQuery({
    queryKey: ['/api/testimonials'],
    queryFn: getQueryFn<{ data: Testimonial[] }>({ on401: "returnNull" }),
    enabled: true,
  });
  
  // Process API testimonials to UI format if available, otherwise use default data
  const testimonials: TestimonialUI[] = apiTestimonials?.data 
    ? apiTestimonials.data
        .filter(t => t.isActive)
        .map(mapApiToUiTestimonial)
    : defaultTestimonials;

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const getVisibleSlides = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    }
    return 3;
  };

  const visibleSlides = getVisibleSlides();
  const maxSlide = Math.max(0, testimonials.length - visibleSlides);
  
  useEffect(() => {
    // Reset current slide when testimonials change
    setCurrentSlide(0);
  }, [testimonials]);
  
  // Auto-rotate testimonials
  useEffect(() => {
    if (testimonials.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => {
        if (prev >= maxSlide) {
          return 0;
        }
        return prev + 1;
      });
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [testimonials.length, maxSlide]);

  const goToSlide = (slideIndex: number) => {
    if (slideIndex < 0) slideIndex = 0;
    if (slideIndex > maxSlide) slideIndex = maxSlide;
    setCurrentSlide(slideIndex);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background/50 via-background to-background/90 text-foreground relative overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl -z-10"
        animate={{ 
          x: [0, 30, 0], 
          y: [0, -20, 0],
          scale: [1, 1.1, 1], 
          opacity: [0.2, 0.3, 0.2] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary/10 blur-3xl -z-10"
        animate={{ 
          x: [0, -30, 0], 
          y: [0, 20, 0],
          scale: [1, 1.2, 1], 
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      <div className="container-custom">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-10"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-heading font-bold"
          >
            Real Results for <span className="text-gradient bg-gradient-to-r from-primary via-secondary to-accent">Real Businesses</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
          >
            Our clients experience measurable outcomes and transformative results. 
            Here's what they have to say about working with NextGenixTech.
          </motion.p>
        </motion.div>
        
        {isLoading ? (
          <div className="flex justify-center py-12">
            <motion.div 
              className="h-16 w-16 rounded-full border-t-2 border-r-2 border-primary/80"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
        ) : error ? (
          <div className="text-center py-8 max-w-lg mx-auto bg-destructive/10 rounded-xl p-6 border border-destructive/30">
            <i className="fas fa-exclamation-triangle text-destructive text-2xl mb-3"></i>
            <p className="text-foreground/90">Could not load testimonials. Please try again later.</p>
            <button 
              className="mt-4 px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-md transition-colors"
              onClick={() => window.location.reload()}
            >
              Retry
            </button>
          </div>
        ) : (
          <div className="relative">
            <div className="overflow-hidden" id="testimonial-carousel">
              <motion.div 
                className="flex"
                animate={{ 
                  translateX: `-${currentSlide * (100 / visibleSlides)}%` 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div 
                    key={index}
                    className={`w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <motion.div 
                      className="bg-gradient-to-br from-card/90 to-card rounded-2xl p-6 shadow-lg border border-primary/10 h-full backdrop-blur-sm"
                      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex items-center mb-4">
                        <motion.div 
                          className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white"
                          animate={{ 
                            rotate: [0, 5, 0, -5, 0],
                            scale: [1, 1.05, 1, 1.05, 1]
                          }}
                          transition={{ 
                            duration: 6, 
                            repeat: Infinity, 
                            ease: "easeInOut",
                            delay: index * 0.2
                          }}
                        >
                          <i className="fas fa-quote-left"></i>
                        </motion.div>
                        <div className="ml-3">
                          <h3 className="text-lg font-semibold text-foreground">{testimonial.title}</h3>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <motion.div 
                          className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent text-gradient"
                          initial={{ opacity: 0.8, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8 }}
                        >
                          {testimonial.metric}
                        </motion.div>
                      </div>
                      
                      <p className="text-foreground/80 mb-6 text-base leading-relaxed italic relative pl-2">
                        <span className="absolute left-0 top-0 text-primary/40 text-2xl font-serif">"</span>
                        {testimonial.description}
                        <span className="text-primary/40 text-2xl font-serif">"</span>
                      </p>
                      
                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                          <motion.div 
                            className="h-12 w-12 rounded-full overflow-hidden shadow-xl border-2 border-primary/30"
                            whileHover={{ scale: 1.1, borderColor: "rgba(var(--primary), 0.5)" }}
                          >
                            {testimonial.image ? (
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.name}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <div className="h-full w-full bg-primary/20 flex items-center justify-center">
                                <i className="fas fa-user text-foreground/60"></i>
                              </div>
                            )}
                          </motion.div>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.position}, <span className="text-primary/80">{testimonial.company}</span></p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {testimonials.length > visibleSlides && (
              <>
                <motion.button 
                  className="absolute -left-3 lg:left-2 top-1/2 -translate-y-1/2 bg-primary/10 backdrop-blur-sm text-foreground rounded-full w-12 h-12 flex items-center justify-center shadow-lg border border-primary/20 hover:border-primary/50 z-10 focus:outline-none" 
                  onClick={() => goToSlide(currentSlide - 1)}
                  disabled={currentSlide === 0}
                  whileHover={{ scale: 1.1, x: -5, backgroundColor: "rgba(var(--primary), 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className="fas fa-chevron-left text-primary"></i>
                </motion.button>
                <motion.button 
                  className="absolute -right-3 lg:right-2 top-1/2 -translate-y-1/2 bg-primary/10 backdrop-blur-sm text-foreground rounded-full w-12 h-12 flex items-center justify-center shadow-lg border border-primary/20 hover:border-primary/50 z-10 focus:outline-none" 
                  onClick={() => goToSlide(currentSlide + 1)}
                  disabled={currentSlide === maxSlide}
                  whileHover={{ scale: 1.1, x: 5, backgroundColor: "rgba(var(--primary), 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className="fas fa-chevron-right text-primary"></i>
                </motion.button>
              </>
            )}
          </div>
        )}
        
        {/* Navigation dots for mobile */}
        {testimonials.length > 1 && (
          <motion.div 
            className="flex justify-center mt-8 space-x-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            {Array.from({ length: testimonials.length }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`mx-1 h-3 w-3 rounded-full transition-all duration-300 border ${
                  index === currentSlide 
                    ? 'bg-primary border-primary scale-110' 
                    : 'bg-primary/10 border-primary/30 hover:bg-primary/20'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
