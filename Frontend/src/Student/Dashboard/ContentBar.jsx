import React from "react";

const ContentBar = ({ selectedMenu, setSelectedContent }) => {
  const contentOptions = {
    results: ["Global Results", "Branch-Wise Results"],
    exams: ["Start New Exam", "View Ongoing Exams", "View Scheduled Exams"],
    notifications: ["All Notifications"],
    study: ["MERN", "Testing", "Java", "Python"],
  };

  return (
    selectedMenu && contentOptions[selectedMenu] ? (
      <div className="w-64 bg-gray-100 p-4 text-center">
        <h2
          className="text-lg font-semibold mb-4 capitalize cursor-pointer"
          onClick={() => setSelectedContent("")}  
        >
          {selectedMenu}
        </h2>

        <ul className="space-y-2">
          {contentOptions[selectedMenu].map((item, index) => {
            const fullContent = `${selectedMenu} - ${item}`; 
            return (
              <li
                key={index}
                className="p-2 bg-white shadow rounded cursor-pointer hover:bg-gray-200"
                onClick={() => setSelectedContent(fullContent)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    ) : ""
  );
};

export default ContentBar;
