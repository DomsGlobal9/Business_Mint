import React from "react";
import Trophy_img from "../../assets/Trophy_img.png";
const RecognitionEvent = () => {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background Trophy Images */}
      <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
        {/* Left Trophy */}
        <div className=" opacity-20">
          <img
            src={Trophy_img}
            alt="Trophy Left"
            className="w-full h-full object-contain relative right-80"
          />
        </div>

        {/* Right Trophy */}
        <div className=" opacity-20">
          <img
            src={Trophy_img}
            alt="Trophy Right"
            className="w-full h-full object-contain relative left-80"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            style={{ fontFamily: "Merriweather",color:"rgba(181, 124, 51, 1)"}}
            className="text-4xl md:text-5xl font-bold text-amber-400 mb-4"
          >
            WHAT'S
            <br />
            COMING UP
          </h1>
          <p
            style={{ fontFamily: "Plus Jakarta Sans" }}
            className="text-white text-lg md:text-xl"
          >
            Join us at our upcoming recognition events
          </p>
        </div>

        {/* Event Cards */}
        <div className="w-full max-w-md space-y-4 mb-8 flex  flex-col justify-center items-center ">
          {/* Delhi Edition Card */}
            <div className=" cursor-pointer group bg-black bg-opacity-50 w-[600px] border border-gray-600 rounded-lg p-6 flex justify-between items-center transition-all duration-300 ease-in-out hover:bg-yellow-100 hover:scale-[1.03]">
            <div>
              <h3
                style={{ fontFamily: "Merriweather" }}
                className="text-white text-lg font-semibold mb-2 group-hover:text-black transition-colors duration-300"
              >
               Delhi Edition
              </h3>
              <p
                style={{ fontFamily: "Plus Jakarta Sans" }}
                className="text-gray-300 text-sm mb-1 group-hover:text-black transition-colors"
              >
                Celebrating entrepreneurial excellence in the heart of India
              </p>
              <p
                style={{ fontFamily: "Plus Jakarta Sans" }}
                className="text-gray-400 text-xs group-hover:text-gray-700 transition-colors"
              >
                December 2024 • New Delhi
              </p>
            </div>
            <button
              style={{ fontFamily: "Roboto Condensed" }}
              className="cursor-pointer rounded-full bg-amber-400 text-black font-bold py-2 px-4 rounded text-sm transition-all duration-300  group-hover:bg-white group-hover:text-black group-hover:border-1"
            >
              REGISTER
            </button>
          </div>

          {/* Dubai Global Business Awards Card */}
          <div className=" cursor-pointer group bg-black bg-opacity-50 w-[600px] border border-gray-600 rounded-lg p-6 flex justify-between items-center transition-all duration-300 ease-in-out hover:bg-yellow-100 hover:scale-[1.03]">
            <div>
              <h3
                style={{ fontFamily: "Merriweather" }}
                className="text-white text-lg font-semibold mb-2 group-hover:text-black transition-colors duration-300"
              >
                Dubai Global Business Awards
              </h3>
              <p
                style={{ fontFamily: "Plus Jakarta Sans" }}
                className="text-gray-300 text-sm mb-1 group-hover:text-black transition-colors"
              >
                International recognition for global business leaders
              </p>
              <p
                style={{ fontFamily: "Plus Jakarta Sans" }}
                className="text-gray-400 text-xs group-hover:text-gray-700 transition-colors"
              >
                October 2024 • Dubai, UAE
              </p>
            </div>
            <button
              style={{ fontFamily: "Roboto Condensed" }}
              className=" cursor-pointer rounded-full bg-amber-400 text-black font-bold py-2 px-4 rounded text-sm transition-all duration-300  group-hover:bg-white group-hover:text-black group-hover:border-1"
            >
              REGISTER
            </button>
          </div>

          {/* Bangalore Startup Icons Card */}
          <div className=" cursor-pointer group bg-black bg-opacity-50 w-[600px] border border-gray-600 rounded-lg p-6 flex justify-between items-center transition-all duration-300 ease-in-out hover:bg-yellow-100 hover:scale-[1.03]">
            <div>
              <h3
                style={{ fontFamily: "Merriweather" }}
                className="text-white text-lg font-semibold mb-2 group-hover:text-black transition-colors duration-300"
              >
               Bangalore Startup Icons
              </h3>
              <p
                style={{ fontFamily: "Plus Jakarta Sans" }}
                className="text-gray-300 text-sm mb-1 group-hover:text-black transition-colors"
              >
                   Honoring the next generation of tech innovators
              </p>
              <p
                style={{ fontFamily: "Plus Jakarta Sans" }}
                className="text-gray-400 text-xs group-hover:text-gray-700 transition-colors"
              >
               November 2024 • Bangalore
              </p>
            </div>
            <button
              style={{ fontFamily: "Roboto Condensed" }}
              className=" cursor-pointer rounded-full bg-amber-400 text-black font-bold py-2 px-4 rounded text-sm transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-1"
            >
              REGISTER
            </button>
          </div>
        </div>

        {/* Full Event Calendar Button */}
        <button
          style={{ fontFamily: "Roboto Condensed" }}
          className=" cursor-pointer rounded-full bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 px-8  text-sm transition-colors"
        >
          FULL EVENT CALENDAR
        </button>
      </div>
    </div>
  );
};

export default RecognitionEvent;
