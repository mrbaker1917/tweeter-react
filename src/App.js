import React from 'react';
import './App.css';
import { Navigation } from './components/Navigation';
import { Profile } from './components/Profile';
import { TweetForm } from './components/TweetForm';
import { Tweet } from './components/Tweet';

const tweets = [
  {
    "user": {
      "name": "Francis",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants."
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

function App() {
  return (
      <div className="App">
        <Navigation />
        <div className="row-div">
        <Profile />
        <main className="container">
        <TweetForm />
        <section className="tweets">
        <Tweet name={tweets[1].user.name} 
          handle={tweets[1].user.handle} 
          avatar={tweets[1].user.avatars} 
          text={tweets[1].content.text}
          created_at={tweets[1].created_at} />
        </section>
        </main>
        </div>
      </div>
  );
}

export default App;
