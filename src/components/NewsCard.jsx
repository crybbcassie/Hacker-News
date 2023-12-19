import React from 'react';
import cl from "./style/Components.module.css";
import {changeDateView} from '../helpers/helpers'

export default function NewsCard({data}){
  return (
    <div className={cl.card}>
      <div className={cl.card__content}>
        <h2>{data.title}</h2>
        <p>
          <span>{data.score}</span> points by <span>{data.by}</span>{" "}
          {data && changeDateView(data.time)} |
          <span> {data &&  data.kids.length}</span> comments
        </p>
      </div>
    </div>
  );
}

