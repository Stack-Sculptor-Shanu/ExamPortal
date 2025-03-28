import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  currentQuestionIndex: 0,
  selectedAnswers: {}, // { questionId: selectedAnswer }
  isAnswerSelected: false,
};

// Create slice
const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      state.selectedAnswers[questionId] = answer;
      state.isAnswerSelected = true;
    },
    resetAnswer: (state, action) => {
      const { questionId } = action.payload;
      delete state.selectedAnswers[questionId];
      state.isAnswerSelected = false;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < 2) {
        state.currentQuestionIndex += 1; // Assuming we have 3 questions.
        state.isAnswerSelected = false;
      }
    },
    previousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
        state.isAnswerSelected = false;
      }
    },
    submitExam: (state) => {
      // Handle exam submission logic
      console.log("Exam submitted!");
    },
  },
});

// Export actions
export const { setAnswer, resetAnswer, nextQuestion, previousQuestion, submitExam } = examSlice.actions;

// Export reducer
export default examSlice.reducer;
