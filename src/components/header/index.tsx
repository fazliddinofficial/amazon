import React from "react";
import logo from "./image.png";

const Header = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-ul">
        <li>
          <img className="logo-img" src={logo} alt="img" />
        </li>
        <li className="header__navbar-li">
          <a href="#">
            Deliver to <br />
            Uzbekistan
          </a>
        </li>
        <li className="header__navbar-li">
          <button className="search-buttons-one">All</button>
          <input
            className="search-input"
            placeholder="Search Amazon"
            type="text"
          />
          <button type="submit" className="search-buttons-two">
            Search
          </button>
        </li>
        <li className="header__navbar-li">ENG</li>
        <li className="header__navbar-li">
          Hello, sign in <br />
          Accont & Lists
        </li>
        <li className="header__navbar-li">
          Returns <br />& Orders
        </li>
        <li className="header__navbar-li">Cart</li>
      </ul>
      <hr />
    </nav>
  );
};

export default Header;
