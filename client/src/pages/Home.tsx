import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ResourcesSection from "@/components/ResourcesSection";
import ContactSection from "@/components/ContactSection";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>NextGenixTech - Smart Tech. Real Outcomes.</title>
        <meta name="description" content="AI-Native IT Consultancy - From strategy to delivery, we engineer results, not just roadmaps." />
      </Helmet>
      
      <HeroSection />
      <TestimonialsSection />
      <ServicesSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <ResourcesSection />
      <ContactSection />
    </motion.div>
  );
};

export default Home;
