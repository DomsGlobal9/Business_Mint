import React from "react";
import { ArrowLeft } from "lucide-react";

const AwardModal = ({ isOpen, onClose, award }) => {
  if (!isOpen || !award) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center bg-black bg-opacity-60 backdrop-blur-sm overflow-y-auto">
      {/* Modal Container - Full Height with Scroll */}
      <div className="relative flex flex-col items-center w-full max-w-2xl min-h-screen py-8 px-8 ">
        {/* Top Image Overlapping Card */}
        <div className="relative z-20 mb-[-60px] mt-8">
          <img
            src={award.image}
            alt={award.title}
            className="rounded-sm shadow-2xl w-80 h-48 object-cover  "
          />
        </div>

        {/* Card Content */}
        {/* <div className="bg-gradient-to-br from-yellow-100 via-yellow-50 to-white rounded-[30px] shadow-2xl w-full pt-20 pb-8 px-6 md:px-10 text-black relative z-10 mb-8"> style={{clipPath: 'polygon(100% 0, 100% 0, 90% 100%, 0% 100%)'}} */}
        <div className="bg-yellow-50 w-[1000px] h-full shadow-2xl pt-20 pb-8 px-6 md:px-10 text-black relative z-10 mb-8r border-2 overflow-hidden" style={{clipPath: "polygon(0 8%, 100% 0, 100% 98%, 0 95%)",background: "linear-gradient(177.98deg, #FFFAEA 5.05%, #F2C84B 98.3%)"}}>
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top- left-6 flex items-center space-x-2 text-black hover:text-gray-700 transition-colors z-30"
            aria-label="Close"
          >
            <ArrowLeft size={20} />
            <span className=" cursor-pointer border-b border-black font-medium text-sm" style={{fontSize:"20px"}}>Back</span>
          </button>

          {/* Title */}
          <h2 className="text-lg md:text-xl  font-bold uppercase text-center mb-4 leading-tight px-8">
            BUSINESS MINT 37TH EDITION NATIONWIDE AWARDS
            <br />
            UNDER 30 EMERGING INDUSTRY EXPERTS – 2023
          </h2>

          {/* Description */}
          <p className="text-sm text-gray-700 text-justify px-10 mb-3  leading-relaxed ">
            Business Mint proudly organized their latest edition of the Nationwide Awards Under 30
            Emerging Industry Experts – 2023, in Hyderabad. Recognizing the brightest young talents
            under 30 years across business, marketing, finance, media and beyond. The selected honorees
            are a mix of rising leaders and innovators.
          </p>

          {/* Winner List */}
          <div className="text-sm  text-gray-800 mb-6">
            <h3 className="font-semibold mb-3">Winners include:</h3>
            <ul className="list-disc pl-5 space-y-1.5 leading-relaxed">
              <li>Vikash Nanda – SubTech360 – Marketing</li>
              <li>Himanshu Lakra – UniBox – Branding</li>
              <li>Priya Sharma – TechVision Solutions – Business Development</li>
              <li>Rajesh Kumar – EcoGreen Industries – Sustainability</li>
              <li>Anita Desai – Creative Minds Agency – Digital Marketing</li>
              <li>Rohit Gupta – FinanceFlow – Financial Technology</li>
              <li>Sneha Patel – MediaCorp – Content Strategy</li>
              <li>Arjun Singh – StartupHub – Entrepreneurship</li>
              <li>Kavya Reddy – HealthTech Solutions – Healthcare Innovation</li>
              <li>Manish Agarwal – EduTech Pro – Educational Technology</li>
              <li>Ritu Jain – GreenEnergy Corp – Renewable Energy</li>
              <li>Sanjay Mehta – CloudSoft – Software Development</li>
              <li>Deepika Rao – FashionForward – Fashion Technology</li>
              <li>Amit Sharma – LogiTech – Supply Chain Management</li>
              <li>Neha Kapoor – SocialImpact – Social Entrepreneurship</li>
            </ul>
          </div>

          {/* Event Details */}
          <div className="text-sm text-gray-700 mb-6  p-3 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <span className="font-semibold">Date:</span> {award.date}
              </div>
              <div>
                <span className="font-semibold">Location:</span> {award.location}
              </div>
              <div>
                <span className="font-semibold">Category:</span> {award.title}
              </div>
              <div>
                <span className="font-semibold">Year:</span> {award.year}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardModal;