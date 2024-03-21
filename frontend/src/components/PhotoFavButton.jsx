import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  const clickHandler = () => {
    setIsFavorite((isFavorite) => !isFavorite);
  };

  const favIconClass = isFavorite
    ? "photo-list__fav-icon"
    : "photo-list__fav-icon-svg";

  return (
    <div className={favIconClass}>
      <button onClick={clickHandler}>
        <FavIcon isFavorite={isFavorite} />
      </button>
    </div>
  );
}

export default PhotoFavButton;
