import React, { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900/90 backdrop-blur-sm border-b border-gray-800 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold text-white">KAIRO SECURITY</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-blue-500 transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-blue-500 transition-colors">About Us</a>
            <a href="#services" className="text-gray-300 hover:text-blue-500 transition-colors">Services</a>
            <a href="#team" className="text-gray-300 hover:text-blue-500 transition-colors">Join the team</a>
            <a href="tel:07939119680" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Contact Us
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors">About Us</a>
            <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors">Services</a>
            <a href="#team" className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors">Join the team</a>
            <a href="tel:07939119680" className="block px-3 py-2 text-blue-500 font-medium">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;