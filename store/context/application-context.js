import { createContext, useState } from 'react';

// Steg 1. skapar vi vår context function
// och definierar data samt funktioner...
export const ApplicationContext = createContext({
  // Data som hanteras centralt...
  items: [],
  visited: [],
  // funktioner som manipulerar datat
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
  addVisited: (id) => {},
  removeVisited: (id) => {},
});

// Steg 2. Skapar vi vår provider...
const ApplicationContextProvider = ({ children }) => {
  // Använd useState för att signalera ändringar i datat...
  const [favourites, setFavourites] = useState([]);
  const [visited, setVisited] = useState([]);


  function addVisited(id) {
    console.log("tillagd visited")
      setVisited((currentItems) => [...currentItems, id]);
  }

  function removeVisited(idToRemvove) {
    setVisited((currentItems) =>
      currentItems.filter((id) => id !== idToRemvove)
    );
  }

  // Skapar funktioner som manipulerar tillståndet(datat)...
  function addFavourite(id) {
/*     console.log("detta är state", favourites )
      console.log("Lägg till favorit-id:", id) */
      setFavourites((currentItems) => [...currentItems, id]);
    /* console.log(favourites) */
  }

  function removeFavourite(idToRemvove) {
    setFavourites((currentItems) =>
      currentItems.filter((id) => id !== idToRemvove)
    );
  }

  // Exponera tillståndet och funktioner
  const config = {
    favouriteList: favourites,
    vistedList: visited,
    add: addFavourite,
    remove: removeFavourite,

    addV : addVisited,
    removeV: removeVisited
  };

  // Skapa JSX...
  return (
    <ApplicationContext.Provider value={config}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;
