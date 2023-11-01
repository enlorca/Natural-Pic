import React from "react";
import { useLikedPhotos } from "../components/context/LikedPhotosContext";
import photosData from "../../public/photos.json";
import "./Home.css";
import Gallery from "../components/Gallery";

const Home = () => {
  const { likedPhotos, toggleLike } = useLikedPhotos();

  return (
    <div>
      <h3 className="d-flex justify-content-center align-items-center pt-4 pb-0">
        <strong>Natural Pic</strong>
      </h3>

      <Gallery
        photos={photosData.photos}
        likedPhotos={likedPhotos}
        toggleLike={toggleLike}
      />
    </div>
  );
};

export default Home;
