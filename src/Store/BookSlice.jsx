/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const getBooks = createAsyncThunk("book/getBooks", async (_, thunkAPI) => {
    const {rejectWithValue} = thunkAPI  
    try {
        const res = await fetch("http://localhost:3008/books");
        const data = await res.json();
        return data;
    }catch (error){
        return rejectWithValue(error.message);
    }
});




export const postbook = createAsyncThunk(
  'book/postbook',
  async (bookData, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    try {
      bookData.userName = getState().auth.name;
        // console.log(getState().auth.name)
      const res = await fetch('http://localhost:3008/books', {
        method: 'POST',
        body: JSON.stringify(bookData),
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const deleteBook = createAsyncThunk(
  "book/deleteBook",
  async (element, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        // bookData.userName = getState().auth.name;
        // console.log(getState().auth.name)
        await fetch(`http://localhost:3008/books/${element.id}`, {
          method: "DELETE",
          // body: JSON.stringify(bookData),
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        });
        return element;
      } catch (error) {
        return rejectWithValue(error.message);
      }
  }
);
export const getBook = createAsyncThunk("book/getBook", async (element, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    // bookData.userName = getState().auth.name;
    // console.log(getState().auth.name)
    await fetch(`http://localhost:3008/books/${element.id}`, {
      method: "GET",
      // body: JSON.stringify(bookData),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    return element;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});


const bookSlice = createSlice({
  // for get book list
  name: "book",
  initialState: { booksL: [], isLoading: false, errorApi: false, readBook : []},
  extraReducers: {
    [getBooks.pending]: (state, action) => {
      state.isLoading = true;
      state.errorApi = false;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.booksL = action.payload;
    },
    [getBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorApi = true;
      console.log(action);
    },

    // for post book

    [postbook.pending]: (state, action) => {
      state.isLoading = true;
      state.errorApi = false;
    },
    [postbook.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.booksL.push(action.payload);
    },
    [postbook.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorApi = true;
    },
    
    // for delete book
    [deleteBook.pending] : (state, action) => {
      state.isLoading = true;
      state.errorApi = false;
    },
    [deleteBook.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.booksL = state.booksL.filter((ele) => ele.id !== action.payload.id)
    },
    [deleteBook.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorApi = true;
    },
    
    // for read datils 
    [getBook.pending]: (state, action) => {
        state.isLoading = true;
    },
    [getBook.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.readBook = action.payload
      console.log(state.readBook);
    },
    [getBook.rejected]: (state, action) => {

      state.isLoading = false;
      state.errorApi = true;
    }
  },
});

export default bookSlice.reducer;




