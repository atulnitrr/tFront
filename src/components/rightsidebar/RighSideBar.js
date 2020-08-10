import React, { useState, useEffect, useContext } from "react";
import "../../css/RighSideBar.css";
import useWhomToFollow from "../hooks/useWhomToFollow";
import RSingleUser from "./RSingleUser";
import UserContext from "../../context/UserContext";
const B_PATH = "http://localhost:3033";

function RighSideBar() {
  const {
    userState: { user_id },
  } = useContext(UserContext);
  const { userRecom, wtfError } = useWhomToFollow(user_id);
  console.log("ddd");
  console.log(userRecom);

  return (
    <aside className="rs-tw">
      <div className="rs-sa">
        <input type="text" placeholder="search area" />
      </div>
      <div className="pto">
        <p>people you may follow</p>
        <div className="p-to-f">
          {userRecom.map((userR) => {
            const { _id } = userR;
            return (
              <RSingleUser key={_id} userR={userR}>
                {" "}
              </RSingleUser>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default RighSideBar;
