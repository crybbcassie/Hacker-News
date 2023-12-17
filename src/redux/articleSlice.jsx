import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async function () {
    try {
      // let articleIds = await axios.get(
      //   "https://hacker-news.firebaseio.com/v0/newstories.json"
      // );
      const articleData = await Promise.all(
      //   articleIds.data
        [ 9129911, 9129199, 9127761, 9128141, 9128264, 9127792, 9129248, 9127092, 9128367, 9038733 ].map(async (id) => {
          const articleResponse = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
          return articleResponse.data;
        })
      );

      return articleData;
    } catch (e) {
      console.error('Failed to fetch articles:', e);
    }
  }
);

export const fetchArticleById = createAsyncThunk(
  async function (id) {
    try {
      let articleById = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      return articleById;
    } catch (e) {
      console.error('Failed to fetch article:', e);
    }
  }
);

export const fetchCommentsForArticle = createAsyncThunk(
  async function (id) {
    try {
      let comments = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      return comments
    } catch (e) {
      console.error('Failed to fetch comments:', e);
    }
  }
);

const articleSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.articles = action.payload;
        state.loading = "idle";
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = "idle";
      });
  },
});


export const {} = articleSlice.actions;

export default articleSlice.reducer;
