import React from 'react';
import { Briefcase, Calendar, Building } from 'lucide-react';
import { EXPERIENCES } from '../utils/constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#089cf1] to-[#11efef] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {EXPERIENCES.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Line */}
                {index < EXPERIENCES.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-20 bg-gradient-to-b from-[#089cf1] to-[#11efef]"></div>
                )}
                
                <div className="bg-white rounded-2xl shadow-xl p-8 ml-0 hover:shadow-2xl transition-all duration-300 border-l-4 border-transparent hover:border-[#089cf1]">
                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-r from-[#089cf1] to-[#11efef] p-4 rounded-full flex-shrink-0">
                      <Briefcase className="text-white" size={24} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800">{exp.position}</h3>
                          <div className="flex items-center space-x-2 mt-2">
                            <Building className="text-[#089cf1]" size={18} />
                            <span className="text-lg text-gray-600">{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 mt-2 md:mt-0">
                          <Calendar className="text-[#089cf1]" size={18} />
                          <span className="text-gray-600">{exp.duration}</span>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-[#089cf1] mt-2 text-sm">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;