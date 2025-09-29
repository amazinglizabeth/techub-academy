import React from "react";
import Slide1 from "./images/Slide1.png";
import Slide2 from "./images/slide2.png";
import Slide3 from "./images/slide3.png";
import Slide4 from "./images/slide4.png";
import Slide5 from "./images/slide5.png";
import Slide6 from "./images/slide6.png";
import Slide7 from "./images/slide7.png";
import Slide8 from "./images/slide8.png";

const Facilities = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8 px-4">
      <h2 className="text-2xl md:text-4xl font-semibold text-[var(--customGreen)] mb-6 text-center">
        Our Facilities
      </h2>

      <div className="relative w-full max-w-6xl aspect-[16/9] sm:aspect-[4/3] md:aspect-[16/7] rounded-lg overflow-hidden">
        <img
          src={Slide1}
          alt="Image 1"
          className="absolute inset-0 w-full h-full object-cover opacity-0 animate-image1"
        />
        <img
          src={Slide2}
          alt="Image 2"
          className="absolute inset-0 w-full h-full object-cover opacity-0 animate-image2"
        />
        <img
          src={Slide3}
          alt="Image 3"
          className="absolute inset-0 w-full h-full object-cover opacity-0 animate-image3"
        />
        <img
          src={Slide4}
          alt="Image 4"
          className="absolute inset-0 w-full h-full object-cover opacity-0 animate-image4"
        />
        <img
          src={Slide5}
          alt="Image 5"
          className="absolute inset-0 w-full h-full object-cover opacity-0 animate-image5"
        />
        <img
          src={Slide6}
          alt="Image 6"
          className="absolute inset-0 w-full h-full object-cover opacity-0 animate-image6"
        />
        <img
          src={Slide7}
          alt="Image 7"
          className="absolute inset-0 w-full h-full object-cover opacity-0 animate-image7"
        />
        <img
          src={Slide8}
          alt="Image 8"
          className="absolute inset-0 w-full h-full object-cover opacity-0 animate-image8"
        />
      </div>
    </div>
  );
};

export default Facilities;
