import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
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
        <meta name="description" content="Discover why leading companies choose NextGenixTech for their digital transformation. AI-native delivery, outcome-based pricing, and real business results." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-14 pb-24 md:pt-20 md:pb-32 relative overflow-hidden bg-[color:var(--background)] dark:bg-[color:var(--card)]/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
            >
              Our Approach
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight text-[color:var(--foreground)] leading-tight mb-6"
            >
              Not Just Another <span className="bg-gradient-to-r from-primary to-secondary text-gradient">IT Consultancy</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-[color:var(--muted-foreground)] leading-relaxed mb-8 max-w-3xl mx-auto"
            >
              We're redefining IT consultancy with a focus on real business outcomes, not billable hours. Our AI-first approach and outcome-based pricing model ensure your success is our success.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <WhyChooseUsSection />
      
      {/* Stats Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-4">37%</div>
              <h3 className="text-xl font-heading font-semibold mb-2">Cost Reduction</h3>
              <p className="text-warm-gray-300">Average cloud cost savings achieved through our FinOps approach</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-4">60%</div>
              <h3 className="text-xl font-heading font-semibold mb-2">Faster Delivery</h3>
              <p className="text-warm-gray-300">Reduction in time-to-market for new features and products</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-4">100+</div>
              <h3 className="text-xl font-heading font-semibold mb-2">Enterprise Clients</h3>
              <p className="text-warm-gray-300">Trusted by leading companies across industries</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <ContactSection />
    </motion.div>
  );
};

export default WhyChooseUsPage;
