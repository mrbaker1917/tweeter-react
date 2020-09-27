import React from 'react';


export const Navigation = () => {

  return (
    <nav>
      <div>
        <span className="brandName"><button>tweeter</button></span>
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