import React, { useState, useEffect } from "react";
import NewsCard from '../components/NewsCard'
import { useSelector, useDispatch } from "react-redux";
import {fetchArticles} from '../redux/articleSlice'
import { Button } from "antd";
import cl from './style/Pages.module.css'
import { ReloadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Pagination } from "antd";

export default function MainPage() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.articles);
  console.log("articles", articles); 

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  return (
    <>
      {articles ? <>
      <div className={cl.main__btn}>
        <Button
          className={cl.main__btn_update}
          onClick={() => dispatch(fetchArticles())}
        >
          <ReloadOutlined />
          Update news
        </Button>
      </div>
      {articles.map((item) => (
        <div key={item.id}>
          <Link to={`/Hacker_News/${item.id}`}>
            <NewsCard data={item} />
          </Link>
        </div>
      ))}
      <div className={cl.main__btn}>
        <div className={cl.main__btn_more}>
          <Pagination defaultCurrent={1} total={500} />
        </div>
      </div></> 
      : 
      <>Loading...</>}
    </>
  );
}
