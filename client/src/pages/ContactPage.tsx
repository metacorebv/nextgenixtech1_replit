import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import ContactSection from "@/components/ContactSection";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Contact Us - NextGenixTech</title>
        <meta name="description" content="Get in touch with NextGenixTech for your digital transformation needs. Book a free tech audit or schedule a call." />
      </Helmet>
      
      <div className="pt-14 pb-20 md:pt-20 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-gray-100 via-warm-gray-50 to-warm-gray-50 -z-10"></div>
        
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight text-neutral-900 leading-tight"
            >
              Let's <span className="text-primary">Connect</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg md:text-xl text-neutral-700 leading-relaxed"
            >
              Ready to transform your business with AI-first solutions? We're here to help.
            </motion.p>
          </div>
        </div>
      </div>
      
      <ContactSection />
      
      <section className="py-16 bg-warm-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-2xl mb-4">
                <i className="fas fa-map-marker-alt text-primary text-xl"></i>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Our Office</h3>
              <p className="text-neutral-700">
                123 Tech Avenue<br />
                Suite 500<br />
                San Francisco, CA 94103
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-2xl mb-4">
                <i className="fas fa-envelope text-primary text-xl"></i>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Email Us</h3>
              <p className="text-neutral-700">
                General Inquiries:<br />
                <a href="mailto:info@nextgenixtech.com" className="text-primary hover:text-primary/80 transition-colors">info@nextgenixtech.com</a><br /><br />
                Support:<br />
                <a href="mailto:support@nextgenixtech.com" className="text-primary hover:text-primary/80 transition-colors">support@nextgenixtech.com</a>
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-2xl mb-4">
                <i className="fas fa-phone-alt text-primary text-xl"></i>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Call Us</h3>
              <p className="text-neutral-700">
                Main Office:<br />
                <a href="tel:+14155557890" className="text-primary hover:text-primary/80 transition-colors">+1 (415) 555-7890</a><br /><br />
                Sales Team:<br />
                <a href="tel:+14155557891" className="text-primary hover:text-primary/80 transition-colors">+1 (415) 555-7891</a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;
