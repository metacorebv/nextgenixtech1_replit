import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "wouter";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const HealthcareExpertisePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const solutions = [
    {
      icon: "fa-user-md",
      title: "Patient Triage Automation",
      description: "AI-powered systems that prioritize patient care based on clinical need, reducing wait times and improving outcomes."
    },
    {
      icon: "fa-brain",
      title: "Clinical Decision Support",
      description: "Intelligent systems that analyze patient data to provide clinicians with evidence-based recommendations for diagnosis and treatment."
    },
    {
      icon: "fa-shield-alt",
      title: "HIPAA-Compliant Infrastructure",
      description: "Secure, scalable platforms for healthcare data management that ensure compliance while enabling powerful analytics."
    },
    {
      icon: "fa-heartbeat",
      title: "Remote Patient Monitoring",
      description: "Connected solutions that allow healthcare providers to monitor patients remotely, improving care for chronic conditions."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Healthcare Solutions | NextGenixTech</title>
        <meta name="description" content="HIPAA-compliant AI platforms that enhance patient care while ensuring data security and regulatory compliance." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-14 pb-24 md:pt-20 md:pb-32 relative overflow-hidden bg-[color:var(--background)] dark:bg-[color:var(--card)]/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--background)] via-[color:var(--card)] to-[color:var(--card)] -z-10"></div>
        
        <div className="container-custom">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
            >
              Healthcare Solutions
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight text-[color:var(--foreground)] leading-tight mb-6"
            >
              HIPAA-Compliant <span className="bg-gradient-to-r from-primary to-secondary text-gradient">AI for Healthcare</span> Innovation
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-[color:var(--muted-foreground)] leading-relaxed mb-8 max-w-3xl"
            >
              Enhance patient care, streamline clinical workflows, and ensure regulatory compliance with our specialized healthcare technology solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-[color:var(--background)] dark:bg-[color:var(--card)]/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-[color:var(--foreground)] mb-6">Transforming Healthcare with Secure AI Solutions</h2>
            
            <div className="space-y-6 text-[color:var(--muted-foreground)]">
              <p>
                Healthcare organizations face unique challenges: improving patient outcomes while managing costs, ensuring regulatory compliance, and protecting sensitive data. NextGenixTech brings deep healthcare domain expertise to help providers, payers, and life sciences companies navigate this complex landscape.
              </p>
              
              <p>
                Our HIPAA-compliant AI platforms are designed specifically for healthcare workflows, enabling faster diagnostics, personalized care plans, and operational efficiencies without compromising patient privacy or data security.
              </p>
              
              <p>
                By combining healthcare domain knowledge with cutting-edge AI capabilities, we deliver solutions that address the specific needs of medical professionals while maintaining the highest standards of compliance and security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-[color:var(--background)] dark:bg-[color:var(--card)]/10">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[color:var(--foreground)] mb-4">Our Healthcare Solutions</h2>
            <p className="text-[color:var(--muted-foreground)] max-w-3xl mx-auto">AI-powered systems designed specifically for the challenges facing modern healthcare providers.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index % 2) }}
                className="bg-[color:var(--card)] rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300 border border-[color:var(--border)]"
              >
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-2xl mb-6">
                  <i className={`fas ${solution.icon} text-primary text-2xl`}></i>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-[color:var(--foreground)]">{solution.title}</h3>
                <p className="text-[color:var(--muted-foreground)]">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Study Section */}
      <section className="py-20 bg-warm-gray-100">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent mb-6">
                  Case Study
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-4">42% reduction in patient wait times</h2>
                <p className="text-neutral-700 mb-6">A regional hospital system was struggling with emergency department overcrowding and inefficient patient triage, leading to long wait times and decreased patient satisfaction.</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3 text-lg"></i>
                    <div>
                      <h4 className="font-semibold">Challenge</h4>
                      <p className="text-neutral-700">Manual triage processes resulted in wait times averaging 87 minutes and inconsistent prioritization of cases.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3 text-lg"></i>
                    <div>
                      <h4 className="font-semibold">Solution</h4>
                      <p className="text-neutral-700">We implemented an AI-powered triage solution that analyzed patient symptoms, vitals, and medical history to provide rapid risk assessments.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3 text-lg"></i>
                    <div>
                      <h4 className="font-semibold">Result</h4>
                      <p className="text-neutral-700">Average wait times decreased by 42%, the system now successfully manages over 1,000 patients daily, and patient satisfaction scores increased by 37%.</p>
                    </div>
                  </div>
                </div>
                
                <Link href="/contact">
                  <a className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-2xl text-white bg-primary hover:bg-primary/90 transition-colors">
                    Schedule a Healthcare Consultation
                  </a>
                </Link>
              </div>
              
              <div className="bg-[url('https://images.unsplash.com/photo-1516549655669-df99a90367ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center h-64 lg:h-auto"></div>
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
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Schedule a Healthcare Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <ContactSection />
    </motion.div>
  );
};

export default HealthcareExpertisePage;