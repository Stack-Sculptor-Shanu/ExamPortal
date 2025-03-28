import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormData,
  setError,
  setIsLoggedIn,
  togglePasswordVisibility,
  resetState,
} from "../../Redux/slices/AuthSlice"; // Adjust the import based on your Redux slice
import Options from "./Designation/Options"; // Import Options component

const Login = () => {
  const { email, password, error, isLoggedIn, showPassword } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Check if the user is logged in by checking the verification_token in cookies
  useEffect(() => {
    const token = Cookies.get("verification_token");
    if (token) {
      dispatch(setIsLoggedIn(true));
    }
  }, [dispatch]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormData({ [name]: value })); // Set the value in Redux store
  };

  // Handle form submission for login
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8090/api/login",
        { email, password },
        { withCredentials: true }
      );
      Cookies.set("verification_token", response.data.token, { expires: 7 });
      dispatch(setIsLoggedIn(true));
      navigate("/studentdashboard"); // Redirect to the student dashboard
    } catch (error) {
      console.error(error);
      dispatch(setError("Invalid Login Credentials"));
    }
  };

  // Toggle password visibility
  const togglePasswordVisibilityHandler = () => {
    dispatch(togglePasswordVisibility());
  };

  const isFormFilled = email.trim() !== "" && password.trim() !== "";

  // Handle logout functionality
  const handleLogout = () => {
    Cookies.remove("verification_token");
    dispatch(setIsLoggedIn(false)); // Update Redux state to show the user is logged out
    navigate("/"); // Redirect to homepage
  };

  const [showOptions, setShowOptions] = React.useState(false); // To control modal display for options

  const handleRegisterClick = () => {
    setShowOptions(true); // Show options modal when register is clicked
  };

  const closeOptions = () => {
    setShowOptions(false); // Close modal
  };

  return (
    <div className="flex items-center justify-center h-[91vh] bg-gradient-to-r from-blue-500 via-red-500 to-sky-500">
      <div className="bg-white bg-opacity-40 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          {isLoggedIn ? "Welcome Back!" : "Login Here"}
        </h2>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        <form onSubmit={handleSubmit} className="mt-6">
          {!isLoggedIn && (
            <>
              <div>
                <label className="block text-gray-700 font-bold">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                  name="email"
                  required
                  value={email}
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
                    value={password}
                    onChange={handleInputChange}
                  />
                  <span
                    onClick={togglePasswordVisibilityHandler}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </span>
                </div>
              </div>
            </>
          )}
          <button
            type={isLoggedIn ? "button" : "submit"}
            onClick={isLoggedIn ? handleLogout : undefined}
            disabled={isLoggedIn ? false : !isFormFilled}
            className={`w-full p-2 font-bold text-white py-2 mt-6 rounded-md transition duration-200 ${
              isLoggedIn
                ? "bg-red-600 hover:bg-red-700"
                : isFormFilled
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?
          <span
            onClick={handleRegisterClick}
            className="text-blue-500 font-semibold cursor-pointer hover:underline"
          >
            {" "}
            Register
          </span>
        </p>
      </div>

      {showOptions && <Options onClose={closeOptions} />} {/* Show the options modal */}
    </div>
  );
};

export default Login;
