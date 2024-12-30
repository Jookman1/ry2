import React from 'react';
import { images } from '../config/images';
import { Shield, Award, Users, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8 leading-tight">
              Setting New Standards in <span className="text-blue-500">Security Excellence</span>
            </h2>
            <div className="text-lg text-gray-300 space-y-6">
              <p>
                With over a decade of experience in the security industry, Kairo Security Ltd has established itself as a leader in providing comprehensive security solutions. Our expertise spans across various sectors, from high-profile events and festivals to corporate security management.
              </p>
              <p>
                Our commitment to excellence is reflected in our meticulously selected team of security professionals, each bringing unique expertise and dedication to their role. We pride ourselves on delivering customized security solutions that not only meet but exceed our clients' expectations.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-blue-500" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-blue-500" />
                  <span>SIA Approved</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-blue-500" />
                  <span>Expert Team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-8 w-8 text-blue-500" />
                  <span>24/7 Available</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="relative">
              <img 
                src={images.about}
                alt="Security Professional"
                className="rounded-lg shadow-2xl object-cover w-full h-[600px]"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-blue-500/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;