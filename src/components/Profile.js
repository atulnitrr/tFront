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
    <div className="pc-top-wrapper">
      <div className="pc-user">
        <div>
          <i class="fas fa-arrow-circle-left"></i> {"  "}
          <span> atul</span>
          <section>0 tweets</section>
        </div>
        <section className="pc-img-wrapper">
          <div className="profile-bg-img">
            <img src={pbg} alt="profile-bg-img" />
          </div>
          <div className="pc-profile-image">
            <img src={pp} alt="profile image" />
          </div>
        </section>
        <section>
          <div>message</div>
          <div>notifications</div>
          <button>Follow</button>
        </section>
        <section>
          <span>bio desription</span>
          <div>
            <div>location</div>
            <div>link</div>
            <div>Joining date</div>
          </div>
        </section>

        <section>
          <span>0 followings</span>
          <span>0 folowers</span>
        </section>
        <section>followed by Atul and 2 others you follow</section>
        <section>
          <span>Tweets</span>
          <span>Likes</span>
        </section>
      </div>
      <div>
        <UserTweets userTweets={userTweets}></UserTweets>
      </div>
    </div>
  );
}

export default Profile;
