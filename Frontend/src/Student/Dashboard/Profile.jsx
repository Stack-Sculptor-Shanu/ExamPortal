import React from "react";

const Profile = () => {
  return (
    <aside className="w-64 bg-gray-300 shadow-lg py-36 flex flex-col items-center border-l">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUwz1OwjNY59azZJpXVnBD707x4IzgpejvqQ&s"
        alt="Student"
        className="w-24 h-24 rounded-full mb-4"
      />
      <p className="text-2xl font-semibold text-gray-800">Jishu Krishna</p>
      <p className="text-gray-600">Cource - MERN Fullstack</p>
    </aside>
  );
};

export default Profile;
