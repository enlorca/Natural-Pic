import React, { useEffect, useState } from "react";
import { useLikedPhotos } from "../components/context/LikedPhotosContext";
import photosData from "../../public/photos.json";
import "./Home.css";
import Gallery from "../components/Gallery";

const Home = () => {
  const { likedPhotos, toggleLike } = useLikedPhotos();

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("/photos.json")
      .then((response) => response.json())
      .then((data) => setPhotos(data.photos))
      .catch((error) => console.error("Error consiguiendo fotos:", error));
  }, []);

  return (
    <div>
      <h3 className="d-flex justify-content-center align-items-center pt-4 pb-0">
        <strong>Natural Pic</strong>
      </h3>

      <Gallery
        photos={photos}
        likedPhotos={likedPhotos}
        toggleLike={toggleLike}
        showHearts={true}
      />
    </div>
  );
};

export default Home;
