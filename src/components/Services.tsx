import React from 'react';
import { Shield, Users, Award, Clock } from 'lucide-react';
import { images } from '../config/images';

const services = [
  {
    icon: <Shield className="h-12 w-12 text-blue-500" />,
    title: "Event Security",
    description: "Comprehensive security solutions for high-profile events, festivals, and entertainment venues. We ensure seamless crowd management and event safety.",
    image: images.services.events
  },
  {
    icon: <Users className="h-12 w-12 text-blue-500" />,
    title: "Door Security",
    description: "Professional door supervision with a focus on customer service. Our team maintains venue safety while ensuring a welcoming atmosphere.",
    image: images.services.doorSecurity
  },
  {
    icon: <Award className="h-12 w-12 text-blue-500" />,
    title: "Retail Security",
    description: "Advanced loss prevention and retail security services. We protect your assets while maintaining a positive shopping environment.",
    image: images.services.retail
  },
  {
    icon: <Clock className="h-12 w-12 text-blue-500" />,
    title: "Corporate Security",
    description: "Round-the-clock security solutions for corporate environments. We safeguard your business assets and personnel with unwavering vigilance.",
    image: images.services.corporate
  }
];

const ServiceCard = ({ service, index }: { service: any, index: number }) => (
  <div className="relative overflow-hidden rounded-lg shadow-xl group">
    <img 
      src={service.image} 
      alt={service.title}
      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
    <div className="absolute inset-0 p-6 flex flex-col justify-end">
      <div className="flex justify-center mb-4 transform transition-transform duration-300 group-hover:-translate-y-2">
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold text-white text-center mb-3">
        {service.title}
      </h3>
      <p className="text-gray-300 text-center transform transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
        {service.description}
      </p>
    </div>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Comprehensive Security Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Delivering excellence in security services through innovation, expertise, and unwavering commitment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;