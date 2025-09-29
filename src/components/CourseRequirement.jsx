import React from "react";

const CourseRequirement = () => {
  return (
    <section className="mx-4 md:px-7 my-8">
      <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl mb-4">
        Course Requirement
      </h2>

      <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg text-gray-600">
        <li>Laptop</li>
        <li>Good internet connection</li>
      </ul>

      <p className="mt-4 text-base sm:text-lg text-gray-600">
        But at Techub Academy we provide free internet connection for all our
        students. Feels good, right!
      </p>
    </section>
  );
};

export default CourseRequirement;
