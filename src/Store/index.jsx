/* eslint-disable react-refresh/only-export-components */
import { configureStore } from "@reduxjs/toolkit";
import books from "./BookSlice";
import auth from "./AuthSlice";



export default configureStore({
    reducer: {
        books,
        auth
    },
});