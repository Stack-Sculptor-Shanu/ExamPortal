import React, { useState } from "react";
import { FaUser, FaRegFileAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

function AdminDashboard() {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedContent, setSelectedContent] = useState(null);

  const handleMenuClick = (menuId) => {
    setSelectedMenu((prevMenu) => (prevMenu === menuId ? null : menuId));
  };

  const handleContentClick = (content) => {
    setSelectedContent((prevContent) => (prevContent === content ? null : content));
  };

  const menuItems = [
    { id: "dashboard", icon: <MdDashboard size={24} />, label: "Dashboard" },
    { id: "author", icon: <FaUser size={24} />, label: "Author" },
    { id: "post", icon: <FaRegFileAlt size={24} />, label: "Post" },
  ];

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
      </aside>

      {/* Content Bar */}
      {selectedMenu && (
        <div className="w-64 bg-gray-100 p-4">
          <h2 className="text-lg font-semibold mb-4">{selectedMenu}</h2>
          <ul className="space-y-2">
            {["Item 1", "Item 2", "Item 3"].map((item, index) => (
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

export { AdminDashboard };
