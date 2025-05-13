import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "wouter";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";

const HealthcareExpertisePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Healthcare Expertise | NextGenixTech</title>
        <meta name="description" content="HIPAA-compliant AI platforms that enhance patient care while ensuring data security." />
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
              Healthcare Expertise
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl text-[color:var(--muted-foreground)] mb-8"
            >
              HIPAA-compliant AI platforms that enhance patient care
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
                Transforming Healthcare with Compliant AI Solutions
              </h2>
              <p className="text-lg mb-6">
                Healthcare organizations face unique challenges: improving patient outcomes while managing costs, ensuring regulatory compliance, and protecting sensitive data. NextGenixTech brings deep healthcare domain expertise to help providers, payers, and life sciences companies navigate this complex landscape.
              </p>
              <p className="text-lg mb-6">
                Our HIPAA-compliant AI platforms are designed specifically for healthcare workflows, enabling faster diagnostics, personalized care plans, and operational efficiencies without compromising patient privacy or data security.
              </p>
              <p className="text-lg">
                By combining healthcare domain knowledge with cutting-edge AI capabilities, we deliver solutions that address the specific needs of medical professionals while maintaining the highest standards of compliance and security.
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
                    <strong className="font-medium">Patient Triage Automation:</strong> AI-powered systems that prioritize care based on clinical need
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <strong className="font-medium">Clinical Decision Support:</strong> Evidence-based recommendations to assist healthcare providers
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <strong className="font-medium">Secure Health Data Platforms:</strong> HIPAA-compliant infrastructure for sensitive patient information
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <strong className="font-medium">Predictive Analytics:</strong> Identify at-risk patients before conditions worsen
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <strong className="font-medium">Operational Efficiency:</strong> Streamline administrative workflows to reduce costs and improve care
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
              Ready to Transform Your Healthcare Operations?
            </h2>
            <p className="text-lg mb-8">
              Let's discuss how our healthcare expertise can help you improve patient outcomes while maintaining compliance.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Schedule a Healthcare Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HealthcareExpertisePage;