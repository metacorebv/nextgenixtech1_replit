import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Resource {
  title: string;
  description: string;
  image: string;
  categories: string[];
}

const LatestInsights = () => {
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
            Latest <span className="bg-gradient-to-r from-primary to-secondary text-gradient">Insights</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="mt-4 text-[color:var(--muted-foreground)] max-w-2xl mx-auto"
          >
            Expert perspectives on AI, cloud optimization, and digital transformationsssss.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex gap-4 justify-center mt-8"
          >
            <button className="px-4 py-2 rounded-md bg-primary hover:bg-primary/90 text-[color:var(--background)] transition-all">
              All
            </button>
            {['AI', 'Cloud', 'Security'].map((category) => (
              <button 
                key={category}
                className="px-4 py-2 rounded-md bg-[color:var(--card)] border border-primary/20 text-[color:var(--foreground)] hover:bg-[color:var(--accent)] hover:text-[color:var(--accent-foreground)] transition-all"
              >
                {category}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestInsights;