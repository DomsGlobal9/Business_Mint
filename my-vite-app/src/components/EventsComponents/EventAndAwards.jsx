// import React, { useState } from 'react';
// import { MapPin, Download } from 'lucide-react';
// import { mockAwards } from '../../assets/EventsMockData';
// import Pagination from './Pagination';

// const EventsAndAwards = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

//   const totalPages = Math.ceil(mockAwards.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentAwards = mockAwards.slice(startIndex, startIndex + itemsPerPage);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <section
//       className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 relative"
//       style={{
//         backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.9)), url('https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed'
//       }}
//     >
//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-12">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400">
//             Events & Awards
//           </h1>
//           <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
//             <div className="w-3 h-3 bg-green-400 rounded-full"></div>
//             <span className="text-white text-sm font-medium">Live</span>
//           </div>
//         </div>

//         {/* Awards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
//           {currentAwards.map((award) => (
//             <AwardCard key={award.id} award={award} />
//           ))}
//         </div>

//         {/* Pagination */}
//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={handlePageChange}
//         />
//       </div>
//     </section>
//   );
// };

// const AwardCard= ({ award }) => {
//   return (
//     <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
//       {/* Main Image */}
//       <div className="relative h-48 overflow-hidden">
//         <img
//           src={award.image}
//           alt={award.title}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
//       </div>

//       {/* Content */}
//       <div className="p-6">
//         {/* Title and Year */}
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="text-xl font-bold text-white">{award.title}</h3>
//           <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
//             {award.year}
//           </span>
//         </div>

//         {/* Category and Location */}
//         <div className="flex items-center justify-between mb-4">
//           <span className="text-yellow-400 text-sm font-medium">
//             {award.category}
//           </span>
//           <div className="flex items-center text-gray-300 text-sm">
//             <MapPin size={14} className="mr-1" />
//             {award.location}
//           </div>
//         </div>

//         {/* Thumbnail Gallery */}
//         <div className="flex space-x-2 mb-4">
//           {award.thumbnails.map((thumb, index) => (
//             <div key={index} className="w-12 h-9 rounded overflow-hidden">
//               <img
//                 src={thumb}
//                 alt={`Thumbnail ${index + 1}`}
//                 className="w-full h-full object-cover hover:scale-110 transition-transform duration-200"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Action Button */}
//         <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
//           <Download size={18} />
//           <span>View More</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EventsAndAwards;

import React, { useState } from "react";
import { MapPin, Calendar, ChevronDown, ArrowRight } from "lucide-react";
import {
  mockAwards,
  getUniqueYears,
  getAwardsByYear,
} from "../../assets/EventsMockData";
import Pagination from "./Pagination";
import right_arrow from "../../assets/right_arrow.svg";
import AwardModal from "./AwardModel";

const EventsAndAwards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const itemsPerPage = 6;
  const years = getUniqueYears();
  const filteredAwards = getAwardsByYear(selectedYear);

  const totalPages = Math.ceil(filteredAwards.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentAwards = filteredAwards.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setCurrentPage(1); // Reset to first page when year changes
    setIsDropdownOpen(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAward, setSelectedAward] = useState(null);

  const handleLearnMore = (award) => {
    setSelectedAward(award);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAward(null);
  };

  return (
    <section
      className="min-h-screen  bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 relative "
      style={{
        backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.9)), url('src/assets/Footer_bg_3.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10 ">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 ps-14 pt-12">
          <h1
            style={{
              color: "rgba(212, 175, 55, 1)",
              fontWeight: "400",
              fontFamily: "Merriweather",
            }}
            className="text-4xl md:text-5xl lg:text-6xl  text-yellow-400"
          >
            Events & Awards
          </h1>
        </div>

        {/* Year Filter Dropdown */}
        <div className="mb-8 ps-16">
          <div className="relative inline-block">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-gray-700 transition-colors duration-200 min-w-[100px]"
            >
              <span className="text-sm font-medium">
                {selectedYear ? `Year ${selectedYear}` : "All Years"}
              </span>
              <ChevronDown
                size={16}
                className={`transform transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-gray-800 rounded-lg shadow-xl border border-gray-700 z-20 min-w-[150px]">
                <button
                  onClick={() => handleYearChange(null)}
                  className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-700 transition-colors duration-200 rounded-t-lg ${
                    selectedYear === null
                      ? "bg-yellow-400 text-gray-900 font-semibold"
                      : "text-white"
                  }`}
                >
                  All Years
                </button>
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => handleYearChange(year)}
                    className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-700 transition-colors duration-200 ${
                      selectedYear === year
                        ? "bg-yellow-400 text-gray-900 font-semibold"
                        : "text-white"
                    } ${
                      year === years[years.length - 1] ? "rounded-b-lg" : ""
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2  mb-8 justify-items-center">
          {currentAwards.map((award) => (
            <AwardCard
              key={award.id}
              award={award}
              onLearnMore={handleLearnMore}
            />
          ))}
        </div>

        {/* No Results Message */}
        {currentAwards.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No awards found for the selected year.
            </p>
          </div>
        )}

        {/* Pagination */}
        {filteredAwards.length > 0 && totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
        <div className="w-full">
          <AwardModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            award={selectedAward}
          />
        </div>
        {/* Debug Info - Remove this in production */}
        <div className="text-center mt-4 text-gray-400 text-sm">
          <p>
            Total Awards: {filteredAwards.length} | Total Pages: {totalPages} |
            Current Page: {currentPage}
          </p>
        </div>
      </div>
    </section>
  );
};

const AwardCard = ({ award, onLearnMore }) => {
  return (
    <div className="bg-gray-800 p-3 cursor-pointer mb-15 w-[560px] h-[500] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-103">
      {/* Main Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={award.image}
          alt={award.title}
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h2
          style={{ color: "rgba(217, 160, 54, 1)", fontFamily: "Merriweather" }}
          className="text-xl font-bold text-yellow-400 mb-3"
        >
          {award.title}
        </h2>

        {/* Date and Location */}
        <div
          style={{ fontFamily: "Plus Jakarta Sans" }}
          className="space-y-2 mb-4"
        >
          <div className="flex items-center text-gray-300 text-sm">
            <Calendar size={14} className="mr-2" />
            {award.date}
          </div>
          <div className="flex items-center text-gray-300 text-sm">
            <MapPin size={14} className="mr-2" />
            {award.location}
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onLearnMore(award)}
          className="group cursor-pointer w-[160px] bg-transparent border border-white text-white hover:bg-white hover:text-black font-semibold py-2 px-3 rounded-full transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <span style={{ fontFamily: "Roboto Condensed" }}>Learn More</span>
          <span className="text-lg transition-transform duration-200 group-hover:-rotate-6">
            {/* Arrow SVG */}
            <ArrowRight
              size={20}
              className="transition-transform duration-200 group-hover:text-black group-hover:-rotate-6"
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default EventsAndAwards;
