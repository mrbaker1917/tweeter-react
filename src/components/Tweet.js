import React from 'react';
import './Tweet.css';

export const Tweet = (props) => {
  return (
    <article className="tweet">
      <header>
        <div className="avatar">
          <img src={props.avatar} alt="user_avatar" />
          <span className="name">{props.name}</span>
        </div>
        <span className="handle">{props.handle}</span>
      </header>
      <p className="tweetText">{props.text}</p>
      <footer>
        <span className="daysSince">4 years ago</span>
        <div className="icons">
          <button><i className="fas fa-flag" aria-hidden="true"></i></button>
          <button><i className="fas fa-retweet" aria-hidden="true"></i></button>
          <button><i className="fas fa-heart" aria-hidden="true"></i></button>
        </div>
      </footer>
    </article>
  )
};