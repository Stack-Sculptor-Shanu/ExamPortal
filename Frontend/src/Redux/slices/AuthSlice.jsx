import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
  error: null,
  isLoggedIn: false,
  showPassword: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      const { email, password } = action.payload;
      state.email = email;
      state.password = password;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    togglePasswordVisibility: (state) => {
      state.showPassword = !state.showPassword;
    },
    resetState: (state) => {
      state.email = '';
      state.password = '';
      state.error = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setFormData, setError, setIsLoggedIn, togglePasswordVisibility, resetState } = authSlice.actions;
export default authSlice.reducer;
