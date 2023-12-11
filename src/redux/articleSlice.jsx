import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async function () {
    try {
      let response = await axios.get(
        "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"
      );
        console.log('response:', response);
        return response;
    } catch (e) {
      console.log('error')
    }
  }
);


const articleSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    status: null,
    error: null,
  },
  reducers: {}
});

export const {} = articleSlice.actions;

export default articleSlice.reducer;
