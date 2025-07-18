import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
// import ScrollTrigger from "react-scroll-trigger";

const WhoWeAreSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Only animate once
    threshold: 0.3, // Trigger when 30% visible
  });
  return (
    <div style={{background:"rgba(16, 26, 30, 1)"}} className="relative h-[500px] z-0"> 

     <div className="absolute top-0 left-0 w-full h-12 z-20 pointer-events-none bg-gradient-to-b from-[#101A1E] via-[#101A1E]/80 to-transparent blur-sm"></div>
    {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-1 py-8 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-2 lg:gap-3 items-center justify-start">
          {/* Left content */}
          <div className="space-y-4 w-[540px]">
            <div>
              <h2 style={{fontFamily:"Merriweather"}} className="text-4xl lg:text-5xl font-bold text-white mb-6 font-merri">
                WHO
                <br />
                <span className=""> <span style={{color: "rgba(181, 124, 51, 1)"}}>WE</span> ARE</span>
              </h2>
              <p style={{fontFamily:"Plus Jakarta Sans"}} className="text-gray-300 text-lg leading-relaxed max-w-lg">
                Business Mint is an independent global market research and brand
                recognition platform founded in 2018. We exist to bridge the gap
                between ambition and recognition.
              </p>
            </div>

            <button className="inline-flex items-center cursor-pointer text-white px-8 py-3 border border-amber-400/50 text-amber-400 font-medium rounded-full hover:bg-amber-400/10 transition-all duration-300 backdrop-blur-sm">
              MORE ABOUT US
            </button>
          </div> 

          {/* Right content - Stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 pe-7">
      
            <div className="group relative w-[250px] right-6" >
              <div className="absolute inset-0"></div>
              <div ref={ref} className="relative p-8 text-start w-[225px]">
                <div style={{fontFamily:"Merriweather"}} className="text-6xl font-bold text-white text-start pb-3 ps-3">
                  {inView && <CountUp start={0} end={57} duration={2} />}
                </div>
                <div className="text-amber-400 text-lg font-medium">
                  <h1 style={{fontFamily:"Plus Jakarta Sans",color:"rgba(181, 124, 51, 1)"}}>Successful Events</h1>
                </div>
                <div style={{fontFamily:"Plus Jakarta Sans"}} className="text-gray-400 text-sm">
                  Award ceremonies across major cities
                </div>
              </div>
            </div>

            {/* Million Audience Reach Card */}
           <div className="group relative w-[280px] me-3 right-6">
              <div className="absolute inset-0"></div>
              <div ref={ref} className="relative p-8 text-start w-[225px]">
                <div style={{fontFamily:"Merriweather"}} className="text-6xl font-bold text-white text-start pb-3 ps-3">
                  {inView && <CountUp start={0} end={100} duration={2} />}<span style={{color: 'rgba(118, 115, 112, 1)',fontFamily:"Merriweather"}} className="pe-4">+</span>
                </div>
                <div className="text-amber-400 text-lg font-medium w-[200px]">
                  <h1 style={{fontFamily:"Plus Jakarta Sans",color:"rgba(181, 124, 51, 1)"}}>Million Audience Reach</h1>
                </div>
                <div style={{fontFamily:"Plus Jakarta Sans"}} className="text-gray-400 text-sm">
                  Reach across our media network
                </div>
              </div>
            </div>

            {/* Award Winners Card */}
           <div className="group relative w-[270px] ms-4 right-6">
              <div className="absolute inset-0"></div>
              <div style={{fontFamily:"Plus Jakarta Sans"}} ref={ref} className="relative p-8 text-start w-[225px]">
                <div style={{fontFamily:"Merriweather"}} className="text-6xl font-bold text-white text-start pb-3 ps-3">
                  {inView && <CountUp start={1000} end={5000} duration={2} />}<span style={{color: 'rgba(118, 115, 112, 1)',fontFamily:"Merriweather"}} >+</span>
                </div>
                <div className="text-amber-400 text-lg font-medium">
                  <h1 style={{color:"rgba(181, 124, 51, 1)"}}>Award Winners</h1>
                </div>
                <div className="text-gray-400 text-sm">
                  Businesses we've helpedcelebrate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      {/* <div className="absolute top-20 right-20 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div> */}
    </div>
  );
};

export default WhoWeAreSection;
