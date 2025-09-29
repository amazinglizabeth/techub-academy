import React from "react";
import FrontEnd from "./images/frontend.png";

const HeroSection = () => {
  return (
    <section>
      <div
        className="relative h-screen w-full"
        style={{
          backgroundImage: `url(${FrontEnd})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute top-1/4 md:top-8 left-2 md:left-8 py-6 md:py-20 px-3 md:px-10 text-white md:w-3/4 mt-14">
        <h2 className="font-semibold text-[2.75rem] md:text-[3.25rem]pb-8 !important">
          Elevate your skills in <br />
          <span className="block -mt-2">Front-End Development</span>
        </h2>
        <p className="md:font-medium text-xl md:text-2xl mt-3">
          Build stunning, user-friendly websites with our Front-End Engineering
          <br />
          program. Perfect for beginners or those looking to enhance their
          <br />
          coding skills.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
