import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from '../pages/MainPage'
import NewsPage from '../pages/NewsPage'

export default function Links(){
    return (
      <Routes>
        <Route path="/Hacker_News" element={<MainPage />} exact={true} />
        <Route path="/Hacker_News/:id" element={<NewsPage />} exact={true} />
        <Route path="/" element={<Navigate replace to="/Hacker_News" />} />
      </Routes>
    );
}