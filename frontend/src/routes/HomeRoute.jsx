import React, { useState } from "react";

import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const [isFavorite, setIsFavorite] = useState([]);

  const toggleFavourite = (id) => {
    setIsFavorite((isFavorite) => {
      if (isFavorite.includes(id)) {
        return isFavorite.filter((favId) => favId !== id);
      } else {
        return isFavorite.push(id);
      }
    });
  };
  // const toggleFavorites = (id) => {
  //   setFavorites((favorites) => {
  //     if (favorites.includes(id)) {
  //       //return the array where the it does not have the id
  //       return favorites.filter((favId) => favId !== id);
  //     } else {
  //       return favorites.push()
  //     }
  //   });
  // };

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} />
      <PhotoList
        photos={props.photos}
        toggleFavourite={toggleFavourite}
        isFavorite={isFavorite}
      />
    </div>
  );
};

export default HomeRoute;
