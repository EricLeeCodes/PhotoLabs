import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          toggleFavourite={props.toggleFavourite}
          isFavorite={props.isFavorite}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
