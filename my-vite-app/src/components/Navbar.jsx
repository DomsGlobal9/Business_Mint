import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import BM_logo from "../assets/BM_logo.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "Events & Awards", "News", "About", "Contact Us"];

  return (
    <nav className="bg-black text-white w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Uncomment logo below if image is available */}
          {/* <img src={BM_logo} alt="BusinessMint Logo" className="h-10" /> */}
          <span className="text-yellow-500 font-extrabold text-xl uppercase tracking-wide">
            BusinessMint
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, i) => (
            <span
              key={i}
              className={`${
                item === "Home" ? "text-yellow-500 font-bold" : "text-white"
              } hover:text-yellow-400 transition duration-200`}
            >
              {item.toUpperCase()}
              {i !== navItems.length - 1 && (
                <span className="mx-2 text-yellow-400 font-light">\</span>
              )}
            </span>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-5 rounded-full transition duration-300">
            TAKE YOUR AWARD
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 pt-2 pb-4 space-y-3">
          {navItems.map((item, i) => (
            <div
              key={i}
              className="text-white hover:text-yellow-400 text-sm font-medium"
            >
              {item}
            </div>
          ))}
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full mt-3 transition">
            TAKE YOUR AWARD
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
