import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useAnimation, useInView } from "framer-motion";
import { siteConfig } from "../lib/data";

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
    <section className="pt-24 md:pt-28 pb-24 md:pb-32 relative overflow-hidden bg-neutral-900">
      {/* Modern gradient background with animated motion */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-neutral-900 to-neutral-950 -z-10"
        animate={{ 
          background: [
            "linear-gradient(to bottom right, rgba(157, 78, 221, 0.1), rgba(13, 17, 23, 1), rgba(13, 17, 23, 0.95))",
            "linear-gradient(to bottom right, rgba(157, 78, 221, 0.15), rgba(13, 17, 23, 1), rgba(13, 17, 23, 0.9))",
            "linear-gradient(to bottom right, rgba(157, 78, 221, 0.1), rgba(13, 17, 23, 1), rgba(13, 17, 23, 0.95))"
          ] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Animated shapes/gradients */}
      <motion.div 
        className="absolute right-[20%] top-[15%] w-64 h-64 rounded-full bg-primary/20 blur-[100px] -z-10"
        animate={{ 
          x: [0, 30, 0], 
          y: [0, -20, 0],
          scale: [1, 1.2, 1], 
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute left-[15%] bottom-[10%] w-80 h-80 rounded-full bg-secondary/20 blur-[100px] -z-10"
        animate={{ 
          x: [0, -20, 0], 
          y: [0, 30, 0],
          scale: [1, 1.1, 1], 
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      {/* Main content */}
      <div className="container-custom relative z-10">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold tracking-tight text-white leading-tight"
          >
            BUILDING <span className="text-gradient bg-gradient-to-r from-primary via-secondary to-accent inline-block">AI FUTURE</span> & EMPOWERING THE "NOCODE AI ARMY"
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="mt-6 text-lg md:text-2xl text-neutral-300 leading-relaxed"
          >
            From pioneering cutting-edge AI tools to creating hyper-efficient automation, we make advanced tech simple, accessible, and profitable.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="mt-10 flex justify-center gap-4 flex-col sm:flex-row"
          >
            <Link href="/contact">
              <motion.div 
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(157, 78, 221, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="mr-2">🎯</span> Book a Free Tech Audit — Get an MVP Delivered, On Us
              </motion.div>
            </Link>
            <Link href="/services">
              <motion.div 
                className="px-8 py-4 rounded-xl bg-neutral-800 text-white font-medium shadow-lg hover:shadow-neutral-700/20 transition-all duration-300 flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Our Services
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
        
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 4) }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
                background: "linear-gradient(to bottom right, rgba(30, 30, 35, 0.9), rgba(20, 20, 25, 0.8))"
              }}
              className="bg-neutral-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-neutral-700 hover:border-primary/30 transition-all duration-300"
            >
              <motion.div 
                className="w-14 h-14 bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center rounded-xl mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <i className={`fas ${item.icon} text-primary text-xl`}></i>
              </motion.div>
              <h3 className="text-lg font-heading font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-neutral-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-7 h-12 border-2 border-neutral-500 rounded-full flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-1.5 bg-primary rounded-full"
              animate={{ 
                y: [0, 15, 0] 
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <p className="text-xs text-neutral-400 mt-2 text-center">Scroll to explore</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
