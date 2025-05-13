import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "wouter";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const DigitalMarketingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const solutions = [
    {
      icon: "fa-chart-line",
      title: "Data-Driven Strategy",
      description: "AI-powered analytics that transform raw data into actionable marketing insights and measurable business outcomes."
    },
    {
      icon: "fa-bullseye",
      title: "Precision Targeting",
      description: "Advanced audience segmentation that delivers your message to the right people at the right time across all channels."
    },
    {
      icon: "fa-robot",
      title: "AI Content Optimization",
      description: "Machine learning algorithms that continuously refine your content strategy based on real-time performance data."
    },
    {
      icon: "fa-chart-pie",
      title: "ROI-Focused Reporting",
      description: "Transparent metrics that connect marketing activities directly to revenue generation and business growth."
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
        <title>Digital Marketing & Social Media | NextGenixTech</title>
        <meta name="description" content="AI-powered digital marketing solutions that deliver real leads and measurable ROI, not just vanity metrics." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-14 pb-24 md:pt-20 md:pb-32 relative overflow-hidden bg-[color:var(--background)] dark:bg-[color:var(--card)]/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--background)] via-[color:var(--card)] to-[color:var(--card)] -z-10"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 -z-10 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover"></div>
        
        <div className="container-custom">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
            >
              Digital Marketing Solutions
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight text-[color:var(--foreground)] leading-tight mb-6"
            >
              Results-Driven <span className="bg-gradient-to-r from-primary to-secondary text-gradient">Digital Marketing</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-[color:var(--muted-foreground)] leading-relaxed mb-8 max-w-3xl"
            >
              In today's crowded digital landscape, we deliver marketing strategies that generate real business outcomes, not just vanity metrics. Our AI-powered approach focuses on leads, conversions, and revenue.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact">
                <a className="px-6 py-3 rounded-2xl bg-primary text-white font-medium shadow-md hover:bg-primary/90 transition-colors duration-300">
                  Book Your Free Marketing Audit
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
            <h2 className="text-3xl font-heading font-bold mb-6">Marketing Challenges We Solve</h2>
            <p className="text-warm-gray-300 max-w-3xl mx-auto">Today's businesses face significant obstacles in creating effective digital marketing strategies.</p>
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
                <i className="fas fa-chart-bar text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Vanity Metrics</h3>
              <p className="text-warm-gray-300">Too many companies focus on likes and impressions instead of metrics that actually drive business growth.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-neutral-800 rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-primary/20 flex items-center justify-center rounded-2xl mb-4">
                <i className="fas fa-bullhorn text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Digital Noise</h3>
              <p className="text-warm-gray-300">Standing out in an increasingly crowded digital landscape requires more than just creative content.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-neutral-800 rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-primary/20 flex items-center justify-center rounded-2xl mb-4">
                <i className="fas fa-dollar-sign text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">ROI Uncertainty</h3>
              <p className="text-warm-gray-300">Many businesses struggle to connect their marketing spend directly to revenue generation and business outcomes.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-[color:var(--background)] dark:bg-[color:var(--card)]/10">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[color:var(--foreground)] mb-4">Our Digital Marketing Solutions</h2>
            <p className="text-[color:var(--muted-foreground)] max-w-3xl mx-auto">AI-powered marketing strategies that deliver measurable business results.</p>
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
      
      {/* Services Offered Section */}
      <section className="py-16 md:py-24 bg-[color:var(--card)]/30">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">Comprehensive Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[color:var(--card)] p-6 rounded-xl border border-[color:var(--border)] shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-hashtag text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Social Media Strategy</h3>
              <p className="text-[color:var(--muted-foreground)]">Data-driven social media campaigns that build engagement and drive conversions across all major platforms.</p>
            </div>
            <div className="bg-[color:var(--card)] p-6 rounded-xl border border-[color:var(--border)] shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-search text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">SEO & Content Marketing</h3>
              <p className="text-[color:var(--muted-foreground)]">AI-optimized content strategies that improve organic visibility and establish thought leadership in your industry.</p>
            </div>
            <div className="bg-[color:var(--card)] p-6 rounded-xl border border-[color:var(--border)] shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-ad text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">PPC & Paid Media</h3>
              <p className="text-[color:var(--muted-foreground)]">Precision-targeted ad campaigns with continuous optimization for maximum ROI across search and social platforms.</p>
            </div>
            <div className="bg-[color:var(--card)] p-6 rounded-xl border border-[color:var(--border)] shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-envelope text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Email Marketing Automation</h3>
              <p className="text-[color:var(--muted-foreground)]">Personalized email journeys with AI-driven segmentation that nurture leads and drive conversions.</p>
            </div>
            <div className="bg-[color:var(--card)] p-6 rounded-xl border border-[color:var(--border)] shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-analytics text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Analytics & Attribution</h3>
              <p className="text-[color:var(--muted-foreground)]">Advanced tracking and attribution models that connect marketing activities directly to revenue generation.</p>
            </div>
            <div className="bg-[color:var(--card)] p-6 rounded-xl border border-[color:var(--border)] shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-funnel-dollar text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Conversion Rate Optimization</h3>
              <p className="text-[color:var(--muted-foreground)]">Data-driven testing and optimization that turns more of your visitors into customers and maximizes marketing ROI.</p>
            </div>
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
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-4">3.5x ROI increase for B2B SaaS company</h2>
                <p className="text-neutral-700 mb-6">A growing B2B software company was struggling with high customer acquisition costs and low conversion rates from their digital marketing efforts.</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3 text-lg"></i>
                    <div>
                      <h4 className="font-semibold">Challenge</h4>
                      <p className="text-neutral-700">Despite significant ad spend, the company was generating leads that rarely converted to customers, resulting in poor marketing ROI.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3 text-lg"></i>
                    <div>
                      <h4 className="font-semibold">Solution</h4>
                      <p className="text-neutral-700">We implemented our AI-driven marketing approach, including precision audience targeting, content optimization, and a complete funnel redesign.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3 text-lg"></i>
                    <div>
                      <h4 className="font-semibold">Result</h4>
                      <p className="text-neutral-700">3.5x increase in marketing ROI, 42% reduction in cost per acquisition, and 67% improvement in lead-to-customer conversion rate.</p>
                    </div>
                  </div>
                </div>
                
                <Link href="/contact">
                  <a className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-2xl text-white bg-primary hover:bg-primary/90 transition-colors">
                    Book Your Free Marketing Audit
                  </a>
                </Link>
              </div>
              
              <div className="bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center h-64 lg:h-auto"></div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
    </motion.div>
  );
};

export default DigitalMarketingPage;