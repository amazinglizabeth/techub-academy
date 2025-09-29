import React from "react";
import Tutors from "../../components/Tutors";
import Tutor2 from "./images/tutor2.png";
import Tutor3 from "./images/tutor3.png";

const tutors = [
  {
    id: 1,
    name: "Bayowa Makinde",
    role: "Digital Markeker,SEO Specialist",
    image: Tutor2,
    bioLink: "#",
  },
  {
    id: 2,
    name: "Agbor Happiness",
    role: "Digital Markeker,SEO Specialist",
    image: Tutor3,
    bioLink: "#",
  },
];

const CourseTutor = () => {
  return <Tutors title="Course Tutors" tutors={tutors} />;
};

export default CourseTutor;
