import React, { useState } from "react";
import { FaSignOutAlt, FaBell, FaClipboardList, FaHtml5, FaCss3Alt, FaJs, FaReact, FaRegFileAlt, FaBook } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

const StudentDashboard = () => {
    const [selectedMenu, setSelectedMenu] = useState("dashboard");
    const [selectedContent, setSelectedContent] = useState("dashboard");

    const handleMenuClick = (menuId) => {
        setSelectedMenu((prevMenu) => (prevMenu === menuId ? null : menuId));
        setSelectedContent(menuId === "dashboard" ? "dashboard" : null);
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
                    </div>
                ))}
            </aside>

            {/* Output Section */}
            <div className="flex-1 p-6 flex justify-center items-center">
                {selectedContent === "dashboard" && (
                    <div className="bg-white shadow-lg rounded-lg p-6 w-96 text-center border">
                        <img
                            src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                            alt="Student"
                            className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500 mb-4"
                        />
                        <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
                        <p className="text-gray-600 mb-2">Software Engineering</p>
                        <p className="text-gray-600">Branch: Mern Stack</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StudentDashboard;
