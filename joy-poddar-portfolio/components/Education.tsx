import React from 'react';
import { Calendar, Award } from 'lucide-react';
import { EDUCATION_DATA } from '../constants';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-12 bg-slate-50 min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Academic Qualification</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="relative container mx-auto px-6 flex flex-col space-y-8">
          <div className="absolute z-0 w-2 h-full bg-slate-200 shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0 rounded-full"></div>
          
          {EDUCATION_DATA.map((item, index) => (
            <div key={item.id} className="relative z-10">
              <div className={`flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="order-1 md:w-5/12"></div>
                
                <div className="z-20 flex items-center order-1 bg-secondary shadow-xl w-10 h-10 rounded-full border-4 border-white">
                  <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
                </div>
                
                <div className="order-1 bg-white rounded-xl shadow-md w-full md:w-5/12 px-6 py-6 border-l-4 border-secondary hover:shadow-xl transition-all duration-300 mt-4 md:mt-0">
                  <h3 className="font-bold text-primary text-xl mb-1">{item.degree}</h3>
                  <p className="text-accent font-medium mb-3">{item.major}</p>
                  <p className="text-slate-600 text-sm italic mb-4">{item.institute}</p>
                  
                  <div className="flex flex-wrap gap-3 mt-2 border-t border-slate-100 pt-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-secondary">
                      <Calendar className="w-3 h-3 mr-1" />
                      {item.year}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700">
                      <Award className="w-3 h-3 mr-1" />
                      {item.result}
                    </span>
                    {item.board && (
                       <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                         Board: {item.board}
                       </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};