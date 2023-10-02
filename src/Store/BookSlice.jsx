/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const getBooks = createAsyncThunk("book/getBooks", async (_, thunkAPI) => {
    try {
        const res = await fetch("http://localhost:3008/books");
        const data = await res.json();
        return data;
    }catch (error){
        console.log(error);
    }
});
const bookSlice = createSlice({
  name: 'book',
  initialState: { books: null },
  extraReducers: {
    [getBooks.pending] : (state, action) => {
        console.log(action)
    },
    [getBooks.pending] : (state, action) => {
        console.log(action)
    },
    [getBooks.pending] : (state, action) => {
        console.log(action)
    }
  },
});

export default bookSlice.reducer;




