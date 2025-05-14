import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  const toggleCalendly = () => {
    console.log("Toggle Calendly clicked, current state:", showCalendly);
    setShowCalendly(!showCalendly);
    
    // If opening the widget, scroll to it after a short delay to allow animation
    if (!showCalendly) {
      setTimeout(() => {
        const element = document.getElementById('calendly-widget');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | NextGenixTech</title>
        <meta name="description" content="Get in touch with NextGenixTech for AI-native IT consulting and digital transformation services." />
      </Head>

      <main className="pt-20 pb-20">
        <section className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Get in Touch</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Have questions about our services or want to discuss your project? Reach out to us.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-card rounded-2xl p-8 shadow-md border border-border/50">
                <h2 className="text-2xl font-heading font-semibold mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-md border border-border/50">
                <h2 className="text-2xl font-heading font-semibold mb-6">Schedule a Meeting</h2>
                <p className="mb-6 text-muted-foreground">
                  Book a 30-minute consultation with our team to discuss your project needs and how we can help.
                </p>
                
                <button 
                  onClick={toggleCalendly}
                  className="w-full px-6 py-3 rounded-xl bg-primary text-white font-medium shadow-md hover:bg-primary/90 transition-all duration-300 mb-6"
                >
                  {showCalendly ? 'Hide Scheduling Calendar' : 'Book a Meeting'}
                </button>
                
                {/* Simple conditional rendering without animation for troubleshooting */}
                {showCalendly && (
                  <div id="calendly-widget" className="mt-4">
                    <iframe
                      src="https://calendly.com/connect-nextgenixtech/30min"
                      width="100%"
                      height="630"
                      frameBorder="0"
                      title="Schedule a meeting with NextGenixTech"
                      className="rounded-xl"
                    ></iframe>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl p-6 shadow-md border border-border/50 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-envelope text-primary text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground">connect.nextgenixtech@gmail.com</p>
              </div>
              
              <div className="bg-card rounded-2xl p-6 shadow-md border border-border/50 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-phone-alt text-primary text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground">+1 (415) 555-7890</p>
              </div>
              
              <div className="bg-card rounded-2xl p-6 shadow-md border border-border/50 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-map-marker-alt text-primary text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-muted-foreground">123 Tech Avenue, Suite 500<br />San Francisco, CA 94103</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;