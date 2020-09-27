import React, { useState } from 'react';
import './TweetForm.css';

export const TweetForm = props => {
  const {addNewTweet} = props;
  const [tweetText, setTweetText] = useState("");
  const tweetTextLeft = 140 - tweetText.length;
  const counterStyle = { color: tweetTextLeft >= 0 ? "black" : "red" };

  const submitTweet = (event) => {
    event.preventDefault();
    if (tweetTextLeft > 0 && tweetTextLeft <= 140) {
      addNewTweet(tweetText);
      setTweetText("");
    }
  };

  return (
    <section className="newTweetForm new-tweet">
      <form onSubmit={submitTweet} method="POST" action="/tweets" className="tweet-form">
        <div className="error-message"></div>
        <label htmlFor="tweet-text">What are you humming about?</label>
        <textarea value={tweetText} onChange={event => { setTweetText(event.target.value) }} name="text" className="tweet-text"></textarea>
        <div className="tweet-btn-char-num">
          <button type="submit" className="tweet-btn">Tweet</button>
          <output style={counterStyle} name="counter" className="counter" htmlFor="tweet-text">{140 - tweetText.length}</output>
        </div>
      </form>
    </section>
  )
}