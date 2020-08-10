import React, { useState, useEffect } from "react";
import UserTweets from "./UserTweets";

import "../css/Profile.css";
import pbg from "../img/pbg.jpg";
import pp from "../img/pp.jpg";
import UserProfileTop from "./userprofile/UserProfileTop";
import useUserInfo from "./hooks/useUserInfoApi";
import useUserTweetsApi from "./hooks/useUserTweetsApi";
const B_PATH = "http://localhost:3033";

function Profile(props) {
  const profile_user_id = props.user_id;
  console.log("user _id ---");
  console.log(profile_user_id);
  const { userInfo } = useUserInfo(profile_user_id);
  const { _id, first_name, last_name, created } = userInfo;
  // let { user_id } = props;

  const { tweets } = useUserTweetsApi(profile_user_id);

  // useEffect(() => {}, [profile_user_id]);

  return (
    <div className="up-top-wrapper">
      <div className="up-ud">
        <UserProfileTop userInfo={userInfo} />
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
        <UserTweets userTweets={tweets}></UserTweets>
      </div>
    </div>
  );
}

export default Profile;
