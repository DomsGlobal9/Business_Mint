// import React, { useEffect, useState } from "react";
// import Img1 from "../../assets/2.png"
// import Img2 from "../../assets/1.png"
// import Img3 from "../../assets/3.png"
// import Img4 from "../../assets/2.png"
// import Img5 from "../../assets/3.png"
// import Img6 from "../../assets/1.png"

// const images = [
// Img1,Img2,Img3, Img4, Img5, Img6
// ];

// const RollingGallery = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Rotate: +2 forward, -1 backward, repeat
//   useEffect(() => {
//     let direction = 1;
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => {
//         let nextIndex = prev + (direction === 1 ? 2 : -1);

//         if (nextIndex > images.length - 3) {
//           nextIndex = 0;
//           direction = 1;
//         } else if (nextIndex < 0) {
//           nextIndex = 0;
//           direction = 1;
//         } else {
//           direction *= -1; // switch direction
//         }

//         return nextIndex;
//       });
//     }, 3000); // every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   // Get current 3 images
//   const visibleImages = images.slice(currentIndex, currentIndex + 3);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-[#0b1217] overflow-hidden">
//       <div className="flex items-center justify-center gap-4 perspective-[1000px]">
//         {visibleImages.map((img, i) => {
//           let transform = "rotateY(0deg)";
//           let marginStyle = {};
//           let height = "300px"; // default height for side images

//           if (i === 0) {
//             transform = "rotateY(30deg)";
//             marginStyle = { marginTop: "60px", marginBottom: "60px" };
//           } else if (i === 2) {
//             transform = "rotateY(-30deg)";
//             marginStyle = { marginTop: "60px", marginBottom: "60px" };
//           } else if (i === 1) {
//             height = "240px"; // reduced height for center image
//           }

//           return (
//             <div
//               key={i}
//               className="w-[300px]  overflow-hidden   shadow-lg"
//               style={{
//                 height,
//                 transform,
//                 ...marginStyle,
//                 transformStyle: "preserve-3d",
//                 transition: "transform 0.5s ease",
//               }}
//             >
//               <img
//                 src={img}
//                 alt={`slide-${i}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default RollingGallery;


import React, { useEffect, useState } from "react";
import Img1 from "../../assets/2.png";
import Img2 from "../../assets/1.png";
import Img3 from "../../assets/3.png";
import Img4 from "../../assets/2.png";
import Img5 from "../../assets/3.png";
import Img6 from "../../assets/1.png";

const images = [Img1, Img2, Img3, Img4, Img5, Img6,Img4,Img3,Img1];

const RollingGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let direction = 1;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        let nextIndex = prev + (direction === 1 ? 2 : -1);

        if (nextIndex > images.length - 3) {
          nextIndex = 0;
          direction = 1;
        } else if (nextIndex < 0) {
          nextIndex = 0;
          direction = 1;
        } else {
          direction *= -1;
        }

        return nextIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <div className="flex justify-center items-center  overflow-hidden">
      <div className="flex items-center justify-center gap-4 perspective-[1000px]">
        {visibleImages.map((img, i) => {
          let transform = "rotateY(0deg)";
          let marginStyle = {};
          let height = "200px";

          if (i === 0) {
            transform = "rotateY(50deg) skewY(2deg)";
            marginStyle = { marginTop: "65px", marginBottom: "60px" };
          } else if (i === 2) {
            transform = "rotateY(-50deg) skewY(-2deg)";
            marginStyle = { marginTop: "65px", marginBottom: "60px" };
          } else if (i === 1) {
            height = "175px";
          }

          return (
            <div
              key={i}
              className="w-[260px] overflow-hidden shadow-lg"
              style={{
                height,
                transform,
                ...marginStyle,
                transformStyle: "preserve-3d",
                transition: "transform 0.5s ease",
              }}
            >
              <img
                src={img}
                alt={`slide-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RollingGallery;
