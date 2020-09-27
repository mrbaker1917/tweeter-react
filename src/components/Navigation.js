import React from 'react';
import './Navigation.css';


export const Navigation = () => {

  return (
    <nav>
      <div>
        <button className="home-button">Tweeter</button>
      </div>
      <div className="writeTweet">
        <button title="Click here to make a new tweet!" className="tweet-btn-form">
          <span><strong>Write</strong> a new tweet</span>
        </button>
        <i className="btn__icon fas fa-angle-double-down"></i>
      </div>
    </nav>
  )
}