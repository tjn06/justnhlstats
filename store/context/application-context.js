import { createContext, useState } from 'react';

export const ApplicationContext = createContext({
  items: [],
  visited: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
  addVisited: (id) => {},
  removeVisited: (id) => {},
});

const ApplicationContextProvider = ({ children }) => {
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

  function addFavourite(id) {
      setFavourites((currentItems) => [...currentItems, id]);
  }

  function removeFavourite(idToRemvove) {
    setFavourites((currentItems) =>
      currentItems.filter((id) => id !== idToRemvove)
    );
  }

  const config = {
    favouriteList: favourites,
    vistedList: visited,
    add: addFavourite,
    remove: removeFavourite,
    addV : addVisited,
    removeV: removeVisited
  };

  return (
    <ApplicationContext.Provider value={config}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;
