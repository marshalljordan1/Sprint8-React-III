import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="nav-links">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/Starships" className="nav-item">
          Starships
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
