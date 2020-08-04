import React from "react";

import "../css/LeftSideBar.css";

function LeftSideBar() {
  return (
    <aside className="ls-container">
      <section>
        <p>Home</p>
        <p>Profle</p>
        <p>Explore</p>
        <p>Notification</p>
        <button>Dweet</button>
      </section>
      <div>user detail</div>
    </aside>
  );
}

export default LeftSideBar;
