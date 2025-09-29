import React, { useState } from "react";
import Oyin from "./images/oyin.png";
import Melvin from "./images/melvin.png";
import Dami from "./images/Dami.png";

const Testimonial = () => {
  const reviews = [
    {
      name: "Oyindamola Shobowale",
      image: Oyin,
      review:
        "An outstanding tech academy offering top-notch courses with hands-on experience, knowledgeable instructors, and a supportive learning environment, perfect for anyone looking to advance their skills in the tech industry.",
    },
    {
      name: "Melvin John",
      image: Melvin,
      review:
        "I never dream of being a Product Designer, but it seems like I'm already one. The knowledge I acquired at Techub Academy has given me the push to thrive in my career as a Product Designer and I got my first gig immediately after training.",
    },
    {
      name: "Oluwadamilola Ojo",
      image: Dami,
      review:
        "Attending Techub transformed my approach as a product designer. The hands-on projects and mentorship from industry experts helped me refine my skills, from concept development to user-centered design — truly invaluable for my career.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <h2 className="text-2xl md:text-4xl font-semibold mb-8">
        Student's Review
      </h2>

      <div className="relative w-full max-w-3xl bg-[var(--customGreen)] rounded-lg p-6 md:p-10 text-white">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl md:text-4xl p-2"
        >
          &#8592;
        </button>

        {/* Review Content */}
        <div className="flex flex-col items-center text-center">
          <img
            src={reviews[currentIndex].image}
            alt={reviews[currentIndex].name}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-4"
          />
          <h2 className="text-lg md:text-xl font-semibold">
            {reviews[currentIndex].name}
          </h2>
          <p className="mt-4 text-sm md:text-lg lg:text-xl leading-relaxed px-7 md:px-8">
            "{reviews[currentIndex].review}"
          </p>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl md:text-4xl p-2"
        >
          &#8594;
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
