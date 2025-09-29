import React from "react";
import ProductDesign from "./images/productDesign.png";

const HeroSection = () => {
  return (
    <section className="relative w-full">
      {/* Background image */}
      <div
        className="w-full h-[70vh] sm:h-[90vh] md:h-screen"
        style={{
          backgroundImage: `url(${ProductDesign})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Text content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 md:px-15 text-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug sm:leading-tight md:leading-tight mb-4 md:mb-6">
          Design the future with <br />
          <span className="block -mt-1">Product Design</span>
        </h2>
        <p className="text-base sm:text-lg md:text-2xl font-medium md:font-normal leading-relaxed sm:leading-relaxed md:leading-snug">
          Transform your ideas into impactful digital products with our product
          design courses. Create intuitive and visually stunning products that
          delight users and drive business success.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
