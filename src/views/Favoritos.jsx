import React, { useState, useEffect } from "react";
import { useLikedPhotos } from "../components/context/LikedPhotosContext";
import Gallery from "../components/Gallery";

const Favoritos = () => {
  const { likedPhotos, toggleLike } = useLikedPhotos();
  const [likedPhotosData, setLikedPhotosData] = useState([]);

  useEffect(() => {
    fetch("/photos.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredPhotos = data.photos.filter((photo) =>
          likedPhotos.includes(photo.id)
        );
        setLikedPhotosData(filteredPhotos);
      })
      .catch((error) => console.error("Error consiguiendo fotos:", error));
  }, [likedPhotos]);

  return (
    <div>
      <h3 className="d-flex justify-content-center align-items-center pt-4 pb-0">
        <strong>Favoritos</strong>
      </h3>

      <Gallery
        photos={likedPhotosData}
        likedPhotos={likedPhotos}
        toggleLike={toggleLike}
        showHearts={false}
      />
    </div>
  );
};

export default Favoritos;
