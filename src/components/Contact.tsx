import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram } from 'lucide-react';
import { send } from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill in all fields.');
      return;
    }

    const serviceID = 'service_x6992lq';
    const templateID = 'template_hsv6dmr';
    const userID = 'OlIOpd5MF4XjaYNyX';

    send(serviceID, templateID, formData, userID)
      .then(() => {
        setStatusMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }, (error: { text: string }) => {
        setStatusMessage('Failed to send message. Please try again later. Error: ' + error.text);
        console.error('EmailJS error:', error);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#2C4A52] to-[#1e3338] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">Get involved</h2>
          <p className="text-[#b8d4e3] text-lg">Join us in making a difference in children's lives</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-8 animate-fade-in-up">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 animate-slide-in-left animation-delay-300 hover:translate-x-2 transition-transform duration-300">
                <Mail className="h-6 w-6 text-[#7fb3d3] mt-1" />
                <div>
                  <h4 className="font-semibold text-[#b8d4e3]">Email</h4>
                  <p className="text-[#7fb3d3]">ayrawelfarefoundation@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 animate-slide-in-left animation-delay-600 hover:translate-x-2 transition-transform duration-300">
                <Phone className="h-6 w-6 text-[#7fb3d3] mt-1" />
                <div>
                  <h4 className="font-semibold text-[#b8d4e3]">Phone</h4>
                  <p className="text-[#7fb3d3]">7007815129</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 animate-slide-in-left animation-delay-900 hover:translate-x-2 transition-transform duration-300">
                <MapPin className="h-6 w-6 text-[#7fb3d3] mt-1" />
                <div>
                  <h4 className="font-semibold text-[#b8d4e3]">Address</h4>
                  <p className="text-[#7fb3d3]">Lucknow</p>
                </div>
              </div>
            </div>

            <div className="mt-8 animate-slide-in-left animation-delay-1200">
              <h4 className="font-semibold text-[#b8d4e3] mb-4">Follow us</h4>
              <p className="text-[#7fb3d3] flex items-center space-x-2">
                <Instagram className="h-5 w-5" />
                <span>@ayrawelfarefoundation</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-8 animate-fade-in-up">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up animation-delay-300">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <label htmlFor="name" className="block text-[#b8d4e3] mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-[#7fb3d3] focus:outline-none focus:ring-2 focus:ring-[#7fb3d3] focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              
              <div className="transform hover:scale-105 transition-transform duration-300">
                <label htmlFor="email" className="block text-[#b8d4e3] mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-[#7fb3d3] focus:outline-none focus:ring-2 focus:ring-[#7fb3d3] focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="transform hover:scale-105 transition-transform duration-300">
                <label htmlFor="message" className="block text-[#b8d4e3] mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-[#7fb3d3] focus:outline-none focus:ring-2 focus:ring-[#7fb3d3] focus:border-transparent resize-none"
                  placeholder="Tell us how you'd like to get involved..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-white text-[#2C4A52] px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 animate-pulse-subtle"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
            {statusMessage && (
              <p className="mt-4 text-center text-sm text-yellow-300">{statusMessage}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
