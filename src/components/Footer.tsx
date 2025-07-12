import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/image.png" 
                alt="AYRA Logo" 
                className="h-10 w-10 transition-all duration-300 hover:scale-110 hover:rotate-12 drop-shadow-lg"
              />
              <span className="text-2xl font-bold">AYRA</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Empowering children through education, awareness, and community support. 
              Every child deserves hope, safety, and the opportunity to thrive.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <span>ayrwelfarefoundation@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>7007815129</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>Lucknow</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-[#7fb3d3] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#7fb3d3] transition-colors">About</a></li>
              <li><a href="#values" className="hover:text-[#7fb3d3] transition-colors">Values</a></li>
              <li><a href="#projects" className="hover:text-[#7fb3d3] transition-colors">Projects</a></li>
              <li><a href="#impact" className="hover:text-[#7fb3d3] transition-colors">Impact</a></li>
              <li><a href="#contact" className="hover:text-[#7fb3d3] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-[#7fb3d3] transition-colors">Volunteer</a></li>
              <li><a href="#" className="hover:text-[#7fb3d3] transition-colors">Donate</a></li>
              <li><a href="#" className="hover:text-[#7fb3d3] transition-colors">Partner</a></li>
              <li><a href="#" className="hover:text-[#7fb3d3] transition-colors">Sponsor</a></li>
              <li><a href="#" className="hover:text-[#7fb3d3] transition-colors">Newsletter</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AYRA Welfare Foundation. All rights reserved.</p>
          <p className="mt-2 text-sm">Making a difference, one child at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
