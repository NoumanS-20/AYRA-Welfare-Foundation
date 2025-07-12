import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-[#2C4A52] to-[#1e3338] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/90 to-teal-800/90"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#2C4A52]/90 to-[#1e3338]/90"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="max-w-3xl">
          <div className="mb-8 animate-fade-in-up">
            <img 
              src="/image.png" 
              alt="AYRA Logo" 
              className="h-20 w-20 mb-6 animate-float drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="animate-fade-in-up block">WELCOME TO</span>
            <span className="text-[#7fb3d3] animate-fade-in-up animation-delay-300 block">AYRA FOUNDATION</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-[#b8d4e3] animate-fade-in-up animation-delay-600">
            At Ayra, we believe that every child deserves hope that surpasses just survival—they deserve the 
            power of education, the safety of awareness, and the warmth of a supportive community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-900">
            <a 
              href="#contact"
              className="bg-white text-[#2C4A52] px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-pulse-subtle text-center"
            >
              Get Involved
            </a>
            <a 
              href="https://www.instagram.com/ayrawelfarefoundation?igsh=eGhoNnRvMmUzOG9h"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#2C4A52] transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white" />
      </div>
    </section>
  );
};

export default Hero;