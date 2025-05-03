import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "wouter";
import ContactSection from "@/components/ContactSection";

const LegaltechPage = () => {
  const solutions = [
    {
      icon: "fa-search-document",
      title: "AI-Powered Document Discovery",
      description: "Advanced machine learning algorithms that analyze and categorize legal documents, dramatically reducing discovery time and improving accuracy."
    },
    {
      icon: "fa-file-signature",
      title: "Automated Contract Analysis",
      description: "Intelligent systems that review contracts to identify risks, obligations, and opportunities with greater accuracy than manual review."
    },
    {
      icon: "fa-tasks",
      title: "Legal Project Management",
      description: "Specialized tools that streamline case management, deadline tracking, and resource allocation for legal teams of all sizes."
    },
    {
      icon: "fa-database",
      title: "Knowledge Management Systems",
      description: "AI-powered repositories that organize, tag, and make searchable the collective knowledge of your legal team."
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
        <title>LegalTech Solutions - NextGenixTech</title>
        <meta name="description" content="Automate Discovery. Improve Accuracy. Scale LegalOps. - Overcome review bottlenecks and document overload with AI-powered legal solutions." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-14 pb-24 md:pt-20 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-gray-100 via-warm-gray-50 to-warm-gray-50 -z-10"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 -z-10 bg-[url('https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover"></div>
        
        <div className="container-custom">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
            >
              LegalTech Industry Solutions
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight text-neutral-900 leading-tight mb-6"
            >
              Automate Discovery. Improve Accuracy. <span className="text-primary">Scale LegalOps.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-8 max-w-3xl"
            >
              Legal professionals face mounting document volumes and increasing client expectations for faster service. Our AI-powered solutions help legal teams overcome these challenges while improving accuracy and reducing costs.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact">
                <a className="px-6 py-3 rounded-2xl bg-primary text-white font-medium shadow-md hover:bg-primary/90 transition-colors duration-300">
                  Request a LegalTech Demo
                </a>
              </Link>
              <a href="#solutions" className="px-6 py-3 rounded-2xl bg-white text-neutral-900 font-medium shadow-md hover:bg-warm-gray-100 transition-colors duration-300">
                See Our Solutions
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Pain Points Section */}
      <section className="py-16 bg-neutral-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-6">Legal Challenges We Solve</h2>
            <p className="text-warm-gray-300 max-w-3xl mx-auto">Legal professionals face unique challenges that our specialized technology solutions address.</p>
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
                <i className="fas fa-hourglass-half text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Review Bottlenecks</h3>
              <p className="text-warm-gray-300">Manual document review creates costly bottlenecks, slowing down case preparation and increasing costs.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-neutral-800 rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-primary/20 flex items-center justify-center rounded-2xl mb-4">
                <i className="fas fa-copy text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Document Overload</h3>
              <p className="text-warm-gray-300">The volume of documents in legal matters continues to grow exponentially, overwhelming traditional approaches.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-neutral-800 rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-primary/20 flex items-center justify-center rounded-2xl mb-4">
                <i className="fas fa-exclamation-triangle text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Error Risk</h3>
              <p className="text-warm-gray-300">Manual review introduces the risk of human error, potentially missing critical information in contracts and documents.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-warm-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">Our LegalTech Solutions</h2>
            <p className="text-neutral-700 max-w-3xl mx-auto">AI-powered tools designed specifically for legal professionals to improve efficiency and accuracy.</p>
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
                  <i className={`fas ${solution.icon === "fa-search-document" ? "fa-search" : solution.icon === "fa-tasks" ? "fa-list-check" : solution.icon} text-primary text-2xl`}></i>
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
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-4">50% reduction in prep time</h2>
                <p className="text-neutral-700 mb-6">A national law firm was struggling with the increasing volume of documents in their litigation practice, leading to high costs and missed deadlines.</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3 text-lg"></i>
                    <div>
                      <h4 className="font-semibold">Challenge</h4>
                      <p className="text-neutral-700">Attorneys spent an average of 60+ hours per case on document review, with clients increasingly resistant to paying for this time.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3 text-lg"></i>
                    <div>
                      <h4 className="font-semibold">Solution</h4>
                      <p className="text-neutral-700">We implemented an AI-powered document analysis system that pre-categorized documents, identified key information, and flagged potential issues.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3 text-lg"></i>
                    <div>
                      <h4 className="font-semibold">Result</h4>
                      <p className="text-neutral-700">50% reduction in document review time, 30% decrease in overall case preparation costs, and improved ability to meet or beat deadlines.</p>
                    </div>
                  </div>
                </div>
                
                <Link href="/contact">
                  <a className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-2xl text-white bg-primary hover:bg-primary/90 transition-colors">
                    Request a LegalTech Demo
                  </a>
                </Link>
              </div>
              
              <div className="bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center h-64 lg:h-auto"></div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
    </motion.div>
  );
};

export default LegaltechPage;
