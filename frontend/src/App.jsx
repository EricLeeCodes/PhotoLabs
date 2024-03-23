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

  const displayModalHandler = (isDisplaying, photo) => {
    setDisplayModal(isDisplaying);
    return setSelectedPhoto(photo);
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        displayModalHandler={displayModalHandler}
      />
      {displayModal && (
        <PhotoDetailsModal
          displayModalHandler={displayModalHandler}
          photo={selectedPhoto}
        />
      )}
    </div>
  );
};

export default App;
