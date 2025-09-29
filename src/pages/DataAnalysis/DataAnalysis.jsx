import React from "react";
import Header from "../../components/Header";
import HeroSection from "./HeroSection";
import NextCohort from "../../components/NextCohort";
import AboutCourse from "./AboutCourse";
import Footer from "../LandingPage/Footer";
import CourseModule from "./Module";
import CourseRequirement from "../../components/CourseRequirement";
import CourseTutor from "./CourseTutor";

const DataAnalysis = () => {
  return (
    <div className="font-manrope overflow-y-scroll scrollbar-hide">
      <Header />
      <HeroSection />
      <NextCohort />
      <AboutCourse />
      <CourseModule />
      <CourseRequirement />
      <CourseTutor />
      <Footer />
    </div>
  );
};

export default DataAnalysis;
