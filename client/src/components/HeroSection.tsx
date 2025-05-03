import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useAnimation, useInView } from "framer-motion";

const HeroSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

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

  const differentiators = [
    {
      icon: "fa-robot",
      title: "AI-First, Not Just AI-Enabled",
      description: "Solutions designed around AI capabilities from the ground up, not retrofitted."
    },
    {
      icon: "fa-chart-line",
      title: "Outcome-Based Engagements",
      description: "We bill by results, not hours. Your success is our success."
    },
    {
      icon: "fa-shield-alt",
      title: "Security-Embedded Delivery",
      description: "Protection built in from day one, not bolted on later."
    },
    {
      icon: "fa-industry",
      title: "Domain Expertise",
      description: "Specialized knowledge in Finance, Health, Legal, and Logistics."
    }
  ];

  return (
    <section className="pt-14 pb-24 md:pt-20 md:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-warm-gray-100 via-warm-gray-50 to-warm-gray-50 -z-10"></div>
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 -z-10 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')] bg-cover"></div>
      
      <div className="container-custom">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight text-neutral-900 leading-tight"
          >
            AI-Native. Secure by Design. <span className="text-primary">Built for Business Impact.</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-neutral-700 leading-relaxed"
          >
            From strategy to delivery, we engineer results — not just roadmaps.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="mt-10 flex justify-center gap-4 flex-col sm:flex-row"
          >
            <Link href="/contact">
              <a className="px-8 py-4 rounded-2xl bg-primary text-white font-medium shadow-md hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center">
                <span className="mr-2">🎯</span> Book a Free Tech Audit
              </a>
            </Link>
            <Link href="/services">
              <a className="px-8 py-4 rounded-2xl bg-white text-neutral-900 font-medium shadow-md hover:bg-warm-gray-100 transition-colors duration-300 flex items-center justify-center">
                Explore Our Services
              </a>
            </Link>
          </motion.div>
        </motion.div>
        
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-2xl mb-4">
                <i className={`fas ${item.icon} text-primary text-xl`}></i>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">{item.title}</h3>
              <p className="text-neutral-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
