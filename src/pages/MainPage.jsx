import React, { useState, useEffect } from "react";
import NewsCard from '../components/NewsCard'
import { useSelector, useDispatch } from "react-redux";
import fetchArticles from '../redux/articleSlice'
import { Button } from "antd";

export default function MainPage() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.articles);
  console.log(articles)

  // useEffect(() => {
  //   dispatch(fetchArticles())
  // }, [])

  return (
    <>
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <Button onClick={() => dispatch(fetchArticles())}>kkk</Button>
      {articles}
    </>
  );
}
