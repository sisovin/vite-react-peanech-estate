import React from 'react';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white py-2 px-4 text-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone size={14} />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={14} />
            <span>info@peanechestate.com</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <a href="#" className="hover:text-primary-400 transition-colors">
            <Facebook size={16} />
          </a>
          <a href="#" className="hover:text-primary-400 transition-colors">
            <Twitter size={16} />
          </a>
          <a href="#" className="hover:text-primary-400 transition-colors">
            <Instagram size={16} />
          </a>
          <a href="#" className="hover:text-primary-400 transition-colors">
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
