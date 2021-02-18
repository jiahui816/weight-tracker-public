import React from "react";
import Avatar from "@material-ui/core/Avatar";

import "./Header.css";
function Header() {
  return (
    <div className="header">
      <h1>My Weight Tracker</h1>

      <div className="header__right">
        <h2>User 1</h2>
        <Avatar
          alt="Jia"
          src="https://i.pinimg.com/originals/5a/0c/7b/5a0c7b76e2a8bcdbe571c5ba916f93fe.jpg"
        />
      </div>
    </div>
  );
}

export default Header;
