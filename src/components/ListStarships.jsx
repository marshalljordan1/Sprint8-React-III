import { React, useContext, useEffect, useState } from "react";
import { ShipListContext } from "../context/ShipListContext";
import ShipDropdown from "../components/ShipDropdown";

const ListStarships = () => {
  const shipList = useContext(ShipListContext);
  const [selectedShip, setSelectedShip] = useState(null);

  const handleClick = (ship) => {
    setSelectedShip(ship);
  };

  return (
    <>
      {shipList ? (
        <>
          {shipList.map((ship) => {
            return (
              <div
                onClick={() => handleClick(ship)}
                className="list-container"
                key={ship.name}
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
