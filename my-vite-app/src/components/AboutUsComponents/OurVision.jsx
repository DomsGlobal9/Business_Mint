import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Vision_video from "../../assets/Vision_video.mp4";
import PlaceHolderImg from "../../assets/final_group_img.svg";
// import PlaceHolderImg from "../../assets/f_group2png.png"

const visionItems = [
  {
    title: "Press Release Distribution",
    content:
      "We help you distribute your press releases effectively across multiple trusted media channels.",
  },
  {
    title: "Authentic Market Research",
    content:
      "Our market research services provide valuable insights to drive business growth.",
  },
  {
    title: "Brand Positioning",
    content:
      "We assist in creating a powerful and distinct brand image in your niche market.",
  },
  {
    title: "Business Networking",
    content:
      "We connect you with potential partners, clients, and industry leaders to grow your network.",
  },
];

const OurVision = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* Vision Section with Video Background */}
      <section className="relative w-full text-white overflow-hidden pb-32">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={Vision_video} type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80 z-10" />

        {/* Vision Content */}
        <div className="relative top-20 z-20 max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 style={{fontFamily:"Merriweather"}} className="text-4xl lg:text-5xl font-semibold text-yellow-400 mb-4">
              Our vision
            </h2>
            <p
              style={{ fontFamily: "Plus Jakarta Sans" }}
              className="text-gray-200 text-sm leading-relaxed"
            >
              At Business Mint, we empower organizations and entrepreneurs
              toward excellence through a rigorous recognition model. Our
              commitment to quality and integrity has made us the preferred
              partner for global leaders.
            </p>
          </div>
          {/* content */}
        
          <div className="lg:w-1/2 space-y-8">
            {visionItems.map((item, index) => {
              const isOpen = activeIndex === index || hoveredIndex === index;
              return (
                <div
                  key={index}
                  className="pb-1 h-[50px]"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <button
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                    className="flex justify-between items-center w-full text-left font-medium relative cursor-pointer"
                    type="button"
                  >
                    <span
                      style={{ fontFamily: "Plus Jakarta Sans" }}
                      className={`border-b border-white w-full pb-1 transition-colors duration-200 ${
                        isOpen ? "text-yellow-400" : "text-white"
                      }`}
                    >
                      {item.title}
                    </span>
                    {isOpen ? (
                      <ChevronUp size={20} className="ml-2 relative right-6 text-yellow-400" />
                    ) : (
                      <ChevronDown
                        size={20}
                        className="ml-2 relative right-6 text-yellow-400"
                      />
                    )}
                  </button>
                  {isOpen && (
                    <div
                      style={{ fontFamily: "Plus Jakarta Sans" }}
                      className="mt-2 text-sm pb-4 text-gray-300 transition-all duration-300 ease-in-out"
                    >
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Eclipse Shadow Between Sections (purely visual, no space) */}
      <div className="relative w-full h-0 z-30">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[60%] h-[30px] aspect-[2/1] rounded-full bg-black/50 blur-2xl" />
      </div>
      {/* Mission Section */}
      <section
        style={{ background: "rgba(16, 26, 30, 1)" }}
        className="relative bg-[#0B1218] w-full h-[360px] py-10 overflow-visible z-20 mb-4"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start justify-start gap-10">
          {/* Left Image */}
          <div className="lg:w-1/2 flex justify-start relative right-31 top-[-40vh] items-start h-[90vh]">
            <img
              src={PlaceHolderImg}
              alt="Mission Illustration"
              className="h-[100vh] w-[1300px] object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="lg:w-1/2 w-full items-center justify-center pt-20">
            <h2
              style={{ fontFamily: "Merriweather",color: "rgba(212, 175, 55, 1)" }}
              className="text-4xl lg:text-5xl font-semibold text-yellow-400 mb-3"
            >
              Our Mission
            </h2>
            <p
              style={{ fontFamily: "Plus Jakarta Sans" }}
              className="text-gray-300 text-sm leading-relaxed max-w-md"
            >
              We strive to build India’s most trusted recognition platform,
              merging credibility with media influence to empower future
              leaders. Beyond trophies, we share stories and elevate brands,
              turning recognition into reputation through strategic
              partnerships.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurVision;
