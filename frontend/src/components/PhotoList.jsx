import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  console.log(props.displayModalHandler);
  return (
    <ul className="photo-list">
      {props.photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          toggleFavorite={props.toggleFavorite}
          favorites={props.favorites}
          displayModalHandler={props.displayModalHandler}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
