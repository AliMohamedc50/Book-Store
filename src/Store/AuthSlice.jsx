/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {isLigedIn: true, name: "castillo" },
    reducers: {
        logInOut:(state) => {
            state.isLigedIn = !state.isLigedIn;
        } 
    }
})

export const {logInOut} = authSlice.actions

export default authSlice.reducer;