import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, PERSONAL_INFO } from '../constants';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    // Extract 'home', 'about' from '#home', '#about'
    const page = href.substring(1);
    onNavigate(page);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-primary py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
             <a 
               href="#home" 
               onClick={(e) => handleNavClick(e, '#home')}
               className="flex items-center gap-3 group"
             >
               {/* Profile Image Avatar - Increased size */}
               <div className={`relative w-12 h-12 overflow-hidden rounded-full border-2 transition-all duration-300 ${scrolled || isOpen ? 'border-primary' : 'border-white group-hover:border-accent'}`}>
                  <img 
                    src="joy-poddar.jpg" 
                    alt="Joy Poddar" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null; 
                      target.src = 'https://ui-avatars.com/api/?name=Joy+Poddar&background=0D8ABC&color=fff&size=128';
                    }}
                  />
               </div>
               
               {/* Name Text */}
               <span className={`text-xl font-bold tracking-tight transition-colors ${scrolled || isOpen ? 'text-primary' : 'text-white'}`}>
                 {PERSONAL_INFO.name}
               </span>
             </a>
          </div>

          {/* Desktop Menu - Tab Style */}
          <div className="hidden md:flex items-center space-x-2 bg-transparent rounded-full p-1">
            {NAV_ITEMS.map((item) => {
              const pageKey = item.href.substring(1);
              const isActive = currentPage === pageKey;
              
              // Determine text color based on scroll state and active state
              let textColorClass = '';
              if (isActive) {
                textColorClass = 'text-white';
              } else if (scrolled) {
                textColorClass = 'text-slate-600 hover:text-secondary';
              } else {
                textColorClass = 'text-slate-200 hover:text-white';
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out ${
                    isActive 
                      ? 'bg-secondary shadow-md transform scale-105' 
                      : 'hover:bg-white/10'
                  } ${textColorClass}`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${scrolled || isOpen ? 'text-dark' : 'text-white'} hover:text-accent focus:outline-none`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="px-4 pt-2 pb-4 space-y-2">
          {NAV_ITEMS.map((item) => {
            const pageKey = item.href.substring(1);
            const isActive = currentPage === pageKey;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                   isActive
                   ? 'bg-secondary text-white shadow-sm'
                   : 'text-gray-600 hover:bg-blue-50 hover:text-secondary'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};