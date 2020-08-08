import React, { useContext } from "react";
import { withRouter, Link } from "react-router-dom";
import UserContext from "../context/UserContext";

import "../css/LeftSideBar.css";

// https://learnwithparam.com/blog/dynamic-pages-in-react-router/

function LeftSideBar(props) {
  const {
    userState: { first_name, user_id },
    userDispatch,
  } = useContext(UserContext);

  const handleLogOut = (e) => {
    userDispatch({ type: "LOGOUT" });
    props.history.push("/login");
  };

  return (
    <aside className="ls-container">
      <section>
        <Link to="/">Home</Link>
        <Link to="/profile">Profle</Link>
        <Link to="/noti">Notification</Link>
        <Link to="/exp">Explore</Link>
        <button>Dweet</button>
      </section>
      <div className="logout-top-wrapper">
        <div className="logout-up-wrapper">
          <div className="logout-up-icon-wrapper">
            <i className="fas fa-user-circle tw-user-profile"></i>
          </div>
          <div className="logout-up-name">
            <p>{first_name}</p>
            <p>
              {" "}
              <span>@</span>
              {`${first_name}${user_id.slice(-10)}`}
            </p>
          </div>
        </div>
        <div className="logout-btn">
          <button onClick={handleLogOut}>Log out</button>
        </div>
      </div>
    </aside>
  );
}

export default withRouter(LeftSideBar);
