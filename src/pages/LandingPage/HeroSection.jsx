import React from "react";
import homeImage from "./images/black-man.png";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-center bg-no-repeat bg-cover flex items-center"
      style={{ backgroundImage: `url(${homeImage})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content on top of overlay */}
      <div className="relative z-10 px-4 py-8 sm:p-10 md:pt-15 md:pl-15 max-w-4xl mx-auto md:mx-0">
        <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-[2.75rem] font-bold text-slate-50 mb-2 leading-tight">
          Welcome to Techhub Academy.
        </h2>
        <p className="text-xl xs:text-2xl sm:text-3xl md:text-[2.75rem] mb-6 leading-tight text-slate-50">
          Unlock your potential in
          <span className="block">Technology</span>
        </p>
        <p className="text-sm xs:text-base sm:text-lg md:text-xl font-normal mb-8 text-slate-50 leading-relaxed">
          Join a Vibrant Community of Passionate Learners
          <span className="block pt-1">
            Empowering Individuals with Skills to thrive.
          </span>
        </p>
        <a href="#courses">
          <button className="bg-[var(--customGreen)] text-white text-sm xs:text-base sm:text-base md:text-lg py-3 xs:py-4 px-6 xs:px-8 sm:px-12 rounded-3xl hover:bg-green-800 transition-colors duration-200">
            Explore Courses
          </button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
