import React from "react";
import Product from "./images/product-design.png";
import Frontend from "./images/frontend.png";
import Backend from "./images/backend.png";
import Cybersecurity from "./images/cybersecurity.png";
import Marketing from "./images/digital-marketing.png";
import Analysis from "./images/data-analysis.png";

const Courses = () => {
  const courses = [
    {
      img: Product,
      alt: "Product design",
      title: "Product Design",
      desc: "Transform your ideas into impactful products with our product design course",
    },
    {
      img: Frontend,
      alt: "Frontend Engineering",
      title: "Frontend Engineering",
      desc: "Transform your ideas into impactful products with our frontend engineering course",
    },
    {
      img: Backend,
      alt: "Backend Engineering",
      title: "Backend Engineering",
      desc: "Transform your ideas into impactful products with our backend engineering course",
    },
    {
      img: Cybersecurity,
      alt: "Cyber Security",
      title: "Cyber Security",
      desc: "Transform your ideas into impactful products with our cyber security course",
    },
    {
      img: Marketing,
      alt: "Digital Marketing",
      title: "Digital Marketing",
      desc: "Transform your ideas into impactful products with our digital marketing course",
    },
    {
      img: Analysis,
      alt: "Data Analysis",
      title: "Data Analysis",
      desc: "Transform your ideas into impactful products with our data analysis course",
    },
  ];

  return (
    <section id="courses" className="py-10 bg-green-50 mt-20 font-manrope">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-[var(--customGreen)]mb-3 text-center pt-5">
          Our Courses
        </h2>
        <p className="text-gray-500 mb-8 text-base md:text-lg mx-auto w-full md:w-3/4 lg:w-2/3 text-center">
          Advance your technical and professional skills through our top-tier
          programs, and become part of a community dedicated to accelerating
          your career
        </p>

        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={course.img}
                alt={course.alt}
                className="w-full h-48 object-cover"
              />
              <div className="px-5 py-4">
                <h3 className="text-lg md:text-xl font-semibold text-black pb-2">
                  {course.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed">
                  {course.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
