import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';  // Import Axios for making API requests
import { setAdminData } from '../redux/slices/adminSlice';  // Redux action to update state
import createAccount from '../Assets/createaccount.svg';  // Image for the left side of the form

const AdminReg = () => {
  const dispatch = useDispatch();

  // Get the form data from Redux store
  const { name, email, phone, branch } = useSelector((state) => state.admin);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if name is provided and not empty
    const firstName = name ? name.split(' ')[0] : 'DefaultName'; // Use 'DefaultName' if name is undefined or empty
  
    // Generate password
    const password = `${firstName}@${phone.slice(-3)}`;
  
    // Prepare admin registration data
    const adminData = {
      name,
      email,
      mobilenumber: phone,  // Ensure this matches your backend's 'mobilenumber' field
      course: branch,  // Map the 'branch' to 'course' as required by your backend
      role: 'admin',  // Set the role to 'admin'
      password,  // Include the generated password
    };
  
    try {
      // Send the POST request to the backend API
      const response = await axios.post('http://localhost:8090/api/create', adminData);
  
      // If the response is successful, log the response and handle further actions
      if (response.status === 200) {
        console.log('Admin registered successfully', response.data);
        // You can redirect the user to the login page after successful registration
      }
    } catch (error) {
      // Handle error, log the error message
      console.error('Error registering admin:', error);
    }
  };
  

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setAdminData({ [name]: value }));  // Update Redux store with the new input data
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-r from-blue-500 via-red-500 to-sky-500">
      {/* Left Side: SVG Image Section */}
      <div className="flex-1 text-white flex flex-col items-center justify-center p-8 relative rounded-tl-[30px] rounded-br-[30px]">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <img
            src={createAccount}
            alt="SVG Graphic"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Right Side: Registration Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="bg-white bg-opacity-35 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6">Create Admin Account</h2>

          {/* Admin Registration Form */}
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
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                disabled
                value={branch}
              >
                <option value="all">All</option>
              </select>
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

export default AdminReg;
