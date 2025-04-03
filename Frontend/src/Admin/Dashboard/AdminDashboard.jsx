import React, { useState } from "react";
import { FaRegFileAlt, FaSignOutAlt } from "react-icons/fa";
import { FcManager } from "react-icons/fc";
import { IoSettingsSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

// Importing separate components
import StudentList from "./DashbordPages/StudentList";
import ConductExam from "./DashbordPages/ConductExam";
import AddQuestins from "./DashbordPages/AddQuestins";
import StudentRuselt from "./DashbordPages/StudentRuselt";
import EditProfile from "./DashbordPages/EditProfile";
import Profile from "./DashbordPages/Profile";

const AdminDashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleMenuClick = (menuId) => {
    setSelectedMenu((prevMenu) => (prevMenu === menuId ? null : menuId));
  };

  const handleContentClick = (content) => {
    setSelectedComponent(content);
    setSelectedMenu(null); // Collapse content bar on selection
  };

  const menuItems = [
    { id: "Dashboard", icon: <MdDashboard size={24} />, label: "Dashboard" },
    { id: "Student", icon: <FcManager size={24} />, label: "Students" },
    { id: "Report", icon: <FaRegFileAlt size={24} />, label: "Report" },
    { id: "ExamManagement", icon: <IoSettingsSharp size={24} />, label: "Exam Management" },
  ];

  const contentOptions = {
    Dashboard: { "Profile": <Profile />, "Edit Profile": <EditProfile /> },
    Student: { "Student List": <StudentList /> },
    Report: { "Student Result": <StudentRuselt/> },
    ExamManagement: { "Conduct Exam": <ConductExam />, "Add Question": <AddQuestins /> },
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-16 bg-gray-900 text-white flex flex-col items-center py-4 space-y-6">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`p-2 rounded-md transition ${selectedMenu === item.id ? "bg-gray-700" : ""}`}
            onClick={() => handleMenuClick(item.id)}
          >
            {item.icon}
          </button>
        ))}
        {/* Logout Button */}
        <button className="p-2 mt-auto mb-4 text-red-500 hover:text-red-700">
          <NavLink to="/login"><FaSignOutAlt size={24} /></NavLink>
        </button>
      </aside>

      {/* Content Bar */}
      {selectedMenu && (
        <div className="w-64 bg-gray-100 p-4">
          <h2 className="text-lg font-semibold mb-4">{selectedMenu}</h2>
          <ul className="space-y-2">
            {Object.keys(contentOptions[selectedMenu]).map((item) => (
              <li
                key={item}
                className="p-2 bg-white shadow rounded cursor-pointer hover:bg-gray-200"
                onClick={() => handleContentClick(contentOptions[selectedMenu][item])}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Output Section */}
      <div className="flex-1 p-4">
        {selectedComponent ? (
          selectedComponent
        ) : (
          <Profile/>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
