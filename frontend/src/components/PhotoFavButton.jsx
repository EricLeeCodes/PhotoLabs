import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  const clickHandler = () => {
    setIsFavorite((isFavorite) => !isFavorite);
  };

  const favIconClass = isFavorite
    ? "photo-list__fav-icon-svg"
    : "photo-list__fav-icon";

  return (
    <div className={favIconClass}>
      <button onClick={clickHandler}></button>
    </div>
  );
}

export default PhotoFavButton;
