import { React, useContext, useState } from "react";
import { ShipListContext } from "../context/ShipListContext";
import ShipDropdown from "../components/ShipDropdown";

const ListStarships = () => {
  const shipList = useContext(ShipListContext);
  const [selectedShip, setSelectedShip] = useState(null);

  const handleClick = (ship) => {
    setSelectedShip(ship);
  };

  const generateId = (ship) => {
    // Combine the ship's name and its manufacturer to create a unique id
    return `${ship.name}-${ship.manufacturer}`;
  };

  return (
    <>
      {shipList ? (
        <>
          {shipList.map((ship) => {
            const id = generateId(ship);
            return (
              <div
                onClick={() => handleClick(ship)}
                className="list-container"
                key={id}
                id={id}
              >
                <ul className="starship-list">
                  <li className="list-name">{ship.name}</li>
                  <li className="list-model">{ship.model}</li>
                </ul>
                {selectedShip === ship && (
                  <ShipDropdown shipInfo={selectedShip} />
                )}
              </div>
            );
          })}
        </>
      ) : (
        <p className="text">Loading...</p>
      )}
    </>
  );
};

export default ListStarships;
