import React, { useState, useEffect } from "react";
import NewsCard from '../components/NewsCard'
import { useSelector, useDispatch } from "react-redux";
import fetchArticles from '../redux/articleSlice'
import { Button } from "antd";
import cl from './style/Pages.module.css'
import { ReloadOutlined, ArrowDownOutlined } from "@ant-design/icons";

export default function MainPage() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.articles);
  console.log(articles)

  // useEffect(() => {
  //   dispatch(fetchArticles())
  // }, [])

  return (
    <>
      <div className={cl.main__btn}>
        <Button className={cl.main__btn_update}>
          <ReloadOutlined />
          Update news
        </Button>
      </div>
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <div className={cl.main__btn}>
        <Button className={cl.main__btn_more}>
          <ArrowDownOutlined />
          more
        </Button>
      </div>
      {articles}
    </>
  );
}
