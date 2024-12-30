import React from 'react';
import { Shield, Users, Award, PhoneCall, Facebook, Instagram, Linkedin } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Team />
      <Footer />
    </div>
  );
}

export default App;