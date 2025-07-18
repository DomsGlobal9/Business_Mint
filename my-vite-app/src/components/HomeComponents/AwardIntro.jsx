import React from 'react';
import Award_bg2 from "../../assets/Award_bg2.png"
const AwardIntro = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {/* Background image */}
      <img
        src={Award_bg2} // Replace with trophy image
        alt="trophy background"
        className="absolute  w-full h-full object-cover"
      />

      {/* Overlay (optional) */}
      <div className="absolute inset-0 bg-black/85 "></div>

      {/* Content on top of image */}
      <div className="relative z-10 h-full flex items-center px-4 md:px-20">
        <div className="max-w-xl text-white space-y-6">
          <h2 style={{fontFamily:"Merriweather"}} className="text-3xl md:text-5xl font-bold leading-tight">
            Join the <br />     
       <span style={{color: "rgba(181, 124, 51, 1)"}}>Business Mint</span> Circle
          </h2>
          <p style={{fontFamily:"Plus Jakarta Sans"}} className="text-sm md:text-base text-gray-300">
           Take the first step towards building credibility and gaining the recognition you deserve.
          </p>
          <button style={{fontFamily:"Roboto Condensed",background: "rgba(255, 196, 21, 1)"}} className=" cursor-pointer bg-amber-500 text-black px-6 py-2 rounded-full font-medium hover:bg-amber-600 transition">
            Get Nominated
          </button>
        </div>
      </div>
    </section>
  );
};

export default AwardIntro;
