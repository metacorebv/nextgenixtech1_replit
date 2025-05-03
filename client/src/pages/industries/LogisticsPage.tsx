import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "wouter";
import ContactSection from "@/components/ContactSection";

const LogisticsPage = () => {
  const solutions = [
    {
      icon: "fa-route",
      title: "Dynamic Route Optimization",
      description: "AI-powered systems that continuously optimize delivery routes based on real-time traffic, weather, and operational constraints."
    },
    {
      icon: "fa-truck",
      title: "Fleet Health Monitoring",
      description: "Predictive maintenance solutions that detect potential vehicle issues before they cause breakdowns, minimizing downtime."
    },
    {
      icon: "fa-warehouse",
      title: "Inventory Optimization",
      description: "Machine learning algorithms that predict demand patterns, optimize stock levels, and recommend reorder points across your supply chain."
    },
    {
      icon: "fa-analytics",
      title: "Supply Chain Visibility",
      description: "End-to-end tracking solutions that provide real-time visibility into your entire supply chain for better decision making."
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
        <title>Logistics Solutions - NextGenixTech</title>
        <meta name="description" content="Predictive AI for Supply Chain & Fleet Optimization - Minimize downtime and route inefficiency with AI-powered logistics solutions." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-14 pb-24 md:pt-20 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-gray-100 via-warm-gray-50 to-warm-gray-50 -z-10"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 -z-10 bg-[url('https://images.unsplash.com/photo-1519074069390-98277ca18db6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover"></div>
        
        <div className="container-custom">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
            >
              Logistics Industry Solutions
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight text-neutral-900 leading-tight mb-6"
            >
              Predictive AI for <span className="text-primary">Supply Chain & Fleet Optimization</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-8 max-w-3xl"
            >
              In today's complex logistics landscape, inefficiencies cost time and money. Our AI-powered solutions help logistics companies minimize downtime, optimize routes, and gain end-to-end visibility across the supply chain.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact">
                <a className="px-6 py-3 rounded-2xl bg-primary text-white font-medium shadow-md hover:bg-primary/90 transition-colors duration-300">
                  Optimize Your Supply Chain
                </a>
              </Link>
              <a href="#solutions" className="px-6 py-3 rounded-2xl bg-white text-neutral-900 font-medium shadow-md hover:bg-warm-gray-100 transition-colors duration-300">
                View Solutions
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Pain Points Section */}
      <section className="py-16 bg-neutral-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-6">Logistics Challenges We Solve</h2>
            <p className="text-warm-gray-300 max-w-3xl mx-auto">Logistics and supply chain operations face unique challenges that our specialized technology solutions address.</p>
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
                <i className="fas fa-wrench text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Fleet Downtime</h3>
              <p className="text-warm-gray-300">Unexpected vehicle maintenance issues lead to costly downtime and missed delivery deadlines.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-neutral-800 rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-primary/20 flex items-center justify-center rounded-2xl mb-4">
                <i className="fas fa-map-signs text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Route Inefficiency</h3>
              <p className="text-warm-gray-300">Suboptimal delivery routes waste fuel, increase vehicle wear, and reduce the number of possible deliveries per day.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-neutral-800 rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-primary/20 flex items-center justify-center rounded-2xl mb-4">
                <i className="fas fa-chart-line text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Demand Volatility</h3>
              <p className="text-warm-gray-300">Unpredictable demand patterns make inventory management difficult, leading to stockouts or excess inventory.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-warm-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">Our Logistics Solutions</h2>
            <p className="text-neutral-700 max-w-3xl mx-auto">AI-powered systems designed specifically for the challenges facing modern logistics operations.</p>
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
                  <i className={`fas ${solution.icon === "fa-analytics" ? "fa-chart-bar" : solution.icon} text-primary text-2xl`}></i>
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
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-4">Saved $400K annually for logistics firm</h2>
                <p className="text-neutral-700 mb-6">A regional logistics company with a fleet of 200 vehicles was struggling with high maintenance costs and frequent delivery delays.</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3 text-lg"></i>
                    <div>
                      <h4 className="font-semibold">Challenge</h4>
                      <p className="text-neutral-700">Reactive maintenance was causing an average of 18 breakdowns per month, each costing $4,500 in repairs and lost business.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3 text-lg"></i>
                    <div>
                      <h4 className="font-semibold">Solution</h4>
                      <p className="text-neutral-700">We implemented a predictive fleet maintenance system that monitored vehicle health in real-time and dynamically optimized delivery routes.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3 text-lg"></i>
                    <div>
                      <h4 className="font-semibold">Result</h4>
                      <p className="text-neutral-700">Breakdowns reduced by 78%, route efficiency improved by 12%, leading to annual savings of over $400,000 and a 22% increase in on-time deliveries.</p>
                    </div>
                  </div>
                </div>
                
                <Link href="/contact">
                  <a className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-2xl text-white bg-primary hover:bg-primary/90 transition-colors">
                    Optimize Your Supply Chain
                  </a>
                </Link>
              </div>
              
              <div className="bg-[url('https://images.unsplash.com/photo-1615138235707-904de1f2476d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center h-64 lg:h-auto"></div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
    </motion.div>
  );
};

export default LogisticsPage;
