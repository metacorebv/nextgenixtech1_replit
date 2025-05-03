import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

const WhyChooseUsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Why Choose Us - NextGenixTech</title>
        <meta name="description" content="Discover why businesses trust NextGenixTech for their digital transformation and AI implementation needs." />
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
              Why <span className="text-primary">Choose Us</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg md:text-xl text-neutral-700 leading-relaxed"
            >
              We're redefining IT consultancy with a focus on real business outcomes, not billable hours.
            </motion.p>
          </div>
        </div>
      </div>
      
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactSection />
    </motion.div>
  );
};

export default WhyChooseUsPage;
