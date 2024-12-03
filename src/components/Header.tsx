import React from 'react';
import { Building2, Menu, Search, Star, MessageSquare, Settings, User, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Building2 className="w-8 h-8 text-emerald-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">
              Naija Architect
            </h1>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About Us</Link>
            <Link to="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            <Link to="/faq" className="text-gray-600 hover:text-gray-900">FAQ</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <Link to="/favorites" className="p-2 hover:bg-gray-100 rounded-full">
              <Star className="w-5 h-5 text-gray-600" />
            </Link>
            <Link to="/messages" className="p-2 hover:bg-gray-100 rounded-full">
              <MessageSquare className="w-5 h-5 text-gray-600" />
            </Link>
            <Link to="/settings" className="p-2 hover:bg-gray-100 rounded-full">
              <Settings className="w-5 h-5 text-gray-600" />
            </Link>
            <Link to="/architect/dashboard" className="p-2 hover:bg-gray-100 rounded-full">
              <LayoutDashboard className="w-5 h-5 text-gray-600" />
            </Link>
            <Link to="/profile" className="p-2 hover:bg-gray-100 rounded-full">
              <User className="w-5 h-5 text-gray-600" />
            </Link>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}