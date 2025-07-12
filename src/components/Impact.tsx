import React, { useState, useEffect, useRef } from 'react';
import { Users, Heart, Building } from 'lucide-react';

const Impact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ drives: 0, children: 0, organizations: 0 });
  const sectionRef = useRef(null);

  const finalCounts = {
    drives: 5,
    children: 250,
    organizations: 15
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 50;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounts({
        drives: Math.floor(finalCounts.drives * easeOutQuart),
        children: Math.floor(finalCounts.children * easeOutQuart),
        organizations: Math.floor(finalCounts.organizations * easeOutQuart)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(finalCounts);
      }
    }, stepDuration);
  };

  return (
    <section id="impact" ref={sectionRef} className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">Impact</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          <div className="w-24 h-1 bg-[#7fb3d3] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center animate-fade-in-up animation-delay-300 hover:scale-105 transition-transform duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2C4A52] rounded-full mb-6 hover:rotate-12 hover:scale-110 transition-all duration-300 animate-pulse-subtle">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <div className="text-5xl font-bold text-[#7fb3d3] mb-2 hover:scale-110 transition-transform duration-300">
              {counts.drives}+
            </div>
            <div className="text-xl text-gray-300">drives done</div>
          </div>

          <div className="text-center animate-fade-in-up animation-delay-600 hover:scale-105 transition-transform duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2C4A52] rounded-full mb-6 hover:rotate-12 hover:scale-110 transition-all duration-300 animate-pulse-subtle">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div className="text-5xl font-bold text-[#7fb3d3] mb-2 hover:scale-110 transition-transform duration-300">
              {counts.children}+
            </div>
            <div className="text-xl text-gray-300">children impacted</div>
          </div>

          <div className="text-center animate-fade-in-up animation-delay-900 hover:scale-105 transition-transform duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2C4A52] rounded-full mb-6 hover:rotate-12 hover:scale-110 transition-all duration-300 animate-pulse-subtle">
              <Building className="h-8 w-8 text-white" />
            </div>
            <div className="text-5xl font-bold text-[#7fb3d3] mb-2 hover:scale-110 transition-transform duration-300">
              {counts.organizations}+
            </div>
            <div className="text-xl text-gray-300">organizations partnered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;