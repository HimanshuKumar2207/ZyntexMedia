import React from "react";

const Title = ({ heading1, heading2 }) => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center py-12 px-4 sm:px-6 lg:px-8 rounded-xl overflow-hidden ">
      {/* Title Content */}
      <div className="relative z-10 max-w-3xl">
        <p className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
          {heading1}
        </p>
        <div className="relative inline-block">
          <p className="text-md sm:text-md md:text-lg text-gray-700 font-medium relative z-10">
            {heading2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Title;
