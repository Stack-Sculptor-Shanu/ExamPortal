// src/redux/slices/adminSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  phone: '',
  branch: 'all', // Default branch is 'all'
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdminData: (state, action) => {
      const { name, email, phone } = action.payload;
      state.name = name;
      state.email = email;
      state.phone = phone;
    },
  },
});

export const { setAdminData } = adminSlice.actions;
export default adminSlice.reducer;
