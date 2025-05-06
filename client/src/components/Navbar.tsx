import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { text: "Home", href: "/" },
    { 
      text: "Services", 
      href: "/services",
      dropdown: [
        { text: "Cloud-Smart Solutions", href: "/services#cloud" },
        { text: "AI-First Services", href: "/services#ai" },
        { text: "Outcome-Based Engagements", href: "/services#outcome" },
        { text: "Security-Embedded Delivery", href: "/services#security" },
      ] 
    },
    { 
      text: "Industries", 
      href: "#",
      dropdown: [
        { text: "Fintech", href: "/industries/fintech" },
        { text: "Healthcare", href: "/industries/healthcare" },
        { text: "LegalTech", href: "/industries/legaltech" },
        { text: "Logistics", href: "/industries/logistics" },
      ] 
    },
    { text: "Why Choose Us", href: "/why-choose-us" },
    { text: "Resources", href: "/resources" },
    { text: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === href;
    return location.startsWith(href);
  };

  return (
    <motion.nav 
      className="bg-warm-gray-50 border-b border-warm-gray-200 sticky top-0 z-50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Logo />
              <span className="ml-2 text-xl font-heading font-semibold text-neutral-900">NextGenixTech</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              !item.dropdown ? (
                <Link 
                  key={index} 
                  href={item.href}
                  className={`font-medium ${isActive(item.href) ? 'text-primary' : 'text-neutral-900 hover:text-primary'} transition-colors`}
                >
                  {item.text}
                </Link>
              ) : (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger asChild>
                    <button className={`font-medium ${location.includes(item.text.toLowerCase()) ? 'text-primary' : 'text-neutral-900 hover:text-primary'} transition-colors flex items-center`}>
                      {item.text}
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-56 rounded-2xl">
                    {item.dropdown.map((subItem, subIndex) => (
                      <DropdownMenuItem key={subIndex} asChild>
                        <Link 
                          href={subItem.href}
                          className="block w-full py-2 text-sm text-neutral-900 hover:text-primary transition-colors"
                        >
                          {subItem.text}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              type="button" 
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-900 hover:text-primary hover:bg-warm-gray-100 transition-colors"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
          
          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center">
            <Button asChild className="rounded-2xl">
              <Link href="/contact">
                Book a Free Tech Audit
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-warm-gray-50">
              {navItems.map((item, index) => (
                <div key={index}>
                  {!item.dropdown ? (
                    <Link 
                      href={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(item.href) ? 'text-primary' : 'text-neutral-900 hover:text-primary hover:bg-warm-gray-100'} transition-colors`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.text}
                    </Link>
                  ) : (
                    <>
                      <div className="px-3 py-2 text-base font-medium text-neutral-900">{item.text}</div>
                      <div className="pl-6 space-y-1">
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link 
                            key={subIndex} 
                            href={subItem.href}
                            className="block px-3 py-1 rounded-md text-sm font-medium text-neutral-800 hover:text-primary hover:bg-warm-gray-100 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.text}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
              <Link 
                href="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-primary/90 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Free Tech Audit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
