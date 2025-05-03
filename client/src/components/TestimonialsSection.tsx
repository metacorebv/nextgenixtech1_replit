import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Testimonial {
  metric: string;
  title: string;
  description: string;
  image: string;
  name: string;
  position: string;
  company: string;
}

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const testimonials: Testimonial[] = [
    {
      metric: "37%",
      title: "Reduced Cloud Costs",
      description: "Without sacrificing performance or scalability. Our FinOps approach optimized resource allocation.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      name: "James Wilson",
      position: "CTO",
      company: "FinanceHub"
    },
    {
      metric: "60%",
      title: "Faster Compliance Processing",
      description: "Our AI-powered regulatory technology automated document review and compliance verification.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      name: "Sarah Martinez",
      position: "Compliance Director",
      company: "MedTech Solutions"
    },
    {
      metric: "1000+",
      title: "Patients Served Daily",
      description: "Our AI triage tool helped healthcare providers prioritize care and reduce wait times.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      name: "Dr. Emily Chen",
      position: "Medical Director",
      company: "CareFirst Hospital"
    }
  ];

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
    <section className="py-16 bg-neutral-900 text-white">
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
            className="text-3xl font-heading font-bold"
          >
            Real Results for Real Businesses
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="mt-4 text-warm-gray-300"
          >
            Our clients see measurable outcomes, not just promises.
          </motion.p>
        </motion.div>
        
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
                  <div className="bg-neutral-800 rounded-2xl p-6 shadow-md h-full">
                    <div className="text-3xl font-bold text-accent mb-2">{testimonial.metric}</div>
                    <h3 className="text-xl font-semibold mb-4">{testimonial.title}</h3>
                    <p className="text-warm-gray-200 mb-6">{testimonial.description}</p>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-warm-gray-600 flex items-center justify-center">
                          <i className="fas fa-user text-warm-gray-200"></i>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-white">{testimonial.name}</p>
                        <p className="text-xs text-warm-gray-300">{testimonial.position}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <button 
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-warm-gray-100 transition-colors z-10 focus:outline-none" 
            onClick={() => goToSlide(currentSlide - 1)}
            disabled={currentSlide === 0}
          >
            <i className="fas fa-chevron-left text-neutral-900"></i>
          </button>
          <button 
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-warm-gray-100 transition-colors z-10 focus:outline-none" 
            onClick={() => goToSlide(currentSlide + 1)}
            disabled={currentSlide === maxSlide}
          >
            <i className="fas fa-chevron-right text-neutral-900"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
