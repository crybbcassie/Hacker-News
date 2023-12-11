import React from 'react';
import cl from './Components.module.css';

export default function NewsCard(){
return (
  <div className={cl.card}>
      <div className={cl.card_content}>
        <h2>Title Title Title</h2>
        <p><span>360</span> points by <span>jay_kyburz</span> 3 hours ago | <span>197</span> comments</p>
      </div>
  </div>
);
}

