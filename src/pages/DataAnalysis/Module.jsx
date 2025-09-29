import React from "react";
import CourseModule from "../../components/CourseModule";

const Module = () => {
  const modules = [
    { id: 1, title: "Introduction to Data Analysis" },
    { id: 2, title: "Data Collectiom and Cleaning" },
    { id: 3, title: "Exploatory Data Analysi (EDA)" },
    { id: 4, title: "Advanced Analytic Techniques" },
    { id: 5, title: "Predictive Modelling" },
    { id: 6, title: "Big Data and Data Warehousing" },
    { id: 7, title: "Machine Learning for Data Analysis" },
    { id: 8, title: "Data Visualization and Reporting" },
    { id: 9, title: "Ethics and Data Privacy" },
  ];

  return (
    <CourseModule
      title="Course Modules"
      modules={modules}
      defaultExpanded={true}
      showExpandAll={true}
      expandAllText="Expand all modules"
      collapseAllText="Collapse all modules"
    />
  );
};

export default Module;
