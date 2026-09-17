import React from "react";

const Title = ({ heading1, heading2 }) => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-xl px-4 py-2 text-center sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      {/* Title Content */}
      <div className="relative z-10 w-full max-w-3xl">
        <p className="mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl">
          {heading1}
        </p>

        <div className="relative inline-block max-w-2xl">
          <p className="text-sm font-medium leading-6 text-gray-600 sm:text-base sm:leading-7 md:text-lg">
            {heading2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Title;
