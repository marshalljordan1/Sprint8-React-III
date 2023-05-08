const ShipDropdown = ({ shipInfo }) => {
  const id = shipInfo.url.slice(32, -1);
  const image = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

  return (
    <>
      <div className="dropdown-container">
        <h1 className="ship-title">{shipInfo.name.toUpperCase()}</h1>
        <img src={image} alt="NO PICTURE, THERE IS" />
        <div>
          <p>MODEL: {shipInfo.model.toUpperCase()}</p>
          <p>STARSHIP CLASS: {shipInfo.starship_class.toUpperCase()}</p>
          <p>MANUFACTURER: {shipInfo.manufacturer.toUpperCase()}</p>
          <p> COST: {shipInfo.code_in_credits}</p>
        </div>
        <div>
          <p>CREW: {shipInfo.crew}</p>
          <p>PASSENGER CAPACITY: {shipInfo.passengers.toUpperCase()}</p>
          <p> CONSUMABLES: {shipInfo.consumables.toUpperCase()}</p>
          <p>PILOTS: {shipInfo.pilots.length}</p>
        </div>
        <div>
          <p>LENGTH: {shipInfo.length}</p>
          <p>MAXIMUM ATMOSPHERING SPEED: {shipInfo.max_atomosphereing_speed}</p>
          <p>HYPERDRIVE RATING: {shipInfo.hyperdrive_rating}</p>
          <p>MAXIMUM SPEED IN REAL SPACE:{shipInfo.MGLT}</p>
        </div>
      </div>
    </>
  );
};

export default ShipDropdown;
