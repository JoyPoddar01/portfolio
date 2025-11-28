import React from 'react';
import { MapPin, Mail, Phone, User } from 'lucide-react';
import { ABOUT_TEXT, CONTACT_INFO } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 bg-white min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
             <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm h-full">
                <h3 className="text-xl font-semibold text-secondary mb-4 flex items-center">
                   <User className="w-5 h-5 mr-2" />
                   Career Objective
                </h3>
                <p className="text-slate-600 leading-relaxed text-justify">
                  {ABOUT_TEXT}
                </p>
             </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-6">Personal Details</h3>
            
            <div className="space-y-4">
              <div className="flex items-start p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-slate-100">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-blue-50 rounded-full text-secondary">
                    <Mail className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-500">Email</p>
                  <p className="text-lg font-semibold text-primary break-all">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-slate-100">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-blue-50 rounded-full text-secondary">
                    <Phone className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-500">Phone</p>
                  <p className="text-lg font-semibold text-primary">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-slate-100">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-blue-50 rounded-full text-secondary">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-500">Address</p>
                  <p className="text-lg font-semibold text-primary">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};