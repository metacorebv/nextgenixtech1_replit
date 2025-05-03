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
    <section className="py-20 bg-primary/5">
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
            className="text-3xl md:text-4xl font-heading font-bold text-neutral-900"
          >
            Why Choose NextGenixTech
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="mt-4 text-neutral-700 max-w-2xl mx-auto"
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
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-2xl mb-4">
                <i className={`fas ${item.icon} text-primary text-xl`}></i>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">{item.title}</h3>
              <p className="text-neutral-700">{item.description}</p>
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
          <Link href="/contact">
            <a className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-2xl text-white bg-primary hover:bg-primary/90 transition-colors">
              Book Your Free Tech Audit
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
