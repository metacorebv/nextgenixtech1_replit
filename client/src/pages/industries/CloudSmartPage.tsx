import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "wouter";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";

const CloudSmartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const solutions = [
    {
      icon: "fa-dollar-sign",
      title: "Cost Optimization",
      description: "Identify and eliminate waste in your cloud spending with our FinOps-driven approach to resource management."
    },
    {
      icon: "fa-tachometer-alt",
      title: "Performance Enhancement",
      description: "Optimize your cloud architecture for maximum performance, ensuring your applications run efficiently at scale."
    },
    {
      icon: "fa-expand-arrows-alt",
      title: "Scalability Planning",
      description: "Design cloud systems that scale intelligently with your business needs, avoiding over-provisioning while ensuring capacity."
    },
    {
      icon: "fa-chart-line",
      title: "ROI Maximization",
      description: "Transform cloud from a cost center to a value driver with strategic resource allocation and optimization."
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
        <title>Cloud-Smart Solutions - NextGenixTech</title>
        <meta name="description" content="Cloud-Smart, Not Cloud-Hungry - FinOps-driven optimization that reduces costs while enhancing performance and scalability." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-14 pb-24 md:pt-20 md:pb-32 relative overflow-hidden bg-[color:var(--background)] dark:bg-[color:var(--card)]/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--background)] via-[color:var(--card)] to-[color:var(--card)] -z-10"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 -z-10 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover"></div>
        
        <div className="container-custom">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
            >
              Cloud-Smart Solutions
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight text-[color:var(--foreground)] leading-tight mb-6"
            >
              Cloud-Smart, <span className="bg-gradient-to-r from-primary to-secondary text-gradient">Not Cloud-Hungry</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-[color:var(--muted-foreground)] leading-relaxed mb-8 max-w-3xl"
            >
              In today's digital landscape, simply migrating to the cloud isn't enough. Our Cloud-Smart approach applies FinOps principles to optimize your infrastructure, ensuring maximum value from every dollar spent.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact">
                <a className="px-6 py-3 rounded-2xl bg-primary text-white font-medium shadow-md hover:bg-primary/90 transition-colors duration-300">
                  Book Your Cloud Audit
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
            <h2 className="text-3xl font-heading font-bold mb-6">Cloud Challenges We Solve</h2>
            <p className="text-warm-gray-300 max-w-3xl mx-auto">Organizations face significant challenges in managing their cloud infrastructure effectively.</p>
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
                <i className="fas fa-money-bill-wave text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Cost Overruns</h3>
              <p className="text-warm-gray-300">Unoptimized cloud resources lead to significant overspending, with many organizations wasting 30% or more of their cloud budget.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-neutral-800 rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-primary/20 flex items-center justify-center rounded-2xl mb-4">
                <i className="fas fa-server text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Performance Issues</h3>
              <p className="text-warm-gray-300">Poorly architected cloud environments result in latency, downtime, and frustrated users, directly impacting business outcomes.</p>
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
              <h3 className="text-xl font-heading font-semibold mb-3">Security Vulnerabilities</h3>
              <p className="text-warm-gray-300">Misconfigured cloud resources create security gaps that can lead to data breaches and compliance violations.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-[color:var(--background)] dark:bg-[color:var(--card)]/10">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[color:var(--foreground)] mb-4">Our Cloud-Smart Solutions</h2>
            <p className="text-[color:var(--muted-foreground)] max-w-3xl mx-auto">Strategic approaches to cloud optimization that deliver measurable business value.</p>
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
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-4">37% cloud cost reduction for SaaS platform</h2>
                <p className="text-neutral-700 mb-6">A growing SaaS company was struggling with escalating cloud costs that were eating into their margins as they scaled.</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3 text-lg"></i>
                    <div>
                      <h4 className="font-semibold">Challenge</h4>
                      <p className="text-neutral-700">Cloud costs were growing faster than revenue, with over-provisioned resources and inefficient architecture.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3 text-lg"></i>
                    <div>
                      <h4 className="font-semibold">Solution</h4>
                      <p className="text-neutral-700">We implemented our Cloud-Smart optimization framework, including right-sizing, reserved instances, and architecture modernization.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3 text-lg"></i>
                    <div>
                      <h4 className="font-semibold">Result</h4>
                      <p className="text-neutral-700">37% reduction in monthly cloud spend while improving application performance by 28% and enabling seamless scaling.</p>
                    </div>
                  </div>
                </div>
                
                <Link href="/contact">
                  <a className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-2xl text-white bg-primary hover:bg-primary/90 transition-colors">
                    Book Your Cloud Audit
                  </a>
                </Link>
              </div>
              
              <div className="bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center h-64 lg:h-auto"></div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
    </motion.div>
  );
};

export default CloudSmartPage;