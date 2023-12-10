import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async function (_, { rejectWithValue }) {
    try {
      const HN_HOST = "https://hacker-news.firebaseio.com/v0/item/";
      let result = await axios.get(`${HN_HOST}topstories.json`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(result)
      return result
    } catch (e) {
      return rejectWithValue(e.message);
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
  reducers: {},
});

export const {} = articleSlice.actions;

export default articleSlice.reducer;
