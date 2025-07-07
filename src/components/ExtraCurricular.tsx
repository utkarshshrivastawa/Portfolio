import React from 'react';
import { Trophy, Target, Award } from 'lucide-react';

const ExtraCurricular: React.FC = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Department Representative',
      description: 'Represented CSE department in IGNUS inter-department badminton tournament',
      result: 'Reached Finals'
    },
    {
      icon: Award,
      title: 'University Selection',
      description: 'Selected for All India University Tournament at SSN College',
      result: 'Representing University'
    }
  ];

  return (
    <section id="extracurricular" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Extra Curricular Activities
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#089cf1] to-[#11efef] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-transparent hover:border-[#089cf1]">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-[#089cf1] to-[#11efef] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <achievement.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{achievement.title}</h3>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-700 text-center">{achievement.description}</p>
                  <div className="bg-gradient-to-r from-[#089cf1]/10 to-[#11efef]/10 rounded-full px-6 py-3 text-center">
                    <span className="text-[#089cf1] font-bold">{achievement.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sports Section */}
          <div className="mt-12 bg-gradient-to-r from-[#089cf1]/5 to-[#11efef]/5 rounded-2xl p-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#089cf1] to-[#11efef] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Badminton Excellence</h3>
              <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                Demonstrated exceptional athletic ability and competitive spirit through badminton achievements, 
                showcasing dedication, teamwork, and the ability to perform under pressure at both departmental and university levels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraCurricular;