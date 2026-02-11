import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="section-container py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="font-display text-xl font-bold z-50 relative">
            <span className="gradient-text">{`{ ZMH }`}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6 mr-4">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="nav-link text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-4 pl-4 border-l border-border/50">
              <ThemeToggle />
              <a href="#contact" className="btn-primary text-sm px-4 py-2">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Optional: Show Theme Toggle outside menu on mobile too */}
            {/* <ThemeToggle /> */} 
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-border/50"
            >
              <div className="flex flex-col gap-4 pt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors py-2 px-2 hover:bg-secondary/30 rounded-md"
                  >
                    {link.label}
                  </a>
                ))}
                
                <div className="flex items-center justify-between gap-4 pt-4 border-t border-border/50 mt-2">
                  <span className="text-sm text-muted-foreground ml-2">Switch Theme</span>
                  <ThemeToggle />
                </div>

                <a href="#contact" className="btn-primary text-sm w-full text-center mt-2">
                  Get in Touch
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
