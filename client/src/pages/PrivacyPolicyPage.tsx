import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useEffect } from "react";

const PrivacyPolicyPage = () => {
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
        <title>Privacy Policy - NextGenixTech</title>
        <meta name="description" content="NextGenixTech's Privacy Policy outlines how we collect, use, store, and protect your data when you visit our website or use our services." />
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
              Privacy Policy
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
              NextGenixTech ("we", "us", or "our") is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, store, and protect your data when you visit our website, interact with us, or use our services.
            </p>
            
            <hr className="my-8" />
            
            <h2 className="text-2xl">1. Information We Collect</h2>
            <p>We may collect and process the following types of information:</p>
            
            <h3 className="text-xl">Personal Information You Provide</h3>
            <p>Such as your name, email, phone number, company name, and project-related details when you:</p>
            <ul>
              <li>Submit contact forms</li>
              <li>Schedule a meeting via Calendly</li>
              <li>Subscribe to our newsletter</li>
              <li>Engage with us on services like Slack or Discord (community support)</li>
            </ul>
            
            <h3 className="text-xl">Automatically Collected Information</h3>
            <p>Including IP address, browser type, location data, device information, and browsing behavior via tools like Google Analytics.</p>
            
            <h3 className="text-xl">Cookies and Tracking</h3>
            <p>We use cookies and similar technologies to enhance user experience, analyze trends, and track engagement. You can manage cookie preferences in your browser settings.</p>
            
            <hr className="my-8" />
            
            <h2 className="text-2xl">2. How We Use Your Information</h2>
            <p>We use your data for the following purposes:</p>
            <ul>
              <li>To respond to inquiries or schedule meetings</li>
              <li>To provide consulting services or deliverables</li>
              <li>To improve our website and marketing efforts</li>
              <li>To send updates, offers, or educational content</li>
              <li>To comply with legal and regulatory requirements</li>
            </ul>
            
            <hr className="my-8" />
            
            <h2 className="text-2xl">3. Legal Basis for Processing (GDPR Compliance)</h2>
            <p>If you are located in the European Economic Area (EEA), we process your personal data under one of the following legal bases:</p>
            <ul>
              <li>Your consent (e.g., newsletter opt-in)</li>
              <li>Performance of a contract (e.g., service requests or audits)</li>
              <li>Legitimate interests (e.g., analytics, service improvement)</li>
              <li>Compliance with a legal obligation</li>
            </ul>
            <p>You have the right to withdraw your consent at any time.</p>
            
            <hr className="my-8" />
            
            <h2 className="text-2xl">4. Your Data Protection Rights (GDPR)</h2>
            <p>Under the General Data Protection Regulation (GDPR), you have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Object to processing or request restriction</li>
              <li>Request data portability</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
            <p>To exercise your rights, contact us at connect.nextgenixtech@gmail.com.</p>
            
            <hr className="my-8" />
            
            <h2 className="text-2xl">5. Data Retention</h2>
            <p>We retain personal data only as long as necessary for the purpose it was collected, unless a longer retention period is required by law.</p>
            
            <hr className="my-8" />
            
            <h2 className="text-2xl">6. How We Share Your Information</h2>
            <p>We do not sell your personal data. We may share information with:</p>
            <ul>
              <li>Third-party service providers (e.g., Calendly, Mailchimp, Google Analytics, Discord, Slack)</li>
              <li>Business tools for communication and collaboration</li>
              <li>Legal authorities if required by law</li>
            </ul>
            <p>All third-party providers are contractually obligated to safeguard your data.</p>
            
            <hr className="my-8" />
            
            <h2 className="text-2xl">7. International Transfers</h2>
            <p>Your data may be transferred to, and processed in, countries outside your country of residence, including the United States. We ensure adequate protection measures such as Standard Contractual Clauses (SCCs) when transferring data internationally.</p>
            
            <hr className="my-8" />
            
            <h2 className="text-2xl">8. Third-Party Links</h2>
            <p>Our website may include links or integrations with third-party services such as:</p>
            <ul>
              <li>Calendly (meeting scheduling)</li>
              <li>LinkedIn (social media)</li>
              <li>Slack & Discord (community or project collaboration)</li>
              <li>Google Analytics (data tracking and analytics)</li>
            </ul>
            <p>We are not responsible for their privacy policies or content. Please review their individual privacy statements before engaging.</p>
            
            <hr className="my-8" />
            
            <h2 className="text-2xl">9. Data Security</h2>
            <p>We take appropriate technical and organizational measures to safeguard your personal data. However, no system is entirely secure, and we cannot guarantee 100% protection.</p>
            
            <hr className="my-8" />
            
            <h2 className="text-2xl">10. Children's Privacy</h2>
            <p>We do not knowingly collect data from individuals under the age of 13. If we become aware that a child has provided us with personal data, we will take appropriate steps to delete it.</p>
            
            <hr className="my-8" />
            
            <h2 className="text-2xl">11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. Any updates will be posted on this page with a revised "Last Updated" date.</p>
            
            <hr className="my-8" />
            
            <h2 className="text-2xl">12. Contact Us</h2>
            <p>If you have questions or concerns regarding this policy or your personal data, contact us at:</p>
            <p>📧 Email: connect.nextgenixtech@gmail.com</p>
            <p>🌐 Website: <a href="https://nextgenixtech.com" className="text-primary hover:text-primary/80 transition-colors">https://nextgenixtech.com</a></p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PrivacyPolicyPage;