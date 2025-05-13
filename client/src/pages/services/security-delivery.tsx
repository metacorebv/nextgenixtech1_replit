import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";

const SecurityDeliveryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Security-Embedded Delivery | NextGenixTech</title>
        <meta name="description" content="Protection built in from day one, not bolted on later. Our DevSecOps-first approach ensures security at every stage of development." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-[color:var(--card)]/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
            >
              Enterprise Security
            </motion.div>
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
                In today's evolving threat landscape, security can't be an add-on feature. NextGenixTech embeds security principles into every stage of development and delivery, creating systems that are inherently resilient against sophisticated attacks.
              </p>
              <p className="text-lg mb-6">
                Our DevSecOps approach integrates security testing, compliance verification, and threat modeling directly into CI/CD pipelines. This ensures vulnerabilities are caught early, when they're least expensive to fix, and prevents security from becoming a bottleneck to innovation.
              </p>
              <p className="text-lg">
                By automating security checks and compliance verification, we help organizations maintain robust protection while accelerating delivery timelines—proving that security and speed can coexist in modern development environments.
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
                    <strong className="font-medium">Reduced Security Incidents:</strong> Catch and remediate vulnerabilities before they reach production, reducing breach risk by up to 87%
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <strong className="font-medium">Automated Compliance:</strong> Continuous verification against regulatory frameworks (GDPR, HIPAA, SOC2, PCI-DSS) with real-time alerts
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <strong className="font-medium">Zero-Trust Architecture:</strong> Implement modern security principles that verify every access attempt, reducing lateral movement risk
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <strong className="font-medium">Faster Delivery:</strong> Security that accelerates rather than impedes development velocity, with 35% faster release cycles
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <strong className="font-medium">Reduced Costs:</strong> Lower remediation costs by finding issues earlier in the development lifecycle, saving up to 60% on security fixes
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-[color:var(--card)]/30">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">Our Security Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[color:var(--card)] p-6 rounded-xl border border-[color:var(--border)] shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Threat Modeling</h3>
              <p className="text-[color:var(--muted-foreground)]">Proactive identification of security risks in system architecture before development begins, using STRIDE and DREAD methodologies.</p>
            </div>
            <div className="bg-[color:var(--card)] p-6 rounded-xl border border-[color:var(--border)] shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">CI/CD Security Integration</h3>
              <p className="text-[color:var(--muted-foreground)]">Automated security scanning and testing integrated directly into your development pipeline, with policy-as-code enforcement.</p>
            </div>
            <div className="bg-[color:var(--card)] p-6 rounded-xl border border-[color:var(--border)] shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Compliance Automation</h3>
              <p className="text-[color:var(--muted-foreground)]">Continuous monitoring and reporting for regulatory compliance, with automated evidence collection and documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 md:py-24 bg-[color:var(--background)]">
        <div className="container-custom">
          <div className="bg-[color:var(--card)] rounded-2xl shadow-lg overflow-hidden border border-[color:var(--border)]">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent mb-6">
                  Case Study
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Reduced security incidents by 92% for financial services firm
                </h2>
                <p className="text-[color:var(--muted-foreground)] mb-6">
                  A leading financial services provider was struggling with frequent security incidents that were disrupting operations and eroding customer trust.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3 text-lg"></i>
                    <div>
                      <h4 className="font-semibold">Challenge</h4>
                      <p className="text-[color:var(--muted-foreground)]">The company was experiencing an average of 25 security incidents per quarter, with remediation costs exceeding $2.5M annually.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3 text-lg"></i>
                    <div>
                      <h4 className="font-semibold">Solution</h4>
                      <p className="text-[color:var(--muted-foreground)]">We implemented our security-embedded delivery model with automated threat detection, compliance monitoring, and developer security training.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3 text-lg"></i>
                    <div>
                      <h4 className="font-semibold">Result</h4>
                      <p className="text-[color:var(--muted-foreground)]">Security incidents decreased by 92%, compliance reporting time reduced by 75%, and development velocity increased by 40% within 6 months.</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                    Book a Security Assessment
                  </Button>
                </Link>
              </div>
              
              <div className="bg-[url('https://images.unsplash.com/photo-1563986768494-4dee9b2d98c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center h-64 lg:h-auto"></div>
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

      <ContactSection />
    </motion.div>
  );
};

export default SecurityDeliveryPage;