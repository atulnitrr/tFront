import { useState, useEffect } from "react";
import axios from "axios";
const B_PATH = "http://localhost:3033";

const useUserTweetsApi = (user_id, postTweetSuccessCount) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("user _D");
        console.log(user_id);
        const respone = await axios.get(`${B_PATH}/tweet/user/${user_id}`);
        console.log("tweets");
        console.log(respone.data.tweets);
        setTweets(respone.data.tweets);
      } catch (error) {}
    }
    fetchData();
  }, [user_id, postTweetSuccessCount]);

  return {
    tweets,
  };
};

export default useUserTweetsApi;
