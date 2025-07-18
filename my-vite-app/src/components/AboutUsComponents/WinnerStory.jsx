import React from 'react';
import HL_icons from "../../assets/Highlights_icons.svg"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    title: "CEO, TechVision Solutions",
    company: "",
    badge: "NATION WIDE WOMEN 2023",
    quote: "Winning the Business Mint award transformed our brand visibility. We saw a 300% increase in inquiries within months!",
    image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    title: "Founder, EcoGreen Industries",
    company: "",
    badge: "NATION WIDE START UP",
    quote: "The media coverage we received was incredible. Business Mint helped us reach audiences we never thought possible.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 3,
    name: "Anita Desai",
    title: "Director, Creative Minds Agency",
    company: "",
    badge: "UNDER 30",
    quote: "From nomination to award ceremony, the entire experience was world-class. Highly recommend to every entrepreneur!",
    image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  }
];

const WinnersStory= () => {
  return (
    <section  style={{ fontFamily: "Plus Jakarta Sans" , background: "rgba(16, 26, 30, 1)" }}  className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2  style={{ fontFamily: "Merriweather" ,color: "rgba(212, 175, 55, 1)"  }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-12 text-left">
          Winner's Story
        </h2>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 h-[454px] ">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="cursor-pointer bg-gray-100 rounded-2xl p-5 flex flex-col items-center text-center h-full transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Profile Image */}
              <div className="w-20 h-20 mb-6 ">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full rounded-full object-cover border-4 border-yellow-400"
                />
              </div>
              
              {/* Name and Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-tight">
                {testimonial.title}
              </p>
              
              {/* Badge */}
              <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-xs font-bold mb-6">
                {testimonial.badge}
              </div>
              
              {/* Quote */}
              <div className="flex-1 flex flex-col justify-center">
                {/* Quote Mark */}
                <div className="text-6xl font-serif text-yellow-400 mb-4 leading-none">
                  <img src={HL_icons} alt="HL_icon" />
                </div>
                
                {/* Quote Text */}
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
                
                {/* Accent Line */}
                <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WinnersStory;