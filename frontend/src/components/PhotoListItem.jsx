import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <>
      <img key={props.photo.id} src={props.photo.imageSource}></img>
      <img src={props.photo.profile}></img>
      <div>{props.photo.username}</div>
      <div>
        <div>{`${props.photo.location.city} ${props.photo.location.country}`}</div>
      </div>
    </>
  );
};

export default PhotoListItem;
