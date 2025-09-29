import React from "react";
import CourseModule from "../../components/CourseModule";

const Module = () => {
  const modules = [
    { id: 1, title: "Introduction to UI/UX and Figma" },
    { id: 2, title: "Design Principles and Design Thinking" },
    { id: 3, title: "Typography and Colors" },
    { id: 4, title: "Design System and Style guide" },
    { id: 5, title: "Design brief and UX research" },
    {
      id: 6,
      title: "Wireframing, User flow, Information Architecture and Prototyping",
    },
    { id: 7, title: "Project and Hand-over" },
    { id: 8, title: "Portfolio Creation" },
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
