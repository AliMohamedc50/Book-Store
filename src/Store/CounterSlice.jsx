/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initState = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increase: (state, action) => {
      state.count += action.payload;
    },
    decrease: (state, action) => {
      state.count -= action.payload;
    },
  },
});

export default counterSlice.reducer;

export const counterAction = counterSlice.actions;
