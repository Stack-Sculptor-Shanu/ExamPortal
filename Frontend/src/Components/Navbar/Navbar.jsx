import React from 'react';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  // Get the current location
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'text-blue-600 border-b-2 border-blue-600' : '';

  return (
    <div>
      <nav id="navigationbar" className="bg-white text-black p-4 flex justify-between items-center shadow-md shadow-gray-300">
        {/* Logo + Name */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-white rounded-full flex justify-center items-center">
              <span className="text-blue-600 text-xl font-bold bg-gradient-to-r from-blue-500 via-red-500 to-sky-500 text-transparent bg-clip-text">
                🧠
              </span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-red-500 to-sky-500 text-transparent bg-clip-text">
              AptiNest
            </span>
          </Link>
        </div>

        {/* Navbar Sections: Home, About, Contact, Privacy */}
        <div className="flex space-x-8">
          <Link
            to="/"
            className={`text-lg font-semibold hover:text-blue-500 ${isActive('/')}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-lg font-semibold hover:text-blue-500 ${isActive('/about')}`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`text-lg font-semibold hover:text-blue-500 ${isActive('/contact')}`}
          >
            Contact
          </Link>
          <Link
            to="/privacy"
            className={`text-lg font-semibold hover:text-blue-500 ${isActive('/privacy')}`}
          >
            Privacy
          </Link>
        </div>

        {/* Login Button */}
        <div className="relative">
          <Link
            to="/login" 
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
