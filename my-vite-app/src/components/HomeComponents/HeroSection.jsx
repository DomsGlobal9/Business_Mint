import { Video } from "lucide-react";
import React from "react";
import hero_video from "../../assets/clipchamp_video.mp4.mp4";
import eclipse_shadow from "../../assets/Ellipse_shadow.png";
const HeroSection = () => {
  return (
    <>
      <div></div>
      <div className="relative w-full h-screen overflow-hidden bg-black/120 backdrop-blur-md z-1">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 bg-black/90 backdrop-blur-sm opacity-100"
        >
          <source src={hero_video} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>

        {/* Content */}
        <div className="relative top-30 z-20 flex flex-col justify-center items-center text-center h-full px-4 text-white">
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-4 tracking-widest"
            style={{ fontFamily: "merriweather" }}
          >
            Recognizing India’s <br />
            <span style={{color: "rgba(181, 124, 51, 1)"}} className=" tracking-wide">
              Top Visionaries.
            </span>
          </h1>
          <p  style={{ fontFamily: "merriweather",letterSpacing:"5px" }} className="text-lg md:text-xl tracking-widest mb-6 font-playfair">
            Credibility. Visibility. Growth.
          </p>

          <button  style={{ fontFamily: "Roboto Condensed" }} className=" cursor-pointer font-semibold  bg-yellow-400 hover:bg-yellow-500 text-black  px-6 py-3 rounded-full shadow-md transition duration-300">
            EXPLORE WINNERS
          </button>
        </div>
        {/* <div className="absolute bottom-0 left-1/2   transform -translate-x-1/2 w-[120%] h-[100px] z-30 rounded-full pointer-events-none">
        <img src={eclipse_shadow} alt="eclipse" className="relative z-20 top-[10px]" />
        </div> */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            top: "90%",
            width: "100%",
            height: "100px",
            zIndex: 10,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0) 80%)",
            maskImage:
              "radial-gradient(ellipse at center, black 25%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 25%, transparent 100%)",
            filter: "brightness(1.3)", // optional: brightens background layer underneath
          }}
        ></div>
      </div>
    </>
  );
};

export default HeroSection;