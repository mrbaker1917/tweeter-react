import React from 'react';

export const TweetForm = () => {

  return (
    <section className="newTweetForm" className="new-tweet">
      <form method="POST" action="/tweets" className="tweet-form">
        <div className="error-message"></div>
        <label for="tweet-text">What are you humming about?</label>
        <textarea name="text" className="tweet-text"></textarea>
        <div className="tweet-btn-char-num">
          <button type="submit" className="tweet-btn">Tweet</button>
          <output name="counter" className="counter" for="tweet-text">140</output>
        </div>
      </form>
    </section>
  )
}