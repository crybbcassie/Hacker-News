import { Button } from "antd";
import cl from "./style/Components.module.css";
import { LeftOutlined } from "@ant-design/icons";
import { changeDateView } from "../helpers/helpers";
import { Link } from "react-router-dom";

export default function Article({post, comments}) {
    if (!post || !comments) {
      return <div>Loading...</div>;
    }

    const handleButtonClick = () => {
      const newTab = window.open(`${post.url}`, "_blank");
      newTab.focus();
    };


  return (
    <div className={cl.article}>
      <div className={cl.article__content}>
        <Link to={`/Hacker_News`}>
          <Button className={cl.article__btn}>
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
          <span>Date & time: </span> {changeDateView(post.time)}
        </p>
        <Button
          className={cl.article__btn_read}
          type="primary"
          onClick={handleButtonClick}
        >
          READ MORE
        </Button>

        <div className={cl.comments}>
          <p>
            <span>Comments ({post.kids.length}): </span>
          </p>
          {comments.map((comment, index) => (
            <div className={cl.comment} key={index}>
              <h3>{comment.by}</h3>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  }
