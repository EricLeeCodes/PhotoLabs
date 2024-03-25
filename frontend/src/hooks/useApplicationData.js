import topics from "mocks/topics";
import { useReducer, useEffect } from "react";

const useApplicationData = () => {


  const SHOW_MODAL = "SHOW_MODAL";
  const ADD_FAVORITE = "ADD_FAVORITE";
  const REMOVE_FAVORITE = "REMOVE_FAVORITE";
  const HIDE_MODAL = "HIDE_MODAL";
  const SET_PHOTO_DATA = "SET_PHOTO_DATA";
  const SET_TOPIC_DATA = "SET_TOPIC_DATA";




  const initial = {
    displayModal: false,
    selectedPhoto: {},
    favorites: [],
    //API data
    photoData: [],
    topicData: []
  };

  const [state, dispatch] = useReducer(reducer, initial);


  useEffect(() => {
    fetch('/api/photos')
      .then((response) => response.json())
      .then((data) => dispatch({ type: SET_PHOTO_DATA, payload: data }));
  }, []);

  useEffect(() => {
    fetch('/api/topics')
      .then((response) => response.json())
      .then((data) => dispatch({ type: SET_TOPIC_DATA, payload: data }));
  }, []);


  function displayModalHandler(selectedPhoto) {
    if (selectedPhoto) {
      dispatch({
        type: SHOW_MODAL,
        payload: selectedPhoto
      });
    } else {
      dispatch({
        type: HIDE_MODAL,
      });
    }
  }

  function toggleFavorite(id) {
    if (state.favorites.includes(id)) {
      // If the id is already in favorites, we want to remove it.
      dispatch({
        type: REMOVE_FAVORITE,
        payload: { id }
      });
    } else {
      // If the id is not in favorites, this means the user wants to add it.
      dispatch({
        type: ADD_FAVORITE,
        payload: { id }
      });
    }
  };

  function reducer(state, action) {
    switch (action.type) {
      case ADD_FAVORITE:
        return {
          ...state,
          favorites: [...state.favorites, action.payload.id] // adds the new favorite id
        };
      case REMOVE_FAVORITE:
        if (state.favorites.includes(action.payload.id)) {
          return {
            ...state,
            favorites: state.favorites.filter(favId => favId !== action.payload.id) // removes the favorite id
          };
        }
      case SHOW_MODAL:
        return {
          ...state,
          displayModal: true,
          selectedPhoto: action.payload // assuming action.payload contains the photo object
        };
      case HIDE_MODAL:
        return {
          ...state,
          displayModal: false,
          selectedPhoto: {} // resets to no selected photo
        };
      case SET_PHOTO_DATA:
        return { ...state, photoData: action.payload };
      case SET_TOPIC_DATA:
        return { ...state, topicData: action.payload };
      default:
        return state;
    }
  };

  return {
    displayModal: state.displayModal,
    selectedPhoto: state.selectedPhoto,
    favorites: state.favorites,
    displayModalHandler: displayModalHandler,
    toggleFavorite: toggleFavorite,
    photos: state.photoData,
    topics: state.topicData
  };

};

export default useApplicationData;


