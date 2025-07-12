import React from 'react';
import { Users, BookOpen, Shield, Heart } from 'lucide-react';

const About = () => {
  const images = [
    '/WhatsApp Image 2025-07-07 at 18.34.22_fb9f9d84.jpg',
    '/WhatsApp Image 2025-07-07 at 18.34.20_7d89f33a.jpg',
    '/WhatsApp Image 2025-07-07 at 18.34.21_72e2002c.jpg',
    '/WhatsApp Image 2025-07-07 at 18.34.21_244136f9.jpg',
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#2C4A52] to-[#1e3338] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mb-16">
          {images.map((image, index) => (
            <div 
              key={index}
              className="aspect-[4/3] rounded-lg overflow-hidden hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl hover:rotate-1 animate-fade-in-up group cursor-pointer transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <img 
                src={image} 
                alt={`AYRA educational activity ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* What We Do Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-[#b8d4e3] animate-slide-in-left">What we do</h2>
            <p className="text-lg leading-relaxed mb-6 text-[#b8d4e3] animate-slide-in-left animation-delay-300">
              At Ayra, we focus on making education and awareness accessible to every child, to share their talents through extracurricular activities, and to build learning programs, distribute essential school supplies, and conduct workshops on social issues affecting children's lives from teachers, and encourage young minds to develop their gifts and talents.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4 animate-slide-in-left animation-delay-600 hover:translate-x-2 transition-transform duration-300">
                <BookOpen className="h-6 w-6 text-[#7fb3d3] mt-1" />
                <div>
                  <h3 className="font-semibold text-[#b8d4e3]">Education Programs</h3>
                  <p className="text-[#7fb3d3]">Comprehensive learning initiatives for all ages</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 animate-slide-in-left animation-delay-900 hover:translate-x-2 transition-transform duration-300">
                <Shield className="h-6 w-6 text-[#7fb3d3] mt-1" />
                <div>
                  <h3 className="font-semibold text-[#b8d4e3]">Awareness Campaigns</h3>
                  <p className="text-[#7fb3d3]">Social awareness and safety education</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 animate-slide-in-left animation-delay-1200 hover:translate-x-2 transition-transform duration-300">
                <Heart className="h-6 w-6 text-[#7fb3d3] mt-1" />
                <div>
                  <h3 className="font-semibold text-[#b8d4e3]">Community Support</h3>
                  <p className="text-[#7fb3d3]">Building supportive networks for children</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden animate-slide-in-right hover:scale-105 transition-transform duration-500">
              <img 
                src="/WhatsApp Image 2025-07-07 at 18.41.33_8bb4f4c5.jpg"
                alt="AYRA educational workshop"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/20 rounded-full flex items-center justify-center animate-bounce-slow">
              <Users className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;