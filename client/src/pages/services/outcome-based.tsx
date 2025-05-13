import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "wouter";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";

const OutcomeBasedPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const benefits = [
    {
      icon: "fa-chart-line",
      title: "Performance-Based Contracts",
      description: "Billing structures tied directly to measurable business outcomes, not just time and materials."
    },
    {
      icon: "fa-bullseye",
      title: "KPI Definition & Tracking",
      description: "Clear metrics established at project start with transparent tracking throughout the engagement."
    },
    {
      icon: "fa-sync",
      title: "Continuous Optimization",
      description: "Ongoing refinement of solutions based on performance data to maximize business impact."
    },
    {
      icon: "fa-handshake",
      title: "Aligned Incentives",
      description: "Our success is directly tied to your success, creating true partnership rather than vendor relationships."
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
        <title>Outcome-Based Engagements - NextGenixTech</title>
        <meta name="description" content="KPI-aligned billing and delivery that ensures our success is tied directly to yours. We bill by results, not hours." />
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
              Engagement Model
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight text-[color:var(--foreground)] leading-tight mb-6"
            >
              Outcome-Based <span className="bg-gradient-to-r from-primary to-secondary text-gradient">Engagements</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-[color:var(--muted-foreground)] leading-relaxed mb-8 max-w-3xl"
            >
              We bill by results, not hours. Our success is directly tied to your success through KPI-aligned billing and delivery models.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-[color:var(--background)] dark:bg-[color:var(--card)]/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-[color:var(--foreground)] mb-6">A New Approach to Consulting</h2>
            
            <div className="space-y-6 text-[color:var(--muted-foreground)]">
              <p>
                Traditional IT consulting models are fundamentally misaligned with client interests. When consultants bill by the hour, they're incentivized to extend projects and maximize billable time—not to deliver results efficiently.
              </p>
              
              <p>
                Our outcome-based engagement model flips this dynamic. We establish clear, measurable KPIs at the start of every project and tie our compensation directly to achieving those metrics. This creates true alignment between our teams and ensures we're focused on delivering real business value, not just billable hours.
              </p>
              
              <p>
                By sharing both risk and reward, we become genuine partners in your success. This approach drives us to work more efficiently, innovate more boldly, and focus relentlessly on the outcomes that matter most to your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-[color:var(--background)] dark:bg-[color:var(--card)]/10">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[color:var(--foreground)] mb-4">Key Benefits</h2>
            <p className="text-[color:var(--muted-foreground)] max-w-3xl mx-auto">Our outcome-based approach delivers measurable advantages over traditional consulting models.</p>
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
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-4">25% revenue increase for e-commerce platform</h2>
                <p className="text-neutral-700 mb-6">An e-commerce company was struggling with cart abandonment and conversion rates despite investing heavily in traditional consulting services.</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3 text-lg"></i>
                    <div>
                      <h4 className="font-semibold">Challenge</h4>
                      <p className="text-neutral-700">Previous consultants had billed over $500K for recommendations that failed to move key business metrics.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3 text-lg"></i>
                    <div>
                      <h4 className="font-semibold">Solution</h4>
                      <p className="text-neutral-700">We implemented an outcome-based engagement focused on conversion rate and average order value, with our fees tied directly to improvements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3 text-lg"></i>
                    <div>
                      <h4 className="font-semibold">Result</h4>
                      <p className="text-neutral-700">Conversion rate increased by 32%, average order value by 18%, resulting in 25% revenue growth within 6 months.</p>
                    </div>
                  </div>
                </div>
                
                <Link href="/contact">
                  <a className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-2xl text-white bg-primary hover:bg-primary/90 transition-colors">
                    Explore Outcome-Based Models
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

export default OutcomeBasedPage;
