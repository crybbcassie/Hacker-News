import { Button } from "antd";
import cl from "./style/Components.module.css";
import { LeftOutlined } from "@ant-design/icons";

export default function Article({ articleId }) {
  console.log(articleId);
  return (
    <div className={cl.article}>
      <div className={cl.article__content}>
        <Button className={cl.article__btn}>
          <LeftOutlined /> go back
        </Button>
        <h1>Title Title Title</h1>
        <p>
          <span>Author: </span> jay_kyburz
        </p>
        <p>
          <span>Points: </span> 123
        </p>
        <p>
          <span>Date & time: </span> 11.12.2023, 17:51:12
        </p>
        <Button className={cl.article__btn_read} type="primary">
          READ MORE
        </Button>
        <p>
          <span>Comments: </span>
        </p>
      </div>
    </div>
  );
}
