import React from "react";

const Registration = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-2">
          Complete Your Application and Take the Next Step!
        </h2>
        <p className="text-center text-gray-600 mb-6">
          You're almost there! Just a few more details, and you'll be ready to
          start your journey with Techub Academy.
        </p>
        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm p-2 focus:outline-none focus:ring-0"
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0 sm:text-sm p-2"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0 sm:text-sm p-2"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0 sm:text-sm p-2"
                placeholder="Phone Number"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Pick your location
            </label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0 sm:text-sm p-2">
              <option value="location1">Lagos</option>
              <option value="location2">Others</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Choose your preferred course
            </label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0 sm:text-sm p-2">
              <option value="course1">Product Design</option>
              <option value="course2">Front-End Engineering</option>
              <option value="course3">Back-End Engineering</option>
              <option value="course4">Digital Marketing</option>
              <option value="course5">Cybersecurity</option>
              <option value="course6">Data Analysis</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Why are you interested in this course?
            </label>
            <textarea
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0 sm:text-sm p-2"
              rows="3"
              placeholder="Tell us why you're interested in this course"
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              How did you hear about Techub Academy?
            </label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0 sm:text-sm p-2">
              <option value="option1">Family and friends</option>
              <option value="option2">Social Media</option>
              <option value="option3">Google</option>
            </select>
          </div>

          <div className="flex justify-between">
            <a href="/SuccessfulEnrollment">
              <button
                type="button"
                className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
              >
                Submit
              </button>
            </a>
            <a href="/About">
              <button
                type="button"
                className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
              >
                Cancel
              </button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
