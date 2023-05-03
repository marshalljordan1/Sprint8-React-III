import { React, useContext, useEffect } from "react";
import { ShipList } from "../context/ShipList";

const ListStarships = () => {
  const shipList = useContext(ShipList);

  return (
    <>
      <div className="list-container">
        {shipList ? (
          shipList.map((ship) => (
            <ul className="starship-list" key={ship.name}>
              <li className="list-name">{ship.name}</li>
              <li className="list-model">{ship.model}</li>
            </ul>
          ))
        ) : (
          <p className="text">Loading...</p>
        )}
      </div>
    </>
  );
};

export default ListStarships;
