import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
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
  const carouselRef = useRef<HTMLDivElement>(null);
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

  // Auto-carousel effect
  useEffect(() => {
    if (testimonials.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => {
        const next = prev + 1;
        return next >= testimonials.length ? 0 : next;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const getVisibleSlides = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    }
    return 3;
  };

  const visibleSlides = getVisibleSlides();
  const maxSlide = Math.max(0, testimonials.length - visibleSlides);

  const goToSlide = (slideIndex: number) => {
    if (slideIndex < 0) slideIndex = testimonials.length - 1;
    if (slideIndex >= testimonials.length) slideIndex = 0;
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
    <section className="py-20 bg-neutral-900 text-white relative overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-[100px] -z-10"
        animate={{ 
          x: [0, 30, 0], 
          y: [0, -20, 0],
          scale: [1, 1.1, 1], 
          opacity: [0.2, 0.3, 0.2] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary/10 blur-[100px] -z-10"
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
          className="text-center mb-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-5xl font-heading font-bold"
          >
            Built by the <span className="text-gradient bg-gradient-to-r from-primary via-secondary to-accent inline-block">fastest-growing</span> AI influencer
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="mt-6 text-neutral-300 max-w-2xl mx-auto text-lg"
          >
            Our clients see measurable outcomes across platforms, not just promises.
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
          <div className="relative" ref={carouselRef}>
            <div className="overflow-hidden" id="testimonial-carousel">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentSlide}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {testimonials.length > 0 && (
                    <motion.div 
                      className="bg-neutral-800 rounded-xl p-8 shadow-lg border border-neutral-700/50 h-full"
                      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                          <i className="fas fa-user-friends text-xl"></i>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-2xl md:text-4xl font-bold text-white">500,000+</h3>
                          <p className="text-neutral-300">Followers in 6 Months</p>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <p className="text-neutral-200 text-lg leading-relaxed">Rapidly built a dedicated community of AI enthusiasts and creators looking to leverage no-code tools.</p>
                      </div>
                    </motion.div>
                  )}
                  
                  {testimonials.length > 0 && (
                    <motion.div 
                      className="bg-neutral-800 rounded-xl p-8 shadow-lg border border-neutral-700/50 h-full"
                      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                          <i className="fas fa-eye text-xl"></i>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-2xl md:text-4xl font-bold text-white">50,000,000+</h3>
                          <p className="text-neutral-300">Views in 6 Months</p>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <p className="text-neutral-200 text-lg leading-relaxed">Created and distributed viral AI content across platforms, generating massive engagement with no-code techniques.</p>
                      </div>
                    </motion.div>
                  )}
                  
                  {testimonials.length > 0 && (
                    <motion.div 
                      className="bg-neutral-800 rounded-xl p-8 shadow-lg border border-neutral-700/50 h-full"
                      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                          <i className="fas fa-dollar-sign text-xl"></i>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-2xl md:text-4xl font-bold text-white">$0</h3>
                          <p className="text-neutral-300">Budget</p>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <p className="text-neutral-200 text-lg leading-relaxed">Achieved massive reach and growth using our proprietary AI content strategy with zero paid advertising.</p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            
            {testimonials.length > 3 && (
              <>
                <motion.button 
                  className="absolute -left-3 lg:left-2 top-1/2 -translate-y-1/2 bg-gradient-to-br from-primary to-secondary text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-primary/20 z-10 focus:outline-none" 
                  onClick={() => goToSlide(currentSlide - 1)}
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className="fas fa-chevron-left"></i>
                </motion.button>
                <motion.button 
                  className="absolute -right-3 lg:right-2 top-1/2 -translate-y-1/2 bg-gradient-to-br from-primary to-secondary text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-primary/20 z-10 focus:outline-none" 
                  onClick={() => goToSlide(currentSlide + 1)}
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
        
        {/* Pagination indicators */}
        {testimonials.length > 3 && (
          <div className="flex justify-center mt-8">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index * 3)}
                className={`mx-1 h-3 w-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentSlide / 3) === index 
                    ? 'bg-gradient-to-r from-primary to-secondary w-8' 
                    : 'bg-neutral-600 hover:bg-neutral-500'
                }`}
                aria-label={`Go to slide group ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Cross-post section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-neutral-400 mb-3 text-sm uppercase tracking-wider">Cross-Post Everywhere</p>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Post EVERYWHERE to maximize reach (for free)</h3>
          <Link href="/contact">
            <motion.a 
              className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(157, 78, 221, 0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              Start Creating
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
