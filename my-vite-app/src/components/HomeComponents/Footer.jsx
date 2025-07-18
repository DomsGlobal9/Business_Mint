import React from "react";
import { Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import Footer_bg from "../../assets/Footer_bg_3.png"
import bm_logo from "../../assets/Business_mint_logo.svg";
const Footer = () => {
  return (
    <footer className="relative z-0 bg-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Geometric Lines Pattern */}
        <img src={Footer_bg} alt="Footer_bg" className="absolute inset-0 w-full h-full opacity-20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 py-16">
        {/* Main Heading */}
        <div className="text-center mb-12 max-w-4xl">
          <h1
            style={{
              fontFamily: "Merriweather",
              color: "rgba(255, 255, 255, 1)",
            }}
            className="text-1xl md:text-4xl lg:text-4xl font-bold text-white leading-tight mb-8"
          >
            WHERE WORLD-CLASS MARKET
            <br />
            RESEARCH MEETS THE BRIGHTEST
            <br />
            STARTUPS, ENTREPRENEURS &<br />
            INVESTORS.
          </h1>

          {/* Call to Action Button */}
          <button
            style={{
              padding: "12px 24px",
              borderRadius: "9999px",
              background:
                "linear-gradient(#000, #000) padding-box, linear-gradient(90deg, #ffffff, #FFAB20) border-box",
              border: "2px solid transparent",
              color: "white",
              fontWeight: "600",
              fontFamily: "sans-serif",
              fontSize: "16px",
              boxShadow: "0 0 30px 5px rgba(255, 196, 21, 0.4)", // glow effect
              cursor: "pointer",
            }}
            className="cursor-pointer bg-transparent border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-semibold py-3 px-8  transition-all duration-300 text-lg"
          >
            Get your award
          </button>
        </div>

        {/* Contact Information */}
        <div style={{fontFamily:"Plus Jakarta Sans"}} className="text-center mb-16 text-gray-300">
          <p className="mb-2">Mobile: +91-9063030106</p>
          <p>Address: Shilpa Park, Kondapur, Hyderabad, Telangana - 500084</p>
        </div>

        {/* Bottom Section */}
        <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <img src={bm_logo} alt="Business Mint Logo" className="h-8" />
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="border-yellow-400 bg-gray-800 hover:bg-amber-400 text-white hover:text-black p-3 rounded-full transition-all duration-300 group"
            >
              <Linkedin size={20} className="border-yellow-400"  />
            </a>
            <a
              href="#"
              className="border-yellow-400 bg-gray-800 hover:bg-amber-400 text-white hover:text-black p-3 rounded-full transition-all duration-300 group"
            >
              <Facebook size={20} className="border-yellow-400"  />
            </a>
            <a
              href="#"
              className="border-yellow-400 bg-gray-800 hover:bg-amber-400 text-white hover:text-black p-3 rounded-full transition-all duration-300 group"
            >
              <Instagram size={20} className="border-yellow-400" />
            </a>
            <a
              href="#"
              className="border-yellow-400 bg-gray-800 hover:bg-amber-400 text-white hover:text-black p-3 rounded-full transition-all duration-300 group"
            >
              <Youtube size={20} className="border-yellow-400" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div  style={{fontFamily:"Plus Jakarta Sans"}} className="text-center mt-12 text-gray-400 text-sm max-w-4xl">
          <p>
            Copyright © 2025 Business Mint - The Market Research Company |
            Business Awards, Excellence Awards, Award Ceremonies All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
