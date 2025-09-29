import React from "react";

const AboutUs = () => {
  return (
    <section className="container mx-auto text-center px-4 font-manrope py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[var(--customGreen)] mb-4 mt-10">
          Why Choose Techhub Academy?
        </h2>

        <p className="text-gray-500 mb-12 text-base md:text-lg mx-auto text-center w-full md:w-3/4 lg:w-2/3">
          At Techub Academy, we empower individuals to succeed in the tech
          industry through hands-on, practical training. Our
          industry-expert-designed curriculum offers real-world experience and
          mentorship, ensuring students gain the skills and confidence to excel.
          Join us to turn your tech aspirations into reality
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-bold text-gray-700">20</h3>
            <p className="text-gray-600 text-lg md:text-2xl mt-2">
              Tech Students <span className="block">Graduated</span>
            </p>
          </div>

          <div className="text-center md:border-l-4 border-gray-700">
            <h3 className="text-5xl md:text-6xl font-bold text-gray-700">
              90%
            </h3>
            <p className="text-gray-600 text-lg md:text-2xl mt-2">
              Student Internship <span className="block">Granted</span>
            </p>
          </div>

          <div className="text-center md:border-l-4 border-gray-700">
            <h3 className="text-5xl md:text-6xl font-bold text-gray-700">
              98%
            </h3>
            <p className="text-gray-600 text-lg md:text-2xl mt-2">
              Graduates Satisfaction <span className="block">Score</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
