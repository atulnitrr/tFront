import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import "../css/Main.css";
import HomeHeader from "./HomeHeader";
import TweetArea from "./TweetArea";
import TweetCard from "./TweetCard";
import AppContext from "../context/AppContext";
const B_PATH = "http://localhost:3033";

const user_id = "5f261a987989a7c1b4794172";

function Main() {
  const [userTweet, setUserTwet] = useState([]);
  const { appState, dispatch } = useContext(AppContext);

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
      <section className="main-secction">
        {userTweet.map((userTweet) => {
          const { _id, tweet } = userTweet;
          return <TweetCard key={_id} userTweet={userTweet}></TweetCard>;
        })}
      </section>
    </main>
  );
}

export default Main;
