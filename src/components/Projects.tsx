import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Health and Hygiene drive',
      image: '/WhatsApp Image 2025-07-11 at 09.29.01_c28b1f35.jpg', 
      description: 'Community health awareness and hygiene education programs'
    },
    {
      title: 'Annapoorna',
      image: '/WhatsApp Image 2025-07-11 at 09.23.25_44101226.jpg',
      description: 'Give a meal to those in need through our food donation initiative'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-[#2C4A52] to-[#1e3338] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">Our projects</h2>
          <p className="text-[#b8d4e3] text-lg">The work we're most proud of</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 group-hover:translate-y-1 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#7fb3d3] transition-colors duration-300">{project.title}</h3>
                <p className="text-[#b8d4e3] mb-4 group-hover:text-white transition-colors duration-300">{project.description}</p>
                <button className="inline-flex items-center space-x-2 text-[#7fb3d3] hover:text-white transition-all duration-300 transform hover:translate-x-2">
                  
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;