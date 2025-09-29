import React from "react";
import CourseModule from "../../components/CourseModule";

const Module = () => {
  const modules = [
    { id: 1, title: "Introduction to Back-End Development" },
    { id: 2, title: "Programming Fundamentals" },
    { id: 3, title: "Working with Databases" },
    { id: 4, title: "APIs and Web Service" },
    { id: 5, title: "Server-side Framework" },
    { id: 6, title: "Data Storage and Management" },
    { id: 7, title: "Security in Back-End Development" },
    { id: 8, title: "Performance Optimization" },
    { id: 9, title: "Working with Cloud Services" },
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
