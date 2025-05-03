import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "wouter";

interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const ServicesSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const services: ServiceItem[] = [
    {
      id: "cloud",
      icon: "fa-cloud",
      title: "Cloud-Smart, Not Cloud-Hungry",
      description: "FinOps-driven optimization that reduces costs while enhancing performance and scalability.",
      features: [
        "Cost optimization audits",
        "Resource right-sizing",
        "Cloud architecture modernization"
      ]
    },
    {
      id: "ai",
      icon: "fa-brain",
      title: "AI-First, Not Just AI-Enabled",
      description: "LLM-native tools, automation, and governance built to transform your business operations.",
      features: [
        "Custom LLM development",
        "AI workflow automation",
        "AI ethics and governance frameworks"
      ]
    },
    {
      id: "outcome",
      icon: "fa-chart-pie",
      title: "Outcome-Based Engagements",
      description: "KPI-aligned billing and delivery that ensures our success is tied directly to yours.",
      features: [
        "Performance-based contracts",
        "KPI definition and tracking",
        "Continuous optimization"
      ]
    },
    {
      id: "healthcare",
      icon: "fa-hospital-user",
      title: "Healthcare Expertise",
      description: "HIPAA-compliant AI platforms that enhance patient care while ensuring data security.",
      features: [
        "Patient triage automation",
        "Clinical decision support",
        "Secure health data platforms"
      ]
    },
    {
      id: "legal",
      icon: "fa-balance-scale",
      title: "LegalTech Solutions",
      description: "E-discovery automation and contract analysis tools that save time and improve accuracy.",
      features: [
        "AI-powered document review",
        "Contract analysis automation",
        "Legal knowledge management"
      ]
    },
    {
      id: "security",
      icon: "fa-shield-alt",
      title: "Security-Embedded Delivery",
      description: "DevSecOps-first pipelines and automated compliance that protect your business at every level.",
      features: [
        "Secure CI/CD pipelines",
        "Automated compliance verification",
        "Zero-trust architecture implementation"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-warm-gray-50">
      <div className="container-custom">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-heading font-bold text-neutral-900"
          >
            Our Services
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="mt-4 text-neutral-700 max-w-2xl mx-auto"
          >
            Strategic technology solutions engineered for business outcomes and future-ready growth.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-2xl mb-6">
                <i className={`fas ${service.icon} text-primary text-2xl`}></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
              <p className="text-neutral-700 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/services#${service.id}`}>
                <a className="text-primary hover:text-primary/80 font-medium flex items-center transition-colors">
                  Learn more
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
