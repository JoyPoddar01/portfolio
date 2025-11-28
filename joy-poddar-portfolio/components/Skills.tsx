import React from 'react';
import { Code2, Brain, CheckCircle2 } from 'lucide-react';
import { TECHNICAL_SKILLS, PERSONAL_SKILLS } from '../constants';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-12 bg-white min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            A blend of technical proficiency and soft skills cultivated through academic projects and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-blue-100 rounded-lg text-secondary mr-4">
                <Code2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary">{TECHNICAL_SKILLS.title}</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TECHNICAL_SKILLS.skills.map((skill, index) => (
                <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Skills */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-amber-100 rounded-lg text-amber-600 mr-4">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary">{PERSONAL_SKILLS.title}</h3>
            </div>
            
            <div className="space-y-4">
              {PERSONAL_SKILLS.skills.map((skill, index) => (
                <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                  <div className="mt-1">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-4"></div>
                  </div>
                  <span className="text-slate-700 font-medium text-lg leading-tight">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};