import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../utils/constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#089cf1] to-[#11efef] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={project.backgroundImage} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-8 h-full min-h-[400px] flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#11efef] transition-colors">
                      {project.title}
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {project.description.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-[#11efef] mt-1 text-sm">•</span>
                          <span className="text-gray-200 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-[#089cf1] to-[#11efef] text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 flex items-center space-x-2 group/btn"
                      >
                        <ExternalLink size={16} className="group-hover/btn:rotate-45 transition-transform" />
                        <span className="text-sm font-semibold">Live Demo</span>
                      </a>
                    )}
                    {project.viewCode && (
                      <a
                        href={project.viewCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300 flex items-center space-x-2 group/btn"
                      >
                        <Github size={16} className="group-hover/btn:rotate-12 transition-transform" />
                        <span className="text-sm font-semibold">View Code</span>
                      </a>
                    )}
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

export default Projects;