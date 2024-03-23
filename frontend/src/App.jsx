import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [displayModal, setDisplayModal] = useState(false);

  const displayHandler = (id) => {
    setDisplayModal((displayModal) => !displayModal);
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        displayHandler={displayHandler}
        displayModal={displayModal}
      />
      <PhotoDetailsModal
        style={{ display: displayModal ? "inline" : "none" }}
      />
    </div>
  );
};

export default App;
