import React from "react";
import Tutors from "../../components/Tutors";
import Tutor1 from "./images/tutor1.png";
import Tutor3 from "./images/tutor3.png";

const tutors = [
  {
    id: 1,
    name: "George Thelma",
    role: "Product Designer, UX Tutor",
    image: Tutor3,
    bioLink: "#",
  },
  {
    id: 2,
    name: "Adeyinka Adeagbo",
    role: "Product Designer, UX Tutor",
    image: Tutor1,
    bioLink: "#",
  },
];

const CourseTutor = () => {
  return <Tutors title="Course Tutors" tutors={tutors} />;
};

export default CourseTutor;
