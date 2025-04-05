
import React from 'react';

const Profile = () => {
  // Sample data (you can fetch from API or props later)
  const user = {
    name: 'Biswajit Sahu',
    email: 'biswajit@gmail.com',
    branch: 'Mechanical Engineering',
    profileImg: 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png',
  };

  return (
    <div className="min-h-screen bg-white-100 flex items-center justify-center p-8">
      <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col md:flex-row items-center w-full max-w-4xl gap-10">

        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={user.profileImg}
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover"
          />
        </div>

        {/* User Info */}
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-600"><span className="font-semibold">Email:</span> {user.email}</p>
          <p className="text-gray-600"><span className="font-semibold">Branch:</span> {user.branch}</p>
          {/* You can add more like college, phone, etc. here */}
        </div>

      </div>
    </div>
  );
};

export default Profile;
