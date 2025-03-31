

import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MockResult = () => {
  const location = useLocation();
  const { questions, selectedAnswers } = location.state || { questions: [], selectedAnswers: {} };
  const [showResult, setShowResult] = useState(false);

  const totalQuestions = questions.length;
  const correctAnswers = questions.filter((q, index) => selectedAnswers[index] === q.answer).length;
  const wrongAnswers = questions.filter((q, index) => selectedAnswers[index] && selectedAnswers[index] !== q.answer).length;
  // const skippedQuestions = totalQuestions - (correctAnswers + wrongAnswers);

  useEffect(() => {
    // Delay result rendering by 2 seconds
    const timer = setTimeout(() => {
      setShowResult(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  
  return (
    <div className="flex justify-center items-center min-h-screen">
      {showResult ? (
        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Mock Test Result</h2>
          <p className="text-lg">Total Questions: {totalQuestions}</p>
          <p className="text-green-500 text-lg">✅ Correct Answers: {correctAnswers}</p>
          <p className="text-red-500 text-lg">❌ Wrong Answers: {wrongAnswers}</p>
          <Link to="/">
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Go to Home</button>
        </Link>
        </div>
      ) : (
        <h2 className="text-xl font-bold text-black-600">Processing Results... ⏳ <span class="loader"></span></h2>

      )}
    </div>
  );
};

export default MockResult;
