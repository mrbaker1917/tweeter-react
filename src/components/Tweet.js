import React from 'react';
import './Tweet.css';

export const Tweet = () => {

  return (
    <article className="tweet">
      <header>
        <div className="avatar">
          <img src="https://i.imgur.com/73hZDYK.png" alt="user_avatar" />
          <span className="name">Newton</span>
        </div>
        <span className="handle">@SirIsaac</span>
      </header>
      <p className="tweetText">If I have seen further it is by standing on the shoulders of giants</p>
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