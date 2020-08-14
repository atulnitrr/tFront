import React, { useState, useEffect, useContext } from "react";
import "../css/Main.css";
import HomeHeader from "./HomeHeader";
import TweetArea from "./TweetArea";

import AppContext from "../context/AppContext";
import UserTweets from "./UserTweets";
import UserContext from "../context/UserContext";
import useUserTweetsApi from "./hooks/useUserTweetsApi";
const B_PATH = "http://localhost:3033";

function Main() {
  // const [userTweets, setUserTwet] = useState([]);
  const { appState } = useContext(AppContext);
  const {
    userState: { user_id },
  } = useContext(UserContext);
  const profileTimeline = true;

  const { tweets } = useUserTweetsApi(user_id, appState.postTweetSuccessCount);

  return (
    <main className="main-container">
      <HomeHeader></HomeHeader>
      <TweetArea></TweetArea>
      <UserTweets userTweets={tweets}></UserTweets>
    </main>
  );
}

export default Main;
