import { Link } from "wouter";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[color:var(--card)] border-t border-[color:var(--border)]">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-heading font-bold text-[color:var(--foreground)]">NextGenixTech</h2>
              <p className="text-primary font-medium mt-1">Smart Tech. Real Outcomes.</p>
            </div>
            <p className="text-[color:var(--muted-foreground)] text-sm">
              AI-Native IT Consultancy - From strategy to delivery, we engineer results, not just roadmaps.
            </p>
            <div>
              <a 
                href="mailto:connect.nextgenixtech@gmail.com"
                className="text-primary hover:text-primary/80 transition-colors text-sm"
              >
                connect.nextgenixtech@gmail.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-[color:var(--foreground)] mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                { name: "Cloud Optimization", path: "/services/cloud-smart" },
                { name: "AI-First Solutions", path: "/services/ai-first" },
                { name: "Outcome-Based Engagements", path: "/services/outcome-based" },
                { name: "Security-Embedded Delivery", path: "/services/security-delivery" }
              ].map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link href={service.path}>
                    <span className="text-[color:var(--muted-foreground)] hover:text-primary transition-colors cursor-pointer">
                      {service.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-[color:var(--foreground)] mb-4">Industries</h3>
            <ul className="space-y-3">
              {[
                { name: "Fintech", path: "/industries/fintech" },
                { name: "Healthcare", path: "/industries/healthcare" },
                { name: "LegalTech", path: "/industries/legaltech" },
                { name: "Logistics", path: "/industries/logistics" }
              ].map((industry, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link href={industry.path}>
                    <span className="text-[color:var(--muted-foreground)] hover:text-primary transition-colors cursor-pointer">
                      {industry.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-[color:var(--foreground)] mb-4">Connect</h3>
            <ul className="space-y-3">
              {[
                { name: "Contact Us", path: "/contact" },
                { name: "Careers", path: "/careers" },
                { name: "Resources", path: "/resources" }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link href={item.path}>
                    <span className="text-[color:var(--muted-foreground)] hover:text-primary transition-colors cursor-pointer">
                      {item.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[color:var(--border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[color:var(--muted-foreground)]">
            © {new Date().getFullYear()} NextGenixTech. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4 mr-6">
              <a 
                href="https://discord.gg/nextgenixtech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[color:var(--muted-foreground)] hover:text-primary transition-colors"
              >
                <i className="fab fa-discord text-xl"></i>
                <span className="sr-only">Discord</span>
              </a>
              <a 
                href="https://nextgenixtech.slack.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[color:var(--muted-foreground)] hover:text-primary transition-colors"
              >
                <i className="fab fa-slack text-xl"></i>
                <span className="sr-only">Slack</span>
              </a>
            </div>
            <Link href="/privacy-policy">
              <span className="text-[color:var(--muted-foreground)] hover:text-primary transition-colors text-sm cursor-pointer">
                Privacy Policy
              </span>
            </Link>
            <Link href="/terms-of-service">
              <span className="text-[color:var(--muted-foreground)] hover:text-primary transition-colors text-sm cursor-pointer">
                Terms of Service
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
