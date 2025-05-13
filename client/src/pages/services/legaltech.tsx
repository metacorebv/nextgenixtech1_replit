import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "wouter";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";

const LegalTechPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>LegalTech Solutions | NextGenixTech</title>
        <meta name="description" content="E-discovery automation and contract analysis tools that save time and improve accuracy for legal professionals." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-[color:var(--card)]/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
            >
              LegalTech Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl text-[color:var(--muted-foreground)] mb-8"
            >
              Automate discovery. Improve accuracy. Scale legal operations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Transforming Legal Work with AI-Powered Solutions
              </h2>
              <p className="text-lg mb-6">
                Legal professionals face mounting challenges: increasing document volumes, complex regulatory requirements, and pressure to deliver more value with fewer resources. NextGenixTech's LegalTech solutions help law firms and corporate legal departments overcome these challenges through intelligent automation.
              </p>
              <p className="text-lg mb-6">
                Our AI-powered document review, contract analysis, and knowledge management tools dramatically reduce the time spent on routine tasks while improving accuracy and consistency. This allows legal professionals to focus on high-value strategic work that truly requires human expertise.
              </p>
              <p className="text-lg">
                By combining legal domain knowledge with cutting-edge AI capabilities, we deliver solutions that address the specific needs of legal professionals while maintaining the highest standards of accuracy and confidentiality.
              </p>
            </div>
            <div className="bg-[color:var(--card)] p-8 rounded-xl border border-[color:var(--border)] shadow-lg">
              <h3 className="text-2xl font-heading font-bold mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <strong className="font-medium">AI-Powered Document Review:</strong> Reduce e-discovery time by up to 80% with intelligent classification
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <strong className="font-medium">Contract Analysis Automation:</strong> Identify risks and opportunities in contracts with AI-powered review
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <strong className="font-medium">Legal Knowledge Management:</strong> Centralize and make searchable your firm's collective expertise
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <strong className="font-medium">Regulatory Compliance:</strong> Stay ahead of changing regulations with automated monitoring and alerts
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <strong className="font-medium">Secure Client Collaboration:</strong> Confidential, efficient communication platforms for legal teams and clients
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[color:var(--card)]/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-lg mb-8">
              Let's discuss how our LegalTech solutions can help you improve efficiency and accuracy while reducing costs.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Book a LegalTech Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default LegalTechPage;