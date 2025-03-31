import React, { useState, useEffect } from "react";
import Webcam from "react-webcam";

const questions = [
  { id: 1, question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
  { id: 2, question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
  { id: 3, question: "Which is the largest planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Jupiter" }
];

const ExamPortal = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(1 * 60);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      alert("Time's up! Submitting test.");
      handleSubmit();
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleOptionChange = (option) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: option });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
  };

  const handleSubmit = () => {
    console.log("Submitted Answers:", selectedAnswers);
    alert("Test submitted successfully!");
  };

  const handleEndTest = () => {
    setShowConfirm(true);
  };

  const confirmEndTest = () => {
    setShowConfirm(false);
    alert("Test ended");
  };

  return (
    <div className="flex h-screen p-4 bg-gray-100">
      {/* Left Side: Questions */}
      <div className="w-2/3 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Question {currentQuestion + 1}</h2>
        <p className="mb-4">{questions[currentQuestion].question}</p>
        <div>
          {questions[currentQuestion].options.map((option) => (
            <label key={option} className="block mb-2">
              <input
                type="radio"
                name="option"
                value={option}
                checked={selectedAnswers[currentQuestion] === option}
                onChange={() => handleOptionChange(option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
        <div className="mt-4 flex justify-between">
          <button onClick={handleReset} className="bg-gray-500 text-white px-4 py-2 rounded">
            Reset
          </button>
          {currentQuestion === questions.length - 1 ? (
            <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded">
              Submit
            </button>
          ) : (
            <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded">
              Next
            </button>
          )}
        </div>
      </div>
      
      {/* Right Side: Timer & Webcam */}
      <div className="w-1/3 ml-4 flex flex-col items-center">
        <div className="bg-white p-4 rounded-lg shadow-lg w-full text-center">
          <h3 className="text-lg font-bold">Time Left</h3>
          <p className="text-2xl font-semibold">{Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}</p>
        </div>
        
        <div className="mt-4 w-full bg-white p-4 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-bold mb-2">Webcam</h3>
          <Webcam className="w-full rounded-lg" />
        </div>
        
        <button onClick={handleEndTest} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
          End Test
        </button>
      </div>

      {/* Confirm End Test Modal */}
      {showConfirm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="mb-4">Are you sure you want to end the test?</p>
            <button onClick={confirmEndTest} className="bg-red-500 text-white px-4 py-2 rounded mr-2">
              Confirm
            </button>
            <button onClick={() => setShowConfirm(false)} className="bg-gray-500 text-white px-4 py-2 rounded">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamPortal;
