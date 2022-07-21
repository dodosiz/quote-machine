import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateQuote } from "./quote-api";

export const fetchRandomQuote = createAsyncThunk(
  "fetchRandomQuote",
  async () => {
    const quoteWithAuthor = await updateQuote();
    return quoteWithAuthor;
  }
);

const initialState = {
  quote: "",
  author: "",
  initialized: false,
};

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRandomQuote.fulfilled, (state, action) => {
      state.quote = action.payload.quote;
      state.author = action.payload.author;
      state.initialized = true;
    });
  },
});

export default quoteSlice.reducer;
