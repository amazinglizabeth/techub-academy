import React from "react";
import offer from "./images/w-offer.png";

const Offer = () => {
  return (
    <section className="py-14 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[var(--customGreen)] mb-8">
          What Do We Offer?
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start px-0 md:px-4">
          {/* Image */}
          <img
            src={offer}
            alt="Offer"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg md:w-1/2 rounded-lg mb-8 md:mb-0 md:mr-8"
          />

          {/* Text list */}
          <ul className="space-y-6 md:w-1/2 text-left px-5 md:px-1">
            <li>
              <h2 className="text-xl md:text-2xl font-semibold mb-2">
                Conducive Learning Environment
              </h2>
              <p className="text-base md:text-lg font-extralight text-gray-500">
                Techub Academy offers students conducive learning environments
                for both physical and online classes.
              </p>
            </li>

            <li>
              <h2 className="text-xl md:text-2xl font-semibold mb-2">
                Experienced Tutors
              </h2>
              <p className="text-base md:text-lg font-extralight text-gray-500">
                Get knowledge and experience from the best tutors with great
                teaching skills at Techub Academy.
              </p>
            </li>

            <li>
              <h2 className="text-xl md:text-2xl font-semibold mb-2">
                Career Support
              </h2>
              <p className="text-base md:text-lg font-extralight text-gray-500">
                Get access to several internship and scholarship opportunities
                to help boost your career.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Offer;
