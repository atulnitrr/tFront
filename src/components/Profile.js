import React, { useState, useEffect } from "react";
import UserTweets from "./UserTweets";
import axios from "axios";
import "../css/Profile.css";
import pbg from "../img/pbg.jpg";
import pp from "../img/pp.jpg";
const B_PATH = "http://localhost:3033";

function Profile(props) {
  // const {
  //   params: { user_id },
  // } = props.match;

  const { user_id } = props;
  // user_id = "5f261a987989a7c1b4794172";

  const [userTweets, setUserTwet] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const respone = await axios.get(`${B_PATH}/tweet/user/${user_id}`);
        setUserTwet(respone.data.tweets);
      } catch (error) {}
    }
    fetchData();
  }, [user_id]);
  return (
    <div className="up-top-wrapper">
      <div className="up-ud">
        <div className="up-tc">
          <div>
            <i class="fas fa-arrow-circle-left"></i>
          </div>
          <div className="up-tc-v">
            <p>atul</p>
            <span>200 Tweets</span>
          </div>
        </div>
        <div>image wrapper</div>
        <div>user action</div>
        <div>user name</div>
        <div>bio</div>
        <div>location</div>
        <div>200 followoing</div>
        <div>Followed by</div>
        <div>Tweets, media</div>
      </div>
      <div>
        <UserTweets userTweets={userTweets}></UserTweets>
      </div>
    </div>
  );
}

export default Profile;
