import { useContext, useState } from "react";
import { ShipListContext } from "../context/ShipListContext";
import ShipDropdown from "./ShipDropdown";

const ListStarships = () => {
  const shipList = useContext(ShipListContext);

  const [selectedShip, setSelectedShip] = useState(null);

  const handleShipClick = (ship) => {
    setSelectedShip(ship);
  };

  return (
    <>
      {shipList ? (
        <>
          {shipList.map((ship) => (
            <div
              onClick={() => handleShipClick(ship)}
              className="list-container"
              key={ship.url}
            >
              <ul className="starship-list" key={ship.url}>
                <li className="list-name">{ship.name.toUpperCase()}</li>
                <li className="list-model">{ship.model.toUpperCase()}</li>
              </ul>
              {selectedShip && selectedShip.name === ship.name && (
                <ShipDropdown shipInfo={selectedShip} />
              )}
            </div>
          ))}
        </>
      ) : (
        <p className="text">Loading...</p>
      )}
    </>
  );
};

export default ListStarships;
