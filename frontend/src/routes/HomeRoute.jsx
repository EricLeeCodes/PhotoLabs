import React, { useState } from "react";

import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const clickHandler = () => {
    setIsFavorite((isFavorite) => !isFavorite);
  };

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} />
      <PhotoList
        photos={props.photos}
        clickHandler={clickHandler}
        isFavorite={isFavorite}
      />
    </div>
  );
};

export default HomeRoute;
