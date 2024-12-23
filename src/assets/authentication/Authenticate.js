import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

const initialState = {
  isAuthenticated: !!token, // Check if token exists
  token: token || null, // Store token
};

export const authenticate = createSlice({
  name: "authenticate",
  initialState,
  reducers: {
    setLoginStatus: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.token = action.payload.token;
      if (action.payload.token) {
        localStorage.setItem("token", action.payload.token);
      } else {
        localStorage.removeItem("token");
      }
    },
  },
});

export const { setLoginStatus } = authenticate.actions;

export default authenticate.reducer;
