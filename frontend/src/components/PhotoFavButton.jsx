import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton() {
  const [favorite, setFavorite] = useState("photo-list__fav-icon");

  const clickHandler = () => {
    setFavorite(
      favorite === "photo-list__fav-icon"
        ? favorite === "photo-list__fav-icon-svg"
        : favorite === "photo-list__fav-icon"
    );
  };
  return (
    <div className={favorite}>
      <button onClick={clickHandler}>{FavIcon}</button>
    </div>
  );
}

export default PhotoFavButton;
