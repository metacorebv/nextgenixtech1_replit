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
      icon: "fa-handshake",
      title: "Performance-Based Contracts",
      description: "Engagement models where our compensation is directly tied to achieving your business outcomes."
    },
    {
      icon: "fa-bullseye",
      title: "KPI Definition & Tracking",
      description: "Collaborative development of clear, measurable KPIs that align technology initiatives with business goals."
    },
    {
      icon: "fa-sync",
      title: "Continuous Optimization",
      description: "Ongoing refinement of solutions based on performance data to ensure sustained value delivery."
    },
    {
      icon: "fa-chart-bar",
      title: "Value Measurement",
      description: "Sophisticated analytics that quantify the business impact of technology investments."
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
        <meta name="description" content="Outcome-Based Engagements - KPI-aligned billing and delivery that ensures our success is tied directly to yours." />
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
              We bill by results, not hours. Our outcome-based engagement model ensures our success is directly tied to achieving your business objectives.
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
                Traditional IT consulting models bill by the hour, creating a misalignment of incentives—the longer a project takes, the more the consultant earns. This approach often leads to scope creep, budget overruns, and a focus on activity rather than results.
              </p>
              
              <p>
                Our outcome-based engagement model fundamentally changes this dynamic. We work with you to define clear, measurable business outcomes, and our compensation is directly tied to achieving these results. This creates a true partnership where we succeed only when you succeed.
              </p>
              
              <p>
                By aligning our incentives with your business goals, we ensure that every decision, recommendation, and implementation is focused on delivering real value. This isn't just a billing model—it's a commitment to shared success and a fundamentally different way of working together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-[color:var(--background)] dark:bg-[color:var(--card)]/10">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[color:var(--foreground)] mb-4">Key Components</h2>
            <p className="text-[color:var(--muted-foreground)] max-w-3xl mx-auto">Our outcome-based approach ensures alignment, accountability, and measurable results.</p>
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
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-4">25% revenue increase through outcome-based partnership</h2>
                <p className="text-neutral-700 mb-6">A mid-sized retailer was frustrated with technology investments that weren't delivering measurable business results.</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3 text-lg"></i>
                    <div>
                      <h4 className="font-semibold">Challenge</h4>
                      <p className="text-neutral-700">Previous IT initiatives had consumed significant budget without clear ROI or impact on key business metrics.</p>
                    </div>
                  </div
