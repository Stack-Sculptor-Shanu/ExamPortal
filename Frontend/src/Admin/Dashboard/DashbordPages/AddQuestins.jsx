import React, { useState } from "react";

const AddQuestions = () => {
  // State for question details
  const [questionData, setQuestionData] = useState({
    question: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctAnswer: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setQuestionData({ ...questionData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Added Question:", questionData);
    alert("Question Added Successfully!");
    setQuestionData({ question: "", optionA: "", optionB: "", optionC: "", optionD: "", correctAnswer: "" }); // Reset form
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Add Questions</h1>

      {/* Question Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Question Input */}
        <div>
          <label className="block text-gray-600 mb-1">Question</label>
          <textarea
            name="question"
            value={questionData.question}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the question"
            required
          />
        </div>

        {/* Options */}
        <div>
          <label className="block text-gray-600 mb-1">Option A</label>
          <input
            type="text"
            name="optionA"
            value={questionData.optionA}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-1">Option B</label>
          <input
            type="text"
            name="optionB"
            value={questionData.optionB}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-1">Option C</label>
          <input
            type="text"
            name="optionC"
            value={questionData.optionC}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-1">Option D</label>
          <input
            type="text"
            name="optionD"
            value={questionData.optionD}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Correct Answer Selection */}
        <div>
          <label className="block text-gray-600 mb-1">Correct Answer</label>
          <select
            name="correctAnswer"
            value={questionData.correctAnswer}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Correct Answer</option>
            <option value="optionA">Option A</option>
            <option value="optionB">Option B</option>
            <option value="optionC">Option C</option>
            <option value="optionD">Option D</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add Question
        </button>
      </form>
    </div>
  );
};

export default AddQuestions;
