import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { PERSONAL_INFO } from '../constants';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-primary overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-secondary/10 blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12 py-12 md:py-0">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <p className="text-accent font-medium tracking-wide mb-4 text-lg">Hello, I'm</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            {PERSONAL_INFO.name}
          </h1>
          <h2 className="text-2xl sm:text-3xl text-slate-300 font-light mb-6">
            {PERSONAL_INFO.subtitle}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto md:mx-0 mb-8 leading-relaxed">
            {PERSONAL_INFO.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button variant="outline" onClick={() => onNavigate('contact')} className="text-white border-white hover:bg-white hover:text-primary">
              Contact Me
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Image Placeholder - Styled professionally */}
        <div className="flex-1 flex justify-center md:justify-end z-10">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-accent rounded-2xl rotate-6 opacity-20 animate-pulse"></div>
            <div className="absolute inset-0 bg-secondary rounded-2xl -rotate-6 opacity-20"></div>
            <img 
              src="joy-poddar.jpg" 
              alt="Joy Poddar" 
              className="relative w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-slate-700/50 transition-all duration-500"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null; // Prevent infinite loop
                target.src = 'https://ui-avatars.com/api/?name=Joy+Poddar&background=0D8ABC&color=fff&size=512';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};