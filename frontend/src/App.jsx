import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({});
  const [favorites, setFavorites] = useState([]);

  const displayModalHandler = (isDisplaying, photo) => {
    setDisplayModal(isDisplaying);
    return setSelectedPhoto(photo);
  };

  const toggleFavorite = (id) => {
    console.log("Toggle Fav function ", id);
    setFavorites((favorites) => {
      if (favorites.includes(id)) {
        return favorites.filter((favId) => favId !== id);
      } else {
        return [...favorites, id];
      }
    });
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        displayModalHandler={displayModalHandler}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
      {displayModal && (
        <PhotoDetailsModal
          displayModalHandler={displayModalHandler}
          photo={selectedPhoto}
          photos={photos}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
};

export default App;
