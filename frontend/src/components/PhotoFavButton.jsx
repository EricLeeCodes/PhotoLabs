import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  const clickHandler = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <button onClick={clickHandler}>
          <FavIcon />
        </button>
      </div>
    </div>
  );
}

export default PhotoFavButton;
