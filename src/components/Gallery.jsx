import React, { useState, useEffect } from "react";
import IconHeart from "./IconHeart";

const Gallery = ({ likedPhotos, toggleLike }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("/photos.json")
      .then((response) => response.json())
      .then((data) => setPhotos(data.photos))
      .catch((error) => console.error("Error consiguiendo fotos:", error));
  }, []);

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((photo) => (
        <div key={photo.id} className="photo-item">
          <img src={photo.src.medium} alt={photo.alt} />
          <div className="heart-icon" onClick={() => toggleLike(photo.id)}>
            <IconHeart filled={likedPhotos.includes(photo.id)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
