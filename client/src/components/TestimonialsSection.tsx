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

  useEffect(() => {
    // Reset current slide when testimonials change
    setCurrentSlide(0);
  }, [testimonials]);

  const getVisibleSlides = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    }
    return 3;
  };

  const visibleSlides = getVisibleSlides();
  const maxSlide = Math.max(0, testimonials.length - visibleSlides);

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
    <section className="py-16 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950 text-white relative overflow-hidden">
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
            Real Results for <span className="text-gradient bg-gradient-to-r from-secondary to-accent">Real Businesses</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="mt-4 text-neutral-300 max-w-2xl mx-auto"
          >
            Our clients see measurable outcomes, not just promises. Here's what they have to say about working with us.
          </motion.p>
        </motion.div>
        
        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-neutral-300">Could not load testimonials. Please try again later.</p>
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
                      className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-6 shadow-lg border border-neutral-700/50 h-full"
                      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                          <i className="fas fa-quote-left"></i>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-lg font-semibold text-white">{testimonial.title}</h3>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="text-4xl font-bold bg-gradient-to-r from-secondary to-accent text-gradient">{testimonial.metric}</div>
                      </div>
                      
                      <p className="text-neutral-200 mb-6 text-base leading-relaxed italic">"{testimonial.description}"</p>
                      
                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                          <div className="h-12 w-12 rounded-full overflow-hidden shadow-inner border-2 border-neutral-700">
                            {testimonial.image ? (
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.name}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <div className="h-full w-full bg-neutral-600 flex items-center justify-center">
                                <i className="fas fa-user text-neutral-200"></i>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-white">{testimonial.name}</p>
                          <p className="text-xs text-neutral-400">{testimonial.position}, <span className="text-secondary">{testimonial.company}</span></p>
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
                  className="absolute -left-3 lg:left-2 top-1/2 -translate-y-1/2 bg-gradient-to-br from-neutral-700 to-neutral-800 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-primary/20 z-10 focus:outline-none" 
                  onClick={() => goToSlide(currentSlide - 1)}
                  disabled={currentSlide === 0}
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className="fas fa-chevron-left"></i>
                </motion.button>
                <motion.button 
                  className="absolute -right-3 lg:right-2 top-1/2 -translate-y-1/2 bg-gradient-to-br from-neutral-700 to-neutral-800 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-primary/20 z-10 focus:outline-none" 
                  onClick={() => goToSlide(currentSlide + 1)}
                  disabled={currentSlide === maxSlide}
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className="fas fa-chevron-right"></i>
                </motion.button>
              </>
            )}
          </div>
        )}
        
        {/* Navigation dots for mobile */}
        {testimonials.length > 1 && (
          <div className="flex justify-center mt-8 md:hidden">
            {Array.from({ length: testimonials.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`mx-1 h-2 w-2 rounded-full ${
                  index === currentSlide ? 'bg-primary' : 'bg-neutral-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
