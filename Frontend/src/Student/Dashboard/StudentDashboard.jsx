import React, { useState, useEffect } from "react";
import { FaSignOutAlt, FaBell, FaClipboardList, FaHtml5, FaCss3Alt, FaJs, FaReact, FaRegFileAlt, FaBook } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

const StudentDashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");
  const [selectedContent, setSelectedContent] = useState("dashboard");

  const handleMenuClick = (menuId) => {
    if (menuId === "dashboard") {
      if (selectedContent === "dashboard") {
        // Reset to dashboard if clicked again
        setSelectedContent("dashboard");
        setSelectedMenu("dashboard");
      } else {
        // Toggle dashboard content
        setSelectedContent("dashboard");
        setSelectedMenu("dashboard");
      }
    } else {
      setSelectedMenu(menuId);
      setSelectedContent(null); // Clear content if a different menu is selected
    }
  };
  

  const handleContentClick = (content) => {
    setSelectedContent(content);
    setSelectedMenu(null);
  };

  const menuItems = [
    { id: "dashboard", icon: <MdDashboard size={24} />, label: "Dashboard" },
    { id: "results", icon: <FaClipboardList size={24} />, label: "View Results" },
    { id: "exams", icon: <TfiWrite size={24} />, label: "Live Exams" },
    { id: "notifications", icon: <FaBell size={24} />, label: "Notifications" },
    { id: "study", icon: <FaBook size={24} />, label: "Study Materials" },
  ];

  const contentOptions = {
    results: ["Global Results", "Branch-Wise Results"],
    exams: ["Start New Exam", "View Ongoing Exams", "View Scheduled Exams"],
    notifications: ["All Notifications"],
    study: ["MERN", "Testing", "Java", "Python"],
  };

  useEffect(() => {
    // Ensure "dashboard" is selected when the component mounts
    setSelectedMenu("dashboard");
    setSelectedContent("dashboard");
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-16 bg-blue-900 text-white flex flex-col items-center py-4 space-y-6">
        {menuItems.map((item) => (
          <div className="relative group" key={item.id}>
            <button
              className={`p-2 rounded-md transition ${selectedMenu === item.id ? "bg-blue-700" : ""}`}
              onClick={() => handleMenuClick(item.id)}
            >
              {item.icon}
            </button>
            {/* Tooltip on the Right */}
            <div className="absolute top-1/2 left-full ml-2 transform -translate-y-1/2 bg-black text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {item.label}
            </div>
          </div>
        ))}
        {/* Logout Button */}
        <button className="p-2 mt-auto mb-4 text-red-500 hover:text-red-700">
          <NavLink to="/login"><FaSignOutAlt size={24} /></NavLink>
        </button>
      </aside>

      {/* Content Bar */}
      {selectedMenu && !selectedContent && contentOptions[selectedMenu] && (
        <div className="w-64 bg-gray-100 p-4">
          <h2 className="text-lg font-semibold mb-4">{selectedMenu}</h2>
          <ul className="space-y-2">
            {contentOptions[selectedMenu].map((item, index) => (
              <li
                key={index}
                className="p-2 bg-white shadow rounded cursor-pointer hover:bg-gray-200"
                onClick={() => handleContentClick(`${selectedMenu} - ${item}`)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Output Section */}
      <div className="flex-1 p-6 flex justify-center items-center">
        {selectedContent === "dashboard" ? (
          <div className="bg-white shadow-lg rounded-lg p-6 w-96 text-center border">
            {/* Dashboard Card */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9sHArFHC_7tDcFYCbAeEjvn_jeH_LifJ-CQ&s" // Default Image
              alt="Student"
              className="w-24 h-24 mx-auto rounded-full border-2 border-orange-300 mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
            <p className="text-gray-600 mb-2">Software Engineering</p>
            <p className="text-gray-600">Branch: Computer Science</p>
          </div>
        ) : selectedContent === "exams - Start New Exam" ? (
          <div className="flex gap-6">
            {/* Live Exam Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 w-64 text-center border transition-transform transform hover:scale-105">
              <h2 className="text-xl font-bold text-gray-800">Live Exam</h2>
              <p className="text-gray-600 mt-2">Join an ongoing exam in real-time.</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                <NavLink to='/examlists'>Start Live Exam</NavLink>
              </button>
            </div>

            {/* Mock Exam Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 w-64 text-center border transition-transform transform hover:scale-105">
              <h2 className="text-xl font-bold text-gray-800">Mock Exam</h2>
              <p className="text-gray-600 mt-2">Practice with a simulated exam.</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Start Mock Exam
              </button>
            </div>
          </div>
        ) : selectedContent === "study - MERN" ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* HTML Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 w-48 text-center border transition-transform transform hover:scale-105">
              <FaHtml5 size={40} className="mx-auto text-orange-500" />
              <h2 className="text-lg font-bold text-gray-800">HTML</h2>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                <a href="">Learn More</a>
              </button>
            </div>

            {/* CSS Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 w-48 text-center border transition-transform transform hover:scale-105">
              <FaCss3Alt size={40} className="mx-auto text-blue-500" />
              <h2 className="text-lg font-bold text-gray-800">CSS</h2>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Learn More
              </button>
            </div>

            {/* JavaScript Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 w-48 text-center border transition-transform transform hover:scale-105">
              <FaJs size={40} className="mx-auto text-yellow-500" />
              <h2 className="text-lg font-bold text-gray-800">JavaScript</h2>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                <a href="https://learn-javascript-mern.netlify.app/" target="_blank">Learn More</a>
              </button>
            </div>

            {/* React Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 w-48 text-center border transition-transform transform hover:scale-105">
              <FaReact size={40} className="mx-auto text-blue-500" />
              <h2 className="text-lg font-bold text-gray-800">React</h2>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Learn More
              </button>
            </div>

            {/* Interview Questions Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 w-48 text-center border transition-transform transform hover:scale-105">
              <FaRegFileAlt size={40} className="mx-auto text-gray-600" />
              <h2 className="text-lg font-bold text-gray-800">Interview Questions</h2>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Learn More
              </button>
            </div>
          </div>
        ) : selectedContent ? (
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg text-center border">
            <h2 className="text-xl font-bold text-gray-800">{selectedContent}</h2>
            <p className="text-gray-600 mt-2">
              You have selected <span className="font-semibold">{selectedContent}</span>.
            </p>
          </div>
        ) : (
          <h2 className="text-gray-400">Select an item from the menu</h2>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
