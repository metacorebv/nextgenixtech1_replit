import { Link } from "wouter";
import Logo from "./Logo";
import { siteConfig } from "../lib/data";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-neutral-900 to-neutral-950 opacity-70 -z-10"></div>
      
      {/* Animated shapes */}
      <motion.div 
        className="absolute top-0 right-10 w-40 h-40 rounded-full bg-secondary/10 -z-5"
        animate={{ 
          y: [0, 15, 0], 
          scale: [1, 1.1, 1], 
          opacity: [0.2, 0.3, 0.2] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-10 left-20 w-32 h-32 rounded-full bg-accent/10 -z-5"
        animate={{ 
          y: [0, -20, 0], 
          scale: [1, 1.2, 1], 
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <motion.div 
              className="flex items-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Logo />
              <span className="ml-2 text-xl font-heading font-semibold text-white">NextGenixTech</span>
            </motion.div>
            <motion.p 
              className="text-lg font-medium text-secondary mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {siteConfig.tagline}
            </motion.p>
            <motion.p 
              className="text-sm mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {siteConfig.description}
            </motion.p>
            <motion.div
              className="mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-accent hover:text-white transition-colors">
                {siteConfig.contactEmail}
              </a>
            </motion.div>
          </div>
          
          <div>
            <h3 className="text-white font-heading font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services#cloud"><a className="hover:text-accent transition-colors">Cloud Optimization</a></Link></li>
              <li><Link href="/services#ai"><a className="hover:text-accent transition-colors">AI-First Solutions</a></Link></li>
              <li><Link href="/services#outcome"><a className="hover:text-accent transition-colors">Outcome-Based Engagements</a></Link></li>
              <li><Link href="/services#security"><a className="hover:text-accent transition-colors">Security-Embedded Delivery</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-heading font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              <li><Link href="/industries/fintech"><a className="hover:text-accent transition-colors">Fintech</a></Link></li>
              <li><Link href="/industries/healthcare"><a className="hover:text-accent transition-colors">Healthcare</a></Link></li>
              <li><Link href="/industries/legaltech"><a className="hover:text-accent transition-colors">LegalTech</a></Link></li>
              <li><Link href="/industries/logistics"><a className="hover:text-accent transition-colors">Logistics</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-heading font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="/contact"><a className="hover:text-accent transition-colors">Contact Us</a></Link></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><Link href="/resources"><a className="hover:text-accent transition-colors">Resources</a></Link></li>
              <li><Link href="/resources"><a className="hover:text-accent transition-colors">Blog</a></Link></li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <a href={siteConfig.socialLinks.linkedin} className="text-neutral-300 hover:text-accent transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href={siteConfig.socialLinks.twitter} className="text-neutral-300 hover:text-accent transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href={siteConfig.socialLinks.github} className="text-neutral-300 hover:text-accent transition-colors">
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-neutral-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} NextGenixTech. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="text-sm hover:text-accent transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
