// store/slices/navbarSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activePage: 'Home',
  successMessage: '',
  errorMessage: '',
  selectedPlan: null,
  selectedPrice: 0,
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },
    setSuccessMessage: (state, action) => {
      state.successMessage = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    clearMessages: (state) => {
      state.successMessage = '';
      state.errorMessage = '';
    },
    setPlan: (state, action) => {
      state.selectedPlan = action.payload.plan;
      state.selectedPrice = action.payload.price;
    },
  },
});

export const { setActivePage, setSuccessMessage, setErrorMessage, clearMessages, setPlan } = navbarSlice.actions;
export default navbarSlice.reducer;
