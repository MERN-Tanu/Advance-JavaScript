import Tweet from "./Tweet.js";
import "../CSS/TweetList.css";
import { memo } from "react";

const MemoisedTweet = memo(Tweet);

function TweetList({ tweets, onEditTweet }) {
  return (
    <ul className="tweet-list">
      {tweets.map((tweet, index) => {
        return (
          <li className="tweet-like-wrapper">
            <MemoisedTweet
              tweetId={tweet.id}
              content={tweet.content}
              likeCount={tweet.likeCount}
              createdAt={tweet.createdAt.toString()}
              onEdit={onEditTweet}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default TweetList;
