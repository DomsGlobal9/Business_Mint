import React from "react";
import { ArrowLeft } from "lucide-react";

const NewsModal = ({ isOpen, onClose, news }) => {
  if (!isOpen || !news) return null;

  return (
    <div className="fixed w-full inset-0 z-[9999] flex items-start justify-center bg-black bg-opacity-60 backdrop-blur-sm overflow-y-auto">
      {/* Modal Container - Full Height with Scroll */}
      <div className="relative flex flex-col items-center w-full max-w-2xl min-h-screen py-8 px-4">
        {/* Top Image Overlapping Card */}
        <div className="relative z-20 mb-[-60px] mt-9">
          <img
            src={news.image}
            alt={news.title}
            className="rounded-1xl shadow-2xl w-80 h-48 object-cover "
          />
        </div>

        {/* Card Content */}
        <div className="bg-yellow-50 shadow-2xl w-full pt-20 pb-8 px-6 md:px-10 text-black relative z-10 mb-8" style={{clipPath: "polygon(0 8%, 100% 0, 100% 98%, 0 95%)",background: "linear-gradient(177.98deg, #FFFAEA 5.05%, #F2C84B 98.3%)"}}>
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute flex flex-row mb-5  top-7 left-6 flex items-center space-x-2 text-black hover:text-gray-700 transition-colors z-30"
            aria-label="Close"
          >
            <ArrowLeft size={20}  className="relative top-6 left-1"/>
            <span className="border-b border-black font-medium text-lg pt-13 cursor-pointer"> Back</span>
          </button>

          {/* Title */}
          <h2 className="text-lg pt-8 md:text-xl font-bold uppercase text-center mb-4 leading-tight px-8">
            {news.title}
          </h2>


          {/* Main Content */}
          <div className="text-sm text-gray-700 text-justify mb-6 leading-relaxed">
            <p className="mb-4">{news.content}</p>
            <p className="mb-4">{news.description}</p>
          </div>

          {/* Event Highlights */}
          {news.highlights && (
            <div className="text-sm text-gray-800 mb-6">
              <h3 className="font-semibold mb-3">Event Highlights:</h3>
              <ul className="list-disc pl-5 space-y-1.5 leading-relaxed">
                {news.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Personalities */}
          {news.keyPersonalities && (
            <div className="text-sm text-gray-800 mb-6">
              <h3 className="font-semibold mb-3">Key Personalities:</h3>
              <ul className="list-disc pl-5 space-y-1.5 leading-relaxed">
                {news.keyPersonalities.map((personality, index) => (
                  <li key={index}>{personality}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Additional Information */}
          <div className="text-sm text-gray-700 mb-6">
            <h3 className="font-semibold mb-2">Coverage Highlights:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Comprehensive media coverage across platforms</li>
              <li>Live streaming and social media engagement</li>
              <li>Industry expert interviews and insights</li>
              <li>Photo gallery and video documentation</li>
              <li>Follow-up articles and analysis</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsModal;