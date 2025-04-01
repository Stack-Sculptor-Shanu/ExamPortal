import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import Options from "./Designation/Options";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showOptions, setShowOptions] = useState(false); 
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8090/api/login",
        formData,
        { withCredentials: true }
      );
      Cookies.set("verification_token", response.data.token, { expires: 7 });
      navigate("/studentdashboard");
    } catch (error) {
      console.error(error);
      setError("Invalid Login Credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-[91vh] bg-gradient-to-r from-blue-500 via-red-500 to-sky-500">
      <div className="bg-white bg-opacity-40 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800">Login Here</h2>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        <form onSubmit={handleSubmit} className="mt-6">
          <div>
            <label className="block text-gray-700 font-bold">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 font-bold">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
                name="password"
                required
                value={formData.password}
                onChange={handleInputChange}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>
          <button
            type="submit"
            disabled={!formData.email.trim() || !formData.password.trim()}
            className={`w-full p-2 font-bold text-white py-2 mt-6 rounded-md transition duration-200 ${
              formData.email && formData.password
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?
          <span
            onClick={() => setShowOptions(true)}
            className="text-blue-500 font-semibold cursor-pointer hover:underline"
          >
            {" "}
            Register
          </span>
        </p>
      </div>

      {showOptions && <Options onClose={() => setShowOptions(false)} />} {/* Show the options modal */}
    </div>
  );
};

export default Login;
