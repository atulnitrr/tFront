import React from "react";
import { Switch, Route } from "react-router-dom";
import LeftSideBar from "../components/LeftSideBar";
import RighSideBar from "../components/rightsidebar/RighSideBar";
import Main from "../components/Main";
import Profile from "../components/Profile";

function Home(props) {
  let showUserTimeline = false;
  let user_id = "";
  console.log(props);
  if (props.match.params.hasOwnProperty("user_id")) {
    showUserTimeline = true;
    user_id = props.match.params.user_id;
  }

  return (
    <div className="container">
      <LeftSideBar></LeftSideBar>
      {showUserTimeline ? <Profile user_id={user_id}></Profile> : <Main></Main>}
      <RighSideBar></RighSideBar>
    </div>
  );
}

export default Home;
