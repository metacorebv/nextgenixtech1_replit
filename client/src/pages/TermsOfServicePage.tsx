import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useEffect } from "react";

const TermsOfServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Terms of Service - NextGenixTech</title>
        <meta name="description" content="NextGenixTech's Terms of Service outline the rules and guidelines for using our website and services." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-14 pb-10 md:pt-20 md:pb-16 relative overflow-hidden bg-[color:var(--background)] dark:bg-[color:var(--card)]/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--background)] via-[color:var(--card)] to-[color:var(--card)] -z-10"></div>
        
        <div className="container-custom">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight text-[color:var(--foreground)] leading-tight mb-6"
            >
              Terms of Service
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-[color:var(--muted-foreground)] leading-relaxed mb-8 max-w-3xl"
            >
              <p>Effective Date: {currentDate}</p>
              <p>Last Updated: {currentDate}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-[color:var(--background)] dark:bg-[color:var(--card)]/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:font-heading prose-headings:font-bold prose-p:text-[color:var(--muted-foreground)] prose-li:text-[color:var(--muted-foreground)]">
            <p>
              Welcome to NextGenixTech. These Terms of Service ("Terms") govern your access to and use of our website, services, and any related content or communications. By using our website or engaging our services, you agree to these Terms in full.
            </p>
            
            <p>
              If you do not agree with these Terms, please refrain from using our website or services.
            </p>
            
            <hr className="my-8" />
            
            <h2 className="text-2xl">1. Use of Services</h2>
            <p>You agree to use our website and services only for lawful purposes. You must not use the site in a way that:</p>
            <ul>
              <li>Violates any local, state, national, or international law or regulation</li>
              <li>Is fraudulent, harmful, or infringes on any intellectual property</li>
              <li>Attempts to gain unauthorized access to our systems</li>
            </ul>
            
            <hr className="my-8" />
            
            <h2 className="text-2xl">2. Service Description</h2>
            <p>NextGenixTech provides IT consultancy services with a focus on AI-native solutions, cloud-smart architecture, and secure delivery models. Specific services may include:</p>
            <ul>
              <li>Cloud optimization and architecture audits</li>
              <li>AI strategy and LLM-powered development</li>
              <li>Outcome-based delivery models</li>
              <li>Security-embedded infrastructure and DevSecOps</li>
            </ul>
            <p>All services will be defined and agreed upon through a written contract or agreement prior to initiation.</p>
            
            <hr className="my-8" />
            
            <h2 className="text-2xl">3. Accountability and Access</h2>
            <p>You may need to provide contact details to engage with our services or schedule consultations via Calendly. You agree that:</p>
            <ul>
              <li>Any information you provide is accurate and up to date</li>
              <li>You will not impersonate another person or misrepresent your affiliation</li>
              <li>You are solely responsible for your communication and content</li>
            </ul>
            
            <hr className="my-8" />
            
            <h2 className="text-2xl">4. Intellectual Property</h2>
            <p>All content on this site, including logos, trademarks, service descriptions, visual designs, and code, are the property of NextGenixTech or our licensors. You may not:</p>
            <ul>
              <li>Copy, modify, or distribute our content</li>
              <li>Use our branding or trademarks without explicit permission</li>
            </ul>
            
            <hr className="my-8" />
            
            <h2 className="text-2xl">5. Third-Party Tools and Links</h2>
            <p>Our website integrates or links to third-party platforms and services for convenience, such as:</p>
            <ul>
              <li>Calendly – for scheduling meetings</li>
              <li>Slack & Discord – for client collaboration or community engagement</li>
              <li>LinkedIn – for professional networking</li>
            </ul>
            <p>We are not responsible for the content, functionality, or privacy practices of these platforms. Please review their respective terms before using them.</p>
            
            <hr className="my-8" />
            
            <h2 className="text-2xl">6. Confidentiality</h2>
            <p>Both parties agree to maintain confidentiality regarding non-public information shared during project execution. This includes any technical documentation, business insights, or strategic data unless disclosure is required by law.</p>
            
            <hr className="my-8" />
            
            <h2 className="text-2xl">7. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law:</p>
            <ul>
              <li>NextGenixTech shall not be liable for any indirect, incidental, or consequential damages</li>
              <li>We do not guarantee uninterrupted or error-free service</li>
              <li>Total liability in any case shall not exceed the fees paid to us in the previous 3 months</li>
            </ul>
            
            <hr className="my-8" />
            
            <h2 className="text-2xl">8. GDPR Compliance</h2>
            <p>If you are located in the EU or provide data related to EU citizens, we comply with the General Data Protection Regulation (GDPR). See our Privacy Policy for your rights regarding access, correction, deletion, and data portability.</p>
            
            <hr className="my-8" />
            
            <h2 className="text-2xl">9. Termination</h2>
            <p>We reserve the right to suspend or terminate your access to our services or website if you:</p>
            <ul>
              <li>Breach any of these Terms</li>
              <li>Engage in activities that harm our business, clients, or systems</li>
              <li>Misuse the services beyond the agreed scope</li>
            </ul>
            
            <hr className="my-8" />
            
            <h2 className="text-2xl">10. Governing Law</h2>
            <p>These Terms are governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.</p>
            
            <hr className="my-8" />
            
            <h2 className="text-2xl">11. Changes to Terms</h2>
            <p>We may update these Terms periodically. Any updates will be effective upon posting to our website. Continued use after changes means you accept the revised Terms.</p>
            
            <hr className="my-8" />
            
            <h2 className="text-2xl">12. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>📧 Email: connect.nextgenixtech@gmail.com</p>
            <p>🌐 Website: <a href="https://nextgenixtech.com" className="text-primary hover:text-primary/80 transition-colors">https://nextgenixtech.com</a></p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default TermsOfServicePage;