The change updates the CTA link in the HeroSection component to scroll to the Calendly widget on the Contact page.
```

```replit_final_file
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
    <section className="pt-14 pb-24 md:pt-20 md:pb-32 relative overflow-hidden">
      {/* Modern gradient background with animated motion */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-[color:var(--background)] to-[color:var(--background)] -z-10"
        animate={{ 
          opacity: [0.8, 1, 0.8]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated shapes */}
      <motion.div 
        className="absolute right-[20%] top-[15%] w-64 h-64 rounded-full bg-secondary/10 blur-3xl -z-10"
        animate={{ 
          x: [0, 30, 0], 
          y: [0, -20, 0],
          scale: [1, 1.2, 1], 
          opacity: [0.3, 0.4, 0.3] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div 
        className="absolute left-[15%] bottom-[10%] w-80 h-80 rounded-full bg-accent/10 blur-3xl -z-10"
        animate={{ 
          x: [0, -20, 0], 
          y: [0, 30, 0],
          scale: [1, 1.1, 1], 
          opacity: [0.2, 0.3, 0.2] 
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
            className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold tracking-tight text-[color:var(--foreground)] leading-tight"
          >
            AI-Native. Secure by Design. <span className="text-gradient bg-gradient-to-r from-primary via-secondary to-accent inline-block">Built for Business Impact.</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="mt-6 text-lg md:text-2xl text-[color:var(--muted-foreground)] leading-relaxed"
          >
            From strategy to delivery, we engineer results — not just roadmaps.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="mt-10 flex justify-center gap-4 flex-col sm:flex-row"
          >
            <Link href="/contact#book-meeting">
              <motion.div 
                className="px-8 py-4 rounded-2xl bg-primary text-[color:var(--background)] font-medium shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(var(--primary), 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="mr-2">🎯</span> Book a Free Tech Audit
              </motion.div>
            </Link>
            <Link href="/services">
              <motion.div 
                className="px-8 py-4 rounded-2xl bg-[color:var(--card)] text-[color:var(--foreground)] font-medium shadow-lg hover:shadow-secondary/20 border border-border/50 transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
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
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-[color:var(--card)] backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[color:var(--border)] hover:border-primary/20 transition-all duration-300 group"
            >
              <motion.div 
                className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center rounded-2xl mb-4 group-hover:scale-110 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <i className={`fas ${item.icon} text-primary text-xl`}></i>
              </motion.div>
              <h3 className="text-lg font-heading font-semibold mb-2 text-[color:var(--foreground)] group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-[color:var(--muted-foreground)]">{item.description}</p>
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
          <div className="w-7 h-12 border-2 border-[color:var(--border)] rounded-full flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-1.5 bg-primary rounded-full"
              animate={{ 
                y: [0, 15, 0] 
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <p className="text-xs text-[color:var(--muted-foreground)] mt-2 text-center">Scroll to explore</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;