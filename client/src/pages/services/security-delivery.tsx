import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "wouter";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";

const SecurityDeliveryPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Security-Embedded Delivery | NextGenixTech</title>
        <meta name="description" content="Protection built in from day one, not bolted on later. Our DevSecOps-first approach ensures security at every stage." />
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
              Security-Embedded Delivery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl text-[color:var(--muted-foreground)] mb-8"
            >
              Protection built in from day one, not bolted on later
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
                Security as a Foundation, Not an Afterthought
              </h2>
              <p className="text-lg mb-6">
                In today's threat landscape, security can't be an add-on feature. NextGenixTech embeds security principles into every stage of development and delivery, creating systems that are inherently resilient against evolving threats.
              </p>
              <p className="text-lg mb-6">
                Our DevSecOps approach integrates security testing, compliance verification, and threat modeling directly into CI/CD pipelines. This ensures vulnerabilities are caught early, when they're least expensive to fix, and prevents security from becoming a bottleneck to innovation.
              </p>
              <p className="text-lg">
                By automating security checks and compliance verification, we help organizations maintain robust protection while accelerating delivery timelines—proving that security and speed can coexist.
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
                    <strong className="font-medium">Reduced Security Incidents:</strong> Catch and remediate vulnerabilities before they reach production
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <strong className="font-medium">Automated Compliance:</strong> Continuous verification against regulatory frameworks (GDPR, HIPAA, SOC2, etc.)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <strong className="font-medium">Zero-Trust Architecture:</strong> Implement modern security principles that verify every access attempt
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <strong className="font-medium">Faster Delivery:</strong> Security that accelerates rather than impedes development velocity
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <strong className="font-medium">Reduced Costs:</strong> Lower remediation costs by finding issues earlier in the development lifecycle
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
              Ready to Build Security Into Your Foundation?
            </h2>
            <p className="text-lg mb-8">
              Let's discuss how our security-embedded approach can protect your business while accelerating innovation.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Book a Security Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default SecurityDeliveryPage;