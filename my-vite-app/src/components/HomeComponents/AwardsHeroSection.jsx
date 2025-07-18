import React from "react";
import BG_img from "../../assets/Award_sec_bg.png";
const AwardsHeroSection = () => {
  return (
    <section className="relative w-full h-[650px] overflow-hidden bg-black">
       
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src={BG_img} // Replace with actual image
          alt="awards background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Scrolling marquee header */}

      {/* Centered content */}
      <div style={{fontFamily:"Merriweather"}} className="relative z-30 flex flex-col justify-center items-center text-center h-full px-4">
        <h1 style={{fontSize:"55px",letterSpacing:"5px"}} className="text-white text-3xl md:text-3xl font-semibold mb-4 tracking-widest">
          Celebrate the <br />
          <span className="text-white/90">achievements that fill</span>
          <br />
          your heart with pride!
        </h1>
        <button style={{fontFamily:"Roboto Condensed",border: "0.9px solid rgba(212, 175, 55, 1)"}} className=" cursor-pointer mt-4 bg-transparent border border-white text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition">
          EVENTS & AWARDS
        </button>
      </div>
    </section>
  );
};

export default AwardsHeroSection;
