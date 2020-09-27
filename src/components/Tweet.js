import React from 'react';
import './Tweet.css';

export const Tweet = (props) => {

  const {name, handle, avatar, text, created_at} = props;
  return (
    <article className="tweet">
      <header>
        <div className="avatar">
          <img src={avatar} alt="user_avatar" />
          <span className="name">{name}</span>
        </div>
        <span className="handle">{handle}</span>
      </header>
      <p className="tweetText">{text}</p>
      <footer>
  <span className="daysSince">{created_at}</span>
        <div className="icons">
          <button><i className="fas fa-flag" aria-hidden="true"></i></button>
          <button><i className="fas fa-retweet" aria-hidden="true"></i></button>
          <button><i className="fas fa-heart" aria-hidden="true"></i></button>
        </div>
      </footer>
    </article>
  )
};