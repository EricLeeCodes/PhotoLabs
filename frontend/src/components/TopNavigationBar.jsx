import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = (props) => {
  console.log("props.topics", props.topics);
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div>
        <TopicList topics={props.topics} getTopicId={props.topics.id} />
      </div>
      <div>
        <FavBadge isFavPhotoExist={props.favorites.length > 0} />
      </div>
    </div>
  );
};

export default TopNavigation;
