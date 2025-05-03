import { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

interface Resource {
  image: string;
  categories: string[];
  title: string;
  description: string;
  date: string;
  type: "article" | "whitepaper" | "case-study";
}

const ResourcesPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeTypeFilter, setActiveTypeFilter] = useState("all");

  const resources: Resource[] = [
    {
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      categories: ["ai", "healthcare"],
      title: "AI Readiness in Healthcare: A 2025 Roadmap",
      description: "How healthcare providers can prepare for the next generation of AI-powered medical solutions.",
      date: "June 15, 2025",
      type: "whitepaper"
    },
    {
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      categories: ["cloud", "security"],
      title: "Cloud Cost Optimization Playbook",
      description: "Practical strategies to reduce cloud spending without compromising performance or security.",
      date: "June 10, 2025",
      type: "article"
    },
    {
      image: "https://images.unsplash.com/photo-1558346547-8961a464dfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      categories: ["ai", "security"],
      title: "Securing AI Systems: The 2025 Threat Landscape",
      description: "Emerging threats and defense strategies for AI-powered systems in the enterprise.",
      date: "June 5, 2025",
      type: "article"
    },
    {
      image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      categories: ["fintech", "ai"],
      title: "AI-Driven Fraud Detection in Financial Services",
      description: "How advanced machine learning models are revolutionizing fraud prevention in the financial industry.",
      date: "May 28, 2025",
      type: "case-study"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      categories: ["logistics", "cloud"],
      title: "Supply Chain Optimization Through Cloud Computing",
      description: "Leveraging cloud technologies to create more resilient and efficient supply chains.",
      date: "May 20, 2025",
      type: "whitepaper"
    },
    {
      image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      categories: ["legaltech", "ai"],
      title: "Transforming Legal Discovery with AI",
      description: "Case study on how a leading law firm reduced document review time by 60% using our AI solutions.",
      date: "May 15, 2025",
      type: "case-study"
    }
  ];

  const categoryFilters = [
    { id: "all", label: "All" },
    { id: "ai", label: "AI" },
    { id: "cloud", label: "Cloud" },
    { id: "security", label: "Security" },
    { id: "healthcare", label: "Healthcare" },
    { id: "fintech", label: "Fintech" },
    { id: "logistics", label: "Logistics" },
    { id: "legaltech", label: "LegalTech" }
  ];

  const typeFilters = [
    { id: "all", label: "All Types" },
    { id: "article", label: "Articles" },
    { id: "whitepaper", label: "Whitepapers" },
    { id: "case-study", label: "Case Studies" }
  ];

  const filteredResources = resources.filter(resource => 
    (activeFilter === "all" || resource.categories.includes(activeFilter)) &&
    (activeTypeFilter === "all" || resource.type === activeTypeFilter)
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Resources - NextGenixTech</title>
        <meta name="description" content="Explore our latest insights, whitepapers, and case studies on AI, cloud optimization, and digital transformation." />
      </Helmet>
      
      <div className="pt-14 pb-20 md:pt-20 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-gray-100 via-warm-gray-50 to-warm-gray-50 -z-10"></div>
        
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight text-neutral-900 leading-tight"
            >
              Resources & <span className="text-primary">Insights</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg md:text-xl text-neutral-700 leading-relaxed"
            >
              Expert perspectives on AI, cloud optimization, and digital transformation.
            </motion.p>
          </div>
          
          <div className="mt-12">
            <div className="mb-4 flex flex-wrap justify-center gap-3">
              {typeFilters.map((filter) => (
                <button
                  key={filter.id}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    activeTypeFilter === filter.id 
                      ? 'bg-secondary text-white' 
                      : 'bg-white text-neutral-900 hover:bg-warm-gray-100'
                  }`}
                  onClick={() => setActiveTypeFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            
            <div className="mb-8 flex flex-wrap justify-center gap-3">
              {categoryFilters.map((filter) => (
                <button
                  key={filter.id}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    activeFilter === filter.id 
                      ? 'bg-primary text-white' 
                      : 'bg-white text-neutral-900 hover:bg-warm-gray-100'
                  }`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <section className="py-12 bg-warm-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${resource.image})` }}
                ></div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex gap-2">
                      {resource.categories.slice(0, 2).map((category, catIndex) => (
                        <span key={catIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full capitalize">
                          {category}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-neutral-500">{resource.date}</span>
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">{resource.title}</h3>
                  <p className="text-neutral-700 mb-4 flex-grow">{resource.description}</p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      resource.type === 'article' ? 'bg-warm-gray-100 text-neutral-700' :
                      resource.type === 'whitepaper' ? 'bg-secondary/10 text-secondary' :
                      'bg-accent/10 text-accent-dark'
                    }`}>
                      {resource.type === 'article' ? 'Article' : 
                       resource.type === 'whitepaper' ? 'Whitepaper' : 
                       'Case Study'}
                    </span>
                    
                    <a href="#" className="text-primary hover:text-primary/80 font-medium flex items-center transition-colors">
                      Read more
                      <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredResources.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">No resources found</h3>
              <p className="text-neutral-700">Try adjusting your filters to find what you're looking for.</p>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default ResourcesPage;
