import React from "react";

const Info = () => {
  return (
    <section className="container mx-auto text-center px-4 font-manrope py-10">
      <h2 className="text-2xl md:text-4xl font-semibold text-[var(--customGreen)] mb-4 mt-3">
        About Techub
      </h2>

      <p className="text-gray-500 mb-12 text-base md:text-lg mx-auto text-center max-w-3xl">
        At Techub Academy, we offer practical, hands-on training designed by
        industry experts. Gain real-world experience and mentorship to build the
        skills and confidence needed for success. Join our collaborative
        community and make your tech aspirations a reality.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="text-center">
          <h3 className="text-4xl md:text-6xl font-bold text-gray-700">20</h3>
          <p className="text-gray-600 text-lg md:text-2xl mt-2">
            Tech Students <span className="block">Graduated</span>
          </p>
        </div>

        <div className="text-center lg:border-l-4 border-gray-700">
          <h3 className="text-4xl md:text-6xl font-bold text-gray-700">90%</h3>
          <p className="text-gray-600 text-lg md:text-2xl mt-2">
            Student Internship <span className="block">Granted</span>
          </p>
        </div>

        <div className="text-center lg:border-l-4 border-gray-700">
          <h3 className="text-4xl md:text-6xl font-bold text-gray-700">98%</h3>
          <p className="text-gray-600 text-lg md:text-2xl mt-2">
            Graduates Satisfaction <span className="block">Score</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
