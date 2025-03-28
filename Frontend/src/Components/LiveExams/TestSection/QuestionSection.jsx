import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAnswer, resetAnswer, nextQuestion, submitExam } from "../../../Redux/ExamSlice"; // import actions

// Mock questions (In a real app, this would be fetched or come from props)
const questions = [
  { id: 1, question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
  { id: 2, question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Rome"] },
  { id: 3, question: "What is 5 * 5?", options: ["20", "25", "30", "35"] },
];

const QuestionSection = () => {
  const dispatch = useDispatch();

  // Fetch state from Redux store
  const { currentQuestionIndex, selectedAnswers, isAnswerSelected } = useSelector((state) => state.exam);

  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestion.id];

  // Handle answer selection
  const handleSelectAnswer = (answer) => {
    dispatch(setAnswer({ questionId: currentQuestion.id, answer }));
  };

  // Handle reset
  const handleReset = () => {
    dispatch(resetAnswer({ questionId: currentQuestion.id }));
  };

  // Handle next question
  const handleSaveAndNext = () => {
    dispatch(nextQuestion());
  };

  // Handle submit
  const handleSubmit = () => {
    dispatch(submitExam());
  };

  return (
    <div className="p-5">
      <div className="bg-white p-6 rounded-md shadow-md">
        {/* Question */}
        <div className="text-2xl font-semibold mb-5">
          {currentQuestion.question}
        </div>

        {/* Options */}
        <div className="space-y-2">
          {currentQuestion.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-3">
              <input
                type="radio"
                id={option}
                name="answer"
                value={option}
                checked={selectedAnswer === option}
                onChange={() => handleSelectAnswer(option)}
                className="h-4 w-4"
              />
              <label htmlFor={option} className="text-lg">
                {option}
              </label>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-8">
          {/* Reset Button */}
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
          >
            Reset
          </button>

          {/* Save & Next / Submit Button */}
          <button
            onClick={currentQuestionIndex === questions.length - 1 ? handleSubmit : handleSaveAndNext}
            disabled={!isAnswerSelected}
            className={`px-4 py-2 ${
              !isAnswerSelected ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            } text-white rounded-md transition duration-300`}
          >
            {currentQuestionIndex === questions.length - 1 ? "Submit" : "Save & Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;
