import { Link } from "wouter";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-warm-gray-300 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Logo />
              <span className="ml-2 text-xl font-heading font-semibold text-white">NextGenixTech</span>
            </div>
            <p className="text-sm mb-4">Smart Tech. Real Outcomes.</p>
            <p className="text-xs">NextGenixTech is part of Meta Company.</p>
          </div>
          
          <div>
            <h3 className="text-white font-heading font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services#cloud"><a className="hover:text-white transition-colors">Cloud Optimization</a></Link></li>
              <li><Link href="/services#ai"><a className="hover:text-white transition-colors">AI-First Solutions</a></Link></li>
              <li><Link href="/services#outcome"><a className="hover:text-white transition-colors">Outcome-Based Engagements</a></Link></li>
              <li><Link href="/services#security"><a className="hover:text-white transition-colors">Security-Embedded Delivery</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-heading font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              <li><Link href="/industries/fintech"><a className="hover:text-white transition-colors">Fintech</a></Link></li>
              <li><Link href="/industries/healthcare"><a className="hover:text-white transition-colors">Healthcare</a></Link></li>
              <li><Link href="/industries/legaltech"><a className="hover:text-white transition-colors">LegalTech</a></Link></li>
              <li><Link href="/industries/logistics"><a className="hover:text-white transition-colors">Logistics</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-heading font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="/contact"><a className="hover:text-white transition-colors">Contact Us</a></Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><Link href="/resources"><a className="hover:text-white transition-colors">Resources</a></Link></li>
              <li><Link href="/resources"><a className="hover:text-white transition-colors">Blog</a></Link></li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-warm-gray-300 hover:text-white transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-warm-gray-300 hover:text-white transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-warm-gray-300 hover:text-white transition-colors">
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-warm-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} NextGenixTech. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-sm hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
