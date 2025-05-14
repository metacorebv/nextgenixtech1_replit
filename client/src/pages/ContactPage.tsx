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
      
      <div className="pt-14 pb-20 md:pt-20 md:pb-24 relative overflow-hidden bg-[color:var(--background)] dark:bg-[color:var(--card)]/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--background)] via-[color:var(--card)] to-[color:var(--card)] -z-10"></div>
        
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight text-[color:var(--foreground)] leading-tight"
            >
              Let's <span className="bg-gradient-to-r from-primary to-secondary text-gradient">Connect</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg md:text-xl text-[color:var(--muted-foreground)] leading-relaxed"
            >
              Ready to transform your business with AI-first solutions? We're here to help.
            </motion.p>
          </div>
        </div>
      </div>
      
      <ContactSection />
      
      <section className="py-20 bg-[color:var(--background)] dark:bg-[color:var(--card)]/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Office Location */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[color:var(--card)] p-8 rounded-2xl border border-[color:var(--border)] hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-location-dot text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-[color:var(--foreground)]">Our Main Office</h3>
              <p className="text-[color:var(--muted-foreground)]">
                Amsterdam<br />
                Netherlands, NL
              </p>
            </motion.div>

            {/* Email Contact */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[color:var(--card)] p-8 rounded-2xl border border-[color:var(--border)] hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-envelope text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-[color:var(--foreground)]">Email Us</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-[color:var(--foreground)] font-medium">General Inquiries & Support:</p>
                  <a href="mailto:info@nextgenixtech.com" className="text-primary hover:text-primary/80 transition-colors">
                  connect.nextgenixtech@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Community Support Channels */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[color:var(--card)] p-8 rounded-2xl border border-[color:var(--border)] hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-comments text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-[color:var(--foreground)]">Support Channels</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center mb-2">
                    <i className="fab fa-discord text-[#5865F2] text-xl mr-2"></i>
                    <p className="text-[color:var(--foreground)] font-medium">Discord Community:</p>
                  </div>
                  <a href="https://discord.gg/nextgenixtech" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors flex items-center">
                    <span>Join our Discord Server</span>
                    <i className="fas fa-external-link-alt text-xs ml-1"></i>
                  </a>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <i className="fab fa-slack text-[#4A154B] text-xl mr-2"></i>
                    <p className="text-[color:var(--foreground)] font-medium">Slack Workspace:</p>
                  </div>
                  <a href="https://nextgenixtech.slack.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors flex items-center">
                    <span>Connect on Slack</span>
                    <i className="fas fa-external-link-alt text-xs ml-1"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;
