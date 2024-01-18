import React, { createContext, useState, useContext } from 'react';


const FavoriteContext = createContext();
export const useFavorites = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (id) => {
    setFavorites((currentFavorites) => [...currentFavorites, id]);
  };

  const removeFavorite = (itemId) => {
    setFavorites((currentFavorites) => currentFavorites.filter((id) => id !== itemId));
  };

  const isFavorite = (itemId) => {
    return favorites.some((id) => id === itemId);
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
