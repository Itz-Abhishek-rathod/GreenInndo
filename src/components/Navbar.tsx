import React, { useState, useEffect } from 'react';
import { Logo } from './Logo.tsx';
import { ArrowRight, Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

interface NavbarProps {
  onOpenQuote: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuote,
  activeSection,
  setActiveSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  // Exact 1:1 line-wise order matching the physical webpage layout
  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#why-solar', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Blog', href: '#blog', id: 'blog' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Automatic scroll spy matching exact vertical section sequence without skipping
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180; // top header offset

      // Ordered from bottom to top of page
      const sections = [
        { id: 'contact', el: document.querySelector('#contact') },
        { id: 'blog', el: document.querySelector('#blog') },
        { id: 'projects', el: document.querySelector('#projects') },
        { id: 'services', el: document.querySelector('#services') || document.querySelector('#solutions') },
        { id: 'about', el: document.querySelector('#why-solar') },
        { id: 'home', el: document.querySelector('#home') },
      ];

      for (const section of sections) {
        if (section.el) {
          const top = (section.el as HTMLElement).offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const handleNavClick = (id: string, href: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo onClick={() => handleNavClick('home', '#home')} />
          </div>

          {/* Desktop Navigation Links aligned line-wise */}
          <nav 
            className="hidden md:flex items-center space-x-8 h-full"
            onMouseLeave={() => setHoveredSection(null)}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const isHovered = hoveredSection === item.id;

              return (
                <div
                  key={item.id}
                  className="relative h-full flex items-center justify-center"
                  onMouseEnter={() => setHoveredSection(item.id)}
                >
                  <button
                    onClick={() => handleNavClick(item.id, item.href)}
                    className={`relative text-sm font-medium transition-colors cursor-pointer select-none py-2 px-1 flex flex-col items-center justify-center ${
                      isActive
                        ? 'text-slate-900 font-semibold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>{item.name}</span>

                    {/* Smooth Sliding Underline Animation spanning line-to-line with text */}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-underline"
                        className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#16A34A] rounded-full shadow-[0_1px_3px_rgba(22,163,74,0.3)] z-10"
                        transition={{
                          type: 'spring',
                          stiffness: 450,
                          damping: 35,
                        }}
                      />
                    )}

                    {/* Subtle hover indicator when hovering inactive tabs */}
                    {!isActive && isHovered && (
                      <motion.span
                        layoutId="navbar-hover-underline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-400/70 rounded-full"
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 35,
                        }}
                      />
                    )}
                  </button>
                </div>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all group cursor-pointer"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id, item.href)}
                className={`text-left px-3 py-2 text-base font-medium rounded-lg ${
                  activeSection === item.id
                    ? 'text-[#16A34A] bg-emerald-50 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#16A34A] text-white py-3 rounded-full font-medium shadow-sm"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
