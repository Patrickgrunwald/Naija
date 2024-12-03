import React from 'react';
import { Mail, Phone, Globe, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center mb-8">
          <Building2 className="w-10 h-10 text-emerald-500 mr-3" />
          <span className="text-2xl font-bold text-white">Naija Architect</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Connecting Nigerian architecture firms with visionary clients worldwide.
              Discover exceptional architectural talent for your next project.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <a href="mailto:contact@naijaarchitect.com" className="flex items-center hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                contact@naijaarchitect.com
              </a>
              <a href="tel:+2341234567890" className="flex items-center hover:text-white transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                +234 123 456 7890
              </a>
              <a href="https://naijaarchitect.com" className="flex items-center hover:text-white transition-colors">
                <Globe className="w-4 h-4 mr-2" />
                www.naijaarchitect.com
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-800 mt-8 pt-8 text-sm">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} Naija Architect. All rights reserved.
          </div>
          <div className="text-center md:text-right space-x-4">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Use</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}