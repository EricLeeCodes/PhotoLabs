import React, { useState } from "react";

import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} favorites={props.favorites} />
      <PhotoList
        photos={props.photos}
        toggleFavorite={props.toggleFavorite}
        favorites={props.favorites}
        displayModalHandler={props.displayModalHandler}
        isFavorite={props.isFavorite}
      />
    </div>
  );
};

export default HomeRoute;
