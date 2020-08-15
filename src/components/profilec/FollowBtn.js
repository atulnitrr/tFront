import React, { useState, useEffect, useRef, useContext } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";
const B_PATH = "http://localhost:3033";

function FollowBtn({ profile_user_id }) {
  const [submitCount, setSubmitCount] = useState(0);
  const [fetchCount, setFetchCount] = useState(0);

  const [btnText, setBtnText] = useState("follow");
  const btnRef = useRef(null);

  const {
    userState: { user_id },
  } = useContext(UserContext);

  useEffect(() => {
    const followerDetails = {
      user_id: profile_user_id,
      follower_id: user_id,
    };
    async function amIFollowing() {
      try {
        const respose = await axios.post(
          `${B_PATH}/doifollow`,
          followerDetails
        );
        if (respose.data) {
          handleFollowingText("following", "#1A91DAE6", "#fff");
        } else {
          handleFollowingText("follow", "#fff", "#1A91DAE6");
        }
      } catch (error) {}
    }
    amIFollowing();
  }, [fetchCount, profile_user_id]);

  useEffect(() => {
    async function getData() {
      const followerDetails = {
        user_id: profile_user_id,
        follower_id: user_id,
        following: btnText === "follow",
      };

      try {
        await axios.post(`${B_PATH}/follow`, followerDetails);
        setFetchCount((prev) => prev + 1);
      } catch (error) {
        console.log(error);
      }
    }
    if (submitCount > 0) {
      getData();
    }
  }, [submitCount]);

  function handleFollowingText(text, bgColor, color) {
    setBtnText(text);
    btnRef.current.style.backgroundColor = bgColor;
    btnRef.current.style.color = color;
  }

  const handleOnClick = (e) => {
    setSubmitCount((prev) => prev + 1);
  };

  const handleMouseOver = (e) => {
    const value = e.target.value;
    if (value === "following") {
      handleFollowingText("unfollow", "red", "#FFF");
    }
  };

  const handleMouseOut = (e) => {
    const value = e.target.value;
    if (value === "unfollow") {
      handleFollowingText("following", "#1A91DAE6", "#FFF");
    }
  };

  return (
    <>
      <button
        ref={btnRef}
        onClick={handleOnClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        value={btnText}
        disabled={profile_user_id === user_id}
      >
        {" "}
        {btnText}
      </button>
    </>
  );
}

export default FollowBtn;
