import React from "react";
import Bayowa from "./images/Bayowa.png";
import Fattah from "./images/fattah.png";
import John from "./images/john.png";
import Thelma from "./images/thelma.png";
import Adedolapo from "./images/adedolapo.png";
import Halimat from "./images/Halimat.png";
import Oyin from "./images/oyin.png";
import Happiness from "./images/happiness.png";
import Adeyinka from "./images/adeyinka.png";

const Tutors = () => {
  const details = [
    {
      name: "Sheu Abdulfattah",
      image: Fattah,
      course: "Software Engineering Tutor",
    },
    {
      name: "Bayowa Makinde",
      image: Bayowa,
      course: "Digital Marketing Tutor",
    },
    {
      name: "John Makinde",
      image: John,
      course: "Data Analysis Tutor",
    },
    {
      name: "George Thelma",
      image: Thelma,
      course: "Product Design Tutor",
    },
    {
      name: "Adedolapo Adeagbo",
      image: Adedolapo,
      course: "Cyber Security Tutor",
    },
    {
      name: "Abdulsalam Halimat",
      image: Halimat,
      course: "Data Analysis Tutor",
    },
    {
      name: "Shobowale Oyin",
      image: Oyin,
      course: "Software Engineering Tutor",
    },
    {
      name: "Agbor Happiness",
      image: Happiness,
      course: "Digital Marketing Tutor",
    },
    {
      name: "Adeyinka Adeagbo",
      image: Adeyinka,
      course: "Product Design Tutor",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-14">
      <h2 className="text-4xl font-semibold text-customGreen mb-8 text-center mt-3">
        Our Tutors
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        {details.map((tutor, index) => (
          <div key={index} className="rounded-lg p-4 bg-white">
            <img
              src={tutor.image}
              alt={tutor.name}
              className="w-[335px] h-[280px] object-cover rounded-lg"
            />
            <div className="px-4 py-3 text-center">
              <h3 className="text-xl font-semibold text-black pb-1">
                {tutor.name}
              </h3>
              <p className="text-gray-500 font-extralight text-sm">
                {tutor.course}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutors;
