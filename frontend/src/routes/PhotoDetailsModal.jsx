import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = (props) => {
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={() => props.displayModalHandler(false)}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <img src={props.photos} />
    </div>
  );
};

export default PhotoDetailsModal;
