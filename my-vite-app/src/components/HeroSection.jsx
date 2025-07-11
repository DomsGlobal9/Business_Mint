import React from "react";


const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
  autoPlay
  loop
  muted
  playsInline
  className="absolute top-0 left-0 w-full h-full object-cover z-0"
>
  <source src="../../public/clipchamp_video.mp4.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>


      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full  bg-opacity-60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center h-full px-4 text-white">
     <h1 className="text-4xl md:text-6xl font-playfair font-bold leading-tight mb-4 tracking-wide">
  Recognizing India’s <br />
  <span className="text-yellow-500 tracking-wide">Top Visionaries.</span>
</h1>
<p className="text-lg md:text-xl tracking-widest mb-6 font-playfair">
  Credibility. Visibility. Growth.
</p>

        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-md transition duration-300">
          Explore Winners
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
