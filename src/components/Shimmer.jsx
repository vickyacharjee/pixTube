import React from "react";

const Shimmer = () => {
  return (
    <div className="p-4 space-y-4">
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="flex items-center space-x-4 animate-pulse"
        >
          {/* Thumbnail */}
          <div className="w-20 h-20 bg-gray-200 rounded-md"></div>

          {/* Text Placeholder */}
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
