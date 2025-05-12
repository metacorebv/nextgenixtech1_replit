import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Services - NextGenixTech</title>
        <meta name="description" content="Explore our AI-first services including cloud optimization, security-embedded delivery, and outcome-based engagements." />
      </Helmet>
      
      <div className="pt-14 pb-24 md:pt-20 md:pb-32 relative overflow-hidden bg-[color:var(--background)] dark:bg-[color:var(--card)]/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
            >
              Our Services
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight text-[color:var(--foreground)] leading-tight"
            >
              Strategic <span className="bg-gradient-to-r from-primary to-secondary text-gradient">Solutions</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg md:text-xl text-[color:var(--muted-foreground)] leading-relaxed max-w-3xl mx-auto"
            >
              Strategic technology solutions engineered for business outcomes and future-ready growth.
            </motion.p>
          </div>
        </div>
      </div>
      
      <ServicesSection />
      <ContactSection />
    </motion.div>
  );
};

export default ServicesPage;
