import { useState } from "react";
import "../CSS/Tweet.css";

function Tweet({ tweetId, content, likeCount, createdAt, onEdit }) {
  const [isEditing, setEditing] = useState(false);

  return (
    <div className="tweet-wrapper">
      <div className="tweet-edit-wrap">
        <div className="tweet-content">
          {isEditing ? (
            <input
              type="text"
              onChange={(e) =>
                onEdit({
                  id: tweetId,
                  content: e.target.value,
                  likeCount: likeCount,
                  createdAt: createdAt,
                })
              }
              value={content}
            />
          ) : (
            content
          )}
        </div>
      </div>

      <div>
        <button
          onClick={() => {
            setEditing(!isEditing);
          }}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>

      <div className="like-createdAt-wrapper">
        <div className="likes">{likeCount} likes</div>
        <div className="created-at">
          <b>Tweeted at </b>
          {createdAt}
        </div>
      </div>
    </div>
  );
}

export default Tweet;
