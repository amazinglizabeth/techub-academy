import React from "react";
import Header from "../../components/Header";
import HeroSection from "./HeroSection";
import Courses from "./Courses";
import Offer from "./Offer";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import AboutUs from "./AboutUs";

const LandingPage = () => {
  return (
    <div className="font-manrope text-gray-800 overflow-y-scroll scrollbar-hide">
      <Header />
      <HeroSection />
      <AboutUs />
      <Courses />
      <Offer />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default LandingPage;
