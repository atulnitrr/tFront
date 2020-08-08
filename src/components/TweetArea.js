import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import "../css/TweetArea.css";
import AppContext from "../context/AppContext";
import UserContext from "../context/UserContext";
const B_PATH = "http://localhost:3033";

function TweetArea() {
  const [tweet, setTweet] = useState("");
  const [submitCount, setSubmitCount] = useState(0);
  const { dispatch } = useContext(AppContext);
  const {
    userState: { user_id },
  } = useContext(UserContext);

  useEffect(() => {
    async function sendTweet() {
      try {
        const tweetData = {
          tweet: tweet,
          user_id: user_id,
        };
        await Axios.post(`${B_PATH}/tweet`, tweetData);
        dispatch({ type: "POST_TWEET" });
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
            <button disabled={tweet.trim().length === 0} onClick={handleSubmit}>
              Dweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetArea;
