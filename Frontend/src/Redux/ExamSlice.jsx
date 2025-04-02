import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isExamActive: false,
  isFullScreen: false,
  currentQuestionIndex: 0,
  answers: {},
};

const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    setExamStatus: (state, action) => {
      state.isExamActive = action.payload;
    },
    enterFullScreen: (state) => {
      state.isFullScreen = true;
    },
    exitExam: (state) => {
      state.isExamActive = false;
    },
    nextQuestion: (state) => {
      state.currentQuestionIndex += 1;
    },
    saveAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      state.answers[questionId] = answer;
    },
  },
});

export const { setExamStatus, enterFullScreen, exitExam, nextQuestion, saveAnswer } = examSlice.actions;
export default examSlice.reducer;
