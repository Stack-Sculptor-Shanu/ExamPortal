import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const questions = [
  { id: 1, question: "What is React?", options: ["Library", "Framework", "Language", "Database"], answer: "Library" },
  { id: 2, question: "What is JSX?", options: ["JavaScript XML", "JSON", "Template Engine", "None"], answer: "JavaScript XML" },
  { id: 3, question: "Which hook is used for state?", options: ["useEffect", "useState", "useReducer", "useRef"], answer: "useState" },
  { id: 4, question: "Which method is used to update state in class components?", options: ["setState", "updateState", "changeState", "modifyState"], answer: "setState" },
  { id: 5, question: "Which hook is used to handle side effects?", options: ["useEffect", "useState", "useRef", "useMemo"], answer: "useEffect" }
];

const MockTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(3); // 2 minutes countdown

  const navigate = useNavigate();  // ✅ Use useNavigate

  const handleNext = () => setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1));

  const handleRadioButtonChange = (option) => {
    setSelectedAnswers((prev) => ({ ...prev, [currentQuestion]: option }));
  };

  const handleSubmit = () => {
    console.log("Submitted Answers:", selectedAnswers);
    alert("Exam Submitted Successfully!");
    navigate("/MockResult", { state: { questions, selectedAnswers } });  // ✅ Correct way to navigate
  };

  // ⏳ Timer logic
  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();  // ✅ Submit automatically when time is up
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // ⏰ Format time
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className='flex min-h-screen'>
      <div className="flex-1 bg-white p-6 rounded-lg shadow-lg flex flex-col relative">
        <h2 className="text-2xl font-bold text-center mb-4">Coding MCQs</h2>
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

        <div className="flex justify-between mt-4">
          {currentQuestion < questions.length - 1 && (
            <button
              onClick={handleNext}
              className='px-4 py-2 bg-blue-500 text-white rounded-lg absolute bottom-10 right-10'
            >
              Next Question
            </button>
          )}
          {currentQuestion === questions.length - 1 && (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-500 text-white rounded-lg absolute bottom-10 right-10"
            >
              Submit Answer
            </button>
          )}
        </div>
      </div>

      {/* Right Side Panel */}
      <div className='w-1/5 p-6 bg-green-100 shadow-md flex flex-col items-center'>
        <div className="text-lg font-bold bg-gray-200 px-4 py-2 rounded-md mb-3">
          ⏳ {formatTime(timeLeft)}
          {timeLeft === 0 && <p className="text-red-500 font-semibold">Time's up! ⏰</p>}
        </div>
      </div>
    </div>
  );
};

export default MockTest;
