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
          <i className="fas fa-arrow-circle-left"></i>

          <div className="up-tc-v">
            <p>atul</p>
            <span>200 Tweets</span>
          </div>
        </div>
        <div className="up-img-w">
          <img src={pbg} alt="" />
          <div>
            <img src={pp} alt="" />
          </div>
        </div>
        <div className="up-ua">
          <i className="far fa-envelope"></i>
          <i className="far fa-bell"></i>
          <button>follow</button>
        </div>
        <div className="up-un-d">
          <p>atul</p>
          <span>@atul</span>
        </div>
        <div className="up-bio">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            voluptatem autem nostrum quod, officiis voluptatum fugiat laborum
            rem, dolor porro modi consequuntur
          </p>
        </div>
        <div className="up-linfo">
          <div className="up-linfo-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>Bengaluru</p>
          </div>
          <div className="up-linfo-item">
            <i className="fas fa-link"></i>
            <p>link</p>
          </div>
          <div className="up-linfo-item">
            <i className="far fa-calendar-alt"></i>
            <p>Joined January 2020</p>
          </div>
        </div>
        <div className="up-fc">
          <div className="up-fc-item">
            <span>200</span>
            <p>Following</p>
          </div>
          <div className="up-fc-item">
            <span>2300</span>
            <p>Followers</p>
          </div>
        </div>
        {/* <div>Followed by</div> */}
        <div className="up-nl">
          <div className="up-nl-i">Tweets</div>
          <div className="up-nl-i">Replies</div>
          <div className="up-nl-i">Media</div>
          <div className="up-nl-i">Likes</div>
        </div>
      </div>
      <div>
        <UserTweets userTweets={userTweets}></UserTweets>
      </div>
    </div>
  );
}

export default Profile;
