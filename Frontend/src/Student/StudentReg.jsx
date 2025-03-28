import React from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Change useHistory to useNavigate
import { useDispatch, useSelector } from 'react-redux';
import { setStudentData } from '../Redux/slices/StudentSlice'; // Action to update student data
import { registerStudent } from '../Redux/actions/StudentAction';
import studentSVG from '../Assets/StudentSignup.svg'; // Make sure you have the appropriate SVG for the student sign-up

const StudentReg = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();  // useNavigate instead of useHistory
  
  // Get form data from Redux store
  const { name, email, phone } = useSelector((state) => state.student);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch the registration action
    dispatch(registerStudent({ name, email, phone }));

    // Optionally, navigate to a different page after registration
    navigate('/dashboard');  // Use navigate instead of history.push
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setStudentData({ field: name, value }));  // Dispatching the input change to the Redux store
  };

  return (
    <div className="flex flex-col bg-gradient-to-r from-blue-500 via-red-500 to-sky-500 md:flex-row h-screen bg-gray-100">
      {/* Left Side: SVG and Gradient Background */}
<div className="flex-1 text-white flex flex-col items-center justify-center p-8 relative rounded-tl-[30px] rounded-br-[30px]">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <img
            src={studentSVG}
            alt="SVG Graphic"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Right Side: Registration Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6">Create Student Account</h2>

          {/* Student Registration Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Phone Number</label>
              <input
                type="tel"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your phone number"
                name="phone"
                value={phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full p-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
              >
                Sign Up
              </button>
            </div>

            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Already have an account?
                <Link to="/login" className="text-blue-600 font-semibold hover:underline">
                  {' '}Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentReg;
