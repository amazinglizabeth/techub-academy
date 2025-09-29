import React from "react";
import CourseModule from "../../components/CourseModule";

const Module = () => {
  const modules = [
    { id: 1, title: "Introduction to Cybersecurity" },
    { id: 2, title: "Network Security Fundamentals" },
    { id: 3, title: "Encrytion and Cryptography" },
    { id: 4, title: "Ethical Hacking and Penetration Testing" },
    { id: 5, title: "Threat Intelligence and icident Response" },
    { id: 6, title: "Vulnerability Assessment and Management" },
    { id: 7, title: "Security Operations and Monitoring" },
    { id: 8, title: "Advanced Cybersecurity Techniques" },
    { id: 9, title: "Cloud Security" },
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
