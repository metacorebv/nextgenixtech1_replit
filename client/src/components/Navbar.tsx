import { useState, useEffect } from "react";
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
import { navItems } from "@/lib/data";

const Navbar = () => {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (href: string) => {
    if (href === "/") return location === href;
    return location.startsWith(href);
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled 
        ? "bg-neutral-900/90 shadow-lg border-b border-neutral-800" 
        : "bg-neutral-900/70"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Logo className="h-8 w-auto text-white" />
              <span className="ml-2 text-xl font-heading font-semibold text-white">NextGenixTech</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              !item.dropdown ? (
                <Link 
                  key={index} 
                  href={item.href}
                  className={`font-medium ${isActive(item.href) ? 'text-primary' : 'text-white hover:text-primary'} transition-colors`}
                >
                  {item.text}
                </Link>
              ) : (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger asChild>
                    <button className={`font-medium ${location.includes(item.text.toLowerCase()) ? 'text-primary' : 'text-white hover:text-primary'} transition-colors flex items-center`}>
                      {item.text}
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-56 rounded-xl bg-neutral-800 border-neutral-700">
                    {item.dropdown.map((subItem, subIndex) => (
                      <DropdownMenuItem key={subIndex} asChild>
                        <Link 
                          href={subItem.href}
                          className="block w-full py-2 text-sm text-neutral-200 hover:text-primary transition-colors"
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
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary hover:bg-neutral-800 transition-colors"
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
            <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity rounded-xl">
              <Link href="/contact">
                Join "NoCode AI Army"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-neutral-900 border-t border-neutral-800">
              {navItems.map((item, index) => (
                <div key={index}>
                  {!item.dropdown ? (
                    <Link 
                      href={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(item.href) ? 'text-primary' : 'text-white hover:text-primary hover:bg-neutral-800'} transition-colors`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.text}
                    </Link>
                  ) : (
                    <>
                      <div className="px-3 py-2 text-base font-medium text-white">{item.text}</div>
                      <div className="pl-6 space-y-1">
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link 
                            key={subIndex} 
                            href={subItem.href}
                            className="block px-3 py-1 rounded-md text-sm font-medium text-neutral-200 hover:text-primary hover:bg-neutral-800 transition-colors"
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
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join "NoCode AI Army"
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
