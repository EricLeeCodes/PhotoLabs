import React, { Fragment } from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <img
        className="photo-list__image"
        key={props.photo.id}
        src={props.photo.imageSource}
      ></img>
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={props.photo.profile}
        ></img>
        <div className="photo-list__user-info">
          <div>{props.photo.username}</div>
          <div className="photo-list__user-location">
            {`${props.photo.location.city} ${props.photo.location.country}`}
          </div>
        </div>
      </div>
      <PhotoFavButton />
    </div>
  );
};

export default PhotoListItem;
