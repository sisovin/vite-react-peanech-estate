import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#2563eb] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center gap-6">
              <a href="tel:+85592800801" className="flex items-center gap-2 hover:text-gray-200">
                <Phone size={16} />
                +855 92 800 801
              </a>
              <a href="mailto:info@peanech.com" className="flex items-center gap-2 hover:text-gray-200">
                <Mail size={16} />
                info@peanech.com
              </a>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <a href="#" className="hover:text-gray-200"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-gray-200"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-gray-200"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="hover:text-gray-200"><i className="fab fa-telegram"></i></a>
              <a href="#" className="hover:text-gray-200"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="text-3xl font-bold">
              <span className="text-[#2563eb]">Peanech.</span>
              <span className="text-[#059669]">com</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-[#1e293b] font-medium hover:text-[#2563eb] transition-colors">
                Home
              </Link>
              <Link to="/properties" className="text-[#1e293b] font-medium hover:text-[#2563eb] transition-colors">
                Properties
              </Link>
              <Link to="/agents" className="text-[#1e293b] font-medium hover:text-[#2563eb] transition-colors">
                Agents
              </Link>
              <Link to="/about" className="text-[#1e293b] font-medium hover:text-[#2563eb] transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-[#1e293b] font-medium hover:text-[#2563eb] transition-colors">
                Contact
              </Link>
            </nav>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/login"
                className="px-5 py-2.5 border border-[#2563eb] text-[#2563eb] rounded-md font-medium hover:bg-[#2563eb] hover:bg-opacity-10 transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="px-5 py-2.5 bg-[#2563eb] text-white rounded-md font-medium hover:bg-[#1d4ed8] transition-colors"
              >
                List Property
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-[#1e293b] text-2xl"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <Link
                to="/"
                className="text-[#1e293b] font-medium hover:text-[#2563eb] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/properties"
                className="text-[#1e293b] font-medium hover:text-[#2563eb] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Properties
              </Link>
              <Link
                to="/agents"
                className="text-[#1e293b] font-medium hover:text-[#2563eb] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Agents
              </Link>
              <Link
                to="/about"
                className="text-[#1e293b] font-medium hover:text-[#2563eb] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-[#1e293b] font-medium hover:text-[#2563eb] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-2">
                <Link
                  to="/login"
                  className="px-5 py-2.5 border border-[#2563eb] text-[#2563eb] rounded-md font-medium text-center hover:bg-[#2563eb] hover:bg-opacity-10 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="px-5 py-2.5 bg-[#2563eb] text-white rounded-md font-medium text-center hover:bg-[#1d4ed8] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  List Property
                </Link>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
