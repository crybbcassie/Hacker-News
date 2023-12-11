import cl from "./Components.module.css";

export default function Article() {
  return (
    <>
      <div className={cl.article}>
        <div className={cl.article_content}>
          <h1>Title Title Title</h1>
          <p>
            <span>Points: </span> 123
          </p>
          <p>
            <span>Date: </span> 11.12.2023, 17:51:12
          </p>
          <p>
            <span>Author: </span> jay_kyburz
          </p>
          <p>
            <span>Comments: </span> 0
          </p>
          <p>
            <span>URL: </span> <a>https://qqwwee/</a>
          </p>
        </div>
      </div>
    </>
  );
}
