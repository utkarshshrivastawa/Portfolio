import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#089cf1] to-[#11efef] mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Design */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#089cf1]/10 to-[#11efef]/10 rounded-full -translate-y-32 translate-x-32"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-[#089cf1] to-[#11efef] p-4 rounded-full mr-6">
                  <GraduationCap className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Bachelor of Technology
                  </h3>
                  <p className="text-xl text-gray-600">Computer Science and Engineering</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-[#089cf1]" size={20} />
                  <span className="text-gray-700">Hindustan Institute of Technology and Science, Chennai</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="text-[#089cf1]" size={20} />
                  <span className="text-gray-700">September 2020 – July 2024</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="text-[#089cf1]" size={20} />
                  <span className="text-gray-700">CGPA: 9.02/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;