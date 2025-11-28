import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 bg-primary text-white min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent rounded-full mb-6 mx-auto"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            I am currently open to new opportunities and collaborations. 
            Feel free to reach out to me via email or phone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Email Card */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center group">
            <div className="p-4 bg-white/10 rounded-full text-accent mb-6 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-slate-200 mb-2 uppercase tracking-wide">Email</h3>
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-medium hover:text-accent transition-colors break-all">
              {CONTACT_INFO.email}
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center group">
            <div className="p-4 bg-white/10 rounded-full text-accent mb-6 group-hover:scale-110 transition-transform">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-slate-200 mb-2 uppercase tracking-wide">Phone</h3>
            <a href={`tel:${CONTACT_INFO.phone}`} className="text-lg font-medium hover:text-accent transition-colors">
              {CONTACT_INFO.phone}
            </a>
          </div>

          {/* Address Card */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center group">
            <div className="p-4 bg-white/10 rounded-full text-accent mb-6 group-hover:scale-110 transition-transform">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-slate-200 mb-2 uppercase tracking-wide">Address</h3>
            <p className="text-lg font-medium">
              {CONTACT_INFO.address}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};