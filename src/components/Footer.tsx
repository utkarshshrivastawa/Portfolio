import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Utkarsh Shrivastawa</h3>
            <p className="text-gray-400">Computer Science Graduate | Data Science Enthusiast</p>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="text-red-500" size={16} />
            <span>and</span>
            <Code className="text-[#089cf1]" size={16} />
            <span>by Utkarsh Shrivastawa</span>
          </div>
          
          <div className="mt-4 text-gray-500">
            <p>&copy; 2024 Utkarsh Shrivastawa. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;