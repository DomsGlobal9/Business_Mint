import React, { useState } from "react";
import Award1 from "../../assets/NWA_Csuit1.svg";
import Award2 from "../../assets/NWA_Csuit2.svg";
import Award3 from "../../assets/NWA_Csuit3.svg";
import Award4 from "../../assets/NWA_Csuit4.svg";
import Award5 from "../../assets/NWA_Csuit5.svg";
import Award6 from "../../assets/NWA_Csuit6.svg";
import Award7 from "../../assets/NWA_Csuit7.svg";
import Award8 from "../../assets/NWA_Csuit8.svg";
import Award9 from "../../assets/NWA_Csuit9.svg";
import Award10 from "../../assets/NWA_Csuit10.svg";
import Award11 from "../../assets/NWA_Csuit11.svg";
import Bm_icon from "../../assets/bm_icon.svg";
import Winner1 from "../../assets/1575885642_nationwideawardhyd2019.jpg";
import Winner2 from "../../assets/1576261975_nationwideawards2019inhicc.jpg";
import Winner3 from "../../assets/1576262094_businesswomenawards.jpg";
import Winner4 from "../../assets/1578586018_nationwide healthcare awards 2020 .png";
import Winner5 from "../../assets/1615195656_Business Mint Website Listing -  Women Nationwide Awards 2021.jpg";
import RollingGallery from "./RollingGallery";

import star from "../../assets/Star.svg"

const awardLogos = [
  Award1,
  Award2,
  Award3,
  Award4,
  Award5,
  Award6,
  Award7,
  Award8,
  Award9,
  Award10,
  Award11,
  Award3,
  Award4,
  Award5,
  Award6,
  Award7,
];
const awardImages = [Winner1, Winner2, Winner3, Winner4, Winner5];
const SignatureAwards = () => {
  return (
    <>
      <section className="bg-[#0E161B] text-white py-12 px-4 md:px-16 relative overflow-hidden h-[500px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Scrolling Awards */}
          <div className="w-full lg:w-2/3 overflow-hidden">
            <marquee direction="left" scrollamount="20">
              <div className="flex gap-16">
                {awardLogos.map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt={`Award ${index + 1}`}
                    className="w-[220px] object-contain inline-block"
                  />
                ))}
              </div>
            </marquee>
          </div>

          {/* Description Section */}
          <div className="lg:w-1/3">
            <h1
              style={{ fontFamily: "Merriweather" }}
              className="text-2xl md:text-3xl font-semibold text-white mb-2"
            >
              EXPLORE OUR{" "}
              <span  className="">SIGNATURE <span style={{color: "rgba(181, 124, 51, 1)"}}>AWARDS</span></span>
            </h1>
            <p
              style={{ fontFamily: "Plus Jakarta Sans" }}
              className="text-gray-300 text-sm mb-4 leading-relaxed"
            >
              Recognizing excellence across diverse industries and celebrating
              the achievements that drive progress.
            </p>
            <ul
              style={{ fontFamily: "Plus Jakarta Sans" }}
              className="list-disc list-inside text-sm text-gray-400 mb-4 space-y-1"
            >
              <li>30 Under 30</li>
              <li>Women of Impact</li>
              <li>National SME Awards</li>
              <li>Education Excellence</li>
              <li>Real Estate Icons</li>
              <li>Tech Titans</li>
            </ul>
            <button style={{border: "1px solid rgba(255, 196, 21, 1)"}} className=" cursor-pointer text-white px-4 py-1.5 text-sm rounded-full hover:bg-amber-500 hover:text-black transition-all">
              +6 MORE
            </button>
          </div>
        </div>

        {/* Center dashed line with icon */}
        <div className="absolute bottom-2 left-0 w-full flex items-center justify-center px-4">
          {/* Left dashed line */}
          <div className="flex-1 border-t border-dashed border-gray-600"></div>

          {/* Center icon */}
          <div className="mx-4 bg-[#1d252b] p-1 rounded-full flex items-center justify-center">
            <img
              src={Bm_icon}
              alt="Bm_icon"
              className="w-6 h-6 object-contain"
            />
          </div>

          {/* Right dashed line */}
          <div className="flex-1 border-t border-dashed border-gray-600"></div>
        </div>
      </section>

      {/* //second Section */}
      <section className="bg-[#0E161B] text-white py-18 px-4 md:px-16 ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2">
            <h1
              style={{ fontFamily: "MerriWeather" }}
              className="text-2xl md:text-3xl font-semibold mb-3"
            >
              SERVICES THAT{" "}<br></br>
              <span style={{color: "rgba(181, 124, 51, 1)"}} className="">ELEVATE YOUR BRAND</span>
            </h1>
            <p
              style={{ fontFamily: "Plus Jakarta Sans" }}
              className="text-gray-300 text-sm mb-4 leading-relaxed"
            >
              Our comprehensive suite of services empowers businesses to gain
              visibility, credibility, and consumer trust.
            </p>
            <ul
              style={{ fontFamily: "Plus Jakarta Sans" }}
              className="list-disc list-inside text-sm text-gray-400 mb-6 space-y-1"
            >
              <li>Curated Awards – Research-backed system</li>
              <li>Market Insights – Strategic data support</li>
              <li>PR Reach – 100M+ media impressions</li>
              <li>Event Legacy – 50+ industry editions</li>
            </ul>
            <button style={{background: "rgba(255, 196, 21, 1)"}} className="bg-yellow-500 cursor-pointer text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-amber-600 transition">
              KNOW MORE
            </button>
          </div>

          <div className="lg:w-1/2 w-full overflow-hidden">
            <RollingGallery />
          </div>
        </div>
      </section>

      <div
        className="relative z-20 w-full overflow-hidden rotate-[-2deg]"
        style={{
          background:
            "linear-gradient(112.62deg, #101A1E 29.4%, #B57C33 105.15%)",
        }}
      >
        <marquee
          direction="left"
          scrollAmount="15"
          className="text-white pt-1 text-6xl md:text-6xl font-extrabold  whitespace-nowrap"
          style={{
            fontFamily: "Inter",
            fontSize: "89px",
            fontWeight: "900",
            fontStyle: "Extra Bold",
            leadingTrim: "NONE",
            lineHeight: "78px",
            letterSpacing: "-1%",
            color:"white"
          }}
        >
          YOUR AWARDS <span style={{color:"#D4AF37"}}>&#10022;</span> YOUR ACHIEVEMENT <span style={{color:"#D4AF37"}}>&#10022;</span> YOUR AWARDS <span style={{color:"#D4AF37"}}>&#10022;</span> YOUR ACHIEVEMENT <span style={{color:"#D4AF37"}}>&#10022;</span> YOUR
          AWARDS <span style={{color:"#D4AF37"}}>&#10022;</span> YOUR ACHIEVEMENT <span style={{color:"#D4AF37"}}>&#10022;</span> YOUR AWARDS <span style={{color:"#D4AF37"}}>&#10022;</span> YOUR ACHIEVEMENT
        </marquee>
      </div>
    </>
  );
};

export default SignatureAwards;
