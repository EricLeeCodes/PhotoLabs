import React from "react";
import "./App.scss";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoListItem from "./components/PhotoListItem";
import PhotoList from "components/PhotoList";
import TopicListItem from "components/TopicListItem";
import TopicList from "components/TopicList";
import TopNavigationBar from "components/TopNavigationBar";

// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {/* {Array.from(Array(3)).map((_, index) => (
      <PhotoListItem key={index} photo={sampleDataForPhotoListItem} />

      ))} */}
      {/* <PhotoList /> */}
      {/* <TopicList /> */}
      <TopNavigationBar />
    </div>
  );
};

export default App;
