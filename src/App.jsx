import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import About from "./pages/AboutPage/About";
import DigitalMarketing from "./pages/DigitalMarketing/DigitalMarketing";
import DataAnalysis from "./pages/DataAnalysis/DataAnalysis";
import FrontEnd from "./pages/FrontEnd/FrontEnd";
import BackEnd from "./pages/BackEnd/BackEnd";
import CyberSecurity from "./pages/CyberSecurity/CyberSecurity";
import ProductDesign from "./pages/ProductDesign/ProductDesign";
import Registration from "./pages/RegistrationPage/Registration";
import SuccessfulEnrollment from "./pages/RegistrationPage/SuccessfulEnrollment";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/DigitalMarketing" element={<DigitalMarketing />} />
        <Route path="/DataAnalysis" element={<DataAnalysis />} />
        <Route path="/FrontEnd" element={<FrontEnd />} />
        <Route path="/BackEnd" element={<BackEnd />} />
        <Route path="/CyberSecurity" element={<CyberSecurity />} />
        <Route path="/ProductDesign" element={<ProductDesign />} />
        <Route path="/Registration" element={<Registration />} />
        <Route
          path="/SuccessfulEnrollment"
          element={<SuccessfulEnrollment />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
