import React, { useState, useEffect } from "react";

const ListStarships = () => {
  const [shipData, setShipData] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/starships/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        setShipData(data.results);
        console.log(shipData);
      });
  });

  return (
    <>
      <ul className="starship-list">
        {shipData.map((result) => (
          <>
            <div className="ships">
              <li>{result.name}</li>
              <li>{result.model}</li>
            </div>
          </>
        ))}
      </ul>
    </>
  );
};

export default ListStarships;
