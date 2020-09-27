import React, {useState} from 'react';
import './App.css';
import { Navigation } from './components/Navigation';
import { Profile } from './components/Profile';
import { TweetForm } from './components/TweetForm';
import { Tweet } from './components/Tweet';

const initialTweetsData = [
  {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac",
    "text": "If I have seen further it is by standing on the shoulders of giants.",
    "created_at": 1461116232227
  },
  {
    "name": "Descartes",
    "avatars": "https://i.imgur.com/nlhLi3I.png",
    "handle": "@rd",
    "text": "Je pense , donc je suis!",
    "created_at": 1461113959088
  },
  {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac",
    "text": "If I have seen further it is by standing on the shoulders of giants.",
    "created_at": 1461116232227
  },
  {
    "name": "Descartes",
    "avatars": "https://i.imgur.com/nlhLi3I.png",
    "handle": "@rd",
    "text": "Je pense , donc je suis!",
    "created_at": 1461113959088
  }
];

function App() {

  const [tweetData, setTweetData] = useState(initialTweetsData);
  const tweets = tweetData.map((tweetData, index) => {
    return <Tweet key={index} name={tweetData.name} handle={tweetData.handle} avatar={tweetData.avatars} text={tweetData.text}
    created_at={tweetData.created_at} />
  });

  const addNewTweet = text => {
    const newTweet = {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd",
      text,
      "created_at": 1461113959088
    };

    setTweetData([newTweet, ...tweetData]);
  };
  return (
    <div className="App">
      <Navigation />
      <div className="row-div">
        <Profile />
        <main className="container">
          <TweetForm addNewTweet={addNewTweet} />
          <section className="tweets">
            {tweets}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
