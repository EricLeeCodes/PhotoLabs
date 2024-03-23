import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {Array.isArray(props.photos)
        ? props.photos.map((photo) => (
            <PhotoListItem
              key={photo.id}
              photo={photo}
              toggleFavorite={props.toggleFavorite}
              favorites={props.favorites}
              displayModalHandler={props.displayModalHandler}
            />
          ))
        : Object.values(props.photos).map((photo) => (
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
