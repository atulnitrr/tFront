import { useState, useEffect } from "react";
import axios from "axios";

function useHomeTimeLineApi(url, postTweetSuccessCount) {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(url);
        setTweets(response.data.home_tweets);
      } catch (error) {}
    }

    getData();
  }, [url, postTweetSuccessCount]);

  return { tweets };
}

export default useHomeTimeLineApi;
