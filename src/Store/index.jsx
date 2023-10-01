/* eslint-disable no-unused-vars */

// CounterSlice
import { configureStore } from "@reduxjs/toolkit"; 
import CounterReducer from "./CounterSlice";
import AuthReducer from "./AuthSlice";

// AuthSlice



const store = configureStore({
  reducer: { counter: CounterReducer, auth: AuthReducer },
});

// export const counterAction = counterSlice.actions;

export default store;
