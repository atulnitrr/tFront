import React from "react";
import { withRouter, Link } from "react-router-dom";

function UserProfileTop() {
  return (
    <div className="up-tc">
      <Link to="/">
        <i className="fas fa-arrow-circle-left"></i>
      </Link>

      <div className="up-tc-v">
        <p>atul</p>
        <span>200 Tweets</span>
      </div>
    </div>
  );
}

export default withRouter(UserProfileTop);
