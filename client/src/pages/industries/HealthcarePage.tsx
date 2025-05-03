import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "wouter";
import ContactSection from "@/components/ContactSection";

const HealthcarePage = () => {
  const solutions = [
    {
      icon: "fa-user-md",
      title: "Patient Triage Automation",
      description: "AI-powered triage systems that prioritize patient care based on medical needs, reducing wait times and improving outcomes."
    },
    {
      icon: "fa-brain",
      title: "Clinical Decision Support",
      description: "Intelligent systems that analyze patient data to provide clinicians with evidence-based recommendations for diagnosis and treatment."
    },
    {
      icon: "fa-laptop-medical",
      title: "HIPAA-Compliant Data Platforms",
      description: "Secure, scalable platforms for healthcare data management that ensure compliance while enabling powerful analytics."
    },
    {
      icon: "fa-heartbeat",
      title: "Remote Patient Monitoring",
      description: "Connected solutions that allow healthcare providers to monitor patients remotely, improving care for chronic conditions and reducing hospital readmissions."
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
        <title>Healthcare Solutions - NextGenixTech</title>
        <meta name="description" content="HIPAA-Compliant AI to Power Modern Healthcare - Enhance patient engagement and improve diagnostics with secure solutions." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-14 pb-24 md:pt-20 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-gray-100 via-warm-gray-50 to-warm-gray-50 -z-10"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 -z-10 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover"></div>
        
        <div className="container-custom">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
            >
              Healthcare Industry Solutions
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight text-neutral-900 leading-tight mb-6"
            >
              HIPAA-Compliant AI to Power <span className="text-primary">Modern Healthcare</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-8 max-w-3xl"
            >
              Healthcare providers face increasing pressure to improve patient outcomes while reducing costs. Our AI-first solutions help healthcare organizations enhance patient care, streamline operations, and maintain strict regulatory compliance.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact">
                <a className="px-6 py-3 rounded-2xl bg-primary text-white font-medium shadow-md hover:bg-primary/90 transition-colors duration-300">
                  Explore Healthcare AI Solutions
                </a>
              </Link>
              <a href="#solutions" className="px-6 py-3 rounded-2xl bg-white text-neutral-900 font-medium shadow-md hover:bg-warm-gray-100 transition-colors duration-300">
                View Solutions
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Pain Points Section */}
      <section className="py-16 bg-neutral-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-6">Healthcare Challenges We Solve</h2>
            <p className="text-warm-gray-300 max-w-3xl mx-auto">Healthcare organizations face unique challenges that require specialized technology solutions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-neutral-800 rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-primary/20 flex items-center justify-center rounded-2xl mb-4">
                <i className="fas fa-user-injured text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Patient Engagement</h3>
              <p className="text-warm-gray-300">Maintaining consistent patient engagement throughout the care journey is difficult but essential for positive outcomes.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-neutral-800 rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-primary/20 flex items-center justify-center rounded-2xl mb-4">
                <i className="fas fa-stethoscope text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Diagnostic Accuracy</h3>
              <p className="text-warm-gray-300">Medical errors and missed diagnoses continue to be a significant challenge in healthcare delivery.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-neutral-800 rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-primary/20 flex items-center justify-center rounded-2xl mb-4">
                <i className="fas fa-lock text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Data Security & Compliance</h3>
              <p className="text-warm-gray-300">Maintaining HIPAA compliance while leveraging advanced analytics and AI capabilities is increasingly complex.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-warm-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">Our Healthcare Solutions</h2>
            <p className="text-neutral-700 max-w-3xl mx-auto">AI-powered solutions designed specifically for the challenges facing modern healthcare providers.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index % 2) }}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-2xl mb-6">
                  <i className={`fas ${solution.icon} text-primary text-2xl`}></i>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{solution.title}</h3>
                <p className="text-neutral-700">{solution.description}</p>
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
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-4">Served 1,000+ patients/day with AI tool</h2>
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
                    Explore Healthcare AI Solutions
                  </a>
                </Link>
              </div>
              
              <div className="bg-[url('https://images.unsplash.com/photo-1516549655669-df99a90367ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center h-64 lg:h-auto"></div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
    </motion.div>
  );
};

export default HealthcarePage;
