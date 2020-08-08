import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import "../css/Main.css";
import HomeHeader from "./HomeHeader";
import TweetArea from "./TweetArea";

import AppContext from "../context/AppContext";
import UserTweets from "./UserTweets";
const B_PATH = "http://localhost:3033";

const user_id = "5f261a987989a7c1b4794172";

function Main() {
  const [userTweets, setUserTwet] = useState([]);
  const { appState } = useContext(AppContext);
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
