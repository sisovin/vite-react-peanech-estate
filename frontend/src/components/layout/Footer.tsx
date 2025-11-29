import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '../ui/button';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#1e293b] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <div className="text-3xl font-bold">
                <span className="text-[#2563eb]">Peanech.</span>
                <span className="text-[#059669]">com</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner in finding the perfect property in Cambodia.
              We combine technology with personalized service to make your real estate dreams a reality.
            </p>
            <div className="flex gap-4">
              <Link to="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#2563eb] transition-colors">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#2563eb] transition-colors">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#2563eb] transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#2563eb] transition-colors">
                <i className="fab fa-telegram"></i>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#2563eb]"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/properties" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span>→</span> Properties
                </Link>
              </li>
              <li>
                <Link to="/agents" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span>→</span> Agents
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span>→</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span>→</span> Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span>→</span> Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span>→</span> Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative pb-2">
              Contact Info
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#2563eb]"></span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-[#2563eb] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white">+855 92 800 801</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-[#2563eb] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">info@peanech.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#2563eb] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Address</p>
                  <p className="text-white">
                    123 Real Estate Ave<br />
                    Phnom Penh, Cambodia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative pb-2">
              Stay Updated
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#2563eb]"></span>
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest properties and market insights.
            </p>
            <div className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent text-white"
                />
                <Button className="px-4 py-2 bg-[#2563eb] hover:bg-[#1d4ed8] rounded-r-lg transition-colors">
                  <Send size={20} />
                </Button>
              </div>
              <p className="text-xs text-gray-500">
                By subscribing, you agree to our Privacy Policy.
              </p>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Phnom Penh', 'Siem Reap', 'Sihanoukville', 'Battambang', 'Kampot', 'Kep'].map((location) => (
              <Link
                key={location}
                to={`/properties?location=${encodeURIComponent(location)}`}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {location}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 Peanech.com. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </Link>
              <Link to="/disclaimer" className="text-gray-400 hover:text-white transition-colors text-sm">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
