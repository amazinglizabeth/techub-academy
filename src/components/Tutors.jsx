import React from "react";

const Tutors = ({ title = "Tutors", tutors }) => {
  return (
    <section className="mx-auto p-4 ml-8 mb-3">
      <h2 className="font-semibold text-2xl mb-3">{title}</h2>
      <div className="flex flex-row flex-wrap items-center gap-6 w-full">
        {tutors.map((tutor) => (
          <div
            key={tutor.id}
            className="flex flex-row items-center gap-2 rounded-lg border border-[#808080] py-4 px-3 pr-10"
          >
            <div>
              <img
                src={tutor.image}
                alt={`${tutor.name} - ${tutor.role}`}
                className="w-17 h-17 rounded-md"
              />
            </div>
            <div className="ml-1">
              <h5 className="font-medium text-xl text-gray-800">
                {tutor.name}
              </h5>
              <p className="text-gray-700 text-sm py-1">{tutor.role}</p>
              <a
                href={tutor.bioLink}
                className="block font-semibold text-[14px] text-gray-600 cursor-pointer underline underline-thin"
              >
                View Bio
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tutors;
