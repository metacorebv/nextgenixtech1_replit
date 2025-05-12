import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useAnimation, useInView } from "framer-motion";

interface Industry {
  id: string;
  title: string;
  image: string;
  headline: string;
  description: string;
  cta: string;
}

const IndustriesSection = () => {
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

  const industries: Industry[] = [
    {
      id: "fintech",
      title: "Fintech",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      headline: "AI-Driven Fintech Solutions for Compliance and Speed",
      description: "Tackle fraud detection, regulatory reporting, and transaction latency with our specialized fintech solutions.",
      cta: "Explore Fintech Solutions"
    },
    {
      id: "healthcare",
      title: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      headline: "HIPAA-Compliant AI to Power Modern Healthcare",
      description: "Enhance patient engagement and improve diagnostics with secure, compliant AI solutions.",
      cta: "Explore Healthcare Solutions"
    },
    {
      id: "legaltech",
      title: "LegalTech",
      image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      headline: "Automate Discovery. Improve Accuracy. Scale LegalOps.",
      description: "Overcome review bottlenecks and document overload with AI-powered legal solutions.",
      cta: "Explore LegalTech Solutions"
    },
    {
      id: "logistics",
      title: "Logistics",
      image: "https://images.unsplash.com/photo-1519074069390-98277ca18db6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      headline: "Predictive AI for Supply Chain & Fleet Optimization",
      description: "Minimize downtime and route inefficiency with AI-powered logistics solutions.",
      cta: "Explore Logistics Solutions"
    }
  ];

  return (
    <section className="py-20 bg-warm-gray-100">
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
            className="text-3xl md:text-4xl font-heading font-bold text-foreground"
          >
            Industry Solutions
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
          >
            Specialized expertise for your industry's unique challenges and opportunities.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <Link key={index} href={`/industries/${industry.id}`}>
              <a className="group">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (index % 2) }}
                  className="bg-card rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
                >
                  <div className="h-48 relative">
                    <div className="absolute inset-0 bg-neutral-900/30 z-10"></div>
                    <div 
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url(${industry.image})` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-20"></div>
                    <h3 className="absolute bottom-4 left-6 text-2xl font-heading font-semibold text-white drop-shadow-lg z-30">{industry.title}</h3>
                  </div>
                  <div className="p-6 flex-grow">
                    <h4 className="text-xl font-heading font-semibold text-foreground mb-4">{industry.headline}</h4>
                    <p className="text-muted-foreground mb-6">{industry.description}</p>
                    <div className="flex items-center text-primary group-hover:text-primary/80 transition-colors">
                      <span className="font-medium text-foreground/90">{industry.cta}</span>
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;