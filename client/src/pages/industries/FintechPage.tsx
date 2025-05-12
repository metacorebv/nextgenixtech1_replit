import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "wouter";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";

const FintechPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const solutions = [
    {
      icon: "fa-shield-alt",
      title: "Real-time Fraud Detection",
      description: "AI-powered systems that detect and prevent fraudulent transactions before they occur, reducing losses and improving customer trust."
    },
    {
      icon: "fa-file-contract",
      title: "Automated Regulatory Compliance",
      description: "Smart compliance solutions that continuously monitor transactions and flag potential regulatory issues before they become problems."
    },
    {
      icon: "fa-tachometer-alt",
      title: "Low-Latency Transaction Processing",
      description: "High-performance infrastructure designed to minimize transaction processing times while maintaining security and compliance."
    },
    {
      icon: "fa-chart-line",
      title: "AI-Driven Risk Assessment",
      description: "Advanced predictive analytics that assess risk factors in real-time, enabling more informed decision-making."
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
        <title>Fintech Solutions - NextGenixTech</title>
        <meta name="description" content="AI-Driven Fintech Solutions for Compliance and Speed - Tackle fraud detection, regulatory reporting, and transaction latency." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-14 pb-24 md:pt-20 md:pb-32 relative overflow-hidden bg-[color:var(--background)] dark:bg-[color:var(--card)]/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--background)] via-[color:var(--card)] to-[color:var(--card)] -z-10"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 -z-10 bg-[url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover"></div>
        
        <div className="container-custom">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
            >
              Fintech Industry Solutions
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight text-[color:var(--foreground)] leading-tight mb-6"
            >
              AI-Driven Fintech Solutions for <span className="bg-gradient-to-r from-primary to-secondary text-gradient">Compliance and Speed</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-[color:var(--muted-foreground)] leading-relaxed mb-8 max-w-3xl"
            >
              In today's fast-paced financial landscape, institutions need solutions that balance speed, security, and regulatory compliance. Our AI-first approach helps fintech companies overcome these challenges while driving innovation.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact">
                <a className="px-6 py-3 rounded-2xl bg-primary text-white font-medium shadow-md hover:bg-primary/90 transition-colors duration-300">
                  Book Your Fintech Audit
                </a>
              </Link>
              <a href="#solutions" className="px-6 py-3 rounded-2xl bg-white text-neutral-900 font-medium shadow-md hover:bg-warm-gray-100 transition-colors duration-300">
                Explore Solutions
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Pain Points Section */}
      <section className="py-16 bg-neutral-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-6">Fintech Challenges We Solve</h2>
            <p className="text-warm-gray-300 max-w-3xl mx-auto">Financial institutions face unique challenges that require specialized technology solutions.</p>
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
                <i className="fas fa-exclamation-triangle text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Fraud Prevention</h3>
              <p className="text-warm-gray-300">Financial fraud is increasingly sophisticated, costing institutions billions annually and eroding customer trust.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-neutral-800 rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-primary/20 flex items-center justify-center rounded-2xl mb-4">
                <i className="fas fa-clipboard-list text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Regulatory Burden</h3>
              <p className="text-warm-gray-300">Complex and frequently changing regulations require constant monitoring and create significant operational overhead.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-neutral-800 rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-primary/20 flex items-center justify-center rounded-2xl mb-4">
                <i className="fas fa-bolt text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Transaction Latency</h3>
              <p className="text-warm-gray-300">In a world where milliseconds matter, high-latency transaction processing can cost opportunities and customers.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-[color:var(--background)] dark:bg-[color:var(--card)]/10">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[color:var(--foreground)] mb-4">Our Fintech Solutions</h2>
            <p className="text-[color:var(--muted-foreground)] max-w-3xl mx-auto">Cutting-edge technology solutions designed specifically for the challenges facing financial institutions.</p>
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
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-4">Reduced compliance time by 60%</h2>
                <p className="text-neutral-700 mb-6">A leading online payment provider was struggling with regulatory compliance overhead that was slowing down their ability to innovate and scale.</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3 text-lg"></i>
                    <div>
                      <h4 className="font-semibold">Challenge</h4>
                      <p className="text-neutral-700">Manual compliance processes required 20+ full-time employees and was still causing delays in service rollouts.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3 text-lg"></i>
                    <div>
                      <h4 className="font-semibold">Solution</h4>
                      <p className="text-neutral-700">We implemented an AI-powered compliance monitoring system with automated reporting and real-time alerts.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3 text-lg"></i>
                    <div>
                      <h4 className="font-semibold">Result</h4>
                      <p className="text-neutral-700">60% reduction in compliance processing time, 75% decrease in compliance-related incidents, and the ability to redeploy 12 team members to growth initiatives.</p>
                    </div>
                  </div>
                </div>
                
                <Link href="/contact">
                  <a className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-2xl text-white bg-primary hover:bg-primary/90 transition-colors">
                    Book Your Fintech Audit
                  </a>
                </Link>
              </div>
              
              <div className="bg-[url('https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center h-64 lg:h-auto"></div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
    </motion.div>
  );
};

export default FintechPage;
