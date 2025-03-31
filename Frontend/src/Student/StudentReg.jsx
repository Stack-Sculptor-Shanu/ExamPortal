import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Change useHistory to useNavigate
import { useDispatch, useSelector } from 'react-redux';
import { setStudentData } from '../Redux/slices/StudentSlice'; // Action to update student data
import axios from 'axios';  // Import Axios for making API calls
import studentSVG from '../Assets/StudentSignup.svg'; // Make sure you have the appropriate SVG for the student sign-up

const StudentReg = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();  // useNavigate instead of useHistory
  
  // Get form data from Redux store
  const { name, email, phone, branch } = useSelector((state) => state.student);
  
  // Add the role for the student form
  const role = 'student'; // For the student form, role is hardcoded as "student"

  // State to handle loading and error messages
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to generate password based on the user's name and phone
  const generatePassword = (name, phone) => {
    const firstName = name.split(' ')[0]; // Extract the first name (assuming space separates first and last name)
    const lastThreeDigits = phone.slice(-3); // Get the last three digits of the phone number
    return `${firstName}@${lastThreeDigits}`;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Generate password based on user's name and phone number
    const password = `${name.split(' ')[0]}@${phone.slice(-3)}`;
  
    // Set loading state
    setLoading(true);
    setError(null);
  
    try {
      const userData = {
        name,
        email,
        mobilenumber: phone, // Ensure you're sending phone as mobilenumber
        course: branch, // Map the branch field to course
        role: 'student', // Hardcoded role as student
        password
      };
  
      const response = await axios.post('http://localhost:8090/api/create', userData);
      if (response.status === 200) {
        console.log('User created successfully:', response.data);
        navigate('/login'); // Redirect to login page after successful registration
      }
    } catch (err) {
      // Handle error
      console.error('Error during registration:', err);
      setError('Failed to register. Please try again later.');
    } finally {
      setLoading(false);
    }
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

            {/* Branch Dropdown */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Branch</label>
              <select
                name="branch"
                value={branch}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select Branch</option>
                <option value="MERN">MERN</option>
                <option value="JAVA">JAVA</option>
                <option value="Testing">Testing</option>
                <option value="Python">Python</option>
              </select>
            </div>

            {/* Role is hardcoded for student */}
            <input type="hidden" name="role" value="student" />

            {error && <div className="text-red-500 mb-4">{error}</div>}  {/* Show error if any */}
            
            <div className="mt-6">
              <button
                type="submit"
                className="w-full p-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
                disabled={loading}  // Disable button while loading
              >
                {loading ? 'Registering...' : 'Sign Up'}
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
