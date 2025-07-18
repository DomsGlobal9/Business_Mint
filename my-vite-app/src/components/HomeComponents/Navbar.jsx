import React, { useState } from "react";
import BM_logo from "../../assets/Business_mint_logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Events & Awards", path: "/events" },
    { name: "News", path: "/news" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      {/* // <nav className="relative z-50 px-6 py-4 bg-black/90 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.4)]" >  */}
      <nav className="absolute w-full z-50 px-6 py-4 bg-gradient-to-b from-transparent to-black shadow-[0_-20px_40px_rgba(0,0,0,0.6)] backdrop-blur-[20px]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img src={BM_logo} alt="Logo" className="h-10" />
            </Link>
          </div>

          {/* Navigation + CTA */}
          {/* <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item, index) => (
            <div key={index} className="flex items-center text-sm font-medium">
               <Link
                to={item.path}
                className="text-white hover:text-amber-400 transition-colors duration-300 font-Roboto"
              >
                {item.name.toUpperCase()}
              </Link>
              {index !== navItems.length - 1 && (
                <span className=" text-yellow-400 font-light ps-3">\</span>
              )}
            </div>
          ))}

      
          <button style={{ backgroundColor: "rgba(255, 196, 21, 1)" }} className="ml-4 from-amber-400 to-yellow-500 cursor-pointer text-black px-6 py-2 rounded-full font-semibold text-sm hover:from-amber-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
            TAKE YOUR AWARD
          </button>
        </div> */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center text-sm font-medium"
              >
                <Link
                  to={item.path}
                  className={`font-Roboto transition-colors duration-300 ${
                    activeIndex === index
                      ? "text-amber-400"
                      : "text-white hover:text-amber-400"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {item.name.toUpperCase()}
                </Link>
                {index !== navItems.length - 1 && (
                  <span className="text-yellow-400 font-light ps-3">\</span>
                )}
              </div>
            ))}

            {/* CTA Button beside links */}
            <button
              style={{ backgroundColor: "rgba(255, 196, 21, 1)" }}
              className="ml-4 from-amber-400 to-yellow-500 cursor-pointer text-black px-6 py-2 rounded-full font-semibold text-sm hover:from-amber-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              TAKE YOUR AWARD
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
