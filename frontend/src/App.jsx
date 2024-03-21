import React from "react";

import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const displayPhotos = (input) => {
  const photos = [];
  for (let i = 0; i < input; i++) {
    photos.push(<PhotoListItem key={i} photo={sampleDataForPhotoListItem} />);
  }

  return photos;
};

// Note: Rendering a single component to build components in isolation
const App = () => {
  return <div className="App">{displayPhotos(3)}</div>;
};

export default App;
