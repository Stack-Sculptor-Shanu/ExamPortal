// src/redux/slices/studentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  phone: ''
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    setStudentData: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    resetStudentData: () => initialState
  }
});

export const { setStudentData, resetStudentData } = studentSlice.actions;
export default studentSlice.reducer;
