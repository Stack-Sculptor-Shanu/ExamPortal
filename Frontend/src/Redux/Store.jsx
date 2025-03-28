import { configureStore } from "@reduxjs/toolkit";
import examReducer from "../Redux/ExamSlice";
import adminReducer from '../Redux/slices/AdminSlice'
import authReducer from '../Redux/slices/AuthSlice'
import studentReducer from '../Redux/slices/StudentSlice'

const store = configureStore({
  reducer: {
    exam: examReducer,
    admin: adminReducer,
    auth: authReducer,
    student:studentReducer
  },
});

export default store;
