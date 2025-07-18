import React, { useState } from 'react';
import Trophy_img from "../../assets/Trophy_img.png";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    business: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden pt-14">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0">
        <img 
          src="/api/placeholder/1920/1080" 
          alt="Background" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Trophy Images */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 opacity-30">
        <img 
          src={Trophy_img} 
          alt="Trophy Left" 
          className="w-100 h-200 object-contain"
        />
      </div>

      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-30">
        <img 
          src={Trophy_img} 
          alt="Trophy Right" 
          className="w-100 h-200 object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8 mt-3">
            <h1 style={{fontFamily:"Merriweather",color:"rgba(212, 175, 55, 1)"}} className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
              Contact us
            </h1>
            <p style={{fontFamily:"Plus Jakarta Sans"}} className="text-gray-300 text-lg leading-relaxed">
              We want to hear from you! Fill out the form below,
              <br />
              and we'll respond quickly.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            <div>
              <textarea
                name="business"
                placeholder="Tell us about your business"
                rows="4"
                value={formData.business}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 resize-none"
                required
              ></textarea>
            </div>

            <div className="pt-4">
              <button
              style={{fontFamily:"Roboto Condensed",background:"rgba(217, 160, 54, 1)",letterSpacing:"2px"}}
                type="button"
                onClick={handleSubmit}
                className="w-full text-white cursor-pointer bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600  font-semibold py-3 px-6 rounded-full transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Take your Award
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;