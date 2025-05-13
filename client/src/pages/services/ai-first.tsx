import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "wouter";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";

const AIFirstPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const benefits = [
    {
      icon: "fa-robot",
      title: "Custom LLM Development",
      description: "Purpose-built large language models trained on your specific domain and business needs."
    },
    {
      icon: "fa-cogs",
      title: "AI Workflow Automation",
      description: "Intelligent automation that learns and adapts to your business processes, continuously improving efficiency."
    },
    {
      icon: "fa-shield-alt",
      title: "AI Ethics & Governance",
      description: "Comprehensive frameworks to ensure your AI systems operate ethically, transparently, and in compliance with regulations."
    },
    {
      icon: "fa-chart-network",
      title: "Intelligent Data Integration",
      description: "Connect and harmonize data across your organization to power truly intelligent AI systems."
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
        <title>AI-First Services - NextGenixTech</title>
        <meta name="description" content="AI-First, Not Just AI-Enabled - LLM-native tools, automation, and governance built to transform your business operations." />
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
              AI Services
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight text-[color:var(--foreground)] leading-tight mb-6"
            >
              AI-First, <span className="bg-gradient-to-r from-primary to-secondary text-gradient">Not Just AI-Enabled</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-[color:var(--muted-foreground)] leading-relaxed mb-8 max-w-3xl"
            >
              Transform your business with AI solutions designed from the ground up to leverage the full potential of artificial intelligence, not just add it as an afterthought.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-[color:var(--background)] dark:bg-[color:var(--card)]/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-[color:var(--foreground)] mb-6">The AI-First Difference</h2>
            
            <div className="space-y-6 text-[color:var(--muted-foreground)]">
              <p>
                Many organizations are rushing to implement AI by bolting machine learning capabilities onto existing systems—what we call being "AI-enabled." This approach severely limits the transformative potential of artificial intelligence.
              </p>
              
              <p>
                Our AI-First methodology reimagines your business processes and systems with artificial intelligence at their core. We build LLM-native tools and workflows that don't just automate existing processes but fundamentally transform how work gets done, decisions are made, and value is created.
              </p>
              
              <p>
                By designing systems with AI at their foundation rather than as an add-on, we help organizations achieve breakthrough improvements in efficiency, insight generation, and customer experience. This isn't incremental improvement—it's business transformation powered by truly intelligent systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-[color:var(--background)] dark:bg-[color:var(--card)]/10">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[color:var(--foreground)] mb-4">Key Capabilities</h2>
            <p className="text-[color:var(--muted-foreground)] max-w-3xl mx-auto">Our AI-First approach delivers intelligent systems that learn, adapt, and create value.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index % 2) }}
                className="bg-[color:var(--card)] rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300 border border-[color:var(--border)]"
              >
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-2xl mb-6">
                  <i className={`fas ${benefit.icon} text-primary text-2xl`}></i>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-[color:var(--foreground)]">{benefit.title}</h3>
                <p className="text-[color:var(--muted-foreground)]">{benefit.description}</p>
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
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-4">60% productivity boost with AI-First workflows</h2>
                <p className="text-neutral-700 mb-6">A professional services firm was struggling with information overload and inefficient knowledge management.</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3 text-lg"></i>
                    <div>
                      <h4 className="font-semibold">Challenge</h4>
                      <p className="text-neutral-700">Consultants spent 40% of their time searching for information and recreating existing work.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3 text-lg"></i>
                    <div>
                      <h4 className="font-semibold">Solution</h4>
                      <p className="text-neutral-700">We built an AI-First knowledge system that automatically organized, connected, and surfaced relevant information based on context.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3 text-lg"></i>
                    <div>
                      <h4 className="font-semibold">Result</h4>
                      <p className="text-neutral-700">60% increase in consultant productivity, 45% faster project delivery, and significantly improved knowledge retention and sharing.</p>
                    </div>
                  </div>
                </div>
                
                <Link href="/contact">
                  <a className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-2xl text-white bg-primary hover:bg-primary/90 transition-colors">
                    Explore AI-First Solutions
                  </a>
                </Link>
              </div>
              
              <div className="bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center h-64 lg:h-auto"></div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
    </motion.div>
  );
};

export default AIFirstPage;