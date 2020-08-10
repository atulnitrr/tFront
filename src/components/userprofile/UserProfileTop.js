import React from "react";
import { withRouter, Link } from "react-router-dom";

function UserProfileTop(props) {
  const {
    userInfo: { _id, first_name, last_name },
  } = props;
  return (
    <div className="up-tc">
      <Link to="/">
        <i className="fas fa-arrow-circle-left"></i>
      </Link>

      <div className="up-tc-v">
        <p>{first_name}</p>
        <span>200 Tweets</span>
      </div>
    </div>
  );
}

export default withRouter(UserProfileTop);
