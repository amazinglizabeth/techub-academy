import React from "react";
import Tutors from "../../components/Tutors";
import Tutor1 from "./images/tutor1.png";
import Tutor3 from "./images/tutor3.png";

const tutors = [
  {
    id: 1,
    name: "John Makinde",
    role: "Data Analyst",
    image: Tutor1,
    bioLink: "#",
  },
  {
    id: 2,
    name: "Abdulsalam Halimat",
    role: "Data Analyst",
    image: Tutor3,
    bioLink: "#",
  },
];
const CourseTutor = () => {
  return <Tutors title="Course Tutors" tutors={tutors} />;
};

export default CourseTutor;
