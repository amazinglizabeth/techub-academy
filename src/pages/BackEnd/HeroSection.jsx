import React from "react";
import BackEnd from "./images/backend.png";

const HeroSection = () => {
  return (
    <section>
      <div
        className="relative h-screen w-full"
        style={{
          backgroundImage: `url(${BackEnd})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute top-1/4 md:top-8 left-2 md:left-8 py-6 md:py-20 px-3 md:px-10 text-white md:w-3/4 mt-14">
        <h2 className="font-semibold text-[2.75rem] md:text-[3.25rem]pb-8 !important">
          Master the complexities of <br />
          <span className="block -mt-2">Back-End Engineering</span>
        </h2>
        <p className="md:font-medium text-xl md:text-2xl mt-3">
          Master Back-End Engineering and learn to build powerful, scalable
          <br />
          server-side applications, manage databases, and integrate seamlessly
          <br />
          with front-end systems
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
