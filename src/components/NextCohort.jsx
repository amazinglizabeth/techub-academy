import React from "react";

const NextCohort = () => {
  return (
    <div className="relative md:absolute md:-bottom-42 md:right-20 mx-4 sm:mx-6 md:mx-0 bg-white rounded-2xl shadow-2xl text-center pt-6 pb-10 px-6 sm:px-12 md:px-20 w-full max-w-sm md:max-w-[400px]">
      <p className="font-medium text-base sm:text-lg text-gray-600">
        Next Cohort
      </p>
      <p className="font-bold text-2xl sm:text-3xl md:text-[32px] leading-snug text-green-600">
        May 15, 2025
      </p>
      <p className="text-sm sm:text-base leading-relaxed text-gray-600 my-1">
        Weekday and Online Classes
      </p>
      <p className="font-semibold text-sm sm:text-base leading-relaxed text-black my-2">
        Duration: 2 Months
      </p>
      <a
        href="/Registration"
        className="block bg-[var(--customGreen)] py-4 sm:py-5 px-6 sm:px-7 rounded-[40px] text-white text-lg sm:text-xl hover:bg-green-700 mt-4 cursor-pointer"
      >
        Enroll now
      </a>
    </div>
  );
};

export default NextCohort;
