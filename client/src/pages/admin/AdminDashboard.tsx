import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { siteConfig } from '../../lib/data';

const AdminDashboard = () => {
  const adminModules = [
    {
      title: 'Testimonials Manager',
      description: 'Add, edit, or remove testimonials from clients that appear on the website.',
      icon: 'fa-quote-right',
      color: 'bg-primary/10 text-primary',
      link: '/admin/testimonials',
    },
    {
      title: 'Resources & Case Studies',
      description: 'Manage articles, whitepapers, and case studies in the resources section.',
      icon: 'fa-file-alt',
      color: 'bg-secondary/10 text-secondary',
      link: '/admin/resources',
    },
    {
      title: 'Industry Pages',
      description: 'Edit content for industry-specific landing pages (Fintech, Healthcare, etc.).',
      icon: 'fa-industry',
      color: 'bg-accent/10 text-accent',
      link: '/admin/industries',
    },
    {
      title: 'Contact Submissions',
      description: 'View and manage incoming contact form submissions.',
      icon: 'fa-envelope',
      color: 'bg-neutral-700/10 text-neutral-700',
      link: '/admin/contact',
    },
  ];

  return (
    <div className="container-custom py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h1 className="text-4xl font-heading font-bold mb-2">Admin Dashboard</h1>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Welcome to the {siteConfig.name} content management system. Use the tools below to update website content.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {adminModules.map((module, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            className="bg-card border border-border rounded-xl p-6 transition-all duration-300 shadow-sm"
          >
            <div className="flex items-start">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${module.color} mr-4`}>
                <i className={`fas ${module.icon} text-xl`}></i>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-2">{module.title}</h3>
                <p className="text-neutral-600 mb-4">{module.description}</p>
                <Link href={module.link}>
                  <a className="text-primary font-medium hover:text-primary/80 transition-colors inline-flex items-center">
                    Open Manager <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
        <h2 className="text-xl font-heading font-bold mb-4">Admin Instructions</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-lg">Managing Testimonials</h3>
            <p className="text-neutral-600">
              Use the Testimonials Manager to add success stories from clients. Testimonials appear in the "Real Results for Real Businesses" section on the homepage.
              When adding metrics (like "37% cost reduction"), make sure to add a title that explains what the metric means.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg">Notion Integration for Case Studies</h3>
            <p className="text-neutral-600">
              For case studies created in Notion, you can:
            </p>
            <ol className="list-decimal pl-5 space-y-1 text-neutral-600">
              <li>Create your case study in Notion with all content, images, etc.</li>
              <li>Export to HTML or copy the share link</li>
              <li>In the Resources manager, create a new Case Study and paste the Notion content or link in the Content field</li>
              <li>Fill in the rest of the details (title, description, categories, etc.)</li>
              <li>The system will automatically parse and display the Notion content properly on the website</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-medium text-lg">Image Guidelines</h3>
            <p className="text-neutral-600">
              For best results, use these image formats:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-600">
              <li><strong>Testimonial Photos:</strong> Square format (1:1 ratio), minimum 256×256 pixels</li>
              <li><strong>Resource/Case Study Images:</strong> Landscape format (16:9 ratio), minimum 1200×675 pixels</li>
              <li><strong>Industry Page Headers:</strong> Wide landscape format (21:9 ratio), minimum 1600×686 pixels</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg">Need Help?</h3>
            <p className="text-neutral-600">
              If you encounter any issues or have questions about managing website content, please contact the development team 
              at <a href={`mailto:${siteConfig.contactEmail}`} className="text-primary hover:text-primary/80">{siteConfig.contactEmail}</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;