import React from "react";
import Tutors from "../../components/Tutors";
import Tutor1 from "./images/tutor1.png";
import Tutor2 from "./images/tutor2.png";

const tutors = [
  {
    id: 1,
    name: "Adedolapo Adeagbo",
    role: "Cybersecurity Expert",
    image: Tutor1,
    bioLink: "#",
  },
  {
    id: 2,
    name: "Thomas Smith",
    role: "Cybersecurity Expert",
    image: Tutor2,
    bioLink: "#",
  },
];

const CourseTutor = () => {
  return <Tutors title="Course Tutors" tutors={tutors} />;
};

export default CourseTutor;
