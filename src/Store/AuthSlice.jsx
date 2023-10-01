/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { toggleCounter: true },
  reducers: {
    toggleCounter: (state, action) => {
        state.toggleCounter = !state.toggleCounter
    }
  },
});

export default authSlice.reducer;

export const AuthAction = authSlice.actions;
