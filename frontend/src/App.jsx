import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [displayModal, setDisplayModal] = useState(false);

  const displayHandler = (isDisplaying) => {
    setDisplayModal(isDisplaying);
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        displayHandler={displayHandler}
      />
      {displayModal && <PhotoDetailsModal displayHandler={displayHandler} />}
    </div>
  );
};

export default App;
