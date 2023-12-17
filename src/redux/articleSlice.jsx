import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async function () {
    try {
      let response = await axios.get("https://hacker-news.firebaseio.com/v0/newstories.json");

      const articleData = await Promise.all(
        response.map(async (id) => {
          const articleResponse = await axios.get(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json`
          );
          return articleResponse;
        })
      );

      return articleData;
    } catch (e) {
      console.error('Failed to fetch articles:', e);
    }
  }
);

const articleSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    status: "idle",
    error: null,
  },
  reducers: {}, // Ваши reducers здесь
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});


export const {} = articleSlice.actions;

export default articleSlice.reducer;
