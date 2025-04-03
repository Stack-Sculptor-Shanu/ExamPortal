import React from "react";
import { FaEnvelope, FaUserShield, FaIdBadge } from "react-icons/fa";

const AdminProfile = () => {
  // Mock admin data (Replace with real data)
  const adminData = {
    name: "Biswajit Sahu",
    email: "admin@example.com",
    role: "Super Admin",
    facultyId: "FAC-2025001",
    joined: "March 2024",
    profileImage: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png", // Replace with actual image URL
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-6 flex">
      {/* Left: Profile Picture */}
      <div className="w-1/3 flex justify-center items-center">
        <img
          src={adminData.profileImage}
          alt="Admin Profile"
          className="w-40 h-40 rounded-full border-4 border-gray-300"
        />
      </div>

      {/* Right: Profile Details */}
      <div className="w-2/3 pl-6">
        <h2 className="text-2xl font-bold text-gray-800">{adminData.name}</h2>
        <p className="text-gray-500">{adminData.role}</p>

        <div className="mt-4 space-y-3">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-gray-600" />
            <p className="text-gray-700">{adminData.email}</p>
          </div>

          <div className="flex items-center space-x-3">
            <FaIdBadge className="text-gray-600" />
            <p className="text-gray-700">Faculty ID: {adminData.facultyId}</p>
          </div>

          <div className="flex items-center space-x-3">
            <FaUserShield className="text-gray-600" />
            <p className="text-gray-700">Joined: {adminData.joined}</p>
          </div>
        </div>

        {/* Edit Profile Button */}
        <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default AdminProfile;
