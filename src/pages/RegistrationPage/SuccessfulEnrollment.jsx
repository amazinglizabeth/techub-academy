import React from "react";
import Award from "./images/award.png";

const SuccessfulEnrollment = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-green-500 rounded-full w-20 h-20 flex items-center justify-center">
            <img src={Award} alt="congrat" />
          </div>
        </div>
        <h1 className="text-xl font-bold mb-2">
          Congratulations! You've Successfully Enrolled at Techub Academy
        </h1>
        <p className="text-gray-600 mb-4">
          Welcome aboard! Get ready for hands-on learning, expert guidance, and
          a vibrant community. Your journey to tech success starts now—let's
          achieve great things together!
        </p>
        <a href="/">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
            Proceed to Home
          </button>
        </a>
      </div>
    </div>
  );
};

export default SuccessfulEnrollment;
