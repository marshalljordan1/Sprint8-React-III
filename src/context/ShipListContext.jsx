import { createContext, useEffect, useState } from "react";

export const ShipListContext = createContext();

export const ShipListContextProvider = (props) => {
  const [shipData, setShipData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  let loading = false;
  const fetchShips = () => {
    if (loading === true) return;
    loading = true;
    setIsLoading(true);
    fetch(`https://swapi.dev/api/starships/?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          setShipData((prevShipData) => [...prevShipData, ...data.results]);
        }
      })
      .catch((error) => console.log(error));
    setIsLoading(false);
    loading = false;
  };

  const handleLoadMore = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (isLoading === false && scrollTop + clientHeight >= scrollHeight - 0) {
      if (shipData.length % 10 !== 0) {
        return;
      } else {
        setPage((prevPage) => prevPage + 1);
      }
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
