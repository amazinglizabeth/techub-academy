import React, { useState } from "react";

const CourseModule = ({
  title = "Course Modules",
  modules = [],
  showExpandAll = true,
  defaultExpanded = false,
  expandAllText = "Expand all modules",
  collapseAllText = "Collapse all modules",
  renderContent = null,
  className = "",
}) => {
  const [openModules, setOpenModules] = useState({});
  const [expandAll, setExpandAll] = useState(defaultExpanded);

  const toggleExpandAll = () => {
    const newExpandAll = !expandAll;
    setExpandAll(newExpandAll);

    const updatedModules = {};
    modules.forEach((module, index) => {
      const moduleId = module.id || index + 1;
      updatedModules[moduleId] = newExpandAll;
    });
    setOpenModules(updatedModules);
  };

  const toggleModule = (id) => {
    setOpenModules((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className={`mx-auto p-4 px-5 md:px-10 ${className}`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4  gap-2">
        <h2 className="font-semibold text-xl sm:text-2xl">{title}</h2>

        {showExpandAll && modules.length > 0 && (
          <button
            onClick={toggleExpandAll}
            className="flex items-center justify-start sm:justify-end font-semibold text-gray-700 text-base sm:text-lg whitespace-nowrap"
          >
            <span className="mr-2">
              {expandAll ? collapseAllText : expandAllText}
            </span>
            <i
              className={`ri-arrow-drop-${
                expandAll ? "up" : "down"
              }-line text-2xl sm:text-3xl flex-shrink-0`}
            ></i>
          </button>
        )}
      </div>

      {/* Module List */}
      <div className="space-y-3">
        {modules.map((module, index) => {
          const moduleId = module.id || index + 1;
          const moduleNumber = module.moduleNumber || moduleId;
          const moduleTitle =
            module.title || module.name || `Module ${moduleNumber}`;
          const moduleDescription = module.description || "";

          return (
            <div
              key={moduleId}
              className="border border-gray-400 p-3 sm:p-4 rounded-xl"
            >
              <div
                onClick={() => toggleModule(moduleId)}
                className="cursor-pointer"
              >
                {/* Module ID and Icon Row */}
                <div className="flex justify-between items-center mb-2">
                  <p className="font-medium text-gray-500 text-xs sm:text-sm md:text-base">
                    Module {moduleNumber}
                  </p>
                  <i
                    className={`ri-arrow-drop-${
                      openModules[moduleId] ? "up" : "down"
                    }-line text-xl sm:text-2xl md:text-3xl text-gray-500`}
                  ></i>
                </div>

                {/* Module Title Row */}
                <div className="pr-8">
                  <p className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg leading-tight">
                    {moduleTitle}
                  </p>
                  {moduleDescription && (
                    <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-tight">
                      {moduleDescription}
                    </p>
                  )}
                </div>
              </div>

              {/* Expandable Content */}
              {openModules[moduleId] && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  {renderContent ? (
                    renderContent(module, moduleId)
                  ) : (
                    <div>
                      {module.content ? (
                        <div className="text-gray-700">
                          {typeof module.content === "string" ? (
                            <p>{module.content}</p>
                          ) : (
                            module.content
                          )}
                        </div>
                      ) : (
                        <p className="text-gray-600">
                          Module content for {moduleTitle}
                        </p>
                      )}

                      {module.duration && (
                        <div className="mt-2 text-sm text-gray-500">
                          <strong>Duration:</strong> {module.duration}
                        </div>
                      )}

                      {module.topics && module.topics.length > 0 && (
                        <div className="mt-2">
                          <strong className="text-sm text-gray-700">
                            Topics covered:
                          </strong>
                          <ul className="mt-1 text-sm text-gray-600 list-disc list-inside">
                            {module.topics.map((topic, topicIndex) => (
                              <li key={topicIndex}>{topic}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {modules.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No modules available
        </div>
      )}
    </section>
  );
};

export default CourseModule;
