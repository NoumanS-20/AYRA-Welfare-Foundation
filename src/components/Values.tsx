import React from 'react';
import { Target, Eye, Award } from 'lucide-react';

const Values = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'Igniting underserved communities through education, support, and new initiatives.'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'A world where every child has access to learning and their community believes in their potential.'
    },
    {
      icon: Award,
      title: 'Goal',
      description: 'To break the cycle of educational inequality by creating long-term educational opportunities.'
    }
  ];

  return (
    <section id="values" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Our core values</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
          <div className="w-24 h-1 bg-[#2C4A52] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 animate-fade-in-up group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2C4A52] rounded-full mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <value.icon className="h-8 w-8 text-white group-hover:animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#2C4A52] transition-colors duration-300">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;