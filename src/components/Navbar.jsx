import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="nav-links">
        <Link to="/" className="nav-home">
          HOME
        </Link>
        <Link to="/Starships" className="nav-starships">
          STARSHIPS
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
