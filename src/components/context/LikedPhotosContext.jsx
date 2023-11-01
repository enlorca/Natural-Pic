import React, { createContext, useState, useContext } from "react";

const LikedPhotosContext = createContext();

export const LikedPhotosProvider = ({ children }) => {
  const [likedPhotos, setLikedPhotos] = useState([]);

  const toggleLike = (photo) => {
    setLikedPhotos((prevLikedPhotos) => {
      if (prevLikedPhotos.includes(photo)) {
        return prevLikedPhotos.filter((p) => p !== photo);
      } else {
        return [...prevLikedPhotos, photo];
      }
    });
  };

  return (
    <LikedPhotosContext.Provider value={{ likedPhotos, toggleLike }}>
      {children}
    </LikedPhotosContext.Provider>
  );
};

export const useLikedPhotos = () => {
  return useContext(LikedPhotosContext);
};
