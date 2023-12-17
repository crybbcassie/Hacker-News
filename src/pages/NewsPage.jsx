import React, { useState, useEffect } from "react";
import Article from "../components/Article";
import { useParams } from "react-router-dom";
import {
  fetchArticleById,
  fetchCommentsForArticle,
} from "../redux/articleSlice";

export default function NewsPage() {
  const params = useParams();

const [post, setPost] = useState({});
const [comments, setComments] = useState([]);
console.log("post", post);
console.log("comments", comments);

useEffect(() => {
  const fetchData = async () => {
    try {
      const postResponse = await fetchArticleById(params.id);
      setPost(postResponse);

      const commentsPromises = postResponse.kids.map(async (id) => {
        return await fetchCommentsForArticle(id);
      });

      const commentsResponses = await Promise.all(commentsPromises);
      setComments(commentsResponses);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, [params.id]);

  return <Article post={post} 
  comments={comments} 
  />;
}
