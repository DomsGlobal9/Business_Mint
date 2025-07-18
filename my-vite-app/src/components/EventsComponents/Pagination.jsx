import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';



const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getVisiblePages = () => {
    const pages = [];
    const maxVisible = 7;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex items-center justify-center space-x-2 mt-12">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-full transition-colors cursor-pointer ${
          currentPage === 1
            ? 'text-gray-500 cursor-not-allowed'
            : 'text-yellow-400 hover:bg-yellow-400 hover:text-gray-900'
        }`}
      >
        <ChevronLeft size={20} />
      </button>

      {/* Page Numbers */}
      {visiblePages.map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <span className="px-3 py-2 text-gray-500">...</span>
          ) : (
            <button
              onClick={() => onPageChange(page)}
              className={`w-10 h-10 rounded-full transition-colors cursor-pointer ${
                currentPage === page
                  ? 'bg-yellow-400 text-gray-900 font-semibold'
                  : 'text-gray-300 hover:bg-yellow-400 hover:text-gray-900'
              }`}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-full transition-colors cursor-pointer ${
          currentPage === totalPages
            ? 'text-gray-500 cursor-not-allowed'
            : 'text-yellow-400 hover:bg-yellow-400 hover:text-gray-900'
        }`}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;