import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useAnimation, useInView } from "framer-motion";

interface Resource {
  image: string;
  categories: string[];
  title: string;
  description: string;
}

const ResourcesSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
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

  const resources: Resource[] = [
    {
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      categories: ["ai", "healthcare"],
      title: "AI Readiness in Healthcare: A 2025 Roadmap",
      description: "How healthcare providers can prepare for the next generation of AI-powered medical solutions."
    },
    {
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      categories: ["cloud", "security"],
      title: "Cloud Cost Optimization Playbook",
      description: "Practical strategies to reduce cloud spending without compromising performance or security."
    },
    {
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      categories: ["ai", "security"],
      title: "Securing AI Systems: The 2025 Threat Landscape",
      description: "Emerging threats and defense strategies for AI-powered systems in the enterprise."
    }
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "ai", label: "AI" },
    { id: "cloud", label: "Cloud" },
    { id: "security", label: "Security" },
    { id: "healthcare", label: "Healthcare" }
  ];

  const filteredResources = resources.filter(resource => 
    activeFilter === "all" || resource.categories.includes(activeFilter)
  );

  return (
    <section className="py-20 bg-[color:var(--background)] dark:bg-[color:var(--card)]/10">
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
            className="text-3xl md:text-4xl font-heading font-bold text-[color:var(--foreground)]"
          >
            Latest <span className="bg-gradient-to-r from-primary to-secondary text-gradient">Insights</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="mt-4 text-[color:var(--muted-foreground)] text-base md:text-lg max-w-2xl mx-auto"
          >
            Expert perspectives on AI, cloud optimization, and digital transformation.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="mb-8 flex flex-wrap justify-center gap-3"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                activeFilter === filter.id 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-white text-neutral-900 hover:bg-warm-gray-100'
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${resource.image})` }}
              ></div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex gap-2 mb-3">
                  {resource.categories.map((category, catIndex) => (
                    <span key={catIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full capitalize">
                      {category}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-neutral-900">{resource.title}</h3>
                <p className="text-neutral-700 mb-4 flex-grow">{resource.description}</p>
                <a href="#" className="text-primary hover:text-primary/80 font-medium flex items-center transition-colors mt-auto">
                  Read more
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link href="/resources">
            <a className="inline-flex items-center px-6 py-3 rounded-2xl bg-white text-neutral-900 font-medium shadow-md hover:bg-warm-gray-100 transition-colors">
              View All Resources
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourcesSection;
