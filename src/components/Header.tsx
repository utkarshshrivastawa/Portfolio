import React, { useState, useEffect, useRef } from 'react';
import { Download, Menu, X, Sun, Moon } from 'lucide-react';
import { NAV_ITEMS } from '../utils/constants';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', ...NAV_ITEMS.map(item => item.id)];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo as personal brand with animation */}
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#089cf1] to-[#11efef] flex items-center justify-center border-2 border-[#089cf1] shadow-md select-none animate-fade-in">
              <span className="text-2xl font-extrabold text-white tracking-widest">US</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-all duration-300 hover:text-[#089cf1] ${
                  activeSection === item.id ? 'text-[#089cf1]' : 'text-gray-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://drive.google.com/file/d/1k7xYN3QOP6KggVUt-rKa55mDRlAnZWxt/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#089cf1] to-[#11efef] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-[#089cf1] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg p-4 space-y-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id ? 'text-[#089cf1]' : 'text-gray-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://drive.google.com/file/d/1k7xYN3QOP6KggVUt-rKa55mDRlAnZWxt/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#089cf1] to-[#11efef] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 w-full"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;