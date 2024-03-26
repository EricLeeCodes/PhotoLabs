import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData.js";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    displayModal,
    selectedPhoto,
    favorites,
    displayModalHandler,
    toggleFavorite,
    photos,
    topics,
    getTopicId,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        displayModalHandler={displayModalHandler}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        getTopicId={getTopicId}
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
