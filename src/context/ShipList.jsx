import { createContext, useEffect, useState } from "react";

export const ShipList = createContext();

export const ShipListProvider = (props) => {
  const [shipData, setShipData] = useState([]);

  const fetchShips = () => {
    fetch("https://swapi.dev/api/starships/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return setShipData(data.results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchShips();
  }, []);

  return (
    <ShipList.Provider value={shipData}>{props.children}</ShipList.Provider>
  );
};
