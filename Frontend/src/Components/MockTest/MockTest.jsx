
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const questions = [
  { id: 1, question: "What is React?", options: ["Library", "Framework", "Language", "Database"], answer: "Library" },
  { id: 2, question: "What is JSX?", options: ["JavaScript XML", "JSON", "Template Engine", "None"], answer: "JavaScript XML" },
  { id: 3, question: "Which hook is used for state?", options: ["useEffect", "useState", "useReducer", "useRef"], answer: "useState" },
  { id: 4, question: "Which method updates state in class components?", options: ["setState", "updateState", "changeState", "modifyState"], answer: "setState" },
  { id: 5, question: "Which hook handles side effects?", options: ["useEffect", "useState", "useRef", "useMemo"], answer: "useEffect" }
];

const MockTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600); // 10-minute timer
  const navigate = useNavigate();

  // 🕐 Timer Logic (Auto-submit when time is up)
  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // ⏰ Format time (mm:ss)
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Handle Answer Selection
  const handleRadioButtonChange = (option) => {
    setSelectedAnswers((prev) => ({ ...prev, [currentQuestion]: option }));
  };

  // Move to Next Question (Disable going back)
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  // Reset Only Current Question's Answer
  const handleReset = () => {
    setSelectedAnswers((prev) => {
      const updatedAnswers = { ...prev };
      delete updatedAnswers[currentQuestion];
      return updatedAnswers;
    });
  };

  // Submit Test
  const handleSubmit = () => {
    alert("Exam Submitted Successfully!");
    navigate("/MockResult", { state: { questions, selectedAnswers } });
  };

  // End Test with Confirmation
  const handleEndTest = () => {
    const confirmEnd = window.confirm("Are you sure you want to end the test?");
    if (confirmEnd) handleSubmit();
  };

  return (
    <div className='flex min-h-screen'>

      {/* 📝 Left Side - Questions & Navigation */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-lg flex flex-col">
        <h2 className="text-2xl font-bold text-center mb-4">Mock Test</h2>

        {/* Show Current Question */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Q{questions[currentQuestion].id}. {questions[currentQuestion].question}</h3>
          <div className="mt-2 space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <label key={index} className="block bg-gray-100 p-2 rounded-lg cursor-pointer">
                <input
                  type="radio"
                  className="mr-2"
                  checked={selectedAnswers[currentQuestion] === option}
                  onChange={() => handleRadioButtonChange(option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Buttons - Reset & Next/Submit (Next appears only if answered) */}
        <div className="flex justify-between mt-4">
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Reset
          </button>

          {selectedAnswers[currentQuestion] && (
            currentQuestion < questions.length - 1 ? (
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-green-500 text-white rounded-lg"
              >
                Submit
              </button>
            )
          )}
        </div>
      </div>

      {/* 🕐 Right Side - Timer & Question Navigation */}
      <div className="w-1/5 p-6 bg-gray-100 shadow-md flex flex-col items-center">
        
        {/* Timer */}
        <div className="text-lg font-bold bg-gray-200 px-4 py-2 rounded-md mb-3">
          ⏳ {formatTime(timeLeft)}
        </div>

        {/* Question Navigation */}
        <div className="w-full p-3 bg-white shadow-lg rounded-md mt-4">
          <h3 className="text-center font-bold mb-2">Questions</h3>
          <div className="grid grid-cols-5 gap-2">
            {questions.map((q, index) => (
              <button
                key={q.id}
                disabled // Clicking won't change the question
                className={`w-10 h-10 text-white font-bold rounded-full ${
                  selectedAnswers[index] ? "bg-green-500" : "bg-blue-500"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* End Test Button */}
        <button
          onClick={handleEndTest}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg"
        >
          End Test
        </button>
      </div>

    </div>
  );
};

export default MockTest;
