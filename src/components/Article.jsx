import { Button } from "antd";
import cl from "./style/Components.module.css";
import { LeftOutlined } from "@ant-design/icons";
import { changeDateView } from "../helpers/helpers";
import { Link, useNavigate } from "react-router-dom";

export default function Article({post, comments}) {

    const handleReadClick = () => {
      const newTab = window.open(`${post.url}`, "_blank");
      newTab.focus();
    };

    const navigation = useNavigate()
    const handleBackClick = () => {
      navigation("/Hacker_News");
    };

 if (!post || !comments) {
   return <div>Loading...</div>;
 }

  return (
    <div className={cl.article}>
      <div className={cl.article__content}>
        <Link to={`/Hacker_News`}>
          <Button className={cl.article__btn} onClick={() => {}}>
            <LeftOutlined /> go back
          </Button>
        </Link>
        <h1>{post.title}</h1>
        <p>
          <span>Author: </span> {post.by}
        </p>
        <p>
          <span>Points: </span> {post.score}
        </p>
        <p>
          <span>Date & time: </span>
          {post.time && changeDateView(post.time)}
        </p>
        <Button
          className={cl.article__btn_read}
          type="primary"
          onClick={handleReadClick}
        >
          READ MORE
        </Button>

        <div className={cl.comments}>
          <p>
            <span>Comments ({post.kids && post.kids.length}): </span>
          </p>
          {comments.map((comment, index) => (
            <div className={cl.comment} key={index}>
              <h3>{comment.by}:</h3>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  }
