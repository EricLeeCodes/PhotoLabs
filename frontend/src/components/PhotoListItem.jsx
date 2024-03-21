import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <>
      <img key={props.id} src={props.imageSource}></img>
      <img src={props.profile}></img>
      <div>{props.username}</div>
      <div>
        <div>{`${props.locationCity} ${props.locationCountry}`}</div>
      </div>
    </>
  );
};

export default PhotoListItem;
