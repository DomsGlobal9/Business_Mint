import React, { useState } from 'react';
import { MapPin, Calendar, ChevronDown, Tag, ArrowRight } from 'lucide-react';
import { mockNews, getUniqueNewsYears, getNewsByYear } from '../../assets/MockNews';
import Pagination from './Pagination';
import NewsModal from './NewsModal';

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const itemsPerPage = 6;
  const years = getUniqueNewsYears();
  const filteredNews = getNewsByYear(selectedYear);
  
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNews = filteredNews.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setCurrentPage(1); // Reset to first page when year changes
    setIsDropdownOpen(false);
  };

  const handleSeeMore = (news) => {
    setSelectedNews(news);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNews(null);
  };

  return (
    <>
      <section 
        className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.9)), url('src/assets/Footer_bg_3.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10 pt-8 mt-5">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 ps-14">
            <h1 style={{fontFamily:"Merriweather",color: "rgba(212, 175, 55, 1)"}} className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400">
              Latest News
            </h1>
          </div>

          {/* Year Filter Dropdown */}
          <div className="mb-8">
            <div className="relative inline-block">
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-gray-800 rounded-lg shadow-xl border border-gray-700 z-20 min-w-[150px]">
                  <button
                    onClick={() => handleYearChange(null)}
                    className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-700 transition-colors duration-200 rounded-t-lg ${
                      selectedYear === null ? 'bg-yellow-400 text-gray-900 font-semibold' : 'text-white'
                    }`}
                  >
                    All Years
                  </button>
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => handleYearChange(year)}
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-700 transition-colors duration-200 ${
                        selectedYear === year ? 'bg-yellow-400 text-gray-900 font-semibold' : 'text-white'
                      } ${year === years[years.length - 1] ? 'rounded-b-lg' : ''}`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 mb-8 justify-items-center">
            {currentNews.map((news) => (
              <NewsCard key={news.id} news={news} onSeeMore={handleSeeMore} />
            ))}
          </div>

          {/* No Results Message */}
          {currentNews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                No news found for the selected year.
              </p>
            </div>
          )}

          {/* Pagination */}
          {filteredNews.length > 0 && totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
          
          {/* Debug Info - Remove this in production */}
          {/* <div className="text-center mt-4 text-gray-400 text-sm">
            <p>Total News: {filteredNews.length} | Total Pages: {totalPages} | Current Page: {currentPage}</p>
          </div> */}
        </div>
      </section>

      {/* News Modal */}
      <NewsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        news={selectedNews}
      />
    </>
  );
};

const NewsCard = ({ news, onSeeMore }) => {
  return (
    <div className="bg-gray-800 p-3 cursor-pointer rounded-2xl w-[560px] h-[500] mb-16  overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
      {/* Main Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
        {/* Category Badge */}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-yellow-400 mb-3 line-clamp-2">
          {news.title}
        </h3>
        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {news.description}
        </p>
        {/* Date and Location */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-300 text-sm">
            <Calendar size={14} className="mr-2" />
            {news.date}
          </div>
          <div className="flex items-center text-gray-300 text-sm">
            <MapPin size={14} className="mr-2" />
            {news.location}
          </div>
          <div className="flex items-center text-gray-300 text-sm">
            <Tag size={14} className="mr-2" />
            {news.category}
          </div>
        </div>

        {/* Action Button */}
         <button
           onClick={() => onSeeMore(news)}
          className="group cursor-pointer w-[160px] bg-transparent border border-white text-white hover:bg-white hover:text-black font-semibold py-2 px-3 rounded-full transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <span  style={{ fontFamily: "Roboto Condensed" }}>See More</span>
          <span className="text-lg transition-transform duration-200 group-hover:-rotate-6">
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

export default News;