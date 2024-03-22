import React, { useState } from "react";

import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((favorites) => {
      if (favorites.includes(id)) {
        return favorites.filter((favId) => favId !== id);
      } else {
        return [...favorites, id];
      }
    });
  };

  console.log(props.photos);
  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} />
      <PhotoList
        photos={props.photos}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
      />
    </div>
  );
};

export default HomeRoute;
