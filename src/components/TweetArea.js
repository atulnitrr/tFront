import React from "react";
import "../css/TweetArea.css";

function TweetArea() {
  return (
    <div className="tweet-wrapper">
      <div className="tw-user-profile">
        <i className="fas fa-user-circle tw-user-profile"></i>
      </div>
      <div className="tw-ta">
        <div className="tw-ta-input">
          <textarea
            name=""
            id=""
            rows="4"
            placeholder="Whats new there?"
          ></textarea>
        </div>
        <div className="tw-ta-action">
          <div></div>
          <div className="tw-ta-action-r">
            <button>Dweet</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetArea;
