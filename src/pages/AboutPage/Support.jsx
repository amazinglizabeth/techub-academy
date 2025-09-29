import React from "react";
import Call from "./images/call.png";
import Mail from "./images/mail.png";
import Insta from "./images/Insta.png";
import Facebook from "./images/facebook.png";
import Twitter from "./images/twitter.png";
import Linkedln from "./images/linkedln.png";

const Support = () => {
  return (
    <div className="bg-[var(--customGreen)] mx-4 sm:mx-8 md:mx-12 my-10 rounded-lg text-center py-10 px-4 sm:px-8 md:px-16 lg:px-28 shadow-md">
      <h2 className="text-white text-3xl sm:text-4xl font-bold mb-3">
        Talk to our Support
      </h2>
      <p className="text-white text-base sm:text-lg md:text-xl font-medium leading-relaxed">
        For more information and enquiries, feel free to reach out to our
        support team <br className="hidden sm:block" />
        through the channels below
      </p>

      {/* Responsive grid for contact info */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 text-white text-left">
        {/* Phone & Email */}
        <div>
          <p className="font-medium mb-3 text-lg sm:text-xl">Phone numbers</p>
          <div className="flex items-center mb-2">
            <img src={Call} alt="Phone Icon" className="w-5 h-5 mr-2" />
            <p className="text-sm sm:text-base font-thin">08123456798</p>
          </div>
          <div className="flex items-center mb-2">
            <img src={Call} alt="Phone Icon" className="w-5 h-5 mr-2" />
            <p className="text-sm sm:text-base font-thin">08123456798</p>
          </div>

          <p className="font-medium mt-6 mb-3 text-lg sm:text-xl">
            E-mail address
          </p>
          <div className="flex items-center">
            <img src={Mail} alt="Email Icon" className="w-5 h-5 mr-2" />
            <p className="text-sm sm:text-base font-thin">
              support@techubacademy.com
            </p>
          </div>
        </div>

        {/* Socials */}
        <div>
          <p className="font-medium mb-3 text-lg sm:text-xl">Socials</p>
          <div className="flex items-center mb-2">
            <img src={Insta} alt="Instagram Icon" className="w-5 h-5 mr-2" />
            <p className="text-sm sm:text-base font-thin">@techubacademyng</p>
          </div>
          <div className="flex items-center mb-2">
            <img src={Facebook} alt="Facebook Icon" className="w-5 h-5 mr-2" />
            <p className="text-sm sm:text-base font-thin">@techubacademyng</p>
          </div>
          <div className="flex items-center mb-2">
            <img src={Linkedln} alt="LinkedIn Icon" className="w-5 h-5 mr-2" />
            <p className="text-sm sm:text-base font-thin">@techubacademyng</p>
          </div>
          <div className="flex items-center">
            <img src={Twitter} alt="Twitter Icon" className="w-5 h-5 mr-2" />
            <p className="text-sm sm:text-base font-thin">@techubacademyng</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
