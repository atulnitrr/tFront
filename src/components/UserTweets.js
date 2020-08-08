import React from "react";
import TweetCard from "./TweetCard";

function UserTweets({ userTweets }) {
  return (
    <section className="main-secction">
      {userTweets.map((userTweet) => {
        const { _id } = userTweet;
        return <TweetCard key={_id} userTweet={userTweet}></TweetCard>;
      })}
    </section>
  );
}

export default UserTweets;
