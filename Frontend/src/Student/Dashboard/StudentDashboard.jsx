import React, { useState } from "react";
import { FaUserGraduate, FaBook, FaSignOutAlt, FaBell, FaClipboardList } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

const StudentDashboard = () => {
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [selectedContent, setSelectedContent] = useState(null);
  
    const handleMenuClick = (menuId) => {
      setSelectedMenu((prevMenu) => (prevMenu === menuId ? null : menuId));
      setSelectedContent(null); // Reset content when changing menu
    };
  
    const handleContentClick = (content) => {
      setSelectedContent(content);
      setSelectedMenu(null); // Hide middle bar when an item is clicked
    };
  
    const menuItems = [
      { id: "dashboard", icon: <MdDashboard size={24} />, label: "Dashboard" },
      { id: "results", icon: <FaClipboardList size={24} />, label: "View Results" },
      { id: "exams", icon: <FaBook size={24} />, label: "Live Exams" },
      { id: "notifications", icon: <FaBell size={24} />, label: "Notifications" },
      { id: "study", icon: <FaBook size={24} />, label: "Study Materials" },
    ];
  
    const contentOptions = {
      results: ["Global Results", "Branch-Wise Results"],
      exams: ["Start New Exam", "View Ongoing Exams", "View Scheduled Exams"],
      notifications: ["All Notifications"],
      study: ["MERN", "Testing", "Java", "Python"],
    };
  
    return (
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-16 bg-blue-900 text-white flex flex-col items-center py-4 space-y-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`p-2 rounded-md transition ${selectedMenu === item.id ? "bg-blue-700" : ""}`}
              onClick={() => handleMenuClick(item.id)}
            >
              {item.icon}
            </button>
          ))}
          {/* Logout Button */}
          <button className="p-2 mt-auto mb-4 text-red-500 hover:text-red-700"><NavLink to="/login"><FaSignOutAlt size={24} /></NavLink></button>
        </aside>
  
        {/* Content Bar (Hidden when an item is clicked) */}
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
        <div className="flex-1 p-4">
          {selectedContent ? (
            <h2 className="text-xl font-bold">{selectedContent}</h2>
          ) : (
            <h2 className="text-gray-400">Select an item from the menu</h2>
          )}
        </div>
      </div>
    );
}

export default StudentDashboard;
