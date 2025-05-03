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
      
      <div className="pt-14 pb-24 md:pt-20 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-gray-100 via-warm-gray-50 to-warm-gray-50 -z-10"></div>
        
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight text-neutral-900 leading-tight"
            >
              Our <span className="text-primary">Services</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg md:text-xl text-neutral-700 leading-relaxed"
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
