import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(prop) {
  const [isFavorite, setIsFavorite] = useState(false);

  const clickHandler = () => {
    setIsFavorite(!isFavorite ? isFavorite : !isFavorite);
  };
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <button onClick={prop.clickHandler}>
          <FavIcon />
        </button>
      </div>
    </div>
  );
}

export default PhotoFavButton;
