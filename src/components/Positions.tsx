import React from 'react';
import { Users, Calendar, MapPin } from 'lucide-react';

const Positions: React.FC = () => {
  return (
    <section id="positions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Positions of Responsibility
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#089cf1] to-[#11efef] mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Design */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#089cf1]/10 to-[#11efef]/10 rounded-full -translate-y-32 -translate-x-32"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-[#089cf1] to-[#11efef] p-4 rounded-full mr-6">
                  <Users className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Blue Screen Programming Club
                  </h3>
                  <p className="text-xl text-gray-600">Team Member & Event Coordinator</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-[#089cf1]" size={20} />
                    <span className="text-gray-700">HITS, Chennai</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-[#089cf1]" size={20} />
                    <span className="text-gray-700">May 2023 – June 2024</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#089cf1]/5 to-[#11efef]/5 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#089cf1] mr-2">•</span>
                      Coordinated participants and communication for smooth event execution
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#089cf1] mr-2">•</span>
                      Collaborated with 12 team members to manage workshops for visiting school children
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#089cf1] mr-2">•</span>
                      Demonstrated leadership and organizational skills in educational outreach
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Positions;