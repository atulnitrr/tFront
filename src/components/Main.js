import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import "../css/Main.css";
import HomeHeader from "./HomeHeader";
import TweetArea from "./TweetArea";

import AppContext from "../context/AppContext";
import UserTweets from "./UserTweets";
import UserContext from "../context/UserContext";
const B_PATH = "http://localhost:3033";

function Main() {
  const [userTweets, setUserTwet] = useState([]);
  const { appState } = useContext(AppContext);
  const {
    userState: { user_id },
  } = useContext(UserContext);
  const profileTimeline = true;

  useEffect(() => {
    async function fetchData() {
      try {
        const respone = await Axios.get(`${B_PATH}/tweet/user/${user_id}`);
        setUserTwet(respone.data.tweets);
      } catch (error) {}
    }

    fetchData();
  }, [appState.postTweetSuccessCount]);

  return (
    <main className="main-container">
      <HomeHeader></HomeHeader>
      <TweetArea></TweetArea>
      <UserTweets userTweets={userTweets}></UserTweets>
    </main>
  );
}

export default Main;
