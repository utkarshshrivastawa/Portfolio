import React, { useState, useEffect } from 'react';
import { Download, Mail, Linkedin, Github } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [subtitleText, setSubtitleText] = useState('');
  const [isSubtitleTyping, setIsSubtitleTyping] = useState(false);
  
  const fullText = 'Utkarsh Shrivastawa';
  const subtitleWords = ['Computer', 'Science', 'Graduate'];

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        setIsSubtitleTyping(true);
        clearInterval(typingInterval);
        
        // Start subtitle animation
        let wordIndex = 0;
        let charIndex = 0;
        let currentSubtitle = '';
        
        const subtitleInterval = setInterval(() => {
          if (wordIndex < subtitleWords.length) {
            if (charIndex < subtitleWords[wordIndex].length) {
              currentSubtitle += subtitleWords[wordIndex][charIndex];
              setSubtitleText(currentSubtitle);
              charIndex++;
            } else {
              wordIndex++;
              charIndex = 0;
              if (wordIndex < subtitleWords.length) {
                currentSubtitle += ' ';
                setSubtitleText(currentSubtitle);
              } else {
                setIsSubtitleTyping(false);
                clearInterval(subtitleInterval);
              }
            }
          }
        }, 150);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#089cf1] via-[#11efef] to-[#089cf1] opacity-10 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-[#089cf1] to-[#11efef] rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-[#11efef] to-[#089cf1] rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-gradient-to-r from-[#089cf1] to-[#11efef] rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          {/* Profile Image Left */}
          <div className="flex-shrink-0 mb-8 md:mb-0">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#089cf1] to-[#11efef] rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <img
                src={profileImg}
                alt="Utkarsh Shrivastawa"
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-2xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          {/* Text and Actions Right */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              {displayText}
              {isTyping && <span className="animate-pulse text-[#089cf1]">|</span>}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
              {subtitleText}
              {isSubtitleTyping && <span className="animate-pulse text-[#089cf1]">|</span>}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
              <a
                href="https://drive.google.com/file/d/1k7xYN3QOP6KggVUt-rKa55mDRlAnZWxt/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#089cf1] to-[#11efef] text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 flex items-center space-x-3 group hover:scale-105"
              >
                <Download size={20} className="group-hover:rotate-12 transition-transform" />
                <span className="font-semibold">Download Resume</span>
              </a>
              <button
                onClick={scrollToContact}
                className="border-2 border-[#089cf1] text-[#089cf1] px-8 py-4 rounded-full hover:bg-[#089cf1] hover:text-white transition-all duration-300 flex items-center space-x-3 group hover:scale-105"
              >
                <Mail size={20} className="group-hover:rotate-12 transition-transform" />
                <span className="font-semibold">Contact Me</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#089cf1] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#089cf1] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;