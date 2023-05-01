import React from "react";
import logo from "../images/star-wars-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header-container">
        <div className="logo-container">
          <img className="logo" src={logo} alt="starwars logo" />
        </div>
        <div className="login-container">
          <Link to="/login" className="login" href="">
            Log in
          </Link>
          <Link to="/sign-up" className="signup" href="">
            Sign up
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
