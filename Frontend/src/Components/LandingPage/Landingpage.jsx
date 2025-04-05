import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Landingpage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-5 bg-gradient-to-r from-blue-500 via-red-500 to-sky-500">
        <h1 className="text-4xl md:text-6xl font-bold text-white">Boost Your Aptitude Skills</h1>
        <p className="mt-4 text-lg md:text-xl text-white">Practice, Learn, and Improve in any kind of aptitude Exams</p>
        {/* <button className="mt-3 px-3 py-3 bg-white bg-opacity-40 text-blue-600 font-semibold rounded-md shadow-md hover:bg-gray-200">
          <Link className="mt-3 px-7 py-3" to="/howitworks">Get started</Link>
        </button> */}
      </section>

      {/* Features Section */}
      <section className="py-20 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10 text-center">
          {/* Live Exams */}
          <div className="p-6 bg-white shadow-md rounded-md border border-gray-200 hover:shadow-xl hover:-translate-y-2 hover:bg-blue-100 hover:text-blue-600 hover:border-blue-500 transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-semibold">
              <Link to="/examlists">Live Exams</Link>
            </h3>
            <p className="mt-2 text-gray-600">Join the live exam to test your skills in real-time with instant results and feedback.</p>
          </div>

          {/* Study Resources (instead of "Your Results") */}
          <div className="p-6 bg-white shadow-md rounded-md border border-gray-200 hover:shadow-xl hover:-translate-y-2 hover:bg-blue-100 hover:text-blue-600 hover:border-blue-500 transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-semibold">
              Study Resources
            </h3>
            <p className="mt-2 text-gray-600">Access a wide variety of study materials to help you prepare for your exams efficiently.</p>
          </div>

          {/* Mock Exams */}
          <div className="p-6 bg-white shadow-md rounded-md border border-gray-200 hover:shadow-xl hover:-translate-y-2 hover:bg-blue-100 hover:text-blue-600 hover:border-blue-500 transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-semibold">
              <Link to="/mocktest">Mock Exams</Link>
            </h3>
            <p className="mt-2 text-gray-600">Simulate real test conditions with mock exams to boost your preparation.</p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Landingpage;
