import { useState } from "react";


const useApplicationData = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({});
  const [favorites, setFavorites] = useState([]);

  const displayModalHandler = (isDisplaying, photo) => {
    setDisplayModal(isDisplaying);
    return setSelectedPhoto(photo);
  };

  const toggleFavorite = (id) => {
    setFavorites((favorites) => {
      if (favorites.includes(id)) {
        return favorites.filter((favId) => favId !== id);
      } else {
        return [...favorites, id];
      }
    });
  };

  return { displayModal, selectedPhoto, favorites, displayModalHandler, toggleFavorite };

};


export default useApplicationData;