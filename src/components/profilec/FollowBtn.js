import React, { useState, useEffect, useRef } from "react";

function FollowBtn() {
  const [btnText, setBtnText] = useState("follow");
  const btnRef = useRef(null);

  const handleOnClick = (e) => {
    const value = e.target.value;
    if ("follow" === value) {
      // network call
      setBtnText("following");
    } else if ("following" === value || "unfollow" === value) {
      setBtnText("follow");
      btnRef.current.style.backgroundColor = "#fff";
      btnRef.current.style.color = "#1A91DAE6";
    }
  };

  const handleMouseOver = (e) => {
    const value = e.target.value;
    if (value === "following") {
      setBtnText("unfollow");
      btnRef.current.style.backgroundColor = "red";
      btnRef.current.style.color = "#FFF";
    }
  };

  const handleMouseOut = (e) => {
    const value = e.target.value;
    if (value === "unfollow") {
      setBtnText("following");
      btnRef.current.style.backgroundColor = "#1A91DAE6";
      btnRef.current.style.color = "#FFF";
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
      >
        {" "}
        {btnText}
      </button>
    </>
  );
}

export default FollowBtn;
