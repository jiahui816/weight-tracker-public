import React from "react";
import Avatar from "@material-ui/core/Avatar";

import "./Header.css";
function Header() {
  return (
    <div className="header">
      <h1>My Weight Tracker</h1>

      <div className="header__right">
        <h2>Jia Hui</h2>
        <Avatar
          alt="Jia"
          src="https://instagram.fmel14-2.fna.fbcdn.net/v/t51.2885-19/s320x320/74636020_898672433869160_3796416185294127104_n.jpg?_nc_ht=instagram.fmel14-2.fna.fbcdn.net&_nc_ohc=s7BGBo-SqDgAX_QFl2w&tp=1&oh=5ce3942068ba96a6b5e24546ee48901a&oe=60416C8D"
        />
      </div>
    </div>
  );
}

export default Header;
