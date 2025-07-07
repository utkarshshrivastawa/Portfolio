import React from 'react';
import { Code, Database, BookOpen } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Languages & Tools',
      skills: ['Python', 'HTML', 'CSS', 'MySQL', 'NumPy', 'Pandas', 'Seaborn', 'BeautifulSoup']
    },
    {
      icon: Database,
      title: 'Tools & Software',
      skills: ['Kaggle', 'VS Code', 'Jupyter Notebook', 'Power BI', 'Excel', 'MS Word', 'PowerPoint']
    },
    {
      icon: BookOpen,
      title: 'Coursework',
      skills: ['Programming', 'Data Structures', 'OOPs', 'Algorithms', 'ML Algorithms', 'DBMS (Lab + Theory)']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#089cf1] to-[#11efef] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-[#089cf1] to-[#11efef] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <category.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-[#089cf1]/10 to-[#11efef]/10 rounded-full px-4 py-2 text-center">
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;