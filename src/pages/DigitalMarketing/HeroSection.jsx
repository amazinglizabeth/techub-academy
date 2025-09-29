import React from "react";
import Marketing from "./images/marketing.png";

const HeroSection = () => {
  return (
    <section>
      <div
        className="relative h-screen w-full"
        style={{
          backgroundImage: `url(${Marketing})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute top-1/4 md:top-8 left-2 md:left-8 py-6 md:py-20 px-3 md:px-10 text-white md:w-3/4 mt-14">
        <h2 className="font-semibold text-[2.75rem] md:text-[3.25rem]pb-8 !important">
          Become a Digital Marketing Expert: <br />
          <span className="block -mt-2">Drive Results, Optimize Growth!</span>
        </h2>
        <p className="md:font-medium text-xl md:text-2xl mt-3">
          Master data-driven digital marketing strategies, including SEO, PPC,
          <br />
          analytics, and automation, to create high-performance campaigns that
          <br />
          drive measurable business growth.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
