import React from "react";
import Header from "../../components/Header";
import Info from "./Info";
import Facilities from "./Facilities";
import Tutors from "./Tutors";
import Support from "./Support";
import Footer from "../LandingPage/Footer";

const About = () => {
  return (
    <div className="font-manrope text-gray-800 overflow-y-scroll scrollbar-hide">
      <Header />
      <Info />
      <Facilities />
      <Tutors />
      <Support />
      <Footer />
    </div>
  );
};

export default About;
