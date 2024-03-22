import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = (props) => {
  if (props.favorites.length > 0) {
    return (isFavPhotoExist = true);
  }
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div>
        <TopicList topics={props.topics} />
      </div>
      <div>
        <FavBadge isFavPhotoExist={false} />
      </div>
    </div>
  );
};

export default TopNavigation;
