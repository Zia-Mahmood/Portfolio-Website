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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80; 
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 150);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="section-container py-4 relative">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="font-display text-xl font-bold z-50 relative" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="gradient-text">{`{ ZMH }`}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6 mr-4">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="nav-link text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-4 pl-4 border-l border-border/50">
              <ThemeToggle />
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn-primary text-sm px-4 py-2"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground hover:bg-secondary/50 rounded-lg transition-colors z-50 relative"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown - Now OUTSIDE the section-container for full width */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full overflow-hidden bg-background/95 backdrop-blur-2xl border-b border-primary/20 shadow-2xl"
          >
            <div className="flex flex-col gap-2 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors py-3 px-4 hover:bg-primary/10 rounded-xl font-medium text-lg"
                >
                  {link.label}
                </a>
              ))}
              
              <div className="flex items-center justify-between gap-4 pt-4 mt-2 border-t border-border/50 px-4">
                <span className="text-sm text-foreground font-medium">Theme</span>
                <ThemeToggle />
              </div>

              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn-primary text-sm w-full text-center mt-6 py-4 rounded-xl font-semibold"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};