import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  return props.photos ? (
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
  ) : (
    <ul className="photo-list">
      {props.similarPhotos.keys((photo) => (
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
