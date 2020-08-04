import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../css/TweetArea.css";
const B_PATH = "http://localhost:3033";

const user_id = "5f261a987989a7c1b4794172";

function TweetArea() {
  const [tweet, setTweet] = useState("");
  const [submitCount, setSubmitCount] = useState(0);

  useEffect(() => {
    async function sendTweet() {
      try {
        const tweetData = {
          tweet: tweet,
          user_id: user_id,
        };
        const respone = await Axios.post(`${B_PATH}/tweet`, tweetData);
        console.log(respone.data);
        setTweet("");
      } catch (error) {
        console.log(error);
      }
    }
    if (submitCount > 0) {
      sendTweet();
    }
  }, [submitCount]);

  const handleSubmit = (e) => {
    setSubmitCount((prev) => prev + 1);
  };

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
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
          ></textarea>
        </div>
        <div className="tw-ta-action">
          <div></div>
          <div className="tw-ta-action-r">
            <button disabled={tweet.trim().length == 0} onClick={handleSubmit}>
              Dweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetArea;
