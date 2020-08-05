import React, { useContext } from "react";
import "../css/TweetCard.css";
import moment from "moment";
import AppContext from "../context/AppContext";

function TweetCard(props) {
  const { appState, dispatch } = useContext(AppContext);
  const {
    userTweet: { tweet, _id, user_id, created },
  } = props;

  return (
    <div className="tw-card">
      <div className="tw-user-profile">
        <i className="fas fa-user-circle tw-user-profile"></i>
      </div>
      <div className="tw-card-content">
        <div className="tw-card-content-usr-info">
          <p>{user_id}</p>
          {/* <p>{appState.name}</p> */}
          {/* <p>{created}</p> */}
          <p>{moment(created).fromNow()}</p>
        </div>
        <div className="tw-card-content-tweet-info">
          <p>{tweet}</p>
        </div>
        <div className="tw-card-content-tweet-action">
          <i className="far fa-comment"></i>
          <i className="fas fa-heart"></i>
        </div>
      </div>
    </div>
  );
}

export default TweetCard;
