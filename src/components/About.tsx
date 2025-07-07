import React from 'react';
import { GraduationCap, Code, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#089cf1] to-[#11efef] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-[#089cf1] to-[#11efef] p-3 rounded-full">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Education Excellence</h3>
                  <p className="text-gray-600">B.Tech in Computer Science and Engineering with 9.02 CGPA from HITS Chennai</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-[#089cf1] to-[#11efef] p-3 rounded-full">
                  <Code className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Data Science</h3>
                  <p className="text-gray-600">Proficient in Python, Data Science, Web Development, and Machine Learning</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-[#089cf1] to-[#11efef] p-3 rounded-full">
                  <Lightbulb className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Problem Solving</h3>
                  <p className="text-gray-600">Passionate about using technology to solve real-world problems</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                Hi, I'm Utkarsh Shrivastawa. I recently completed my B.Tech in Computer Science and Engineering 
                from Hindustan Institute of Technology and Science with a CGPA of 9.02. I enjoy working with 
                data and technology to solve real-world problems.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                I've worked on projects like a disease prediction tool, a movie recommendation system, 
                a fitness tracker analysis using Power BI, and a donation website for an NGO. These projects 
                helped me learn and apply skills in Python, SQL, Excel, Power BI, web development, and data visualization.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                I'm always eager to learn new things, explore ideas, and use my knowledge to build useful and creative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;