import React, { useState } from "react";
import Article from "../components/Article";
import { useParams, useNavigate } from "react-router-dom";

export default function NewsPage() {
  let { id } = useParams();
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/${id}`);
  }

// const [post, setPost] = useState({});
// const [comment, setComment] = useState([]);

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const postResponse = await PostService.getById(params.id);
//       setPost(postResponse.data);

//       const commentsResponse = await PostService.getComments(params.id);
//       setComment(commentsResponse.data);
//     } catch (error) {
//       // Обработка возможных ошибок, если это необходимо
//       console.error("Error fetching data:", error);
//     }
//   };

//   fetchData(); // Вызов асинхронной функции для получения данных при монтировании компонента
// }, [params.id]);


  return <Article articleId={id} />;
}
