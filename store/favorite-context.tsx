import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
});

export const FavoriteContextProvider = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState(Array<string>);

  const addFavorite = (id: string) => {
    setFavoriteMealIds((oldIds) => [...oldIds, id]);
  };
  
  const removeFavorite = (id: string) => {
    setFavoriteMealIds((oldIds) => oldIds.filter((e) => e !== id));
  };

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
