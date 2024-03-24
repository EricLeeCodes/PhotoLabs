import { useState } from "module";

const useApplicationData = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({});
  const [favorites, setFavorites] = useState([]);
};


export default { useApplicationData };