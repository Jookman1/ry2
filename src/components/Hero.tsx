import React from 'react';
import { images } from '../config/images';

const Hero = () => {
  return (
    <div id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("${images.hero}")`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Elite Security Solutions for <span className="text-blue-500">Modern Challenges</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Setting the gold standard in professional security services with cutting-edge solutions and unmatched expertise
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#services" 
              className="bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              Explore Our Services
            </a>
            <a 
              href="tel:07939119680" 
              className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-md text-lg font-medium hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105"
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;