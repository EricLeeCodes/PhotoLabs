import React, { Fragment, useState } from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton
        clickHandler={props.clickHandler}
        isFavorite={props.isFavorite}
      />
      <img
        className="photo-list__image"
        key={props.photo.id}
        src={props.photo.urls.regular}
      ></img>
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={props.photo.user.profile}
        ></img>
        <div className="photo-list__user-info">
          <div>{props.photo.user.name}</div>
          <div className="photo-list__user-location">
            {`${props.photo.location.city} ${props.photo.location.country}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
