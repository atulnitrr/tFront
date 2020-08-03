import React from "react";
import LeftSideBar from "../components/LeftSideBar";
import RighSideBar from "../components/RighSideBar";
import Main from "../components/Main";

function Home() {
  return (
    <div className="container">
      <LeftSideBar></LeftSideBar>
      <Main></Main>
      <RighSideBar></RighSideBar>
    </div>
  );
}

export default Home;
