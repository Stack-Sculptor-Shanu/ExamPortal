import React, { useState } from "react";

const ConductExam = () => {
  // State for exam details
  const [examDetails, setExamDetails] = useState({
    subject: "",
    date: "",
    time: "",
    duration: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setExamDetails({ ...examDetails, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Scheduled Exam Details:", examDetails);
    alert("Exam Scheduled Successfully!");
    setExamDetails({ subject: "", date: "", time: "", duration: "" }); // Reset form
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Conduct Exam</h1>

      {/* Exam Scheduling Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Subject Input */}
        <div>
          <label className="block text-gray-600 mb-1">Subject</label>
          <input
            type="text"
            name="subject"
            value={examDetails.subject}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter subject"
            required
          />
        </div>

        {/* Date Input */}
        <div>
          <label className="block text-gray-600 mb-1">Exam Date</label>
          <input
            type="date"
            name="date"
            value={examDetails.date}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Time Input */}
        <div>
          <label className="block text-gray-600 mb-1">Exam Time</label>
          <input
            type="time"
            name="time"
            value={examDetails.time}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Duration Input */}
        <div>
          <label className="block text-gray-600 mb-1">Duration (in minutes)</label>
          <input
            type="number"
            name="duration"
            value={examDetails.duration}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter duration"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Schedule Exam
        </button>
      </form>
    </div>
  );
};

export default ConductExam;
