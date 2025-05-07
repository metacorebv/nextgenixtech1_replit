import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useAnimation, useInView } from "framer-motion";

interface Differentiator {
  icon: string;
  title: string;
  description: string;
}

const WhyChooseUsSection = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const differentiators: Differentiator[] = [
    {
      icon: "fa-briefcase",
      title: "Business-first thinking",
      description: "Technology is a means to an end. We focus on the business outcomes you need to achieve."
    },
    {
      icon: "fa-shield-alt",
      title: "DevSecOps from day one",
      description: "Security isn't an afterthought. We build it into our processes and solutions from the start."
    },
    {
      icon: "fa-users",
      title: "Embedded agile squads",
      description: "Our teams integrate with yours for seamless collaboration and knowledge transfer."
    },
    {
      icon: "fa-hand-holding-usd",
      title: "Outcome-based pricing",
      description: "We align our compensation with your success metrics. You pay for results, not hours."
    },
    {
      icon: "fa-robot",
      title: "AI-native delivery",
      description: "We harness the power of AI throughout our delivery process to accelerate outcomes."
    },
    {
      icon: "fa-clipboard-check",
      title: "Compliance automation",
      description: "We automate regulatory compliance to reduce risk and administrative burden."
    }
  ];

  return (
    <section className="py-20 bg-[color:var(--background)] dark:bg-[color:var(--card)]/10">
      <div className="container-custom">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-heading font-bold text-[color:var(--foreground)]"
          >
            Why Choose <span className="bg-gradient-to-r from-primary to-secondary text-gradient">NextGenixTech</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="mt-4 text-[color:var(--muted-foreground)] max-w-2xl mx-auto"
          >
            We're redefining IT consultancy with a focus on real business outcomes, not billable hours.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
              className="bg-[color:var(--card)] rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border/50 group"
            >
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary/20">
                <i className={`fas ${item.icon} text-primary text-xl group-hover:text-primary/90 transition-colors`}></i>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2 text-[color:var(--foreground)] group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-[color:var(--muted-foreground)]">{item.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-primary/20 text-base font-medium rounded-2xl text-[color:var(--background)] bg-primary hover:bg-primary/90 shadow-md hover:shadow-primary/20 transition-all">
            Book Your Free Tech Audit
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
