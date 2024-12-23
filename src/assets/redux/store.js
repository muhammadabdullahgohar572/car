import { configureStore } from "@reduxjs/toolkit";
import authenticate from "../authentication/Authenticate";

const store = configureStore({
  reducer: {
    authenticate,
  },
  // Enable Redux DevTools only in development mode
  devTools:true, // or false based on your preference
  
});

export default store;
