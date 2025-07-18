// import React from "react";
// import AwardCategroy1 from "../../assets/AwardCat2.png";
// import Award1 from "../../assets/ACat1.jpg";
// import Award2 from "../../assets/ACat2.jpg";
// import Award3 from "../../assets/ACat3.jpg";
// import Award4 from "../../assets/ACat4.jpg";
// import Award5 from "../../assets/ACat5.jpg";
// import Award6 from "../../assets/ACat6.jpg";
// const AwardCategory = () => {
//   const awards = [
//     {
//       id: 1,
//       name: "Nationwide C-Suite Awards 2022",
//       logo: Award1,
//     },
//     {
//       id: 2,
//       name: "Nationwide Startup Awards 2022",
//       logo: Award2,
//     },
//     {
//       id: 3,
//       name: "Nation Wide Women Excellence Awards 2022",
//       logo: Award3,
//     },
//     {
//       id: 4,
//       name: "Nationwide Health Care Awards 2022",
//       logo: Award4,
//     },
//     {
//       id: 5,
//       name: "Nationwide Pharma Marketing Excellence Awards 2022",
//       logo: Award5,
//     },
//     {
//       id: 6,
//       name: "Nationwide Real Estate Awards 2022",
//       logo: Award6,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-900 py-10 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h1
//             style={{ fontFamily: "Merriweather" }}
//             className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
//           >
//             Award{" "}
//             <span
//               style={{
//               color: "rgba(181, 124, 51, 1)"

//               }}
//               className="="
//             >
//               Categories
//             </span>
//           </h1>
//           <p
//             style={{ fontFamily: "Plus Jakarta Sans" }}
//             className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
//           >
//             Choose your category and step into the spotlight.
//           </p>
//           <p
//             style={{ fontFamily: "Plus Jakarta Sans" }}
//             className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mt-2"
//           >
//             Each award comes with comprehensive recognition and national media
//             coverage.
//           </p>
//         </div>

//         {/* Awards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-0 md:gap-0">
//           {awards.map((award) => (
//             <div
//               key={award.id}
//               className="flex cursor-pointer transition-transform duration-300 hover:scale-105"
//             >
//               <div className=" p-6 transition-all duration-300 w-full max-w-sm">
//                 <img
//                   src={award.logo}
//                   alt={award.name}
//                   className="w-full h-58 object-contain object-cover p-1  filter brightness-90 group-hover:brightness-110 transition-all duration-300 "
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AwardCategory;

import React from "react";
import Award1 from "../../assets/ACat1.jpg";
import Award2 from "../../assets/ACat2.jpg";
import Award3 from "../../assets/ACat3.jpg";
import Award4 from "../../assets/ACat4.jpg";
import Award5 from "../../assets/ACat5.jpg";
import Award6 from "../../assets/ACat6.jpg";

const AwardCategory = () => {
  const awards = [
    {
      id: 1,
      name: "Nationwide C-Suite Awards 2022",
      logo: Award1,
      points: [
        "Recognizes top C-level executives",
        "Based on innovation and impact",
        "National media coverage",
      ],
    },
    {
      id: 2,
      name: "Nationwide Startup Awards 2022",
      logo: Award2,
      points: [
        "Celebrates innovative startups",
        "Focus on scalability & disruption",
        "Mentorship and PR benefits",
      ],
    },
    {
      id: 3,
      name: "Nation Wide Women Excellence Awards 2022",
      logo: Award3,
      points: [
        "Honors women leaders",
        "Cross-industry recognition",
        "Empowerment and visibility",
      ],
    },
    {
      id: 4,
      name: "Nationwide Health Care Awards 2022",
      logo: Award4,
      points: [
        "Healthcare excellence spotlight",
        "Patient-first innovations",
        "Backed by leading panels",
      ],
    },
    {
      id: 5,
      name: "Nationwide Pharma Marketing Excellence Awards 2022",
      logo: Award5,
      points: [
        "Recognizes marketing brilliance",
        "Pharma brand elevation",
        "Judged by industry experts",
      ],
    },
    {
      id: 6,
      name: "Nationwide Real Estate Awards 2022",
      logo: Award6,
      points: [
        "Top real estate developers",
        "Design & sustainability focus",
        "Mass media exposure",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            style={{ fontFamily: "Merriweather" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Award{" "}
            <span style={{ color: "rgba(181, 124, 51, 1)" }}>Categories</span>
          </h1>
          <p
            style={{ fontFamily: "Plus Jakarta Sans" }}
            className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
          >
            Choose your category and step into the spotlight.
          </p>
          <p
            style={{ fontFamily: "Plus Jakarta Sans" }}
            className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mt-2"
          >
            Each award comes with comprehensive recognition and national media
            coverage.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3 gap-8 cursor-pointer">
          {awards.map((award) => (
            <div
              key={award.id}
              className="w-full max-w-sm mx-auto"
              style={{ perspective: "1000px" }}
            >
              <div
                className="relative w-full h-80 transition duration-700"
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.7s",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "rotateY(180deg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "rotateY(0deg)";
                }}
              >
                {/* Front Side */}
                <div
                  className="absolute inset-0 rounded-xl overflow-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    zIndex: 2,
                  }}
                >
                  <img
                    src={award.logo}
                    alt={award.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Back Side */}
                <div
                  className="absolute inset-0 px-6 py-6 flex flex-col justify-center items-center text-center rounded-xl"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                    backgroundColor: "#f8b626ff", // Tailwind's gray-800
                    position: "absolute",
                    width: "100%",
                    height: "95%",
                  }}
                >
                
               
                  <ul className="list-none list-inside gap-10 text-start space-y-1 text-black-400">
                    {award.points.map((point, index) => (
                      <li
                        key={index}
                        style={{
                          fontFamily: "Plus Jakarta Sans",
                          fontSize: "24px",
                          display: "flex",
                          alignItems: "start",
                        }}
                      >
                        <span
                          style={{
                            color: "#111110ff",
                            marginRight: "8px",
                            lineHeight: "1.5",
                          }}
                        >
                          ✦
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardCategory;
