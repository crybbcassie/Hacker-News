import React, { useState, useEffect } from "react";
import NewsCard from '../components/NewsCard'
import { useSelector, useDispatch } from "react-redux";
import fetchArticles from '../redux/articleSlice'

export default function MainPage() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.articles);
  return (
    <>
      <NewsCard />
      <button onClick={() => dispatch(fetchArticles())}>click</button>
      {articles}
    </>
  );
}
