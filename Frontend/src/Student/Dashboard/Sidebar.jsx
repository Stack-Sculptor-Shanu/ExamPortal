import React from "react";
import { FaSignOutAlt, FaBell, FaClipboardList, FaBook } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

const Sidebar = ({ selectedMenu, setSelectedMenu, setSelectedContent }) => {
  const menuItems = [
    { id: "results", icon: <FaClipboardList size={26} />, label: "View Results" },
    { id: "exams", icon: <TfiWrite size={26} />, label: "Live Exams" },
    { id: "notifications", icon: <FaBell size={26} />, label: "Notifications" },
    { id: "study", icon: <FaBook size={26} />, label: "Study Materials" },
  ];

  const handleMenuClick = (menuId) => {
    setSelectedMenu(menuId);
    setSelectedContent(menuId);
  };

  return (
    <aside className="w-20 bg-blue-900 text-white flex flex-col items-center py-12 space-y-6 relative">
      {menuItems.map((item) => (
        <div key={item.id} className="relative group">
          <button
          key={item.id}
          className={`p-2 rounded-md transition relative ${selectedMenu === item.id ? "bg-blue-600" : ""}`}
          onClick={() => handleMenuClick(item.id)}
        >
          {item.icon}
        </button>
        <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap z-10">
        {item.label}
        </div>
        <div key={item.id} className="relative group flex flex-col items-center">
          <button
            className={`p-2 rounded-md transition ${
              selectedMenu === item.id ? "bg-blue-600" : ""
            }`}
            onClick={() => handleMenuClick(item.id)}
          >
            {item.icon}
          </button>

          {/* Tooltip */}
          <div className="absolute left-14 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap z-10">
            {item.label}
          </div>
        </div>
      ))}

      {/* Logout Button */}
      <NavLink to="/login" className="p-2 text-red-500 hover:text-red-700 mt-auto mb-4">
        <FaSignOutAlt size={24} />
      </NavLink>
    </aside>
  );
};

export default Sidebar;
