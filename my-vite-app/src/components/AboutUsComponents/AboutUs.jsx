import React from "react";
import card1_logo from "../../assets/AboutUs_card1.svg";
import card2_logo from "../../assets/AboutUs_card2.svg";
import card3_logo from "../../assets/AboutUs_card3.svg";
import alt1 from "../../assets/alt_1.png";
import alt2 from "../../assets/alt_2.png";
import alt3 from "../../assets/alt_3.jpg";
const AboutUs = () => {
  const [hovered, setHovered] = React.useState(null);

  const recognitionImages = [
    {
      id: 1,
      src: card1_logo,
      alt: "Nation Wide Awards Under 30",
      title: "UNDER 30",
      altImg: alt1,
    },
    {
      id: 2,
      src: card2_logo,
      alt: "Nation Wide Awards Under 40",
      title: "UNDER 40",
      altImg: alt2,
    },
    {
      id: 3,
      src: card3_logo,
      alt: "Nation Wide Awards Under 50",
      title: "UNDER 50",
      altImg: alt3,
    },
  ];

  return (
    <section className="bg-gray-900 py-16 px-4 ">
      <div className="max-w-7xl mx-auto pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Header */}
            <div className="mb-8">
              <p
                style={{ fontFamily: "Merriweather" }}
                className="text-gray-300 text-sm mb-2"
              >
                WHERE{" "}
                <span  style={{ fontFamily: "Merriweather", color: "rgba(212, 175, 55, 1)"}} className=" font-semibold">RECOGNITION</span>{" "}
                MEETS{" "}
                <span  style={{ fontFamily: "Merriweather", color: "rgba(212, 175, 55, 1)"}} className=" font-semibold">REPUTATION</span>
                .
              </p>
              <h2
                style={{ fontFamily: "Merriweather", color: "rgba(212, 175, 55, 1)"}}
                className="text-4xl md:text-5xl font-bold text-amber-400"
              >
                About us
              </h2>
            </div>

            {/* Content Paragraphs */}
            <div
              style={{ fontFamily: "Plus Jakarta Sans" }}
              className="space-y-4 text-gray-300 leading-relaxed"
            >
              <p>
                At Business Mint, we do more than present awards; we cultivate
                legacies. Since our inception in 2018, we have been dedicated to
                connecting emerging talent with national recognition,
                celebrating innovators who are reshaping their industries.
              </p>

              <p>
                Whether you are a startup entrepreneur or an established leader,
                we believe that recognition can enhance authority and foster
                meaningful dialogue.
              </p>

              <p>
                With a portfolio of over 5,000 award recipients and partnerships
                with esteemed organizations such as Forbes India and Business
                Standard, we offer more than mere accolades— we provide a
                platform for media engagement.
              </p>
            </div>
          </div>

          {/* Right Content - Recognition Images */}
          {/* <div className="flex justify-center lg:justify-end">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              {recognitionImages.map((image) => (
                <div 
                  key={image.id}
                  className="relative about-card group cursor-pointer"
                >
                  <div className="bg-black rounded-lg  overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-50 h-64 sm:h-80 object-fit"
                    />
                    
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
          <div className="flex justify-center lg:justify-end h-80 w-full max-w-2xl">
            <div className="flex w-full h-full gap-4 transition-all duration-500">
              {recognitionImages.map((image, idx) => (
                <div
                  key={image.id}
                  className={`relative group bg-black cursor-pointer h-full rounded-lg overflow-hidden shadow-lg transition-all duration-500
          ${hovered === idx ? "flex-[2] z-20" : "flex-1 z-10"}
        `}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    minWidth: 0, // Ensures flex shrinking works
                  }}
                >
                  <img
                    src={hovered === idx ? image.altImg : image.src}
                    alt={image.alt}
                    className="w-full h-full object-fit transition-all duration-500"
                  />
                  {/* Overlay with gradient */}
                  <div style={{ background: "rgba(0, 0, 0, 0.2)" }} className="absolute inset-0  pointer-events-none"></div>
                  {/* Optional: Title overlay */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
