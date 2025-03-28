

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MockResult = () => {
  const location = useLocation();
  const { questions, selectedAnswers } = location.state || { questions: [], selectedAnswers: {} };

  const totalQuestions = questions.length;
  const correctAnswers = questions.filter((q, index) => selectedAnswers[index] === q.answer).length;
  const wrongAnswers = totalQuestions - correctAnswers;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Mock Test Result</h2>
        <p className="text-lg">Total Questions: <span className="font-semibold">{totalQuestions}</span></p>
        <p className="text-lg text-green-600">Correct Answers: <span className="font-semibold">{correctAnswers}</span></p>
        <p className="text-lg text-red-600">Wrong Answers: <span className="font-semibold">{wrongAnswers}</span></p>
        <Link to="/">
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Go to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default MockResult;
   