import React from "react";
import "../views/Home.css";
import IconHeart from "./IconHeart";

const Gallery = ({ photos, likedPhotos, toggleLike, showHearts }) => {
  const handlePhotoClick = (id) => {
    if (!showHearts) {
      toggleLike(id);
    }
  };

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((photo) => (
        <div key={photo.id} className="photo-item">
          <img
            src={photo.src.medium}
            alt={photo.alt}
            onClick={() => handlePhotoClick(photo.id)}
          />
          {showHearts && (
            <div className="heart-icon" onClick={() => toggleLike(photo.id)}>
              <IconHeart filled={likedPhotos.includes(photo.id)} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
