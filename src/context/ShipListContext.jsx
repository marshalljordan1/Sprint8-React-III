import { createContext, useEffect, useState } from "react";

export const ShipListContext = createContext();

export const ShipListContextProvider = (props) => {
  const [shipData, setShipData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchShips = () => {
    setIsLoading(true);
    fetch(`https://swapi.dev/api/starships/?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.next);
        if (data.results && data.results.length > 0) {
          console.log(data);
          setShipData((prevShipData) => [...prevShipData, ...data.results]);
          if (data.next) {
            setPage(page + 1);
          }
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  const handleLoadMore = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (!isLoading && scrollTop + clientHeight >= scrollHeight - 5) {
      if (shipData.length % 10 !== 0 || page === 1) {
        return;
      }
      fetchShips();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleLoadMore);
    return () => {
      window.removeEventListener("scroll", handleLoadMore);
    };
  }, []);

  useEffect(() => {
    fetchShips();
  }, [page]);

  return (
    <ShipListContext.Provider value={shipData}>
      {props.children}
    </ShipListContext.Provider>
  );
};