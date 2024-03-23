import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = (props) => {
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={() => props.displayModalHandler(false)}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="move-left">
        <PhotoFavButton
          toggleFavorite={() => {
            props.toggleFavorite(props.photo.id);
          }}
          favorites={props.favorites}
          isFavorite={props.favorites.includes(props.photo.id)}
        />
        <img
          className="photo-details-modal__image"
          src={props.photo.urls.full}
        />
      </div>

      <div className="photo-details-modal__top-bar">
        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={props.photo.user.profile}
          />
          <div className="photo-details-modal__header photo-details-modal__photographer-info">
            <div>{props.photo.user.name}</div>
            <div className="photo-details-modal__photographer-location">
              {`${props.photo.location.city}, ${props.photo.location.country}`}
            </div>
          </div>
        </div>
      </div>

      <div className="photo-details-modal__images">
        <PhotoList
          photos={Object.values(props.photo.similar_photos)}
          favorites={props.favorites}
          toggleFavorite={props.toggleFavorite}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
