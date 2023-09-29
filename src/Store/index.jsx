/* eslint-disable no-unused-vars */
import { legacy_createStore } from "redux";

const initState = { count: 0 , showCount: true};
const coubterReducer = (state = initState, action) => {
  if (action.type === "increase") {
    return { ...state, count: state.count + action.payload };
} 
if (action.type === "decrease") {
      return { ...state, count: state.count - action.payload };
    // return state.count--;
  }
  if (action.type === "toggleCounter") {
    return {...state, showCount : !state.showCount};
  }
  return state;
};

const store = legacy_createStore(coubterReducer);

export default store;
