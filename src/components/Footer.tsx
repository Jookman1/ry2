import React from 'react';
import { Facebook, Instagram, Linkedin, Shield, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">KAIRO SECURITY LTD</span>
            </div>
            <p className="text-lg text-blue-500 font-medium mb-4">Where Vigilance Meets Excellence</p>
            <p className="text-gray-400 mb-6">
              Setting the standard in professional security services with our commitment to excellence, 
              reliability, and customer satisfaction.
            </p>
            <p className="text-gray-400">Company No. 13428156</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Services</a></li>
              <li><a href="#team" className="hover:text-blue-500 transition-colors">Join the team</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <div className="space-y-4">
              <a href="tel:07939119680" className="flex items-center space-x-3 hover:text-blue-500 transition-colors">
                <Phone className="h-5 w-5" />
                <span>07939 119680</span>
              </a>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kairo Security Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;