import { createContext, useState } from "react";
export const StoreContext = createContext();

const { Provider } = StoreContext;

export const Storage = ({ children }) => {
  const [beers, setBeers] = useState([]);
  const [liters, setLiters] = useState([]);
  const [quant, setQuant] = useState([]);
  const [packs, setPacks] = useState([]);

  function handleDeletePacks(id) {
    const filterPacks = packs.filter((item) => {
      return item.id !== id;
    });

    setBeers(filterPacks);
  }

  function handleDeleteBeer(id) {
    const filterBeer = beers.filter((item) => {
      return item.id !== id;
    });

    setBeers(filterBeer);
  }
  function handleDeleteLiters(id) {
    const filterLiters = liters.filter((item) => {
      return item.id !== id;
    });

    setLiters(filterLiters);
  }
  function handleDeleteQuant(id) {
    const filterQuant = quant.filter((item) => {
      return item.id !== id;
    });

    setQuant(filterQuant);
  }
  return (
    <Provider
      value={{
        beers,
        setBeers,
        liters,
        setLiters,
        handleDeleteBeer,
        handleDeleteQuant,
        handleDeleteLiters,
        handleDeletePacks,
        quant,
        setQuant,
        packs,
        setPacks,
      }}
    >
      {children}
    </Provider>
  );
};
