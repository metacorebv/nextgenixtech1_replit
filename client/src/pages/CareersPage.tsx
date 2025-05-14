import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "wouter";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jobOpenings = [
    {
      title: "DevOps Engineer",
      type: "Full-time",
      location: "Remote / Hybrid",
      description: "We're looking for an experienced DevOps Engineer to help us build and maintain our cloud infrastructure and CI/CD pipelines. You'll work closely with our development team to ensure smooth deployments and optimal system performance.",
      responsibilities: [
        "Design, implement and maintain CI/CD pipelines",
        "Manage cloud infrastructure on AWS/Azure",
        "Implement infrastructure as code using Terraform or similar tools",
        "Monitor system performance and troubleshoot issues",
        "Collaborate with development teams to improve deployment processes"
      ],
      requirements: [
        "3+ years of experience in DevOps or similar role",
        "Strong knowledge of cloud platforms (AWS/Azure)",
        "Experience with containerization (Docker, Kubernetes)",
        "Familiarity with infrastructure as code tools",
        "Strong scripting skills (Bash, Python)"
      ]
    },
    {
      title: "DevOps Internship",
      type: "Internship",
      location: "Remote / Hybrid",
      description: "Join our DevOps team as an intern and gain hands-on experience with modern cloud infrastructure and CI/CD practices. This is a great opportunity for students or recent graduates looking to start a career in DevOps.",
      responsibilities: [
        "Assist in maintaining CI/CD pipelines",
        "Help with cloud infrastructure management",
        "Learn and apply infrastructure as code principles",
        "Participate in monitoring and troubleshooting activities",
        "Collaborate with team members on deployment automation"
      ],
      requirements: [
        "Currently pursuing or recently completed a degree in Computer Science or related field",
        "Basic understanding of cloud concepts",
        "Familiarity with Linux operating systems",
        "Knowledge of at least one scripting language",
        "Eagerness to learn and problem-solving"
      ]
    },
    {
      title: "Digital Marketing Intern",
      type: "Internship",
      location: "Remote / Hybrid",
      description: "We're seeking a creative and analytical Digital Marketing Intern to support our marketing team. You'll help develop and implement digital marketing strategies to increase brand awareness and drive customer engagement.",
      responsibilities: [
        "Assist in creating content for social media platforms",
        "Help manage and update the company website",
        "Support email marketing campaigns",
        "Analyze marketing data and prepare reports",
        "Research industry trends and competitor activities"
      ],
      requirements: [
        "Currently pursuing or recently completed a degree in Marketing, Communications, or related field",
        "Basic understanding of digital marketing concepts",
        "Familiarity with social media platforms and analytics tools",
        "Good writing and communication skills",
        "Creative mindset with attention to detail"
      ]
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
        <title>Careers - NextGenixTech</title>
        <meta name="description" content="Join our team at NextGenixTech. Explore current job openings and internship opportunities in technology, development, and marketing." />
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
              Join Our Team
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight text-[color:var(--foreground)] leading-tight mb-6"
            >
              Build Your Career with <span className="bg-gradient-to-r from-primary to-secondary text-gradient">NextGenixTech</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-[color:var(--muted-foreground)] leading-relaxed mb-8 max-w-3xl"
            >
              Join our team of innovators and problem-solvers. We're looking for talented individuals who are passionate about technology and eager to make an impact.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16 bg-[color:var(--background)] dark:bg-[color:var(--card)]/10">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-[color:var(--foreground)] mb-10 text-center">Current Openings</h2>
            
            <div className="space-y-8">
              {jobOpenings.map((job, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-[color:var(--card)] rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300 border border-[color:var(--border)]"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-heading font-semibold text-[color:var(--foreground)]">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          {job.type}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary/10 text-secondary">
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <Link href="/contact">
                      <a className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl text-white bg-primary hover:bg-primary/90 transition-colors">
                        Apply Now
                      </a>
                    </Link>
                  </div>
                  
                  <p className="text-[color:var(--muted-foreground)] mb-6">{job.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-[color:var(--foreground)] mb-3">Responsibilities</h4>
                      <ul className="space-y-2 text-[color:var(--muted-foreground)]">
                        {job.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <i className="fas fa-check-circle text-primary mt-1 mr-2 text-sm"></i>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[color:var(--foreground)] mb-3">Requirements</h4>
                      <ul className="space-y-2 text-[color:var(--muted-foreground)]">
                        {job.requirements.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <i className="fas fa-check-circle text-primary mt-1 mr-2 text-sm"></i>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-neutral-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Don't See the Right Fit?</h2>
            <p className="text-xl text-warm-gray-300 mb-8">
              We're always looking for talented individuals to join our team. Send us your resume and let us know how you can contribute to NextGenixTech.
            </p>
            <Link href="/contact">
              <a className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-2xl text-neutral-900 bg-white hover:bg-warm-gray-100 transition-colors">
                Send Us Your Resume
              </a>
            </Link>
          </div>
        </div>
      </section>
      
      <ContactSection />
    </motion.div>
  );
};

export default CareersPage;