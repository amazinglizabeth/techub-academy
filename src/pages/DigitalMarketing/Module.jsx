import React from "react";
import CourseModule from "../../components/CourseModule";

const Module = () => {
  const modules = [
    { id: 1, title: "Introduction to Digital Marketing" },
    { id: 2, title: "Search Engine Optimization (SEO)" },
    { id: 3, title: "Content Marketing" },
    { id: 4, title: "Pay-Per-Click Advertising (PPC)" },
    { id: 5, title: "Social Media Marketing" },
    { id: 6, title: "Email Marketing" },
    { id: 7, title: " Web Analytics and Data Insights" },
    { id: 8, title: "Marketing Automation and CRM" },
    { id: 9, title: "Affliate and Influncer Marketing" },
    { id: 10, title: "Advanced Digital Marketing Techniques" },
    { id: 11, title: "Digital Marketing Ethics and Compliance" },
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
