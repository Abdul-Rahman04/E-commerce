import { NavLink } from "react-router-dom";
import React from "react";
import "./navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = ({ size }) => {
  return (
    <nav className="nava">
      <ul className="ula">
        <li>
          <NavLink to="/" className="home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movie" className="movie">
            Movie
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/carte" className="cart">
            <AiOutlineShoppingCart />
          </NavLink>
          <span className="span">{size}</span>
        </li>
        <li>
          <NavLink></NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
