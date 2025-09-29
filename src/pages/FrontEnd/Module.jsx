import React, { useState } from "react";
import CourseModule from "../../components/CourseModule";

const Module = () => {
  const modules = [
    { id: 1, title: "Introduction to Front-End Development" },
    { id: 2, title: "HTML and CSS Fundamentals" },
    { id: 3, title: "Javascript Basics" },
    { id: 4, title: "Advanced Javascript" },
    { id: 5, title: "Version Control with Git" },
    { id: 6, title: "React JS Frameworks" },
    { id: 7, title: "Responsive Web Design" },
    { id: 8, title: "APIs and Data Handling" },
    { id: 9, title: "Project-Based Learning" },
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
