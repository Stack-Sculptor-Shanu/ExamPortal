import React from "react";
import { FaSignOutAlt, FaBell, FaClipboardList, FaBook } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = ({ selectedMenu, setSelectedMenu, setSelectedContent }) => {
  const navigate = useNavigate();

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
    <aside className="w-20 bg-blue-900 text-white flex flex-col items-center py-12 space-y-6">
      {menuItems.map((item) => (
        <button
          key={item.id}
          className={`p-2 rounded-md transition ${selectedMenu === item.id ? "bg-blue-600" : ""}`}
          onClick={() => handleMenuClick(item.id)}
        >
          {item.icon}
        </button>
      ))}
      <NavLink to="/login" className="p-2 text-red-500 hover:text-red-700 mt-auto mb-4">
        <FaSignOutAlt size={24} />
      </NavLink>
    </aside>
  );
};

export default Sidebar;
