import { createContext, useCallback, useContext, useState } from "react";

const FavouritesContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

export const FavouritesProvider = ({ children }) => {
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);

  const addFavourite = (id) => {
    setFavouriteMealIds((currentFavouriteIds) => [...currentFavouriteIds, id]);
  };

  const removeFavourite = (id) => {
    setFavouriteMealIds((currentFavouriteIds) =>
      currentFavouriteIds.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favouriteMealIds,
    addFavourite,
    removeFavourite,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourite = () => {
  return useContext(FavouritesContext);
};
